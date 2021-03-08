package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/ClaimFinancialsTransactionsDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimFinancialsTransactionsDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Transaction :  Transaction) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsDetail, {Claim, Transaction}, 0)
  }
  
  static function drilldown (Claim :  Claim, Transaction :  Transaction) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsDetail, {Claim, Transaction}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, Transaction :  Transaction) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsDetail, {Claim, Transaction}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, Transaction :  Transaction) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsDetail, {Claim, Transaction}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, Transaction :  Transaction) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsDetail, {Claim, Transaction}, 0).printPage()
  }
  
  static function push (Claim :  Claim, Transaction :  Transaction) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsDetail, {Claim, Transaction}, 0).push()
  }
  
  
}