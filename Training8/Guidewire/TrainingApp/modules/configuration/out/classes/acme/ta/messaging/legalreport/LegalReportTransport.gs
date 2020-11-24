package acme.ta.messaging.legalreport
uses gw.plugin.messaging.MessageTransport
uses trainingapp.demo.messageack.MessageAckUtil

class LegalReportTransport implements MessageTransport {
  construct() {
  }

  override function resume() {
    //## todo: Implement me
  }

  override function setDestinationID(p0: int) {
    //## todo: Implement me
  }

  override function shutdown() {
    //## todo: Implement me
  }

  override function suspend() {
    //## todo: Implement me
  }

  override function send(aMessage: Message, transformedPayload: String) {
    print("\n*** Stage 3(b) -- Sending the message ***")
    print("    Transport plugin: LegalReportTransport -- send()")
    // Create web service
    var API = new acme.ta.messaging.legalreport.legalreportwsc.legalreportapi.LegalReportAPI()
    // setting web service authentication properties
    API.Config.Http.Authentication.Basic.Username = "ExternalAppUser"
    API.Config.Http.Authentication.Basic.Password = "gw"
    try {
      print("    Sending payload to web service " + aMessage.ID )
      API.submitReportRequest(transformedPayload)
    } catch (e) {
      var result: String
      // If the external application is down, report the message as a retryable error.
      if (e.Message.startsWith("java.net.ConnectException")) {
        result = MessageAckUtil.reportRetryableError(aMessage, ErrorCategory.TC_NO_CONNECTION)
        print(result)
      } else {
        // If the user authentication information is bad, report the message as a non-retryable error.
        if (e.Message.startsWith("gw.xml.ws.WsiAuthenticationException")) {
          result = MessageAckUtil.reportNonRetryableError(aMessage)
          print(result)
        } else {
          print("Unexpected exception caught. Message " + aMessage.SenderRefID + " has not been processed.")
        }
      }
    }
    // end catch
  }

  // end send()

}
