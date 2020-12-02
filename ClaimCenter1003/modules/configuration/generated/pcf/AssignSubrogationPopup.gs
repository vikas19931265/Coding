package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/AssignSubrogationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AssignSubrogationPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssignmentPopup :  gw.api.subrogation.SubrogationAssignmentPopup) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AssignSubrogationPopup, {AssignmentPopup}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.assignment.Assignee) : void {
    __widgetOf(this, pcf.AssignSubrogationPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (AssignmentPopup :  gw.api.subrogation.SubrogationAssignmentPopup) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AssignSubrogationPopup, {AssignmentPopup}, 0).push()
  }
  
  
}