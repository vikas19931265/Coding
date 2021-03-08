package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/reserve/EditableMultiCurrencyReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableMultiCurrencyReservesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/reserve/EditableMultiCurrencyReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableMultiCurrencyReservesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=ReservingCurrency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 53, column 29
    function label_0 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.ReserveSet.MulticurrencyReserves.ReservingCurrency")
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 78, column 40
    function sortValue_2 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return EditWrapper.Currency
    }
    
    // 'value' attribute on RowIterator at EditableMultiCurrencyReservesLV.pcf: line 17, column 51
    function value_40 () : entity.TransactionEditWrapper[] {
      return new TransactionEditWrapper[] { EditWrapper }
    }
    
    // 'visible' attribute on TextCell (id=ReservingCurrency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 53, column 29
    function visible_1 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get EditWrapper () : entity.TransactionEditWrapper {
      return getRequireValue("EditWrapper", 0) as entity.TransactionEditWrapper
    }
    
    property set EditWrapper ($arg :  entity.TransactionEditWrapper) {
      setRequireValue("EditWrapper", 0, $arg)
    }
    
    property get WizardHelper () : gw.api.financials.ReserveWizardHelper {
      return getRequireValue("WizardHelper", 0) as gw.api.financials.ReserveWizardHelper
    }
    
    property set WizardHelper ($arg :  gw.api.financials.ReserveWizardHelper) {
      setRequireValue("WizardHelper", 0, $arg)
    }
    
    
    function setNewTransactionAmountToInitialValue() {
      var initialValue = WizardHelper.getAvailableReservesAmountPair( EditWrapper.Transaction ).Amount + WizardHelper.getPendingApprovalReservesAmountPair( EditWrapper.Transaction ).Amount
      // this sets the transaction and reserving amounts
      EditWrapper.NewAmountInTransactionCurrency.setAmount( initialValue )
    }
          
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/reserve/EditableMultiCurrencyReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableMultiCurrencyReservesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 78, column 40
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      EditWrapper.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableMultiCurrencyReservesLV.pcf: line 108, column 29
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      ReserveWrapper.Transaction.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextCell (id=ReservingCurrency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 53, column 29
    function label_16 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.ReserveSet.MulticurrencyReserves.ReservingCurrency")
    }
    
    // 'onChange' attribute on PostOnChange at EditableMultiCurrencyReservesLV.pcf: line 80, column 65
    function onChange_26 () : void {
      setNewTransactionAmountToInitialValue()
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Cell) at EditableMultiCurrencyReservesLV.pcf: line 25, column 29
    function outputConversion_3 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE == null ? DisplayKey.get("Web.Financials.Exposure.ClaimLevel") : VALUE
    }
    
    // 'value' attribute on TextCell (id=CostType_Cell) at EditableMultiCurrencyReservesLV.pcf: line 38, column 29
    function valueRoot_11 () : java.lang.Object {
      return EditWrapper.Transaction
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 78, column 40
    function valueRoot_29 () : java.lang.Object {
      return EditWrapper
    }
    
    // 'value' attribute on CurrencyCell (id=NewAvailableReserves_Cell) at EditableMultiCurrencyReservesLV.pcf: line 91, column 28
    function valueRoot_32 () : java.lang.Object {
      return ReserveWrapper
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableMultiCurrencyReservesLV.pcf: line 108, column 29
    function valueRoot_38 () : java.lang.Object {
      return ReserveWrapper.Transaction
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at EditableMultiCurrencyReservesLV.pcf: line 25, column 29
    function valueRoot_5 () : java.lang.Object {
      return EditWrapper.Transaction.Exposure
    }
    
    // 'value' attribute on TextCell (id=CostType_Cell) at EditableMultiCurrencyReservesLV.pcf: line 38, column 29
    function value_10 () : typekey.CostType {
      return EditWrapper.Transaction.CostType
    }
    
    // 'value' attribute on TextCell (id=CostCategory_Cell) at EditableMultiCurrencyReservesLV.pcf: line 45, column 29
    function value_13 () : typekey.CostCategory {
      return EditWrapper.Transaction.CostCategory
    }
    
    // 'value' attribute on TextCell (id=ReservingCurrency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 53, column 29
    function value_17 () : typekey.Currency {
      return EditWrapper.Transaction.ReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=AvailableReserves_Cell) at EditableMultiCurrencyReservesLV.pcf: line 61, column 28
    function value_22 () : gw.api.financials.IPairedMoney {
      return WizardHelper.getAvailableReservesAmountPair( ReserveWrapper.Transaction )
    }
    
    // 'value' attribute on CurrencyCell (id=PendingReserves_Cell) at EditableMultiCurrencyReservesLV.pcf: line 71, column 29
    function value_24 () : gw.api.financials.IPairedMoney {
      return WizardHelper.getPendingApprovalReservesAmountPair( ReserveWrapper.Transaction )
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 78, column 40
    function value_27 () : typekey.Currency {
      return EditWrapper.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=NewAvailableReserves_Cell) at EditableMultiCurrencyReservesLV.pcf: line 91, column 28
    function value_31 () : gw.api.financials.IMutableMoney {
      return ReserveWrapper.NewAmountInTransactionCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=ChangeAmount_Cell) at EditableMultiCurrencyReservesLV.pcf: line 101, column 29
    function value_34 () : gw.api.financials.IPairedMoney {
      return WizardHelper.getChangeAmountPair(ReserveWrapper)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableMultiCurrencyReservesLV.pcf: line 108, column 29
    function value_36 () : java.lang.String {
      return ReserveWrapper.Transaction.Comments
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at EditableMultiCurrencyReservesLV.pcf: line 25, column 29
    function value_4 () : java.lang.String {
      return EditWrapper.Transaction.Exposure.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at EditableMultiCurrencyReservesLV.pcf: line 31, column 45
    function value_7 () : typekey.CoverageType {
      return EditWrapper.Transaction.Exposure.PrimaryCoverage
    }
    
    // 'visible' attribute on TextCell (id=ReservingCurrency_Cell) at EditableMultiCurrencyReservesLV.pcf: line 53, column 29
    function visible_19 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get ReserveWrapper () : entity.TransactionEditWrapper {
      return getIteratedValue(1) as entity.TransactionEditWrapper
    }
    
    
  }
  
  
}