package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/NewOnsetPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewOnsetPaymentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/NewOnsetPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewOnsetPaymentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at NewOnsetPaymentsLV.pcf: line 50, column 74
    function label_26 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.NewCheckPayments.Payments.ReservingCurrency")
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at NewOnsetPaymentsLV.pcf: line 29, column 40
    function outputConversion_13 (VALUE :  entity.Exposure) : java.lang.String {
      return ((Payment.ReserveLine != null) ? ((null == VALUE) ? DisplayKey.get("LV.Financials.NewCheckPayments.Payments.Exposure.None") : VALUE.DisplayName) : null)
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at NewOnsetPaymentsLV.pcf: line 29, column 40
    function valueRoot_15 () : java.lang.Object {
      return Payment
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at NewOnsetPaymentsLV.pcf: line 34, column 45
    function valueRoot_18 () : java.lang.Object {
      return Payment.Exposure
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at NewOnsetPaymentsLV.pcf: line 29, column 40
    function value_14 () : entity.Exposure {
      return Payment.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at NewOnsetPaymentsLV.pcf: line 34, column 45
    function value_17 () : typekey.CoverageType {
      return Payment.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at NewOnsetPaymentsLV.pcf: line 39, column 41
    function value_20 () : typekey.CostType {
      return Payment.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at NewOnsetPaymentsLV.pcf: line 44, column 45
    function value_23 () : typekey.CostCategory {
      return Payment.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at NewOnsetPaymentsLV.pcf: line 50, column 74
    function value_27 () : typekey.Currency {
      return Payment.ReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at NewOnsetPaymentsLV.pcf: line 57, column 55
    function value_32 () : gw.api.financials.IPairedMoney {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on TypeKeyCell (id=PaymentType_Cell) at NewOnsetPaymentsLV.pcf: line 62, column 44
    function value_35 () : typekey.PaymentType {
      return Payment.PaymentType
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at NewOnsetPaymentsLV.pcf: line 66, column 37
    function value_38 () : java.lang.String {
      return Payment.Comments
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at NewOnsetPaymentsLV.pcf: line 50, column 74
    function visible_29 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get Payment () : entity.Payment {
      return getIteratedValue(1) as entity.Payment
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/NewOnsetPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewOnsetPaymentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at NewOnsetPaymentsLV.pcf: line 50, column 74
    function label_4 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.NewCheckPayments.Payments.ReservingCurrency")
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at NewOnsetPaymentsLV.pcf: line 29, column 40
    function sortValue_0 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at NewOnsetPaymentsLV.pcf: line 34, column 45
    function sortValue_1 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at NewOnsetPaymentsLV.pcf: line 39, column 41
    function sortValue_2 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at NewOnsetPaymentsLV.pcf: line 44, column 45
    function sortValue_3 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at NewOnsetPaymentsLV.pcf: line 50, column 74
    function sortValue_5 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.ReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at NewOnsetPaymentsLV.pcf: line 57, column 55
    function sortValue_7 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on TypeKeyCell (id=PaymentType_Cell) at NewOnsetPaymentsLV.pcf: line 62, column 44
    function sortValue_8 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.PaymentType
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at NewOnsetPaymentsLV.pcf: line 66, column 37
    function sortValue_9 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Comments
    }
    
    // '$$sumValue' attribute on RowIterator at NewOnsetPaymentsLV.pcf: line 57, column 55
    function sumValueRoot_12 (Payment :  entity.Payment) : java.lang.Object {
      return Payment
    }
    
    // 'footerSumValue' attribute on RowIterator at NewOnsetPaymentsLV.pcf: line 57, column 55
    function sumValue_11 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at NewOnsetPaymentsLV.pcf: line 22, column 61
    function toCreateAndAdd_41 () : entity.Payment {
      return addPayment()
    }
    
    // 'toRemove' attribute on RowIterator at NewOnsetPaymentsLV.pcf: line 22, column 61
    function toRemove_42 (Payment :  entity.Payment) : void {
      removePayment(Payment)
    }
    
    // 'value' attribute on RowIterator at NewOnsetPaymentsLV.pcf: line 22, column 61
    function value_43 () : java.util.ArrayList<entity.Payment> {
      return PaymentList
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at NewOnsetPaymentsLV.pcf: line 50, column 74
    function visible_6 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get OriginalPayment () : Payment {
      return getRequireValue("OriginalPayment", 0) as Payment
    }
    
    property set OriginalPayment ($arg :  Payment) {
      setRequireValue("OriginalPayment", 0, $arg)
    }
    
    property get PaymentList () : java.util.ArrayList<Payment> {
      return getRequireValue("PaymentList", 0) as java.util.ArrayList<Payment>
    }
    
    property set PaymentList ($arg :  java.util.ArrayList<Payment>) {
      setRequireValue("PaymentList", 0, $arg)
    }
    
    function addPayment() : Payment { 
      var newPayment = OriginalPayment.createOnsetPayment(true, false)
      PaymentList.add(newPayment)
      return newPayment 
    }
    
    function removePayment(payment : Payment) { 
      if(PaymentList.Count == 1) {
        gw.api.util.LocationUtil.addRequestScopedErrorMessage(DisplayKey.get("Web.Financials.Payment.Recode.MustHaveAtLeastOnePayment"))
      } else {
        if(payment.hasDeductibleLineItem()) {
          payment.unlinkDeductible()
        }
        PaymentList.remove(payment)
        payment.remove()
      }
    }
    
    
  }
  
  
}