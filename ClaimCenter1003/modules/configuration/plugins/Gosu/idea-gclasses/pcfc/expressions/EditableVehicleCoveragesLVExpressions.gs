package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/EditableVehicleCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableVehicleCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableVehicleCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableVehicleCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableVehicleCoveragesLV.pcf: line 33, column 44
    function sortValue_0 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableVehicleCoveragesLV.pcf: line 45, column 64
    function sortValue_1 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=ClaimAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 87, column 50
    function sortValue_10 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.ClaimAggLimit
    }
    
    // 'value' attribute on TypeKeyCell (id=LimitsIndicator_Cell) at EditableVehicleCoveragesLV.pcf: line 93, column 48
    function sortValue_11 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableVehicleCoveragesLV.pcf: line 98, column 42
    function sortValue_12 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.Notes
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableVehicleCoveragesLV.pcf: line 53, column 74
    function sortValue_3 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 58, column 50
    function sortValue_5 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 63, column 50
    function sortValue_6 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.IncidentLimit
    }
    
    // 'value' attribute on CurrencyCell (id=NonmedAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 69, column 51
    function sortValue_7 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.NonmedAggLimit
    }
    
    // 'value' attribute on CurrencyCell (id=ReplaceAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 75, column 52
    function sortValue_8 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.ReplaceAggLimit
    }
    
    // 'value' attribute on CurrencyCell (id=PersonAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 81, column 51
    function sortValue_9 (VehicleCoverage :  entity.VehicleCoverage) : java.lang.Object {
      return VehicleCoverage.PersonAggLimit
    }
    
    // 'toAdd' attribute on RowIterator at EditableVehicleCoveragesLV.pcf: line 24, column 44
    function toAdd_70 (VehicleCoverage :  entity.VehicleCoverage) : void {
      VehicleRU.addToCoverages(VehicleCoverage)
    }
    
    // 'toRemove' attribute on RowIterator at EditableVehicleCoveragesLV.pcf: line 24, column 44
    function toRemove_71 (VehicleCoverage :  entity.VehicleCoverage) : void {
      VehicleRU.removeFromCoverages(VehicleCoverage)
    }
    
    // 'value' attribute on RowIterator at EditableVehicleCoveragesLV.pcf: line 24, column 44
    function value_72 () : entity.VehicleCoverage[] {
      return VehicleRU.Coverages.cast(VehicleCoverage)
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableVehicleCoveragesLV.pcf: line 45, column 64
    function visible_2 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableVehicleCoveragesLV.pcf: line 53, column 74
    function visible_4 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(VehicleRU)
    }
    
    property get Vehicle () : Vehicle {
      return getRequireValue("Vehicle", 0) as Vehicle
    }
    
    property set Vehicle ($arg :  Vehicle) {
      setRequireValue("Vehicle", 0, $arg)
    }
    
    property get VehicleRU () : VehicleRU {
      return getRequireValue("VehicleRU", 0) as VehicleRU
    }
    
    property set VehicleRU ($arg :  VehicleRU) {
      setRequireValue("VehicleRU", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableVehicleCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableVehicleCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on CurrencyCell (id=NonmedAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 69, column 51
    function available_38 () : java.lang.Boolean {
      return VehicleRU.Policy.isPIPCoverageType(VehicleCoverage.Type)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableVehicleCoveragesLV.pcf: line 33, column 44
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.Type = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableVehicleCoveragesLV.pcf: line 45, column 64
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 58, column 50
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.ExposureLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 63, column 50
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.IncidentLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=NonmedAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 69, column 51
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.NonmedAggLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=ReplaceAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 75, column 52
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.ReplaceAggLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=PersonAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 81, column 51
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.PersonAggLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=ClaimAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 87, column 50
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.ClaimAggLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyCell (id=LimitsIndicator_Cell) at EditableVehicleCoveragesLV.pcf: line 93, column 48
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.LimitsIndicator = (__VALUE_TO_SET as typekey.LimitsIndicator)
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableVehicleCoveragesLV.pcf: line 98, column 42
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleCoverage.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Currency_Cell) at EditableVehicleCoveragesLV.pcf: line 45, column 64
    function editable_17 () : java.lang.Boolean {
      return VehicleCoverage.allowCurrencyChange()
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=Currency_Cell) at EditableVehicleCoveragesLV.pcf: line 45, column 64
    function validationExpression_18 () : java.lang.Object {
      return util.PolicyUI.handleCoverageCurrencyUpdate(VehicleCoverage)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableVehicleCoveragesLV.pcf: line 33, column 44
    function valueRoot_15 () : java.lang.Object {
      return VehicleCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableVehicleCoveragesLV.pcf: line 33, column 44
    function value_13 () : typekey.CoverageType {
      return VehicleCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableVehicleCoveragesLV.pcf: line 45, column 64
    function value_19 () : typekey.Currency {
      return VehicleCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableVehicleCoveragesLV.pcf: line 53, column 74
    function value_26 () : gw.api.financials.CurrencyAmount {
      return VehicleCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 58, column 50
    function value_30 () : gw.api.financials.CurrencyAmount {
      return VehicleCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 63, column 50
    function value_34 () : gw.api.financials.CurrencyAmount {
      return VehicleCoverage.IncidentLimit
    }
    
    // 'value' attribute on CurrencyCell (id=NonmedAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 69, column 51
    function value_39 () : gw.api.financials.CurrencyAmount {
      return VehicleCoverage.NonmedAggLimit
    }
    
    // 'value' attribute on CurrencyCell (id=ReplaceAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 75, column 52
    function value_45 () : gw.api.financials.CurrencyAmount {
      return VehicleCoverage.ReplaceAggLimit
    }
    
    // 'value' attribute on CurrencyCell (id=PersonAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 81, column 51
    function value_51 () : gw.api.financials.CurrencyAmount {
      return VehicleCoverage.PersonAggLimit
    }
    
    // 'value' attribute on CurrencyCell (id=ClaimAggLimit_Cell) at EditableVehicleCoveragesLV.pcf: line 87, column 50
    function value_57 () : gw.api.financials.CurrencyAmount {
      return VehicleCoverage.ClaimAggLimit
    }
    
    // 'value' attribute on TypeKeyCell (id=LimitsIndicator_Cell) at EditableVehicleCoveragesLV.pcf: line 93, column 48
    function value_62 () : typekey.LimitsIndicator {
      return VehicleCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableVehicleCoveragesLV.pcf: line 98, column 42
    function value_66 () : java.lang.String {
      return VehicleCoverage.Notes
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableVehicleCoveragesLV.pcf: line 45, column 64
    function visible_24 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableVehicleCoveragesLV.pcf: line 53, column 74
    function visible_28 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(VehicleRU)
    }
    
    property get VehicleCoverage () : entity.VehicleCoverage {
      return getIteratedValue(1) as entity.VehicleCoverage
    }
    
    
  }
  
  
}