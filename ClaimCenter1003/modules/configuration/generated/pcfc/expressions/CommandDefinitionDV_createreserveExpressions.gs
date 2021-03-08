package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionDV.createreserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommandDefinitionDV_createreserveExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionDV.createreserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommandDefinitionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=RespectFinancialHolds) at CommandDefinitionDV.createreserve.pcf: line 43, column 37
    function def_onEnter_14 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.RESPECT_FINANCIAL_HOLDS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Amount) at CommandDefinitionDV.createreserve.pcf: line 46, column 22
    function def_onEnter_16 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.AMOUNT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Currency) at CommandDefinitionDV.createreserve.pcf: line 50, column 24
    function def_onEnter_19 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.CURRENCY.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Comments) at CommandDefinitionDV.createreserve.pcf: line 53, column 24
    function def_onEnter_21 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.COMMENTS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=RespectFinancialHolds) at CommandDefinitionDV.createreserve.pcf: line 43, column 37
    function def_refreshVariables_15 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.RESPECT_FINANCIAL_HOLDS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Amount) at CommandDefinitionDV.createreserve.pcf: line 46, column 22
    function def_refreshVariables_17 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.AMOUNT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Currency) at CommandDefinitionDV.createreserve.pcf: line 50, column 24
    function def_refreshVariables_20 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.CURRENCY.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Comments) at CommandDefinitionDV.createreserve.pcf: line 53, column 24
    function def_refreshVariables_22 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.COMMENTS.Name))
    }
    
    // 'value' attribute on TypeKeyInput (id=CostType_Input) at CommandDefinitionDV.createreserve.pcf: line 27, column 38
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      state.CostType = (__VALUE_TO_SET as typekey.CostType)
    }
    
    // 'value' attribute on RangeInput (id=CostCategory_Input) at CommandDefinitionDV.createreserve.pcf: line 39, column 42
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      state.CostCategory = (__VALUE_TO_SET as typekey.CostCategory)
    }
    
    // 'editable' attribute on InputSetRef (id=Currency) at CommandDefinitionDV.createreserve.pcf: line 50, column 24
    function editable_18 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'initialValue' attribute on Variable at CommandDefinitionDV.createreserve.pcf: line 15, column 82
    function initialValue_0 () : gw.bizrules.ruleaction.createreserve.ReserveCommandDefinitionState {
      return new gw.bizrules.ruleaction.createreserve.ReserveCommandDefinitionState(commandDefinition)
    }
    
    // 'initialValue' attribute on Variable at CommandDefinitionDV.createreserve.pcf: line 19, column 89
    function initialValue_1 () : gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterConfig {
      return gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterSet.Config
    }
    
    // 'optionLabel' attribute on RangeInput (id=CostCategory_Input) at CommandDefinitionDV.createreserve.pcf: line 39, column 42
    function optionLabel_9 (VALUE :  typekey.CostCategory) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at CommandDefinitionDV.createreserve.pcf: line 39, column 42
    function valueRange_10 () : java.lang.Object {
      return state.AvailableCostCategories
    }
    
    // 'value' attribute on TypeKeyInput (id=CostType_Input) at CommandDefinitionDV.createreserve.pcf: line 27, column 38
    function valueRoot_4 () : java.lang.Object {
      return state
    }
    
    // 'value' attribute on TypeKeyInput (id=CostType_Input) at CommandDefinitionDV.createreserve.pcf: line 27, column 38
    function value_2 () : typekey.CostType {
      return state.CostType
    }
    
    // 'value' attribute on RangeInput (id=CostCategory_Input) at CommandDefinitionDV.createreserve.pcf: line 39, column 42
    function value_6 () : typekey.CostCategory {
      return state.CostCategory
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at CommandDefinitionDV.createreserve.pcf: line 39, column 42
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at CommandDefinitionDV.createreserve.pcf: line 39, column 42
    function verifyValueRangeIsAllowedType_11 ($$arg :  typekey.CostCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at CommandDefinitionDV.createreserve.pcf: line 39, column 42
    function verifyValueRange_12 () : void {
      var __valueRangeArg = state.AvailableCostCategories
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    property get commandDefinition () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return getRequireValue("commandDefinition", 0) as gw.bizrules.pcf.RuleCommandDefinitionHolder
    }
    
    property set commandDefinition ($arg :  gw.bizrules.pcf.RuleCommandDefinitionHolder) {
      setRequireValue("commandDefinition", 0, $arg)
    }
    
    property get config () : gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterConfig {
      return getVariableValue("config", 0) as gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterConfig
    }
    
    property set config ($arg :  gw.bizrules.ruleaction.createreserve.config.ReserveCommandParameterConfig) {
      setVariableValue("config", 0, $arg)
    }
    
    property get state () : gw.bizrules.ruleaction.createreserve.ReserveCommandDefinitionState {
      return getVariableValue("state", 0) as gw.bizrules.ruleaction.createreserve.ReserveCommandDefinitionState
    }
    
    property set state ($arg :  gw.bizrules.ruleaction.createreserve.ReserveCommandDefinitionState) {
      setVariableValue("state", 0, $arg)
    }
    
    
  }
  
  
}