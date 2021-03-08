package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/NewInvoice.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewInvoice extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (serviceRequest :  ServiceRequest) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewInvoice, {serviceRequest}, 0)
  }
  
  static function drilldown (serviceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewInvoice, {serviceRequest}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (serviceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewInvoice, {serviceRequest}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (serviceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewInvoice, {serviceRequest}, 0).goInMain()
  }
  
  static function printPage (serviceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewInvoice, {serviceRequest}, 0).printPage()
  }
  
  static function push (serviceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewInvoice, {serviceRequest}, 0).push()
  }
  
  
}