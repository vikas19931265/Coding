package trainingapp.demo.messageack

uses gw.api.database.Query
uses gw.api.util.DateUtil
uses gw.transaction.Transaction

class MessageAckUtil {
  /* This function takes a message, determines if the error can be retried, and then
     reports the error as retryable.
  */

  static function reportRetryableError(aMessage: Message, errorCategory: ErrorCategory): String {
    // If the message has not been retried the maximum number of retry times,
    // retry the message. The retry should be attempted X minutes from now,
    // where X is the number of times the message has been tried. (For the
    // first retry, send one minute from now. For the second retry, send two
    // minutes from now, and so on.)
    var maxRetries = ScriptParameters.MaxRetriesForRetryableMessage > 0 ? 25 : 1
    if (aMessage.RetryCount < maxRetries) {
      var backOffMultiplier = aMessage.RetryCount + 1
      var waitTime: int = backOffMultiplier * 60
      // wait time in seconds
      var retryTime = DateUtil.addSeconds(DateUtil.currentDate(), waitTime)
      // report the message error with retryTime
      aMessage.reportError(retryTime)
      return ("Error reported for message " + aMessage.SenderRefID  + "; retry #" + (aMessage.RetryCount + 1)  + " set for " + retryTime.formatDateTime(SHORT, SHORT))
    } else {
      // If the message HAS been retried the maximumnumber of times, report
      // the error with an error category and then alert the administrator.
      aMessage.reportError(errorCategory)
      alertAdminAboutMessageError(aMessage, true)
      return ("Error reported for message " + aMessage.SenderRefID  + "; retry max reached.")
    }
  }

  /* This function takes a message and reports it as retryable but does not attempt to retry
     it. It is provided for educationl purposes only.
  */

  static function reportRetryableErrorNoRetry(aMessage: Message, errorCategory: ErrorCategory): String {
    // You would typically not see this sort of code in a production system. The message
    // should be retried unless the max retries had been exceeded.) It has been provided solely
    // so students can see what a message looks like when an error has been reported
    // and no further action is taken on the message.
    aMessage.reportError(errorCategory)
    alertAdminAboutMessageError(aMessage, true)
    return ("Error reported for message " + aMessage.SenderRefID + ". No retry requested.")
  }

  /* This function reports a message as nonretryable.
  */

  static function reportNonRetryableError(aMessage: Message): String {
    // Report a non-retryable error and then alert the administrator. Keep
    // in mind that this prevents the message from being further retried.
    // This code should rarely get executed.
    // CurrDev messaging lesson update for deprecated method.
    aMessage.reportNonRetryableError()
    alertAdminAboutMessageError(aMessage, false)
    return ("Non-retryable error reported for message " + aMessage.SenderRefID + ".")
  }

  /* This function reports a message as a duplicate.
  */

  static function reportDuplicate(senderRefID: String): String {
    var aMessageHistory: MessageHistory = null
    var resultString = ""
    var queryObj = Query.make(MessageHistory)
    queryObj.compare("SenderRefID", Equals, senderRefID)
    var resultsObj = queryObj.select()
    if (resultsObj.Count == 1) {
      aMessageHistory = resultsObj.AtMostOneRow
    }
    if (aMessageHistory == null) {
      // production code would throw an exception here
      resultString = "There is no MessageHistory with the given ID in the MessageHistory table."
    } else {
      // begin MessageHistory-was-found code
      Transaction.runWithNewBundle(\bundle -> {
        aMessageHistory = bundle.add(aMessageHistory)
        aMessageHistory.reportDuplicate()
        //runWithNewBundle() inherently commits the bundle
      }, "su")
      resultString = ("Duplicate reported for MessageHistory " + aMessageHistory.SenderRefID + ".")
    }
    return resultString
  }

  /* This function alerts the administrator to the fact that there is a message for which an
     error has been reported and the message has been sent the maximum number of times.
  */

  static function alertAdminAboutMessageError(aMessage: Message, isRetryableError: boolean): void {
    // In a production environment, a method like this would send an email to the admin
    // or create an activity that was assigned to him or her. TrainingApp does not have
    // access to an email server, and activities are not fully enabled. So, this method
    // simply prints the alert to the console.
    if (isRetryableError) {
      print("ALERT: Message has exceed max tries!")
    } else {
      print("ALERT: Message reported as non-retryable!")
    }
    print("STATS: ID " + aMessage.ID + " for destination " + aMessage.DestinationID + " using SenderRefID: " + aMessage.SenderRefID)
    // if message has a sender ref ID, print history of messages sent
    if (aMessage.SenderRefID != null) {
      var queryObj = Query.make(MessageHistory)
      queryObj.compare("SenderRefID", Equals, aMessage.SenderRefID)
      var resultSet = queryObj.select().orderByDescending(\row -> row.SendTime)
      for (currentMessageHistory in resultSet index i) {
        print("       Attempt " + i + " sent at " + currentMessageHistory.SendTime.formatDateTime(SHORT, SHORT))
      }
    }
    print("------------------------------------")
  }

  // end alertAdminAboutMessageError

}
