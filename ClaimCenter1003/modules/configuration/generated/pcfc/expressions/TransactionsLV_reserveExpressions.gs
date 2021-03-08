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
    function action_18 () : void {
      TransactionViewDetailForward.drilldown(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function action_20 () : void {
      ExposureDetailForward.go(Claim, TransactionView.Exposure)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.reserve.pcf: line 44, column 106
    function action_dest_19 () : pcf.api.Destination {
      return pcf.TransactionViewDetailForward.createDestination(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(Claim, TransactionView.Exposure)
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function label_35 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Reserves.ReservingCurrency")
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function outputConversion_22 (VALUE :  java.lang.Integer) : java.lang.String {
      if (null != VALUE) {return (VALUE as String);} else {return DisplayKey.get("Financials.ReserveLine.NoExposure");}
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.reserve.pcf: line 30, column 47
    function valueRoot_13 () : java.lang.Object {
      return TransactionView
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.reserve.pcf: line 30, column 47
    function value_12 () : java.util.Date {
      return TransactionView.CreateTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.reserve.pcf: line 37, column 61
    function value_15 () : gw.api.financials.CurrencyAmountPair {
      return TransactionView.CurrencyAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.reserve.pcf: line 52, column 42
    function value_23 () : java.lang.Integer {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.reserve.pcf: line 57, column 45
    function value_26 () : typekey.CoverageType {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.reserve.pcf: line 62, column 41
    function value_29 () : typekey.CostType {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.reserve.pcf: line 67, column 45
    function value_32 () : typekey.CostCategory {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function value_36 () : typekey.Currency {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.reserve.pcf: line 78, column 50
    function value_41 () : typekey.TransactionStatus {
      return TransactionView.Status
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.reserve.pcf: line 82, column 41
    function value_44 () : java.lang.String {
      return TransactionView.User
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function visible_38 () : java.lang.Boolean {
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
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function label_7 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Reserves.ReservingCurrency")
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.reserve.pcf: line 30, column 47
    function sortValue_1 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.CreateTime
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.reserve.pcf: line 78, column 50
    function sortValue_10 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.Status
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.reserve.pcf: line 82, column 41
    function sortValue_11 (TransactionView :  ReserveView) : java.lang.Object {
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
    function sortValue_8 (TransactionView :  ReserveView) : java.lang.Object {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on RowIterator at TransactionsLV.reserve.pcf: line 24, column 82
    function value_47 () : gw.api.database.IQueryBeanResult<entity.TransactionView> {
      return TransactionViewList
    }
    
    // 'type' attribute on RowIterator at TransactionsLV.reserve.pcf: line 24, column 82
    function verifyIteratorType_48 () : void {
      var entry : entity.TransactionView = null
      var typedEntry : ReserveView
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as ReserveView
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.reserve.pcf: line 73, column 74
    function visible_9 () : java.lang.Boolean {
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