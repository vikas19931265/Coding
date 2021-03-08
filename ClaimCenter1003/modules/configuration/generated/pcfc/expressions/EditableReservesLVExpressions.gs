package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/reserve/EditableReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableReservesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/reserve/EditableReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableReservesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoAdd' attribute on RowIterator at EditableReservesLV.pcf: line 29, column 51
    function autoAdd_22 () : java.lang.Boolean {
      return addNew
    }
    
    // 'label' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function label_5 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.ReserveSet.Reserves.ReservingCurrency")
    }
    
    // 'label' attribute on CurrencyCell (id=NewAmount_Cell) at EditableReservesLV.pcf: line 152, column 28
    function label_9 () : java.lang.Object {
      return gw.api.system.CCConfigParameters.SetReservesByTotalIncurred.Value ? DisplayKey.get("LV.Financials.ReserveSet.Reserves.NewTotalIncurred") : DisplayKey.get("LV.Financials.ReserveSet.Reserves.NewAvailableReserves")
    }
    
    // 'value' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableReservesLV.pcf: line 48, column 29
    function sortValue_0 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      var valueVariable : String = (ReserveWrapper.Transaction.Exposure.DisplayName)
return valueVariable
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function sortValue_1 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return ReserveWrapper.Transaction.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at EditableReservesLV.pcf: line 71, column 45
    function sortValue_2 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return ReserveWrapper.Transaction.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on RangeCell (id=CostType_Cell) at EditableReservesLV.pcf: line 81, column 28
    function sortValue_3 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return ReserveWrapper.Transaction.CostType
    }
    
    // 'value' attribute on RangeCell (id=CostCategory_Cell) at EditableReservesLV.pcf: line 95, column 28
    function sortValue_4 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return ReserveWrapper.Transaction.CostCategory
    }
    
    // 'value' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function sortValue_6 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return ReserveWrapper.Transaction.ReservingCurrency
    }
    
    // '$$sumValue' attribute on RowIterator at EditableReservesLV.pcf: line 152, column 28
    function sumValueRoot_19 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return ReserveWrapper
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableReservesLV.pcf: line 122, column 29
    function sumValue_14 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return WizardHelper.getAvailableReservesReservingAmount(ReserveWrapper.Transaction)
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableReservesLV.pcf: line 132, column 29
    function sumValue_15 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return WizardHelper.getGrossTotalIncurredReservingAmount(ReserveWrapper.Transaction)
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableReservesLV.pcf: line 141, column 29
    function sumValue_17 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return WizardHelper.getPendingApprovalReservesReservingAmount(ReserveWrapper.Transaction)
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableReservesLV.pcf: line 152, column 28
    function sumValue_18 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return ReserveWrapper.NewAmountInReservingCurrency
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableReservesLV.pcf: line 175, column 29
    function sumValue_21 (ReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return WizardHelper.getChangeReservingAmount(ReserveWrapper)
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at EditableReservesLV.pcf: line 29, column 51
    function toCreateAndAdd_105 () : entity.TransactionEditWrapper {
      return WizardHelper.addNewTransactionWrapper(Exposure)
    }
    
    // 'toRemove' attribute on RowIterator at EditableReservesLV.pcf: line 29, column 51
    function toRemove_106 (ReserveWrapper :  entity.TransactionEditWrapper) : void {
      WizardHelper.removeTransaction(ReserveWrapper)
    }
    
    // 'value' attribute on RowIterator at EditableReservesLV.pcf: line 29, column 51
    function value_107 () : entity.TransactionEditWrapper[] {
      return WizardHelper.TransactionWrappers
    }
    
    // 'footerLabel' attribute on RowIterator at EditableReservesLV.pcf: line 48, column 29
    function value_11 () : java.lang.Object {
      return WizardHelper.ReservingCurrenciesMatch ? DisplayKey.get("LV.Financials.Total") : null
    }
    
    // 'visible' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableReservesLV.pcf: line 166, column 143
    function visible_10 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode() and not gw.api.system.CCConfigParameters.SetReservesByTotalIncurred.Value
    }
    
    // 'visible' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function visible_7 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    // 'visible' attribute on CurrencyCell (id=TotalIncurred_Cell) at EditableReservesLV.pcf: line 132, column 29
    function visible_8 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.SetReservesByTotalIncurred.Value
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get WizardHelper () : gw.api.financials.ReserveWizardHelper {
      return getRequireValue("WizardHelper", 0) as gw.api.financials.ReserveWizardHelper
    }
    
    property set WizardHelper ($arg :  gw.api.financials.ReserveWizardHelper) {
      setRequireValue("WizardHelper", 0, $arg)
    }
    
    property get addNew () : Boolean {
      return getRequireValue("addNew", 0) as Boolean
    }
    
    property set addNew ($arg :  Boolean) {
      setRequireValue("addNew", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/reserve/EditableReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableReservesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableReservesLV.pcf: line 166, column 143
    function action_92 () : void {
      NewReserveMultiCurrencyPopup.push(WizardHelper, ReserveWrapper)
    }
    
    // 'action' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableReservesLV.pcf: line 166, column 143
    function action_dest_93 () : pcf.api.Destination {
      return pcf.NewReserveMultiCurrencyPopup.createDestination(WizardHelper, ReserveWrapper)
    }
    
    // 'available' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableReservesLV.pcf: line 166, column 143
    function available_91 () : java.lang.Boolean {
      return (not ReserveWrapper.Transaction.Exposure.Closed) and (ReserveWrapper.Transaction.ReservingCurrency == ReserveWrapper.Transaction.Claim.Currency)
    }
    
    // 'condition' attribute on ToolbarFlag at EditableReservesLV.pcf: line 36, column 28
    function condition_24 () : java.lang.Boolean {
      return WizardHelper.isTransactionFullyEditable(ReserveWrapper.Transaction)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableReservesLV.pcf: line 182, column 29
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      ReserveWrapper.Transaction.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableReservesLV.pcf: line 48, column 29
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueVariable = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      ReserveWrapper.Transaction.Exposure = (__VALUE_TO_SET as entity.Exposure)
    }
    
    // 'value' attribute on RangeCell (id=CostType_Cell) at EditableReservesLV.pcf: line 81, column 28
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      ReserveWrapper.Transaction.CostType = (__VALUE_TO_SET as typekey.CostType)
    }
    
    // 'value' attribute on RangeCell (id=CostCategory_Cell) at EditableReservesLV.pcf: line 95, column 28
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      ReserveWrapper.Transaction.CostCategory = (__VALUE_TO_SET as typekey.CostCategory)
    }
    
    // 'value' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      ReserveWrapper.Transaction.ReservingCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'editable' attribute on CurrencyCell (id=NewAmount_Cell) at EditableReservesLV.pcf: line 152, column 28
    function editable_84 () : java.lang.Boolean {
      return not ReserveWrapper.Transaction.Exposure.Closed
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableReservesLV.pcf: line 166, column 143
    function iconLabel_94 () : java.lang.String {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency ? DisplayKey.get("LV.Financials.ReserveSet.Reserves.MultiCurrency.ToolTipWhenExplicitReservingCurrencyEnabled") : DisplayKey.get("LV.Financials.ReserveSet.Reserves.MultiCurrency.ToolTip")
    }
    
    // 'initialValue' attribute on Variable at EditableReservesLV.pcf: line 33, column 24
    function initialValue_23 () : String {
      return ReserveWrapper.Transaction.Exposure.DisplayName
    }
    
    // RowIterator at EditableReservesLV.pcf: line 29, column 51
    function initializeVariables_104 () : void {
        valueVariable = ReserveWrapper.Transaction.Exposure.DisplayName;

    }
    
    // 'label' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function label_66 () : java.lang.Object {
      return DisplayKey.get("LV.Financials.ReserveSet.Reserves.ReservingCurrency")
    }
    
    // 'label' attribute on CurrencyCell (id=NewAmount_Cell) at EditableReservesLV.pcf: line 152, column 28
    function label_85 () : java.lang.Object {
      return gw.api.system.CCConfigParameters.SetReservesByTotalIncurred.Value ? DisplayKey.get("LV.Financials.ReserveSet.Reserves.NewTotalIncurred") : DisplayKey.get("LV.Financials.ReserveSet.Reserves.NewAvailableReserves")
    }
    
    // 'onChange' attribute on PostOnChange at EditableReservesLV.pcf: line 63, column 80
    function onChange_31 () : void {
      WizardHelper.updateWrapperOnChangePost(ReserveWrapper)
    }
    
    // 'onChange' attribute on PostOnChange at EditableReservesLV.pcf: line 83, column 80
    function onChange_44 () : void {
      WizardHelper.updateWrapperOnChangePost(ReserveWrapper)
    }
    
    // 'onChange' attribute on PostOnChange at EditableReservesLV.pcf: line 97, column 80
    function onChange_54 () : void {
      WizardHelper.updateWrapperOnChangePost(ReserveWrapper)
    }
    
    // 'onChange' attribute on PostOnChange at EditableReservesLV.pcf: line 112, column 80
    function onChange_64 () : void {
      WizardHelper.updateWrapperOnChangePost(ReserveWrapper)
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableReservesLV.pcf: line 48, column 29
    function outputConversion_26 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE == null ? DisplayKey.get("Web.Financials.Exposure.ClaimLevel") : VALUE
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function valueRange_36 () : java.lang.Object {
      return WizardHelper.getValidExposures(ReserveWrapper.Transaction)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableReservesLV.pcf: line 81, column 28
    function valueRange_49 () : java.lang.Object {
      return WizardHelper.getValidCostTypes(ReserveWrapper.Transaction)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableReservesLV.pcf: line 95, column 28
    function valueRange_59 () : java.lang.Object {
      return WizardHelper.getValidCostCategories(ReserveWrapper.Transaction)
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function valueRange_70 () : java.lang.Object {
      return WizardHelper.getValidReservingCurrencies(ReserveWrapper.Transaction)
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function valueRoot_35 () : java.lang.Object {
      return ReserveWrapper.Transaction
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at EditableReservesLV.pcf: line 71, column 45
    function valueRoot_42 () : java.lang.Object {
      return ReserveWrapper.Transaction.Exposure
    }
    
    // 'value' attribute on CurrencyCell (id=NewAmount_Cell) at EditableReservesLV.pcf: line 152, column 28
    function valueRoot_87 () : java.lang.Object {
      return ReserveWrapper
    }
    
    // 'value' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableReservesLV.pcf: line 48, column 29
    function value_27 () : java.lang.String {
      return valueVariable
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function value_33 () : entity.Exposure {
      return ReserveWrapper.Transaction.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at EditableReservesLV.pcf: line 71, column 45
    function value_41 () : typekey.CoverageType {
      return ReserveWrapper.Transaction.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on RangeCell (id=CostType_Cell) at EditableReservesLV.pcf: line 81, column 28
    function value_46 () : typekey.CostType {
      return ReserveWrapper.Transaction.CostType
    }
    
    // 'value' attribute on RangeCell (id=CostCategory_Cell) at EditableReservesLV.pcf: line 95, column 28
    function value_56 () : typekey.CostCategory {
      return ReserveWrapper.Transaction.CostCategory
    }
    
    // 'value' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function value_67 () : typekey.Currency {
      return ReserveWrapper.Transaction.ReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=AvailableReserves_Cell) at EditableReservesLV.pcf: line 122, column 29
    function value_77 () : gw.api.financials.IMoney {
      return WizardHelper.getAvailableReservesReservingAmount(ReserveWrapper.Transaction)
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurred_Cell) at EditableReservesLV.pcf: line 132, column 29
    function value_79 () : gw.api.financials.IMoney {
      return WizardHelper.getGrossTotalIncurredReservingAmount(ReserveWrapper.Transaction)
    }
    
    // 'value' attribute on CurrencyCell (id=PendingReserves_Cell) at EditableReservesLV.pcf: line 141, column 29
    function value_82 () : gw.api.financials.IMoney {
      return WizardHelper.getPendingApprovalReservesReservingAmount(ReserveWrapper.Transaction)
    }
    
    // 'value' attribute on CurrencyCell (id=NewAmount_Cell) at EditableReservesLV.pcf: line 152, column 28
    function value_86 () : gw.api.financials.IMutableMoney {
      return ReserveWrapper.NewAmountInReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=ChangeAmount_Cell) at EditableReservesLV.pcf: line 175, column 29
    function value_97 () : gw.api.financials.IMoney {
      return WizardHelper.getChangeReservingAmount(ReserveWrapper)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableReservesLV.pcf: line 182, column 29
    function value_99 () : java.lang.String {
      return ReserveWrapper.Transaction.Comments
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function verifyValueRangeIsAllowedType_37 ($$arg :  entity.Exposure[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function verifyValueRangeIsAllowedType_37 ($$arg :  gw.api.database.IQueryBeanResult<entity.Exposure>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableReservesLV.pcf: line 81, column 28
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableReservesLV.pcf: line 81, column 28
    function verifyValueRangeIsAllowedType_50 ($$arg :  typekey.CostType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableReservesLV.pcf: line 95, column 28
    function verifyValueRangeIsAllowedType_60 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableReservesLV.pcf: line 95, column 28
    function verifyValueRangeIsAllowedType_60 ($$arg :  typekey.CostCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function verifyValueRangeIsAllowedType_71 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function verifyValueRangeIsAllowedType_71 ($$arg :  typekey.Currency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableReservesLV.pcf: line 61, column 28
    function verifyValueRange_38 () : void {
      var __valueRangeArg = WizardHelper.getValidExposures(ReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableReservesLV.pcf: line 81, column 28
    function verifyValueRange_51 () : void {
      var __valueRangeArg = WizardHelper.getValidCostTypes(ReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableReservesLV.pcf: line 95, column 28
    function verifyValueRange_61 () : void {
      var __valueRangeArg = WizardHelper.getValidCostCategories(ReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_60(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function verifyValueRange_72 () : void {
      var __valueRangeArg = WizardHelper.getValidReservingCurrencies(ReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_71(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableReservesLV.pcf: line 110, column 28
    function visible_74 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    // 'visible' attribute on CurrencyCell (id=TotalIncurred_Cell) at EditableReservesLV.pcf: line 132, column 29
    function visible_80 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.SetReservesByTotalIncurred.Value
    }
    
    // 'visible' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableReservesLV.pcf: line 166, column 143
    function visible_96 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode() and not gw.api.system.CCConfigParameters.SetReservesByTotalIncurred.Value
    }
    
    property get ReserveWrapper () : entity.TransactionEditWrapper {
      return getIteratedValue(1) as entity.TransactionEditWrapper
    }
    
    property get valueVariable () : String {
      return getVariableValue("valueVariable", 1) as String
    }
    
    property set valueVariable ($arg :  String) {
      setVariableValue("valueVariable", 1, $arg)
    }
    
    
  }
  
  
}