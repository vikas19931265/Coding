package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/NewVehAssessSourcePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewVehAssessSourcePopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (VehicleIncident :  VehicleIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewVehAssessSourcePopup, {VehicleIncident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentSource) : void {
    __widgetOf(this, pcf.NewVehAssessSourcePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (VehicleIncident :  VehicleIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewVehAssessSourcePopup, {VehicleIncident}, 0).push()
  }
  
  
}