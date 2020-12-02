package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/WorkStatusDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkStatusDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/incidents/WorkStatusDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkStatusDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at WorkStatusDV.pcf: line 17, column 42
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.Status = (__VALUE_TO_SET as typekey.WorkCapacity)
    }
    
    // 'value' attribute on DateInput (id=StatusEndDate_Input) at WorkStatusDV.pcf: line 33, column 44
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.StatusEndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=StatusComments_Input) at WorkStatusDV.pcf: line 39, column 39
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=LastWorkedDate_Input) at WorkStatusDV.pcf: line 51, column 49
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.LastWorkedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PaidFullForLastWorked_Input) at WorkStatusDV.pcf: line 56, column 56
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.PaidFullForLastWorked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DaysWorked_Input) at WorkStatusDV.pcf: line 66, column 47
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.NumDaysWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=HoursWorked_Input) at WorkStatusDV.pcf: line 72, column 47
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.NumHoursWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CurrencyInput (id=WeeklyWage_Input) at WorkStatusDV.pcf: line 77, column 55
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.WageAmountPostInjury = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on DateInput (id=StatusDate_Input) at WorkStatusDV.pcf: line 27, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      aWorkStatus.StatusDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'validationExpression' attribute on DateInput (id=LastWorkedDate_Input) at WorkStatusDV.pcf: line 51, column 49
    function validationExpression_20 () : java.lang.Object {
      return (  aWorkStatus.LastWorkedDate > aWorkStatus.StatusDate  ? DisplayKey.get("Rules.Validation.WorkStatus.LastWorkedDate"): null)
    }
    
    // 'validationExpression' attribute on DateInput (id=StatusDate_Input) at WorkStatusDV.pcf: line 27, column 41
    function validationExpression_4 () : java.lang.Object {
      return (aWorkStatus.StatusDate > aWorkStatus.StatusEndDate  ? DisplayKey.get("Rules.Validation.Claim.WorkStatus.StatusDateGTStatusEndDate") : null)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at WorkStatusDV.pcf: line 17, column 42
    function valueRoot_2 () : java.lang.Object {
      return aWorkStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at WorkStatusDV.pcf: line 17, column 42
    function value_0 () : typekey.WorkCapacity {
      return aWorkStatus.Status
    }
    
    // 'value' attribute on DateInput (id=StatusEndDate_Input) at WorkStatusDV.pcf: line 33, column 44
    function value_11 () : java.util.Date {
      return aWorkStatus.StatusEndDate
    }
    
    // 'value' attribute on TextAreaInput (id=StatusComments_Input) at WorkStatusDV.pcf: line 39, column 39
    function value_16 () : java.lang.String {
      return aWorkStatus.Comments
    }
    
    // 'value' attribute on DateInput (id=LastWorkedDate_Input) at WorkStatusDV.pcf: line 51, column 49
    function value_21 () : java.util.Date {
      return aWorkStatus.LastWorkedDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=PaidFullForLastWorked_Input) at WorkStatusDV.pcf: line 56, column 56
    function value_26 () : java.lang.Boolean {
      return aWorkStatus.PaidFullForLastWorked
    }
    
    // 'value' attribute on TextInput (id=DaysWorked_Input) at WorkStatusDV.pcf: line 66, column 47
    function value_31 () : java.math.BigDecimal {
      return aWorkStatus.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=HoursWorked_Input) at WorkStatusDV.pcf: line 72, column 47
    function value_35 () : java.math.BigDecimal {
      return aWorkStatus.NumHoursWorked
    }
    
    // 'value' attribute on CurrencyInput (id=WeeklyWage_Input) at WorkStatusDV.pcf: line 77, column 55
    function value_39 () : gw.api.financials.CurrencyAmount {
      return aWorkStatus.WageAmountPostInjury
    }
    
    // 'value' attribute on DateInput (id=StatusDate_Input) at WorkStatusDV.pcf: line 27, column 41
    function value_5 () : java.util.Date {
      return aWorkStatus.StatusDate
    }
    
    // 'visible' attribute on InputSet at WorkStatusDV.pcf: line 44, column 59
    function visible_30 () : java.lang.Boolean {
      return aWorkStatus.Status == TC_STOPPED_WORK
    }
    
    // 'visible' attribute on InputSet at WorkStatusDV.pcf: line 59, column 62
    function visible_43 () : java.lang.Boolean {
      return aWorkStatus.Status == TC_RESTRICTED_WORK
    }
    
    // 'visible' attribute on InputSet (id=Status_InputSet) at WorkStatusDV.pcf: line 42, column 101
    function visible_44 () : java.lang.Boolean {
      return aWorkStatus.Status == TC_STOPPED_WORK or aWorkStatus.Status == TC_RESTRICTED_WORK
    }
    
    property get aWorkStatus () : WorkStatus {
      return getRequireValue("aWorkStatus", 0) as WorkStatus
    }
    
    property set aWorkStatus ($arg :  WorkStatus) {
      setRequireValue("aWorkStatus", 0, $arg)
    }
    
    
  }
  
  
}