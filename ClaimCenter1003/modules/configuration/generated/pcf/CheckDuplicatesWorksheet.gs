package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckDuplicatesWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CheckDuplicatesWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (DuplicateChecks :  Check[], Claim :  Claim, wizard :  gw.api.financials.CheckWizardInfoBase) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CheckDuplicatesWorksheet, {DuplicateChecks, Claim, wizard}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (DuplicateChecks :  Check[], Claim :  Claim, wizard :  gw.api.financials.CheckWizardInfoBase) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CheckDuplicatesWorksheet, {DuplicateChecks, Claim, wizard}, 0).goInWorkspace()
  }
  
  static function push (DuplicateChecks :  Check[], Claim :  Claim, wizard :  gw.api.financials.CheckWizardInfoBase) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CheckDuplicatesWorksheet, {DuplicateChecks, Claim, wizard}, 0).push()
  }
  
  
}