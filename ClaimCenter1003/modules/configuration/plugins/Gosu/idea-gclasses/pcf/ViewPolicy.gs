package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/ViewPolicy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ViewPolicy extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policySystemURL :  String, policyNumber :  String, lossDate :  java.util.Date) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ViewPolicy, {policySystemURL, policyNumber, lossDate}, 0)
  }
  
  static function drilldown (policySystemURL :  String, policyNumber :  String, lossDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ViewPolicy, {policySystemURL, policyNumber, lossDate}, 0).drilldown()
  }
  
  static function printPage (policySystemURL :  String, policyNumber :  String, lossDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ViewPolicy, {policySystemURL, policyNumber, lossDate}, 0).printPage()
  }
  
  static function push (policySystemURL :  String, policyNumber :  String, lossDate :  java.util.Date) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ViewPolicy, {policySystemURL, policyNumber, lossDate}, 0).push()
  }
  
  
}