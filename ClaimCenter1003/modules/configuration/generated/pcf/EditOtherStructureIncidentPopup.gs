package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/EditOtherStructureIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditOtherStructureIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (incident :  OtherStructureIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditOtherStructureIncidentPopup, {incident}, 0)
  }
  
  static function createDestination (incident :  OtherStructureIncident, startInEditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditOtherStructureIncidentPopup, {incident, startInEditMode}, 1)
  }
  
  static function push (incident :  OtherStructureIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditOtherStructureIncidentPopup, {incident}, 0).push()
  }
  
  static function push (incident :  OtherStructureIncident, startInEditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditOtherStructureIncidentPopup, {incident, startInEditMode}, 1).push()
  }
  
  
}