package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/NewWorkStatusPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewWorkStatusPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (employmentData :  EmploymentData, visitable :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewWorkStatusPopup, {employmentData, visitable}, 0)
  }
  
  function pickValueAndCommit (value :  WorkStatus) : void {
    __widgetOf(this, pcf.NewWorkStatusPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (employmentData :  EmploymentData, visitable :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewWorkStatusPopup, {employmentData, visitable}, 0).push()
  }
  
  
}