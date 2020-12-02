package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentContentItem/NewFixPropContentItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewFixPropContentItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (FixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewFixPropContentItemPopup, {FixedPropertyIncident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentContentItem) : void {
    __widgetOf(this, pcf.NewFixPropContentItemPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (FixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewFixPropContentItemPopup, {FixedPropertyIncident}, 0).push()
  }
  
  
}