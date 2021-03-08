package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckSummaryPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CheckSummaryPaymentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckSummaryPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CheckSummaryPaymentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=Check_ScheduledSendDate_Cell) at CheckSummaryPaymentsLV.pcf: line 22, column 52
    function sortValue_0 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Check.ScheduledSendDate
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at CheckSummaryPaymentsLV.pcf: line 29, column 55
    function sortValue_1 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at CheckSummaryPaymentsLV.pcf: line 43, column 42
    function sortValue_2 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Exposure.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at CheckSummaryPaymentsLV.pcf: line 48, column 45
    function sortValue_3 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at CheckSummaryPaymentsLV.pcf: line 53, column 41
    function sortValue_4 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at CheckSummaryPaymentsLV.pcf: line 58, column 45
    function sortValue_5 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckSummaryPaymentsLV.pcf: line 64, column 74
    function sortValue_6 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at CheckSummaryPaymentsLV.pcf: line 69, column 50
    function sortValue_8 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=PaymentType_Cell) at CheckSummaryPaymentsLV.pcf: line 74, column 44
    function sortValue_9 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.PaymentType
    }
    
    // 'value' attribute on RowIterator at CheckSummaryPaymentsLV.pcf: line 16, column 36
    function value_41 () : entity.Payment[] {
      return PaymentList
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckSummaryPaymentsLV.pcf: line 64, column 74
    function visible_7 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get PaymentList () : Payment[] {
      return getRequireValue("PaymentList", 0) as Payment[]
    }
    
    property set PaymentList ($arg :  Payment[]) {
      setRequireValue("PaymentList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckSummaryPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CheckSummaryPaymentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=PaymentAmountViewDetail) at CheckSummaryPaymentsLV.pcf: line 36, column 95
    function action_16 () : void {
      ClaimFinancialsTransactionsDetail.goInMain(Payment.Claim, Payment)
    }
    
    // 'action' attribute on Link (id=PaymentAmountViewDetail) at CheckSummaryPaymentsLV.pcf: line 36, column 95
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsDetail.createDestination(Payment.Claim, Payment)
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at CheckSummaryPaymentsLV.pcf: line 43, column 42
    function outputConversion_18 (VALUE :  java.lang.Integer) : java.lang.String {
      return (null == VALUE) ? DisplayKey.get("LV.Financials.NewCheckPayments.Payments.Exposure.None") : VALUE as String
    }
    
    // 'value' attribute on DateCell (id=Check_ScheduledSendDate_Cell) at CheckSummaryPaymentsLV.pcf: line 22, column 52
    function valueRoot_11 () : java.lang.Object {
      return Payment.Check
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at CheckSummaryPaymentsLV.pcf: line 29, column 55
    function valueRoot_14 () : java.lang.Object {
      return Payment
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at CheckSummaryPaymentsLV.pcf: line 43, column 42
    function valueRoot_20 () : java.lang.Object {
      return Payment.Exposure
    }
    
    // 'value' attribute on DateCell (id=Check_ScheduledSendDate_Cell) at CheckSummaryPaymentsLV.pcf: line 22, column 52
    function value_10 () : java.util.Date {
      return Payment.Check.ScheduledSendDate
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at CheckSummaryPaymentsLV.pcf: line 29, column 55
    function value_13 () : gw.api.financials.IPairedMoney {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at CheckSummaryPaymentsLV.pcf: line 43, column 42
    function value_19 () : java.lang.Integer {
      return Payment.Exposure.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at CheckSummaryPaymentsLV.pcf: line 48, column 45
    function value_22 () : typekey.CoverageType {
      return Payment.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at CheckSummaryPaymentsLV.pcf: line 53, column 41
    function value_25 () : typekey.CostType {
      return Payment.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at CheckSummaryPaymentsLV.pcf: line 58, column 45
    function value_28 () : typekey.CostCategory {
      return Payment.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckSummaryPaymentsLV.pcf: line 64, column 74
    function value_31 () : typekey.Currency {
      return Payment.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at CheckSummaryPaymentsLV.pcf: line 69, column 50
    function value_35 () : typekey.TransactionStatus {
      return Payment.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=PaymentType_Cell) at CheckSummaryPaymentsLV.pcf: line 74, column 44
    function value_38 () : typekey.PaymentType {
      return Payment.PaymentType
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckSummaryPaymentsLV.pcf: line 64, column 74
    function visible_33 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get Payment () : entity.Payment {
      return getIteratedValue(1) as entity.Payment
    }
    
    
  }
  
  
}