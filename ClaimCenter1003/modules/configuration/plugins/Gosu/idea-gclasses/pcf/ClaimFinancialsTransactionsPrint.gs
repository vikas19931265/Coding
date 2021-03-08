package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/ClaimFinancialsTransactionsPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimFinancialsTransactionsPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsPrint, {Claim, requestedOption}, 0)
  }
  
  static function drilldown (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsPrint, {Claim, requestedOption}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsPrint, {Claim, requestedOption}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsPrint, {Claim, requestedOption}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsPrint, {Claim, requestedOption}, 0).printPage()
  }
  
  static function push (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactionsPrint, {Claim, requestedOption}, 0).push()
  }
  
  
}