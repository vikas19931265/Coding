package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/GoToAB.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class GoToAB extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (abSystemURL :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.GoToAB, {abSystemURL}, 0)
  }
  
  static function drilldown (abSystemURL :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GoToAB, {abSystemURL}, 0).drilldown()
  }
  
  static function printPage (abSystemURL :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GoToAB, {abSystemURL}, 0).printPage()
  }
  
  static function push (abSystemURL :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.GoToAB, {abSystemURL}, 0).push()
  }
  
  
}