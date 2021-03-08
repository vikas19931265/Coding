package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/SimpleClaimForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SimpleClaimForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ClaimInfo :  ClaimInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.SimpleClaimForward, {ClaimInfo}, 0)
  }
  
  static function drilldown (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SimpleClaimForward, {ClaimInfo}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SimpleClaimForward, {ClaimInfo}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SimpleClaimForward, {ClaimInfo}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SimpleClaimForward, {ClaimInfo}, 0).goInWorkspace()
  }
  
  static function printPage (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SimpleClaimForward, {ClaimInfo}, 0).printPage()
  }
  
  static function push (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SimpleClaimForward, {ClaimInfo}, 0).push()
  }
  
  
}