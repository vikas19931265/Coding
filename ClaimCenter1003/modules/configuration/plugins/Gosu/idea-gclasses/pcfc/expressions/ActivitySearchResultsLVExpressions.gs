package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/activities/ActivitySearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivitySearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/activities/ActivitySearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivitySearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitySearchResultsLV.pcf: line 32, column 49
    function iconColor_0 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ActivitySearchResultsLV.pcf: line 38, column 47
    function sortValue_1 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ActivitySearchResultsLV.pcf: line 91, column 61
    function sortValue_10 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ActivitySearchResultsLV.pcf: line 91, column 61
    function sortValue_11 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.AssignedUserName
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ActivitySearchResultsLV.pcf: line 91, column 61
    function sortValue_12 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.AssignedQueueName
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at ActivitySearchResultsLV.pcf: line 45, column 25
    function sortValue_2 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ActivitySearchResultsLV.pcf: line 50, column 56
    function sortValue_3 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.ClaimInsuredName
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ActivitySearchResultsLV.pcf: line 57, column 25
    function sortValue_4 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.TargetDate
    }
    
    // 'value' attribute on DateCell (id=Closed_Cell) at ActivitySearchResultsLV.pcf: line 63, column 25
    function sortValue_5 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.CloseDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ActivitySearchResultsLV.pcf: line 69, column 41
    function sortValue_6 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ActivitySearchResultsLV.pcf: line 75, column 47
    function sortValue_7 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.Status
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at ActivitySearchResultsLV.pcf: line 80, column 55
    function sortValue_8 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.ExternallyOwned
    }
    
    // 'value' attribute on TextCell (id=ExternalOwner_Cell) at ActivitySearchResultsLV.pcf: line 85, column 59
    function sortValue_9 (ActivitySearchView :  entity.ActivitySearchView) : java.lang.Object {
      return ActivitySearchView.ExternalOwnerCCName
    }
    
    // 'value' attribute on RowIterator at ActivitySearchResultsLV.pcf: line 21, column 87
    function value_53 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return ActivitySearchViewList
    }
    
    property get ActivitySearchViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("ActivitySearchViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set ActivitySearchViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("ActivitySearchViewList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/activities/ActivitySearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ActivitySearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ActivitySearchResultsLV.pcf: line 38, column 47
    function action_17 () : void {
      ClaimWorkplan.go(ActivitySearchView.Claim); ActivityDetailForward.goInWorkspace(ActivitySearchView.Claim, ActivitySearchView.Activity)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at ActivitySearchResultsLV.pcf: line 45, column 25
    function action_21 () : void {
      pcf.Claim.go(ActivitySearchView.Claim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at ActivitySearchResultsLV.pcf: line 45, column 25
    function action_dest_22 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ActivitySearchView.Claim)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitySearchResultsLV.pcf: line 57, column 25
    function fontColor_29 () : java.lang.Object {
      return ActivitySearchView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitySearchResultsLV.pcf: line 32, column 49
    function iconColor_15 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitySearchResultsLV.pcf: line 32, column 49
    function valueRoot_14 () : java.lang.Object {
      return ActivitySearchView
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ActivitySearchResultsLV.pcf: line 32, column 49
    function value_13 () : java.lang.Boolean {
      return ActivitySearchView.Escalated
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ActivitySearchResultsLV.pcf: line 38, column 47
    function value_18 () : java.lang.String {
      return ActivitySearchView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at ActivitySearchResultsLV.pcf: line 45, column 25
    function value_23 () : java.lang.String {
      return ActivitySearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at ActivitySearchResultsLV.pcf: line 50, column 56
    function value_26 () : java.lang.String {
      return ActivitySearchView.ClaimInsuredName
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ActivitySearchResultsLV.pcf: line 57, column 25
    function value_30 () : java.util.Date {
      return ActivitySearchView.TargetDate
    }
    
    // 'value' attribute on DateCell (id=Closed_Cell) at ActivitySearchResultsLV.pcf: line 63, column 25
    function value_35 () : java.util.Date {
      return ActivitySearchView.CloseDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ActivitySearchResultsLV.pcf: line 69, column 41
    function value_38 () : typekey.Priority {
      return ActivitySearchView.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ActivitySearchResultsLV.pcf: line 75, column 47
    function value_41 () : typekey.ActivityStatus {
      return ActivitySearchView.Status
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at ActivitySearchResultsLV.pcf: line 80, column 55
    function value_44 () : java.lang.Boolean {
      return ActivitySearchView.ExternallyOwned
    }
    
    // 'value' attribute on TextCell (id=ExternalOwner_Cell) at ActivitySearchResultsLV.pcf: line 85, column 59
    function value_47 () : java.lang.String {
      return ActivitySearchView.ExternalOwnerCCName
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at ActivitySearchResultsLV.pcf: line 91, column 61
    function value_50 () : java.lang.String {
      return ActivitySearchView.AssigneeDisplayString
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitySearchResultsLV.pcf: line 57, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitySearchResultsLV.pcf: line 57, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ActivitySearchResultsLV.pcf: line 57, column 25
    function verifyFontColor_33 () : void {
      var __fontColorArg = ActivitySearchView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_32(__fontColorArg)
    }
    
    property get ActivitySearchView () : entity.ActivitySearchView {
      return getIteratedValue(1) as entity.ActivitySearchView
    }
    
    
  }
  
  
}