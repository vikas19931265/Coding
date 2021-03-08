package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/NewDwellingIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewDwellingIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewDwellingIncidentPopup, {claim}, 0)
  }
  
  function pickValueAndCommit (value :  DwellingIncident) : void {
    __widgetOf(this, pcf.NewDwellingIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewDwellingIncidentPopup, {claim}, 0).push()
  }
  
  
}