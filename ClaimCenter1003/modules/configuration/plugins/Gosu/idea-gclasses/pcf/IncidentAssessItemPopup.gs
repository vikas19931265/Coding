package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/IncidentAssessItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class IncidentAssessItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (assessmentItem :  AssessmentItem) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.IncidentAssessItemPopup, {assessmentItem}, 0)
  }
  
  static function push (assessmentItem :  AssessmentItem) : pcf.api.Location {
    return __newDestinationForLocation(pcf.IncidentAssessItemPopup, {assessmentItem}, 0).push()
  }
  
  
}