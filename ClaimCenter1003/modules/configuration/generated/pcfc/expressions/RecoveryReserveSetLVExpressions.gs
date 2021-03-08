package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/RecoveryReserveSetLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RecoveryReserveSetLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/RecoveryReserveSetLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends RecoveryReserveSetLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on CurrencyCell (id=Amount_Cell) at RecoveryReserveSetLV.pcf: line 70, column 55
    function action_41 () : void {
      ClaimFinancialsTransactionsDetail.goInMain(RecoveryReserve.Claim, RecoveryReserve)
    }
    
    // 'action' attribute on CurrencyCell (id=Amount_Cell) at RecoveryReserveSetLV.pcf: line 70, column 55
    function action_dest_42 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsDetail.createDestination(RecoveryReserve.Claim, RecoveryReserve)
    }
    
    // 'label' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at RecoveryReserveSetLV.pcf: line 51, column 49
    function label_27 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.RecoveryReserveSet.RecoveryCategory")
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at RecoveryReserveSetLV.pcf: line 57, column 74
    function label_32 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.RecoveryReserveSet.ReservingCurrency")
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at RecoveryReserveSetLV.pcf: line 36, column 45
    function valueRoot_19 () : java.lang.Object {
      return RecoveryReserve.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at RecoveryReserveSetLV.pcf: line 41, column 41
    function valueRoot_22 () : java.lang.Object {
      return RecoveryReserve
    }
    
    // 'value' attribute on CurrencyCell (id=OpenRecoveryReserves_Cell) at RecoveryReserveSetLV.pcf: line 62, column 141
    function valueRoot_39 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.OpenRecoveryReserves.withRecoveryCoding(RecoveryReserve.Coding)
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at RecoveryReserveSetLV.pcf: line 31, column 177
    function value_16 () : java.lang.String {
      return RecoveryReserve.Exposure.FullDescription == null ? DisplayKey.get("Web.Financials.Exposure.ClaimLevel") : RecoveryReserve.Exposure.FullDescription
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at RecoveryReserveSetLV.pcf: line 36, column 45
    function value_18 () : typekey.CoverageType {
      return RecoveryReserve.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at RecoveryReserveSetLV.pcf: line 41, column 41
    function value_21 () : typekey.CostType {
      return RecoveryReserve.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at RecoveryReserveSetLV.pcf: line 46, column 45
    function value_24 () : typekey.CostCategory {
      return RecoveryReserve.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at RecoveryReserveSetLV.pcf: line 51, column 49
    function value_28 () : typekey.RecoveryCategory {
      return RecoveryReserve.RecoveryCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at RecoveryReserveSetLV.pcf: line 57, column 74
    function value_33 () : typekey.Currency {
      return RecoveryReserve.ReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=OpenRecoveryReserves_Cell) at RecoveryReserveSetLV.pcf: line 62, column 141
    function value_38 () : gw.api.financials.CurrencyAmount {
      return gw.api.financials.FinancialsCalculations.OpenRecoveryReserves.withRecoveryCoding(RecoveryReserve.Coding).ReservingAmount
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at RecoveryReserveSetLV.pcf: line 70, column 55
    function value_43 () : gw.api.financials.IPairedMoney {
      return RecoveryReserve.TransactionAmountReservingAmountPair
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at RecoveryReserveSetLV.pcf: line 57, column 74
    function visible_35 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get RecoveryReserve () : entity.RecoveryReserve {
      return getIteratedValue(1) as entity.RecoveryReserve
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/RecoveryReserveSetLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RecoveryReserveSetLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RecoveryReserveSetLV.pcf: line 14, column 23
    function initialValue_0 () : boolean {
      return gw.api.financials.TransactionWizardHelper.haveSingleTransactionCurrency(RecoveryReserveList.toList())
    }
    
    // 'initialValue' attribute on Variable at RecoveryReserveSetLV.pcf: line 19, column 23
    function initialValue_1 () : boolean {
      return gw.api.financials.TransactionWizardHelper.haveSingleReservingCurrency(RecoveryReserveList.toList())
    }
    
    // 'label' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at RecoveryReserveSetLV.pcf: line 51, column 49
    function label_6 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.RecoveryReserveSet.RecoveryCategory")
    }
    
    // 'label' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at RecoveryReserveSetLV.pcf: line 57, column 74
    function label_8 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.RecoveryReserveSet.ReservingCurrency")
    }
    
    // 'value' attribute on CurrencyCell (id=OpenRecoveryReserves_Cell) at RecoveryReserveSetLV.pcf: line 62, column 141
    function sortValue_11 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return gw.api.financials.FinancialsCalculations.OpenRecoveryReserves.withRecoveryCoding(RecoveryReserve.Coding).ReservingAmount
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at RecoveryReserveSetLV.pcf: line 70, column 55
    function sortValue_12 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return RecoveryReserve.TransactionAmountReservingAmountPair
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at RecoveryReserveSetLV.pcf: line 31, column 177
    function sortValue_2 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return RecoveryReserve.Exposure.FullDescription == null ? DisplayKey.get("Web.Financials.Exposure.ClaimLevel") : RecoveryReserve.Exposure.FullDescription
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at RecoveryReserveSetLV.pcf: line 36, column 45
    function sortValue_3 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return RecoveryReserve.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CostType_Cell) at RecoveryReserveSetLV.pcf: line 41, column 41
    function sortValue_4 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return RecoveryReserve.CostType
    }
    
    // 'value' attribute on TypeKeyCell (id=CostCategory_Cell) at RecoveryReserveSetLV.pcf: line 46, column 45
    function sortValue_5 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return RecoveryReserve.CostCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=RecoveryCategory_Cell) at RecoveryReserveSetLV.pcf: line 51, column 49
    function sortValue_7 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return RecoveryReserve.RecoveryCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at RecoveryReserveSetLV.pcf: line 57, column 74
    function sortValue_9 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return RecoveryReserve.ReservingCurrency
    }
    
    // 'footerSumValue' attribute on RowIterator at RecoveryReserveSetLV.pcf: line 70, column 55
    function sumValue_15 (RecoveryReserve :  entity.RecoveryReserve) : java.lang.Object {
      return gw.api.financials.TransactionWizardHelper.getAmountForSumComputation(RecoveryReserve, haveSingleReservingCurrency, haveSingleTransactionCurrency)
    }
    
    // 'footerLabel' attribute on RowIterator at RecoveryReserveSetLV.pcf: line 31, column 177
    function value_13 () : java.lang.Object {
      return (haveSingleTransactionCurrency or haveSingleReservingCurrency) ? DisplayKey.get("LV.Financials.Total") : null
    }
    
    // 'value' attribute on RowIterator at RecoveryReserveSetLV.pcf: line 25, column 44
    function value_46 () : entity.RecoveryReserve[] {
      return RecoveryReserveList
    }
    
    // 'visible' attribute on TypeKeyCell (id=ReservingCurrency_Cell) at RecoveryReserveSetLV.pcf: line 57, column 74
    function visible_10 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get RecoveryReserveList () : RecoveryReserve[] {
      return getRequireValue("RecoveryReserveList", 0) as RecoveryReserve[]
    }
    
    property set RecoveryReserveList ($arg :  RecoveryReserve[]) {
      setRequireValue("RecoveryReserveList", 0, $arg)
    }
    
    property get haveSingleReservingCurrency () : boolean {
      return getVariableValue("haveSingleReservingCurrency", 0) as java.lang.Boolean
    }
    
    property set haveSingleReservingCurrency ($arg :  boolean) {
      setVariableValue("haveSingleReservingCurrency", 0, $arg)
    }
    
    property get haveSingleTransactionCurrency () : boolean {
      return getVariableValue("haveSingleTransactionCurrency", 0) as java.lang.Boolean
    }
    
    property set haveSingleTransactionCurrency ($arg :  boolean) {
      setVariableValue("haveSingleTransactionCurrency", 0, $arg)
    }
    
    
  }
  
  
}