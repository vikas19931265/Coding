package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/util/FNOLAfterCancelPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLAfterCancelPage extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (createPolicyFlag :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FNOLAfterCancelPage, {createPolicyFlag}, 0)
  }
  
  static function drilldown (createPolicyFlag :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLAfterCancelPage, {createPolicyFlag}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (createPolicyFlag :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLAfterCancelPage, {createPolicyFlag}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (createPolicyFlag :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLAfterCancelPage, {createPolicyFlag}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (createPolicyFlag :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLAfterCancelPage, {createPolicyFlag}, 0).goInWorkspace()
  }
  
  static function printPage (createPolicyFlag :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLAfterCancelPage, {createPolicyFlag}, 0).printPage()
  }
  
  static function push (createPolicyFlag :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLAfterCancelPage, {createPolicyFlag}, 0).push()
  }
  
  
}