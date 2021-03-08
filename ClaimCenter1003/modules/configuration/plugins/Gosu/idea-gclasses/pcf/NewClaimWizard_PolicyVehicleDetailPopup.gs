package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimWizard_PolicyVehicleDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimWizard_PolicyVehicleDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (VehicleRU :  VehicleRU, Policy :  Policy) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewClaimWizard_PolicyVehicleDetailPopup, {VehicleRU, Policy}, 0)
  }
  
  static function push (VehicleRU :  VehicleRU, Policy :  Policy) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimWizard_PolicyVehicleDetailPopup, {VehicleRU, Policy}, 0).push()
  }
  
  
}