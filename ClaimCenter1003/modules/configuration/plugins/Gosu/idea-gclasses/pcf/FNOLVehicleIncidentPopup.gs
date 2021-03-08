package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLVehicleIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FNOLVehicleIncidentPopup, {Claim, Wizard}, 1)
  }
  
  static function createDestination (VehicleIncident :  VehicleIncident, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FNOLVehicleIncidentPopup, {VehicleIncident, Wizard}, 0)
  }
  
  function pickValueAndCommit (value :  VehicleIncident) : void {
    __widgetOf(this, pcf.FNOLVehicleIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Claim :  Claim, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLVehicleIncidentPopup, {Claim, Wizard}, 1).push()
  }
  
  static function push (VehicleIncident :  VehicleIncident, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLVehicleIncidentPopup, {VehicleIncident, Wizard}, 0).push()
  }
  
  
}