package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FreeTextClaimSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FreeTextClaimSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at FreeTextClaimSearchScreen.pcf: line 21, column 74
    function initialValue_0 () : gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper {
      return new gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper()
    }
    
    property get PrintTargetLV () : java.lang.String {
      return getVariableValue("PrintTargetLV", 0) as java.lang.String
    }
    
    property set PrintTargetLV ($arg :  java.lang.String) {
      setVariableValue("PrintTargetLV", 0, $arg)
    }
    
    property get archiveSearchEnabled () : boolean {
      return getRequireValue("archiveSearchEnabled", 0) as java.lang.Boolean
    }
    
    property set archiveSearchEnabled ($arg :  boolean) {
      setRequireValue("archiveSearchEnabled", 0, $arg)
    }
    
    property get dismissInvalidSearchCriteriaAlert () : boolean {
      return getVariableValue("dismissInvalidSearchCriteriaAlert", 0) as java.lang.Boolean
    }
    
    property set dismissInvalidSearchCriteriaAlert ($arg :  boolean) {
      setVariableValue("dismissInvalidSearchCriteriaAlert", 0, $arg)
    }
    
    property get helper () : gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper {
      return getVariableValue("helper", 0) as gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper
    }
    
    property set helper ($arg :  gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends FreeTextClaimSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimSearchScreen_PrintButton) at FreeTextClaimSearchScreen.pcf: line 53, column 27
    function action_6 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions(PrintTargetLV, DisplayKey.get("JSP.ClaimSearch.Search.Results"), null)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ClaimSearchScreen_AssignButton) at FreeTextClaimSearchScreen.pcf: line 46, column 38
    function allCheckedRowsAction_4 (CheckedValues :  FreeTextClaimSearchEntity[], CheckedValuesErrors :  java.util.Map) : void {
      AssignClaimsPopup.push(new gw.api.claim.ClaimAssignmentPopup(CheckedValues))
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimSearchScreen_PrintButton) at FreeTextClaimSearchScreen.pcf: line 53, column 27
    function available_5 () : java.lang.Boolean {
      return perm.User.printlistviews
    }
    
    // 'def' attribute on PanelRef at FreeTextClaimSearchScreen.pcf: line 33, column 86
    function def_onEnter_1 (def :  pcf.FreeTextClaimSearchDV) : void {
      def.onEnter(criteriaWrapper.Criteria, archiveSearchEnabled)
    }
    
    // 'def' attribute on PanelRef at FreeTextClaimSearchScreen.pcf: line 36, column 70
    function def_onEnter_7 (def :  pcf.FreeTextClaimSearchResultsLV) : void {
      def.onEnter(helper, claimSearchResults)
    }
    
    // 'def' attribute on PanelRef at FreeTextClaimSearchScreen.pcf: line 33, column 86
    function def_refreshVariables_2 (def :  pcf.FreeTextClaimSearchDV) : void {
      def.refreshVariables(criteriaWrapper.Criteria, archiveSearchEnabled)
    }
    
    // 'def' attribute on PanelRef at FreeTextClaimSearchScreen.pcf: line 36, column 70
    function def_refreshVariables_8 (def :  pcf.FreeTextClaimSearchResultsLV) : void {
      def.refreshVariables(helper, claimSearchResults)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at FreeTextClaimSearchScreen.pcf: line 31, column 93
    function maxSearchResults_10 () : java.lang.Object {
      return java.lang.Integer.MAX_VALUE
    }
    
    // 'mode' attribute on PanelRef at FreeTextClaimSearchScreen.pcf: line 36, column 70
    function mode_9 () : java.lang.Object {
      return criteriaWrapper.Criteria.FreeTextClaimSearchType.Code
    }
    
    // 'searchCriteria' attribute on SearchPanel at FreeTextClaimSearchScreen.pcf: line 31, column 93
    function searchCriteria_12 () : gw.cc.claim.ClaimSearchCriteriaWrapper {
      return helper.Criteria
    }
    
    // 'search' attribute on SearchPanel at FreeTextClaimSearchScreen.pcf: line 31, column 93
    function search_11 () : java.lang.Object {
      return helper.search()
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=ClaimSearchScreen_AssignButton) at FreeTextClaimSearchScreen.pcf: line 46, column 38
    function visible_3 () : java.lang.Boolean {
      return helper.Active
    }
    
    property get claimSearchResults () : gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity>
    }
    
    property get criteriaWrapper () : gw.cc.claim.ClaimSearchCriteriaWrapper {
      return getCriteriaValue(1) as gw.cc.claim.ClaimSearchCriteriaWrapper
    }
    
    property set criteriaWrapper ($arg :  gw.cc.claim.ClaimSearchCriteriaWrapper) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}