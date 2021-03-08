package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.QuickClaimAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickClaimDV_QuickClaimAutoExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.QuickClaimAuto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickClaimDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_6 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_8 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_9 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at AssigneeWidget.xml: line 7, column 25
    function action_90 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))))
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at AssigneeWidget.xml: line 7, column 25
    function action_dest_91 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))))
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_3 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.QuickClaimAuto.pcf: line 175, column 54
    function def_onEnter_86 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at QuickClaimDV.QuickClaimAuto.pcf: line 182, column 27
    function def_onEnter_88 (def :  pcf.EditableVehicleIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_4 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.QuickClaimAuto.pcf: line 175, column 54
    function def_refreshVariables_87 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at QuickClaimDV.QuickClaimAuto.pcf: line 182, column 27
    function def_refreshVariables_89 (def :  pcf.EditableVehicleIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 55, column 48
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 105, column 38
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LOBCode = (__VALUE_TO_SET as typekey.LOBCode)
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 119, column 36
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 129, column 40
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 135, column 41
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 151, column 48
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 158, column 37
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 163, column 39
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 169, column 43
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.QuickClaimAuto.pcf: line 32, column 47
    function initialValue_0 () : gw.api.claim.QuickClaimUIHelper {
      return new gw.api.claim.QuickClaimUIHelper(Claim, Wizard)
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.QuickClaimAuto.pcf: line 36, column 23
    function initialValue_1 () : boolean {
      return quickClaimHelper.InitializedAutoStep
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_11 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at QuickClaimDV.QuickClaimAuto.pcf: line 57, column 40
    function reflectionValue_21 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==null) ? ("") : (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.QuickClaimAuto.pcf: line 75, column 44
    function reflectionValue_26 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.QuickClaimAuto.pcf: line 83, column 53
    function reflectionValue_31 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'required' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function required_92 () : java.lang.Boolean {
      return Wizard.CommonAssignment
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 144, column 33
    function validationExpression_61 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 158, column 37
    function validationExpression_72 () : java.lang.Object {
      return Claim.ReportedDate == null || Claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_15 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function valueRange_96 () : java.lang.Object {
      return Claim.SuggestedAssignees
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_14 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 72, column 50
    function valueRoot_29 () : java.lang.Object {
      return Claim.reporter
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 90, column 44
    function valueRoot_37 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function valueRoot_95 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_12 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 55, column 48
    function value_22 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 72, column 50
    function value_28 () : java.lang.String {
      return Claim.reporter.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_Address_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 80, column 59
    function value_33 () : java.lang.String {
      return Claim.reporter.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 90, column 44
    function value_36 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Policy_Status_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 95, column 43
    function value_39 () : typekey.PolicyStatus {
      return Claim.Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 105, column 38
    function value_42 () : typekey.LOBCode {
      return Claim.LOBCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 111, column 39
    function value_46 () : typekey.LossType {
      return Claim.LossType
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 119, column 36
    function value_49 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 129, column 40
    function value_53 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 135, column 41
    function value_57 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 144, column 33
    function value_62 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 151, column 48
    function value_67 () : java.math.BigDecimal {
      return Claim.Fault
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 158, column 37
    function value_73 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 163, column 39
    function value_78 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 169, column 43
    function value_82 () : java.lang.Boolean {
      return Claim.CoverageInQuestion
    }
    
    // 'value' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function value_93 () : gw.api.assignment.Assignee {
      return Wizard.CommonAssignee
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_97 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_97 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_17 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on AssigneeInput (id=CommonAssign_Input) at AssigneeWidget.xml: line 7, column 25
    function verifyValueRange_98 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_97(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_2 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_5 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.QuickClaimAuto.pcf: line 151, column 48
    function visible_66 () : java.lang.Boolean {
      return  Claim.FaultRating == TC_1 
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
    
    property get initialized () : boolean {
      return getVariableValue("initialized", 0) as java.lang.Boolean
    }
    
    property set initialized ($arg :  boolean) {
      setVariableValue("initialized", 0, $arg)
    }
    
    property get quickClaimHelper () : gw.api.claim.QuickClaimUIHelper {
      return getVariableValue("quickClaimHelper", 0) as gw.api.claim.QuickClaimUIHelper
    }
    
    property set quickClaimHelper ($arg :  gw.api.claim.QuickClaimUIHelper) {
      setVariableValue("quickClaimHelper", 0, $arg)
    }
    
    
  }
  
  
}