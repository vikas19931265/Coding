package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/documents/PickExistingDocumentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PickExistingDocumentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PickExistingDocumentPopup, {Claim}, 0)
  }
  
  function pickValueAndCommit (value :  Document) : void {
    __widgetOf(this, pcf.PickExistingDocumentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PickExistingDocumentPopup, {Claim}, 0).push()
  }
  
  
}