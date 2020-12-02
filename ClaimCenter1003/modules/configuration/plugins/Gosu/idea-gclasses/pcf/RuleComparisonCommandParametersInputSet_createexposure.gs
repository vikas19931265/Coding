package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonCommandParametersInputSet.createexposure.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleComparisonCommandParametersInputSet_createexposure extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($controller :  gw.bizrules.pcf.RuleVersionComparisonController, $commandDefinitionDiff :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>) : void {
    __widgetOf(this, pcf.RuleComparisonCommandParametersInputSet_createexposure, SECTION_WIDGET_CLASS).setVariables(false, {$controller, $commandDefinitionDiff})
  }
  
  function refreshVariables ($controller :  gw.bizrules.pcf.RuleVersionComparisonController, $commandDefinitionDiff :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>) : void {
    __widgetOf(this, pcf.RuleComparisonCommandParametersInputSet_createexposure, SECTION_WIDGET_CLASS).setVariables(true, {$controller, $commandDefinitionDiff})
  }
  
  
}