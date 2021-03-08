package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/RecodePayment.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RecodePayment extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, OriginalPayment :  Payment) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RecodePayment, {Claim, OriginalPayment}, 0)
  }
  
  static function drilldown (Claim :  Claim, OriginalPayment :  Payment) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RecodePayment, {Claim, OriginalPayment}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, OriginalPayment :  Payment) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RecodePayment, {Claim, OriginalPayment}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, OriginalPayment :  Payment) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RecodePayment, {Claim, OriginalPayment}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, OriginalPayment :  Payment) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RecodePayment, {Claim, OriginalPayment}, 0).printPage()
  }
  
  static function push (Claim :  Claim, OriginalPayment :  Payment) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RecodePayment, {Claim, OriginalPayment}, 0).push()
  }
  
  
}