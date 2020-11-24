package acme.ta.messaging.bank
uses gw.plugin.messaging.MessageTransport

class BankAccountVerificationTransport implements MessageTransport {
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

  /*  Back account payloads are simply "sent" to the console (via print statements).
      For educational purposes, the method also identifies if the payload was transformed
      in the beforeSend method or not. Finally, all messages are automatically acknowledged
      unless for some reason the routing number is null. If the routing number starts with
      "000", the bank account is marked as invalid. Otherwise, it is verified.
  */

  override function send(aMessage: Message,
                         transformedPayload: String) {
    print("\n*** Stage 3(b) -- Sending the message ***")
    print("    Transport plugin: BankAccountVerificationTransport -- send()")
    if (aMessage.Payload == transformedPayload) {
      print("    The Request Plugin did NOT transform the payload")
    } else {
      print("    The Request Plugin transformed the payload")
    }
    // send payload to console
    print("    Sending payload to console for Message ID "  + aMessage.ID + " as: \n" + transformedPayload)
    // Synchronously acknowledging message that is sent to the console
    print("\n*** Stage 4 -- Message acknowledgement ***")
    print("    Transport plugin: BankAccountVerificationTransport -- send()")
    var isVerified = !((aMessage.MessageRoot as BankAccount).RoutingNumber.startsWith("000"))
    if (isVerified == null) {
      // A problem occurred with the message.
      aMessage.reportError()
      print("    Error: No response received for message " + aMessage.ID)
    } else {
      // Acknowledge message synchronously and update bank account as appropriate.
      if (isVerified != null) {
          aMessage.reportAck()
          print("    Acknowledged Message ID " + aMessage.ID + " synchronously")
          if (isVerified) {
            (aMessage.MessageRoot as BankAccount).IsVerified = VerificationStatus.TC_VERIFIED
            print("    Verification status for IsVerified field is Verified")
          } else {
            (aMessage.MessageRoot as BankAccount).IsVerified = VerificationStatus.TC_INVALID
            print("    Verification status for IsVerified field is Invalid")
          }
      }
    }
  }
}


