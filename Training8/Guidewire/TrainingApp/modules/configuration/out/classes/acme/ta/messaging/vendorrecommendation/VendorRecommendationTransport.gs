package acme.ta.messaging.vendorrecommendation

uses gw.plugin.messaging.MessageTransport
uses java.io.BufferedWriter
uses java.io.FileWriter
uses java.io.File

class VendorRecommendationTransport implements MessageTransport {
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

  /*  Vendor recommendation payloads are sent to a file that is named
      "VendorXXX.txt" where XXX is the vendor's internal ID. The file
      is created in the c:/Guidewire directory.
  */

  override function send(aMessage: Message, transformedPayload: String) {
    print("\n*** Stage 3(b) -- Sending the message ***")
    print("    Transport plugin: VendorRecommendationTransport -- send()")
    // send payload to file
    print("    Sending payload to file c:/Guidewire/Vendor" + (aMessage.ABContact as Key) + ".txt")
    var file = "c:/Guidewire/Vendor" + (aMessage.ABContact as Key) + ".txt"
    var output = new BufferedWriter(new FileWriter(new File(file)))
    output.write(transformedPayload)
    output.close()
  }
}

