package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/ReserveLineInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReserveLineInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/ReserveLineInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReserveLineInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      wrapper.Exposure = (__VALUE_TO_SET as gw.api.financials.ExposureOption)
    }
    
    // 'value' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      wrapper.Matter = (__VALUE_TO_SET as entity.Matter)
    }
    
    // 'value' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      wrapper.ReserveLine = (__VALUE_TO_SET as gw.api.financials.ReserveLineOption)
    }
    
    // 'value' attribute on RangeInput (id=CostType_Input) at ReserveLineInputSet.pcf: line 61, column 48
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      wrapper.CostType = (__VALUE_TO_SET as typekey.CostType)
    }
    
    // 'value' attribute on RangeInput (id=CostCategory_Input) at ReserveLineInputSet.pcf: line 72, column 48
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      wrapper.CostCategory = (__VALUE_TO_SET as typekey.CostCategory)
    }
    
    // 'value' attribute on TypeKeyInput (id=ReservingCurrency_Input) at ReserveLineInputSet.pcf: line 82, column 104
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      wrapper.ReservingCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'editable' attribute on TypeKeyInput (id=ReservingCurrency_Input) at ReserveLineInputSet.pcf: line 82, column 104
    function editable_59 () : java.lang.Boolean {
      return wrapper.ReservingCurrencyEditable
    }
    
    // 'initialValue' attribute on Variable at ReserveLineInputSet.pcf: line 17, column 60
    function initialValue_0 () : gw.api.financials.ReserveLineInputSetWrapper {
      return helper.wrap(transaction)
    }
    
    // 'label' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function label_1 () : java.lang.Object {
      return DisplayKey.get("Web.Financials.ReserveLineInputSet.ReserveLine")
    }
    
    // 'label' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Web.Financials.ReserveLineInputSet.Exposure")
    }
    
    // 'label' attribute on TypeKeyInput (id=Coverage_Input) at ReserveLineInputSet.pcf: line 43, column 41
    function label_21 () : java.lang.Object {
      return DisplayKey.get("Web.Financials.ReserveLineInputSet.Coverage")
    }
    
    // 'label' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function label_27 () : java.lang.Object {
      return DisplayKey.get("Web.Financials.ReserveLineInputSet.Matter")
    }
    
    // 'label' attribute on RangeInput (id=CostType_Input) at ReserveLineInputSet.pcf: line 61, column 48
    function label_38 () : java.lang.Object {
      return DisplayKey.get("Web.Financials.ReserveLineInputSet.CostType")
    }
    
    // 'label' attribute on RangeInput (id=CostCategory_Input) at ReserveLineInputSet.pcf: line 72, column 48
    function label_49 () : java.lang.Object {
      return DisplayKey.get("Web.Financials.ReserveLineInputSet.CostCategory")
    }
    
    // 'label' attribute on TypeKeyInput (id=ReservingCurrency_Input) at ReserveLineInputSet.pcf: line 82, column 104
    function label_61 () : java.lang.Object {
      return DisplayKey.get("Web.Financials.ReserveLineInputSet.ReservingCurrency")
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function valueRange_15 () : java.lang.Object {
      return wrapper.ExposureOptions
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function valueRange_31 () : java.lang.Object {
      return wrapper.MatterOptions
    }
    
    // 'valueRange' attribute on RangeInput (id=CostType_Input) at ReserveLineInputSet.pcf: line 61, column 48
    function valueRange_42 () : java.lang.Object {
      return wrapper.CostTypeOptions
    }
    
    // 'valueRange' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function valueRange_5 () : java.lang.Object {
      return wrapper.ReserveLineOptions
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at ReserveLineInputSet.pcf: line 72, column 48
    function valueRange_53 () : java.lang.Object {
      return wrapper.CostCategoryOptions
    }
    
    // 'value' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function valueRoot_4 () : java.lang.Object {
      return wrapper
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function value_12 () : gw.api.financials.ExposureOption {
      return wrapper.Exposure
    }
    
    // 'value' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function value_2 () : gw.api.financials.ReserveLineOption {
      return wrapper.ReserveLine
    }
    
    // 'value' attribute on TypeKeyInput (id=Coverage_Input) at ReserveLineInputSet.pcf: line 43, column 41
    function value_22 () : typekey.CoverageType {
      return wrapper.Coverage
    }
    
    // 'value' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function value_28 () : entity.Matter {
      return wrapper.Matter
    }
    
    // 'value' attribute on RangeInput (id=CostType_Input) at ReserveLineInputSet.pcf: line 61, column 48
    function value_39 () : typekey.CostType {
      return wrapper.CostType
    }
    
    // 'value' attribute on RangeInput (id=CostCategory_Input) at ReserveLineInputSet.pcf: line 72, column 48
    function value_50 () : typekey.CostCategory {
      return wrapper.CostCategory
    }
    
    // 'value' attribute on TypeKeyInput (id=ReservingCurrency_Input) at ReserveLineInputSet.pcf: line 82, column 104
    function value_62 () : typekey.Currency {
      return wrapper.ReservingCurrency
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.financials.ExposureOption[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function verifyValueRangeIsAllowedType_32 ($$arg :  entity.Matter[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function verifyValueRangeIsAllowedType_32 ($$arg :  gw.api.database.IQueryBeanResult<entity.Matter>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CostType_Input) at ReserveLineInputSet.pcf: line 61, column 48
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CostType_Input) at ReserveLineInputSet.pcf: line 61, column 48
    function verifyValueRangeIsAllowedType_43 ($$arg :  typekey.CostType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at ReserveLineInputSet.pcf: line 72, column 48
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at ReserveLineInputSet.pcf: line 72, column 48
    function verifyValueRangeIsAllowedType_54 ($$arg :  typekey.CostCategory[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.financials.ReserveLineOption[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function verifyValueRange_17 () : void {
      var __valueRangeArg = wrapper.ExposureOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function verifyValueRange_33 () : void {
      var __valueRangeArg = wrapper.MatterOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CostType_Input) at ReserveLineInputSet.pcf: line 61, column 48
    function verifyValueRange_44 () : void {
      var __valueRangeArg = wrapper.CostTypeOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_43(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CostCategory_Input) at ReserveLineInputSet.pcf: line 72, column 48
    function verifyValueRange_55 () : void {
      var __valueRangeArg = wrapper.CostCategoryOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ReserveLine_Input) at ReserveLineInputSet.pcf: line 25, column 55
    function verifyValueRange_7 () : void {
      var __valueRangeArg = wrapper.ReserveLineOptions
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=Exposure_Input) at ReserveLineInputSet.pcf: line 36, column 48
    function visible_10 () : java.lang.Boolean {
      return wrapper.NewReserveLineSelected
    }
    
    // 'visible' attribute on RangeInput (id=Matter_Input) at ReserveLineInputSet.pcf: line 52, column 40
    function visible_26 () : java.lang.Boolean {
      return wrapper.MatterVisible
    }
    
    // 'visible' attribute on TypeKeyInput (id=ReservingCurrency_Input) at ReserveLineInputSet.pcf: line 82, column 104
    function visible_60 () : java.lang.Boolean {
      return wrapper.NewReserveLineSelected and gw.util.CCConfigUtil.AllowExplicitReservingCurrency
    }
    
    property get helper () : gw.api.financials.ReserveLineInputSetHelper {
      return getRequireValue("helper", 0) as gw.api.financials.ReserveLineInputSetHelper
    }
    
    property set helper ($arg :  gw.api.financials.ReserveLineInputSetHelper) {
      setRequireValue("helper", 0, $arg)
    }
    
    property get transaction () : Transaction {
      return getRequireValue("transaction", 0) as Transaction
    }
    
    property set transaction ($arg :  Transaction) {
      setRequireValue("transaction", 0, $arg)
    }
    
    property get wrapper () : gw.api.financials.ReserveLineInputSetWrapper {
      return getVariableValue("wrapper", 0) as gw.api.financials.ReserveLineInputSetWrapper
    }
    
    property set wrapper ($arg :  gw.api.financials.ReserveLineInputSetWrapper) {
      setVariableValue("wrapper", 0, $arg)
    }
    
    
  }
  
  
}