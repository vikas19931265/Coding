package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransferRecovery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TransferRecovery extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (originalRecovery :  Recovery) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TransferRecovery, {originalRecovery}, 0)
  }
  
  static function drilldown (originalRecovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransferRecovery, {originalRecovery}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (originalRecovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransferRecovery, {originalRecovery}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (originalRecovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransferRecovery, {originalRecovery}, 0).goInMain()
  }
  
  static function printPage (originalRecovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransferRecovery, {originalRecovery}, 0).printPage()
  }
  
  static function push (originalRecovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TransferRecovery, {originalRecovery}, 0).push()
  }
  
  
}