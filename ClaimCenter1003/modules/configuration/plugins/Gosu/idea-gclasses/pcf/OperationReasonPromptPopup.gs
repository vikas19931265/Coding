package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/OperationReasonPromptPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class OperationReasonPromptPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (serviceRequest :  ServiceRequest, invoice :  ServiceRequestInvoice, operation :  ServiceRequestOperation) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.OperationReasonPromptPopup, {serviceRequest, invoice, operation}, 1)
  }
  
  static function createDestination (serviceRequest :  ServiceRequest, operation :  ServiceRequestOperation) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.OperationReasonPromptPopup, {serviceRequest, operation}, 0)
  }
  
  static function push (serviceRequest :  ServiceRequest, invoice :  ServiceRequestInvoice, operation :  ServiceRequestOperation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.OperationReasonPromptPopup, {serviceRequest, invoice, operation}, 1).push()
  }
  
  static function push (serviceRequest :  ServiceRequest, operation :  ServiceRequestOperation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.OperationReasonPromptPopup, {serviceRequest, operation}, 0).push()
  }
  
  
}