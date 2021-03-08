package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/CustomNewDocument.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CustomNewDocument extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CustomNewDocument, {}, 0)
  }
  
  static function createDestination (ClaimID :  String, Option :  java.lang.Double) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CustomNewDocument, {ClaimID, Option}, 1)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForLocation(pcf.CustomNewDocument, {}, 0).drilldown()
  }
  
  static function drilldown (ClaimID :  String, Option :  java.lang.Double) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CustomNewDocument, {ClaimID, Option}, 1).drilldown()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForLocation(pcf.CustomNewDocument, {}, 0).printPage()
  }
  
  static function printPage (ClaimID :  String, Option :  java.lang.Double) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CustomNewDocument, {ClaimID, Option}, 1).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.CustomNewDocument, {}, 0).push()
  }
  
  static function push (ClaimID :  String, Option :  java.lang.Double) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CustomNewDocument, {ClaimID, Option}, 1).push()
  }
  
  
}