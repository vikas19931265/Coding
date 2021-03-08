package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/recoveries/RecoverySearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RecoverySearchOptionalInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/recoveries/RecoverySearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RecoverySearchOptionalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function available_14 () : java.lang.Boolean {
      return (true)
                        and ( gw.api.util.CurrencyUtil.isSingleCurrencyMode() or RecoverySearchCriteria.FinancialCriterion.Currency != null)
                        and (RecoverySearchCriteria.FinancialCriterion.Options.length == 0 or RecoverySearchCriteria.FinancialCriterion.ChosenOption != null)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function available_46 () : java.lang.Boolean {
      return RecoverySearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function available_55 () : java.lang.Boolean {
      return RecoverySearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'available' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function available_6 () : java.lang.Boolean {
      return (true)
                                   and ( gw.api.util.CurrencyUtil.isSingleCurrencyMode() or RecoverySearchCriteria.FinancialCriterion.Currency != null)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.FinancialCriterion.AmountStart = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 54, column 48
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.FinancialCriterion.AmountEnd = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at RecoverySearchOptionalInputSet.pcf: line 25, column 46
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.RecoveryStatus = (__VALUE_TO_SET as typekey.TransactionStatus)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.FinancialCriterion.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TypeKeyInput (id=CostType_Input) at RecoverySearchOptionalInputSet.pcf: line 32, column 37
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.CostType = (__VALUE_TO_SET as typekey.CostType)
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCategory_Input) at RecoverySearchOptionalInputSet.pcf: line 39, column 45
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.RecoveryCategory = (__VALUE_TO_SET as typekey.RecoveryCategory)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.DateCriterionChoice.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.DateCriterionChoice.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.DateCriterionChoice.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.DateCriterionChoice.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.DateCriterionChoice.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.DateCriterionChoice = (__VALUE_TO_SET as entity.DateCriterionChoice)
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoverySearchCriteria.FinancialCriterion.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'format' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function format_15 () : java.lang.String {
      return gw.api.util.CurrencyUtil.getCurrencyFormatExpression(RecoverySearchCriteria.FinancialCriterion.Currency)
    }
    
    // 'optionLabel' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function optionLabel_10 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.locale.DisplayKey.get(VALUE)
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function valueRange_11 () : java.lang.Object {
      return RecoverySearchCriteria.FinancialCriterion.Options
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function valueRange_43 () : java.lang.Object {
      return RecoverySearchCriteria.DateCriterionChoice.Options
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at RecoverySearchOptionalInputSet.pcf: line 18, column 58
    function valueRoot_25 () : java.lang.Object {
      return RecoverySearchCriteria
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function valueRoot_4 () : java.lang.Object {
      return RecoverySearchCriteria.FinancialCriterion
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function valueRoot_41 () : java.lang.Object {
      return RecoverySearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 46, column 48
    function value_16 () : java.math.BigDecimal {
      return RecoverySearchCriteria.FinancialCriterion.AmountStart
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 16, column 74
    function value_2 () : typekey.Currency {
      return RecoverySearchCriteria.FinancialCriterion.Currency
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 54, column 48
    function value_21 () : java.math.BigDecimal {
      return RecoverySearchCriteria.FinancialCriterion.AmountEnd
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at RecoverySearchOptionalInputSet.pcf: line 18, column 58
    function value_24 () : entity.FinancialCriterionMC {
      return RecoverySearchCriteria.FinancialCriterion
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at RecoverySearchOptionalInputSet.pcf: line 25, column 46
    function value_27 () : typekey.TransactionStatus {
      return RecoverySearchCriteria.RecoveryStatus
    }
    
    // 'value' attribute on TypeKeyInput (id=CostType_Input) at RecoverySearchOptionalInputSet.pcf: line 32, column 37
    function value_31 () : typekey.CostType {
      return RecoverySearchCriteria.CostType
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCategory_Input) at RecoverySearchOptionalInputSet.pcf: line 39, column 45
    function value_35 () : typekey.RecoveryCategory {
      return RecoverySearchCriteria.RecoveryCategory
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function value_39 () : java.lang.String {
      return RecoverySearchCriteria.DateCriterionChoice.ChosenOption
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function value_47 () : typekey.DateRangeChoiceType {
      return RecoverySearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function value_51 () : java.lang.Object {
      return RecoverySearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function value_52 () : typekey.DateSearchType {
      return RecoverySearchCriteria.DateCriterionChoice.DateSearchType
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function value_56 () : java.util.Date {
      return RecoverySearchCriteria.DateCriterionChoice.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function value_62 () : java.util.Date {
      return RecoverySearchCriteria.DateCriterionChoice.EndDate
    }
    
    // 'value' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function value_7 () : java.lang.String {
      return RecoverySearchCriteria.FinancialCriterion.ChosenOption
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function value_70 () : entity.DateCriterionChoice {
      return RecoverySearchCriteria.DateCriterionChoice
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 32, column 58
    function verifyValueRange_13 () : void {
      var __valueRangeArg = RecoverySearchCriteria.FinancialCriterion.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at RecoverySearchOptionalInputSet.pcf: line 46, column 59
    function verifyValueRange_45 () : void {
      var __valueRangeArg = RecoverySearchCriteria.DateCriterionChoice.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'visible' attribute on FinancialCriterionMultiCurrencyChoiceInput (id=Amount_Input) at FinancialCriterionMultiCurrencyChoiceWidget.xml: line 11, column 72
    function visible_0 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get RecoverySearchCriteria () : RecoverySearchCriteria {
      return getRequireValue("RecoverySearchCriteria", 0) as RecoverySearchCriteria
    }
    
    property set RecoverySearchCriteria ($arg :  RecoverySearchCriteria) {
      setRequireValue("RecoverySearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}