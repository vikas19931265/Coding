package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/recoveryreserve/EditableRecoveryReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableRecoveryReservesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/recoveryreserve/EditableRecoveryReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableRecoveryReservesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableRecoveryReservesLV.pcf: line 41, column 29
    function sortValue_0 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      var valueVariable : String = (RecoveryReserveWrapper.Transaction.Exposure.DisplayName)
return valueVariable
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function sortValue_1 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return RecoveryReserveWrapper.Transaction.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at EditableRecoveryReservesLV.pcf: line 64, column 45
    function sortValue_2 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return RecoveryReserveWrapper.Transaction.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on RangeCell (id=CostType_Cell) at EditableRecoveryReservesLV.pcf: line 73, column 40
    function sortValue_3 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return RecoveryReserveWrapper.Transaction.CostType
    }
    
    // 'value' attribute on RangeCell (id=CostCategory_Cell) at EditableRecoveryReservesLV.pcf: line 86, column 44
    function sortValue_4 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return RecoveryReserveWrapper.Transaction.CostCategory
    }
    
    // 'value' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function sortValue_5 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return (RecoveryReserveWrapper.Transaction as RecoveryReserve).RecoveryCategory
    }
    
    // 'value' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function sortValue_6 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return RecoveryReserveWrapper.Transaction.ReservingCurrency
    }
    
    // '$$sumValue' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 135, column 28
    function sumValueRoot_14 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return RecoveryReserveWrapper
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 124, column 29
    function sumValue_12 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return WizardHelper.getOpenRecoveryReservesReservingAmount(RecoveryReserveWrapper.Transaction)
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 135, column 28
    function sumValue_13 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return RecoveryReserveWrapper.NewAmountInReservingCurrency
    }
    
    // 'footerSumValue' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 157, column 49
    function sumValue_16 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : java.lang.Object {
      return WizardHelper.getChangeReservingAmount(RecoveryReserveWrapper)
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 22, column 51
    function toCreateAndAdd_99 () : entity.TransactionEditWrapper {
      return WizardHelper.addNewTransactionWrapper()
    }
    
    // 'toRemove' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 22, column 51
    function toRemove_100 (RecoveryReserveWrapper :  entity.TransactionEditWrapper) : void {
      WizardHelper.removeTransaction(RecoveryReserveWrapper)
    }
    
    // 'value' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 22, column 51
    function value_101 () : entity.TransactionEditWrapper[] {
      return WizardHelper.TransactionWrappers
    }
    
    // 'footerLabel' attribute on RowIterator at EditableRecoveryReservesLV.pcf: line 41, column 29
    function value_9 () : java.lang.Object {
      return WizardHelper.ReservingCurrenciesMatch ? DisplayKey.get("LV.Financials.Total") : null
    }
    
    // 'visible' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function visible_7 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    // 'visible' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableRecoveryReservesLV.pcf: line 149, column 69
    function visible_8 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get WizardHelper () : gw.api.financials.RecoveryReserveWizardHelper {
      return getRequireValue("WizardHelper", 0) as gw.api.financials.RecoveryReserveWizardHelper
    }
    
    property set WizardHelper ($arg :  gw.api.financials.RecoveryReserveWizardHelper) {
      setRequireValue("WizardHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/recoveryreserve/EditableRecoveryReservesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableRecoveryReservesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableRecoveryReservesLV.pcf: line 149, column 69
    function action_86 () : void {
      NewRecoveryReserveMultiCurrencyPopup.push(WizardHelper, RecoveryReserveWrapper)
    }
    
    // 'action' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableRecoveryReservesLV.pcf: line 149, column 69
    function action_dest_87 () : pcf.api.Destination {
      return pcf.NewRecoveryReserveMultiCurrencyPopup.createDestination(WizardHelper, RecoveryReserveWrapper)
    }
    
    // 'available' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableRecoveryReservesLV.pcf: line 149, column 69
    function available_85 () : java.lang.Boolean {
      return RecoveryReserveWrapper.Transaction.ReservingCurrency == RecoveryReserveWrapper.Transaction.Claim.Currency
    }
    
    // 'condition' attribute on ToolbarFlag at EditableRecoveryReservesLV.pcf: line 29, column 28
    function condition_18 () : java.lang.Boolean {
      return WizardHelper.isTransactionFullyEditable(RecoveryReserveWrapper.Transaction)
    }
    
    // 'value' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableRecoveryReservesLV.pcf: line 41, column 29
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      valueVariable = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoveryReserveWrapper.Transaction.Exposure = (__VALUE_TO_SET as entity.Exposure)
    }
    
    // 'value' attribute on RangeCell (id=CostType_Cell) at EditableRecoveryReservesLV.pcf: line 73, column 40
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoveryReserveWrapper.Transaction.CostType = (__VALUE_TO_SET as typekey.CostType)
    }
    
    // 'value' attribute on RangeCell (id=CostCategory_Cell) at EditableRecoveryReservesLV.pcf: line 86, column 44
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoveryReserveWrapper.Transaction.CostCategory = (__VALUE_TO_SET as typekey.CostCategory)
    }
    
    // 'value' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      (RecoveryReserveWrapper.Transaction as RecoveryReserve).RecoveryCategory = (__VALUE_TO_SET as typekey.RecoveryCategory)
    }
    
    // 'value' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoveryReserveWrapper.Transaction.ReservingCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableRecoveryReservesLV.pcf: line 164, column 29
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      RecoveryReserveWrapper.Transaction.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableRecoveryReservesLV.pcf: line 149, column 69
    function iconLabel_88 () : java.lang.String {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency ? DisplayKey.get("LV.Financials.RecoveryReserveSet.RecoveryReserves.MultiCurrency.ToolTipWhenExplicitReservingCurrencyEnabled") : DisplayKey.get("LV.Financials.RecoveryReserveSet.RecoveryReserves.MultiCurrency.ToolTip")
    }
    
    // 'initialValue' attribute on Variable at EditableRecoveryReservesLV.pcf: line 26, column 24
    function initialValue_17 () : String {
      return RecoveryReserveWrapper.Transaction.Exposure.DisplayName
    }
    
    // RowIterator at EditableRecoveryReservesLV.pcf: line 22, column 51
    function initializeVariables_98 () : void {
        valueVariable = RecoveryReserveWrapper.Transaction.Exposure.DisplayName;

    }
    
    // 'onChange' attribute on PostOnChange at EditableRecoveryReservesLV.pcf: line 57, column 88
    function onChange_25 () : void {
      WizardHelper.updateWrapperOnChangePost(RecoveryReserveWrapper)
    }
    
    // 'onChange' attribute on PostOnChange at EditableRecoveryReservesLV.pcf: line 75, column 88
    function onChange_39 () : void {
      WizardHelper.updateWrapperOnChangePost(RecoveryReserveWrapper)
    }
    
    // 'onChange' attribute on PostOnChange at EditableRecoveryReservesLV.pcf: line 88, column 88
    function onChange_49 () : void {
      WizardHelper.updateWrapperOnChangePost(RecoveryReserveWrapper)
    }
    
    // 'onChange' attribute on PostOnChange at EditableRecoveryReservesLV.pcf: line 100, column 88
    function onChange_59 () : void {
      WizardHelper.updateWrapperOnChangePost(RecoveryReserveWrapper)
    }
    
    // 'onChange' attribute on PostOnChange at EditableRecoveryReservesLV.pcf: line 114, column 88
    function onChange_69 () : void {
      WizardHelper.updateWrapperOnChangePost(RecoveryReserveWrapper)
    }
    
    // 'optionLabel' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function optionLabel_30 (VALUE :  entity.Exposure) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableRecoveryReservesLV.pcf: line 41, column 29
    function outputConversion_20 (VALUE :  java.lang.String) : java.lang.String {
      return VALUE == null ? DisplayKey.get("Web.Financials.Exposure.ClaimLevel") : VALUE
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function valueRange_31 () : java.lang.Object {
      return WizardHelper.getValidExposures(RecoveryReserveWrapper.Transaction)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableRecoveryReservesLV.pcf: line 73, column 40
    function valueRange_44 () : java.lang.Object {
      return WizardHelper.getValidCostTypes(RecoveryReserveWrapper.Transaction)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableRecoveryReservesLV.pcf: line 86, column 44
    function valueRange_54 () : java.lang.Object {
      return WizardHelper.getValidCostCategories(RecoveryReserveWrapper.Transaction)
    }
    
    // 'valueRange' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function valueRange_64 () : java.lang.Object {
      return WizardHelper.getValidRecoveryCategories(RecoveryReserveWrapper.Transaction)
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function valueRange_74 () : java.lang.Object {
      return WizardHelper.getValidReservingCurrencies(RecoveryReserveWrapper.Transaction)
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function valueRoot_29 () : java.lang.Object {
      return RecoveryReserveWrapper.Transaction
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at EditableRecoveryReservesLV.pcf: line 64, column 45
    function valueRoot_37 () : java.lang.Object {
      return RecoveryReserveWrapper.Transaction.Exposure
    }
    
    // 'value' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function valueRoot_63 () : java.lang.Object {
      return (RecoveryReserveWrapper.Transaction as RecoveryReserve)
    }
    
    // 'value' attribute on CurrencyCell (id=NewOpenRecoveryReserves_Cell) at EditableRecoveryReservesLV.pcf: line 135, column 28
    function valueRoot_83 () : java.lang.Object {
      return RecoveryReserveWrapper
    }
    
    // 'value' attribute on TextCell (id=Exposure_Readonly_Cell) at EditableRecoveryReservesLV.pcf: line 41, column 29
    function value_21 () : java.lang.String {
      return valueVariable
    }
    
    // 'value' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function value_27 () : entity.Exposure {
      return RecoveryReserveWrapper.Transaction.Exposure
    }
    
    // 'value' attribute on TypeKeyCell (id=Coverage_Cell) at EditableRecoveryReservesLV.pcf: line 64, column 45
    function value_36 () : typekey.CoverageType {
      return RecoveryReserveWrapper.Transaction.Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on RangeCell (id=CostType_Cell) at EditableRecoveryReservesLV.pcf: line 73, column 40
    function value_41 () : typekey.CostType {
      return RecoveryReserveWrapper.Transaction.CostType
    }
    
    // 'value' attribute on RangeCell (id=CostCategory_Cell) at EditableRecoveryReservesLV.pcf: line 86, column 44
    function value_51 () : typekey.CostCategory {
      return RecoveryReserveWrapper.Transaction.CostCategory
    }
    
    // 'value' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function value_61 () : typekey.RecoveryCategory {
      return (RecoveryReserveWrapper.Transaction as RecoveryReserve).RecoveryCategory
    }
    
    // 'value' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function value_71 () : typekey.Currency {
      return RecoveryReserveWrapper.Transaction.ReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=OpenRecoveryReserves_Cell) at EditableRecoveryReservesLV.pcf: line 124, column 29
    function value_80 () : gw.api.financials.IMoney {
      return WizardHelper.getOpenRecoveryReservesReservingAmount(RecoveryReserveWrapper.Transaction)
    }
    
    // 'value' attribute on CurrencyCell (id=NewOpenRecoveryReserves_Cell) at EditableRecoveryReservesLV.pcf: line 135, column 28
    function value_82 () : gw.api.financials.IMutableMoney {
      return RecoveryReserveWrapper.NewAmountInReservingCurrency
    }
    
    // 'value' attribute on CurrencyCell (id=ChangeAmount_Cell) at EditableRecoveryReservesLV.pcf: line 157, column 49
    function value_91 () : gw.api.financials.IMoney {
      return WizardHelper.getChangeReservingAmount(RecoveryReserveWrapper)
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at EditableRecoveryReservesLV.pcf: line 164, column 29
    function value_93 () : java.lang.String {
      return RecoveryReserveWrapper.Transaction.Comments
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function verifyValueRangeIsAllowedType_32 ($$arg :  entity.Exposure[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.database.IQueryBeanResult<entity.Exposure>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableRecoveryReservesLV.pcf: line 73, column 40
    function verifyValueRangeIsAllowedType_45 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableRecoveryReservesLV.pcf: line 73, column 40
    function verifyValueRangeIsAllowedType_45 ($$arg :  typekey.CostType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableRecoveryReservesLV.pcf: line 86, column 44
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableRecoveryReservesLV.pcf: line 86, column 44
    function verifyValueRangeIsAllowedType_55 ($$arg :  typekey.CostCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function verifyValueRangeIsAllowedType_65 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function verifyValueRangeIsAllowedType_65 ($$arg :  typekey.RecoveryCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function verifyValueRangeIsAllowedType_75 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function verifyValueRangeIsAllowedType_75 ($$arg :  typekey.Currency[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=Exposure_Cell) at EditableRecoveryReservesLV.pcf: line 55, column 39
    function verifyValueRange_33 () : void {
      var __valueRangeArg = WizardHelper.getValidExposures(RecoveryReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostType_Cell) at EditableRecoveryReservesLV.pcf: line 73, column 40
    function verifyValueRange_46 () : void {
      var __valueRangeArg = WizardHelper.getValidCostTypes(RecoveryReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_45(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=CostCategory_Cell) at EditableRecoveryReservesLV.pcf: line 86, column 44
    function verifyValueRange_56 () : void {
      var __valueRangeArg = WizardHelper.getValidCostCategories(RecoveryReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=RecoveryCategory_Cell) at EditableRecoveryReservesLV.pcf: line 98, column 28
    function verifyValueRange_66 () : void {
      var __valueRangeArg = WizardHelper.getValidRecoveryCategories(RecoveryReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_65(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function verifyValueRange_76 () : void {
      var __valueRangeArg = WizardHelper.getValidReservingCurrencies(RecoveryReserveWrapper.Transaction)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_75(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeCell (id=ReservingCurrency_Cell) at EditableRecoveryReservesLV.pcf: line 112, column 73
    function visible_78 () : java.lang.Boolean {
      return gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    // 'visible' attribute on BooleanRadioCell (id=MultiCurrencyPopup_link_Cell) at EditableRecoveryReservesLV.pcf: line 149, column 69
    function visible_90 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get RecoveryReserveWrapper () : entity.TransactionEditWrapper {
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