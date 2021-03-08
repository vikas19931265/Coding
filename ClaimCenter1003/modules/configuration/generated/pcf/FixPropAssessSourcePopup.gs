package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/FixPropAssessSourcePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FixPropAssessSourcePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssessmentSource :  AssessmentSource) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FixPropAssessSourcePopup, {AssessmentSource}, 0)
  }
  
  static function push (AssessmentSource :  AssessmentSource) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixPropAssessSourcePopup, {AssessmentSource}, 0).push()
  }
  
  
}