package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckTransferPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CheckTransferPaymentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckTransferPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CheckTransferPaymentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PaymentExposure_Cell) at CheckTransferPaymentsLV.pcf: line 32, column 42
    function sortValue_0 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Exposure.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at CheckTransferPaymentsLV.pcf: line 38, column 45
    function sortValue_1 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at CheckTransferPaymentsLV.pcf: line 43, column 41
    function sortValue_2 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at CheckTransferPaymentsLV.pcf: line 48, column 45
    function sortValue_3 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckTransferPaymentsLV.pcf: line 54, column 74
    function sortValue_4 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.ReservingCurrency
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at CheckTransferPaymentsLV.pcf: line 58, column 37
    function sortValue_6 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.Comments
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentAmount_Cell) at CheckTransferPaymentsLV.pcf: line 64, column 55
    function sortValue_7 (Payment :  entity.Payment) : java.lang.Object {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on RowIterator at CheckTransferPaymentsLV.pcf: line 24, column 36
    function value_34 () : entity.Payment[] {
      return Check.Payments
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckTransferPaymentsLV.pcf: line 54, column 74
    function visible_5 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get Check () : Check {
      return getRequireValue("Check", 0) as Check
    }
    
    property set Check ($arg :  Check) {
      setRequireValue("Check", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get displayLink () : boolean {
      return getRequireValue("displayLink", 0) as java.lang.Boolean
    }
    
    property set displayLink ($arg :  boolean) {
      setRequireValue("displayLink", 0, $arg)
    }
    
    property get reserveLineInputSetHelper () : gw.api.financials.ReserveLineInputSetHelper {
      return getRequireValue("reserveLineInputSetHelper", 0) as gw.api.financials.ReserveLineInputSetHelper
    }
    
    property set reserveLineInputSetHelper ($arg :  gw.api.financials.ReserveLineInputSetHelper) {
      setRequireValue("reserveLineInputSetHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckTransferPaymentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CheckTransferPaymentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=TransferPaymentViewDetail) at CheckTransferPaymentsLV.pcf: line 72, column 36
    function action_32 () : void {
      PaymentTransferPopup.push(Payment, Claim, reserveLineInputSetHelper)
    }
    
    // 'action' attribute on Link (id=TransferPaymentViewDetail) at CheckTransferPaymentsLV.pcf: line 72, column 36
    function action_dest_33 () : pcf.api.Destination {
      return pcf.PaymentTransferPopup.createDestination(Payment, Claim, reserveLineInputSetHelper)
    }
    
    // 'outputConversion' attribute on TextCell (id=PaymentExposure_Cell) at CheckTransferPaymentsLV.pcf: line 32, column 42
    function outputConversion_8 (VALUE :  java.lang.Integer) : java.lang.String {
      return (null == VALUE) ? DisplayKey.get("Financials.ReserveLine.NoExposure") : VALUE as String
    }
    
    // 'value' attribute on TextCell (id=PaymentExposure_Cell) at CheckTransferPaymentsLV.pcf: line 32, column 42
    function valueRoot_10 () : java.lang.Object {
      return Payment.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at CheckTransferPaymentsLV.pcf: line 43, column 41
    function valueRoot_16 () : java.lang.Object {
      return Payment
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at CheckTransferPaymentsLV.pcf: line 38, column 45
    function value_12 () : typekey.CoverageType {
      return Payment.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at CheckTransferPaymentsLV.pcf: line 43, column 41
    function value_15 () : typekey.CostType {
      return Payment.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at CheckTransferPaymentsLV.pcf: line 48, column 45
    function value_18 () : typekey.CostCategory {
      return Payment.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckTransferPaymentsLV.pcf: line 54, column 74
    function value_21 () : typekey.Currency {
      return Payment.ReservingCurrency
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at CheckTransferPaymentsLV.pcf: line 58, column 37
    function value_25 () : java.lang.String {
      return Payment.Comments
    }
    
    // 'value' attribute on CurrencyCell (id=PaymentAmount_Cell) at CheckTransferPaymentsLV.pcf: line 64, column 55
    function value_28 () : gw.api.financials.IPairedMoney {
      return Payment.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on TextCell (id=PaymentExposure_Cell) at CheckTransferPaymentsLV.pcf: line 32, column 42
    function value_9 () : java.lang.Integer {
      return Payment.Exposure.ClaimOrder
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at CheckTransferPaymentsLV.pcf: line 54, column 74
    function visible_23 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    // 'visible' attribute on Link (id=TransferPaymentViewDetail) at CheckTransferPaymentsLV.pcf: line 72, column 36
    function visible_31 () : java.lang.Boolean {
      return displayLink
    }
    
    property get Payment () : entity.Payment {
      return getIteratedValue(1) as entity.Payment
    }
    
    
  }
  
  
}