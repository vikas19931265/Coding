package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/print/FixedPropertyIncidentDetailPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FixedPropertyIncidentDetailPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FixedPropertyIncidentDetailPrint, {fixedPropertyIncident}, 0)
  }
  
  static function drilldown (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixedPropertyIncidentDetailPrint, {fixedPropertyIncident}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixedPropertyIncidentDetailPrint, {fixedPropertyIncident}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixedPropertyIncidentDetailPrint, {fixedPropertyIncident}, 0).goInMain()
  }
  
  static function printPage (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixedPropertyIncidentDetailPrint, {fixedPropertyIncident}, 0).printPage()
  }
  
  static function push (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixedPropertyIncidentDetailPrint, {fixedPropertyIncident}, 0).push()
  }
  
  
}