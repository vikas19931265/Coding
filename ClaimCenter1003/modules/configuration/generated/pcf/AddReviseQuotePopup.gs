package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/AddReviseQuotePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddReviseQuotePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (serviceRequest :  entity.ServiceRequest) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddReviseQuotePopup, {serviceRequest}, 0)
  }
  
  static function createDestination (serviceRequest :  entity.ServiceRequest, oldQuote :  entity.ServiceRequestQuote) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AddReviseQuotePopup, {serviceRequest, oldQuote}, 1)
  }
  
  static function push (serviceRequest :  entity.ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddReviseQuotePopup, {serviceRequest}, 0).push()
  }
  
  static function push (serviceRequest :  entity.ServiceRequest, oldQuote :  entity.ServiceRequestQuote) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AddReviseQuotePopup, {serviceRequest, oldQuote}, 1).push()
  }
  
  
}