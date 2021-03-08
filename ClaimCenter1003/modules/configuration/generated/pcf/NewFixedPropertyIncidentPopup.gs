package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newexposure/NewFixedPropertyIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewFixedPropertyIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewFixedPropertyIncidentPopup, {claim}, 0)
  }
  
  function pickValueAndCommit (value :  FixedPropertyIncident) : void {
    __widgetOf(this, pcf.NewFixedPropertyIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewFixedPropertyIncidentPopup, {claim}, 0).push()
  }
  
  
}