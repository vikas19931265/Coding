package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ApplicabilityCriteriaMultiSelectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ApplicabilityCriteriaMultiSelectInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($listBundle :  gw.bizrules.CCRulePanelSetHelper.MultiSelectBundle) : void {
    __widgetOf(this, pcf.ApplicabilityCriteriaMultiSelectInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$listBundle})
  }
  
  function refreshVariables ($listBundle :  gw.bizrules.CCRulePanelSetHelper.MultiSelectBundle) : void {
    __widgetOf(this, pcf.ApplicabilityCriteriaMultiSelectInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$listBundle})
  }
  
  
}