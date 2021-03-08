package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.payment.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionsLV_paymentExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.payment.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TransactionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.payment.pcf: line 49, column 106
    function action_24 () : void {
      TransactionViewDetailForward.drilldown(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.payment.pcf: line 57, column 42
    function action_26 () : void {
      ExposureDetailForward.go(Claim, TransactionView.Exposure)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.payment.pcf: line 49, column 106
    function action_dest_25 () : pcf.api.Destination {
      return pcf.TransactionViewDetailForward.createDestination(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.payment.pcf: line 57, column 42
    function action_dest_27 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(Claim, TransactionView.Exposure)
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.payment.pcf: line 78, column 74
    function label_41 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Payments.ReservingCurrency")
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.payment.pcf: line 57, column 42
    function outputConversion_28 (VALUE :  java.lang.Integer) : java.lang.String {
      if (null != VALUE) {return (VALUE as String);} else {return DisplayKey.get("Financials.ReserveLine.NoExposure");}
    }
    
    // 'value' attribute on DateCell (id=Check_ScheduledSendDate_Cell) at TransactionsLV.payment.pcf: line 31, column 60
    function valueRoot_16 () : java.lang.Object {
      return TransactionView
    }
    
    // 'value' attribute on DateCell (id=Check_ScheduledSendDate_Cell) at TransactionsLV.payment.pcf: line 31, column 60
    function value_15 () : java.util.Date {
      return TransactionView.Check_ScheduledSendDate
    }
    
    // 'value' attribute on DateCell (id=Check_IssueDate_Cell) at TransactionsLV.payment.pcf: line 35, column 52
    function value_18 () : java.util.Date {
      return TransactionView.Check_IssueDate
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.payment.pcf: line 42, column 61
    function value_21 () : gw.api.financials.CurrencyAmountPair {
      return TransactionView.CurrencyAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.payment.pcf: line 57, column 42
    function value_29 () : java.lang.Integer {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.payment.pcf: line 62, column 45
    function value_32 () : typekey.CoverageType {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.payment.pcf: line 67, column 41
    function value_35 () : typekey.CostType {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.payment.pcf: line 72, column 45
    function value_38 () : typekey.CostCategory {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.payment.pcf: line 78, column 74
    function value_42 () : typekey.Currency {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.payment.pcf: line 83, column 50
    function value_47 () : typekey.TransactionStatus {
      return TransactionView.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=PaymentType_Cell) at TransactionsLV.payment.pcf: line 88, column 44
    function value_50 () : typekey.PaymentType {
      return TransactionView.PaymentType
    }
    
    // 'value' attribute on TextCell (id=Check_CheckNumber_Cell) at TransactionsLV.payment.pcf: line 92, column 54
    function value_53 () : java.lang.String {
      return TransactionView.Check_CheckNumber
    }
    
    // 'value' attribute on TextCell (id=Check_PayTo_Cell) at TransactionsLV.payment.pcf: line 96, column 48
    function value_56 () : java.lang.String {
      return TransactionView.Check_PayTo
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.payment.pcf: line 78, column 74
    function visible_44 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get TransactionView () : PaymentView {
      return getIteratedValue(1) as PaymentView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.payment.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TransactionsLV.payment.pcf: line 18, column 83
    function initialValue_0 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return TxnFilterOption.getTransactionsQuery(Claim)
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.payment.pcf: line 78, column 74
    function label_8 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Payments.ReservingCurrency")
    }
    
    // 'value' attribute on DateCell (id=Check_ScheduledSendDate_Cell) at TransactionsLV.payment.pcf: line 31, column 60
    function sortValue_1 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.Check_ScheduledSendDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.payment.pcf: line 83, column 50
    function sortValue_11 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=PaymentType_Cell) at TransactionsLV.payment.pcf: line 88, column 44
    function sortValue_12 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.PaymentType
    }
    
    // 'value' attribute on TextCell (id=Check_CheckNumber_Cell) at TransactionsLV.payment.pcf: line 92, column 54
    function sortValue_13 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.Check_CheckNumber
    }
    
    // 'value' attribute on TextCell (id=Check_PayTo_Cell) at TransactionsLV.payment.pcf: line 96, column 48
    function sortValue_14 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.Check_PayTo
    }
    
    // 'value' attribute on DateCell (id=Check_IssueDate_Cell) at TransactionsLV.payment.pcf: line 35, column 52
    function sortValue_2 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.Check_IssueDate
    }
    
    // 'sortBy' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.payment.pcf: line 42, column 61
    function sortValue_3 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.ClaimAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.payment.pcf: line 57, column 42
    function sortValue_4 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.payment.pcf: line 62, column 45
    function sortValue_5 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.payment.pcf: line 67, column 41
    function sortValue_6 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.payment.pcf: line 72, column 45
    function sortValue_7 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.payment.pcf: line 78, column 74
    function sortValue_9 (TransactionView :  PaymentView) : java.lang.Object {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on RowIterator at TransactionsLV.payment.pcf: line 24, column 87
    function value_59 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return TransactionList
    }
    
    // 'type' attribute on RowIterator at TransactionsLV.payment.pcf: line 24, column 87
    function verifyIteratorType_60 () : void {
      var entry : gw.pl.persistence.core.Bean = null
      var typedEntry : PaymentView
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as PaymentView
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.payment.pcf: line 78, column 74
    function visible_10 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get TransactionList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getVariableValue("TransactionList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set TransactionList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setVariableValue("TransactionList", 0, $arg)
    }
    
    property get TxnFilterOption () : gw.api.financials.ClaimFinancialsTransactionsOption {
      return getRequireValue("TxnFilterOption", 0) as gw.api.financials.ClaimFinancialsTransactionsOption
    }
    
    property set TxnFilterOption ($arg :  gw.api.financials.ClaimFinancialsTransactionsOption) {
      setRequireValue("TxnFilterOption", 0, $arg)
    }
    
    
  }
  
  
}