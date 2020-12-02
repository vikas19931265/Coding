package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/NewFixPropAssessItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewFixPropAssessItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (FixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewFixPropAssessItemPopup, {FixedPropertyIncident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentItem) : void {
    __widgetOf(this, pcf.NewFixPropAssessItemPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (FixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewFixPropAssessItemPopup, {FixedPropertyIncident}, 0).push()
  }
  
  
}