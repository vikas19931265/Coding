package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/DeleteReserveSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DeleteReserveSet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Reserve :  Reserve) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DeleteReserveSet, {Claim, Reserve}, 0)
  }
  
  static function drilldown (Claim :  Claim, Reserve :  Reserve) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DeleteReserveSet, {Claim, Reserve}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, Reserve :  Reserve) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DeleteReserveSet, {Claim, Reserve}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, Reserve :  Reserve) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DeleteReserveSet, {Claim, Reserve}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, Reserve :  Reserve) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DeleteReserveSet, {Claim, Reserve}, 0).printPage()
  }
  
  static function push (Claim :  Claim, Reserve :  Reserve) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DeleteReserveSet, {Claim, Reserve}, 0).push()
  }
  
  
}