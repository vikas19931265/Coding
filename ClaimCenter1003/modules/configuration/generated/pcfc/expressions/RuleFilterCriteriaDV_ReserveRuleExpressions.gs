package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/RuleFilterCriteriaDV.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleFilterCriteriaDV_ReserveRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ReserveRules/RuleFilterCriteriaDV.ReserveRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleFilterCriteriaDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ReserveRule.pcf: line 97, column 41
    function def_onEnter_49 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ActivityRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ReserveRule.pcf: line 97, column 41
    function def_onEnter_51 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ReserveRule.pcf: line 97, column 41
    function def_onEnter_53 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ReserveRule.pcf: line 97, column 41
    function def_refreshVariables_50 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ActivityRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ReserveRule.pcf: line 97, column 41
    function def_refreshVariables_52 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ReserveRule.pcf: line 97, column 41
    function def_refreshVariables_54 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 43, column 29
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Availability = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 52, column 25
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.LossType = (__VALUE_TO_SET as LossType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 62, column 25
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.PolicyType = (__VALUE_TO_SET as PolicyType)
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 25, column 54
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.NameOrDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 71, column 25
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Jurisdiction = (__VALUE_TO_SET as Jurisdiction)
    }
    
    // 'value' attribute on TypeKeyInput (id=ExposureTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 82, column 25
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.ExposureType = (__VALUE_TO_SET as ExposureType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ClaimSegmentFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 90, column 25
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.ClaimSegment = (__VALUE_TO_SET as ClaimSegment)
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 35, column 81
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Status = (__VALUE_TO_SET as gw.bizrules.management.RuleQueryFactory<ReserveRule>)
    }
    
    // 'filter' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 62, column 25
    function filter_29 (VALUE :  PolicyType, VALUES :  PolicyType[]) : java.lang.Boolean {
      return reserveRuleUtil.findApplicablePolicyTypesForLossType(ruleFilterCriteria.LossType).contains(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=ExposureTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 82, column 25
    function filter_40 (VALUE :  ExposureType, VALUES :  ExposureType[]) : java.lang.Boolean {
      return reserveRuleUtil.findApplicableExposureTypesForLossTypeAndPolicyType(ruleFilterCriteria.LossType, ruleFilterCriteria.PolicyType).contains(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=ClaimSegmentFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 90, column 25
    function filter_46 (VALUE :  ClaimSegment, VALUES :  ClaimSegment[]) : java.lang.Boolean {
      return reserveRuleUtil.findApplicableClaimSegmentsForLossType(ruleFilterCriteria.LossType).contains(VALUE)
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaDV.ReserveRule.pcf: line 15, column 66
    function initialValue_0 () : gw.bizrules.ReserveRules.ReserveRuleFilterCriteria {
      return filterCriteria as gw.bizrules.ReserveRules.ReserveRuleFilterCriteria
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaDV.ReserveRule.pcf: line 19, column 56
    function initialValue_1 () : gw.bizrules.ReserveRules.ReserveRuleUtil {
      return new gw.bizrules.ReserveRules.ReserveRuleUtil()
    }
    
    // 'optionLabel' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 35, column 81
    function optionLabel_9 (VALUE :  gw.bizrules.management.RuleQueryFactory<ReserveRule>) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 35, column 81
    function valueRange_10 () : java.lang.Object {
      return ruleFilterCriteria.AvailableStatuses
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 43, column 29
    function valueRange_17 () : java.lang.Object {
      return ruleFilterCriteria.AvailabilityVals
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 25, column 54
    function valueRoot_4 () : java.lang.Object {
      return ruleFilterCriteria
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 43, column 29
    function value_14 () : String {
      return ruleFilterCriteria.Availability
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 25, column 54
    function value_2 () : java.lang.String {
      return ruleFilterCriteria.NameOrDescription
    }
    
    // 'value' attribute on TypeKeyInput (id=LossTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 52, column 25
    function value_21 () : LossType {
      return ruleFilterCriteria.LossType
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 62, column 25
    function value_26 () : PolicyType {
      return ruleFilterCriteria.PolicyType
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 71, column 25
    function value_32 () : Jurisdiction {
      return ruleFilterCriteria.Jurisdiction
    }
    
    // 'value' attribute on TypeKeyInput (id=ExposureTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 82, column 25
    function value_37 () : ExposureType {
      return ruleFilterCriteria.ExposureType
    }
    
    // 'value' attribute on TypeKeyInput (id=ClaimSegmentFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 90, column 25
    function value_43 () : ClaimSegment {
      return ruleFilterCriteria.ClaimSegment
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 35, column 81
    function value_6 () : gw.bizrules.management.RuleQueryFactory<ReserveRule> {
      return ruleFilterCriteria.Status
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 35, column 81
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.bizrules.management.RuleQueryFactory<ReserveRule>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 35, column 81
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 43, column 29
    function verifyValueRangeIsAllowedType_18 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 43, column 29
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 35, column 81
    function verifyValueRange_12 () : void {
      var __valueRangeArg = ruleFilterCriteria.AvailableStatuses
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 43, column 29
    function verifyValueRange_19 () : void {
      var __valueRangeArg = ruleFilterCriteria.AvailabilityVals
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=LossTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 52, column 25
    function verifyValueType_25 () : void {
      var __valueTypeArg : LossType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 62, column 25
    function verifyValueType_31 () : void {
      var __valueTypeArg : PolicyType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 71, column 25
    function verifyValueType_36 () : void {
      var __valueTypeArg : Jurisdiction
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ExposureTypeFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 82, column 25
    function verifyValueType_42 () : void {
      var __valueTypeArg : ExposureType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ClaimSegmentFilter_Input) at RuleFilterCriteriaDV.ReserveRule.pcf: line 90, column 25
    function verifyValueType_48 () : void {
      var __valueTypeArg : ClaimSegment
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
    
    property get reserveRuleUtil () : gw.bizrules.ReserveRules.ReserveRuleUtil {
      return getVariableValue("reserveRuleUtil", 0) as gw.bizrules.ReserveRules.ReserveRuleUtil
    }
    
    property set reserveRuleUtil ($arg :  gw.bizrules.ReserveRules.ReserveRuleUtil) {
      setVariableValue("reserveRuleUtil", 0, $arg)
    }
    
    property get ruleFilterCriteria () : gw.bizrules.ReserveRules.ReserveRuleFilterCriteria {
      return getVariableValue("ruleFilterCriteria", 0) as gw.bizrules.ReserveRules.ReserveRuleFilterCriteria
    }
    
    property set ruleFilterCriteria ($arg :  gw.bizrules.ReserveRules.ReserveRuleFilterCriteria) {
      setVariableValue("ruleFilterCriteria", 0, $arg)
    }
    
    
  }
  
  
}