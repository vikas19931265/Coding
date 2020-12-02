package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/trip/TripIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TripIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (aClaim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripIncidentPopup, {aClaim}, 0)
  }
  
  static function createDestination (tripIncidentParam :  TripIncident, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripIncidentPopup, {tripIncidentParam, startInEditMode}, 1)
  }
  
  function pickValueAndCommit (value :  TripIncident) : void {
    __widgetOf(this, pcf.TripIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (aClaim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripIncidentPopup, {aClaim}, 0).push()
  }
  
  static function push (tripIncidentParam :  TripIncident, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripIncidentPopup, {tripIncidentParam, startInEditMode}, 1).push()
  }
  
  
}