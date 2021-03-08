package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.TravelBaggageOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickClaimDV_TravelBaggageOnlyExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.TravelBaggageOnly.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickClaimDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_4 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_6 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_7 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_78 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_79 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_8 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_1 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.TravelBaggageOnly.pcf: line 156, column 26
    function def_onEnter_74 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=EditableBaggageIncidentsLV) at QuickClaimDV.TravelBaggageOnly.pcf: line 162, column 27
    function def_onEnter_76 (def :  pcf.EditableBaggageIncidentsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_2 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.TravelBaggageOnly.pcf: line 156, column 26
    function def_refreshVariables_75 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=EditableBaggageIncidentsLV) at QuickClaimDV.TravelBaggageOnly.pcf: line 162, column 27
    function def_refreshVariables_77 (def :  pcf.EditableBaggageIncidentsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 50, column 48
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 100, column 38
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LOBCode = (__VALUE_TO_SET as typekey.LOBCode)
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 114, column 36
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 124, column 40
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 138, column 37
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 143, column 39
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 149, column 43
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_9 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at QuickClaimDV.TravelBaggageOnly.pcf: line 52, column 40
    function reflectionValue_19 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==null) ? ("") : (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.TravelBaggageOnly.pcf: line 70, column 44
    function reflectionValue_24 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.TravelBaggageOnly.pcf: line 78, column 53
    function reflectionValue_29 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'required' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function required_80 () : java.lang.Boolean {
      return Wizard.CommonAssignment
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 131, column 33
    function validationExpression_55 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 138, column 37
    function validationExpression_60 () : java.lang.Object {
      return Claim.ReportedDate == null || Claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_13 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRange_84 () : java.lang.Object {
      return Claim.SuggestedAssignees
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_12 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 67, column 50
    function valueRoot_27 () : java.lang.Object {
      return Claim.reporter
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 85, column 44
    function valueRoot_35 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRoot_83 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_10 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 50, column 48
    function value_20 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 67, column 50
    function value_26 () : java.lang.String {
      return Claim.reporter.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_Address_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 75, column 59
    function value_31 () : java.lang.String {
      return Claim.reporter.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 85, column 44
    function value_34 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Policy_Status_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 90, column 43
    function value_37 () : typekey.PolicyStatus {
      return Claim.Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 100, column 38
    function value_40 () : typekey.LOBCode {
      return Claim.LOBCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 106, column 39
    function value_44 () : typekey.LossType {
      return Claim.LossType
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 114, column 36
    function value_47 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 124, column 40
    function value_51 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 131, column 33
    function value_56 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 138, column 37
    function value_61 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 143, column 39
    function value_66 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.TravelBaggageOnly.pcf: line 149, column 43
    function value_70 () : java.lang.Boolean {
      return Claim.CoverageInQuestion
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_81 () : gw.api.assignment.Assignee {
      return Wizard.CommonAssignee
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_85 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_85 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_86 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_85(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_0 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_3 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
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
    
    property get relatedTripRU () : TripRU {
      return getVariableValue("relatedTripRU", 0) as TripRU
    }
    
    property set relatedTripRU ($arg :  TripRU) {
      setVariableValue("relatedTripRU", 0, $arg)
    }
    
    
  }
  
  
}