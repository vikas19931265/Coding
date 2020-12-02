package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimWizard_StatCodeDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimWizard_StatCodeDetailPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Policy :  Policy, StatCode :  StatCode) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewClaimWizard_StatCodeDetailPopup, {Policy, StatCode}, 0)
  }
  
  static function push (Policy :  Policy, StatCode :  StatCode) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewClaimWizard_StatCodeDetailPopup, {Policy, StatCode}, 0).push()
  }
  
  
}