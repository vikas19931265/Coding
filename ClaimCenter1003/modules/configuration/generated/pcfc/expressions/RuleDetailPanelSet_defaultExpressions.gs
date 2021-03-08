package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleDetailPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleDetailPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleDetailPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleDetailPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at RuleDetailPanelSet.default.pcf: line 91, column 50
    function def_onEnter_39 (def :  pcf.AvailableToRunInputSet) : void {
      def.onEnter(version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 96, column 50
    function def_onEnter_41 (def :  pcf.ApplicabilityCriteriaDV_ActivityRule) : void {
      def.onEnter(context, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 96, column 50
    function def_onEnter_43 (def :  pcf.ApplicabilityCriteriaDV_ExposureRule) : void {
      def.onEnter(context, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 96, column 50
    function def_onEnter_45 (def :  pcf.ApplicabilityCriteriaDV_ReserveRule) : void {
      def.onEnter(context, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 101, column 70
    function def_onEnter_48 (def :  pcf.RuleVariablesPanelSet) : void {
      def.onEnter(controller.RuleVariableController)
    }
    
    // 'def' attribute on InputSetRef at RuleDetailPanelSet.default.pcf: line 49, column 104
    function def_onEnter_5 (def :  pcf.RuleManagementAuditLinkInputSet) : void {
      def.onEnter(context.VersionController, importingVersion, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 130, column 77
    function def_onEnter_54 (def :  pcf.ConditionBuilderPanelSet) : void {
      def.onEnter(controller.ConditionBuilderController)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 133, column 115
    function def_onEnter_59 (def :  pcf.RuleCommandDefinitionsListDetailView) : void {
      def.onEnter(controller.CommandDefinitionController, controller.Rule.Subtype)
    }
    
    // 'def' attribute on InputSetRef at RuleDetailPanelSet.default.pcf: line 91, column 50
    function def_refreshVariables_40 (def :  pcf.AvailableToRunInputSet) : void {
      def.refreshVariables(version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 96, column 50
    function def_refreshVariables_42 (def :  pcf.ApplicabilityCriteriaDV_ActivityRule) : void {
      def.refreshVariables(context, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 96, column 50
    function def_refreshVariables_44 (def :  pcf.ApplicabilityCriteriaDV_ExposureRule) : void {
      def.refreshVariables(context, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 96, column 50
    function def_refreshVariables_46 (def :  pcf.ApplicabilityCriteriaDV_ReserveRule) : void {
      def.refreshVariables(context, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 101, column 70
    function def_refreshVariables_49 (def :  pcf.RuleVariablesPanelSet) : void {
      def.refreshVariables(controller.RuleVariableController)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 130, column 77
    function def_refreshVariables_55 (def :  pcf.ConditionBuilderPanelSet) : void {
      def.refreshVariables(controller.ConditionBuilderController)
    }
    
    // 'def' attribute on InputSetRef at RuleDetailPanelSet.default.pcf: line 49, column 104
    function def_refreshVariables_6 (def :  pcf.RuleManagementAuditLinkInputSet) : void {
      def.refreshVariables(context.VersionController, importingVersion, version)
    }
    
    // 'def' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 133, column 115
    function def_refreshVariables_60 (def :  pcf.RuleCommandDefinitionsListDetailView) : void {
      def.refreshVariables(controller.CommandDefinitionController, controller.Rule.Subtype)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at RuleDetailPanelSet.default.pcf: line 63, column 45
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      version.Rule.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      controller.RuleContextDefinitionKey = (__VALUE_TO_SET as typekey.RuleContextDefinitionKey)
    }
    
    // 'value' attribute on RangeInput (id=TriggeringPointKey_Input) at RuleDetailPanelSet.default.pcf: line 87, column 50
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      version.Rule.TriggeringPointKey = (__VALUE_TO_SET as typekey.TriggeringPointKey)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DisplayRuleCondition_Input) at RuleDetailPanelSet.default.pcf: line 122, column 35
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      displayRuleConditions = (__VALUE_TO_SET as boolean)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RuleDetailPanelSet.default.pcf: line 55, column 37
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      version.Rule.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function editable_16 () : java.lang.Boolean {
      return triggerEntityValues.Count > 1
    }
    
    // 'editable' attribute on RangeInput (id=TriggeringPointKey_Input) at RuleDetailPanelSet.default.pcf: line 87, column 50
    function editable_30 () : java.lang.Boolean {
      return triggerActionValues.Count > 1
    }
    
    // 'editable' attribute on PanelSet (id=RuleDetailPanelSet) at RuleDetailPanelSet.default.pcf: line 8, column 20
    function editable_61 () : java.lang.Boolean {
      return version.Rule.Editable
    }
    
    // 'initialValue' attribute on Variable at RuleDetailPanelSet.default.pcf: line 27, column 28
    function initialValue_0 () : typekey.Rule {
      return version.Rule.Subtype
    }
    
    // 'initialValue' attribute on Variable at RuleDetailPanelSet.default.pcf: line 31, column 52
    function initialValue_1 () : List<RuleContextDefinitionKey> {
      return context.getTriggerEntityValues(ruleSubType)
    }
    
    // 'initialValue' attribute on Variable at RuleDetailPanelSet.default.pcf: line 36, column 54
    function initialValue_2 () : List<typekey.TriggeringPointKey> {
      return context.getTriggerActionValues(ruleSubType, controller.RuleContextDefinitionKey)
    }
    
    // 'initialValue' attribute on Variable at RuleDetailPanelSet.default.pcf: line 41, column 23
    function initialValue_3 () : Boolean {
      return initSingleOpptionFields()
    }
    
    // 'initialValue' attribute on Variable at RuleDetailPanelSet.default.pcf: line 45, column 23
    function initialValue_4 () : boolean {
      return ruleConditionType != RuleConditionType.TC_ALWAYSTRUE
    }
    
    // 'label' attribute on Verbatim (id=ExposureActionHint) at RuleDetailPanelSet.default.pcf: line 140, column 49
    function label_58 () : java.lang.String {
      return context.CreateActionHintLabel
    }
    
    // 'mode' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 96, column 50
    function mode_47 () : java.lang.Object {
      return ruleSubType.EntityType.RelativeName
    }
    
    // 'onChange' attribute on PostOnChange at RuleDetailPanelSet.default.pcf: line 74, column 229
    function onChange_15 () : void {
      if (!gw.bizrules.BizRulesComponentMapper.getInstance().isSupportedContextForTriggeringPoint(version.Rule.TriggeringPointKey, controller.RuleContextDefinitionKey)) {version.Rule.TriggeringPointKey = null}
    }
    
    // 'valueRange' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function valueRange_20 () : java.lang.Object {
      return triggerEntityValues
    }
    
    // 'valueRange' attribute on RangeInput (id=TriggeringPointKey_Input) at RuleDetailPanelSet.default.pcf: line 87, column 50
    function valueRange_34 () : java.lang.Object {
      return triggerActionValues
    }
    
    // 'value' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function valueRoot_19 () : java.lang.Object {
      return controller
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RuleDetailPanelSet.default.pcf: line 55, column 37
    function valueRoot_9 () : java.lang.Object {
      return version.Rule
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at RuleDetailPanelSet.default.pcf: line 63, column 45
    function value_11 () : java.lang.String {
      return version.Rule.Description
    }
    
    // 'value' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function value_17 () : typekey.RuleContextDefinitionKey {
      return controller.RuleContextDefinitionKey
    }
    
    // 'value' attribute on TextInput (id=ContextDescription_Input) at RuleDetailPanelSet.default.pcf: line 79, column 50
    function value_26 () : java.lang.String {
      return controller.RuleContextDefinitionKeyDescription
    }
    
    // 'value' attribute on RangeInput (id=TriggeringPointKey_Input) at RuleDetailPanelSet.default.pcf: line 87, column 50
    function value_31 () : typekey.TriggeringPointKey {
      return version.Rule.TriggeringPointKey
    }
    
    // 'value' attribute on BooleanRadioInput (id=DisplayRuleCondition_Input) at RuleDetailPanelSet.default.pcf: line 122, column 35
    function value_50 () : boolean {
      return displayRuleConditions
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RuleDetailPanelSet.default.pcf: line 55, column 37
    function value_7 () : java.lang.String {
      return version.Rule.Name
    }
    
    // 'valueRange' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function verifyValueRangeIsAllowedType_21 ($$arg :  typekey.RuleContextDefinitionKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TriggeringPointKey_Input) at RuleDetailPanelSet.default.pcf: line 87, column 50
    function verifyValueRangeIsAllowedType_35 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TriggeringPointKey_Input) at RuleDetailPanelSet.default.pcf: line 87, column 50
    function verifyValueRangeIsAllowedType_35 ($$arg :  typekey.TriggeringPointKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RuleContextDefinitionKey_Input) at RuleDetailPanelSet.default.pcf: line 71, column 56
    function verifyValueRange_22 () : void {
      var __valueRangeArg = triggerEntityValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=TriggeringPointKey_Input) at RuleDetailPanelSet.default.pcf: line 87, column 50
    function verifyValueRange_36 () : void {
      var __valueRangeArg = triggerActionValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_35(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ContextDescription_Input) at RuleDetailPanelSet.default.pcf: line 79, column 50
    function visible_25 () : java.lang.Boolean {
      return CurrentLocation.InEditMode 
    }
    
    // 'visible' attribute on PanelRef at RuleDetailPanelSet.default.pcf: line 130, column 77
    function visible_53 () : java.lang.Boolean {
      return CurrentLocation.InEditMode ? displayRuleConditions : true
    }
    
    // 'visible' attribute on PanelSet (id=RuleConditionPanelSet) at RuleDetailPanelSet.default.pcf: line 108, column 69
    function visible_56 () : java.lang.Boolean {
      return CurrentLocation.InEditMode or displayRuleConditions
    }
    
    // 'visible' attribute on Verbatim (id=ExposureActionHint) at RuleDetailPanelSet.default.pcf: line 140, column 49
    function visible_57 () : java.lang.Boolean {
      return context.ShowCreateActionHint
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getRequireValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setRequireValue("context", 0, $arg)
    }
    
    property get controller () : gw.bizrules.pcf.RulePageController {
      return getRequireValue("controller", 0) as gw.bizrules.pcf.RulePageController
    }
    
    property set controller ($arg :  gw.bizrules.pcf.RulePageController) {
      setRequireValue("controller", 0, $arg)
    }
    
    property get displayRuleConditions () : boolean {
      return getVariableValue("displayRuleConditions", 0) as java.lang.Boolean
    }
    
    property set displayRuleConditions ($arg :  boolean) {
      setVariableValue("displayRuleConditions", 0, $arg)
    }
    
    property get fieldsInitialized () : Boolean {
      return getVariableValue("fieldsInitialized", 0) as Boolean
    }
    
    property set fieldsInitialized ($arg :  Boolean) {
      setVariableValue("fieldsInitialized", 0, $arg)
    }
    
    property get importingVersion () : boolean {
      return getRequireValue("importingVersion", 0) as java.lang.Boolean
    }
    
    property set importingVersion ($arg :  boolean) {
      setRequireValue("importingVersion", 0, $arg)
    }
    
    property get ruleConditionType () : RuleConditionType {
      return getRequireValue("ruleConditionType", 0) as RuleConditionType
    }
    
    property set ruleConditionType ($arg :  RuleConditionType) {
      setRequireValue("ruleConditionType", 0, $arg)
    }
    
    property get ruleSubType () : typekey.Rule {
      return getVariableValue("ruleSubType", 0) as typekey.Rule
    }
    
    property set ruleSubType ($arg :  typekey.Rule) {
      setVariableValue("ruleSubType", 0, $arg)
    }
    
    property get triggerActionValues () : List<typekey.TriggeringPointKey> {
      return getVariableValue("triggerActionValues", 0) as List<typekey.TriggeringPointKey>
    }
    
    property set triggerActionValues ($arg :  List<typekey.TriggeringPointKey>) {
      setVariableValue("triggerActionValues", 0, $arg)
    }
    
    property get triggerEntityValues () : List<RuleContextDefinitionKey> {
      return getVariableValue("triggerEntityValues", 0) as List<RuleContextDefinitionKey>
    }
    
    property set triggerEntityValues ($arg :  List<RuleContextDefinitionKey>) {
      setVariableValue("triggerEntityValues", 0, $arg)
    }
    
    property get version () : RuleVersion {
      return getRequireValue("version", 0) as RuleVersion
    }
    
    property set version ($arg :  RuleVersion) {
      setRequireValue("version", 0, $arg)
    }
    
    // if we're editing a new rule and the field only has one option, preselect it
    protected function initSingleOpptionFields(): boolean {
      if (CurrentLocation.InEditMode and version.Rule.New and version.Rule.Editable) {
        if (triggerEntityValues.Count == 1) {
          controller.RuleContextDefinitionKey = triggerEntityValues.single()
        }
        if (triggerActionValues.Count == 1) {
          version.Rule.TriggeringPointKey = triggerActionValues.single()
        }
      }
      return true
    }
    
    
  }
  
  
}