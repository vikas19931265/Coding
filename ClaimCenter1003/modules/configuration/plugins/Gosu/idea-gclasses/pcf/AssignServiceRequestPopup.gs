package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignServiceRequestPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AssignServiceRequestPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssignmentPopup :  gw.api.vendormanagement.ServiceRequestAssignmentPopup) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AssignServiceRequestPopup, {AssignmentPopup}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.assignment.Assignee) : void {
    __widgetOf(this, pcf.AssignServiceRequestPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (AssignmentPopup :  gw.api.vendormanagement.ServiceRequestAssignmentPopup) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AssignServiceRequestPopup, {AssignmentPopup}, 0).push()
  }
  
  
}