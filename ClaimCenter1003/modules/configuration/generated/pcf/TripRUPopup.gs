package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/TripRUPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TripRUPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (aClaim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripRUPopup, {aClaim}, 0)
  }
  
  static function createDestination (aClaim :  Claim, aTripRUParam :  TripRU, startEditable :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripRUPopup, {aClaim, aTripRUParam, startEditable}, 1)
  }
  
  function pickValueAndCommit (value :  TripRU) : void {
    __widgetOf(this, pcf.TripRUPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (aClaim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripRUPopup, {aClaim}, 0).push()
  }
  
  static function push (aClaim :  Claim, aTripRUParam :  TripRU, startEditable :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripRUPopup, {aClaim, aTripRUParam, startEditable}, 1).push()
  }
  
  
}