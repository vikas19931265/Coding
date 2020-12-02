package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/roles/RoleDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RoleDetailPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Role :  Role) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RoleDetailPage, {Role}, 0)
  }
  
  static function drilldown (Role :  Role) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RoleDetailPage, {Role}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Role :  Role) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RoleDetailPage, {Role}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Role :  Role) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RoleDetailPage, {Role}, 0).goInMain()
  }
  
  static function printPage (Role :  Role) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RoleDetailPage, {Role}, 0).printPage()
  }
  
  static function push (Role :  Role) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RoleDetailPage, {Role}, 0).push()
  }
  
  
}