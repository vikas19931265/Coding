package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LocalizedCommandDefinitionParameterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class LocalizedCommandDefinitionParameterInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($state :  gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState, $defaultLocaleCommandParameter :  gw.bizrules.ruleaction.config.CCLocalizedCommandParameterDefinition) : void {
    __widgetOf(this, pcf.LocalizedCommandDefinitionParameterInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$state, $defaultLocaleCommandParameter})
  }
  
  function refreshVariables ($state :  gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState, $defaultLocaleCommandParameter :  gw.bizrules.ruleaction.config.CCLocalizedCommandParameterDefinition) : void {
    __widgetOf(this, pcf.LocalizedCommandDefinitionParameterInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$state, $defaultLocaleCommandParameter})
  }
  
  
}