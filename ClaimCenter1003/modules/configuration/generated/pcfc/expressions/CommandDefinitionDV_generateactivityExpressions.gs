package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionDV.generateactivity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommandDefinitionDV_generateactivityExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionDV.generateactivity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommandDefinitionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=ValidationErrorsPattern) at CommandDefinitionDV.generateactivity.pcf: line 40, column 39
    function def_onEnter_11 (def :  pcf.ValidationErrorsInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.PATTERN.Name).validate(), false)
    }
    
    // 'def' attribute on InputSetRef (id=RelatedToRef) at CommandDefinitionDV.generateactivity.pcf: line 45, column 30
    function def_onEnter_13 (def :  pcf.RelatedToInputSet) : void {
      def.onEnter(state, commandDefinition, config.RELATED_TO)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_onEnter_24 (def :  pcf.AssigneeAdditionalInfoInputSet_default) : void {
      def.onEnter(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_onEnter_26 (def :  pcf.AssigneeAdditionalInfoInputSet_group) : void {
      def.onEnter(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_onEnter_28 (def :  pcf.AssigneeAdditionalInfoInputSet_queue) : void {
      def.onEnter(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_onEnter_30 (def :  pcf.AssigneeAdditionalInfoInputSet_role) : void {
      def.onEnter(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef (id=ValidationErrorsAssignedTo) at CommandDefinitionDV.generateactivity.pcf: line 62, column 44
    function def_onEnter_33 (def :  pcf.ValidationErrorsInputSet) : void {
      def.onEnter(state.validateAssignmentFields(), false)
    }
    
    // 'def' attribute on InputSetRef (id=ValidationErrorsAdditionalRestrictions) at CommandDefinitionDV.generateactivity.pcf: line 75, column 56
    function def_onEnter_43 (def :  pcf.ValidationErrorsInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.ACTIVITY_RESTRICTION.Name).validate(), false)
    }
    
    // 'def' attribute on InputSetRef (id=Priority) at CommandDefinitionDV.generateactivity.pcf: line 78, column 26
    function def_onEnter_45 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.PRIORITY.Name))
    }
    
    // 'def' attribute on InputSetRef (id=CalendarImportance) at CommandDefinitionDV.generateactivity.pcf: line 81, column 36
    function def_onEnter_47 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.CALENDAR_IMPORTANCE.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetDays) at CommandDefinitionDV.generateactivity.pcf: line 91, column 28
    function def_onEnter_50 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.TARGET_DAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetHours) at CommandDefinitionDV.generateactivity.pcf: line 94, column 29
    function def_onEnter_52 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.TARGET_HOURS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetStartPoint) at CommandDefinitionDV.generateactivity.pcf: line 97, column 34
    function def_onEnter_54 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.TARGET_STARTPOINT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetIncludeDays) at CommandDefinitionDV.generateactivity.pcf: line 100, column 35
    function def_onEnter_56 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.TARGET_INCLUDEDAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationDays) at CommandDefinitionDV.generateactivity.pcf: line 110, column 32
    function def_onEnter_59 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.ESCALATION_DAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationHours) at CommandDefinitionDV.generateactivity.pcf: line 113, column 33
    function def_onEnter_61 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.ESCALATION_HOURS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationStartPoint) at CommandDefinitionDV.generateactivity.pcf: line 116, column 38
    function def_onEnter_63 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.ESCALATION_STARTPOINT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationIncludeDays) at CommandDefinitionDV.generateactivity.pcf: line 119, column 39
    function def_onEnter_65 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.onEnter(commandDefinition.getParameterHolder(config.ESCALATION_INCLUDEDAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Subjects) at CommandDefinitionDV.generateactivity.pcf: line 125, column 24
    function def_onEnter_68 (def :  pcf.LocalizedCommandDefinitionParameterInputSet) : void {
      def.onEnter(state, config.SUBJECT)
    }
    
    // 'def' attribute on InputSetRef (id=Descriptions) at CommandDefinitionDV.generateactivity.pcf: line 128, column 28
    function def_onEnter_70 (def :  pcf.LocalizedCommandDefinitionParameterInputSet) : void {
      def.onEnter(state, config.DESCRIPTION)
    }
    
    // 'def' attribute on InputSetRef (id=ValidationErrorsPattern) at CommandDefinitionDV.generateactivity.pcf: line 40, column 39
    function def_refreshVariables_12 (def :  pcf.ValidationErrorsInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.PATTERN.Name).validate(), false)
    }
    
    // 'def' attribute on InputSetRef (id=RelatedToRef) at CommandDefinitionDV.generateactivity.pcf: line 45, column 30
    function def_refreshVariables_14 (def :  pcf.RelatedToInputSet) : void {
      def.refreshVariables(state, commandDefinition, config.RELATED_TO)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_refreshVariables_25 (def :  pcf.AssigneeAdditionalInfoInputSet_default) : void {
      def.refreshVariables(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_refreshVariables_27 (def :  pcf.AssigneeAdditionalInfoInputSet_group) : void {
      def.refreshVariables(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_refreshVariables_29 (def :  pcf.AssigneeAdditionalInfoInputSet_queue) : void {
      def.refreshVariables(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function def_refreshVariables_31 (def :  pcf.AssigneeAdditionalInfoInputSet_role) : void {
      def.refreshVariables(commandDefinition, state, config)
    }
    
    // 'def' attribute on InputSetRef (id=ValidationErrorsAssignedTo) at CommandDefinitionDV.generateactivity.pcf: line 62, column 44
    function def_refreshVariables_34 (def :  pcf.ValidationErrorsInputSet) : void {
      def.refreshVariables(state.validateAssignmentFields(), false)
    }
    
    // 'def' attribute on InputSetRef (id=ValidationErrorsAdditionalRestrictions) at CommandDefinitionDV.generateactivity.pcf: line 75, column 56
    function def_refreshVariables_44 (def :  pcf.ValidationErrorsInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.ACTIVITY_RESTRICTION.Name).validate(), false)
    }
    
    // 'def' attribute on InputSetRef (id=Priority) at CommandDefinitionDV.generateactivity.pcf: line 78, column 26
    function def_refreshVariables_46 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.PRIORITY.Name))
    }
    
    // 'def' attribute on InputSetRef (id=CalendarImportance) at CommandDefinitionDV.generateactivity.pcf: line 81, column 36
    function def_refreshVariables_48 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.CALENDAR_IMPORTANCE.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetDays) at CommandDefinitionDV.generateactivity.pcf: line 91, column 28
    function def_refreshVariables_51 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.TARGET_DAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetHours) at CommandDefinitionDV.generateactivity.pcf: line 94, column 29
    function def_refreshVariables_53 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.TARGET_HOURS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetStartPoint) at CommandDefinitionDV.generateactivity.pcf: line 97, column 34
    function def_refreshVariables_55 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.TARGET_STARTPOINT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=TargetIncludeDays) at CommandDefinitionDV.generateactivity.pcf: line 100, column 35
    function def_refreshVariables_57 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.TARGET_INCLUDEDAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationDays) at CommandDefinitionDV.generateactivity.pcf: line 110, column 32
    function def_refreshVariables_60 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.ESCALATION_DAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationHours) at CommandDefinitionDV.generateactivity.pcf: line 113, column 33
    function def_refreshVariables_62 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.ESCALATION_HOURS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationStartPoint) at CommandDefinitionDV.generateactivity.pcf: line 116, column 38
    function def_refreshVariables_64 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.ESCALATION_STARTPOINT.Name))
    }
    
    // 'def' attribute on InputSetRef (id=EscalationIncludeDays) at CommandDefinitionDV.generateactivity.pcf: line 119, column 39
    function def_refreshVariables_66 (def :  pcf.ValidatingCommandParameterInputSet) : void {
      def.refreshVariables(commandDefinition.getParameterHolder(config.ESCALATION_INCLUDEDAYS.Name))
    }
    
    // 'def' attribute on InputSetRef (id=Subjects) at CommandDefinitionDV.generateactivity.pcf: line 125, column 24
    function def_refreshVariables_69 (def :  pcf.LocalizedCommandDefinitionParameterInputSet) : void {
      def.refreshVariables(state, config.SUBJECT)
    }
    
    // 'def' attribute on InputSetRef (id=Descriptions) at CommandDefinitionDV.generateactivity.pcf: line 128, column 28
    function def_refreshVariables_71 (def :  pcf.LocalizedCommandDefinitionParameterInputSet) : void {
      def.refreshVariables(state, config.DESCRIPTION)
    }
    
    // 'value' attribute on RangeInput (id=assigneePicker3_Input) at CommandDefinitionDV.generateactivity.pcf: line 53, column 101
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      state.AssignedTo = (__VALUE_TO_SET as gw.bizrules.ruleaction.behavioralcommandparam.assignee.ActivityAssigneeLoader)
    }
    
    // 'value' attribute on RangeInput (id=AdditionalRestrictionsInput_Input) at CommandDefinitionDV.generateactivity.pcf: line 72, column 110
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      state.Restriction = (__VALUE_TO_SET as gw.bizrules.ruleaction.behavioralcommandparam.activityrestriction.ActivityRestriction)
    }
    
    // 'value' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      state.Pattern = (__VALUE_TO_SET as entity.ActivityPattern)
    }
    
    // 'initialValue' attribute on Variable at CommandDefinitionDV.generateactivity.pcf: line 15, column 94
    function initialValue_0 () : gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState {
      return new gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState(commandDefinition)
    }
    
    // 'initialValue' attribute on Variable at CommandDefinitionDV.generateactivity.pcf: line 19, column 101
    function initialValue_1 () : gw.bizrules.ruleaction.generateactivity.config.GenerateActivityCommandParameterConfig {
      return gw.bizrules.ruleaction.generateactivity.config.GenerateActivityCommandParameterSet.Config
    }
    
    // 'initialValue' attribute on Variable at CommandDefinitionDV.generateactivity.pcf: line 24, column 23
    function initialValue_2 () : boolean {
      return state.ActivityPatternSelected
    }
    
    // 'mode' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function mode_32 () : java.lang.Object {
      return state.AssignedTo.AdditionalInfoMode
    }
    
    // 'optionLabel' attribute on RangeInput (id=assigneePicker3_Input) at CommandDefinitionDV.generateactivity.pcf: line 53, column 101
    function optionLabel_18 (VALUE :  gw.bizrules.ruleaction.behavioralcommandparam.assignee.ActivityAssigneeLoader) : java.lang.String {
      return VALUE.UIDisplayName
    }
    
    // 'optionLabel' attribute on RangeInput (id=AdditionalRestrictionsInput_Input) at CommandDefinitionDV.generateactivity.pcf: line 72, column 110
    function optionLabel_38 (VALUE :  gw.bizrules.ruleaction.behavioralcommandparam.activityrestriction.ActivityRestriction) : java.lang.String {
      return VALUE.UIDisplayName
    }
    
    // 'optionLabel' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function optionLabel_6 (VALUE :  entity.ActivityPattern) : java.lang.String {
      return VALUE.getSubject()
    }
    
    // 'valueRange' attribute on RangeInput (id=assigneePicker3_Input) at CommandDefinitionDV.generateactivity.pcf: line 53, column 101
    function valueRange_19 () : java.lang.Object {
      return state.getValueRange(config.ASSIGNED_TO, commandDefinition, gw.bizrules.ruleaction.behavioralcommandparam.assignee.ActivityAssigneeLoader)
    }
    
    // 'valueRange' attribute on RangeInput (id=AdditionalRestrictionsInput_Input) at CommandDefinitionDV.generateactivity.pcf: line 72, column 110
    function valueRange_39 () : java.lang.Object {
      return state.AvailableActivityRestrictions
    }
    
    // 'valueRange' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function valueRange_7 () : java.lang.Object {
      return gw.api.database.Query.make(entity.ActivityPattern).select().toTypedArray()
    }
    
    // 'value' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function valueRoot_5 () : java.lang.Object {
      return state
    }
    
    // 'value' attribute on RangeInput (id=assigneePicker3_Input) at CommandDefinitionDV.generateactivity.pcf: line 53, column 101
    function value_15 () : gw.bizrules.ruleaction.behavioralcommandparam.assignee.ActivityAssigneeLoader {
      return state.AssignedTo
    }
    
    // 'value' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function value_3 () : entity.ActivityPattern {
      return state.Pattern
    }
    
    // 'value' attribute on RangeInput (id=AdditionalRestrictionsInput_Input) at CommandDefinitionDV.generateactivity.pcf: line 72, column 110
    function value_35 () : gw.bizrules.ruleaction.behavioralcommandparam.activityrestriction.ActivityRestriction {
      return state.Restriction
    }
    
    // 'valueRange' attribute on RangeInput (id=assigneePicker3_Input) at CommandDefinitionDV.generateactivity.pcf: line 53, column 101
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.bizrules.ruleaction.behavioralcommandparam.assignee.ActivityAssigneeLoader[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=assigneePicker3_Input) at CommandDefinitionDV.generateactivity.pcf: line 53, column 101
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AdditionalRestrictionsInput_Input) at CommandDefinitionDV.generateactivity.pcf: line 72, column 110
    function verifyValueRangeIsAllowedType_40 ($$arg :  gw.bizrules.ruleaction.behavioralcommandparam.activityrestriction.ActivityRestriction[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AdditionalRestrictionsInput_Input) at CommandDefinitionDV.generateactivity.pcf: line 72, column 110
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function verifyValueRangeIsAllowedType_8 ($$arg :  entity.ActivityPattern[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function verifyValueRangeIsAllowedType_8 ($$arg :  gw.api.database.IQueryBeanResult<entity.ActivityPattern>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=assigneePicker3_Input) at CommandDefinitionDV.generateactivity.pcf: line 53, column 101
    function verifyValueRange_21 () : void {
      var __valueRangeArg = state.getValueRange(config.ASSIGNED_TO, commandDefinition, gw.bizrules.ruleaction.behavioralcommandparam.assignee.ActivityAssigneeLoader)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=AdditionalRestrictionsInput_Input) at CommandDefinitionDV.generateactivity.pcf: line 72, column 110
    function verifyValueRange_41 () : void {
      var __valueRangeArg = state.AvailableActivityRestrictions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_40(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=activity_pattern_Input) at CommandDefinitionDV.generateactivity.pcf: line 35, column 44
    function verifyValueRange_9 () : void {
      var __valueRangeArg = gw.api.database.Query.make(entity.ActivityPattern).select().toTypedArray()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSetRef at CommandDefinitionDV.generateactivity.pcf: line 59, column 66
    function visible_23 () : java.lang.Boolean {
      return state.AssignedTo.AdditionalInfoMode != null
    }
    
    // 'visible' attribute on InputSet at CommandDefinitionDV.generateactivity.pcf: line 42, column 45
    function visible_49 () : java.lang.Boolean {
      return isActivityPatternSelected
    }
    
    property get commandDefinition () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return getRequireValue("commandDefinition", 0) as gw.bizrules.pcf.RuleCommandDefinitionHolder
    }
    
    property set commandDefinition ($arg :  gw.bizrules.pcf.RuleCommandDefinitionHolder) {
      setRequireValue("commandDefinition", 0, $arg)
    }
    
    property get config () : gw.bizrules.ruleaction.generateactivity.config.GenerateActivityCommandParameterConfig {
      return getVariableValue("config", 0) as gw.bizrules.ruleaction.generateactivity.config.GenerateActivityCommandParameterConfig
    }
    
    property set config ($arg :  gw.bizrules.ruleaction.generateactivity.config.GenerateActivityCommandParameterConfig) {
      setVariableValue("config", 0, $arg)
    }
    
    property get isActivityPatternSelected () : boolean {
      return getVariableValue("isActivityPatternSelected", 0) as java.lang.Boolean
    }
    
    property set isActivityPatternSelected ($arg :  boolean) {
      setVariableValue("isActivityPatternSelected", 0, $arg)
    }
    
    property get state () : gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState {
      return getVariableValue("state", 0) as gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState
    }
    
    property set state ($arg :  gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState) {
      setVariableValue("state", 0, $arg)
    }
    
    
  }
  
  
}