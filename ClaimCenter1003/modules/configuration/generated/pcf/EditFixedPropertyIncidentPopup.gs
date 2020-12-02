package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/EditFixedPropertyIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditFixedPropertyIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (fixedPropertyIncident :  FixedPropertyIncident, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditFixedPropertyIncidentPopup, {fixedPropertyIncident, startInEditMode}, 0)
  }
  
  static function push (fixedPropertyIncident :  FixedPropertyIncident, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditFixedPropertyIncidentPopup, {fixedPropertyIncident, startInEditMode}, 0).push()
  }
  
  
}