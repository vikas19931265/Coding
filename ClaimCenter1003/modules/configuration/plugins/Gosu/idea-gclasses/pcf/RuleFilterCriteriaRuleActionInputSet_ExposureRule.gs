package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/RuleFilterCriteriaRuleActionInputSet.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleFilterCriteriaRuleActionInputSet_ExposureRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($filterCriteria :  gw.bizrules.CCRuleFilterCriteriaBase) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule, SECTION_WIDGET_CLASS).setVariables(false, {$filterCriteria})
  }
  
  function refreshVariables ($filterCriteria :  gw.bizrules.CCRuleFilterCriteriaBase) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule, SECTION_WIDGET_CLASS).setVariables(true, {$filterCriteria})
  }
  
  
}