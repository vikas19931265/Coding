package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/vacationstatus/UserVacationWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserVacationWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.UserVacationWorksheet, {}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace () : pcf.api.Location {
    return __newDestinationForLocation(pcf.UserVacationWorksheet, {}, 0).goInWorkspace()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.UserVacationWorksheet, {}, 0).push()
  }
  
  
}