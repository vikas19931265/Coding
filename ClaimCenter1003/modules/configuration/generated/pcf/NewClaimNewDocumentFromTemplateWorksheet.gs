package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newdocument/NewClaimNewDocumentFromTemplateWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimNewDocumentFromTemplateWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewClaimNewDocumentFromTemplateWorksheet, {Claim}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimNewDocumentFromTemplateWorksheet, {Claim}, 0).goInWorkspace()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimNewDocumentFromTemplateWorksheet, {Claim}, 0).push()
  }
  
  
}