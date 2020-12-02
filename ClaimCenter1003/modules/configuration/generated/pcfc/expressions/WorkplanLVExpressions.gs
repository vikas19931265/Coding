package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/workplan/WorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkplanLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/workplan/WorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WorkplanLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at WorkplanLV.pcf: line 120, column 135
    function action_49 () : void {
      if(not gw.api.activity.ActivityUtil.isWorksheetOpen(Activity.ID)) ActivityDetailForward.goInWorkspace(Claim, Activity)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at WorkplanLV.pcf: line 120, column 135
    function available_48 () : java.lang.Boolean {
      return perm.Activity.view(Activity)
    }
    
    // 'condition' attribute on ToolbarFlag at WorkplanLV.pcf: line 31, column 35
    function condition_25 () : java.lang.Boolean {
      return Activity.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at WorkplanLV.pcf: line 34, column 33
    function condition_26 () : java.lang.Boolean {
      return Activity.canSkip() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at WorkplanLV.pcf: line 37, column 37
    function condition_27 () : java.lang.Boolean {
      return Activity.canComplete() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at WorkplanLV.pcf: line 40, column 36
    function condition_28 () : java.lang.Boolean {
      return Activity.canApprove() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at WorkplanLV.pcf: line 99, column 25
    function fontColor_36 () : java.lang.Object {
      return gw.api.activity.ActivityUtil.isOverdue(Activity) ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at WorkplanLV.pcf: line 91, column 39
    function iconColor_34 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated_Cell) at WorkplanLV.pcf: line 81, column 52
    function valueRoot_30 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated_Cell) at WorkplanLV.pcf: line 81, column 52
    function value_29 () : java.lang.Boolean {
      return Activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at WorkplanLV.pcf: line 91, column 39
    function value_32 () : java.lang.Boolean {
      return Activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at WorkplanLV.pcf: line 99, column 25
    function value_37 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at WorkplanLV.pcf: line 106, column 41
    function value_42 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at WorkplanLV.pcf: line 112, column 44
    function value_45 () : java.lang.String {
      return Activity.ActivityStatus
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at WorkplanLV.pcf: line 120, column 135
    function value_50 () : java.lang.String {
      return String.isEmpty(Activity.Subject) ? DisplayKey.get("LV.Activity.Activities.NoSubject") : Activity.Subject
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at WorkplanLV.pcf: line 127, column 45
    function value_53 () : java.lang.String {
      return Activity.ExposuresString
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at WorkplanLV.pcf: line 132, column 45
    function value_56 () : java.lang.Boolean {
      return Activity.ExternallyOwned
    }
    
    // 'value' attribute on TextCell (id=ExternalOwner_Cell) at WorkplanLV.pcf: line 139, column 39
    function value_59 () : entity.Contact {
      return Activity.ExternalOwner
    }
    
    // 'value' attribute on TextCell (id=Assigner_Cell) at WorkplanLV.pcf: line 145, column 178
    function value_62 () : java.lang.String {
      return (Activity.AssignedByUser.Contact == null) ? DisplayKey.get("Java.Activity.AssignedByUser.SystemUser") : Activity.AssignedByUser.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at WorkplanLV.pcf: line 151, column 51
    function value_64 () : java.lang.String {
      return Activity.AssigneeDisplayString
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at WorkplanLV.pcf: line 99, column 25
    function verifyFontColorIsAllowedType_39 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at WorkplanLV.pcf: line 99, column 25
    function verifyFontColorIsAllowedType_39 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at WorkplanLV.pcf: line 99, column 25
    function verifyFontColor_40 () : void {
      var __fontColorArg = gw.api.activity.ActivityUtil.isOverdue(Activity) ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_39(__fontColorArg)
    }
    
    property get Activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/workplan/WorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkplanLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 46, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 67, column 88
    function filter_11 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 70, column 87
    function filter_12 () : gw.api.filters.IFilter {
      return FilterSet.MyNotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 49, column 79
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.MyNotReviewNotExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 52, column 76
    function filter_3 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 55, column 75
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.MyNotReviewNotExternalFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 58, column 94
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(7)
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 61, column 95
    function filter_7 () : gw.api.filters.IFilter {
      return FilterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(14)
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 64, column 95
    function filter_9 () : gw.api.filters.IFilter {
      return FilterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(30)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at WorkplanLV.pcf: line 91, column 39
    function iconColor_13 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at WorkplanLV.pcf: line 21, column 49
    function initialValue_0 () : gw.api.activity.WorkplanFilterSet {
      return gw.api.activity.WorkplanFilterSet.INSTANCE
    }
    
    // 'label' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 64, column 95
    function label_10 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 30)
    }
    
    // 'label' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 58, column 94
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 7)
    }
    
    // 'label' attribute on ToolbarFilterOption at WorkplanLV.pcf: line 61, column 95
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 14)
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at WorkplanLV.pcf: line 99, column 25
    function sortValue_14 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at WorkplanLV.pcf: line 106, column 41
    function sortValue_15 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Priority
    }
    
    // 'sortBy' attribute on TextCell (id=Status_Cell) at WorkplanLV.pcf: line 112, column 44
    function sortValue_16 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Status
    }
    
    // 'sortBy' attribute on TextCell (id=Subject_Cell) at WorkplanLV.pcf: line 120, column 135
    function sortValue_17 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Exposure_Cell) at WorkplanLV.pcf: line 127, column 45
    function sortValue_18 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at WorkplanLV.pcf: line 132, column 45
    function sortValue_19 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.ExternallyOwned
    }
    
    // 'sortBy' attribute on TextCell (id=ExternalOwner_Cell) at WorkplanLV.pcf: line 139, column 39
    function sortValue_20 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.ExternalOwnerCC.Contact
    }
    
    // 'sortBy' attribute on TextCell (id=Assigner_Cell) at WorkplanLV.pcf: line 145, column 178
    function sortValue_21 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignedByUser.Contact
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at WorkplanLV.pcf: line 151, column 51
    function sortValue_22 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignmentStatus
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at WorkplanLV.pcf: line 151, column 51
    function sortValue_23 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedUser
    }
    
    // 'sortBy' attribute on TextCell (id=AssignedUser_Cell) at WorkplanLV.pcf: line 151, column 51
    function sortValue_24 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedQueue
    }
    
    // 'value' attribute on RowIterator at WorkplanLV.pcf: line 28, column 75
    function value_67 () : gw.api.database.IQueryBeanResult<entity.Activity> {
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
    
    property get FilterSet () : gw.api.activity.WorkplanFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.activity.WorkplanFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.activity.WorkplanFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  
}