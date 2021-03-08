package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_ServicesPolicyPanelSet.CommercialProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLWizard_ServicesPolicyPanelSet_CommercialProperty extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($claim :  Claim, $wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.FNOLWizard_ServicesPolicyPanelSet_CommercialProperty, SECTION_WIDGET_CLASS).setVariables(false, {$claim, $wizard})
  }
  
  function refreshVariables ($claim :  Claim, $wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.FNOLWizard_ServicesPolicyPanelSet_CommercialProperty, SECTION_WIDGET_CLASS).setVariables(true, {$claim, $wizard})
  }
  
  
}