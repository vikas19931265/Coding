package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/user/TeamUserActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamUserActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/user/TeamUserActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamUserActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at TeamUserActivitiesLV.pcf: line 96, column 45
    function action_38 () : void {
      ClaimWorkplan.go(ActivityTeamView.Claim); ActivityDetailForward.goInWorkspace(ActivityTeamView.Claim, ActivityTeamView.Activity)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at TeamUserActivitiesLV.pcf: line 104, column 25
    function action_42 () : void {
      pcf.Claim.go(ActivityTeamView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at TeamUserActivitiesLV.pcf: line 111, column 25
    function action_47 () : void {
      ClaimContactDetailPopup.push(ActivityTeamView.ClaimInsured, ActivityTeamView.Claim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at TeamUserActivitiesLV.pcf: line 104, column 25
    function action_dest_43 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ActivityTeamView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at TeamUserActivitiesLV.pcf: line 111, column 25
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ActivityTeamView.ClaimInsured, ActivityTeamView.Claim)
    }
    
    // 'condition' attribute on ToolbarFlag at TeamUserActivitiesLV.pcf: line 29, column 35
    function condition_24 () : java.lang.Boolean {
      return ActivityTeamView.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityTeamView.ID)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamUserActivitiesLV.pcf: line 82, column 25
    function fontColor_29 () : java.lang.Object {
      return ActivityTeamView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamUserActivitiesLV.pcf: line 74, column 47
    function iconColor_27 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamUserActivitiesLV.pcf: line 74, column 47
    function valueRoot_26 () : java.lang.Object {
      return ActivityTeamView
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamUserActivitiesLV.pcf: line 74, column 47
    function value_25 () : java.lang.Boolean {
      return ActivityTeamView.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at TeamUserActivitiesLV.pcf: line 82, column 25
    function value_30 () : java.util.Date {
      return ActivityTeamView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at TeamUserActivitiesLV.pcf: line 89, column 41
    function value_35 () : typekey.Priority {
      return ActivityTeamView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at TeamUserActivitiesLV.pcf: line 96, column 45
    function value_39 () : java.lang.String {
      return ActivityTeamView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at TeamUserActivitiesLV.pcf: line 104, column 25
    function value_44 () : java.lang.String {
      return ActivityTeamView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamUserActivitiesLV.pcf: line 111, column 25
    function value_49 () : java.lang.String {
      return ActivityTeamView.ClaimInsuredName
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at TeamUserActivitiesLV.pcf: line 116, column 53
    function value_52 () : java.lang.Boolean {
      return ActivityTeamView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at TeamUserActivitiesLV.pcf: line 123, column 25
    function value_55 () : typekey.LOBCode {
      return ActivityTeamView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TeamUserActivitiesLV.pcf: line 129, column 45
    function value_58 () : typekey.Jurisdiction {
      return ActivityTeamView.JurisdictionState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamUserActivitiesLV.pcf: line 82, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamUserActivitiesLV.pcf: line 82, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamUserActivitiesLV.pcf: line 82, column 25
    function verifyFontColor_33 () : void {
      var __fontColorArg = ActivityTeamView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_32(__fontColorArg)
    }
    
    property get ActivityTeamView () : entity.ActivityTeamView {
      return getIteratedValue(1) as entity.ActivityTeamView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/user/TeamUserActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamUserActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 36, column 80
    function filter_0 () : gw.api.filters.IFilter {
      return FilterSet.OpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 39, column 88
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.OpenDueTodayFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 58, column 48
    function filter_10 () : gw.api.filters.IFilter {
      return FilterSet.getSkippedLastNDaysFilter(30)
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 62, column 48
    function filter_13 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 42, column 84
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.getOpenDueInNDaysFilter(7)
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 46, column 33
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.OpenOverdueFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 50, column 48
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.OpenEscalatedFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 54, column 48
    function filter_7 () : gw.api.filters.IFilter {
      return FilterSet.getCompletedLastNDaysFilter(30)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamUserActivitiesLV.pcf: line 74, column 47
    function iconColor_15 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'label' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 58, column 48
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Activities.SkippedLastNDays", 30)
    }
    
    // 'label' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 42, column 84
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Activities.DueNDays", 7)
    }
    
    // 'label' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 54, column 48
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Activities.ClosedLastNDays", 30)
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at TeamUserActivitiesLV.pcf: line 82, column 25
    function sortValue_16 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at TeamUserActivitiesLV.pcf: line 89, column 41
    function sortValue_17 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at TeamUserActivitiesLV.pcf: line 96, column 45
    function sortValue_18 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at TeamUserActivitiesLV.pcf: line 104, column 25
    function sortValue_19 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamUserActivitiesLV.pcf: line 111, column 25
    function sortValue_20 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.ClaimInsuredName
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at TeamUserActivitiesLV.pcf: line 116, column 53
    function sortValue_21 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at TeamUserActivitiesLV.pcf: line 123, column 25
    function sortValue_22 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TeamUserActivitiesLV.pcf: line 129, column 45
    function sortValue_23 (ActivityTeamView :  entity.ActivityTeamView) : java.lang.Object {
      return ActivityTeamView.JurisdictionState
    }
    
    // 'value' attribute on RowIterator at TeamUserActivitiesLV.pcf: line 26, column 83
    function value_61 () : gw.api.database.IQueryBeanResult<entity.ActivityTeamView> {
      return ActivityTeamViewList
    }
    
    // 'visible' attribute on ToolbarFilterOption at TeamUserActivitiesLV.pcf: line 50, column 48
    function visible_6 () : java.lang.Boolean {
      return !FilterSet.QueueOrPending
    }
    
    property get ActivityTeamViewList () : gw.api.database.IQueryBeanResult<ActivityTeamView> {
      return getRequireValue("ActivityTeamViewList", 0) as gw.api.database.IQueryBeanResult<ActivityTeamView>
    }
    
    property set ActivityTeamViewList ($arg :  gw.api.database.IQueryBeanResult<ActivityTeamView>) {
      setRequireValue("ActivityTeamViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.team.TeamUserActivityFilterSet {
      return getRequireValue("FilterSet", 0) as gw.api.team.TeamUserActivityFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.team.TeamUserActivityFilterSet) {
      setRequireValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  
}