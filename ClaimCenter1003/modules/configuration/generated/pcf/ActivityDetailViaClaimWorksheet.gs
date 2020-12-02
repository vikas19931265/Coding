package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/activity/ActivityDetailViaClaimWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ActivityDetailViaClaimWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Activity :  Activity) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ActivityDetailViaClaimWorksheet, {Claim, Activity}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailViaClaimWorksheet, {Claim, Activity}, 0).goInWorkspace()
  }
  
  static function push (Claim :  Claim, Activity :  Activity) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityDetailViaClaimWorksheet, {Claim, Activity}, 0).push()
  }
  
  
}