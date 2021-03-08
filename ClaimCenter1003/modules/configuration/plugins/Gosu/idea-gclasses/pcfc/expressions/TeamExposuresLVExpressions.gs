package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/exposures/TeamExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamExposuresLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/exposures/TeamExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamExposuresLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Exposures_CaseID_Cell) at TeamExposuresLV.pcf: line 60, column 25
    function action_21 () : void {
      pcf.Claim.go(ExposureTeamView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at TeamExposuresLV.pcf: line 66, column 42
    function action_26 () : void {
      ExposureDetailForward.go(ExposureTeamView.ExposureClaim, ExposureTeamView.Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at TeamExposuresLV.pcf: line 73, column 25
    function action_31 () : void {
      ExposureDetailForward.go(ExposureTeamView.ExposureClaim, ExposureTeamView.Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claims_Claimant_Cell) at TeamExposuresLV.pcf: line 86, column 25
    function action_39 () : void {
      ClaimContactDetailPopup.push(ExposureTeamView.Claimant, ExposureTeamView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Exposures_CaseID_Cell) at TeamExposuresLV.pcf: line 60, column 25
    function action_dest_22 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ExposureTeamView.ExposureClaim)
    }
    
    // 'action' attribute on TextCell (id=Exposures_Order_Cell) at TeamExposuresLV.pcf: line 66, column 42
    function action_dest_27 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(ExposureTeamView.ExposureClaim, ExposureTeamView.Exposure)
    }
    
    // 'action' attribute on TypeKeyCell (id=Exposures_Type_Cell) at TeamExposuresLV.pcf: line 73, column 25
    function action_dest_32 () : pcf.api.Destination {
      return pcf.ExposureDetailForward.createDestination(ExposureTeamView.ExposureClaim, ExposureTeamView.Exposure)
    }
    
    // 'action' attribute on TextCell (id=Claims_Claimant_Cell) at TeamExposuresLV.pcf: line 86, column 25
    function action_dest_40 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ExposureTeamView.Claimant, ExposureTeamView.ExposureClaim)
    }
    
    // 'value' attribute on TextCell (id=Exposures_CaseID_Cell) at TeamExposuresLV.pcf: line 60, column 25
    function valueRoot_24 () : java.lang.Object {
      return ExposureTeamView
    }
    
    // 'value' attribute on TextCell (id=Exposures_CaseID_Cell) at TeamExposuresLV.pcf: line 60, column 25
    function value_23 () : java.lang.String {
      return ExposureTeamView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at TeamExposuresLV.pcf: line 66, column 42
    function value_28 () : java.lang.Integer {
      return ExposureTeamView.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at TeamExposuresLV.pcf: line 73, column 25
    function value_33 () : typekey.ExposureType {
      return ExposureTeamView.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at TeamExposuresLV.pcf: line 79, column 45
    function value_36 () : typekey.CoverageType {
      return ExposureTeamView.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Claims_Claimant_Cell) at TeamExposuresLV.pcf: line 86, column 25
    function value_41 () : java.lang.String {
      return ExposureTeamView.ClaimantName
    }
    
    // 'value' attribute on TextCell (id=Exposures_Assignee_Cell) at TeamExposuresLV.pcf: line 92, column 25
    function value_44 () : java.lang.String {
      return ExposureTeamView.AssigneeDisplayString
    }
    
    // 'value' attribute on TextCell (id=Exposures_WorkloadWeight_Cell) at TeamExposuresLV.pcf: line 98, column 111
    function value_47 () : java.lang.Integer {
      return ExposureTeamView.WorkloadWeight
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at TeamExposuresLV.pcf: line 104, column 61
    function value_51 () : gw.api.financials.CurrencyAmount {
      return ExposureTeamView.TotalIncurredNet
    }
    
    // 'visible' attribute on TextCell (id=Exposures_WorkloadWeight_Cell) at TeamExposuresLV.pcf: line 98, column 111
    function visible_49 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at TeamExposuresLV.pcf: line 104, column 61
    function visible_53 () : java.lang.Boolean {
      return perm.Claim.genericviewnettotalincurred
    }
    
    property get ExposureTeamView () : entity.ExposureTeamView {
      return getIteratedValue(1) as entity.ExposureTeamView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/exposures/TeamExposuresLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamExposuresLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'cacheKey' attribute on ToolbarFilter at TeamExposuresLV.pcf: line 32, column 36
    function cacheKey_9 () : java.lang.String {
      return FilterSet.CacheKey
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 36, column 33
    function filter_0 () : gw.api.filters.IFilter {
      return FilterSet.OpenOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 39, column 81
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 43, column 52
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.getClosedLastNDaysOwnedFilter(90)
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 47, column 54
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.OpenRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 51, column 54
    function filter_7 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewRelatedFilter
    }
    
    // 'label' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 43, column 52
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Exposures.ClosedLastNDays", 90)
    }
    
    // 'value' attribute on TextCell (id=Exposures_CaseID_Cell) at TeamExposuresLV.pcf: line 60, column 25
    function sortValue_10 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Exposures_Order_Cell) at TeamExposuresLV.pcf: line 66, column 42
    function sortValue_11 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.ClaimOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Type_Cell) at TeamExposuresLV.pcf: line 73, column 25
    function sortValue_12 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.ExposureType
    }
    
    // 'value' attribute on TypeKeyCell (id=Exposures_Coverage_Cell) at TeamExposuresLV.pcf: line 79, column 45
    function sortValue_13 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.PrimaryCoverage
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_Assignee_Cell) at TeamExposuresLV.pcf: line 92, column 25
    function sortValue_14 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_Assignee_Cell) at TeamExposuresLV.pcf: line 92, column 25
    function sortValue_15 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Exposures_Assignee_Cell) at TeamExposuresLV.pcf: line 92, column 25
    function sortValue_16 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.AssignedQueue
    }
    
    // 'value' attribute on TextCell (id=Exposures_WorkloadWeight_Cell) at TeamExposuresLV.pcf: line 98, column 111
    function sortValue_17 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.WorkloadWeight
    }
    
    // 'value' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at TeamExposuresLV.pcf: line 104, column 61
    function sortValue_19 (ExposureTeamView :  entity.ExposureTeamView) : java.lang.Object {
      return ExposureTeamView.TotalIncurredNet
    }
    
    // 'value' attribute on RowIterator at TeamExposuresLV.pcf: line 27, column 87
    function value_55 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return ExposureTeamViewList
    }
    
    // 'visible' attribute on TextCell (id=Exposures_WorkloadWeight_Cell) at TeamExposuresLV.pcf: line 98, column 111
    function visible_18 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    // 'visible' attribute on CurrencyCell (id=Exposures_TotalIncurredNet_Cell) at TeamExposuresLV.pcf: line 104, column 61
    function visible_20 () : java.lang.Boolean {
      return perm.Claim.genericviewnettotalincurred
    }
    
    // 'visible' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 43, column 52
    function visible_4 () : java.lang.Boolean {
      return FilterSet.ClosedFilterEnabled
    }
    
    // 'visible' attribute on ToolbarFilterOption at TeamExposuresLV.pcf: line 47, column 54
    function visible_6 () : java.lang.Boolean {
      return FilterSet.RelatedFiltersEnabled
    }
    
    property get ExposureTeamViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("ExposureTeamViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set ExposureTeamViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("ExposureTeamViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.team.TeamExposureFilterSet {
      return getRequireValue("FilterSet", 0) as gw.api.team.TeamExposureFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.team.TeamExposureFilterSet) {
      setRequireValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  
}