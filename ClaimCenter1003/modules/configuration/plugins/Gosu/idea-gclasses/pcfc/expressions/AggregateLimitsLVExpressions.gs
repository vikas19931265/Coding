package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/AggregateLimitsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AggregateLimitsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/AggregateLimitsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AggregateLimitsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=PeriodType_Cell) at AggregateLimitsLV.pcf: line 34, column 49
    function sortValue_0 (AggregateLimit :  entity.AggregateLimit) : java.lang.Object {
      return AggregateLimit.PolicyPeriod.PolicyPeriodType
    }
    
    // 'value' attribute on TypeKeyCell (id=ValueType_Cell) at AggregateLimitsLV.pcf: line 39, column 46
    function sortValue_1 (AggregateLimit :  entity.AggregateLimit) : java.lang.Object {
      return AggregateLimit.ValueType
    }
    
    // 'value' attribute on CurrencyCell (id=LimitAmount_Cell) at AggregateLimitsLV.pcf: line 44, column 47
    function sortValue_2 (AggregateLimit :  entity.AggregateLimit) : java.lang.Object {
      return AggregateLimit.LimitAmount
    }
    
    // 'value' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function sortValue_3 (AggregateLimit :  entity.AggregateLimit) : java.lang.Object {
      return AggregateLimit.LimitUsed
    }
    
    // 'value' attribute on CurrencyCell (id=AmountRemaining_Cell) at AggregateLimitsLV.pcf: line 57, column 50
    function sortValue_4 (AggregateLimit :  entity.AggregateLimit) : java.lang.Object {
      return AggregateLimit.LimitRemaining
    }
    
    // 'value' attribute on TypeKeyCell (id=AggLimitCalcCriteria_Cell) at AggregateLimitsLV.pcf: line 62, column 53
    function sortValue_5 (AggregateLimit :  entity.AggregateLimit) : java.lang.Object {
      return AggregateLimit.AggLimitCalcCriteria
    }
    
    // 'value' attribute on TextCell (id=Coverages_Cell) at AggregateLimitsLV.pcf: line 66, column 54
    function sortValue_6 (AggregateLimit :  entity.AggregateLimit) : java.lang.Object {
      return AggregateLimit.getCoverageNames()
    }
    
    // 'value' attribute on RowIterator at AggregateLimitsLV.pcf: line 24, column 43
    function value_36 () : entity.AggregateLimit[] {
      return AggregateLimitList
    }
    
    property get AggregateLimitList () : AggregateLimit[] {
      return getRequireValue("AggregateLimitList", 0) as AggregateLimit[]
    }
    
    property set AggregateLimitList ($arg :  AggregateLimit[]) {
      setRequireValue("AggregateLimitList", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/AggregateLimitsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AggregateLimitsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function action_19 () : void {
      AggregateLimitClaimsWorksheet.goInWorkspace(Claim, AggregateLimit)
    }
    
    // 'action' attribute on TypeKeyCell (id=PeriodType_Cell) at AggregateLimitsLV.pcf: line 34, column 49
    function action_7 () : void {
      ClaimPolicyAggregateLimitDetail.drilldown(Claim, AggregateLimit)
    }
    
    // 'action' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function action_dest_20 () : pcf.api.Destination {
      return pcf.AggregateLimitClaimsWorksheet.createDestination(Claim, AggregateLimit)
    }
    
    // 'action' attribute on TypeKeyCell (id=PeriodType_Cell) at AggregateLimitsLV.pcf: line 34, column 49
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'available' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function available_18 () : java.lang.Boolean {
      return not (AggregateLimit.LimitUsed.Amount.signum() == 0)
    }
    
    // 'fontColor' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function fontColor_21 () : java.lang.Object {
      return AggregateLimit.LimitUsed > AggregateLimit.LimitAmount ? gw.api.web.color.GWColor.THEME_NUMBERS_NEGATIVE : null
    }
    
    // 'value' attribute on TypeKeyCell (id=PeriodType_Cell) at AggregateLimitsLV.pcf: line 34, column 49
    function valueRoot_10 () : java.lang.Object {
      return AggregateLimit.PolicyPeriod
    }
    
    // 'value' attribute on TypeKeyCell (id=ValueType_Cell) at AggregateLimitsLV.pcf: line 39, column 46
    function valueRoot_13 () : java.lang.Object {
      return AggregateLimit
    }
    
    // 'value' attribute on TypeKeyCell (id=ValueType_Cell) at AggregateLimitsLV.pcf: line 39, column 46
    function value_12 () : typekey.AggregateType {
      return AggregateLimit.ValueType
    }
    
    // 'value' attribute on CurrencyCell (id=LimitAmount_Cell) at AggregateLimitsLV.pcf: line 44, column 47
    function value_15 () : gw.api.financials.CurrencyAmount {
      return AggregateLimit.LimitAmount
    }
    
    // 'value' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function value_22 () : gw.api.financials.CurrencyAmount {
      return AggregateLimit.LimitUsed
    }
    
    // 'value' attribute on CurrencyCell (id=AmountRemaining_Cell) at AggregateLimitsLV.pcf: line 57, column 50
    function value_28 () : gw.api.financials.CurrencyAmount {
      return AggregateLimit.LimitRemaining
    }
    
    // 'value' attribute on TypeKeyCell (id=AggLimitCalcCriteria_Cell) at AggregateLimitsLV.pcf: line 62, column 53
    function value_31 () : typekey.AggLimitCalcCriteria {
      return AggregateLimit.AggLimitCalcCriteria
    }
    
    // 'value' attribute on TextCell (id=Coverages_Cell) at AggregateLimitsLV.pcf: line 66, column 54
    function value_34 () : java.lang.String {
      return AggregateLimit.getCoverageNames()
    }
    
    // 'value' attribute on TypeKeyCell (id=PeriodType_Cell) at AggregateLimitsLV.pcf: line 34, column 49
    function value_9 () : typekey.PolicyPeriodType {
      return AggregateLimit.PolicyPeriod.PolicyPeriodType
    }
    
    // 'fontColor' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function verifyFontColorIsAllowedType_24 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function verifyFontColorIsAllowedType_24 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on CurrencyCell (id=AmountUsed_Cell) at AggregateLimitsLV.pcf: line 52, column 45
    function verifyFontColor_25 () : void {
      var __fontColorArg = AggregateLimit.LimitUsed > AggregateLimit.LimitAmount ? gw.api.web.color.GWColor.THEME_NUMBERS_NEGATIVE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_24(__fontColorArg)
    }
    
    property get AggregateLimit () : entity.AggregateLimit {
      return getIteratedValue(1) as entity.AggregateLimit
    }
    
    
  }
  
  
}