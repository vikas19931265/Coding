package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.recovery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionsLV_recoveryExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.recovery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TransactionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.recovery.pcf: line 44, column 106
    function action_20 () : void {
      TransactionViewDetailForward.drilldown(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.recovery.pcf: line 52, column 42
    function action_22 () : void {
      ExposureDetailForward.go(Claim, TransactionView.Exposure)
    }
    
    // 'action' attribute on Link (id=TransactionAmountViewDetail) at TransactionsLV.recovery.pcf: line 44, column 106
    function action_dest_21 () : pcf.api.Destination {
      return pcf.TransactionViewDetailForward.createDestination(Claim, TransactionView)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.recovery.pcf: line 52, column 42
    function action_dest_23 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(Claim, TransactionView.Exposure)
    }
    
    // 'label' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at TransactionsLV.recovery.pcf: line 72, column 49
    function label_37 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Recoveries.RecoveryCategory")
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.recovery.pcf: line 78, column 74
    function label_42 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Recoveries.ReservingCurrency")
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.recovery.pcf: line 52, column 42
    function outputConversion_24 (VALUE :  java.lang.Integer) : java.lang.String {
      if (null != VALUE) {return (VALUE as String);} else {return DisplayKey.get("Financials.ReserveLine.NoExposure");}
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.recovery.pcf: line 30, column 47
    function valueRoot_15 () : java.lang.Object {
      return TransactionView
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.recovery.pcf: line 30, column 47
    function value_14 () : java.util.Date {
      return TransactionView.CreateTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.recovery.pcf: line 37, column 61
    function value_17 () : gw.api.financials.CurrencyAmountPair {
      return TransactionView.CurrencyAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.recovery.pcf: line 52, column 42
    function value_25 () : java.lang.Integer {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.recovery.pcf: line 57, column 45
    function value_28 () : typekey.CoverageType {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.recovery.pcf: line 62, column 41
    function value_31 () : typekey.CostType {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.recovery.pcf: line 67, column 45
    function value_34 () : typekey.CostCategory {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at TransactionsLV.recovery.pcf: line 72, column 49
    function value_38 () : typekey.RecoveryCategory {
      return TransactionView.RecoveryCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.recovery.pcf: line 78, column 74
    function value_43 () : typekey.Currency {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.recovery.pcf: line 83, column 50
    function value_48 () : typekey.TransactionStatus {
      return TransactionView.Status
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.recovery.pcf: line 87, column 41
    function value_51 () : java.lang.String {
      return TransactionView.User
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.recovery.pcf: line 78, column 74
    function visible_45 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get TransactionView () : RecoveryView {
      return getIteratedValue(1) as RecoveryView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionsLV.recovery.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TransactionsLV.recovery.pcf: line 18, column 83
    function initialValue_0 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return TxnFilterOption.getTransactionsQuery(Claim)
    }
    
    // 'label' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at TransactionsLV.recovery.pcf: line 72, column 49
    function label_7 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Recoveries.RecoveryCategory")
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.recovery.pcf: line 78, column 74
    function label_9 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.Recoveries.ReservingCurrency")
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TransactionsLV.recovery.pcf: line 30, column 47
    function sortValue_1 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.CreateTime
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.recovery.pcf: line 78, column 74
    function sortValue_10 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.ReservingCurrency
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionsLV.recovery.pcf: line 83, column 50
    function sortValue_12 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.Status
    }
    
    // 'value' attribute on TextCell (id=User_Cell) at TransactionsLV.recovery.pcf: line 87, column 41
    function sortValue_13 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.User
    }
    
    // 'sortBy' attribute on CurrencyCell (id=Amount_Cell) at TransactionsLV.recovery.pcf: line 37, column 61
    function sortValue_2 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.ClaimAmount
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at TransactionsLV.recovery.pcf: line 52, column 42
    function sortValue_3 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.ExposureName
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at TransactionsLV.recovery.pcf: line 57, column 45
    function sortValue_4 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.CoverageType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at TransactionsLV.recovery.pcf: line 62, column 41
    function sortValue_5 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at TransactionsLV.recovery.pcf: line 67, column 45
    function sortValue_6 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at TransactionsLV.recovery.pcf: line 72, column 49
    function sortValue_8 (TransactionView :  RecoveryView) : java.lang.Object {
      return TransactionView.RecoveryCategory
    }
    
    // 'value' attribute on RowIterator at TransactionsLV.recovery.pcf: line 24, column 87
    function value_54 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return TransactionViewList
    }
    
    // 'type' attribute on RowIterator at TransactionsLV.recovery.pcf: line 24, column 87
    function verifyIteratorType_55 () : void {
      var entry : gw.pl.persistence.core.Bean = null
      var typedEntry : RecoveryView
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as RecoveryView
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at TransactionsLV.recovery.pcf: line 78, column 74
    function visible_11 () : java.lang.Boolean {
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