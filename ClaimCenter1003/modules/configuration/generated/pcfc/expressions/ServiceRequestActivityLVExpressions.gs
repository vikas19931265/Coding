package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestActivityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ServiceRequestActivityLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestActivityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ServiceRequestActivityLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at ServiceRequestActivityLV.pcf: line 116, column 135
    function action_46 () : void {
      openWorksheet(activity)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at ServiceRequestActivityLV.pcf: line 116, column 135
    function available_45 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'condition' attribute on ToolbarFlag at ServiceRequestActivityLV.pcf: line 27, column 35
    function condition_22 () : java.lang.Boolean {
      return activity.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at ServiceRequestActivityLV.pcf: line 30, column 33
    function condition_23 () : java.lang.Boolean {
      return activity.canSkip() && !gw.api.activity.ActivityUtil.isWorksheetOpen(activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at ServiceRequestActivityLV.pcf: line 33, column 37
    function condition_24 () : java.lang.Boolean {
      return activity.canComplete() && !gw.api.activity.ActivityUtil.isWorksheetOpen(activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at ServiceRequestActivityLV.pcf: line 36, column 36
    function condition_25 () : java.lang.Boolean {
      return activity.canApprove() && !gw.api.activity.ActivityUtil.isWorksheetOpen(activity?.ID)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ServiceRequestActivityLV.pcf: line 95, column 25
    function fontColor_33 () : java.lang.Object {
      return activity.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ServiceRequestActivityLV.pcf: line 87, column 39
    function iconColor_31 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated_Cell) at ServiceRequestActivityLV.pcf: line 77, column 52
    function valueRoot_27 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated_Cell) at ServiceRequestActivityLV.pcf: line 77, column 52
    function value_26 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at ServiceRequestActivityLV.pcf: line 87, column 39
    function value_29 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ServiceRequestActivityLV.pcf: line 95, column 25
    function value_34 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ServiceRequestActivityLV.pcf: line 102, column 41
    function value_39 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ServiceRequestActivityLV.pcf: line 108, column 44
    function value_42 () : java.lang.String {
      return activity.ActivityStatus
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at ServiceRequestActivityLV.pcf: line 116, column 135
    function value_47 () : java.lang.String {
      return String.isEmpty(activity.Subject) ? DisplayKey.get("LV.Activity.Activities.NoSubject") : activity.Subject
    }
    
    // 'value' attribute on TextCell (id=Assigner_Cell) at ServiceRequestActivityLV.pcf: line 122, column 178
    function value_50 () : java.lang.String {
      return (activity.AssignedByUser.Contact == null) ? DisplayKey.get("Java.Activity.AssignedByUser.SystemUser") : activity.AssignedByUser.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at ServiceRequestActivityLV.pcf: line 128, column 51
    function value_52 () : java.lang.String {
      return activity.AssigneeDisplayString
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ServiceRequestActivityLV.pcf: line 95, column 25
    function verifyFontColorIsAllowedType_36 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ServiceRequestActivityLV.pcf: line 95, column 25
    function verifyFontColorIsAllowedType_36 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at ServiceRequestActivityLV.pcf: line 95, column 25
    function verifyFontColor_37 () : void {
      var __fontColorArg = activity.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_36(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestActivityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ServiceRequestActivityLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 42, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return filterSet.NotReviewOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 63, column 88
    function filter_11 () : gw.api.filters.IFilter {
      return filterSet.NotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 66, column 87
    function filter_12 () : gw.api.filters.IFilter {
      return filterSet.MyNotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 45, column 79
    function filter_2 () : gw.api.filters.IFilter {
      return filterSet.MyNotReviewNotExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 48, column 76
    function filter_3 () : gw.api.filters.IFilter {
      return filterSet.NotReviewFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 51, column 75
    function filter_4 () : gw.api.filters.IFilter {
      return filterSet.MyNotReviewNotExternalFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 54, column 94
    function filter_5 () : gw.api.filters.IFilter {
      return filterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(7)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 57, column 95
    function filter_7 () : gw.api.filters.IFilter {
      return filterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(14)
    }
    
    // 'filter' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 60, column 95
    function filter_9 () : gw.api.filters.IFilter {
      return filterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(30)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at ServiceRequestActivityLV.pcf: line 87, column 39
    function iconColor_13 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestActivityLV.pcf: line 13, column 49
    function initialValue_0 () : gw.api.activity.WorkplanFilterSet {
      return gw.api.activity.WorkplanFilterSet.INSTANCE
    }
    
    // 'label' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 60, column 95
    function label_10 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 30)
    }
    
    // 'label' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 54, column 94
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 7)
    }
    
    // 'label' attribute on ToolbarFilterOption at ServiceRequestActivityLV.pcf: line 57, column 95
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 14)
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at ServiceRequestActivityLV.pcf: line 95, column 25
    function sortValue_14 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at ServiceRequestActivityLV.pcf: line 102, column 41
    function sortValue_15 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'sortBy' attribute on TextCell (id=Status_Cell) at ServiceRequestActivityLV.pcf: line 108, column 44
    function sortValue_16 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'sortBy' attribute on TextCell (id=Subject_Cell) at ServiceRequestActivityLV.pcf: line 116, column 135
    function sortValue_17 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Assigner_Cell) at ServiceRequestActivityLV.pcf: line 122, column 178
    function sortValue_18 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedByUser.Contact
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ServiceRequestActivityLV.pcf: line 128, column 51
    function sortValue_19 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ServiceRequestActivityLV.pcf: line 128, column 51
    function sortValue_20 (activity :  entity.Activity) : java.lang.Object {
      return  activity.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at ServiceRequestActivityLV.pcf: line 128, column 51
    function sortValue_21 (activity :  entity.Activity) : java.lang.Object {
      return  activity.AssignedQueue
    }
    
    // 'value' attribute on RowIterator at ServiceRequestActivityLV.pcf: line 24, column 75
    function value_55 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return activityList
    }
    
    property get activityList () : gw.api.database.IQueryBeanResult<Activity> {
      return getRequireValue("activityList", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set activityList ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setRequireValue("activityList", 0, $arg)
    }
    
    property get filterSet () : gw.api.activity.WorkplanFilterSet {
      return getVariableValue("filterSet", 0) as gw.api.activity.WorkplanFilterSet
    }
    
    property set filterSet ($arg :  gw.api.activity.WorkplanFilterSet) {
      setVariableValue("filterSet", 0, $arg)
    }
    
    function openWorksheet(act : Activity) {
      if(not gw.api.activity.ActivityUtil.isWorksheetOpen(act.ID)) {
        gw.api.activity.ActivityUtil.markActivityAsViewed(act)
        ActivityDetailViaClaimWorksheet.goInWorkspace(act.Claim, act)
      }
    }
    
    
  }
  
  
}