package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/PolicyLocationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PolicyLocationPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (PolicyLocation :  PolicyLocation, Claim :  Claim, EditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PolicyLocationPopup, {PolicyLocation, Claim, EditMode}, 0)
  }
  
  function pickValueAndCommit (value :  PolicyLocation) : void {
    __widgetOf(this, pcf.PolicyLocationPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (PolicyLocation :  PolicyLocation, Claim :  Claim, EditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyLocationPopup, {PolicyLocation, Claim, EditMode}, 0).push()
  }
  
  
}