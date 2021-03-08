package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/CreateNewClaimForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CreateNewClaimForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (policyNumber :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CreateNewClaimForward, {policyNumber}, 0)
  }
  
  static function drilldown (policyNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateNewClaimForward, {policyNumber}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (policyNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateNewClaimForward, {policyNumber}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (policyNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateNewClaimForward, {policyNumber}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (policyNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateNewClaimForward, {policyNumber}, 0).goInWorkspace()
  }
  
  static function printPage (policyNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateNewClaimForward, {policyNumber}, 0).printPage()
  }
  
  static function push (policyNumber :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CreateNewClaimForward, {policyNumber}, 0).push()
  }
  
  
}