package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/EditableTripCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableTripCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableTripCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableTripCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function label_1 () : java.lang.Object {
      return DisplayKey.get("LV.Policy.EditableTripCoverages.Currency")
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTripCoveragesLV.pcf: line 30, column 44
    function sortValue_0 (TripCoverage :  entity.RUCoverage) : java.lang.Object {
      return TripCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function sortValue_2 (TripCoverage :  entity.RUCoverage) : java.lang.Object {
      return TripCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableTripCoveragesLV.pcf: line 50, column 72
    function sortValue_4 (TripCoverage :  entity.RUCoverage) : java.lang.Object {
      return TripCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableTripCoveragesLV.pcf: line 56, column 47
    function sortValue_6 (TripCoverage :  entity.RUCoverage) : java.lang.Object {
      return TripCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableTripCoveragesLV.pcf: line 62, column 47
    function sortValue_7 (TripCoverage :  entity.RUCoverage) : java.lang.Object {
      return TripCoverage.IncidentLimit
    }
    
    // 'value' attribute on TypeKeyCell (id=LimitsIndicator_Cell) at EditableTripCoveragesLV.pcf: line 68, column 48
    function sortValue_8 (TripCoverage :  entity.RUCoverage) : java.lang.Object {
      return TripCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableTripCoveragesLV.pcf: line 73, column 39
    function sortValue_9 (TripCoverage :  entity.RUCoverage) : java.lang.Object {
      return TripCoverage.Notes
    }
    
    // 'toAdd' attribute on RowIterator at EditableTripCoveragesLV.pcf: line 21, column 39
    function toAdd_43 (TripCoverage :  entity.RUCoverage) : void {
      aTripRU.addToCoverages(TripCoverage)
    }
    
    // 'toRemove' attribute on RowIterator at EditableTripCoveragesLV.pcf: line 21, column 39
    function toRemove_44 (TripCoverage :  entity.RUCoverage) : void {
      aTripRU.removeFromCoverages(TripCoverage)
    }
    
    // 'value' attribute on RowIterator at EditableTripCoveragesLV.pcf: line 21, column 39
    function value_45 () : entity.RUCoverage[] {
      return aTripRU.Coverages
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function visible_3 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableTripCoveragesLV.pcf: line 50, column 72
    function visible_5 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(aTripRU)
    }
    
    property get aTripRU () : TripRU {
      return getRequireValue("aTripRU", 0) as TripRU
    }
    
    property set aTripRU ($arg :  TripRU) {
      setRequireValue("aTripRU", 0, $arg)
    }
    
    
    /*
    function getTripRU(selectedRow : Bean) : TripRU
    {
      if(selectedRow typeis TripAccommodation)
          return (selectedRow as TripAccommodation).TripRiskUnit
      if(selectedRow typeis TripSegment)
          return (selectedRow as TripSegment).TripRiskUnit
        return new TripRU()
    }*/
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/EditableTripCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableTripCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTripCoveragesLV.pcf: line 30, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      TripCoverage.Type = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      TripCoverage.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableTripCoveragesLV.pcf: line 56, column 47
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      TripCoverage.ExposureLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableTripCoveragesLV.pcf: line 62, column 47
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      TripCoverage.IncidentLimit = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyCell (id=LimitsIndicator_Cell) at EditableTripCoveragesLV.pcf: line 68, column 48
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      TripCoverage.LimitsIndicator = (__VALUE_TO_SET as typekey.LimitsIndicator)
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableTripCoveragesLV.pcf: line 73, column 39
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      TripCoverage.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function editable_14 () : java.lang.Boolean {
      return TripCoverage.allowCurrencyChange()
    }
    
    // 'label' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function label_15 () : java.lang.Object {
      return DisplayKey.get("LV.Policy.EditableTripCoverages.Currency")
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTripCoveragesLV.pcf: line 30, column 44
    function valueRoot_12 () : java.lang.Object {
      return TripCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=CoverageType_Cell) at EditableTripCoveragesLV.pcf: line 30, column 44
    function value_10 () : typekey.CoverageType {
      return TripCoverage.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function value_16 () : typekey.Currency {
      return TripCoverage.Currency
    }
    
    // 'value' attribute on CurrencyCell (id=Deductible_Cell) at EditableTripCoveragesLV.pcf: line 50, column 72
    function value_23 () : gw.api.financials.CurrencyAmount {
      return TripCoverage.Deductible
    }
    
    // 'value' attribute on CurrencyCell (id=ExposureLimit_Cell) at EditableTripCoveragesLV.pcf: line 56, column 47
    function value_27 () : gw.api.financials.CurrencyAmount {
      return TripCoverage.ExposureLimit
    }
    
    // 'value' attribute on CurrencyCell (id=IncidentLimit_Cell) at EditableTripCoveragesLV.pcf: line 62, column 47
    function value_31 () : gw.api.financials.CurrencyAmount {
      return TripCoverage.IncidentLimit
    }
    
    // 'value' attribute on TypeKeyCell (id=LimitsIndicator_Cell) at EditableTripCoveragesLV.pcf: line 68, column 48
    function value_35 () : typekey.LimitsIndicator {
      return TripCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableTripCoveragesLV.pcf: line 73, column 39
    function value_39 () : java.lang.String {
      return TripCoverage.Notes
    }
    
    // 'visible' attribute on TypeKeyCell (id=Currency_Cell) at EditableTripCoveragesLV.pcf: line 41, column 64
    function visible_20 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on CurrencyCell (id=Deductible_Cell) at EditableTripCoveragesLV.pcf: line 50, column 72
    function visible_25 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(aTripRU)
    }
    
    property get TripCoverage () : entity.RUCoverage {
      return getIteratedValue(1) as entity.RUCoverage
    }
    
    
  }
  
  
}