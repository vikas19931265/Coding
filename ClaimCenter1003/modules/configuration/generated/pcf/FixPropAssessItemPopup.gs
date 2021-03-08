package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/FixPropAssessItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FixPropAssessItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssessmentItem :  AssessmentItem) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FixPropAssessItemPopup, {AssessmentItem}, 0)
  }
  
  static function push (AssessmentItem :  AssessmentItem) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixPropAssessItemPopup, {AssessmentItem}, 0).push()
  }
  
  
}