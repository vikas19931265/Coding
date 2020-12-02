package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/injury/NewInjuryIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewInjuryIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewInjuryIncidentPopup, {Claim}, 0)
  }
  
  static function createDestination (Claim :  Claim, Exposure :  Exposure) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewInjuryIncidentPopup, {Claim, Exposure}, 1)
  }
  
  function pickValueAndCommit (value :  InjuryIncident) : void {
    __widgetOf(this, pcf.NewInjuryIncidentPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewInjuryIncidentPopup, {Claim}, 0).push()
  }
  
  static function push (Claim :  Claim, Exposure :  Exposure) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewInjuryIncidentPopup, {Claim, Exposure}, 1).push()
  }
  
  
}