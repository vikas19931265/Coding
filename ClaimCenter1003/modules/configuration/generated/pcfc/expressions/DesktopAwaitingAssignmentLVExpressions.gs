package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/pendingassignment/DesktopAwaitingAssignmentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAwaitingAssignmentLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/pendingassignment/DesktopAwaitingAssignmentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAwaitingAssignmentLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopAwaitingAssignmentLV.pcf: line 34, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return FilterSet.MyAssignmentReviewActivitiesFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopAwaitingAssignmentLV.pcf: line 38, column 43
    function filter_2 () : gw.api.filters.IFilter {
      return FilterSet.MyGroupAssignmentReviewActivitiesFilter
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopAwaitingAssignmentLV.pcf: line 57, column 53
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at DesktopAwaitingAssignmentLV.pcf: line 19, column 65
    function initialValue_0 () : gw.api.desktop.DesktopAwaitingAssignmentFilterSet {
      return new gw.api.desktop.DesktopAwaitingAssignmentFilterSet()
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopAwaitingAssignmentLV.pcf: line 64, column 25
    function sortValue_5 (ActivityUnassignedView :  entity.ActivityUnassignedView) : java.lang.Object {
      return ActivityUnassignedView.TargetDate
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopAwaitingAssignmentLV.pcf: line 71, column 25
    function sortValue_6 (ActivityUnassignedView :  entity.ActivityUnassignedView) : java.lang.Object {
      return ActivityUnassignedView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopAwaitingAssignmentLV.pcf: line 77, column 25
    function sortValue_7 (ActivityUnassignedView :  entity.ActivityUnassignedView) : java.lang.Object {
      return ActivityUnassignedView.ClaimInsuredName
    }
    
    // 'value' attribute on TextCell (id=Info_Cell) at DesktopAwaitingAssignmentLV.pcf: line 83, column 25
    function sortValue_8 (ActivityUnassignedView :  entity.ActivityUnassignedView) : java.lang.Object {
      return ActivityUnassignedView.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Assigner_Cell) at DesktopAwaitingAssignmentLV.pcf: line 102, column 25
    function sortValue_9 (ActivityUnassignedView :  entity.ActivityUnassignedView) : java.lang.Object {
      return ActivityUnassignedView.AssignedUserName
    }
    
    // 'value' attribute on RowIterator at DesktopAwaitingAssignmentLV.pcf: line 26, column 89
    function value_45 () : gw.api.database.IQueryBeanResult<entity.ActivityUnassignedView> {
      return ActivityUnassignedViewList
    }
    
    // 'visible' attribute on ToolbarFilterOption at DesktopAwaitingAssignmentLV.pcf: line 38, column 43
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewteam
    }
    
    property get ActivityUnassignedViewList () : gw.api.database.IQueryBeanResult<ActivityUnassignedView> {
      return getRequireValue("ActivityUnassignedViewList", 0) as gw.api.database.IQueryBeanResult<ActivityUnassignedView>
    }
    
    property set ActivityUnassignedViewList ($arg :  gw.api.database.IQueryBeanResult<ActivityUnassignedView>) {
      setRequireValue("ActivityUnassignedViewList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.desktop.DesktopAwaitingAssignmentFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.desktop.DesktopAwaitingAssignmentFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.desktop.DesktopAwaitingAssignmentFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/pendingassignment/DesktopAwaitingAssignmentLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopAwaitingAssignmentLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopAwaitingAssignmentLV.pcf: line 71, column 25
    function action_23 () : void {
      pcf.Claim.go(ActivityUnassignedView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopAwaitingAssignmentLV.pcf: line 77, column 25
    function action_28 () : void {
      ClaimContactDetailPopup.push(ActivityUnassignedView.ClaimInsured, ActivityUnassignedView.Claim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopAwaitingAssignmentLV.pcf: line 71, column 25
    function action_dest_24 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ActivityUnassignedView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopAwaitingAssignmentLV.pcf: line 77, column 25
    function action_dest_29 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ActivityUnassignedView.ClaimInsured, ActivityUnassignedView.Claim)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopAwaitingAssignmentLV.pcf: line 64, column 25
    function fontColor_17 () : java.lang.Object {
      return ActivityUnassignedView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopAwaitingAssignmentLV.pcf: line 57, column 53
    function iconColor_15 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at DesktopAwaitingAssignmentLV.pcf: line 48, column 66
    function valueRoot_11 () : java.lang.Object {
      return ActivityUnassignedView
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at DesktopAwaitingAssignmentLV.pcf: line 48, column 66
    function value_10 () : java.lang.Boolean {
      return ActivityUnassignedView.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopAwaitingAssignmentLV.pcf: line 57, column 53
    function value_13 () : java.lang.Boolean {
      return ActivityUnassignedView.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopAwaitingAssignmentLV.pcf: line 64, column 25
    function value_18 () : java.util.Date {
      return ActivityUnassignedView.TargetDate
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopAwaitingAssignmentLV.pcf: line 71, column 25
    function value_25 () : java.lang.String {
      return ActivityUnassignedView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopAwaitingAssignmentLV.pcf: line 77, column 25
    function value_30 () : java.lang.String {
      return ActivityUnassignedView.ClaimInsuredName
    }
    
    // 'value' attribute on TextCell (id=Info_Cell) at DesktopAwaitingAssignmentLV.pcf: line 83, column 25
    function value_33 () : java.lang.String {
      return ActivityUnassignedView.Subject
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at DesktopAwaitingAssignmentLV.pcf: line 90, column 25
    function value_36 () : java.lang.String {
      return ActivityUnassignedView.Exposure
    }
    
    // 'value' attribute on TextCell (id=AssignedUser_Cell) at DesktopAwaitingAssignmentLV.pcf: line 96, column 25
    function value_39 () : java.lang.String {
      return ActivityUnassignedView.UnassignedActivityUserReview
    }
    
    // 'value' attribute on TextCell (id=Assigner_Cell) at DesktopAwaitingAssignmentLV.pcf: line 102, column 25
    function value_42 () : java.lang.String {
      return ActivityUnassignedView.ActivityAssignedUser
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopAwaitingAssignmentLV.pcf: line 64, column 25
    function verifyFontColorIsAllowedType_20 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopAwaitingAssignmentLV.pcf: line 64, column 25
    function verifyFontColorIsAllowedType_20 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopAwaitingAssignmentLV.pcf: line 64, column 25
    function verifyFontColor_21 () : void {
      var __fontColorArg = ActivityUnassignedView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_20(__fontColorArg)
    }
    
    property get ActivityUnassignedView () : entity.ActivityUnassignedView {
      return getIteratedValue(1) as entity.ActivityUnassignedView
    }
    
    
  }
  
  
}