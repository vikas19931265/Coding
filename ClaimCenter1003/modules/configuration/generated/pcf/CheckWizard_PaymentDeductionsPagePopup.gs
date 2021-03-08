package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/check/CheckWizard_PaymentDeductionsPagePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CheckWizard_PaymentDeductionsPagePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, Wizard :  gw.api.financials.CheckWizardInfo, Check :  Check) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CheckWizard_PaymentDeductionsPagePopup, {Claim, Wizard, Check}, 0)
  }
  
  static function push (Claim :  Claim, Wizard :  gw.api.financials.CheckWizardInfo, Check :  Check) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CheckWizard_PaymentDeductionsPagePopup, {Claim, Wizard, Check}, 0).push()
  }
  
  
}