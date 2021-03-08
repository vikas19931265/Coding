package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/ChoosePropertyContentsScheduledItemPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ChoosePropertyContentsScheduledItemPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (incident :  PropertyContentsIncident, policyLocation :  PolicyLocation) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ChoosePropertyContentsScheduledItemPopup, {incident, policyLocation}, 0)
  }
  
  function pickValueAndCommit (value :  PropertyContentsScheduledItem[]) : void {
    __widgetOf(this, pcf.ChoosePropertyContentsScheduledItemPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (incident :  PropertyContentsIncident, policyLocation :  PolicyLocation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ChoosePropertyContentsScheduledItemPopup, {incident, policyLocation}, 0).push()
  }
  
  
}