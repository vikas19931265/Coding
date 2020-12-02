package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotDwellingIncident800Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotDwellingIncident800Popup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Incident :  dynamic.Dynamic) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSnapshotDwellingIncident800Popup, {Claim, Incident}, 0)
  }
  
  static function push (Claim :  Claim, Incident :  dynamic.Dynamic) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSnapshotDwellingIncident800Popup, {Claim, Incident}, 0).push()
  }
  
  
}