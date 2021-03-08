package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FailedAssignmentsLV_ActivityExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FailedAssignmentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at FailedAssignmentsLV.Activity.pcf: line 35, column 39
    function iconColor_0 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FailedAssignmentsLV.Activity.pcf: line 42, column 25
    function sortValue_1 (Activity :  Activity) : java.lang.Object {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FailedAssignmentsLV.Activity.pcf: line 48, column 41
    function sortValue_2 (Activity :  Activity) : java.lang.Object {
      return Activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FailedAssignmentsLV.Activity.pcf: line 52, column 37
    function sortValue_3 (Activity :  Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at FailedAssignmentsLV.Activity.pcf: line 58, column 25
    function sortValue_4 (Activity :  Activity) : java.lang.Object {
      return Activity.Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FailedAssignmentsLV.Activity.pcf: line 63, column 39
    function sortValue_5 (Activity :  Activity) : java.lang.Object {
      return Activity.Claim.InsuredDenorm
    }
    
    // 'value' attribute on RowIterator at FailedAssignmentsLV.Activity.pcf: line 17, column 39
    function value_31 () : entity.Assignable[] {
      return AssignmentPopup.getFailedAssignables()
    }
    
    // 'type' attribute on RowIterator at FailedAssignmentsLV.Activity.pcf: line 17, column 39
    function verifyIteratorType_32 () : void {
      var entry : entity.Assignable = null
      var typedEntry : Activity
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as Activity
    }
    
    property get AssignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("AssignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set AssignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("AssignmentPopup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Activity.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FailedAssignmentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FailedAssignmentsLV.Activity.pcf: line 42, column 25
    function fontColor_13 () : java.lang.Object {
      return Activity.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at FailedAssignmentsLV.Activity.pcf: line 35, column 39
    function iconColor_11 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at FailedAssignmentsLV.Activity.pcf: line 58, column 25
    function valueRoot_26 () : java.lang.Object {
      return Activity.Claim
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at FailedAssignmentsLV.Activity.pcf: line 26, column 52
    function valueRoot_7 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at FailedAssignmentsLV.Activity.pcf: line 42, column 25
    function value_14 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at FailedAssignmentsLV.Activity.pcf: line 48, column 41
    function value_19 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at FailedAssignmentsLV.Activity.pcf: line 52, column 37
    function value_22 () : java.lang.String {
      return Activity.Subject
    }
    
    // 'value' attribute on TextCell (id=CaseID_Cell) at FailedAssignmentsLV.Activity.pcf: line 58, column 25
    function value_25 () : java.lang.String {
      return Activity.Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FailedAssignmentsLV.Activity.pcf: line 63, column 39
    function value_28 () : entity.Contact {
      return Activity.Claim.InsuredDenorm
    }
    
    // 'value' attribute on BooleanRadioCell (id=NewActivity_Cell) at FailedAssignmentsLV.Activity.pcf: line 26, column 52
    function value_6 () : java.lang.Boolean {
      return Activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at FailedAssignmentsLV.Activity.pcf: line 35, column 39
    function value_9 () : java.lang.Boolean {
      return Activity.Escalated
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FailedAssignmentsLV.Activity.pcf: line 42, column 25
    function verifyFontColorIsAllowedType_16 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FailedAssignmentsLV.Activity.pcf: line 42, column 25
    function verifyFontColorIsAllowedType_16 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at FailedAssignmentsLV.Activity.pcf: line 42, column 25
    function verifyFontColor_17 () : void {
      var __fontColorArg = Activity.Overdue ? gw.api.web.color.GWColor.THEME_PROGRESS_OVERDUE : null
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_16(__fontColorArg)
    }
    
    property get Activity () : Activity {
      return getIteratedValue(1) as Activity
    }
    
    
  }
  
  
}