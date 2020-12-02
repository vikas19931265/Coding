package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewNoteWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLWizard_NewNoteWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FNOLWizard_NewNoteWorksheet, {Wizard}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLWizard_NewNoteWorksheet, {Wizard}, 0).goInWorkspace()
  }
  
  static function push (Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FNOLWizard_NewNoteWorksheet, {Wizard}, 0).push()
  }
  
  
}