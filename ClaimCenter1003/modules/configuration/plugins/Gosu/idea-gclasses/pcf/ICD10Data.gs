package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/ICD10Data.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ICD10Data extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ICDCode :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ICD10Data, {ICDCode}, 0)
  }
  
  static function drilldown (ICDCode :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ICD10Data, {ICDCode}, 0).drilldown()
  }
  
  static function printPage (ICDCode :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ICD10Data, {ICDCode}, 0).printPage()
  }
  
  static function push (ICDCode :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ICD10Data, {ICDCode}, 0).push()
  }
  
  
}