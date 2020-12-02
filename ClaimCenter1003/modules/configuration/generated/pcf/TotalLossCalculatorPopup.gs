package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/TotalLossCalculatorPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TotalLossCalculatorPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (VehicleIncident :  VehicleIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TotalLossCalculatorPopup, {VehicleIncident}, 0)
  }
  
  static function push (VehicleIncident :  VehicleIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TotalLossCalculatorPopup, {VehicleIncident}, 0).push()
  }
  
  
}