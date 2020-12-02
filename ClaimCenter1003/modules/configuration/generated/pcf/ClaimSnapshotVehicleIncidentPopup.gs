package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/ClaimSnapshotVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotVehicleIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Incident :  dynamic.Dynamic) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSnapshotVehicleIncidentPopup, {Claim, Incident}, 0)
  }
  
  static function push (Claim :  Claim, Incident :  dynamic.Dynamic) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSnapshotVehicleIncidentPopup, {Claim, Incident}, 0).push()
  }
  
  
}