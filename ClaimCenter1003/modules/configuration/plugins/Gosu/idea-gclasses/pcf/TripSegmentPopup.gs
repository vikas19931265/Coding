package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/TripSegmentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TripSegmentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (aTripSegmentParam :  TripSegment, aTripIncident :  TripIncident, startEditable :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripSegmentPopup, {aTripSegmentParam, aTripIncident, startEditable}, 0)
  }
  
  function pickValueAndCommit (value :  TripSegment) : void {
    __widgetOf(this, pcf.TripSegmentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (aTripSegmentParam :  TripSegment, aTripIncident :  TripIncident, startEditable :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripSegmentPopup, {aTripSegmentParam, aTripIncident, startEditable}, 0).push()
  }
  
  
}