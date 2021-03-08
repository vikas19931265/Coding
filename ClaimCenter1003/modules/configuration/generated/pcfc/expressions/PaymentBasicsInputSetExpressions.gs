package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/PaymentBasicsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PaymentBasicsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/PaymentBasicsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PaymentBasicsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at PaymentBasicsInputSet.pcf: line 72, column 25
    function def_onEnter_45 (def :  pcf.TransactionExchangeRateInputSet) : void {
      def.onEnter(Payment)
    }
    
    // 'def' attribute on ListViewInput at PaymentBasicsInputSet.pcf: line 75, column 98
    function def_onEnter_47 (def :  pcf.TransactionLineItemsLV) : void {
      def.onEnter(Payment)
    }
    
    // 'def' attribute on InputSetRef at PaymentBasicsInputSet.pcf: line 72, column 25
    function def_refreshVariables_46 (def :  pcf.TransactionExchangeRateInputSet) : void {
      def.refreshVariables(Payment)
    }
    
    // 'def' attribute on ListViewInput at PaymentBasicsInputSet.pcf: line 75, column 98
    function def_refreshVariables_48 (def :  pcf.TransactionLineItemsLV) : void {
      def.refreshVariables(Payment)
    }
    
    // 'value' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Matter = (__VALUE_TO_SET as entity.Matter)
    }
    
    // 'label' attribute on TypeKeyInput (id=ReservingCurrency_Input) at PaymentBasicsInputSet.pcf: line 45, column 70
    function label_24 () : java.lang.Object {
      return DisplayKey.get("NVV.Financials.SubView.PaymentBasics.Payment.ReservingCurrency")
    }
    
    // 'label' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function label_6 () : java.lang.Object {
      return DisplayKey.get("NVV.Financials.SubView.PaymentBasics.Payment.Matter")
    }
    
    // 'required' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function required_7 () : java.lang.Boolean {
      return Payment.CostCategory==typekey.CostCategory.TC_LEGAL
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function valueRange_11 () : java.lang.Object {
      return Payment.Claim.Matters
    }
    
    // 'value' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function valueRoot_10 () : java.lang.Object {
      return Payment
    }
    
    // 'value' attribute on TypeKeyInput (id=Coverage_Input) at PaymentBasicsInputSet.pcf: line 20, column 41
    function valueRoot_3 () : java.lang.Object {
      return Payment.Exposure
    }
    
    // 'value' attribute on CurrencyInput (id=OpenReserves_Input) at PaymentBasicsInputSet.pcf: line 63, column 128
    function valueRoot_40 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.getOpenReserves().withReserveLine(Payment.ReserveLine)
    }
    
    // 'value' attribute on TextInput (id=Exposure_Input) at PaymentBasicsInputSet.pcf: line 15, column 149
    function value_0 () : java.lang.String {
      return Payment.Exposure.DisplayName == null ? DisplayKey.get("Web.Financials.Exposure.ClaimLevel") : Payment.Exposure.DisplayName
    }
    
    // 'value' attribute on TypeKeyInput (id=CostType_Input) at PaymentBasicsInputSet.pcf: line 34, column 37
    function value_17 () : typekey.CostType {
      return Payment.CostType
    }
    
    // 'value' attribute on TypeKeyInput (id=Coverage_Input) at PaymentBasicsInputSet.pcf: line 20, column 41
    function value_2 () : typekey.CoverageType {
      return Payment.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=CostCategory_Input) at PaymentBasicsInputSet.pcf: line 39, column 41
    function value_20 () : typekey.CostCategory {
      return Payment.CostCategory
    }
    
    // 'value' attribute on TypeKeyInput (id=ReservingCurrency_Input) at PaymentBasicsInputSet.pcf: line 45, column 70
    function value_25 () : typekey.Currency {
      return Payment.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyInput (id=PaymentType_Input) at PaymentBasicsInputSet.pcf: line 50, column 40
    function value_30 () : typekey.PaymentType {
      return Payment.PaymentType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Eroding_Input) at PaymentBasicsInputSet.pcf: line 54, column 39
    function value_33 () : java.lang.Boolean {
      return Payment.ErodesReserves
    }
    
    // 'value' attribute on TextInput (id=Comments_Input) at PaymentBasicsInputSet.pcf: line 58, column 33
    function value_36 () : java.lang.String {
      return Payment.Comments
    }
    
    // 'value' attribute on CurrencyInput (id=OpenReserves_Input) at PaymentBasicsInputSet.pcf: line 63, column 128
    function value_39 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.getOpenReserves().withReserveLine(Payment.ReserveLine).ReservingAmount
    }
    
    // 'value' attribute on CurrencyInput (id=Amount_Input) at PaymentBasicsInputSet.pcf: line 69, column 51
    function value_42 () : gw.api.financials.IPairedMoney {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function value_8 () : entity.Matter {
      return Payment.Matter
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.Matter[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.Matter>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function verifyValueRange_13 () : void {
      var __valueRangeArg = Payment.Claim.Matters
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'visible' attribute on TypeKeyInput (id=ReservingCurrency_Input) at PaymentBasicsInputSet.pcf: line 45, column 70
    function visible_23 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    // 'visible' attribute on RangeInput (id=Matter_Input) at PaymentBasicsInputSet.pcf: line 29, column 111
    function visible_5 () : java.lang.Boolean {
      return ScriptParameters.UtilizeMatterBudget and Payment.CostCategory==typekey.CostCategory.TC_LEGAL
    }
    
    property get Payment () : Payment {
      return getRequireValue("Payment", 0) as Payment
    }
    
    property set Payment ($arg :  Payment) {
      setRequireValue("Payment", 0, $arg)
    }
    
    
  }
  
  
}