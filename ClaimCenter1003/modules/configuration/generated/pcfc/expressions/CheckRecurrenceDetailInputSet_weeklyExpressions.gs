package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/check/CheckRecurrenceDetailInputSet.weekly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CheckRecurrenceDetailInputSet_weeklyExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/check/CheckRecurrenceDetailInputSet.weekly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CheckRecurrenceDetailInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at CheckRecurrenceDetailInputSet.weekly.pcf: line 73, column 70
    function def_onEnter_44 (def :  pcf.CheckRecurrenceAdditionalInfoInputSet) : void {
      def.onEnter(recurrenceHelper)
    }
    
    // 'def' attribute on InputSetRef at CheckRecurrenceDetailInputSet.weekly.pcf: line 73, column 70
    function def_refreshVariables_45 (def :  pcf.CheckRecurrenceAdditionalInfoInputSet) : void {
      def.refreshVariables(recurrenceHelper)
    }
    
    // 'value' attribute on TextInput (id=EveryXWeek_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 46, column 136
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      recurrenceHelper.Weekly.Recurrence.WeeklyFrequency = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=DayOfWeek_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 53, column 44
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      recurrenceHelper.Weekly.Recurrence.RecurrenceDay = (__VALUE_TO_SET as typekey.RecurrenceDay)
    }
    
    // 'value' attribute on CheckBoxInput (id=IssueCheckInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 58, column 158
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      recurrenceHelper.IssueCheckInAdvance = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=ScheduledSendDate_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 20, column 51
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      recurrenceHelper.ScheduledSendDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=DaysInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 69, column 63
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      recurrenceHelper.CheckRecurrence.IssuanceDateOffset = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on RangeRadioInput (id=Frequency_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 36, column 61
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      recurrenceHelper.Weekly.FrequencyType = (__VALUE_TO_SET as gw.financials.WeeklyRecurrenceFrequency)
    }
    
    // 'editable' attribute on DateInput (id=ScheduledSendDate_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 20, column 51
    function editable_0 () : java.lang.Boolean {
      return !check.CheckSet.Approved
    }
    
    // 'editable' attribute on CheckBoxInput (id=IssueCheckInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 58, column 158
    function editable_26 () : java.lang.Boolean {
      return !recurrenceHelper.Check.CheckSet.Approved
    }
    
    // 'required' attribute on TextInput (id=EveryXWeek_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 46, column 136
    function required_16 () : java.lang.Boolean {
      return recurrenceHelper.Weekly.FrequencyType == gw.financials.WeeklyRecurrenceFrequency.OTHER
    }
    
    // 'validationExpression' attribute on DateInput (id=ScheduledSendDate_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 20, column 51
    function validationExpression_1 () : java.lang.Object {
      return check.ScheduledSendDate.before(java.util.Date.Today) ? DisplayKey.get("Java.Validation.Date.ForbidPast") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=DaysInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 69, column 63
    function validationExpression_33 () : java.lang.Object {
      if(recurrenceHelper.CheckRecurrence.IssuanceDateOffset < 1) {return DisplayKey.get("Wizard.NewCheckWizard.CheckInstructions.Recurrence.SubsequentChecks.SpecialInstructions.DaysInAdvance.LessThanOne")} else return null
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Frequency_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 36, column 61
    function valueRange_11 () : java.lang.Object {
      return gw.financials.WeeklyRecurrenceFrequency.AllValues
    }
    
    // 'value' attribute on RangeRadioInput (id=Frequency_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 36, column 61
    function valueRoot_10 () : java.lang.Object {
      return recurrenceHelper.Weekly
    }
    
    // 'value' attribute on TextInput (id=EveryXWeek_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 46, column 136
    function valueRoot_19 () : java.lang.Object {
      return recurrenceHelper.Weekly.Recurrence
    }
    
    // 'value' attribute on TextInput (id=DaysInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 69, column 63
    function valueRoot_38 () : java.lang.Object {
      return recurrenceHelper.CheckRecurrence
    }
    
    // 'value' attribute on DateInput (id=ScheduledSendDate_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 20, column 51
    function valueRoot_4 () : java.lang.Object {
      return recurrenceHelper
    }
    
    // 'value' attribute on TextInput (id=EveryXWeek_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 46, column 136
    function value_17 () : java.lang.Integer {
      return recurrenceHelper.Weekly.Recurrence.WeeklyFrequency
    }
    
    // 'value' attribute on DateInput (id=ScheduledSendDate_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 20, column 51
    function value_2 () : java.util.Date {
      return recurrenceHelper.ScheduledSendDate
    }
    
    // 'value' attribute on TypeKeyInput (id=DayOfWeek_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 53, column 44
    function value_22 () : typekey.RecurrenceDay {
      return recurrenceHelper.Weekly.Recurrence.RecurrenceDay
    }
    
    // 'value' attribute on CheckBoxInput (id=IssueCheckInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 58, column 158
    function value_27 () : java.lang.Boolean {
      return recurrenceHelper.IssueCheckInAdvance
    }
    
    // 'value' attribute on TextInput (id=DaysInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 69, column 63
    function value_36 () : java.lang.Integer {
      return recurrenceHelper.CheckRecurrence.IssuanceDateOffset
    }
    
    // 'value' attribute on RangeRadioInput (id=Frequency_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 36, column 61
    function value_8 () : gw.financials.WeeklyRecurrenceFrequency {
      return recurrenceHelper.Weekly.FrequencyType
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Frequency_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 36, column 61
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.financials.WeeklyRecurrenceFrequency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Frequency_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 36, column 61
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=Frequency_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 36, column 61
    function verifyValueRange_13 () : void {
      var __valueRangeArg = gw.financials.WeeklyRecurrenceFrequency.AllValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=EveryXWeek_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 46, column 136
    function visible_15 () : java.lang.Boolean {
      return recurrenceHelper.Weekly.Recurrence.WeeklyFrequency != 1 and recurrenceHelper.Weekly.Recurrence.WeeklyFrequency != 2
    }
    
    // 'visible' attribute on TextInput (id=DaysInAdvance_Input) at CheckRecurrenceDetailInputSet.weekly.pcf: line 69, column 63
    function visible_34 () : java.lang.Boolean {
      return recurrenceHelper.IssueCheckInAdvance==true
    }
    
    property get check () : Check {
      return getRequireValue("check", 0) as Check
    }
    
    property set check ($arg :  Check) {
      setRequireValue("check", 0, $arg)
    }
    
    property get recurrenceHelper () : gw.financials.CheckRecurrenceUIHelper {
      return getRequireValue("recurrenceHelper", 0) as gw.financials.CheckRecurrenceUIHelper
    }
    
    property set recurrenceHelper ($arg :  gw.financials.CheckRecurrenceUIHelper) {
      setRequireValue("recurrenceHelper", 0, $arg)
    }
    
    
  }
  
  
}