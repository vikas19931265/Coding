package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newclaim/NewClaimWizard_AssignDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimWizard_AssignDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newclaim/NewClaimWizard_AssignDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewClaimWizard_AssignDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_20 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Assignment.Target))))
    }
    
    // 'action' attribute on MenuItem (id=Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_dest_21 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Assignment.Target))))
    }
    
    // 'value' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      Assignment.Assignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function valueRange_25 () : java.lang.Object {
      return Assignment.Target.SuggestedAssignees
    }
    
    // 'value' attribute on TextCell (id=ForName_Cell) at NewClaimWizard_AssignDV.pcf: line 54, column 50
    function valueRoot_18 () : java.lang.Object {
      return Assignment
    }
    
    // 'value' attribute on TextCell (id=ForName_Cell) at NewClaimWizard_AssignDV.pcf: line 54, column 50
    function value_17 () : java.lang.String {
      return Assignment.TargetName
    }
    
    // 'value' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function value_22 () : gw.api.assignment.Assignee {
      return Assignment.Assignee
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRange_27 () : void {
      var __valueRangeArg = Assignment.Target.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'visible' attribute on AssigneeCell (id=Assignee_Cell) at NewClaimWizard_AssignDV.pcf: line 66, column 55
    function visible_30 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    property get Assignment () : gw.cc.claim.NewClaimAssignmentOption {
      return getIteratedValue(1) as gw.cc.claim.NewClaimAssignmentOption
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newclaim/NewClaimWizard_AssignDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimWizard_AssignDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at AssigneeWidget.xml: line 7, column 25
    function action_0 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))))
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at AssigneeWidget.xml: line 7, column 25
    function action_dest_1 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))))
    }
    
    // 'value' attribute on Choice (id=CommonAssignChoice) at NewClaimWizard_AssignDV.pcf: line 18, column 39
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'required' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function required_2 () : java.lang.Boolean {
      return Wizard.CommonAssignment
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function valueRange_6 () : java.lang.Object {
      return Claim.SuggestedAssignees
    }
    
    // 'value' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function valueRoot_5 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function value_3 () : gw.api.assignment.Assignee {
      return Wizard.CommonAssignee
    }
    
    // 'value' attribute on RowIterator at NewClaimWizard_AssignDV.pcf: line 48, column 66
    function value_32 () : gw.cc.claim.NewClaimAssignmentOption[] {
      return Wizard.IndividualAssignments
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function verifyValueRange_8 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    // 'visible' attribute on AssigneeCell (id=Assignee_Cell) at NewClaimWizard_AssignDV.pcf: line 66, column 55
    function visible_16 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    
  }
  
  
}