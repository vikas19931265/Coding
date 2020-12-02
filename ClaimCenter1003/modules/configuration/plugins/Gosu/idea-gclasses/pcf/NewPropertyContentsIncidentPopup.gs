package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/NewPropertyContentsIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewPropertyContentsIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewPropertyContentsIncidentPopup, {claim}, 0)
  }
  
  function pickValueAndCommit (value :  PropertyContentsIncident) : void {
    __widgetOf(this, pcf.NewPropertyContentsIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewPropertyContentsIncidentPopup, {claim}, 0).push()
  }
  
  
}