package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/EditPropertyContentsIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditPropertyContentsIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (incident :  PropertyContentsIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditPropertyContentsIncidentPopup, {incident}, 1)
  }
  
  static function createDestination (incident :  PropertyContentsIncident, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditPropertyContentsIncidentPopup, {incident, startInEditMode}, 0)
  }
  
  static function push (incident :  PropertyContentsIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditPropertyContentsIncidentPopup, {incident}, 1).push()
  }
  
  static function push (incident :  PropertyContentsIncident, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditPropertyContentsIncidentPopup, {incident, startInEditMode}, 0).push()
  }
  
  
}