package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/ChangeCheckRecurrence.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ChangeCheckRecurrence extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Check :  Check) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ChangeCheckRecurrence, {Claim, Check}, 0)
  }
  
  static function drilldown (Claim :  Claim, Check :  Check) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ChangeCheckRecurrence, {Claim, Check}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, Check :  Check) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ChangeCheckRecurrence, {Claim, Check}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, Check :  Check) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ChangeCheckRecurrence, {Claim, Check}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, Check :  Check) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ChangeCheckRecurrence, {Claim, Check}, 0).printPage()
  }
  
  static function push (Claim :  Claim, Check :  Check) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ChangeCheckRecurrence, {Claim, Check}, 0).push()
  }
  
  
}