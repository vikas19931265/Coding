package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/MarkInvoicePaidPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MarkInvoicePaidPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (invoice :  ServiceRequestInvoice) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.MarkInvoicePaidPopup, {invoice}, 0)
  }
  
  static function push (invoice :  ServiceRequestInvoice) : pcf.api.Location {
    return __newDestinationForLocation(pcf.MarkInvoicePaidPopup, {invoice}, 0).push()
  }
  
  
}