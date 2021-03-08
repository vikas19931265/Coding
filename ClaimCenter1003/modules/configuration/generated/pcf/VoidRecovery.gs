package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/VoidRecovery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class VoidRecovery extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Recovery :  Recovery) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.VoidRecovery, {Claim, Recovery}, 0)
  }
  
  static function drilldown (Claim :  Claim, Recovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.VoidRecovery, {Claim, Recovery}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, Recovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.VoidRecovery, {Claim, Recovery}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, Recovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.VoidRecovery, {Claim, Recovery}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, Recovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.VoidRecovery, {Claim, Recovery}, 0).printPage()
  }
  
  static function push (Claim :  Claim, Recovery :  Recovery) : pcf.api.Location {
    return __newDestinationForLocation(pcf.VoidRecovery, {Claim, Recovery}, 0).push()
  }
  
  
}