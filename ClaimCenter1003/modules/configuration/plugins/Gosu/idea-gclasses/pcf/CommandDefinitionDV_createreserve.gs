package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionDV.createreserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CommandDefinitionDV_createreserve extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($commandDefinition :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : void {
    __widgetOf(this, pcf.CommandDefinitionDV_createreserve, SECTION_WIDGET_CLASS).setVariables(false, {$commandDefinition})
  }
  
  function refreshVariables ($commandDefinition :  gw.bizrules.pcf.RuleCommandDefinitionHolder) : void {
    __widgetOf(this, pcf.CommandDefinitionDV_createreserve, SECTION_WIDGET_CLASS).setVariables(true, {$commandDefinition})
  }
  
  
}