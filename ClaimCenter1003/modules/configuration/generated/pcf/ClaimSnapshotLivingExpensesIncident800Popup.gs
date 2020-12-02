package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotLivingExpensesIncident800Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotLivingExpensesIncident800Popup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, IncidentParam :  dynamic.Dynamic) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSnapshotLivingExpensesIncident800Popup, {Claim, IncidentParam}, 0)
  }
  
  static function push (Claim :  Claim, IncidentParam :  dynamic.Dynamic) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSnapshotLivingExpensesIncident800Popup, {Claim, IncidentParam}, 0).push()
  }
  
  
}