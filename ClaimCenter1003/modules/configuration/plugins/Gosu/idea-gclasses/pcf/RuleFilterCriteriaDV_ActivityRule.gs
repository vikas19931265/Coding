package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/RuleFilterCriteriaDV.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleFilterCriteriaDV_ActivityRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($filterCriteria :  gw.bizrules.CCRuleFilterCriteria) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaDV_ActivityRule, SECTION_WIDGET_CLASS).setVariables(false, {$filterCriteria})
  }
  
  function refreshVariables ($filterCriteria :  gw.bizrules.CCRuleFilterCriteria) : void {
    __widgetOf(this, pcf.RuleFilterCriteriaDV_ActivityRule, SECTION_WIDGET_CLASS).setVariables(true, {$filterCriteria})
  }
  
  
}