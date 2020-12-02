package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/vacation/VacationClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VacationClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/vacation/VacationClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VacationClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Claims_ID_Cell) at VacationClaimsLV.pcf: line 83, column 25
    function action_30 () : void {
      pcf.Claim.go(ClaimVacationView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Claims_Insured_Cell) at VacationClaimsLV.pcf: line 94, column 52
    function action_38 () : void {
      ClaimContactDetailPopup.push(ClaimVacationView.Insured, ClaimVacationView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Claims_ID_Cell) at VacationClaimsLV.pcf: line 83, column 25
    function action_dest_31 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ClaimVacationView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Claims_Insured_Cell) at VacationClaimsLV.pcf: line 94, column 52
    function action_dest_39 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ClaimVacationView.Insured, ClaimVacationView.Claim)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Claims_Flagged_Cell) at VacationClaimsLV.pcf: line 69, column 55
    function iconColor_25 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at VacationClaimsLV.pcf: line 29, column 26
    function initialValue_21 () : String[] {
      return ClaimVacationView.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at VacationClaimsLV.pcf: line 33, column 48
    function initialValue_22 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator at VacationClaimsLV.pcf: line 25, column 84
    function initializeVariables_61 () : void {
        claimantList = ClaimVacationView.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on BooleanRadioCell (id=Claims_Flagged_Cell) at VacationClaimsLV.pcf: line 69, column 55
    function valueRoot_24 () : java.lang.Object {
      return ClaimVacationView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at VacationClaimsLV.pcf: line 98, column 59
    function valueRoot_44 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on BooleanRadioCell (id=Claims_Flagged_Cell) at VacationClaimsLV.pcf: line 69, column 55
    function value_23 () : java.lang.Boolean {
      return ClaimVacationView.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=VacationClaims_AssignedUser_Cell) at VacationClaimsLV.pcf: line 75, column 60
    function value_27 () : java.lang.String {
      return ClaimVacationView.AssigneeDisplayString
    }
    
    // 'value' attribute on TextCell (id=Claims_ID_Cell) at VacationClaimsLV.pcf: line 83, column 25
    function value_32 () : java.lang.String {
      return ClaimVacationView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Claims_PolicyID_Cell) at VacationClaimsLV.pcf: line 88, column 51
    function value_35 () : java.lang.String {
      return ClaimVacationView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Claims_Insured_Cell) at VacationClaimsLV.pcf: line 94, column 52
    function value_40 () : java.lang.String {
      return ClaimVacationView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at VacationClaimsLV.pcf: line 98, column 59
    function value_43 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=Claims_LossDate_Cell) at VacationClaimsLV.pcf: line 103, column 47
    function value_46 () : java.util.Date {
      return ClaimVacationView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Claims_Status_Cell) at VacationClaimsLV.pcf: line 109, column 43
    function value_49 () : typekey.ClaimState {
      return ClaimVacationView.State
    }
    
    // 'value' attribute on CurrencyCell (id=Claims_TotalIncurredNet_Cell) at VacationClaimsLV.pcf: line 115, column 55
    function value_52 () : gw.api.financials.CurrencyAmount {
      return ClaimVacationView.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyCell (id=Claims_LOBCode_Cell) at VacationClaimsLV.pcf: line 121, column 40
    function value_55 () : typekey.LOBCode {
      return ClaimVacationView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Claims_JurisdictionState_Cell) at VacationClaimsLV.pcf: line 127, column 45
    function value_58 () : typekey.Jurisdiction {
      return ClaimVacationView.JurisdictionState
    }
    
    property get ClaimVacationView () : entity.ClaimVacationView {
      return getIteratedValue(1) as entity.ClaimVacationView
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
  
  @javax.annotation.Generated("config/web/pcf/vacation/VacationClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VacationClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationClaimsLV.pcf: line 41, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.OpenOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationClaimsLV.pcf: line 44, column 86
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationClaimsLV.pcf: line 47, column 90
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.OpenFlaggedOwnedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationClaimsLV.pcf: line 50, column 80
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.OpenRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationClaimsLV.pcf: line 53, column 80
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.OpenNewRelatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationClaimsLV.pcf: line 56, column 80
    function filter_6 () : gw.api.filters.IFilter {
      return FilterSet.DraftOwnedFilter
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Claims_Flagged_Cell) at VacationClaimsLV.pcf: line 69, column 55
    function iconColor_7 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at VacationClaimsLV.pcf: line 18, column 54
    function initialValue_0 () : gw.api.vacation.VacationClaimFilterSet {
      return new gw.api.vacation.VacationClaimFilterSet()
    }
    
    // 'sortBy' attribute on TextCell (id=VacationClaims_AssignedUser_Cell) at VacationClaimsLV.pcf: line 75, column 60
    function sortValue_10 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=VacationClaims_AssignedUser_Cell) at VacationClaimsLV.pcf: line 75, column 60
    function sortValue_11 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.AssignedQueue
    }
    
    // 'value' attribute on TextCell (id=Claims_ID_Cell) at VacationClaimsLV.pcf: line 83, column 25
    function sortValue_12 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Claims_PolicyID_Cell) at VacationClaimsLV.pcf: line 88, column 51
    function sortValue_13 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Claims_Insured_Cell) at VacationClaimsLV.pcf: line 94, column 52
    function sortValue_14 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at VacationClaimsLV.pcf: line 98, column 59
    function sortValue_15 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      var claimantList : String[] = (ClaimVacationView.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=Claims_LossDate_Cell) at VacationClaimsLV.pcf: line 103, column 47
    function sortValue_16 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Claims_Status_Cell) at VacationClaimsLV.pcf: line 109, column 43
    function sortValue_17 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.State
    }
    
    // 'value' attribute on CurrencyCell (id=Claims_TotalIncurredNet_Cell) at VacationClaimsLV.pcf: line 115, column 55
    function sortValue_18 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyCell (id=Claims_LOBCode_Cell) at VacationClaimsLV.pcf: line 121, column 40
    function sortValue_19 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=Claims_JurisdictionState_Cell) at VacationClaimsLV.pcf: line 127, column 45
    function sortValue_20 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.JurisdictionState
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Claims_Flagged_Cell) at VacationClaimsLV.pcf: line 69, column 55
    function sortValue_8 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.Flagged
    }
    
    // 'sortBy' attribute on TextCell (id=VacationClaims_AssignedUser_Cell) at VacationClaimsLV.pcf: line 75, column 60
    function sortValue_9 (ClaimVacationView :  entity.ClaimVacationView) : java.lang.Object {
      return ClaimVacationView.AssignmentStatus
    }
    
    // 'value' attribute on RowIterator at VacationClaimsLV.pcf: line 25, column 84
    function value_62 () : gw.api.database.IQueryBeanResult<entity.ClaimVacationView> {
      return ClaimVacationViewList
    }
    
    property get ClaimVacationViewList () : gw.api.database.IQueryBeanResult<ClaimVacationView> {
      return getRequireValue("ClaimVacationViewList", 0) as gw.api.database.IQueryBeanResult<ClaimVacationView>
    }
    
    property set ClaimVacationViewList ($arg :  gw.api.database.IQueryBeanResult<ClaimVacationView>) {
      setRequireValue("ClaimVacationViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.vacation.VacationClaimFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.vacation.VacationClaimFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.vacation.VacationClaimFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  
}