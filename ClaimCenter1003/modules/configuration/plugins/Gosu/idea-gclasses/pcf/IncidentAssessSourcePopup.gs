package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/IncidentAssessSourcePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class IncidentAssessSourcePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (assessmentSource :  AssessmentSource) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.IncidentAssessSourcePopup, {assessmentSource}, 0)
  }
  
  static function push (assessmentSource :  AssessmentSource) : pcf.api.Location {
    return __newDestinationForLocation(pcf.IncidentAssessSourcePopup, {assessmentSource}, 0).push()
  }
  
  
}