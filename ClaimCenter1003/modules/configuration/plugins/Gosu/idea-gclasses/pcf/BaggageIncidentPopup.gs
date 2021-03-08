package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/BaggageIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class BaggageIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (baggageIncidentParam :  BaggageIncident, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.BaggageIncidentPopup, {baggageIncidentParam, startInEditMode}, 0)
  }
  
  static function createDestination (aClaim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.BaggageIncidentPopup, {aClaim}, 1)
  }
  
  function pickValueAndCommit (value :  BaggageIncident) : void {
    __widgetOf(this, pcf.BaggageIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (baggageIncidentParam :  BaggageIncident, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BaggageIncidentPopup, {baggageIncidentParam, startInEditMode}, 0).push()
  }
  
  static function push (aClaim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.BaggageIncidentPopup, {aClaim}, 1).push()
  }
  
  
}