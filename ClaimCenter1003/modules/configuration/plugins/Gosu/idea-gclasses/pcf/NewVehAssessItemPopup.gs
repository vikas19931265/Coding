package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentItem/NewVehAssessItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewVehAssessItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (VehicleIncident :  VehicleIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewVehAssessItemPopup, {VehicleIncident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentItem) : void {
    __widgetOf(this, pcf.NewVehAssessItemPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (VehicleIncident :  VehicleIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewVehAssessItemPopup, {VehicleIncident}, 0).push()
  }
  
  
}