package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/EditLivingExpensesIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditLivingExpensesIncidentPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (incident :  LivingExpensesIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditLivingExpensesIncidentPopup, {incident}, 0)
  }
  
  static function createDestination (incident :  LivingExpensesIncident, startInEditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.EditLivingExpensesIncidentPopup, {incident, startInEditMode}, 1)
  }
  
  static function push (incident :  LivingExpensesIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditLivingExpensesIncidentPopup, {incident}, 0).push()
  }
  
  static function push (incident :  LivingExpensesIncident, startInEditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.EditLivingExpensesIncidentPopup, {incident, startInEditMode}, 1).push()
  }
  
  
}