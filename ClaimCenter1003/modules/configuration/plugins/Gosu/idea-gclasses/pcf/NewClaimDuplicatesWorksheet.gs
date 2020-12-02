package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimDuplicatesWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimDuplicatesWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewClaimDuplicatesWorksheet, {wizard}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimDuplicatesWorksheet, {wizard}, 0).goInWorkspace()
  }
  
  static function push (wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimDuplicatesWorksheet, {wizard}, 0).push()
  }
  
  
}