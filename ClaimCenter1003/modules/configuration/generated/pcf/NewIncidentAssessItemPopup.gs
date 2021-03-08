package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/NewIncidentAssessItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewIncidentAssessItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (incident :  Incident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewIncidentAssessItemPopup, {incident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentItem) : void {
    __widgetOf(this, pcf.NewIncidentAssessItemPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (incident :  Incident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewIncidentAssessItemPopup, {incident}, 0).push()
  }
  
  
}