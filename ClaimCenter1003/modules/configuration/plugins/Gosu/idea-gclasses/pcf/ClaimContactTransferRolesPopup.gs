package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/partiesinvolved/ClaimContactTransferRolesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimContactTransferRolesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim, targetContact :  ClaimContact) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimContactTransferRolesPopup, {claim, targetContact}, 0)
  }
  
  static function push (claim :  Claim, targetContact :  ClaimContact) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimContactTransferRolesPopup, {claim, targetContact}, 0).push()
  }
  
  
}