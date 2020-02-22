package trainingapp.demo.messageack

uses trainingapp.demo.messageack.MessageAckUtil

class MessageAckPage {

  public static function processAcknowledgement (destination: String, senderRefID : String,
                               replyType : String, errorCategory: String,   
                               vendorProfileCode : String ) : String {

    // Check for user errors from the MessageAcknowledgements page
    if (destination == null) {
      return "You must specify a destination."
    }
    if (destination == "Bank Account Verification" and senderRefID == null) {
      return "For Bank Account Verification, you must specify a Message ID."
    }
    if (senderRefID == null) {
      return "You must specify a SenderRefID."
    }  
    if (replyType == null) {
      return "You must specify a reply type."
    }
    if (destination == "Vendor Recommendation" and replyType == "1: Positive Acknowledgement" and vendorProfileCode == null) {
      return "For positive acknowledgements of vendor recommendations, you must specify a vendor profile code."
    }
    if ((replyType == "2: Retryable Error (and retry)" or replyType == "3: Retryable Error (no retry)") and errorCategory == null) {
      return "For retryable errors, you must specify an error category."
    }

    var resultString = ""
    
    // all reply work works with messages except for duplicates
    if (replyType != "5: Duplicate") {   
      var aMessage : Message = getOriginalMessage(destination, senderRefID)

      if (aMessage == null) {
        // production code would throw an exception here
        resultString = "There is no message with the given ID for the given destination in the Message table."
      } else { // begin message-was-found code

        gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
          aMessage = bundle.add(aMessage)

          switch (replyType) {
            case "1: Positive Acknowledgement":
              // For positive acknowledgements, report acknowledgement and do any
              // destination-specific data updates. 
                    
              aMessage.reportAck()
                                  
              // Vendor Recommendations need the vendor profile code set.
              if (destination == "Vendor Recommendation") {
                aMessage.ABContact.VendorProfileCode = vendorProfileCode
              }          
              // Legal Case Reports need the status and last report date updated.
              if (destination == "Legal Case Report") {
                var relatedContact = aMessage.MessageRoot as ABContact
                relatedContact.LegalCaseReportStatus = "requested_received"
                relatedContact.LastLegalCaseReportDate = gw.api.util.DateUtil.currentDate() 
              }                    
              resultString = "Message " + senderRefID + " acknowledged."
              break
          
            case "2: Retryable Error (and retry)":
              resultString = MessageAckUtil.reportRetryableError(aMessage, errorCategory)
              break
          
            case "3: Retryable Error (no retry)":
              resultString = MessageAckUtil.reportRetryableErrorNoRetry(aMessage, errorCategory)
              break
          
            case "4: Non-Retryable Error":
              resultString = MessageAckUtil.reportNonRetryableError(aMessage)
              break
          
            default:
              resultString = "The selected reply type is unknown."
            } // switch

        // runWithNewEntityBundle() inherently commits the bundle
        }, "su")
        
      } // end message-was-found code    
    } // end code that works with non-duplicates
    
    else { // response is a duplicate
      resultString = MessageAckUtil.reportDuplicate(senderRefID)
      } // end code that works with duplicates
      
    return resultString
       
  } // end processAcknowledgement 

/* This function retrieves the message to which the reply corresponds.
*/    
  static function getOriginalMessage ( destination: String, uniqueID : String ) : Message {

    var queryObj = gw.api.database.Query.make(Message)

    // Bank account verification is acknowledged synchronously. Therefore, SenderRefID is not
    // set. For this destination, the unique ID for messages is the Message ID. All other
    // destinations make use of senderRefIDs.
    if (destination == "Bank Account Verification") {
      var queryKey = new Key(ABContact, uniqueID as long)
      queryObj.compare ("ID", Equals, queryKey)
    } else {
      queryObj.compare ("SenderRefID", Equals, uniqueID )
    }
    // Constrain query to messages pertaining to the appropriate destination, if possible.
    switch (destination) {
      case "Bank Account Verification":
        queryObj.compare ("DestinationID", Equals, 13)
        break
      case "Vendor Recommendation":
        queryObj.compare ("DestinationID", Equals, 14)
        break
      case "Message Generator":
        queryObj.compare ("DestinationID", Equals, 21)
        break
      case "Safe Ordering Demo":
        queryObj.compare ("DestinationID", Equals, 20)
        break
      case "Student-Defined":
        // Query cannot be constrained by destination ID is destination is student-defined
        break
    }
    var resultsObj = queryObj.select()
    if (resultsObj.Count == 1) {
      return resultsObj.AtMostOneRow
    } else {
      return null
    }
  } // end getOriginalMessage

}


