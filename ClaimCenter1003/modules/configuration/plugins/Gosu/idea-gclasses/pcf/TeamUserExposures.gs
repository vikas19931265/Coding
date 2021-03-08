package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/user/TeamUserExposures.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TeamUserExposures extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (User :  User, Group :  Group) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TeamUserExposures, {User, Group}, 0)
  }
  
  static function drilldown (User :  User, Group :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TeamUserExposures, {User, Group}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (User :  User, Group :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TeamUserExposures, {User, Group}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (User :  User, Group :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TeamUserExposures, {User, Group}, 0).goInMain()
  }
  
  static function printPage (User :  User, Group :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TeamUserExposures, {User, Group}, 0).printPage()
  }
  
  static function push (User :  User, Group :  Group) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TeamUserExposures, {User, Group}, 0).push()
  }
  
  
}