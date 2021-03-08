package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentContentItem/FixPropContentItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FixPropContentItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (AssessmentContentItem :  AssessmentContentItem) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FixPropContentItemPopup, {AssessmentContentItem}, 0)
  }
  
  static function push (AssessmentContentItem :  AssessmentContentItem) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FixPropContentItemPopup, {AssessmentContentItem}, 0).push()
  }
  
  
}