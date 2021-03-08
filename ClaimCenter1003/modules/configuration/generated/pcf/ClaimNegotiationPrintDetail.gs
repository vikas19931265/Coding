package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/planofaction/ClaimNegotiationPrintDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimNegotiationPrintDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Negotiation :  Negotiation) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimNegotiationPrintDetail, {Negotiation}, 0)
  }
  
  static function drilldown (Negotiation :  Negotiation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNegotiationPrintDetail, {Negotiation}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Negotiation :  Negotiation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNegotiationPrintDetail, {Negotiation}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Negotiation :  Negotiation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNegotiationPrintDetail, {Negotiation}, 0).goInMain()
  }
  
  static function printPage (Negotiation :  Negotiation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNegotiationPrintDetail, {Negotiation}, 0).printPage()
  }
  
  static function push (Negotiation :  Negotiation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimNegotiationPrintDetail, {Negotiation}, 0).push()
  }
  
  
}