package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotPolicyLocation800Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotPolicyLocation800Popup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, PolicyLocation :  dynamic.Dynamic) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSnapshotPolicyLocation800Popup, {Claim, PolicyLocation}, 0)
  }
  
  static function push (Claim :  Claim, PolicyLocation :  dynamic.Dynamic) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSnapshotPolicyLocation800Popup, {Claim, PolicyLocation}, 0).push()
  }
  
  
}