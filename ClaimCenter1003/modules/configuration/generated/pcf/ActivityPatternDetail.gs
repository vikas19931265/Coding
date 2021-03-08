package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/activitypatterns/ActivityPatternDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ActivityPatternDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ActivityPattern :  ActivityPattern) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ActivityPatternDetail, {ActivityPattern}, 0)
  }
  
  static function drilldown (ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityPatternDetail, {ActivityPattern}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityPatternDetail, {ActivityPattern}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityPatternDetail, {ActivityPattern}, 0).goInMain()
  }
  
  static function printPage (ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityPatternDetail, {ActivityPattern}, 0).printPage()
  }
  
  static function push (ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ActivityPatternDetail, {ActivityPattern}, 0).push()
  }
  
  
}