package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimLossDetailsDV.Pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimLossDetailsDV_Pr extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($claim :  Claim) : void {
    __widgetOf(this, pcf.NewClaimLossDetailsDV_Pr, SECTION_WIDGET_CLASS).setVariables(false, {$claim})
  }
  
  function refreshVariables ($claim :  Claim) : void {
    __widgetOf(this, pcf.NewClaimLossDetailsDV_Pr, SECTION_WIDGET_CLASS).setVariables(true, {$claim})
  }
  
  
}