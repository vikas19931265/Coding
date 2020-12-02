package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/claims/TeamClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/claims/TeamClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at TeamClaimsLV.pcf: line 84, column 25
    function action_31 () : void {
      pcf.Claim.go(ClaimTeamView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at TeamClaimsLV.pcf: line 107, column 25
    function action_46 () : void {
      ClaimContactDetailPopup.push(ClaimTeamView.Insured, ClaimTeamView.Claim)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at TeamClaimsLV.pcf: line 84, column 25
    function action_dest_32 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ClaimTeamView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at TeamClaimsLV.pcf: line 107, column 25
    function action_dest_47 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ClaimTeamView.Insured, ClaimTeamView.Claim)
    }
    
    // 'condition' attribute on ToolbarFlag at TeamClaimsLV.pcf: line 40, column 31
    function condition_26 () : java.lang.Boolean {
      return ClaimTeamView.canRemoveFlag()
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at TeamClaimsLV.pcf: line 77, column 51
    function iconColor_29 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at TeamClaimsLV.pcf: line 31, column 26
    function initialValue_24 () : String[] {
      return ClaimTeamView.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at TeamClaimsLV.pcf: line 35, column 48
    function initialValue_25 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator at TeamClaimsLV.pcf: line 27, column 87
    function initializeVariables_60 () : void {
        claimantList = ClaimTeamView.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at TeamClaimsLV.pcf: line 77, column 51
    function valueRoot_28 () : java.lang.Object {
      return ClaimTeamView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at TeamClaimsLV.pcf: line 112, column 59
    function valueRoot_52 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at TeamClaimsLV.pcf: line 77, column 51
    function value_27 () : java.lang.Boolean {
      return ClaimTeamView.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at TeamClaimsLV.pcf: line 84, column 25
    function value_33 () : java.lang.String {
      return ClaimTeamView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at TeamClaimsLV.pcf: line 90, column 25
    function value_36 () : java.lang.String {
      return ClaimTeamView.AssigneeDisplayString
    }
    
    // 'value' attribute on TextCell (id=WorkloadWeight_Cell) at TeamClaimsLV.pcf: line 96, column 111
    function value_39 () : java.lang.Integer {
      return ClaimTeamView.WorkloadWeight
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at TeamClaimsLV.pcf: line 101, column 25
    function value_43 () : java.lang.String {
      return ClaimTeamView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamClaimsLV.pcf: line 107, column 25
    function value_48 () : java.lang.String {
      return ClaimTeamView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at TeamClaimsLV.pcf: line 112, column 59
    function value_51 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at TeamClaimsLV.pcf: line 117, column 51
    function value_54 () : gw.api.financials.CurrencyAmount {
      return ClaimTeamView.TotalIncurredNet
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at TeamClaimsLV.pcf: line 121, column 43
    function value_57 () : java.util.Date {
      return ClaimTeamView.LossDate
    }
    
    // 'visible' attribute on TextCell (id=WorkloadWeight_Cell) at TeamClaimsLV.pcf: line 96, column 111
    function visible_41 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    property get ClaimTeamView () : entity.ClaimTeamView {
      return getIteratedValue(1) as entity.ClaimTeamView
    }
    
    property get claimantList () : String[] {
      return getVariableValue("claimantList", 1) as String[]
    }
    
    property set claimantList ($arg :  String[]) {
      setVariableValue("claimantList", 1, $arg)
    }
    
    property get claimantUIHelper () : gw.api.claim.ClaimantsUIHelper {
      return getVariableValue("claimantUIHelper", 1) as gw.api.claim.ClaimantsUIHelper
    }
    
    property set claimantUIHelper ($arg :  gw.api.claim.ClaimantsUIHelper) {
      setVariableValue("claimantUIHelper", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/claims/TeamClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'cacheKey' attribute on ToolbarFilter at TeamClaimsLV.pcf: line 43, column 33
    function cacheKey_10 () : java.lang.String {
      return FilterSet.CacheKey
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 47, column 33
    function filter_0 () : gw.api.filters.IFilter {
      return FilterSet.OpenOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 50, column 78
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 53, column 82
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.OpenFlaggedOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 57, column 52
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.getClosedLastNDaysOwnedFilter(90)
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 61, column 54
    function filter_6 () : gw.api.filters.IFilter {
      return FilterSet.OpenRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 65, column 54
    function filter_8 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewRelatedFilter
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at TeamClaimsLV.pcf: line 77, column 51
    function iconColor_11 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'label' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 57, column 52
    function label_4 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Claims.ClosedLastNDays", 90)
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Flagged_Cell) at TeamClaimsLV.pcf: line 77, column 51
    function sortValue_12 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.Flagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at TeamClaimsLV.pcf: line 84, column 25
    function sortValue_13 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.ClaimNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at TeamClaimsLV.pcf: line 90, column 25
    function sortValue_14 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at TeamClaimsLV.pcf: line 90, column 25
    function sortValue_15 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at TeamClaimsLV.pcf: line 90, column 25
    function sortValue_16 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.AssignedQueue
    }
    
    // 'value' attribute on TextCell (id=WorkloadWeight_Cell) at TeamClaimsLV.pcf: line 96, column 111
    function sortValue_17 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.WorkloadWeight
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at TeamClaimsLV.pcf: line 101, column 25
    function sortValue_19 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamClaimsLV.pcf: line 107, column 25
    function sortValue_20 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at TeamClaimsLV.pcf: line 112, column 59
    function sortValue_21 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      var claimantList : String[] = (ClaimTeamView.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at TeamClaimsLV.pcf: line 117, column 51
    function sortValue_22 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.TotalIncurredNet
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at TeamClaimsLV.pcf: line 121, column 43
    function sortValue_23 (ClaimTeamView :  entity.ClaimTeamView) : java.lang.Object {
      return ClaimTeamView.LossDate
    }
    
    // 'value' attribute on RowIterator at TeamClaimsLV.pcf: line 27, column 87
    function value_61 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return ClaimTeamViewList
    }
    
    // 'visible' attribute on TextCell (id=WorkloadWeight_Cell) at TeamClaimsLV.pcf: line 96, column 111
    function visible_18 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    // 'visible' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 57, column 52
    function visible_5 () : java.lang.Boolean {
      return FilterSet.ClosedFilterEnabled
    }
    
    // 'visible' attribute on ToolbarFilterOption at TeamClaimsLV.pcf: line 61, column 54
    function visible_7 () : java.lang.Boolean {
      return FilterSet.RelatedFiltersEnabled
    }
    
    property get ClaimTeamViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("ClaimTeamViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set ClaimTeamViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("ClaimTeamViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.team.TeamClaimFilterSet {
      return getRequireValue("FilterSet", 0) as gw.api.team.TeamClaimFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.team.TeamClaimFilterSet) {
      setRequireValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  
}