package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/SimpleClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SimpleClaimSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/SimpleClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SimpleClaimSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at SimpleClaimSearchResultsLV.pcf: line 53, column 25
    function action_29 () : void {
      ClaimForward.go(SimpleClaimSearchView.Claim)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at SimpleClaimSearchResultsLV.pcf: line 53, column 25
    function action_dest_30 () : pcf.api.Destination {
      return pcf.ClaimForward.createDestination(SimpleClaimSearchView.Claim)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at SimpleClaimSearchResultsLV.pcf: line 45, column 59
    function iconColor_27 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at SimpleClaimSearchResultsLV.pcf: line 29, column 36
    function initialValue_23 () : java.lang.String[] {
      return SimpleClaimSearchView.ClaimantNames
    }
    
    // 'initialValue' attribute on Variable at SimpleClaimSearchResultsLV.pcf: line 33, column 48
    function initialValue_24 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator at SimpleClaimSearchResultsLV.pcf: line 25, column 87
    function initializeVariables_82 () : void {
        claimantList = SimpleClaimSearchView.ClaimantNames;
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at SimpleClaimSearchResultsLV.pcf: line 45, column 59
    function valueRoot_26 () : java.lang.Object {
      return SimpleClaimSearchView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at SimpleClaimSearchResultsLV.pcf: line 75, column 63
    function valueRoot_45 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at SimpleClaimSearchResultsLV.pcf: line 45, column 59
    function value_25 () : java.lang.Boolean {
      return SimpleClaimSearchView.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at SimpleClaimSearchResultsLV.pcf: line 53, column 25
    function value_31 () : java.lang.String {
      return SimpleClaimSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at SimpleClaimSearchResultsLV.pcf: line 58, column 56
    function value_34 () : java.lang.String {
      return SimpleClaimSearchView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at SimpleClaimSearchResultsLV.pcf: line 63, column 55
    function value_37 () : java.lang.String {
      return SimpleClaimSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at SimpleClaimSearchResultsLV.pcf: line 69, column 63
    function value_40 () : java.lang.String {
      return SimpleClaimSearchView.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at SimpleClaimSearchResultsLV.pcf: line 75, column 63
    function value_44 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at SimpleClaimSearchResultsLV.pcf: line 80, column 51
    function value_48 () : java.util.Date {
      return SimpleClaimSearchView.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at SimpleClaimSearchResultsLV.pcf: line 86, column 64
    function value_51 () : java.lang.String {
      return SimpleClaimSearchView.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SimpleClaimSearchResultsLV.pcf: line 92, column 43
    function value_54 () : typekey.ClaimState {
      return SimpleClaimSearchView.State
    }
    
    // 'value' attribute on CurrencyCell (id=RemainingReserves_Cell) at SimpleClaimSearchResultsLV.pcf: line 99, column 60
    function value_57 () : gw.api.financials.CurrencyAmount {
      return SimpleClaimSearchView.RemainingReserves
    }
    
    // 'value' attribute on CurrencyCell (id=FuturePayments_Cell) at SimpleClaimSearchResultsLV.pcf: line 106, column 57
    function value_60 () : gw.api.financials.CurrencyAmount {
      return SimpleClaimSearchView.FuturePayments
    }
    
    // 'value' attribute on CurrencyCell (id=TotalPayments_Cell) at SimpleClaimSearchResultsLV.pcf: line 113, column 56
    function value_63 () : gw.api.financials.CurrencyAmount {
      return SimpleClaimSearchView.TotalPayments
    }
    
    // 'value' attribute on DateCell (id=NoticeDate_Cell) at SimpleClaimSearchResultsLV.pcf: line 118, column 61
    function value_66 () : java.util.Date {
      return SimpleClaimSearchView.ReportedDate
    }
    
    // 'value' attribute on TextCell (id=AssignedGroup_Cell) at SimpleClaimSearchResultsLV.pcf: line 123, column 61
    function value_70 () : java.lang.String {
      return SimpleClaimSearchView.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at SimpleClaimSearchResultsLV.pcf: line 129, column 61
    function value_74 () : typekey.LOBCode {
      return SimpleClaimSearchView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=StateOfJurisdiction_Cell) at SimpleClaimSearchResultsLV.pcf: line 135, column 61
    function value_78 () : typekey.Jurisdiction {
      return SimpleClaimSearchView.JurisdictionState
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at SimpleClaimSearchResultsLV.pcf: line 69, column 63
    function visible_42 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at SimpleClaimSearchResultsLV.pcf: line 75, column 63
    function visible_46 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    // 'visible' attribute on DateCell (id=NoticeDate_Cell) at SimpleClaimSearchResultsLV.pcf: line 118, column 61
    function visible_68 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingCSV()
    }
    
    property get SimpleClaimSearchView () : entity.ClaimSearchView {
      return getIteratedValue(1) as entity.ClaimSearchView
    }
    
    property get claimantList () : java.lang.String[] {
      return getVariableValue("claimantList", 1) as java.lang.String[]
    }
    
    property set claimantList ($arg :  java.lang.String[]) {
      setVariableValue("claimantList", 1, $arg)
    }
    
    property get claimantUIHelper () : gw.api.claim.ClaimantsUIHelper {
      return getVariableValue("claimantUIHelper", 1) as gw.api.claim.ClaimantsUIHelper
    }
    
    property set claimantUIHelper ($arg :  gw.api.claim.ClaimantsUIHelper) {
      setVariableValue("claimantUIHelper", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/SimpleClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SimpleClaimSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at SimpleClaimSearchResultsLV.pcf: line 45, column 59
    function iconColor_1 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at SimpleClaimSearchResultsLV.pcf: line 16, column 20
    function initialValue_0 () : User {
      return User.util.CurrentUser
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at SimpleClaimSearchResultsLV.pcf: line 80, column 51
    function sortValue_10 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.LossDate
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at SimpleClaimSearchResultsLV.pcf: line 86, column 64
    function sortValue_11 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at SimpleClaimSearchResultsLV.pcf: line 86, column 64
    function sortValue_12 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=Assignee_Cell) at SimpleClaimSearchResultsLV.pcf: line 86, column 64
    function sortValue_13 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.AssignedQueue
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SimpleClaimSearchResultsLV.pcf: line 92, column 43
    function sortValue_14 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.State
    }
    
    // 'value' attribute on DateCell (id=NoticeDate_Cell) at SimpleClaimSearchResultsLV.pcf: line 118, column 61
    function sortValue_15 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.ReportedDate
    }
    
    // 'value' attribute on TextCell (id=AssignedGroup_Cell) at SimpleClaimSearchResultsLV.pcf: line 123, column 61
    function sortValue_17 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode_Cell) at SimpleClaimSearchResultsLV.pcf: line 129, column 61
    function sortValue_19 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.LOBCode
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Flagged_Cell) at SimpleClaimSearchResultsLV.pcf: line 45, column 59
    function sortValue_2 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.Flagged
    }
    
    // 'value' attribute on TypeKeyCell (id=StateOfJurisdiction_Cell) at SimpleClaimSearchResultsLV.pcf: line 135, column 61
    function sortValue_21 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.JurisdictionState
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at SimpleClaimSearchResultsLV.pcf: line 53, column 25
    function sortValue_3 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at SimpleClaimSearchResultsLV.pcf: line 58, column 56
    function sortValue_4 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at SimpleClaimSearchResultsLV.pcf: line 63, column 55
    function sortValue_5 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at SimpleClaimSearchResultsLV.pcf: line 69, column 63
    function sortValue_6 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return SimpleClaimSearchView.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at SimpleClaimSearchResultsLV.pcf: line 75, column 63
    function sortValue_8 (SimpleClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      var claimantList : java.lang.String[] = (SimpleClaimSearchView.ClaimantNames)
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on RowIterator at SimpleClaimSearchResultsLV.pcf: line 25, column 87
    function value_84 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return SimpleClaimSearchViewList
    }
    
    // 'visible' attribute on DateCell (id=NoticeDate_Cell) at SimpleClaimSearchResultsLV.pcf: line 118, column 61
    function visible_16 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingCSV()
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at SimpleClaimSearchResultsLV.pcf: line 69, column 63
    function visible_7 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at SimpleClaimSearchResultsLV.pcf: line 75, column 63
    function visible_9 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    property get CurrentUser () : User {
      return getVariableValue("CurrentUser", 0) as User
    }
    
    property set CurrentUser ($arg :  User) {
      setVariableValue("CurrentUser", 0, $arg)
    }
    
    property get SimpleClaimSearchViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("SimpleClaimSearchViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set SimpleClaimSearchViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("SimpleClaimSearchViewList", 0, $arg)
    }
    
    
  }
  
  
}