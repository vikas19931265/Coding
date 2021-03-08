package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/wcparms/WCBenefitFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCBenefitFactorsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/wcparms/WCBenefitFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCBenefitFactorsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedFactor_Cell) at WCBenefitFactorsLV.pcf: line 35, column 52
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.DetailedFactor = (__VALUE_TO_SET as typekey.WCBenefitFactorType)
    }
    
    // 'value' attribute on TextCell (id=Units_Cell) at WCBenefitFactorsLV.pcf: line 41, column 45
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.FactorValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=FactorComment_Cell) at WCBenefitFactorsLV.pcf: line 49, column 27
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.FactorComment = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToTTD_Cell) at WCBenefitFactorsLV.pcf: line 54, column 55
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.AppliesToTTD = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToTPD_Cell) at WCBenefitFactorsLV.pcf: line 59, column 55
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.AppliesToTPD = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToPTD_Cell) at WCBenefitFactorsLV.pcf: line 64, column 55
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.AppliesToPTD = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToPPD_Cell) at WCBenefitFactorsLV.pcf: line 69, column 55
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.AppliesToPPD = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=FactorCategory_Cell) at WCBenefitFactorsLV.pcf: line 28, column 56
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      WCBenefitFactorDetail.FactorCategory = (__VALUE_TO_SET as typekey.WCBenefitFactorCategory)
    }
    
    // 'value' attribute on TypeKeyCell (id=FactorCategory_Cell) at WCBenefitFactorsLV.pcf: line 28, column 56
    function valueRoot_10 () : java.lang.Object {
      return WCBenefitFactorDetail
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedFactor_Cell) at WCBenefitFactorsLV.pcf: line 35, column 52
    function value_12 () : typekey.WCBenefitFactorType {
      return WCBenefitFactorDetail.DetailedFactor
    }
    
    // 'value' attribute on TextCell (id=Units_Cell) at WCBenefitFactorsLV.pcf: line 41, column 45
    function value_16 () : java.math.BigDecimal {
      return WCBenefitFactorDetail.FactorValue
    }
    
    // 'value' attribute on TextCell (id=FactorComment_Cell) at WCBenefitFactorsLV.pcf: line 49, column 27
    function value_21 () : java.lang.String {
      return WCBenefitFactorDetail.FactorComment
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToTTD_Cell) at WCBenefitFactorsLV.pcf: line 54, column 55
    function value_25 () : java.lang.Boolean {
      return WCBenefitFactorDetail.AppliesToTTD
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToTPD_Cell) at WCBenefitFactorsLV.pcf: line 59, column 55
    function value_29 () : java.lang.Boolean {
      return WCBenefitFactorDetail.AppliesToTPD
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToPTD_Cell) at WCBenefitFactorsLV.pcf: line 64, column 55
    function value_33 () : java.lang.Boolean {
      return WCBenefitFactorDetail.AppliesToPTD
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToPPD_Cell) at WCBenefitFactorsLV.pcf: line 69, column 55
    function value_37 () : java.lang.Boolean {
      return WCBenefitFactorDetail.AppliesToPPD
    }
    
    // 'value' attribute on TypeKeyCell (id=FactorCategory_Cell) at WCBenefitFactorsLV.pcf: line 28, column 56
    function value_8 () : typekey.WCBenefitFactorCategory {
      return WCBenefitFactorDetail.FactorCategory
    }
    
    // 'valueVisible' attribute on TextCell (id=FactorComment_Cell) at WCBenefitFactorsLV.pcf: line 49, column 27
    function visible_20 () : java.lang.Boolean {
      return WCBenefitFactorDetail.DetailedFactor == TC_OTHER 
    }
    
    property get WCBenefitFactorDetail () : entity.WCBenefitFactorDetail {
      return getIteratedValue(1) as entity.WCBenefitFactorDetail
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/wcparms/WCBenefitFactorsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCBenefitFactorsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=FactorCategory_Cell) at WCBenefitFactorsLV.pcf: line 28, column 56
    function sortValue_0 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.FactorCategory
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedFactor_Cell) at WCBenefitFactorsLV.pcf: line 35, column 52
    function sortValue_1 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.DetailedFactor
    }
    
    // 'value' attribute on TextCell (id=Units_Cell) at WCBenefitFactorsLV.pcf: line 41, column 45
    function sortValue_2 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.FactorValue
    }
    
    // 'value' attribute on TextCell (id=FactorComment_Cell) at WCBenefitFactorsLV.pcf: line 49, column 27
    function sortValue_3 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.FactorComment
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToTTD_Cell) at WCBenefitFactorsLV.pcf: line 54, column 55
    function sortValue_4 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.AppliesToTTD
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToTPD_Cell) at WCBenefitFactorsLV.pcf: line 59, column 55
    function sortValue_5 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.AppliesToTPD
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToPTD_Cell) at WCBenefitFactorsLV.pcf: line 64, column 55
    function sortValue_6 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.AppliesToPTD
    }
    
    // 'value' attribute on CheckBoxCell (id=AppliesToPPD_Cell) at WCBenefitFactorsLV.pcf: line 69, column 55
    function sortValue_7 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : java.lang.Object {
      return WCBenefitFactorDetail.AppliesToPPD
    }
    
    // 'toAdd' attribute on RowIterator (id=WCBenefitFactor) at WCBenefitFactorsLV.pcf: line 21, column 50
    function toAdd_41 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : void {
      WCBenefitParameterSet.addToWCBenefitFactors(WCBenefitFactorDetail )
    }
    
    // 'toRemove' attribute on RowIterator (id=WCBenefitFactor) at WCBenefitFactorsLV.pcf: line 21, column 50
    function toRemove_42 (WCBenefitFactorDetail :  entity.WCBenefitFactorDetail) : void {
      WCBenefitParameterSet.removeFromWCBenefitFactors( WCBenefitFactorDetail )
    }
    
    // 'value' attribute on RowIterator (id=WCBenefitFactor) at WCBenefitFactorsLV.pcf: line 21, column 50
    function value_43 () : entity.WCBenefitFactorDetail[] {
      return WCBenefitParameterSet.WCBenefitFactors
    }
    
    property get WCBenefitParameterSet () : WCBenefitParameterSet {
      return getRequireValue("WCBenefitParameterSet", 0) as WCBenefitParameterSet
    }
    
    property set WCBenefitParameterSet ($arg :  WCBenefitParameterSet) {
      setRequireValue("WCBenefitParameterSet", 0, $arg)
    }
    
    
  }
  
  
}