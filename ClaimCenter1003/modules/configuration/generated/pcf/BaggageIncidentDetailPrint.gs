package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/print/BaggageIncidentDetailPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class BaggageIncidentDetailPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (aClaim :  Claim, aBaggageIncident :  BaggageIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.BaggageIncidentDetailPrint, {aClaim, aBaggageIncident}, 0)
  }
  
  static function drilldown (aClaim :  Claim, aBaggageIncident :  BaggageIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BaggageIncidentDetailPrint, {aClaim, aBaggageIncident}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (aClaim :  Claim, aBaggageIncident :  BaggageIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BaggageIncidentDetailPrint, {aClaim, aBaggageIncident}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (aClaim :  Claim, aBaggageIncident :  BaggageIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BaggageIncidentDetailPrint, {aClaim, aBaggageIncident}, 0).goInMain()
  }
  
  static function printPage (aClaim :  Claim, aBaggageIncident :  BaggageIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BaggageIncidentDetailPrint, {aClaim, aBaggageIncident}, 0).printPage()
  }
  
  static function push (aClaim :  Claim, aBaggageIncident :  BaggageIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BaggageIncidentDetailPrint, {aClaim, aBaggageIncident}, 0).push()
  }
  
  
}