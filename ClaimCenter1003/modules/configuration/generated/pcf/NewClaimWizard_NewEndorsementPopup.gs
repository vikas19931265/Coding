package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimWizard_NewEndorsementPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimWizard_NewEndorsementPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Policy :  Policy) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewClaimWizard_NewEndorsementPopup, {Policy}, 0)
  }
  
  function pickValueAndCommit (value :  Endorsement) : void {
    __widgetOf(this, pcf.NewClaimWizard_NewEndorsementPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Policy :  Policy) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimWizard_NewEndorsementPopup, {Policy}, 0).push()
  }
  
  
}