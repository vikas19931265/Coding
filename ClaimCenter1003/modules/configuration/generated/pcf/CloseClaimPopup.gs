package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/CloseClaimPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CloseClaimPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CloseClaimPopup, {Claim}, 0)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CloseClaimPopup, {Claim}, 0).push()
  }
  
  
}