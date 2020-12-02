package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/policy/ClaimPolicyStatCodePickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimPolicyStatCodePickerPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimPolicyStatCodePickerPopup, {Claim}, 0)
  }
  
  function pickValueAndCommit (value :  StatCode) : void {
    __widgetOf(this, pcf.ClaimPolicyStatCodePickerPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyStatCodePickerPopup, {Claim}, 0).push()
  }
  
  
}