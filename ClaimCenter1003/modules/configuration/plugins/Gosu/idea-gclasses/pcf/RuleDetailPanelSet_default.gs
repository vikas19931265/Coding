package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleDetailPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleDetailPanelSet_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($context :  gw.bizrules.CCRulesNavigationContext, $version :  RuleVersion, $importingVersion :  boolean, $controller :  gw.bizrules.pcf.RulePageController, $ruleConditionType :  RuleConditionType) : void {
    __widgetOf(this, pcf.RuleDetailPanelSet_default, SECTION_WIDGET_CLASS).setVariables(false, {$context, $version, $importingVersion, $controller, $ruleConditionType})
  }
  
  function refreshVariables ($context :  gw.bizrules.CCRulesNavigationContext, $version :  RuleVersion, $importingVersion :  boolean, $controller :  gw.bizrules.pcf.RulePageController, $ruleConditionType :  RuleConditionType) : void {
    __widgetOf(this, pcf.RuleDetailPanelSet_default, SECTION_WIDGET_CLASS).setVariables(true, {$context, $version, $importingVersion, $controller, $ruleConditionType})
  }
  
  
}