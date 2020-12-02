package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/ApplicabilityCriteriaDV.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ApplicabilityCriteriaDV_ReserveRule extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($context :  gw.bizrules.CCRulesNavigationContext, $version :  RuleVersion) : void {
    __widgetOf(this, pcf.ApplicabilityCriteriaDV_ReserveRule, SECTION_WIDGET_CLASS).setVariables(false, {$context, $version})
  }
  
  function refreshVariables ($context :  gw.bizrules.CCRulesNavigationContext, $version :  RuleVersion) : void {
    __widgetOf(this, pcf.ApplicabilityCriteriaDV_ReserveRule, SECTION_WIDGET_CLASS).setVariables(true, {$context, $version})
  }
  
  
}