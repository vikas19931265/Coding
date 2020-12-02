package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/RuleFilterCriteriaRuleActionInputSet.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleFilterCriteriaRuleActionInputSet_ReserveRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($filterCriteria :  gw.bizrules.CCRuleFilterCriteriaBase) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule, SECTION_WIDGET_CLASS).setVariables(false, {$filterCriteria})
  }
  
  function refreshVariables ($filterCriteria :  gw.bizrules.CCRuleFilterCriteriaBase) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule, SECTION_WIDGET_CLASS).setVariables(true, {$filterCriteria})
  }
  
  
}