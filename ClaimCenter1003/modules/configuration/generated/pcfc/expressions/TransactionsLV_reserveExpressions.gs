package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.reserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionsLV_reserveExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.reserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TransactionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.reserve.pcf: line 44, column 106
    function action_17 () : void {
      TransactionViewDetailForward.drilldown(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function action_19 () : void {
      ExposureDetailForward.go(Claim, TransactionView.Exposure)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.reserve.pcf: line 44, column 106
    function action_dest_18 () : pcf.api.Destination {
      return pcf.TransactionViewDetailForward.createDestination(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(Claim, TransactionView.Exposure)
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function outputConversion_21 (VALUE :  java.lang.Integer) : java.lang.String {
      if (null != VALUE) {return (VALUE as String);} else {return DisplayKey.get("Financials.ReserveLine.NoExposure");}
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.reserve.pcf: line 30, column 47
    function valueRoot_12 () : java.lang.Object {
      return TransactionView
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.reserve.pcf: line 30, column 47
    function value_11 () : java.util.Date {
      return TransactionView.CreateTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.reserve.pcf: line 37, column 61
    function value_14 () : gw.api.financials.CurrencyAmountPair {
      return TransactionView.CurrencyAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function value_22 () : java.lang.Integer {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.reserve.pcf: line 57, column 45
    function value_25 () : typekey.CoverageType {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.reserve.pcf: line 62, column 41
    function value_28 () : typekey.CostType {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.reserve.pcf: line 67, column 45
    function value_31 () : typekey.CostCategory {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function value_34 () : typekey.Currency {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.reserve.pcf: line 78, column 50
    function value_38 () : typekey.TransactionStatus {
      return TransactionView.Status
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.reserve.pcf: line 82, column 41
    function value_41 () : java.lang.String {
      return TransactionView.User
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function visible_36 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get TransactionView () : ReserveView {
      return getIteratedValue(1) as ReserveView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.reserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TransactionsLV.reserve.pcf: line 18, column 78
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.TransactionView> {
      return TxnFilterOption.getTransactionsQuery(Claim)
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.reserve.pcf: line 30, column 47
    function sortValue_1 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.CreateTime
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.reserve.pcf: line 82, column 41
    function sortValue_10 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.User
    }
    
    // 'sortBy' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.reserve.pcf: line 37, column 61
    function sortValue_2 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.ClaimAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function sortValue_3 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.reserve.pcf: line 57, column 45
    function sortValue_4 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.reserve.pcf: line 62, column 41
    function sortValue_5 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.reserve.pcf: line 67, column 45
    function sortValue_6 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function sortValue_7 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.reserve.pcf: line 78, column 50
    function sortValue_9 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.Status
    }
    
    // 'value' attribute on RowIterator at TransactionsLV.reserve.pcf: line 24, column 82
    function value_44 () : gw.api.database.IQueryBeanResult<entity.TransactionView> {
      return TransactionViewList
    }
    
    // 'type' attribute on RowIterator at TransactionsLV.reserve.pcf: line 24, column 82
    function verifyIteratorType_45 () : void {
      var entry : entity.TransactionView = null
      var typedEntry : ReserveView
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as ReserveView
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function visible_8 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get TransactionViewList () : gw.api.database.IQueryBeanResult<entity.TransactionView> {
      return getVariableValue("TransactionViewList", 0) as gw.api.database.IQueryBeanResult<entity.TransactionView>
    }
    
    property set TransactionViewList ($arg :  gw.api.database.IQueryBeanResult<entity.TransactionView>) {
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