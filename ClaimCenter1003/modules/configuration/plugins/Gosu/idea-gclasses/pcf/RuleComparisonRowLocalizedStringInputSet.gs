package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonRowLocalizedStringInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RuleComparisonRowLocalizedStringInputSet extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($commandDefinitionDiff :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>, $rowName :  String) : void {
    __widgetOf(this, pcf.RuleComparisonRowLocalizedStringInputSet, SECTION_WIDGET_CLASS).setVariables(false, {$commandDefinitionDiff, $rowName})
  }
  
  function refreshVariables ($commandDefinitionDiff :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>, $rowName :  String) : void {
    __widgetOf(this, pcf.RuleComparisonRowLocalizedStringInputSet, SECTION_WIDGET_CLASS).setVariables(true, {$commandDefinitionDiff, $rowName})
  }
  
  
}