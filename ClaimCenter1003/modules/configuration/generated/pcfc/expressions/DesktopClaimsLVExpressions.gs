package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/claims/DesktopClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/claims/DesktopClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'cacheKey' attribute on ToolbarFilter at DesktopClaimsLV.pcf: line 48, column 36
    function cacheKey_9 () : java.lang.String {
      return FilterSet.CacheKey
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 52, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.OpenOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 55, column 78
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 58, column 82
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.OpenFlaggedOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 61, column 88
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.getClosedLastNDaysOwnedFilter(90)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 64, column 80
    function filter_6 () : gw.api.filters.IFilter {
      return FilterSet.OpenRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 67, column 80
    function filter_7 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 70, column 80
    function filter_8 () : gw.api.filters.IFilter {
      return FilterSet.DraftOwnedFilter
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at DesktopClaimsLV.pcf: line 83, column 54
    function iconColor_10 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DesktopClaimsLV.pcf: line 28, column 52
    function initialValue_0 () : gw.api.desktop.DesktopClaimFilterSet {
      return new gw.api.desktop.DesktopClaimFilterSet(User)
    }
    
    // 'label' attribute on ToolbarFilterOption at DesktopClaimsLV.pcf: line 61, column 88
    function label_5 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Claims.ClosedLastNDays", 90)
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Flagged_Cell) at DesktopClaimsLV.pcf: line 83, column 54
    function sortValue_11 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.Flagged
    }
    
    // 'value' attribute on TextCell (id=claimID_Cell) at DesktopClaimsLV.pcf: line 92, column 25
    function sortValue_12 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at DesktopClaimsLV.pcf: line 98, column 25
    function sortValue_13 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopClaimsLV.pcf: line 106, column 25
    function sortValue_14 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at DesktopClaimsLV.pcf: line 114, column 25
    function sortValue_15 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at DesktopClaimsLV.pcf: line 121, column 56
    function sortValue_17 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      var claimantList : String[] = (ClaimDesktopView.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at DesktopClaimsLV.pcf: line 126, column 46
    function sortValue_19 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopClaimsLV.pcf: line 132, column 43
    function sortValue_20 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.State
    }
    
    // 'value' attribute on TextCell (id=Workload_Cell) at DesktopClaimsLV.pcf: line 139, column 111
    function sortValue_21 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.WorkloadWeight
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at DesktopClaimsLV.pcf: line 145, column 54
    function sortValue_23 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at DesktopClaimsLV.pcf: line 152, column 25
    function sortValue_24 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at DesktopClaimsLV.pcf: line 159, column 25
    function sortValue_25 (ClaimDesktopView :  entity.ClaimDesktopView) : java.lang.Object {
      return ClaimDesktopView.JurisdictionState
    }
    
    // 'value' attribute on RowIterator at DesktopClaimsLV.pcf: line 35, column 83
    function value_79 () : gw.api.database.IQueryBeanResult<entity.ClaimDesktopView> {
      return ClaimDesktopViewList
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at DesktopClaimsLV.pcf: line 114, column 25
    function visible_16 () : java.lang.Boolean {
      return (User.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at DesktopClaimsLV.pcf: line 121, column 56
    function visible_18 () : java.lang.Boolean {
      return (User.LossType != LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Workload_Cell) at DesktopClaimsLV.pcf: line 139, column 111
    function visible_22 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    property get ClaimDesktopViewList () : gw.api.database.IQueryBeanResult<ClaimDesktopView> {
      return getRequireValue("ClaimDesktopViewList", 0) as gw.api.database.IQueryBeanResult<ClaimDesktopView>
    }
    
    property set ClaimDesktopViewList ($arg :  gw.api.database.IQueryBeanResult<ClaimDesktopView>) {
      setRequireValue("ClaimDesktopViewList", 0, $arg)
    }
    
    property get EnableNavLinks () : Boolean {
      return getRequireValue("EnableNavLinks", 0) as Boolean
    }
    
    property set EnableNavLinks ($arg :  Boolean) {
      setRequireValue("EnableNavLinks", 0, $arg)
    }
    
    property get FilterSet () : gw.api.desktop.DesktopClaimFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.desktop.DesktopClaimFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.desktop.DesktopClaimFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get User () : User {
      return getRequireValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setRequireValue("User", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/claims/DesktopClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=claimID_Cell) at DesktopClaimsLV.pcf: line 92, column 25
    function action_33 () : void {
      ClaimForward.go(ClaimDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopClaimsLV.pcf: line 106, column 25
    function action_43 () : void {
      ClaimContactDetailPopup.push(ClaimDesktopView.Insured, ClaimDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=claimID_Cell) at DesktopClaimsLV.pcf: line 92, column 25
    function action_dest_34 () : pcf.api.Destination {
      return pcf.ClaimForward.createDestination(ClaimDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopClaimsLV.pcf: line 106, column 25
    function action_dest_44 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ClaimDesktopView.Insured, ClaimDesktopView.Claim)
    }
    
    // 'available' attribute on TextCell (id=claimID_Cell) at DesktopClaimsLV.pcf: line 92, column 25
    function available_32 () : java.lang.Boolean {
      return EnableNavLinks
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at DesktopClaimsLV.pcf: line 83, column 54
    function iconColor_30 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DesktopClaimsLV.pcf: line 39, column 26
    function initialValue_26 () : String[] {
      return ClaimDesktopView.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at DesktopClaimsLV.pcf: line 43, column 48
    function initialValue_27 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator at DesktopClaimsLV.pcf: line 35, column 83
    function initializeVariables_78 () : void {
        claimantList = ClaimDesktopView.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at DesktopClaimsLV.pcf: line 83, column 54
    function valueRoot_29 () : java.lang.Object {
      return ClaimDesktopView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at DesktopClaimsLV.pcf: line 121, column 56
    function valueRoot_56 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at DesktopClaimsLV.pcf: line 83, column 54
    function value_28 () : java.lang.Boolean {
      return ClaimDesktopView.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=claimID_Cell) at DesktopClaimsLV.pcf: line 92, column 25
    function value_35 () : java.lang.String {
      return ClaimDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at DesktopClaimsLV.pcf: line 98, column 25
    function value_39 () : java.lang.String {
      return ClaimDesktopView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopClaimsLV.pcf: line 106, column 25
    function value_45 () : java.lang.String {
      return ClaimDesktopView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at DesktopClaimsLV.pcf: line 114, column 25
    function value_50 () : java.lang.String {
      return ClaimDesktopView.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at DesktopClaimsLV.pcf: line 121, column 56
    function value_55 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at DesktopClaimsLV.pcf: line 126, column 46
    function value_59 () : java.util.Date {
      return ClaimDesktopView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopClaimsLV.pcf: line 132, column 43
    function value_62 () : typekey.ClaimState {
      return ClaimDesktopView.State
    }
    
    // 'value' attribute on TextCell (id=Workload_Cell) at DesktopClaimsLV.pcf: line 139, column 111
    function value_65 () : java.lang.Integer {
      return ClaimDesktopView.WorkloadWeight
    }
    
    // 'value' attribute on CurrencyCell (id=TotalIncurredNet_Cell) at DesktopClaimsLV.pcf: line 145, column 54
    function value_69 () : gw.api.financials.CurrencyAmount {
      return ClaimDesktopView.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at DesktopClaimsLV.pcf: line 152, column 25
    function value_72 () : typekey.LOBCode {
      return ClaimDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at DesktopClaimsLV.pcf: line 159, column 25
    function value_75 () : typekey.Jurisdiction {
      return ClaimDesktopView.JurisdictionState
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at DesktopClaimsLV.pcf: line 114, column 25
    function visible_53 () : java.lang.Boolean {
      return (User.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at DesktopClaimsLV.pcf: line 121, column 56
    function visible_57 () : java.lang.Boolean {
      return (User.LossType != LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Workload_Cell) at DesktopClaimsLV.pcf: line 139, column 111
    function visible_67 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    property get ClaimDesktopView () : entity.ClaimDesktopView {
      return getIteratedValue(1) as entity.ClaimDesktopView
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
  
  
}