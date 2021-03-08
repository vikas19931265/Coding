package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionsLV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TransactionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=TType_Cell) at TransactionsLV.default.pcf: line 31, column 44
    function action_13 () : void {
      TransactionViewDetailForward.drilldown(Claim, TransactionView)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.default.pcf: line 50, column 106
    function action_24 () : void {
      TransactionViewDetailForward.drilldown(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.default.pcf: line 58, column 42
    function action_26 () : void {
      ExposureDetailForward.go(Claim, TransactionView.Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=TType_Cell) at TransactionsLV.default.pcf: line 31, column 44
    function action_dest_14 () : pcf.api.Destination {
      return pcf.TransactionViewDetailForward.createDestination(Claim, TransactionView)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.default.pcf: line 50, column 106
    function action_dest_25 () : pcf.api.Destination {
      return pcf.TransactionViewDetailForward.createDestination(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.default.pcf: line 58, column 42
    function action_dest_27 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(Claim, TransactionView.Exposure)
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.default.pcf: line 79, column 74
    function label_41 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Transactions.ReservingCurrency")
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.default.pcf: line 58, column 42
    function outputConversion_28 (VALUE :  java.lang.Integer) : java.lang.String {
      if (null != VALUE) {return (VALUE as String);} else {return DisplayKey.get("Financials.ReserveLine.NoExposure");}
    }
    
    // 'value' attribute on TypeKeyCell (id=TType_Cell) at TransactionsLV.default.pcf: line 31, column 44
    function valueRoot_16 () : java.lang.Object {
      return TransactionView
    }
    
    // 'value' attribute on TypeKeyCell (id=TType_Cell) at TransactionsLV.default.pcf: line 31, column 44
    function value_15 () : typekey.Transaction {
      return TransactionView.TransactionSubtype
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at TransactionsLV.default.pcf: line 36, column 47
    function value_18 () : java.util.Date {
      return TransactionView.CreateTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.default.pcf: line 43, column 61
    function value_21 () : gw.api.financials.CurrencyAmountPair {
      return TransactionView.CurrencyAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.default.pcf: line 58, column 42
    function value_29 () : java.lang.Integer {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.default.pcf: line 63, column 45
    function value_32 () : typekey.CoverageType {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.default.pcf: line 68, column 41
    function value_35 () : typekey.CostType {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.default.pcf: line 73, column 45
    function value_38 () : typekey.CostCategory {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.default.pcf: line 79, column 74
    function value_42 () : typekey.Currency {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.default.pcf: line 84, column 50
    function value_47 () : typekey.TransactionStatus {
      return TransactionView.Status
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.default.pcf: line 88, column 41
    function value_50 () : java.lang.String {
      return TransactionView.User
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.default.pcf: line 79, column 74
    function visible_44 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get TransactionView () : entity.TransactionDefaultView {
      return getIteratedValue(1) as entity.TransactionDefaultView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TransactionsLV.default.pcf: line 18, column 83
    function initialValue_0 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return TxnFilterOption.getTransactionsQuery(Claim)
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.default.pcf: line 79, column 74
    function label_8 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Transactions.ReservingCurrency")
    }
    
    // 'value' attribute on TypeKeyCell (id=TType_Cell) at TransactionsLV.default.pcf: line 31, column 44
    function sortValue_1 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.TransactionSubtype
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.default.pcf: line 84, column 50
    function sortValue_11 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.Status
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.default.pcf: line 88, column 41
    function sortValue_12 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.User
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at TransactionsLV.default.pcf: line 36, column 47
    function sortValue_2 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.CreateTime
    }
    
    // 'sortBy' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.default.pcf: line 43, column 61
    function sortValue_3 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.ClaimAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.default.pcf: line 58, column 42
    function sortValue_4 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.default.pcf: line 63, column 45
    function sortValue_5 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.default.pcf: line 68, column 41
    function sortValue_6 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.default.pcf: line 73, column 45
    function sortValue_7 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.default.pcf: line 79, column 74
    function sortValue_9 (TransactionView :  entity.TransactionDefaultView) : java.lang.Object {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on RowIterator at TransactionsLV.default.pcf: line 24, column 87
    function value_53 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return TransactionViewList
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.default.pcf: line 79, column 74
    function visible_10 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get TransactionViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getVariableValue("TransactionViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set TransactionViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setVariableValue("TransactionViewList", 0, $arg)
    }
    
    property get TxnFilterOption () : gw.api.financials.ClaimFinancialsTransactionsOption {
      return getRequireValue("TxnFilterOption", 0) as gw.api.financials.ClaimFinancialsTransactionsOption
    }
    
    property set TxnFilterOption ($arg :  gw.api.financials.ClaimFinancialsTransactionsOption) {
      setRequireValue("TxnFilterOption", 0, $arg)
    }
    
    
  }
  
  
}