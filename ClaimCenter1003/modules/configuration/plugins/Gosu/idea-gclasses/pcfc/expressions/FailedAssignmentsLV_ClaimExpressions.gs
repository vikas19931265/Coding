package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Claim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FailedAssignmentsLV_ClaimExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Claim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FailedAssignmentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at FailedAssignmentsLV.Claim.pcf: line 28, column 43
    function iconColor_0 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Flagged_Cell) at FailedAssignmentsLV.Claim.pcf: line 28, column 43
    function sortValue_1 (Claim :  Claim) : java.lang.Object {
      return Claim.Flagged
    }
    
    // 'value' attribute on RowIterator at FailedAssignmentsLV.Claim.pcf: line 17, column 39
    function value_21 () : entity.Assignable[] {
      return AssignmentPopup.getFailedAssignables()
    }
    
    // 'type' attribute on RowIterator at FailedAssignmentsLV.Claim.pcf: line 17, column 39
    function verifyIteratorType_22 () : void {
      var entry : entity.Assignable = null
      var typedEntry : Claim
      // If this cast fails to compile then the type specified by the 'type' attribute on
      // 'RowIterator' is not compatible with the member type of the 'valueType' attribute
      typedEntry = entry as Claim
    }
    
    property get AssignmentPopup () : gw.api.assignment.AssignmentPopup {
      return getRequireValue("AssignmentPopup", 0) as gw.api.assignment.AssignmentPopup
    }
    
    property set AssignmentPopup ($arg :  gw.api.assignment.AssignmentPopup) {
      setRequireValue("AssignmentPopup", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/assignment/FailedAssignmentsLV.Claim.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FailedAssignmentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Flagged_Cell) at FailedAssignmentsLV.Claim.pcf: line 28, column 43
    function iconColor_4 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at FailedAssignmentsLV.Claim.pcf: line 40, column 46
    function valueRoot_10 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at FailedAssignmentsLV.Claim.pcf: line 28, column 43
    function valueRoot_3 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at FailedAssignmentsLV.Claim.pcf: line 46, column 39
    function value_12 () : entity.Contact {
      return Claim.InsuredDenorm
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at FailedAssignmentsLV.Claim.pcf: line 51, column 35
    function value_15 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at FailedAssignmentsLV.Claim.pcf: line 57, column 43
    function value_18 () : typekey.ClaimState {
      return Claim.State
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged_Cell) at FailedAssignmentsLV.Claim.pcf: line 28, column 43
    function value_2 () : java.lang.Boolean {
      return Claim.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber_Cell) at FailedAssignmentsLV.Claim.pcf: line 35, column 25
    function value_6 () : java.lang.String {
      return Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=PolicyID_Cell) at FailedAssignmentsLV.Claim.pcf: line 40, column 46
    function value_9 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    property get Claim () : Claim {
      return getIteratedValue(1) as Claim
    }
    
    
  }
  
  
}