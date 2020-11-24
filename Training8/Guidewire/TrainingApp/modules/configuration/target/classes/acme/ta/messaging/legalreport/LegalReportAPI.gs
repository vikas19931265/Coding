package acme.ta.messaging.legalreport

uses gw.api.database.Query
uses gw.api.util.DateUtil
uses gw.transaction.Transaction
uses gw.xml.ws.annotation.WsiWebService

uses java.util.Date

@WsiWebService
class LegalReportAPI {
  function createLegalCase(contactID: String, caseDate: Date, plaintiff: String, caseType: String, status: String): void {
    var contactQuery = Query.make(ABContact)
    contactQuery.compare("PublicID", Equals, contactID)
    var resultsObj = contactQuery.select().AtMostOneRow
    if (resultsObj != null) {
      Transaction.runWithNewBundle(\bundle -> {
        bundle.add(resultsObj)
        var newCase = new LegalCase()
        newCase.FileDate = caseDate
        newCase.Plaintiff = plaintiff
        newCase.CaseType = caseType
        newCase.Status = status
        resultsObj.addToLegalCases(newCase)
      })
    }
  }

  function acknowledgeMessage(messageID: String, statusCode: int): void {
    var messageQuery = Query.make(Message)
    messageQuery.compare("SenderRefID", Equals, messageID)
    var aMessage = messageQuery.select().AtMostOneRow
    if (aMessage != null && statusCode == 1) {
      Transaction.runWithNewBundle(\bundle -> {
        bundle.add(aMessage)
        // message was successfully processed
        aMessage.reportAck()
        // make additional changes to triggering entity
        var relatedContact = aMessage.MessageRoot as ABContact
        bundle.add(relatedContact)
        relatedContact.LegalCaseReportStatus = LegalCaseReportStatus.TC_REQUESTED_RECEIVED
        relatedContact.LastLegalCaseReportDate =  DateUtil.currentDate()
      })
    }
  }
}
