package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/RuleFilterCriteriaDV.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleFilterCriteriaDV_ActivityRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/RuleFilterCriteriaDV.ActivityRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleFilterCriteriaDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ActivityRule.pcf: line 71, column 42
    function def_onEnter_35 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ActivityRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ActivityRule.pcf: line 71, column 42
    function def_onEnter_37 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ActivityRule.pcf: line 71, column 42
    function def_onEnter_39 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ActivityRule.pcf: line 71, column 42
    function def_refreshVariables_36 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ActivityRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ActivityRule.pcf: line 71, column 42
    function def_refreshVariables_38 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ActivityRule.pcf: line 71, column 42
    function def_refreshVariables_40 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 39, column 29
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Availability = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 21, column 54
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.NameOrDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossTypeFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 48, column 25
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.LossType = (__VALUE_TO_SET as LossType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 56, column 25
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.PolicyType = (__VALUE_TO_SET as PolicyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 64, column 25
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Jurisdiction = (__VALUE_TO_SET as Jurisdiction)
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 31, column 82
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Status = (__VALUE_TO_SET as gw.bizrules.management.RuleQueryFactory<ActivityRule>)
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaDV.ActivityRule.pcf: line 15, column 68
    function initialValue_0 () : gw.bizrules.ActivityRules.ActivityRuleFilterCriteria {
      return filterCriteria as gw.bizrules.ActivityRules.ActivityRuleFilterCriteria
    }
    
    // 'optionLabel' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 31, column 82
    function optionLabel_8 (VALUE :  gw.bizrules.management.RuleQueryFactory<ActivityRule>) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 39, column 29
    function valueRange_16 () : java.lang.Object {
      return ruleFilterCriteria.AvailabilityVals
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 31, column 82
    function valueRange_9 () : java.lang.Object {
      return ruleFilterCriteria.AvailableStatuses
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 21, column 54
    function valueRoot_3 () : java.lang.Object {
      return ruleFilterCriteria
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 21, column 54
    function value_1 () : java.lang.String {
      return ruleFilterCriteria.NameOrDescription
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 39, column 29
    function value_13 () : String {
      return ruleFilterCriteria.Availability
    }
    
    // 'value' attribute on TypeKeyInput (id=LossTypeFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 48, column 25
    function value_20 () : LossType {
      return ruleFilterCriteria.LossType
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 56, column 25
    function value_25 () : PolicyType {
      return ruleFilterCriteria.PolicyType
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 64, column 25
    function value_30 () : Jurisdiction {
      return ruleFilterCriteria.Jurisdiction
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 31, column 82
    function value_5 () : gw.bizrules.management.RuleQueryFactory<ActivityRule> {
      return ruleFilterCriteria.Status
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 31, column 82
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.bizrules.management.RuleQueryFactory<ActivityRule>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 31, column 82
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 39, column 29
    function verifyValueRangeIsAllowedType_17 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 39, column 29
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 31, column 82
    function verifyValueRange_11 () : void {
      var __valueRangeArg = ruleFilterCriteria.AvailableStatuses
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 39, column 29
    function verifyValueRange_18 () : void {
      var __valueRangeArg = ruleFilterCriteria.AvailabilityVals
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=LossTypeFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 48, column 25
    function verifyValueType_24 () : void {
      var __valueTypeArg : LossType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 56, column 25
    function verifyValueType_29 () : void {
      var __valueTypeArg : PolicyType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ActivityRule.pcf: line 64, column 25
    function verifyValueType_34 () : void {
      var __valueTypeArg : Jurisdiction
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get filterCriteria () : gw.bizrules.CCRuleFilterCriteria {
      return getRequireValue("filterCriteria", 0) as gw.bizrules.CCRuleFilterCriteria
    }
    
    property set filterCriteria ($arg :  gw.bizrules.CCRuleFilterCriteria) {
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