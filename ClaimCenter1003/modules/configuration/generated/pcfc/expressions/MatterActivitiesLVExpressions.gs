package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/litigation/MatterActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MatterActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/litigation/MatterActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MatterActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at MatterActivitiesLV.pcf: line 38, column 135
    function action_15 () : void {
      ClaimWorkplan.go(Claim); ActivityDetailForward.goInWorkspace(Claim, Activity)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MatterActivitiesLV.pcf: line 25, column 25
    function fontColor_6 () : java.lang.Object {
      return Activity.Overdue == true ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at MatterActivitiesLV.pcf: line 25, column 25
    function valueRoot_8 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at MatterActivitiesLV.pcf: line 31, column 41
    function value_12 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at MatterActivitiesLV.pcf: line 38, column 135
    function value_16 () : java.lang.String {
      return String.isEmpty(Activity.Subject) ? DisplayKey.get("LV.Activity.Activities.NoSubject") : Activity.Subject
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at MatterActivitiesLV.pcf: line 43, column 51
    function value_18 () : java.lang.String {
      return Activity.AssigneeDisplayString
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at MatterActivitiesLV.pcf: line 25, column 25
    function value_7 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MatterActivitiesLV.pcf: line 25, column 25
    function verifyFontColorIsAllowedType_9 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MatterActivitiesLV.pcf: line 25, column 25
    function verifyFontColorIsAllowedType_9 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at MatterActivitiesLV.pcf: line 25, column 25
    function verifyFontColor_10 () : void {
      var __fontColorArg = Activity.Overdue == true ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_9(__fontColorArg)
    }
    
    property get Activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/litigation/MatterActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MatterActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at MatterActivitiesLV.pcf: line 25, column 25
    function sortValue_0 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at MatterActivitiesLV.pcf: line 31, column 41
    function sortValue_1 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Priority
    }
    
    // 'sortBy' attribute on TextCell (id=Subject_Cell) at MatterActivitiesLV.pcf: line 38, column 135
    function sortValue_2 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at MatterActivitiesLV.pcf: line 43, column 51
    function sortValue_3 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at MatterActivitiesLV.pcf: line 43, column 51
    function sortValue_4 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at MatterActivitiesLV.pcf: line 43, column 51
    function sortValue_5 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignedQueue
    }
    
    // 'value' attribute on RowIterator at MatterActivitiesLV.pcf: line 17, column 75
    function value_21 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return ActivityList
    }
    
    property get ActivityList () : gw.api.database.IQueryBeanResult<Activity> {
      return getRequireValue("ActivityList", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set ActivityList ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setRequireValue("ActivityList", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  
}