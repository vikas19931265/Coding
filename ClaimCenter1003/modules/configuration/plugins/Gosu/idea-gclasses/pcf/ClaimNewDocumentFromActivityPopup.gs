package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/activity/newdocument/ClaimNewDocumentFromActivityPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimNewDocumentFromActivityPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Activity :  Activity, Template :  gw.plugin.document.IDocumentTemplateDescriptor) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimNewDocumentFromActivityPopup, {Activity, Template}, 0)
  }
  
  static function push (Activity :  Activity, Template :  gw.plugin.document.IDocumentTemplateDescriptor) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNewDocumentFromActivityPopup, {Activity, Template}, 0).push()
  }
  
  
}