package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/TripAccommodationAddressPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TripAccommodationAddressPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (aTripAccommodation :  TripAccommodation, aTripIncident :  TripIncident, isParentInEditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripAccommodationAddressPopup, {aTripAccommodation, aTripIncident, isParentInEditMode}, 0)
  }
  
  static function createDestination (aTripIncident :  TripIncident, isParentInEditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.TripAccommodationAddressPopup, {aTripIncident, isParentInEditMode}, 1)
  }
  
  function pickValueAndCommit (value :  TripAccommodation) : void {
    __widgetOf(this, pcf.TripAccommodationAddressPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (aTripAccommodation :  TripAccommodation, aTripIncident :  TripIncident, isParentInEditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripAccommodationAddressPopup, {aTripAccommodation, aTripIncident, isParentInEditMode}, 0).push()
  }
  
  static function push (aTripIncident :  TripIncident, isParentInEditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.TripAccommodationAddressPopup, {aTripIncident, isParentInEditMode}, 1).push()
  }
  
  
}