package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/util/ClaimMetricsEntryPointForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimMetricsEntryPointForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claimNumber :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimMetricsEntryPointForward, {claimNumber}, 0)
  }
  
  static function drilldown (claimNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimMetricsEntryPointForward, {claimNumber}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (claimNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimMetricsEntryPointForward, {claimNumber}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (claimNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimMetricsEntryPointForward, {claimNumber}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (claimNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimMetricsEntryPointForward, {claimNumber}, 0).goInWorkspace()
  }
  
  static function printPage (claimNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimMetricsEntryPointForward, {claimNumber}, 0).printPage()
  }
  
  static function push (claimNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimMetricsEntryPointForward, {claimNumber}, 0).push()
  }
  
  
}