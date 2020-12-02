package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/ApproveQuotePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ApproveQuotePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (serviceRequest :  ServiceRequest) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ApproveQuotePopup, {serviceRequest}, 0)
  }
  
  static function push (serviceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ApproveQuotePopup, {serviceRequest}, 0).push()
  }
  
  
}