package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/DuplicateClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DuplicateClaimSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/DuplicateClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DuplicateClaimSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at DuplicateClaimSearchResultsLV.pcf: line 38, column 43
    function iconColor_1 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DuplicateClaimSearchResultsLV.pcf: line 14, column 20
    function initialValue_0 () : User {
      return User.util.CurrentUser
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at DuplicateClaimSearchResultsLV.pcf: line 68, column 35
    function sortValue_10 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at DuplicateClaimSearchResultsLV.pcf: line 72, column 48
    function sortValue_11 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DuplicateClaimSearchResultsLV.pcf: line 77, column 43
    function sortValue_12 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.State
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Flagged_Cell) at DuplicateClaimSearchResultsLV.pcf: line 38, column 43
    function sortValue_2 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.Flagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at DuplicateClaimSearchResultsLV.pcf: line 44, column 25
    function sortValue_3 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DuplicateClaimSearchResultsLV.pcf: line 49, column 39
    function sortValue_4 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at DuplicateClaimSearchResultsLV.pcf: line 53, column 46
    function sortValue_5 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at DuplicateClaimSearchResultsLV.pcf: line 59, column 63
    function sortValue_6 (Claim :  entity.Claim) : java.lang.Object {
      return Claim.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at DuplicateClaimSearchResultsLV.pcf: line 64, column 63
    function sortValue_8 (Claim :  entity.Claim) : java.lang.Object {
      var claimantList : String[] = (Claim.getClaimantNames())
var claimantUIHelper : gw.api.claim.ClaimantsUIHelper = (new gw.api.claim.ClaimantsUIHelper(claimantList))
return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on RowIterator at DuplicateClaimSearchResultsLV.pcf: line 19, column 34
    function value_48 () : entity.Claim[] {
      return ClaimList
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at DuplicateClaimSearchResultsLV.pcf: line 59, column 63
    function visible_7 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at DuplicateClaimSearchResultsLV.pcf: line 64, column 63
    function visible_9 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    property get ClaimList () : Claim[] {
      return getRequireValue("ClaimList", 0) as Claim[]
    }
    
    property set ClaimList ($arg :  Claim[]) {
      setRequireValue("ClaimList", 0, $arg)
    }
    
    property get CurrentUser () : User {
      return getVariableValue("CurrentUser", 0) as User
    }
    
    property set CurrentUser ($arg :  User) {
      setVariableValue("CurrentUser", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/DuplicateClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DuplicateClaimSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at DuplicateClaimSearchResultsLV.pcf: line 44, column 25
    function action_19 () : void {
      DuplicateClaimLossDetailsPopup.push(Claim)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber_Cell) at DuplicateClaimSearchResultsLV.pcf: line 44, column 25
    function action_dest_20 () : pcf.api.Destination {
      return pcf.DuplicateClaimLossDetailsPopup.createDestination(Claim)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at DuplicateClaimSearchResultsLV.pcf: line 38, column 43
    function iconColor_17 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DuplicateClaimSearchResultsLV.pcf: line 23, column 26
    function initialValue_13 () : String[] {
      return Claim.getClaimantNames()
    }
    
    // 'initialValue' attribute on Variable at DuplicateClaimSearchResultsLV.pcf: line 27, column 48
    function initialValue_14 () : gw.api.claim.ClaimantsUIHelper {
      return new gw.api.claim.ClaimantsUIHelper(claimantList)
    }
    
    // RowIterator at DuplicateClaimSearchResultsLV.pcf: line 19, column 34
    function initializeVariables_47 () : void {
        claimantList = Claim.getClaimantNames();
  claimantUIHelper = new gw.api.claim.ClaimantsUIHelper(claimantList);

    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at DuplicateClaimSearchResultsLV.pcf: line 38, column 43
    function valueRoot_16 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at DuplicateClaimSearchResultsLV.pcf: line 53, column 46
    function valueRoot_28 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at DuplicateClaimSearchResultsLV.pcf: line 64, column 63
    function valueRoot_35 () : java.lang.Object {
      return claimantUIHelper
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at DuplicateClaimSearchResultsLV.pcf: line 38, column 43
    function value_15 () : java.lang.Boolean {
      return Claim.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at DuplicateClaimSearchResultsLV.pcf: line 44, column 25
    function value_21 () : java.lang.String {
      return Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DuplicateClaimSearchResultsLV.pcf: line 49, column 39
    function value_24 () : entity.Contact {
      return Claim.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at DuplicateClaimSearchResultsLV.pcf: line 53, column 46
    function value_27 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker_Cell) at DuplicateClaimSearchResultsLV.pcf: line 59, column 63
    function value_30 () : entity.Contact {
      return Claim.ClaimantDenorm
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at DuplicateClaimSearchResultsLV.pcf: line 64, column 63
    function value_34 () : java.lang.String {
      return claimantUIHelper.FormattedClaimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at DuplicateClaimSearchResultsLV.pcf: line 68, column 35
    function value_38 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee_Cell) at DuplicateClaimSearchResultsLV.pcf: line 72, column 48
    function value_41 () : java.lang.String {
      return Claim.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DuplicateClaimSearchResultsLV.pcf: line 77, column 43
    function value_44 () : typekey.ClaimState {
      return Claim.State
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker_Cell) at DuplicateClaimSearchResultsLV.pcf: line 59, column 63
    function visible_32 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on TextCell (id=Claimant_Cell) at DuplicateClaimSearchResultsLV.pcf: line 64, column 63
    function visible_36 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    property get Claim () : entity.Claim {
      return getIteratedValue(1) as entity.Claim
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