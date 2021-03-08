package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/ClaimLossDetails.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimLossDetails extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim}, 0)
  }
  
  static function createDestination (Claim :  Claim, fromCompensationActivity :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim, fromCompensationActivity}, 1)
  }
  
  static function drilldown (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim}, 0).drilldown()
  }
  
  static function drilldown (Claim :  Claim, fromCompensationActivity :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim, fromCompensationActivity}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, fromCompensationActivity :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim, fromCompensationActivity}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, fromCompensationActivity :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim, fromCompensationActivity}, 1).goInMain()
  }
  
  static function printPage (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim}, 0).printPage()
  }
  
  static function printPage (Claim :  Claim, fromCompensationActivity :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim, fromCompensationActivity}, 1).printPage()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim}, 0).push()
  }
  
  static function push (Claim :  Claim, fromCompensationActivity :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimLossDetails, {Claim, fromCompensationActivity}, 1).push()
  }
  
  
}