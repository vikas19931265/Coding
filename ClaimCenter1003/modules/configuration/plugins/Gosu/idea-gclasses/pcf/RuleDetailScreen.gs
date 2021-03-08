package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleDetailScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($context :  gw.bizrules.CCRulesNavigationContext, $stateHolder :  gw.bizrules.CCRulesDetailsStateHolder, $head :  RuleHead) : void {
    __widgetOf(this, pcf.RuleDetailScreen, SECTION_WIDGET_CLASS).setVariables(false, {$context, $stateHolder, $head})
  }
  
  function refreshVariables ($context :  gw.bizrules.CCRulesNavigationContext, $stateHolder :  gw.bizrules.CCRulesDetailsStateHolder, $head :  RuleHead) : void {
    __widgetOf(this, pcf.RuleDetailScreen, SECTION_WIDGET_CLASS).setVariables(true, {$context, $stateHolder, $head})
  }
  
  
}