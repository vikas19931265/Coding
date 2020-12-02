package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimWizard_ExposurePagePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimWizard_ExposurePagePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Exposure :  Exposure, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewClaimWizard_ExposurePagePopup, {Claim, Exposure, Wizard}, 0)
  }
  
  static function push (Claim :  Claim, Exposure :  Exposure, Wizard :  gw.api.claim.NewClaimWizardInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimWizard_ExposurePagePopup, {Claim, Exposure, Wizard}, 0).push()
  }
  
  
}