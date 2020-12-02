package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSummaryActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSummaryActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSummaryActivitiesLV.pcf: line 15, column 64
    function initialValue_0 () : gw.api.database.IQueryBeanResult<Activity> {
      return gw.api.claim.ClaimUtil.getActivities(Claim)
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ClaimSummaryActivitiesLV.pcf: line 28, column 25
    function sortValue_1 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ClaimSummaryActivitiesLV.pcf: line 35, column 25
    function sortValue_2 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Priority
    }
    
    // 'sortBy' attribute on TextCell (id=Subject_Cell) at ClaimSummaryActivitiesLV.pcf: line 44, column 135
    function sortValue_3 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ClaimSummaryActivitiesLV.pcf: line 52, column 25
    function sortValue_4 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ClaimSummaryActivitiesLV.pcf: line 52, column 25
    function sortValue_5 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ClaimSummaryActivitiesLV.pcf: line 52, column 25
    function sortValue_6 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedQueue
    }
    
    // 'value' attribute on RowIterator at ClaimSummaryActivitiesLV.pcf: line 20, column 75
    function value_26 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return ActivityList
    }
    
    property get ActivityList () : gw.api.database.IQueryBeanResult<Activity> {
      return getVariableValue("ActivityList", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set ActivityList ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setVariableValue("ActivityList", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSummaryActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ClaimSummaryActivitiesLV.pcf: line 44, column 135
    function action_17 () : void {
      ClaimWorkplan.go(Claim); ActivityDetailForward.goInWorkspace(Claim, Activity)
    }
    
    // 'action' attribute on TextCell (id=AssignedUser_Cell) at ClaimSummaryActivitiesLV.pcf: line 52, column 25
    function action_21 () : void {
      UserContactDetailPopup.push(Activity.AssignedUser)
    }
    
    // 'action' attribute on TextCell (id=AssignedUser_Cell) at ClaimSummaryActivitiesLV.pcf: line 52, column 25
    function action_dest_22 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Activity.AssignedUser)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at ClaimSummaryActivitiesLV.pcf: line 44, column 135
    function available_16 () : java.lang.Boolean {
      return perm.Activity.view(Activity)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ClaimSummaryActivitiesLV.pcf: line 28, column 25
    function fontColor_7 () : java.lang.Object {
      return Activity.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ClaimSummaryActivitiesLV.pcf: line 28, column 25
    function valueRoot_9 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ClaimSummaryActivitiesLV.pcf: line 35, column 25
    function value_13 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ClaimSummaryActivitiesLV.pcf: line 44, column 135
    function value_18 () : java.lang.String {
      return String.isEmpty(Activity.Subject) ? DisplayKey.get("LV.Activity.Activities.NoSubject") : Activity.Subject
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at ClaimSummaryActivitiesLV.pcf: line 52, column 25
    function value_23 () : java.lang.String {
      return Activity.AssigneeDisplayString
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ClaimSummaryActivitiesLV.pcf: line 28, column 25
    function value_8 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ClaimSummaryActivitiesLV.pcf: line 28, column 25
    function verifyFontColorIsAllowedType_10 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ClaimSummaryActivitiesLV.pcf: line 28, column 25
    function verifyFontColorIsAllowedType_10 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ClaimSummaryActivitiesLV.pcf: line 28, column 25
    function verifyFontColor_11 () : void {
      var __fontColorArg = Activity.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_10(__fontColorArg)
    }
    
    property get Activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  
}