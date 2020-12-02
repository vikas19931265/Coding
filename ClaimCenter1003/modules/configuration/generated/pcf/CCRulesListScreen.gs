package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRulesListScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CCRulesListScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($context :  gw.bizrules.CCRulesNavigationContext) : void {
    __widgetOf(this, pcf.CCRulesListScreen, SECTION_WIDGET_CLASS).setVariables(false, {$context})
  }
  
  function refreshVariables ($context :  gw.bizrules.CCRulesNavigationContext) : void {
    __widgetOf(this, pcf.CCRulesListScreen, SECTION_WIDGET_CLASS).setVariables(true, {$context})
  }
  
  
}