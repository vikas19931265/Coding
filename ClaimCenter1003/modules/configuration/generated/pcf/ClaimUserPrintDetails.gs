package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/partiesinvolved/print/ClaimUserPrintDetails.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimUserPrintDetails extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim, claimUserModel :  ClaimUserModel) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimUserPrintDetails, {claim, claimUserModel}, 0)
  }
  
  static function drilldown (claim :  Claim, claimUserModel :  ClaimUserModel) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimUserPrintDetails, {claim, claimUserModel}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (claim :  Claim, claimUserModel :  ClaimUserModel) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimUserPrintDetails, {claim, claimUserModel}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (claim :  Claim, claimUserModel :  ClaimUserModel) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimUserPrintDetails, {claim, claimUserModel}, 0).goInMain()
  }
  
  static function printPage (claim :  Claim, claimUserModel :  ClaimUserModel) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimUserPrintDetails, {claim, claimUserModel}, 0).printPage()
  }
  
  static function push (claim :  Claim, claimUserModel :  ClaimUserModel) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimUserPrintDetails, {claim, claimUserModel}, 0).push()
  }
  
  
}