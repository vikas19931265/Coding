package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleApplicabilityCriteriaComparisonInputSet.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CCRuleApplicabilityCriteriaComparisonInputSet_ReserveRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($controller :  gw.bizrules.pcf.RuleVersionComparisonController) : void {
    __widgetOf(this, pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ReserveRule, SECTION_WIDGET_CLASS).setVariables(false, {$controller})
  }
  
  function refreshVariables ($controller :  gw.bizrules.pcf.RuleVersionComparisonController) : void {
    __widgetOf(this, pcf.CCRuleApplicabilityCriteriaComparisonInputSet_ReserveRule, SECTION_WIDGET_CLASS).setVariables(true, {$controller})
  }
  
  
}