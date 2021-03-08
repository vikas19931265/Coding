package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/VehicleIncidentOccupantsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class VehicleIncidentOccupantsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($vehicleOccupants :  ArrayList<Person>, $vehicleIncident :  entity.VehicleIncident, $wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.VehicleIncidentOccupantsLV, SECTION_WIDGET_CLASS).setVariables(false, {$vehicleOccupants, $vehicleIncident, $wizard})
  }
  
  function refreshVariables ($vehicleOccupants :  ArrayList<Person>, $vehicleIncident :  entity.VehicleIncident, $wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.VehicleIncidentOccupantsLV, SECTION_WIDGET_CLASS).setVariables(true, {$vehicleOccupants, $vehicleIncident, $wizard})
  }
  
  
}