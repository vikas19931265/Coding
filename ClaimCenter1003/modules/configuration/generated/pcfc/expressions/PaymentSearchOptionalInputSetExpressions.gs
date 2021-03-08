package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/checks/PaymentSearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentSearchOptionalInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/checks/PaymentSearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentSearchOptionalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function available_14 () : java.lang.Boolean {
      return (true)
                        and ( gw.api.util.CurrencyUtil.isSingleCurrencyMode() or PaymentSearchCriteria.FinancialCriterion.Currency != null)
                        and (PaymentSearchCriteria.FinancialCriterion.Options.length == 0 or PaymentSearchCriteria.FinancialCriterion.ChosenOption != null)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function available_42 () : java.lang.Boolean {
      return PaymentSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function available_51 () : java.lang.Boolean {
      return PaymentSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'available' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function available_6 () : java.lang.Boolean {
      return (true)
                                   and ( gw.api.util.CurrencyUtil.isSingleCurrencyMode() or PaymentSearchCriteria.FinancialCriterion.Currency != null)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.FinancialCriterion.AmountStart = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 54, column 48
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.FinancialCriterion.AmountEnd = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at PaymentSearchOptionalInputSet.pcf: line 25, column 46
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.CheckStatus = (__VALUE_TO_SET as typekey.TransactionStatus)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.FinancialCriterion.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TextInput (id=PayTo_Input) at PaymentSearchOptionalInputSet.pcf: line 31, column 44
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.DateCriterionChoice.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.DateCriterionChoice.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.DateCriterionChoice.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.DateCriterionChoice.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.DateCriterionChoice.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.DateCriterionChoice = (__VALUE_TO_SET as entity.DateCriterionChoice)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      PaymentSearchCriteria.FinancialCriterion.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'format' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function format_15 () : java.lang.String {
      return gw.api.util.CurrencyUtil.getCurrencyFormatExpression(PaymentSearchCriteria.FinancialCriterion.Currency)
    }
    
    // 'optionLabel' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function optionLabel_10 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.locale.DisplayKey.get(VALUE)
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function valueRange_11 () : java.lang.Object {
      return PaymentSearchCriteria.FinancialCriterion.Options
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function valueRange_39 () : java.lang.Object {
      return PaymentSearchCriteria.DateCriterionChoice.Options
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at PaymentSearchOptionalInputSet.pcf: line 18, column 57
    function valueRoot_25 () : java.lang.Object {
      return PaymentSearchCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function valueRoot_37 () : java.lang.Object {
      return PaymentSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function valueRoot_4 () : java.lang.Object {
      return PaymentSearchCriteria.FinancialCriterion
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function value_16 () : java.math.BigDecimal {
      return PaymentSearchCriteria.FinancialCriterion.AmountStart
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function value_2 () : typekey.Currency {
      return PaymentSearchCriteria.FinancialCriterion.Currency
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 54, column 48
    function value_21 () : java.math.BigDecimal {
      return PaymentSearchCriteria.FinancialCriterion.AmountEnd
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at PaymentSearchOptionalInputSet.pcf: line 18, column 57
    function value_24 () : entity.FinancialCriterionMC {
      return PaymentSearchCriteria.FinancialCriterion
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at PaymentSearchOptionalInputSet.pcf: line 25, column 46
    function value_27 () : typekey.TransactionStatus {
      return PaymentSearchCriteria.CheckStatus
    }
    
    // 'value' attribute on TextInput (id=PayTo_Input) at PaymentSearchOptionalInputSet.pcf: line 31, column 44
    function value_31 () : java.lang.String {
      return PaymentSearchCriteria.PayTo
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function value_35 () : java.lang.String {
      return PaymentSearchCriteria.DateCriterionChoice.ChosenOption
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function value_43 () : typekey.DateRangeChoiceType {
      return PaymentSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function value_47 () : java.lang.Object {
      return PaymentSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function value_48 () : typekey.DateSearchType {
      return PaymentSearchCriteria.DateCriterionChoice.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function value_52 () : java.util.Date {
      return PaymentSearchCriteria.DateCriterionChoice.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function value_58 () : java.util.Date {
      return PaymentSearchCriteria.DateCriterionChoice.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function value_66 () : entity.DateCriterionChoice {
      return PaymentSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function value_7 () : java.lang.String {
      return PaymentSearchCriteria.FinancialCriterion.ChosenOption
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRange_13 () : void {
      var __valueRangeArg = PaymentSearchCriteria.FinancialCriterion.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at PaymentSearchOptionalInputSet.pcf: line 38, column 58
    function verifyValueRange_41 () : void {
      var __valueRangeArg = PaymentSearchCriteria.DateCriterionChoice.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_40(__valueRangeArg)
    }
    
    // 'visible' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=CheckTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 11, column 72
    function visible_0 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get PaymentSearchCriteria () : PaymentSearchCriteria {
      return getRequireValue("PaymentSearchCriteria", 0) as PaymentSearchCriteria
    }
    
    property set PaymentSearchCriteria ($arg :  PaymentSearchCriteria) {
      setRequireValue("PaymentSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}