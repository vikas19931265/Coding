package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/bulkpay/BulkInvoiceSearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BulkInvoiceSearchOptionalInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/bulkpay/BulkInvoiceSearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BulkInvoiceSearchOptionalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function available_14 () : java.lang.Boolean {
      return (true)                         and ( gw.api.util.CurrencyUtil.isSingleCurrencyMode() or BulkInvoiceSearchCriteria.FinancialCriterion.Currency != null)                         and (BulkInvoiceSearchCriteria.FinancialCriterion.Options.length == 0 or BulkInvoiceSearchCriteria.FinancialCriterion.ChosenOption != null)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function available_38 () : java.lang.Boolean {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function available_47 () : java.lang.Boolean {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'available' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function available_6 () : java.lang.Boolean {
      return (true)                                    and ( gw.api.util.CurrencyUtil.isSingleCurrencyMode() or BulkInvoiceSearchCriteria.FinancialCriterion.Currency != null)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.FinancialCriterion.AmountStart = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 54, column 48
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.FinancialCriterion.AmountEnd = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=PayTo_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 22, column 48
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.FinancialCriterion.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.DateCriterionChoice.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.DateCriterionChoice.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.DateCriterionChoice.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.DateCriterionChoice.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.DateCriterionChoice.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.DateCriterionChoice = (__VALUE_TO_SET as entity.DateCriterionChoice)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      BulkInvoiceSearchCriteria.FinancialCriterion.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'format' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function format_15 () : java.lang.String {
      return gw.api.util.CurrencyUtil.getCurrencyFormatExpression(BulkInvoiceSearchCriteria.FinancialCriterion.Currency)
    }
    
    // 'optionLabel' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function optionLabel_10 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.locale.DisplayKey.get(VALUE)
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function valueRange_11 () : java.lang.Object {
      return BulkInvoiceSearchCriteria.FinancialCriterion.Options
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function valueRange_35 () : java.lang.Object {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.Options
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 17, column 61
    function valueRoot_25 () : java.lang.Object {
      return BulkInvoiceSearchCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function valueRoot_33 () : java.lang.Object {
      return BulkInvoiceSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function valueRoot_4 () : java.lang.Object {
      return BulkInvoiceSearchCriteria.FinancialCriterion
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function value_16 () : java.math.BigDecimal {
      return BulkInvoiceSearchCriteria.FinancialCriterion.AmountStart
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function value_2 () : typekey.Currency {
      return BulkInvoiceSearchCriteria.FinancialCriterion.Currency
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 54, column 48
    function value_21 () : java.math.BigDecimal {
      return BulkInvoiceSearchCriteria.FinancialCriterion.AmountEnd
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 17, column 61
    function value_24 () : entity.FinancialCriterionMC {
      return BulkInvoiceSearchCriteria.FinancialCriterion
    }
    
    // 'value' attribute on TextInput (id=PayTo_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 22, column 48
    function value_27 () : java.lang.String {
      return BulkInvoiceSearchCriteria.PayTo
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function value_31 () : java.lang.String {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.ChosenOption
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function value_39 () : typekey.DateRangeChoiceType {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function value_43 () : java.lang.Object {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function value_44 () : typekey.DateSearchType {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function value_48 () : java.util.Date {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function value_54 () : java.util.Date {
      return BulkInvoiceSearchCriteria.DateCriterionChoice.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function value_62 () : entity.DateCriterionChoice {
      return BulkInvoiceSearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function value_7 () : java.lang.String {
      return BulkInvoiceSearchCriteria.FinancialCriterion.ChosenOption
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function verifyValueRangeIsAllowedType_36 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function verifyValueRangeIsAllowedType_36 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRange_13 () : void {
      var __valueRangeArg = BulkInvoiceSearchCriteria.FinancialCriterion.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at BulkInvoiceSearchOptionalInputSet.pcf: line 29, column 62
    function verifyValueRange_37 () : void {
      var __valueRangeArg = BulkInvoiceSearchCriteria.DateCriterionChoice.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_36(__valueRangeArg)
    }
    
    // 'visible' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=InvoiceTotal_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 11, column 72
    function visible_0 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get BulkInvoiceSearchCriteria () : BulkInvoiceSearchCriteria {
      return getRequireValue("BulkInvoiceSearchCriteria", 0) as BulkInvoiceSearchCriteria
    }
    
    property set BulkInvoiceSearchCriteria ($arg :  BulkInvoiceSearchCriteria) {
      setRequireValue("BulkInvoiceSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}