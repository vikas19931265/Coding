package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/activities/DesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/activities/DesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 48, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewOpenDueTodayFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 51, column 84
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.getNotReviewOpenDueInNDaysFilter(7)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 54, column 80
    function filter_4 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 57, column 80
    function filter_5 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewOpenOverdueFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 60, column 88
    function filter_6 () : gw.api.filters.IFilter {
      return FilterSet.NotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 63, column 92
    function filter_7 () : gw.api.filters.IFilter {
      return FilterSet.getNotReviewCompletedLastNDaysFilter(30)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.pcf: line 84, column 50
    function iconColor_9 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DesktopActivitiesLV.pcf: line 22, column 55
    function initialValue_0 () : gw.api.desktop.DesktopActivityFilterSet {
      return new gw.api.desktop.DesktopActivityFilterSet()
    }
    
    // 'label' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 51, column 84
    function label_3 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Activities.DueNDays", 7)
    }
    
    // 'label' attribute on ToolbarFilterOption at DesktopActivitiesLV.pcf: line 63, column 92
    function label_8 () : java.lang.Object {
      return DisplayKey.get("Java.ToolBar.Activities.ClosedLastNDays", 30)
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 92, column 25
    function sortValue_10 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 99, column 41
    function sortValue_11 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 106, column 48
    function sortValue_12 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopActivitiesLV.pcf: line 114, column 25
    function sortValue_13 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopActivitiesLV.pcf: line 121, column 25
    function sortValue_14 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ClaimInsuredName
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at DesktopActivitiesLV.pcf: line 134, column 56
    function sortValue_15 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at DesktopActivitiesLV.pcf: line 141, column 25
    function sortValue_16 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at DesktopActivitiesLV.pcf: line 147, column 45
    function sortValue_17 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.JurisdictionState
    }
    
    // 'value' attribute on RowIterator at DesktopActivitiesLV.pcf: line 30, column 87
    function value_64 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return ActivityDesktopViewList
    }
    
    property get ActivityDesktopViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("ActivityDesktopViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set ActivityDesktopViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("ActivityDesktopViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.desktop.DesktopActivityFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.desktop.DesktopActivityFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.desktop.DesktopActivityFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    /**
     * For performance reasons, we cannot just disable the activity subject link if the user cannot view the activity - it
     * would require us to read in every activity and claim on the page. Instead we only check permissions if the user actually
     * clicks on the activity subject link (so we only load the claim and activity for the entry that is clicked on)
     */
    function goToActivity(activityView : ActivityDesktopView) {
      if (perm.Claim.view(activityView.Claim) and perm.Activity.view(activityView.Activity)) {
        ClaimWorkplan.go(activityView.Claim)
        if (not gw.api.activity.ActivityUtil.isWorksheetOpen(activityView.Activity.ID)) {
          ActivityDetailForward.goInWorkspace(activityView.Claim, activityView.Activity)
        }
      } else {
        throw new gw.api.util.DisplayableException(DisplayKey.get("Web.DesktopActivities.CannotView"))
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/activities/DesktopActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 106, column 48
    function action_38 () : void {
      goToActivity(ActivityDesktopView)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopActivitiesLV.pcf: line 114, column 25
    function action_42 () : void {
      pcf.Claim.go(ActivityDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopActivitiesLV.pcf: line 121, column 25
    function action_47 () : void {
      ClaimContactDetailPopup.push(ActivityDesktopView.ClaimInsured, ActivityDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopActivitiesLV.pcf: line 114, column 25
    function action_dest_43 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ActivityDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopActivitiesLV.pcf: line 121, column 25
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ActivityDesktopView.ClaimInsured, ActivityDesktopView.Claim)
    }
    
    // 'condition' attribute on ToolbarFlag at DesktopActivitiesLV.pcf: line 33, column 35
    function condition_18 () : java.lang.Boolean {
      return ActivityDesktopView.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityDesktopView.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at DesktopActivitiesLV.pcf: line 36, column 33
    function condition_19 () : java.lang.Boolean {
      return ActivityDesktopView.canSkip() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityDesktopView.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at DesktopActivitiesLV.pcf: line 39, column 37
    function condition_20 () : java.lang.Boolean {
      return ActivityDesktopView.canComplete() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityDesktopView.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at DesktopActivitiesLV.pcf: line 42, column 36
    function condition_21 () : java.lang.Boolean {
      return ActivityDesktopView.canApprove() && !gw.api.activity.ActivityUtil.isWorksheetOpen(ActivityDesktopView.ID)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 92, column 25
    function fontColor_29 () : java.lang.Object {
      return ActivityDesktopView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.pcf: line 84, column 50
    function iconColor_27 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated_Cell) at DesktopActivitiesLV.pcf: line 74, column 63
    function valueRoot_23 () : java.lang.Object {
      return ActivityDesktopView
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated_Cell) at DesktopActivitiesLV.pcf: line 74, column 63
    function value_22 () : java.lang.Boolean {
      return ActivityDesktopView.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopActivitiesLV.pcf: line 84, column 50
    function value_25 () : java.lang.Boolean {
      return ActivityDesktopView.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 92, column 25
    function value_30 () : java.util.Date {
      return ActivityDesktopView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopActivitiesLV.pcf: line 99, column 41
    function value_35 () : typekey.Priority {
      return ActivityDesktopView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopActivitiesLV.pcf: line 106, column 48
    function value_39 () : java.lang.String {
      return ActivityDesktopView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopActivitiesLV.pcf: line 114, column 25
    function value_44 () : java.lang.String {
      return ActivityDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopActivitiesLV.pcf: line 121, column 25
    function value_49 () : java.lang.String {
      return ActivityDesktopView.ClaimInsuredName
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at DesktopActivitiesLV.pcf: line 129, column 25
    function value_52 () : java.lang.String {
      return ActivityDesktopView.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at DesktopActivitiesLV.pcf: line 134, column 56
    function value_55 () : java.lang.Boolean {
      return ActivityDesktopView.ExternallyOwned
    }
    
    // 'value' attribute on TypeKeyCell (id=LOB_Cell) at DesktopActivitiesLV.pcf: line 141, column 25
    function value_58 () : typekey.LOBCode {
      return ActivityDesktopView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at DesktopActivitiesLV.pcf: line 147, column 45
    function value_61 () : typekey.Jurisdiction {
      return ActivityDesktopView.JurisdictionState
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 92, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 92, column 25
    function verifyFontColorIsAllowedType_32 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopActivitiesLV.pcf: line 92, column 25
    function verifyFontColor_33 () : void {
      var __fontColorArg = ActivityDesktopView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_32(__fontColorArg)
    }
    
    property get ActivityDesktopView () : entity.ActivityDesktopView {
      return getIteratedValue(1) as entity.ActivityDesktopView
    }
    
    
  }
  
  
}