package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonCommandParametersInputSet.createreserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleComparisonCommandParametersInputSet_createreserveExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleComparisonCommandParametersInputSet.createreserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleComparisonCommandParametersInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=costtype) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 16, column 22
    function def_onEnter_0 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.COST_TYPE.Name))
    }
    
    // 'def' attribute on InputSetRef (id=comments) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 31, column 22
    function def_onEnter_10 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.COMMENTS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=costcategory) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 19, column 26
    function def_onEnter_2 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.COST_CATEGORY.Name))
    }
    
    // 'def' attribute on InputSetRef (id=respectfinancialholds) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 22, column 35
    function def_onEnter_4 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.RESPECT_FINANCIAL_HOLDS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=amount) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 25, column 20
    function def_onEnter_6 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.AMOUNT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=currency) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 28, column 22
    function def_onEnter_8 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.onEnter(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.CURRENCY.Name))
    }
    
    // 'def' attribute on InputSetRef (id=costtype) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 16, column 22
    function def_refreshVariables_1 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.COST_TYPE.Name))
    }
    
    // 'def' attribute on InputSetRef (id=comments) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 31, column 22
    function def_refreshVariables_11 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.COMMENTS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=costcategory) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 19, column 26
    function def_refreshVariables_3 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.COST_CATEGORY.Name))
    }
    
    // 'def' attribute on InputSetRef (id=respectfinancialholds) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 22, column 35
    function def_refreshVariables_5 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.RESPECT_FINANCIAL_HOLDS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=amount) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 25, column 20
    function def_refreshVariables_7 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.AMOUNT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=currency) at RuleComparisonCommandParametersInputSet.createreserve.pcf: line 28, column 22
    function def_refreshVariables_9 (def :  pcf.RuleComparisonRowStringInputSet) : void {
      def.refreshVariables(commandDefinitionDiff.getRow(gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config.CURRENCY.Name))
    }
    
    property get commandDefinitionDiff () : gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition> {
      return getRequireValue("commandDefinitionDiff", 0) as gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>
    }
    
    property set commandDefinitionDiff ($arg :  gw.bizrules.diff.RuleMatchableDiffPair<RuleCommandDefinition>) {
      setRequireValue("commandDefinitionDiff", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RuleVersionComparisonController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RuleVersionComparisonController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RuleVersionComparisonController) {
      setRequireValue("controller", 0, $arg)
    }
    
    
  }
  
  
}