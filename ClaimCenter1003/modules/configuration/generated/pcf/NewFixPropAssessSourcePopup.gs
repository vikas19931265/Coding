package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/NewFixPropAssessSourcePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewFixPropAssessSourcePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (FixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewFixPropAssessSourcePopup, {FixedPropertyIncident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentSource) : void {
    __widgetOf(this, pcf.NewFixPropAssessSourcePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (FixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewFixPropAssessSourcePopup, {FixedPropertyIncident}, 0).push()
  }
  
  
}