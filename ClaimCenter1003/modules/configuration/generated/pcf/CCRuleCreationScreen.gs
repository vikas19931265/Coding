package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRuleCreationScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CCRuleCreationScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($context :  gw.bizrules.CCRulesNavigationContext, $ruleToClone :  CCRule, $head :  RuleHead) : void {
    __widgetOf(this, pcf.CCRuleCreationScreen, SECTION_WIDGET_CLASS).setVariables(false, {$context, $ruleToClone, $head})
  }
  
  function refreshVariables ($context :  gw.bizrules.CCRulesNavigationContext, $ruleToClone :  CCRule, $head :  RuleHead) : void {
    __widgetOf(this, pcf.CCRuleCreationScreen, SECTION_WIDGET_CLASS).setVariables(true, {$context, $ruleToClone, $head})
  }
  
  
}