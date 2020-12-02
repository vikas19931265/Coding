package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/PromoteQuoteOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PromoteQuoteOnly extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (originalServiceRequest :  ServiceRequest) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PromoteQuoteOnly, {originalServiceRequest}, 0)
  }
  
  static function drilldown (originalServiceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PromoteQuoteOnly, {originalServiceRequest}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (originalServiceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PromoteQuoteOnly, {originalServiceRequest}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (originalServiceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PromoteQuoteOnly, {originalServiceRequest}, 0).goInMain()
  }
  
  static function printPage (originalServiceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PromoteQuoteOnly, {originalServiceRequest}, 0).printPage()
  }
  
  static function push (originalServiceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PromoteQuoteOnly, {originalServiceRequest}, 0).push()
  }
  
  
}