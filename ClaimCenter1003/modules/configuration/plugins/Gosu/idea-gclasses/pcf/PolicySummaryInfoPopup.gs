package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/PolicySummaryInfoPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PolicySummaryInfoPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (PolicySummary :  PolicySummary) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PolicySummaryInfoPopup, {PolicySummary}, 0)
  }
  
  static function push (PolicySummary :  PolicySummary) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicySummaryInfoPopup, {PolicySummary}, 0).push()
  }
  
  
}