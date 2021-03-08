package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/dashboard/CurrentFinancialsByOrgLevelLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentFinancialsByOrgLevelLVExpressions {
  @javax.annotation.Generated("config/web/pcf/dashboard/CurrentFinancialsByOrgLevelLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentFinancialsByOrgLevelLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 42, column 53
    function sortValue_0 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.Group.DisplayName
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_OpenExposures_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 48, column 42
    function sortValue_1 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.OpenExposures
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_OpenClaims_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 54, column 42
    function sortValue_2 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.OpenClaims
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_OpenReserves_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 61, column 45
    function sortValue_3 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.OpenReserves.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_ExpensesPaid_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 68, column 45
    function sortValue_4 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.ExpensesPaid.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_ClaimCostsPaid_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 75, column 45
    function sortValue_5 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.ClaimCostsPaid.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_TotalPaid_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 82, column 45
    function sortValue_6 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.TotalPaid.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_TotalIncurredNet_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 89, column 45
    function sortValue_7 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.TotalIncurredNet.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=AvgIncurred_Claim_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 96, column 45
    function sortValue_8 (DashboardStats :  entity.DashboardStats) : java.lang.Object {
      return DashboardStats.AvgIncurred.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on RowIterator at CurrentFinancialsByOrgLevelLV.pcf: line 36, column 43
    function value_30 () : entity.DashboardStats[] {
      return DashboardStatsList
    }
    
    property get DashboardStatsList () : DashboardStats[] {
      return getRequireValue("DashboardStatsList", 0) as DashboardStats[]
    }
    
    property set DashboardStatsList ($arg :  DashboardStats[]) {
      setRequireValue("DashboardStatsList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/dashboard/CurrentFinancialsByOrgLevelLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentFinancialsByOrgLevelLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 42, column 53
    function valueRoot_10 () : java.lang.Object {
      return DashboardStats.Group
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_OpenExposures_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 48, column 42
    function valueRoot_13 () : java.lang.Object {
      return DashboardStats
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_OpenExposures_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 48, column 42
    function value_12 () : java.lang.Integer {
      return DashboardStats.OpenExposures
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_OpenClaims_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 54, column 42
    function value_15 () : java.lang.Integer {
      return DashboardStats.OpenClaims
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_OpenReserves_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 61, column 45
    function value_18 () : java.math.BigDecimal {
      return DashboardStats.OpenReserves.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_ExpensesPaid_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 68, column 45
    function value_20 () : java.math.BigDecimal {
      return DashboardStats.ExpensesPaid.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_ClaimCostsPaid_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 75, column 45
    function value_22 () : java.math.BigDecimal {
      return DashboardStats.ClaimCostsPaid.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_TotalPaid_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 82, column 45
    function value_24 () : java.math.BigDecimal {
      return DashboardStats.TotalPaid.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=CurrentFinancials_TotalIncurredNet_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 89, column 45
    function value_26 () : java.math.BigDecimal {
      return DashboardStats.TotalIncurredNet.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=AvgIncurred_Claim_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 96, column 45
    function value_28 () : java.math.BigDecimal {
      return DashboardStats.AvgIncurred.divide(1000).setScale(2, gw.api.util.CurrencyUtil.getRoundingMode())
    }
    
    // 'value' attribute on TextCell (id=ByOrgLevel_Cell) at CurrentFinancialsByOrgLevelLV.pcf: line 42, column 53
    function value_9 () : java.lang.String {
      return DashboardStats.Group.DisplayName
    }
    
    property get DashboardStats () : entity.DashboardStats {
      return getIteratedValue(1) as entity.DashboardStats
    }
    
    
  }
  
  
}