package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLContactPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLContactPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim, claimContact :  ClaimContact, role :  ContactRole, vehicleIncident :  VehicleIncident, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FNOLContactPopup, {claim, claimContact, role, vehicleIncident, Wizard}, 0)
  }
  
  function pickValueAndCommit (value :  ClaimContact) : void {
    __widgetOf(this, pcf.FNOLContactPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim, claimContact :  ClaimContact, role :  ContactRole, vehicleIncident :  VehicleIncident, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLContactPopup, {claim, claimContact, role, vehicleIncident, Wizard}, 0).push()
  }
  
  
}