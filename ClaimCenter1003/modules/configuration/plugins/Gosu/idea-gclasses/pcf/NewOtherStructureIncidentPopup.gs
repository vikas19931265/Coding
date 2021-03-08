package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/NewOtherStructureIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewOtherStructureIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewOtherStructureIncidentPopup, {claim}, 0)
  }
  
  function pickValueAndCommit (value :  OtherStructureIncident) : void {
    __widgetOf(this, pcf.NewOtherStructureIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewOtherStructureIncidentPopup, {claim}, 0).push()
  }
  
  
}