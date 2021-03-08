package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignActivitiesPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AssignActivitiesPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssignmentPopup :  gw.api.activity.ActivityAssignmentPopup) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AssignActivitiesPopup, {AssignmentPopup}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.assignment.Assignee) : void {
    __widgetOf(this, pcf.AssignActivitiesPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (AssignmentPopup :  gw.api.activity.ActivityAssignmentPopup) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AssignActivitiesPopup, {AssignmentPopup}, 0).push()
  }
  
  
}