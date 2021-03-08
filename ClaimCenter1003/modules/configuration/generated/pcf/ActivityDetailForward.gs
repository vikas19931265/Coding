package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/activity/ActivityDetailForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ActivityDetailForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Activity :  Activity) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ActivityDetailForward, {Claim, Activity}, 0)
  }
  
  static function drilldown (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailForward, {Claim, Activity}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailForward, {Claim, Activity}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailForward, {Claim, Activity}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailForward, {Claim, Activity}, 0).goInWorkspace()
  }
  
  static function printPage (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailForward, {Claim, Activity}, 0).printPage()
  }
  
  static function push (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailForward, {Claim, Activity}, 0).push()
  }
  
  
}