package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/shared/TransactionExchangeRateInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionExchangeRateInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/shared/TransactionExchangeRateInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionExchangeRateInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=Transaction_RateSet_Description_Input) at TransactionExchangeRateInputSet.pcf: line 34, column 85
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      transaction.TransToReservingExchangeRate.ExchangeRateSet.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Transaction_ExchangeRateOverride_Input) at TransactionExchangeRateInputSet.pcf: line 17, column 64
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      transaction.OverrideTransToReservingExchangeRate = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Transaction_ExchangeRate_Input) at TransactionExchangeRateInputSet.pcf: line 27, column 40
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      transaction.TransToReservingExchangeRateRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=Transaction_ExchangeRateOverride_Input) at TransactionExchangeRateInputSet.pcf: line 17, column 64
    function editable_0 () : java.lang.Boolean {
      return perm.ExchangeRate.edit
    }
    
    // 'format' attribute on TextInput (id=Transaction_ExchangeRate_Input) at TransactionExchangeRateInputSet.pcf: line 27, column 40
    function format_7 () : java.lang.String {
      var rate = transaction.TransToReservingExchangeRate; return "1 " + rate.BaseCurrency.DisplayName + " = #.###### " + rate.PriceCurrency.DisplayName;
    }
    
    // 'value' attribute on TextInput (id=Transaction_RateSet_Description_Input) at TransactionExchangeRateInputSet.pcf: line 34, column 85
    function valueRoot_16 () : java.lang.Object {
      return transaction.TransToReservingExchangeRate.ExchangeRateSet
    }
    
    // 'value' attribute on BooleanRadioInput (id=Transaction_ExchangeRateOverride_Input) at TransactionExchangeRateInputSet.pcf: line 17, column 64
    function valueRoot_3 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on BooleanRadioInput (id=Transaction_ExchangeRateOverride_Input) at TransactionExchangeRateInputSet.pcf: line 17, column 64
    function value_1 () : java.lang.Boolean {
      return transaction.OverrideTransToReservingExchangeRate
    }
    
    // 'value' attribute on TextInput (id=Transaction_RateSet_Description_Input) at TransactionExchangeRateInputSet.pcf: line 34, column 85
    function value_14 () : java.lang.String {
      return transaction.TransToReservingExchangeRate.ExchangeRateSet.Description
    }
    
    // 'value' attribute on DateInput (id=Transaction_RateSet_Date_Input) at TransactionExchangeRateInputSet.pcf: line 38, column 87
    function value_19 () : java.util.Date {
      return transaction.TransToReservingExchangeRate.ExchangeRateSet.EffectiveDate
    }
    
    // 'value' attribute on TextInput (id=Transaction_ExchangeRate_Input) at TransactionExchangeRateInputSet.pcf: line 27, column 40
    function value_8 () : java.math.BigDecimal {
      return transaction.TransToReservingExchangeRateRate
    }
    
    // 'visible' attribute on InputSet (id=TransactionExchangeRateInputSet) at TransactionExchangeRateInputSet.pcf: line 7, column 120
    function visible_22 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode() and transaction.Currency != transaction.ReservingCurrency
    }
    
    property get transaction () : Transaction {
      return getRequireValue("transaction", 0) as Transaction
    }
    
    property set transaction ($arg :  Transaction) {
      setRequireValue("transaction", 0, $arg)
    }
    
    
  }
  
  
}