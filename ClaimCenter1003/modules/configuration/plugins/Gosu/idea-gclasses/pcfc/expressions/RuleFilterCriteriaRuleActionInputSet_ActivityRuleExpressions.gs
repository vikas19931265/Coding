package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleFilterCriteriaRuleActionInputSet_ActivityRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleFilterCriteriaRuleActionInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=HistoryEventType_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 45, column 91
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.HistoryEventType = (__VALUE_TO_SET as gw.bizrules.ruleaction.generatehistoryevent.HistoryTypeWrapper)
    }
    
    // 'value' attribute on TypeKeyInput (id=ActionTypeFilter_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 23, column 23
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.RuleActionKey = (__VALUE_TO_SET as RuleActionKey)
    }
    
    // 'value' attribute on TextInput (id=Expression_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 53, column 79
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Expression = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on RangeInput (id=ActivityPattern_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 35, column 87
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.ActivityPattern = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'filter' attribute on TypeKeyInput (id=ActionTypeFilter_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 23, column 23
    function filter_4 (VALUE :  RuleActionKey, VALUES :  RuleActionKey[]) : java.util.List<RuleActionKey> {
      return ruleFilterCriteria.relevantActionsIn(VALUES)
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 15, column 68
    function initialValue_0 () : gw.bizrules.ActivityRules.ActivityRuleFilterCriteria {
      return filterCriteria as gw.bizrules.ActivityRules.ActivityRuleFilterCriteria
    }
    
    // 'valueRange' attribute on RangeInput (id=ActivityPattern_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 35, column 87
    function valueRange_11 () : java.lang.Object {
      return gw.api.database.Query.make(entity.ActivityPattern).select().map(\elt -> elt.Code).toTypedArray()
    }
    
    // 'valueRange' attribute on RangeInput (id=HistoryEventType_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 45, column 91
    function valueRange_20 () : java.lang.Object {
      return gw.bizrules.ruleaction.generatehistoryevent.HistoryTypeWrapper.PossibleValues
    }
    
    // 'value' attribute on TypeKeyInput (id=ActionTypeFilter_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 23, column 23
    function valueRoot_3 () : java.lang.Object {
      return ruleFilterCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=ActionTypeFilter_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 23, column 23
    function value_1 () : RuleActionKey {
      return ruleFilterCriteria.RuleActionKey
    }
    
    // 'value' attribute on RangeInput (id=HistoryEventType_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 45, column 91
    function value_17 () : gw.bizrules.ruleaction.generatehistoryevent.HistoryTypeWrapper {
      return ruleFilterCriteria.HistoryEventType
    }
    
    // 'value' attribute on TextInput (id=Expression_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 53, column 79
    function value_26 () : String {
      return ruleFilterCriteria.Expression
    }
    
    // 'value' attribute on RangeInput (id=ActivityPattern_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 35, column 87
    function value_8 () : java.lang.String {
      return ruleFilterCriteria.ActivityPattern
    }
    
    // 'valueRange' attribute on RangeInput (id=ActivityPattern_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 35, column 87
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ActivityPattern_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 35, column 87
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HistoryEventType_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 45, column 91
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.bizrules.ruleaction.generatehistoryevent.HistoryTypeWrapper[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=HistoryEventType_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 45, column 91
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ActivityPattern_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 35, column 87
    function verifyValueRange_13 () : void {
      var __valueRangeArg = gw.api.database.Query.make(entity.ActivityPattern).select().map(\elt -> elt.Code).toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=HistoryEventType_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 45, column 91
    function verifyValueRange_22 () : void {
      var __valueRangeArg = gw.bizrules.ruleaction.generatehistoryevent.HistoryTypeWrapper.PossibleValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ActionTypeFilter_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 23, column 23
    function verifyValueType_6 () : void {
      var __valueTypeArg : RuleActionKey
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on RangeInput (id=HistoryEventType_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 45, column 91
    function visible_16 () : java.lang.Boolean {
      return ruleFilterCriteria.RuleActionKey == RuleActionKey.TC_GENERATEHISTORYEVENT
    }
    
    // 'visible' attribute on TextInput (id=Expression_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 53, column 79
    function visible_25 () : java.lang.Boolean {
      return ruleFilterCriteria.RuleActionKey == RuleActionKey.TC_SETFIELD
    }
    
    // 'visible' attribute on RangeInput (id=ActivityPattern_Input) at RuleFilterCriteriaRuleActionInputSet.ActivityRule.pcf: line 35, column 87
    function visible_7 () : java.lang.Boolean {
      return ruleFilterCriteria.RuleActionKey == RuleActionKey.TC_GENERATEACTIVITY
    }
    
    property get filterCriteria () : gw.bizrules.CCRuleFilterCriteriaBase {
      return getRequireValue("filterCriteria", 0) as gw.bizrules.CCRuleFilterCriteriaBase
    }
    
    property set filterCriteria ($arg :  gw.bizrules.CCRuleFilterCriteriaBase) {
      setRequireValue("filterCriteria", 0, $arg)
    }
    
    property get ruleFilterCriteria () : gw.bizrules.ActivityRules.ActivityRuleFilterCriteria {
      return getVariableValue("ruleFilterCriteria", 0) as gw.bizrules.ActivityRules.ActivityRuleFilterCriteria
    }
    
    property set ruleFilterCriteria ($arg :  gw.bizrules.ActivityRules.ActivityRuleFilterCriteria) {
      setVariableValue("ruleFilterCriteria", 0, $arg)
    }
    
    
  }
  
  
}