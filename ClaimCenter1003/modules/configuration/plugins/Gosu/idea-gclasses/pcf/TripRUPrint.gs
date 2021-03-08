package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/print/TripRUPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TripRUPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (aClaim :  Claim, aTripRUParam :  TripRU) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripRUPrint, {aClaim, aTripRUParam}, 0)
  }
  
  static function drilldown (aClaim :  Claim, aTripRUParam :  TripRU) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripRUPrint, {aClaim, aTripRUParam}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (aClaim :  Claim, aTripRUParam :  TripRU) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripRUPrint, {aClaim, aTripRUParam}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (aClaim :  Claim, aTripRUParam :  TripRU) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripRUPrint, {aClaim, aTripRUParam}, 0).goInMain()
  }
  
  static function printPage (aClaim :  Claim, aTripRUParam :  TripRU) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripRUPrint, {aClaim, aTripRUParam}, 0).printPage()
  }
  
  static function push (aClaim :  Claim, aTripRUParam :  TripRU) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripRUPrint, {aClaim, aTripRUParam}, 0).push()
  }
  
  
}