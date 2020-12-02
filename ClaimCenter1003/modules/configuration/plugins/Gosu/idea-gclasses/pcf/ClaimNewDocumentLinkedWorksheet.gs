package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newdocument/ClaimNewDocumentLinkedWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimNewDocumentLinkedWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimNewDocumentLinkedWorksheet, {Claim}, 0)
  }
  
  static function createDestination (Claim :  Claim, docInit :  util.document.DocumentInitWrapper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimNewDocumentLinkedWorksheet, {Claim, docInit}, 1)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNewDocumentLinkedWorksheet, {Claim}, 0).goInWorkspace()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim, docInit :  util.document.DocumentInitWrapper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNewDocumentLinkedWorksheet, {Claim, docInit}, 1).goInWorkspace()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNewDocumentLinkedWorksheet, {Claim}, 0).push()
  }
  
  static function push (Claim :  Claim, docInit :  util.document.DocumentInitWrapper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNewDocumentLinkedWorksheet, {Claim, docInit}, 1).push()
  }
  
  
}