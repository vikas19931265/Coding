package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/RuleFilterCriteriaDV.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleFilterCriteriaDV_ExposureRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($filterCriteria :  gw.bizrules.CCRuleFilterCriteria) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaDV_ExposureRule, SECTION_WIDGET_CLASS).setVariables(false, {$filterCriteria})
  }
  
  function refreshVariables ($filterCriteria :  gw.bizrules.CCRuleFilterCriteria) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaDV_ExposureRule, SECTION_WIDGET_CLASS).setVariables(true, {$filterCriteria})
  }
  
  
}