package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/newcheckwizard/NewCheckWizardAddressBookPickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewCheckWizardAddressBookPickerPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (requiredContactType :  Type, claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewCheckWizardAddressBookPickerPopup, {requiredContactType, claim}, 0)
  }
  
  function pickValueAndCommit (value :  Contact) : void {
    __widgetOf(this, pcf.NewCheckWizardAddressBookPickerPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (requiredContactType :  Type, claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewCheckWizardAddressBookPickerPopup, {requiredContactType, claim}, 0).push()
  }
  
  
}