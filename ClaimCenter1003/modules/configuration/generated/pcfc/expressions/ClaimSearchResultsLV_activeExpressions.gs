package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.active.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSearchResultsLV_activeExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.active.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at ClaimSearchResultsLV.active.pcf: line 56, column 53
    function iconColor_2 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.active.pcf: line 20, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<ClaimSearchView> {
      return claimSearchResults == null ? null : claimSearchResults.getActiveClaimSearchResults() as gw.api.database.IQueryBeanResult<ClaimSearchView>
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.active.pcf: line 24, column 20
    function initialValue_1 () : User {
      return User.util.CurrentUser
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimSearchResultsLV.active.pcf: line 91, column 45
    function sortValue_11 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.LossDate
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ClaimSearchResultsLV.active.pcf: line 97, column 58
    function sortValue_12 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ClaimSearchResultsLV.active.pcf: line 97, column 58
    function sortValue_13 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at ClaimSearchResultsLV.active.pcf: line 97, column 58
    function sortValue_14 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignedQueue
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ClaimSearchResultsLV.active.pcf: line 103, column 43
    function sortValue_15 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.State
    }
    
    // 'value' attribute on DateCell (id=NoticeDate_Cell) at ClaimSearchResultsLV.active.pcf: line 129, column 61
    function sortValue_16 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.ReportedDate
    }
    
    // 'value' attribute on TextCell (id=AssignedGroup_Cell) at ClaimSearchResultsLV.active.pcf: line 134, column 61
    function sortValue_18 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at ClaimSearchResultsLV.active.pcf: line 140, column 61
    function sortValue_20 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=StateOfJurisdiction_Cell) at ClaimSearchResultsLV.active.pcf: line 146, column 61
    function sortValue_22 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.JurisdictionState
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Flagged_Cell) at ClaimSearchResultsLV.active.pcf: line 56, column 53
    function sortValue_3 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.Flagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.active.pcf: line 64, column 25
    function sortValue_4 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ClaimSearchResultsLV.active.pcf: line 69, column 50
    function sortValue_5 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at ClaimSearchResultsLV.active.pcf: line 74, column 49
    function sortValue_6 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at ClaimSearchResultsLV.active.pcf: line 80, column 63
    function sortValue_7 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.active.pcf: line 86, column 63
    function sortValue_9 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      var claimantList : String[] = (ClaimSearchView.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 33, column 82
    function value_85 () : gw.api.database.IQueryBeanResult<entity.ClaimSearchView> {
      return ClaimSearchViewList
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.active.pcf: line 86, column 63
    function visible_10 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    // 'visible' attribute on DateCell (id=NoticeDate_Cell) at ClaimSearchResultsLV.active.pcf: line 129, column 61
    function visible_17 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingCSV()
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at ClaimSearchResultsLV.active.pcf: line 80, column 63
    function visible_8 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    property get ClaimSearchViewList () : gw.api.database.IQueryBeanResult<ClaimSearchView> {
      return getVariableValue("ClaimSearchViewList", 0) as gw.api.database.IQueryBeanResult<ClaimSearchView>
    }
    
    property set ClaimSearchViewList ($arg :  gw.api.database.IQueryBeanResult<ClaimSearchView>) {
      setVariableValue("ClaimSearchViewList", 0, $arg)
    }
    
    property get CurrentUser () : User {
      return getVariableValue("CurrentUser", 0) as User
    }
    
    property set CurrentUser ($arg :  User) {
      setVariableValue("CurrentUser", 0, $arg)
    }
    
    property get claimSearchResults () : gw.api.search.ClaimSearchResults {
      return getRequireValue("claimSearchResults", 0) as gw.api.search.ClaimSearchResults
    }
    
    property set claimSearchResults ($arg :  gw.api.search.ClaimSearchResults) {
      setRequireValue("claimSearchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.active.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.active.pcf: line 64, column 25
    function action_30 () : void {
      ClaimForward.go(ClaimSearchView.Claim)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.active.pcf: line 64, column 25
    function action_dest_31 () : pcf.api.Destination {
      return pcf.ClaimForward.createDestination(ClaimSearchView.Claim)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at ClaimSearchResultsLV.active.pcf: line 56, column 53
    function iconColor_28 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.active.pcf: line 37, column 26
    function initialValue_24 () : String[] {
      return ClaimSearchView.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.active.pcf: line 41, column 48
    function initialValue_25 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 33, column 82
    function initializeVariables_83 () : void {
        claimantList = ClaimSearchView.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at ClaimSearchResultsLV.active.pcf: line 56, column 53
    function valueRoot_27 () : java.lang.Object {
      return ClaimSearchView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.active.pcf: line 86, column 63
    function valueRoot_46 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at ClaimSearchResultsLV.active.pcf: line 56, column 53
    function value_26 () : java.lang.Boolean {
      return ClaimSearchView.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.active.pcf: line 64, column 25
    function value_32 () : java.lang.String {
      return ClaimSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ClaimSearchResultsLV.active.pcf: line 69, column 50
    function value_35 () : java.lang.String {
      return ClaimSearchView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at ClaimSearchResultsLV.active.pcf: line 74, column 49
    function value_38 () : java.lang.String {
      return ClaimSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at ClaimSearchResultsLV.active.pcf: line 80, column 63
    function value_41 () : java.lang.String {
      return ClaimSearchView.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.active.pcf: line 86, column 63
    function value_45 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimSearchResultsLV.active.pcf: line 91, column 45
    function value_49 () : java.util.Date {
      return ClaimSearchView.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at ClaimSearchResultsLV.active.pcf: line 97, column 58
    function value_52 () : java.lang.String {
      return ClaimSearchView.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ClaimSearchResultsLV.active.pcf: line 103, column 43
    function value_55 () : typekey.ClaimState {
      return ClaimSearchView.State
    }
    
    // 'value' attribute on CurrencyCell (id=RemainingReserves_Cell) at ClaimSearchResultsLV.active.pcf: line 110, column 54
    function value_58 () : gw.api.financials.CurrencyAmount {
      return ClaimSearchView.RemainingReserves
    }
    
    // 'value' attribute on CurrencyCell (id=FuturePayments_Cell) at ClaimSearchResultsLV.active.pcf: line 117, column 51
    function value_61 () : gw.api.financials.CurrencyAmount {
      return ClaimSearchView.FuturePayments
    }
    
    // 'value' attribute on CurrencyCell (id=TotalPayments_Cell) at ClaimSearchResultsLV.active.pcf: line 124, column 50
    function value_64 () : gw.api.financials.CurrencyAmount {
      return ClaimSearchView.TotalPayments
    }
    
    // 'value' attribute on DateCell (id=NoticeDate_Cell) at ClaimSearchResultsLV.active.pcf: line 129, column 61
    function value_67 () : java.util.Date {
      return ClaimSearchView.ReportedDate
    }
    
    // 'value' attribute on TextCell (id=AssignedGroup_Cell) at ClaimSearchResultsLV.active.pcf: line 134, column 61
    function value_71 () : java.lang.String {
      return ClaimSearchView.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at ClaimSearchResultsLV.active.pcf: line 140, column 61
    function value_75 () : typekey.LOBCode {
      return ClaimSearchView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=StateOfJurisdiction_Cell) at ClaimSearchResultsLV.active.pcf: line 146, column 61
    function value_79 () : typekey.Jurisdiction {
      return ClaimSearchView.JurisdictionState
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at ClaimSearchResultsLV.active.pcf: line 80, column 63
    function visible_43 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.active.pcf: line 86, column 63
    function visible_47 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    // 'visible' attribute on DateCell (id=NoticeDate_Cell) at ClaimSearchResultsLV.active.pcf: line 129, column 61
    function visible_69 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingCSV()
    }
    
    property get ClaimSearchView () : entity.ClaimSearchView {
      return getIteratedValue(1) as entity.ClaimSearchView
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