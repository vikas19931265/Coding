package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimWizard_NewStatCodePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimWizard_NewStatCodePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Policy :  Policy) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewClaimWizard_NewStatCodePopup, {Policy}, 0)
  }
  
  function pickValueAndCommit (value :  StatCode) : void {
    __widgetOf(this, pcf.NewClaimWizard_NewStatCodePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Policy :  Policy) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimWizard_NewStatCodePopup, {Policy}, 0).push()
  }
  
  
}