package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/queues/DesktopQueuedActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopQueuedActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/queues/DesktopQueuedActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopQueuedActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopQueuedActivitiesLV.pcf: line 46, column 50
    function iconColor_0 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on DateCell (id=AssignmentDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 53, column 25
    function sortValue_1 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.AssignmentDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 61, column 25
    function sortValue_2 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopQueuedActivitiesLV.pcf: line 67, column 41
    function sortValue_3 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopQueuedActivitiesLV.pcf: line 74, column 48
    function sortValue_4 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopQueuedActivitiesLV.pcf: line 82, column 25
    function sortValue_5 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopQueuedActivitiesLV.pcf: line 89, column 25
    function sortValue_6 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ClaimInsuredName
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at DesktopQueuedActivitiesLV.pcf: line 102, column 56
    function sortValue_7 (ActivityDesktopView :  entity.ActivityDesktopView) : java.lang.Object {
      return ActivityDesktopView.ExternallyOwned
    }
    
    // 'value' attribute on RowIterator at DesktopQueuedActivitiesLV.pcf: line 24, column 87
    function value_48 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return ActivityDesktopViewList
    }
    
    property get ActivityDesktopViewList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("ActivityDesktopViewList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set ActivityDesktopViewList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("ActivityDesktopViewList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/queues/DesktopQueuedActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopQueuedActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at DesktopQueuedActivitiesLV.pcf: line 74, column 48
    function action_27 () : void {
      ClaimWorkplan.go(ActivityDesktopView.Claim); ActivityDetailForward.goInWorkspace(ActivityDesktopView.Claim, ActivityDesktopView.Activity)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopQueuedActivitiesLV.pcf: line 82, column 25
    function action_31 () : void {
      pcf.Claim.go(ActivityDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopQueuedActivitiesLV.pcf: line 89, column 25
    function action_36 () : void {
      ClaimContactDetailPopup.push(ActivityDesktopView.ClaimInsured, ActivityDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=CaseID_Cell) at DesktopQueuedActivitiesLV.pcf: line 82, column 25
    function action_dest_32 () : pcf.api.Destination {
      return pcf.Claim.createDestination(ActivityDesktopView.Claim)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopQueuedActivitiesLV.pcf: line 89, column 25
    function action_dest_37 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(ActivityDesktopView.ClaimInsured, ActivityDesktopView.Claim)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at DesktopQueuedActivitiesLV.pcf: line 24, column 87
    function checkBoxVisible_47 () : java.lang.Boolean {
      return perm.Activity.pickfromqueue
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 61, column 25
    function fontColor_18 () : java.lang.Object {
      return ActivityDesktopView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopQueuedActivitiesLV.pcf: line 46, column 50
    function iconColor_13 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at DesktopQueuedActivitiesLV.pcf: line 36, column 63
    function valueRoot_9 () : java.lang.Object {
      return ActivityDesktopView
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at DesktopQueuedActivitiesLV.pcf: line 46, column 50
    function value_11 () : java.lang.Boolean {
      return ActivityDesktopView.Escalated
    }
    
    // 'value' attribute on DateCell (id=AssignmentDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 53, column 25
    function value_15 () : java.util.Date {
      return ActivityDesktopView.AssignmentDate
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 61, column 25
    function value_19 () : java.util.Date {
      return ActivityDesktopView.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at DesktopQueuedActivitiesLV.pcf: line 67, column 41
    function value_24 () : typekey.Priority {
      return ActivityDesktopView.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at DesktopQueuedActivitiesLV.pcf: line 74, column 48
    function value_28 () : java.lang.String {
      return ActivityDesktopView.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at DesktopQueuedActivitiesLV.pcf: line 82, column 25
    function value_33 () : java.lang.String {
      return ActivityDesktopView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopQueuedActivitiesLV.pcf: line 89, column 25
    function value_38 () : java.lang.String {
      return ActivityDesktopView.ClaimInsuredName
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at DesktopQueuedActivitiesLV.pcf: line 97, column 25
    function value_41 () : java.lang.String {
      return ActivityDesktopView.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=ExternallyOwned_Cell) at DesktopQueuedActivitiesLV.pcf: line 102, column 56
    function value_44 () : java.lang.Boolean {
      return ActivityDesktopView.ExternallyOwned
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at DesktopQueuedActivitiesLV.pcf: line 36, column 63
    function value_8 () : java.lang.Boolean {
      return ActivityDesktopView.UpdatedSinceLastViewed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 61, column 25
    function verifyFontColorIsAllowedType_21 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 61, column 25
    function verifyFontColorIsAllowedType_21 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at DesktopQueuedActivitiesLV.pcf: line 61, column 25
    function verifyFontColor_22 () : void {
      var __fontColorArg = ActivityDesktopView.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_21(__fontColorArg)
    }
    
    property get ActivityDesktopView () : entity.ActivityDesktopView {
      return getIteratedValue(1) as entity.ActivityDesktopView
    }
    
    
  }
  
  
}