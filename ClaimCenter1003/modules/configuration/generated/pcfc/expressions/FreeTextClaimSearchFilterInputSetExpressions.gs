package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchFilterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FreeTextClaimSearchFilterInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchFilterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FreeTextClaimSearchFilterInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function available_15 () : java.lang.Boolean {
      return ClaimSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function available_24 () : java.lang.Boolean {
      return ClaimSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 19, column 34
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AddressCriteria.State = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.DateCriterionChoice.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.DateCriterionChoice.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.DateCriterionChoice.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.DateCriterionChoice.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.DateCriterionChoice = (__VALUE_TO_SET as entity.DateCriterionChoice)
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 25, column 63
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AddressCriteria.PostalCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.DateCriterionChoice.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function optionLabel_11 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.locale.DisplayKey.get(VALUE)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function valueRange_12 () : java.lang.Object {
      return ClaimSearchCriteria.DateCriterionChoice.Options
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function valueRoot_10 () : java.lang.Object {
      return ClaimSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 19, column 34
    function valueRoot_2 () : java.lang.Object {
      return ClaimSearchCriteria.AddressCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function valueRoot_41 () : java.lang.Object {
      return ClaimSearchCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 19, column 34
    function value_0 () : typekey.State {
      return ClaimSearchCriteria.AddressCriteria.State
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function value_16 () : typekey.DateRangeChoiceType {
      return ClaimSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function value_20 () : java.lang.Object {
      return ClaimSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function value_21 () : typekey.DateSearchType {
      return ClaimSearchCriteria.DateCriterionChoice.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function value_25 () : java.util.Date {
      return ClaimSearchCriteria.DateCriterionChoice.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function value_31 () : java.util.Date {
      return ClaimSearchCriteria.DateCriterionChoice.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function value_39 () : entity.DateCriterionChoice {
      return ClaimSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 25, column 63
    function value_4 () : java.lang.String {
      return ClaimSearchCriteria.AddressCriteria.PostalCode
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function value_8 () : java.lang.String {
      return ClaimSearchCriteria.DateCriterionChoice.ChosenOption
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at FreeTextClaimSearchFilterInputSet.pcf: line 33, column 56
    function verifyValueRange_14 () : void {
      var __valueRangeArg = ClaimSearchCriteria.DateCriterionChoice.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    property get ClaimSearchCriteria () : ClaimSearchCriteria {
      return getRequireValue("ClaimSearchCriteria", 0) as ClaimSearchCriteria
    }
    
    property set ClaimSearchCriteria ($arg :  ClaimSearchCriteria) {
      setRequireValue("ClaimSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}