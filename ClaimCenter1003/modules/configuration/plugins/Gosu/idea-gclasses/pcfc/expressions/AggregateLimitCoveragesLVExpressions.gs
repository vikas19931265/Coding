package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/AggregateLimitCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AggregateLimitCoveragesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/AggregateLimitCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AggregateLimitCoveragesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=CoverageType_Cell) at AggregateLimitCoveragesLV.pcf: line 36, column 44
    function sortValue_0 (CoverageLineLimit :  entity.CoverageLineLimit) : java.lang.Object {
      return new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).CoverageType
    }
    
    // 'value' attribute on RangeCell (id=LOBCoverageSubtype_Cell) at AggregateLimitCoveragesLV.pcf: line 46, column 47
    function sortValue_1 (CoverageLineLimit :  entity.CoverageLineLimit) : java.lang.Object {
      return new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).LOBCoverageSubtype
    }
    
    // 'value' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function sortValue_2 (CoverageLineLimit :  entity.CoverageLineLimit) : java.lang.Object {
      return new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).CoverageLine
    }
    
    // 'value' attribute on CurrencyCell (id=Realized_Cell) at AggregateLimitCoveragesLV.pcf: line 63, column 95
    function sortValue_3 (CoverageLineLimit :  entity.CoverageLineLimit) : java.lang.Object {
      return CoverageLineLimit.LimitUsed
    }
    
    // 'toAdd' attribute on RowIterator at AggregateLimitCoveragesLV.pcf: line 26, column 46
    function toAdd_28 (CoverageLineLimit :  entity.CoverageLineLimit) : void {
      AggregateLimit.addToCoverageLines(CoverageLineLimit);
    }
    
    // 'toRemove' attribute on RowIterator at AggregateLimitCoveragesLV.pcf: line 26, column 46
    function toRemove_29 (CoverageLineLimit :  entity.CoverageLineLimit) : void {
      AggregateLimit.removeFromCoverageLines(CoverageLineLimit)
    }
    
    // 'value' attribute on RowIterator at AggregateLimitCoveragesLV.pcf: line 26, column 46
    function value_30 () : entity.CoverageLineLimit[] {
      return AggregateLimit.CoverageLines
    }
    
    // 'visible' attribute on CurrencyCell (id=Realized_Cell) at AggregateLimitCoveragesLV.pcf: line 63, column 95
    function visible_4 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode or gw.api.print.PrintUtil.isPrintingPDF()
    }
    
    property get AggregateLimit () : AggregateLimit {
      return getRequireValue("AggregateLimit", 0) as AggregateLimit
    }
    
    property set AggregateLimit ($arg :  AggregateLimit) {
      setRequireValue("AggregateLimit", 0, $arg)
    }
    
    property get AggregateLimitHelper () : gw.api.admin.AggregateLimitHelper {
      return getRequireValue("AggregateLimitHelper", 0) as gw.api.admin.AggregateLimitHelper
    }
    
    property set AggregateLimitHelper ($arg :  gw.api.admin.AggregateLimitHelper) {
      setRequireValue("AggregateLimitHelper", 0, $arg)
    }
    
    property get Policy () : Policy {
      return getRequireValue("Policy", 0) as Policy
    }
    
    property set Policy ($arg :  Policy) {
      setRequireValue("Policy", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/AggregateLimitCoveragesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AggregateLimitCoveragesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeCell (id=LOBCoverageSubtype_Cell) at AggregateLimitCoveragesLV.pcf: line 46, column 47
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).LOBCoverageSubtype = (__VALUE_TO_SET as typekey.CoverageSubtype)
    }
    
    // 'value' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).CoverageLine = (__VALUE_TO_SET as entity.CoverageLine)
    }
    
    // 'value' attribute on RangeCell (id=CoverageType_Cell) at AggregateLimitCoveragesLV.pcf: line 36, column 44
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).CoverageType = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'optionLabel' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function optionLabel_19 (VALUE :  entity.CoverageLine) : java.lang.String {
      return VALUE.getCoveredItemString(Policy)
    }
    
    // 'valueRange' attribute on RangeCell (id=LOBCoverageSubtype_Cell) at AggregateLimitCoveragesLV.pcf: line 46, column 47
    function valueRange_13 () : java.lang.Object {
      return AggregateLimitHelper.getFilteredLOBCoverageSubtypeList(CoverageLineLimit.CoverageLine.CoverageType)
    }
    
    // 'valueRange' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function valueRange_20 () : java.lang.Object {
      return AggregateLimitHelper.getFilteredList(AggregateLimit, Policy, CoverageLineLimit.CoverageLine.CoverageType, CoverageLineLimit.CoverageLine.LOBCoverageSubtype)
    }
    
    // 'valueRange' attribute on RangeCell (id=CoverageType_Cell) at AggregateLimitCoveragesLV.pcf: line 36, column 44
    function valueRange_7 () : java.lang.Object {
      return Policy.Claim.getCoverageTypes()
    }
    
    // 'value' attribute on CurrencyCell (id=Realized_Cell) at AggregateLimitCoveragesLV.pcf: line 63, column 95
    function valueRoot_25 () : java.lang.Object {
      return CoverageLineLimit
    }
    
    // 'value' attribute on RangeCell (id=LOBCoverageSubtype_Cell) at AggregateLimitCoveragesLV.pcf: line 46, column 47
    function value_11 () : typekey.CoverageSubtype {
      return new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).LOBCoverageSubtype
    }
    
    // 'value' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function value_17 () : entity.CoverageLine {
      return new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).CoverageLine
    }
    
    // 'value' attribute on CurrencyCell (id=Realized_Cell) at AggregateLimitCoveragesLV.pcf: line 63, column 95
    function value_24 () : gw.api.financials.CurrencyAmount {
      return CoverageLineLimit.LimitUsed
    }
    
    // 'value' attribute on RangeCell (id=CoverageType_Cell) at AggregateLimitCoveragesLV.pcf: line 36, column 44
    function value_5 () : typekey.CoverageType {
      return new util.lvwrapper.CoverageLineLimitLVWrapper(AggregateLimitHelper, CoverageLineLimit).CoverageType
    }
    
    // 'valueRange' attribute on RangeCell (id=LOBCoverageSubtype_Cell) at AggregateLimitCoveragesLV.pcf: line 46, column 47
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=LOBCoverageSubtype_Cell) at AggregateLimitCoveragesLV.pcf: line 46, column 47
    function verifyValueRangeIsAllowedType_14 ($$arg :  typekey.CoverageSubtype[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.CoverageLine[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.CoverageLine>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CoverageType_Cell) at AggregateLimitCoveragesLV.pcf: line 36, column 44
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=CoverageType_Cell) at AggregateLimitCoveragesLV.pcf: line 36, column 44
    function verifyValueRangeIsAllowedType_8 ($$arg :  typekey.CoverageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=LOBCoverageSubtype_Cell) at AggregateLimitCoveragesLV.pcf: line 46, column 47
    function verifyValueRange_15 () : void {
      var __valueRangeArg = AggregateLimitHelper.getFilteredLOBCoverageSubtypeList(CoverageLineLimit.CoverageLine.CoverageType)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=CoveredItem_Cell) at AggregateLimitCoveragesLV.pcf: line 57, column 44
    function verifyValueRange_22 () : void {
      var __valueRangeArg = AggregateLimitHelper.getFilteredList(AggregateLimit, Policy, CoverageLineLimit.CoverageLine.CoverageType, CoverageLineLimit.CoverageLine.LOBCoverageSubtype)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=CoverageType_Cell) at AggregateLimitCoveragesLV.pcf: line 36, column 44
    function verifyValueRange_9 () : void {
      var __valueRangeArg = Policy.Claim.getCoverageTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'visible' attribute on CurrencyCell (id=Realized_Cell) at AggregateLimitCoveragesLV.pcf: line 63, column 95
    function visible_26 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode or gw.api.print.PrintUtil.isPrintingPDF()
    }
    
    property get CoverageLineLimit () : entity.CoverageLineLimit {
      return getIteratedValue(1) as entity.CoverageLineLimit
    }
    
    
  }
  
  
}