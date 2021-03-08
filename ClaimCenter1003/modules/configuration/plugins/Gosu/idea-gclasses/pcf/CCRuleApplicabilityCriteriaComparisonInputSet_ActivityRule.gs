package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CCRuleApplicabilityCriteriaComparisonInputSet_ActivityRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($controller :  gw.bizrules.pcf.RuleVersionComparisonController) : void {
    __widgetOf(this, pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ActivityRule, SECTION_WIDGET_CLASS).setVariables(false, {$controller})
  }
  
  function refreshVariables ($controller :  gw.bizrules.pcf.RuleVersionComparisonController) : void {
    __widgetOf(this, pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ActivityRule, SECTION_WIDGET_CLASS).setVariables(true, {$controller})
  }
  
  
}