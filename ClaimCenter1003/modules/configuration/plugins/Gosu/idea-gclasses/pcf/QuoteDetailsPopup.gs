package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/QuoteDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class QuoteDetailsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (quote :  ServiceRequestQuote) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.QuoteDetailsPopup, {quote}, 0)
  }
  
  static function push (quote :  ServiceRequestQuote) : pcf.api.Location {
    return __newDestinationForLocation(pcf.QuoteDetailsPopup, {quote}, 0).push()
  }
  
  
}