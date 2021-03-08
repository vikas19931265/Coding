package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonRowLocalizedStringInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleComparisonRowLocalizedStringInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonRowLocalizedStringInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RuleComparisonRowLocalizedStringInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonRowLocalizedStringInputSet.pcf: line 30, column 64
    function def_onEnter_6 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(localizedRow)
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonRowLocalizedStringInputSet.pcf: line 30, column 64
    function def_refreshVariables_7 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(localizedRow)
    }
    
    property get localizedRow () : gw.bizrules.pcf.RuleComparisonRow<java.lang.String> {
      return getIteratedValue(1) as gw.bizrules.pcf.RuleComparisonRow<java.lang.String>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonRowLocalizedStringInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleComparisonRowLocalizedStringInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonRowLocalizedStringInputSet.pcf: line 19, column 36
    function def_onEnter_2 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(rowName))
    }
    
    // 'def' attribute on InputSetRef (id=defaultValue) at RuleComparisonRowLocalizedStringInputSet.pcf: line 24, column 28
    function def_onEnter_4 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(new gw.bizrules.pcf.RuleComparisonRow<String>(rowName, false, {"", ""}))
    }
    
    // 'def' attribute on InputSetRef at RuleComparisonRowLocalizedStringInputSet.pcf: line 19, column 36
    function def_refreshVariables_3 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(rowName))
    }
    
    // 'def' attribute on InputSetRef (id=defaultValue) at RuleComparisonRowLocalizedStringInputSet.pcf: line 24, column 28
    function def_refreshVariables_5 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(new gw.bizrules.pcf.RuleComparisonRow<String>(rowName, false, {"", ""}))
    }
    
    // 'initialValue' attribute on Variable at RuleComparisonRowLocalizedStringInputSet.pcf: line 16, column 23
    function initialValue_0 () : Boolean {
      return gw.api.util.LocaleUtil.AllLanguages.size() == 1
    }
    
    // 'value' attribute on InputIterator at RuleComparisonRowLocalizedStringInputSet.pcf: line 28, column 81
    function value_8 () : gw.bizrules.pcf.RuleComparisonRow<java.lang.String>[] {
      return gw.api.util.LocaleUtil.AllLanguages.stream().map(\lang -> commandDefinitionDiff.getLocalizedRow(lang, rowName)).toTypedArray()
    }
    
    // 'visible' attribute on InputSetRef at RuleComparisonRowLocalizedStringInputSet.pcf: line 19, column 36
    function visible_1 () : java.lang.Boolean {
      return useSingleLanguage
    }
    
    // 'visible' attribute on InputSet at RuleComparisonRowLocalizedStringInputSet.pcf: line 21, column 36
    function visible_9 () : java.lang.Boolean {
      return !useSingleLanguage
    }
    
    property get commandDefinitionDiff () : gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition> {
      return getRequireValue("commandDefinitionDiff", 0) as gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>
    }
    
    property set commandDefinitionDiff ($arg :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>) {
      setRequireValue("commandDefinitionDiff", 0, $arg)
    }
    
    property get rowName () : String {
      return getRequireValue("rowName", 0) as String
    }
    
    property set rowName ($arg :  String) {
      setRequireValue("rowName", 0, $arg)
    }
    
    property get useSingleLanguage () : Boolean {
      return getVariableValue("useSingleLanguage", 0) as Boolean
    }
    
    property set useSingleLanguage ($arg :  Boolean) {
      setVariableValue("useSingleLanguage", 0, $arg)
    }
    
    
  }
  
  
}