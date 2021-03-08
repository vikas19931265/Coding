package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/litigation/AssignMattersPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AssignMattersPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssignmentPopup :  gw.api.matter.MatterAssignmentPopup) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AssignMattersPopup, {AssignmentPopup}, 0)
  }
  
  function pickValueAndCommit (value :  gw.api.assignment.Assignee) : void {
    __widgetOf(this, pcf.AssignMattersPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (AssignmentPopup :  gw.api.matter.MatterAssignmentPopup) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AssignMattersPopup, {AssignmentPopup}, 0).push()
  }
  
  
}