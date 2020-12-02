package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/shared/ClaimSnapshotCovTerm800Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotCovTerm800Popup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (CovTerm :  dynamic.Dynamic) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSnapshotCovTerm800Popup, {CovTerm}, 0)
  }
  
  static function push (CovTerm :  dynamic.Dynamic) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSnapshotCovTerm800Popup, {CovTerm}, 0).push()
  }
  
  
}