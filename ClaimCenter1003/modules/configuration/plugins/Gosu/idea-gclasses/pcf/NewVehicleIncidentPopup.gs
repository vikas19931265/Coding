package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/vehicle/NewVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewVehicleIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewVehicleIncidentPopup, {Claim}, 0)
  }
  
  function pickValueAndCommit (value :  VehicleIncident) : void {
    __widgetOf(this, pcf.NewVehicleIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewVehicleIncidentPopup, {Claim}, 0).push()
  }
  
  
}