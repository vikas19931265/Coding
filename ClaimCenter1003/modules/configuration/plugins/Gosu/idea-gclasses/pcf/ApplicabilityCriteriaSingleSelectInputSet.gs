package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ApplicabilityCriteriaSingleSelectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ApplicabilityCriteriaSingleSelectInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($listBundle :  gw.bizrules.CCRulePanelSetHelper.SingleSelectBundle, $requiredCriteria :  boolean) : void {
    __widgetOf(this, pcf.ApplicabilityCriteriaSingleSelectInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$listBundle, $requiredCriteria})
  }
  
  function refreshVariables ($listBundle :  gw.bizrules.CCRulePanelSetHelper.SingleSelectBundle, $requiredCriteria :  boolean) : void {
    __widgetOf(this, pcf.ApplicabilityCriteriaSingleSelectInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$listBundle, $requiredCriteria})
  }
  
  
}