package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.archived.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSearchResultsLV_archivedExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.archived.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.archived.pcf: line 19, column 75
    function initialValue_0 () : gw.api.database.IQueryBeanResult<ClaimInfoSearchView> {
      return claimSearchResults == null ? null : claimSearchResults.getArchivedClaimSearchResults() as gw.api.database.IQueryBeanResult<ClaimInfoSearchView>
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.archived.pcf: line 49, column 25
    function sortValue_1 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at ClaimSearchResultsLV.archived.pcf: line 61, column 53
    function sortValue_2 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.archived.pcf: line 66, column 59
    function sortValue_3 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      var claimantList : String[] = (ClaimInfoSearchView.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimSearchResultsLV.archived.pcf: line 71, column 49
    function sortValue_4 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at ClaimSearchResultsLV.archived.pcf: line 76, column 57
    function sortValue_5 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.ArchivedAdjuster
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ClaimSearchResultsLV.archived.pcf: line 82, column 45
    function sortValue_6 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.ArchiveState
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.archived.pcf: line 28, column 86
    function value_36 () : gw.api.database.IQueryBeanResult<entity.ClaimInfoSearchView> {
      return ClaimInfoSearchViewList
    }
    
    property get ClaimInfoSearchViewList () : gw.api.database.IQueryBeanResult<ClaimInfoSearchView> {
      return getVariableValue("ClaimInfoSearchViewList", 0) as gw.api.database.IQueryBeanResult<ClaimInfoSearchView>
    }
    
    property set ClaimInfoSearchViewList ($arg :  gw.api.database.IQueryBeanResult<ClaimInfoSearchView>) {
      setVariableValue("ClaimInfoSearchViewList", 0, $arg)
    }
    
    property get claimSearchResults () : gw.api.search.ClaimSearchResults {
      return getRequireValue("claimSearchResults", 0) as gw.api.search.ClaimSearchResults
    }
    
    property set claimSearchResults ($arg :  gw.api.search.ClaimSearchResults) {
      setRequireValue("claimSearchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.archived.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.archived.pcf: line 49, column 25
    function action_10 () : void {
      SimpleClaimForward.go(ClaimInfoSearchView.ClaimInfo)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.archived.pcf: line 49, column 25
    function action_dest_11 () : pcf.api.Destination {
      return pcf.SimpleClaimForward.createDestination(ClaimInfoSearchView.ClaimInfo)
    }
    
    // 'condition' attribute on ToolbarFlag at ClaimSearchResultsLV.archived.pcf: line 39, column 34
    function condition_9 () : java.lang.Boolean {
      return ClaimInfoSearchView.canRestore()
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.archived.pcf: line 32, column 26
    function initialValue_7 () : String[] {
      return ClaimInfoSearchView.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.archived.pcf: line 36, column 48
    function initialValue_8 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.archived.pcf: line 28, column 86
    function initializeVariables_34 () : void {
        claimantList = ClaimInfoSearchView.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'useArchivedStyle' attribute on Row at ClaimSearchResultsLV.archived.pcf: line 41, column 61
    function useArchivedStyle_33 () : java.lang.Boolean {
      return ClaimInfoSearchView.isArchived()
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.archived.pcf: line 49, column 25
    function valueRoot_13 () : java.lang.Object {
      return ClaimInfoSearchView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.archived.pcf: line 66, column 59
    function valueRoot_22 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at ClaimSearchResultsLV.archived.pcf: line 49, column 25
    function value_12 () : java.lang.String {
      return ClaimInfoSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ClaimSearchResultsLV.archived.pcf: line 56, column 47
    function value_15 () : entity.ContactInfoView {
      return ClaimInfoSearchView.Insured
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at ClaimSearchResultsLV.archived.pcf: line 61, column 53
    function value_18 () : java.lang.String {
      return ClaimInfoSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSearchResultsLV.archived.pcf: line 66, column 59
    function value_21 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimSearchResultsLV.archived.pcf: line 71, column 49
    function value_24 () : java.util.Date {
      return ClaimInfoSearchView.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at ClaimSearchResultsLV.archived.pcf: line 76, column 57
    function value_27 () : java.lang.String {
      return ClaimInfoSearchView.ArchivedAdjuster
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ClaimSearchResultsLV.archived.pcf: line 82, column 45
    function value_30 () : typekey.ArchiveState {
      return ClaimInfoSearchView.ArchiveState
    }
    
    property get ClaimInfoSearchView () : entity.ClaimInfoSearchView {
      return getIteratedValue(1) as entity.ClaimInfoSearchView
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