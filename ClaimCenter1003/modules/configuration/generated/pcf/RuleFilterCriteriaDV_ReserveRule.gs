package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/RuleFilterCriteriaDV.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleFilterCriteriaDV_ReserveRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($filterCriteria :  gw.bizrules.CCRuleFilterCriteria) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaDV_ReserveRule, SECTION_WIDGET_CLASS).setVariables(false, {$filterCriteria})
  }
  
  function refreshVariables ($filterCriteria :  gw.bizrules.CCRuleFilterCriteria) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaDV_ReserveRule, SECTION_WIDGET_CLASS).setVariables(true, {$filterCriteria})
  }
  
  
}