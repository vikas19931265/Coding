package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/ClaimPolicySelectPolicyPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimPolicySelectPolicyPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimPolicySelectPolicyPopup, {Claim}, 0)
  }
  
  function pickValueAndCommit (value :  PolicySummary) : void {
    __widgetOf(this, pcf.ClaimPolicySelectPolicyPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicySelectPolicyPopup, {Claim}, 0).push()
  }
  
  
}