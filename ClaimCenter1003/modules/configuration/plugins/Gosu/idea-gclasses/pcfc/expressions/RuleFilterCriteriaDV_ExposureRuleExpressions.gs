package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/RuleFilterCriteriaDV.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleFilterCriteriaDV_ExposureRuleExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ExposureRules/RuleFilterCriteriaDV.ExposureRule.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleFilterCriteriaDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ExposureRule.pcf: line 89, column 42
    function def_onEnter_42 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ActivityRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ExposureRule.pcf: line 89, column 42
    function def_onEnter_44 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ExposureRule.pcf: line 89, column 42
    function def_onEnter_46 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule) : void {
      def.onEnter(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ExposureRule.pcf: line 89, column 42
    function def_refreshVariables_43 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ActivityRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ExposureRule.pcf: line 89, column 42
    function def_refreshVariables_45 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ExposureRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'def' attribute on InputSetRef at RuleFilterCriteriaDV.ExposureRule.pcf: line 89, column 42
    function def_refreshVariables_47 (def :  pcf.RuleFilterCriteriaRuleActionInputSet_ReserveRule) : void {
      def.refreshVariables(ruleFilterCriteria)
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 43, column 29
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Availability = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 53, column 25
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.PolicyType = (__VALUE_TO_SET as PolicyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=IncidentTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 64, column 25
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.IncidentType = (__VALUE_TO_SET as typekey.Incident)
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 25, column 54
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.NameOrDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossPartyTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 74, column 25
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.LossPartyType = (__VALUE_TO_SET as LossPartyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 82, column 25
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Jurisdiction = (__VALUE_TO_SET as Jurisdiction)
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 35, column 82
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      ruleFilterCriteria.Status = (__VALUE_TO_SET as gw.bizrules.management.RuleQueryFactory<ExposureRule>)
    }
    
    // 'filter' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 53, column 25
    function filter_24 (VALUE :  PolicyType, VALUES :  PolicyType[]) : java.lang.Boolean {
      return exposureRuleUtil.ApplicablePolicyTypes.contains(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=IncidentTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 64, column 25
    function filter_30 (VALUE :  typekey.Incident, VALUES :  typekey.Incident[]) : java.lang.Boolean {
      return exposureRuleUtil.getApplicableIncidentsForPolicy(ruleFilterCriteria.PolicyType).contains(VALUE)
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaDV.ExposureRule.pcf: line 15, column 68
    function initialValue_0 () : gw.bizrules.ExposureRules.ExposureRuleFilterCriteria {
      return filterCriteria as gw.bizrules.ExposureRules.ExposureRuleFilterCriteria
    }
    
    // 'initialValue' attribute on Variable at RuleFilterCriteriaDV.ExposureRule.pcf: line 19, column 58
    function initialValue_1 () : gw.bizrules.ExposureRules.ExposureRuleUtil {
      return new gw.bizrules.ExposureRules.ExposureRuleUtil()
    }
    
    // 'optionLabel' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 35, column 82
    function optionLabel_9 (VALUE :  gw.bizrules.management.RuleQueryFactory<ExposureRule>) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 35, column 82
    function valueRange_10 () : java.lang.Object {
      return ruleFilterCriteria.AvailableStatuses
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 43, column 29
    function valueRange_17 () : java.lang.Object {
      return ruleFilterCriteria.AvailabilityVals
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 25, column 54
    function valueRoot_4 () : java.lang.Object {
      return ruleFilterCriteria
    }
    
    // 'value' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 43, column 29
    function value_14 () : String {
      return ruleFilterCriteria.Availability
    }
    
    // 'value' attribute on TextInput (id=TextFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 25, column 54
    function value_2 () : java.lang.String {
      return ruleFilterCriteria.NameOrDescription
    }
    
    // 'value' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 53, column 25
    function value_21 () : PolicyType {
      return ruleFilterCriteria.PolicyType
    }
    
    // 'value' attribute on TypeKeyInput (id=IncidentTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 64, column 25
    function value_27 () : typekey.Incident {
      return ruleFilterCriteria.IncidentType
    }
    
    // 'value' attribute on TypeKeyInput (id=LossPartyTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 74, column 25
    function value_32 () : LossPartyType {
      return ruleFilterCriteria.LossPartyType
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 82, column 25
    function value_37 () : Jurisdiction {
      return ruleFilterCriteria.Jurisdiction
    }
    
    // 'value' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 35, column 82
    function value_6 () : gw.bizrules.management.RuleQueryFactory<ExposureRule> {
      return ruleFilterCriteria.Status
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 35, column 82
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.bizrules.management.RuleQueryFactory<ExposureRule>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 35, column 82
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 43, column 29
    function verifyValueRangeIsAllowedType_18 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 43, column 29
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Status_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 35, column 82
    function verifyValueRange_12 () : void {
      var __valueRangeArg = ruleFilterCriteria.AvailableStatuses
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Availability_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 43, column 29
    function verifyValueRange_19 () : void {
      var __valueRangeArg = ruleFilterCriteria.AvailabilityVals
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=PolicyTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 53, column 25
    function verifyValueType_26 () : void {
      var __valueTypeArg : PolicyType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=LossPartyTypeFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 74, column 25
    function verifyValueType_36 () : void {
      var __valueTypeArg : LossPartyType
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=JurisdictionFilter_Input) at RuleFilterCriteriaDV.ExposureRule.pcf: line 82, column 25
    function verifyValueType_41 () : void {
      var __valueTypeArg : Jurisdiction
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    property get exposureRuleUtil () : gw.bizrules.ExposureRules.ExposureRuleUtil {
      return getVariableValue("exposureRuleUtil", 0) as gw.bizrules.ExposureRules.ExposureRuleUtil
    }
    
    property set exposureRuleUtil ($arg :  gw.bizrules.ExposureRules.ExposureRuleUtil) {
      setVariableValue("exposureRuleUtil", 0, $arg)
    }
    
    property get filterCriteria () : gw.bizrules.CCRuleFilterCriteria {
      return getRequireValue("filterCriteria", 0) as gw.bizrules.CCRuleFilterCriteria
    }
    
    property set filterCriteria ($arg :  gw.bizrules.CCRuleFilterCriteria) {
      setRequireValue("filterCriteria", 0, $arg)
    }
    
    property get ruleFilterCriteria () : gw.bizrules.ExposureRules.ExposureRuleFilterCriteria {
      return getVariableValue("ruleFilterCriteria", 0) as gw.bizrules.ExposureRules.ExposureRuleFilterCriteria
    }
    
    property set ruleFilterCriteria ($arg :  gw.bizrules.ExposureRules.ExposureRuleFilterCriteria) {
      setVariableValue("ruleFilterCriteria", 0, $arg)
    }
    
    
  }
  
  
}