package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/archive/ArchiveClaimRetrievePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ArchiveClaimRetrievePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (restoreSet :  gw.api.claim.ClaimArchiveRestoreSet) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ArchiveClaimRetrievePopup, {restoreSet}, 0)
  }
  
  static function push (restoreSet :  gw.api.claim.ClaimArchiveRestoreSet) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ArchiveClaimRetrievePopup, {restoreSet}, 0).push()
  }
  
  
}