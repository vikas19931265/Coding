package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/user/VacationActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VacationActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/user/VacationActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VacationActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at VacationActivitiesLV.pcf: line 105, column 49
    function action_42 () : void {
      ClaimWorkplan.go(ActivityVacationView.Claim); ActivityDetailForward.goInWorkspace(ActivityVacationView.Claim, ActivityVacationView.Activity)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at VacationActivitiesLV.pcf: line 113, column 25
    function action_46 () : void {
      pcf.Claim.go(ActivityVacationView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at VacationActivitiesLV.pcf: line 119, column 58
    function action_51 () : void {
      ClaimContactDetailPopup.push(ActivityVacationView.ClaimInsured, ActivityVacationView.Claim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at VacationActivitiesLV.pcf: line 113, column 25
    function action_dest_47 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ActivityVacationView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at VacationActivitiesLV.pcf: line 119, column 58
    function action_dest_52 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ActivityVacationView.ClaimInsured, ActivityVacationView.Claim)
    }
    
    // 'condition' attribute on ToolbarFlag at VacationActivitiesLV.pcf: line 28, column 35
    function condition_19 () : java.lang.Boolean {
      return ActivityVacationView.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityVacationView.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at VacationActivitiesLV.pcf: line 31, column 33
    function condition_20 () : java.lang.Boolean {
      return ActivityVacationView.canSkip() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityVacationView.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at VacationActivitiesLV.pcf: line 34, column 37
    function condition_21 () : java.lang.Boolean {
      return ActivityVacationView.canComplete() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityVacationView.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at VacationActivitiesLV.pcf: line 37, column 36
    function condition_22 () : java.lang.Boolean {
      return ActivityVacationView.canApprove() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityVacationView.ID)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at VacationActivitiesLV.pcf: line 92, column 25
    function fontColor_33 () : java.lang.Object {
      return ActivityVacationView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at VacationActivitiesLV.pcf: line 79, column 51
    function iconColor_28 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at VacationActivitiesLV.pcf: line 69, column 64
    function valueRoot_24 () : java.lang.Object {
      return ActivityVacationView
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at VacationActivitiesLV.pcf: line 69, column 64
    function value_23 () : java.lang.Boolean {
      return ActivityVacationView.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at VacationActivitiesLV.pcf: line 79, column 51
    function value_26 () : java.lang.Boolean {
      return ActivityVacationView.Escalated
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at VacationActivitiesLV.pcf: line 85, column 58
    function value_30 () : java.lang.String {
      return ActivityVacationView.AssignedUserName
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at VacationActivitiesLV.pcf: line 92, column 25
    function value_34 () : java.util.Date {
      return ActivityVacationView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at VacationActivitiesLV.pcf: line 99, column 41
    function value_39 () : typekey.Priority {
      return ActivityVacationView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at VacationActivitiesLV.pcf: line 105, column 49
    function value_43 () : java.lang.String {
      return ActivityVacationView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at VacationActivitiesLV.pcf: line 113, column 25
    function value_48 () : java.lang.String {
      return ActivityVacationView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at VacationActivitiesLV.pcf: line 119, column 58
    function value_53 () : java.lang.String {
      return ActivityVacationView.ClaimInsuredName
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at VacationActivitiesLV.pcf: line 126, column 50
    function value_56 () : java.lang.String {
      return ActivityVacationView.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at VacationActivitiesLV.pcf: line 131, column 57
    function value_59 () : java.lang.Boolean {
      return ActivityVacationView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at VacationActivitiesLV.pcf: line 138, column 25
    function value_62 () : typekey.LOBCode {
      return ActivityVacationView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at VacationActivitiesLV.pcf: line 144, column 45
    function value_65 () : typekey.Jurisdiction {
      return ActivityVacationView.JurisdictionState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at VacationActivitiesLV.pcf: line 92, column 25
    function verifyFontColorIsAllowedType_36 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at VacationActivitiesLV.pcf: line 92, column 25
    function verifyFontColorIsAllowedType_36 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at VacationActivitiesLV.pcf: line 92, column 25
    function verifyFontColor_37 () : void {
      var __fontColorArg = ActivityVacationView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_36(__fontColorArg)
    }
    
    property get ActivityVacationView () : entity.ActivityVacationView {
      return getIteratedValue(1) as entity.ActivityVacationView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/user/VacationActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VacationActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 43, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewOpenDueTodayFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 46, column 84
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.getNotReviewOpenDueInNDaysFilter(7)
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 49, column 80
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 52, column 80
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewOpenOverdueFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 55, column 88
    function filter_6 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 58, column 92
    function filter_7 () : gw.api.filters.IFilter {
      return FilterSet.getNotReviewCompletedLastNDaysFilter(30)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at VacationActivitiesLV.pcf: line 79, column 51
    function iconColor_9 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at VacationActivitiesLV.pcf: line 18, column 55
    function initialValue_0 () : gw.api.desktop.DesktopActivityFilterSet {
      return new gw.api.desktop.DesktopActivityFilterSet()
    }
    
    // 'label' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 46, column 84
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Activities.DueNDays", 7)
    }
    
    // 'label' attribute on ToolbarFilterOption at VacationActivitiesLV.pcf: line 58, column 92
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Activities.ClosedLastNDays", 30)
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at VacationActivitiesLV.pcf: line 85, column 58
    function sortValue_10 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.AssignedUserName
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at VacationActivitiesLV.pcf: line 92, column 25
    function sortValue_11 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at VacationActivitiesLV.pcf: line 99, column 41
    function sortValue_12 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at VacationActivitiesLV.pcf: line 105, column 49
    function sortValue_13 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at VacationActivitiesLV.pcf: line 113, column 25
    function sortValue_14 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at VacationActivitiesLV.pcf: line 119, column 58
    function sortValue_15 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.ClaimInsuredName
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at VacationActivitiesLV.pcf: line 131, column 57
    function sortValue_16 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at VacationActivitiesLV.pcf: line 138, column 25
    function sortValue_17 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at VacationActivitiesLV.pcf: line 144, column 45
    function sortValue_18 (ActivityVacationView :  entity.ActivityVacationView) : java.lang.Object {
      return ActivityVacationView.JurisdictionState
    }
    
    // 'value' attribute on RowIterator at VacationActivitiesLV.pcf: line 25, column 87
    function value_68 () : gw.api.database.IQueryBeanResult<entity.ActivityVacationView> {
      return ActivityVacationViewList
    }
    
    property get ActivityVacationViewList () : gw.api.database.IQueryBeanResult<ActivityVacationView> {
      return getRequireValue("ActivityVacationViewList", 0) as gw.api.database.IQueryBeanResult<ActivityVacationView>
    }
    
    property set ActivityVacationViewList ($arg :  gw.api.database.IQueryBeanResult<ActivityVacationView>) {
      setRequireValue("ActivityVacationViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.desktop.DesktopActivityFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.desktop.DesktopActivityFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.desktop.DesktopActivityFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  
}