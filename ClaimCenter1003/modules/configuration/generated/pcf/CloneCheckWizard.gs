package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/check/CloneCheckWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CloneCheckWizard extends com.guidewire.pl.web.codegen.WizardBase {
  static function createDestination (claim :  Claim, check :  Check) : pcf.api.Destination {
    return __newDestinationForWizard(pcf.CloneCheckWizard, {claim, check}, 0)
  }
  
  static function drilldown (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.CloneCheckWizard, {claim, check}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.CloneCheckWizard, {claim, check}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.CloneCheckWizard, {claim, check}, 0).goInMain()
  }
  
  static function printPage (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.CloneCheckWizard, {claim, check}, 0).printPage()
  }
  
  static function push (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.CloneCheckWizard, {claim, check}, 0).push()
  }
  
  
}