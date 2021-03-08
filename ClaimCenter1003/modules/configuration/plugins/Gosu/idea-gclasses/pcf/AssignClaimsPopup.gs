package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignClaimsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AssignClaimsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssignmentPopup :  gw.api.claim.ClaimAssignmentPopup) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AssignClaimsPopup, {AssignmentPopup}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.assignment.Assignee) : void {
    __widgetOf(this, pcf.AssignClaimsPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (AssignmentPopup :  gw.api.claim.ClaimAssignmentPopup) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AssignClaimsPopup, {AssignmentPopup}, 0).push()
  }
  
  
}