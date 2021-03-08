package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/print/PropertyContentsIncidentPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PropertyContentsIncidentPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (c :  Claim, incident :  PropertyContentsIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PropertyContentsIncidentPrint, {c, incident}, 0)
  }
  
  static function drilldown (c :  Claim, incident :  PropertyContentsIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PropertyContentsIncidentPrint, {c, incident}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (c :  Claim, incident :  PropertyContentsIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PropertyContentsIncidentPrint, {c, incident}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (c :  Claim, incident :  PropertyContentsIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PropertyContentsIncidentPrint, {c, incident}, 0).goInMain()
  }
  
  static function printPage (c :  Claim, incident :  PropertyContentsIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PropertyContentsIncidentPrint, {c, incident}, 0).printPage()
  }
  
  static function push (c :  Claim, incident :  PropertyContentsIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PropertyContentsIncidentPrint, {c, incident}, 0).push()
  }
  
  
}