package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newactivity/NewActivity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewActivity extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, ActivityPattern :  ActivityPattern) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewActivity, {Claim, ActivityPattern}, 0)
  }
  
  static function drilldown (Claim :  Claim, ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewActivity, {Claim, ActivityPattern}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewActivity, {Claim, ActivityPattern}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewActivity, {Claim, ActivityPattern}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewActivity, {Claim, ActivityPattern}, 0).printPage()
  }
  
  static function push (Claim :  Claim, ActivityPattern :  ActivityPattern) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewActivity, {Claim, ActivityPattern}, 0).push()
  }
  
  
}