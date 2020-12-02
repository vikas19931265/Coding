package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/archive/ArchiveClaimRetrievePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ArchiveClaimRetrievePopupExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/archive/ArchiveClaimRetrievePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArchiveClaimRetrievePopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (restoreSet :  gw.api.claim.ClaimArchiveRestoreSet) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=Restore) at ArchiveClaimRetrievePopup.pcf: line 29, column 25
    function action_1 () : void {
      restoreAction()
    }
    
    // 'action' attribute on ToolbarButton (id=Done) at ArchiveClaimRetrievePopup.pcf: line 34, column 25
    function action_2 () : void {
      CurrentLocation.cancel()
    }
    
    // 'def' attribute on PanelRef at ArchiveClaimRetrievePopup.pcf: line 37, column 55
    function def_onEnter_3 (def :  pcf.RetrieveClaimInfoDV) : void {
      def.onEnter(retrieveClaimInfo)
    }
    
    // 'def' attribute on PanelRef at ArchiveClaimRetrievePopup.pcf: line 37, column 55
    function def_refreshVariables_4 (def :  pcf.RetrieveClaimInfoDV) : void {
      def.refreshVariables(retrieveClaimInfo)
    }
    
    // 'initialValue' attribute on Variable at ArchiveClaimRetrievePopup.pcf: line 20, column 33
    function initialValue_0 () : ArchivedClaimInfo {
      return new ArchivedClaimInfo()
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at ArchiveClaimRetrievePopup.pcf: line 83, column 61
    function sortValue_10 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.ArchivedAdjuster
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ArchiveClaimRetrievePopup.pcf: line 88, column 49
    function sortValue_11 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.ArchiveState
    }
    
    // 'value' attribute on TextCell (id=IDOrder_Cell) at ArchiveClaimRetrievePopup.pcf: line 62, column 29
    function sortValue_5 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ArchiveClaimRetrievePopup.pcf: line 67, column 51
    function sortValue_6 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.Insured
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at ArchiveClaimRetrievePopup.pcf: line 71, column 57
    function sortValue_7 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ArchiveClaimRetrievePopup.pcf: line 75, column 63
    function sortValue_8 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      var claimantList : java.lang.String[] = (ClaimInfoSearchView.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ArchiveClaimRetrievePopup.pcf: line 79, column 53
    function sortValue_9 (ClaimInfoSearchView :  entity.ClaimInfoSearchView) : java.lang.Object {
      return ClaimInfoSearchView.LossDate
    }
    
    // 'value' attribute on RowIterator at ArchiveClaimRetrievePopup.pcf: line 46, column 52
    function value_38 () : entity.ClaimInfoSearchView[] {
      return restoreSet.getClaimInfoSearchViews()
    }
    
    override property get CurrentLocation () : pcf.ArchiveClaimRetrievePopup {
      return super.CurrentLocation as pcf.ArchiveClaimRetrievePopup
    }
    
    property get restoreSet () : gw.api.claim.ClaimArchiveRestoreSet {
      return getVariableValue("restoreSet", 0) as gw.api.claim.ClaimArchiveRestoreSet
    }
    
    property set restoreSet ($arg :  gw.api.claim.ClaimArchiveRestoreSet) {
      setVariableValue("restoreSet", 0, $arg)
    }
    
    property get retrieveClaimInfo () : ArchivedClaimInfo {
      return getVariableValue("retrieveClaimInfo", 0) as ArchivedClaimInfo
    }
    
    property set retrieveClaimInfo ($arg :  ArchivedClaimInfo) {
      setVariableValue("retrieveClaimInfo", 0, $arg)
    }
    
    /**
     * Restores and commits the archived claims
     */
    function restoreAction() {
      if(not retrieveClaimInfo.Comment.HasContent) {
        throw new gw.api.util.DisplayableException(DisplayKey.get("Java.Validation.MissingRequired", DisplayKey.get("Web.ArchivedClaim.Comment")))
      }
      restoreSet.restore(retrieveClaimInfo)
      CurrentLocation.commit()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/archive/ArchiveClaimRetrievePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ArchiveClaimRetrievePopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=IDOrder_Cell) at ArchiveClaimRetrievePopup.pcf: line 62, column 29
    function action_14 () : void {
      SimpleClaimForward.go(ClaimInfoSearchView.ClaimInfo)
    }
    
    // 'action' attribute on TextCell (id=IDOrder_Cell) at ArchiveClaimRetrievePopup.pcf: line 62, column 29
    function action_dest_15 () : pcf.api.Destination {
      return pcf.SimpleClaimForward.createDestination(ClaimInfoSearchView.ClaimInfo)
    }
    
    // 'initialValue' attribute on Variable at ArchiveClaimRetrievePopup.pcf: line 50, column 40
    function initialValue_12 () : java.lang.String[] {
      return ClaimInfoSearchView.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at ArchiveClaimRetrievePopup.pcf: line 54, column 52
    function initialValue_13 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator at ArchiveClaimRetrievePopup.pcf: line 46, column 52
    function initializeVariables_37 () : void {
        claimantList = ClaimInfoSearchView.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on TextCell (id=IDOrder_Cell) at ArchiveClaimRetrievePopup.pcf: line 62, column 29
    function valueRoot_17 () : java.lang.Object {
      return ClaimInfoSearchView
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ArchiveClaimRetrievePopup.pcf: line 75, column 63
    function valueRoot_26 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on TextCell (id=IDOrder_Cell) at ArchiveClaimRetrievePopup.pcf: line 62, column 29
    function value_16 () : java.lang.String {
      return ClaimInfoSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ArchiveClaimRetrievePopup.pcf: line 67, column 51
    function value_19 () : entity.ContactInfoView {
      return ClaimInfoSearchView.Insured
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at ArchiveClaimRetrievePopup.pcf: line 71, column 57
    function value_22 () : java.lang.String {
      return ClaimInfoSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ArchiveClaimRetrievePopup.pcf: line 75, column 63
    function value_25 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ArchiveClaimRetrievePopup.pcf: line 79, column 53
    function value_28 () : java.util.Date {
      return ClaimInfoSearchView.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at ArchiveClaimRetrievePopup.pcf: line 83, column 61
    function value_31 () : java.lang.String {
      return ClaimInfoSearchView.ArchivedAdjuster
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ArchiveClaimRetrievePopup.pcf: line 88, column 49
    function value_34 () : typekey.ArchiveState {
      return ClaimInfoSearchView.ArchiveState
    }
    
    property get ClaimInfoSearchView () : entity.ClaimInfoSearchView {
      return getIteratedValue(1) as entity.ClaimInfoSearchView
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
  
  
}