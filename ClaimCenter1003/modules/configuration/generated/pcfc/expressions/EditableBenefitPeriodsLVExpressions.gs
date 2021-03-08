package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/EditableBenefitPeriodsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableBenefitPeriodsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/EditableBenefitPeriodsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableBenefitPeriodsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=BenefitType_Cell) at EditableBenefitPeriodsLV.pcf: line 30, column 53
    function sortValue_0 (BenefitPeriod :  entity.BenefitPeriod) : java.lang.Object {
      return BenefitPeriod.BenefitType
    }
    
    // 'value' attribute on DateCell (id=BenefitsBeginDate_Cell) at EditableBenefitPeriodsLV.pcf: line 37, column 52
    function sortValue_1 (BenefitPeriod :  entity.BenefitPeriod) : java.lang.Object {
      return BenefitPeriod.BenefitsBeginDate
    }
    
    // 'value' attribute on TextCell (id=NumPaymentWeeks_Cell) at EditableBenefitPeriodsLV.pcf: line 43, column 42
    function sortValue_2 (BenefitPeriod :  entity.BenefitPeriod) : java.lang.Object {
      return BenefitPeriod.NumPaymentWeeks
    }
    
    // 'value' attribute on DateCell (id=BenefitsEndDate_Cell) at EditableBenefitPeriodsLV.pcf: line 47, column 50
    function sortValue_3 (BenefitPeriod :  entity.BenefitPeriod) : java.lang.Object {
      return BenefitPeriod.BenefitsEndDate
    }
    
    // 'value' attribute on CurrencyCell (id=MonthlyCompRate_Cell) at EditableBenefitPeriodsLV.pcf: line 52, column 50
    function sortValue_4 (BenefitPeriod :  entity.BenefitPeriod) : java.lang.Object {
      return BenefitPeriod.MonthlyCompRate
    }
    
    // 'value' attribute on CurrencyCell (id=WeeklyCompRate_Cell) at EditableBenefitPeriodsLV.pcf: line 57, column 49
    function sortValue_5 (BenefitPeriod :  entity.BenefitPeriod) : java.lang.Object {
      return BenefitPeriod.WeeklyCompRate
    }
    
    // 'value' attribute on CurrencyCell (id=PostInjryWklyWgs_Cell) at EditableBenefitPeriodsLV.pcf: line 62, column 51
    function sortValue_6 (BenefitPeriod :  entity.BenefitPeriod) : java.lang.Object {
      return BenefitPeriod.PostInjryWklyWgs
    }
    
    // 'toAdd' attribute on RowIterator at EditableBenefitPeriodsLV.pcf: line 22, column 42
    function toAdd_34 (BenefitPeriod :  entity.BenefitPeriod) : void {
      Exposure.addToBenefitPeriods(BenefitPeriod)
    }
    
    // 'toRemove' attribute on RowIterator at EditableBenefitPeriodsLV.pcf: line 22, column 42
    function toRemove_35 (BenefitPeriod :  entity.BenefitPeriod) : void {
      Exposure.removeFromBenefitPeriods(BenefitPeriod)
    }
    
    // 'value' attribute on RowIterator at EditableBenefitPeriodsLV.pcf: line 22, column 42
    function value_36 () : entity.BenefitPeriod[] {
      return Exposure.BenefitPeriods
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/exposures/EditableBenefitPeriodsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableBenefitPeriodsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=BenefitsBeginDate_Cell) at EditableBenefitPeriodsLV.pcf: line 37, column 52
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      BenefitPeriod.BenefitsBeginDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=NumPaymentWeeks_Cell) at EditableBenefitPeriodsLV.pcf: line 43, column 42
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      BenefitPeriod.NumPaymentWeeks = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CurrencyCell (id=MonthlyCompRate_Cell) at EditableBenefitPeriodsLV.pcf: line 52, column 50
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      BenefitPeriod.MonthlyCompRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=WeeklyCompRate_Cell) at EditableBenefitPeriodsLV.pcf: line 57, column 49
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      BenefitPeriod.WeeklyCompRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyCell (id=PostInjryWklyWgs_Cell) at EditableBenefitPeriodsLV.pcf: line 62, column 51
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      BenefitPeriod.PostInjryWklyWgs = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyCell (id=BenefitType_Cell) at EditableBenefitPeriodsLV.pcf: line 30, column 53
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      BenefitPeriod.BenefitType = (__VALUE_TO_SET as typekey.LostWagesBenefitType)
    }
    
    // 'value' attribute on TypeKeyCell (id=BenefitType_Cell) at EditableBenefitPeriodsLV.pcf: line 30, column 53
    function valueRoot_9 () : java.lang.Object {
      return BenefitPeriod
    }
    
    // 'value' attribute on DateCell (id=BenefitsBeginDate_Cell) at EditableBenefitPeriodsLV.pcf: line 37, column 52
    function value_11 () : java.util.Date {
      return BenefitPeriod.BenefitsBeginDate
    }
    
    // 'value' attribute on TextCell (id=NumPaymentWeeks_Cell) at EditableBenefitPeriodsLV.pcf: line 43, column 42
    function value_15 () : java.lang.Integer {
      return BenefitPeriod.NumPaymentWeeks
    }
    
    // 'value' attribute on DateCell (id=BenefitsEndDate_Cell) at EditableBenefitPeriodsLV.pcf: line 47, column 50
    function value_19 () : java.util.Date {
      return BenefitPeriod.BenefitsEndDate
    }
    
    // 'value' attribute on CurrencyCell (id=MonthlyCompRate_Cell) at EditableBenefitPeriodsLV.pcf: line 52, column 50
    function value_22 () : gw.api.financials.CurrencyAmount {
      return BenefitPeriod.MonthlyCompRate
    }
    
    // 'value' attribute on CurrencyCell (id=WeeklyCompRate_Cell) at EditableBenefitPeriodsLV.pcf: line 57, column 49
    function value_26 () : gw.api.financials.CurrencyAmount {
      return BenefitPeriod.WeeklyCompRate
    }
    
    // 'value' attribute on CurrencyCell (id=PostInjryWklyWgs_Cell) at EditableBenefitPeriodsLV.pcf: line 62, column 51
    function value_30 () : gw.api.financials.CurrencyAmount {
      return BenefitPeriod.PostInjryWklyWgs
    }
    
    // 'value' attribute on TypeKeyCell (id=BenefitType_Cell) at EditableBenefitPeriodsLV.pcf: line 30, column 53
    function value_7 () : typekey.LostWagesBenefitType {
      return BenefitPeriod.BenefitType
    }
    
    property get BenefitPeriod () : entity.BenefitPeriod {
      return getIteratedValue(1) as entity.BenefitPeriod
    }
    
    
  }
  
  
}