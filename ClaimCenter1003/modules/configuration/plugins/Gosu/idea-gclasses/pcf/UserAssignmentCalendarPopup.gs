package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/UserAssignmentCalendarPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserAssignmentCalendarPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (User :  User) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.UserAssignmentCalendarPopup, {User}, 0)
  }
  
  static function push (User :  User) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UserAssignmentCalendarPopup, {User}, 0).push()
  }
  
  
}