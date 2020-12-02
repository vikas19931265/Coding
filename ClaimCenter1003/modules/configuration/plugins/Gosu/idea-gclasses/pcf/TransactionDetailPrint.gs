package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/print/TransactionDetailPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TransactionDetailPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, TransactionView :  TransactionView) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TransactionDetailPrint, {Claim, TransactionView}, 0)
  }
  
  static function drilldown (Claim :  Claim, TransactionView :  TransactionView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransactionDetailPrint, {Claim, TransactionView}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, TransactionView :  TransactionView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransactionDetailPrint, {Claim, TransactionView}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, TransactionView :  TransactionView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransactionDetailPrint, {Claim, TransactionView}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, TransactionView :  TransactionView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransactionDetailPrint, {Claim, TransactionView}, 0).printPage()
  }
  
  static function push (Claim :  Claim, TransactionView :  TransactionView) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransactionDetailPrint, {Claim, TransactionView}, 0).push()
  }
  
  
}