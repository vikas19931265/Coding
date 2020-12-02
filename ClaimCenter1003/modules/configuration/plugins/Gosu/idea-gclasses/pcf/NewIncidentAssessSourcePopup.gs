package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/NewIncidentAssessSourcePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewIncidentAssessSourcePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (incident :  Incident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewIncidentAssessSourcePopup, {incident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentSource) : void {
    __widgetOf(this, pcf.NewIncidentAssessSourcePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (incident :  Incident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewIncidentAssessSourcePopup, {incident}, 0).push()
  }
  
  
}