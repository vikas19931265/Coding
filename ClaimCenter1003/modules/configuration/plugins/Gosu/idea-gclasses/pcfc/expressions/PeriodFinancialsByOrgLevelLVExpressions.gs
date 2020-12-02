package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/dashboard/PeriodFinancialsByOrgLevelLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PeriodFinancialsByOrgLevelLVExpressions {
  @javax.annotation.Generated("config/web/pcf/dashboard/PeriodFinancialsByOrgLevelLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PeriodFinancialsByOrgLevelLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 41, column 53
    function valueRoot_11 () : java.lang.Object {
      return DashboardStats.Group
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ClosedClaims_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 47, column 42
    function valueRoot_14 () : java.lang.Object {
      return DashboardStats
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 41, column 53
    function value_10 () : java.lang.String {
      return DashboardStats.Group.DisplayName
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ClosedClaims_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 47, column 42
    function value_13 () : java.lang.Integer {
      return DashboardStats.ClosedClaims
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ExpensesOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 54, column 45
    function value_16 () : java.math.BigDecimal {
      return DashboardStats.ExpensesOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ClaimCostsOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 61, column 45
    function value_18 () : java.math.BigDecimal {
      return DashboardStats.ClaimCostsOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_PaidOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 68, column 45
    function value_20 () : java.math.BigDecimal {
      return DashboardStats.PaidOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_AvgPaidOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 75, column 45
    function value_22 () : java.math.BigDecimal {
      return DashboardStats.AvgPaidOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ExpensesInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 82, column 45
    function value_24 () : java.math.BigDecimal {
      return DashboardStats.ExpensesInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ClaimCostsInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 89, column 45
    function value_26 () : java.math.BigDecimal {
      return DashboardStats.ClaimCostsInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_PaidInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 96, column 45
    function value_28 () : java.math.BigDecimal {
      return DashboardStats.PaidInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_RecoveredInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 103, column 45
    function value_30 () : java.math.BigDecimal {
      return DashboardStats.RecoveredInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    property get DashboardStats () : entity.DashboardStats {
      return getIteratedValue(1) as entity.DashboardStats
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/dashboard/PeriodFinancialsByOrgLevelLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PeriodFinancialsByOrgLevelLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 41, column 53
    function sortValue_0 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.Group.DisplayName
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ClosedClaims_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 47, column 42
    function sortValue_1 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.ClosedClaims
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ExpensesOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 54, column 45
    function sortValue_2 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.ExpensesOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ClaimCostsOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 61, column 45
    function sortValue_3 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.ClaimCostsOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_PaidOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 68, column 45
    function sortValue_4 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.PaidOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_AvgPaidOnClosed_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 75, column 45
    function sortValue_5 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.AvgPaidOnClosed.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ExpensesInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 82, column 45
    function sortValue_6 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.ExpensesInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_ClaimCostsInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 89, column 45
    function sortValue_7 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.ClaimCostsInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_PaidInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 96, column 45
    function sortValue_8 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.PaidInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=PeriodFinancials_RecoveredInPeriod_Cell) at PeriodFinancialsByOrgLevelLV.pcf: line 103, column 45
    function sortValue_9 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.RecoveredInPeriod.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on RowIterator at PeriodFinancialsByOrgLevelLV.pcf: line 35, column 43
    function value_32 () : entity.DashboardStats[] {
      return DashboardStatsList
    }
    
    property get DashboardStatsList () : DashboardStats[] {
      return getRequireValue("DashboardStatsList", 0) as DashboardStats[]
    }
    
    property set DashboardStatsList ($arg :  DashboardStats[]) {
      setRequireValue("DashboardStatsList", 0, $arg)
    }
    
    
  }
  
  
}