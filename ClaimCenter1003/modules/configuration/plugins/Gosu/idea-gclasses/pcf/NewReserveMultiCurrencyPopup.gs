package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/reserve/NewReserveMultiCurrencyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewReserveMultiCurrencyPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (WizardHelper :  gw.api.financials.ReserveWizardHelper, EditWrapper :  TransactionEditWrapper) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewReserveMultiCurrencyPopup, {WizardHelper, EditWrapper}, 0)
  }
  
  static function push (WizardHelper :  gw.api.financials.ReserveWizardHelper, EditWrapper :  TransactionEditWrapper) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewReserveMultiCurrencyPopup, {WizardHelper, EditWrapper}, 0).push()
  }
  
  
}