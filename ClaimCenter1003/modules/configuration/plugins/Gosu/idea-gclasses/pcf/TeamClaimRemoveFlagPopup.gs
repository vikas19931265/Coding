package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/summary/TeamClaimRemoveFlagPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TeamClaimRemoveFlagPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TeamClaimRemoveFlagPopup, {Claim}, 0)
  }
  
  static function createDestination (Claim :  Claim, ViaTeamScreen :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TeamClaimRemoveFlagPopup, {Claim, ViaTeamScreen}, 1)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TeamClaimRemoveFlagPopup, {Claim}, 0).push()
  }
  
  static function push (Claim :  Claim, ViaTeamScreen :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TeamClaimRemoveFlagPopup, {Claim, ViaTeamScreen}, 1).push()
  }
  
  
}