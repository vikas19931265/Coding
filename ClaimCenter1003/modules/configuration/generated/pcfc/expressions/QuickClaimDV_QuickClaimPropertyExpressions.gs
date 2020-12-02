package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.QuickClaimProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickClaimDV_QuickClaimPropertyExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.QuickClaimProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends QuickClaimDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_182 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Assignment.Target))))
    }
    
    // 'action' attribute on MenuItem (id=Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_dest_183 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Assignment.Target))))
    }
    
    // 'value' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function defaultSetter_185 (__VALUE_TO_SET :  java.lang.Object) : void {
      Assignment.Assignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function valueRange_187 () : java.lang.Object {
      return Assignment.Target.SuggestedAssignees
    }
    
    // 'value' attribute on TextCell (id=ForName_Cell) at QuickClaimDV.QuickClaimProperty.pcf: line 337, column 52
    function valueRoot_180 () : java.lang.Object {
      return Assignment
    }
    
    // 'value' attribute on TextCell (id=ForName_Cell) at QuickClaimDV.QuickClaimProperty.pcf: line 337, column 52
    function value_179 () : java.lang.String {
      return Assignment.TargetName
    }
    
    // 'value' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function value_184 () : gw.api.assignment.Assignee {
      return Assignment.Assignee
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_188 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_188 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRange_189 () : void {
      var __valueRangeArg = Assignment.Target.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_188(__valueRangeArg)
    }
    
    // 'visible' attribute on AssigneeCell (id=Assignee_Cell) at QuickClaimDV.QuickClaimProperty.pcf: line 349, column 57
    function visible_192 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    property get Assignment () : gw.cc.claim.NewClaimAssignmentOption {
      return getIteratedValue(1) as gw.cc.claim.NewClaimAssignmentOption
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.QuickClaimProperty.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickClaimDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_10 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_11 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_124 () : void {
      AddressBookPickerPopup.push(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_126 () : void {
      if (exposure.Claimant != null) { ClaimContactDetailPopup.push(exposure.Claimant, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_129 () : void {
      ClaimContactDetailPopup.push(exposure.Claimant, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_162 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_8 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_125 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_130 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(exposure.Claimant, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_163 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_9 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.QuickClaimProperty.pcf: line 199, column 54
    function def_onEnter_110 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at QuickClaimDV.QuickClaimProperty.pcf: line 207, column 27
    function def_onEnter_112 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_121 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (exposure.Claimant), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=IncidentLocation) at QuickClaimDV.QuickClaimProperty.pcf: line 293, column 32
    function def_onEnter_160 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(incidentAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_5 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.QuickClaimProperty.pcf: line 199, column 54
    function def_refreshVariables_111 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at QuickClaimDV.QuickClaimProperty.pcf: line 207, column 27
    function def_refreshVariables_113 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_122 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (exposure.Claimant), null, Claim)
    }
    
    // 'def' attribute on InputSetRef (id=IncidentLocation) at QuickClaimDV.QuickClaimProperty.pcf: line 293, column 32
    function def_refreshVariables_161 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(incidentAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_6 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 188, column 39
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 194, column 43
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_133 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 254, column 42
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 287, column 41
    function defaultSetter_157 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_166 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on Choice at QuickClaimDV.QuickClaimProperty.pcf: line 302, column 41
    function defaultSetter_176 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 50, column 48
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 100, column 38
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LOBCode = (__VALUE_TO_SET as typekey.LOBCode)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 114, column 41
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 122, column 48
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 130, column 36
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 140, column 40
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 146, column 41
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 162, column 48
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 172, column 37
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 177, column 40
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 183, column 46
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.QuickClaimProperty.pcf: line 18, column 47
    function initialValue_0 () : gw.api.claim.QuickClaimUIHelper {
      return new gw.api.claim.QuickClaimUIHelper(Claim, Wizard)
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.QuickClaimProperty.pcf: line 22, column 24
    function initialValue_1 () : Exposure {
      return quickClaimHelper.PropertyExposure
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.QuickClaimProperty.pcf: line 26, column 30
    function initialValue_2 () : PolicyLocation {
      return exposure.PolicyLocation
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.QuickClaimProperty.pcf: line 31, column 45
    function initialValue_3 () : gw.api.address.CCAddressOwner {
      return new gw.api.address.FixedPropertyAddressOwner(exposure.FixedPropertyIncident, newPolicyLocation)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_13 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_131 (PickedValue :  Contact) : void {
      var contactType = statictypeof (exposure.Claimant); var result = eval("exposure.Claimant = Claim.resolveContact(exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 239, column 43
    function reflectionValue_128 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at QuickClaimDV.QuickClaimProperty.pcf: line 256, column 40
    function reflectionValue_141 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at QuickClaimDV.QuickClaimProperty.pcf: line 52, column 40
    function reflectionValue_23 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==null) ? ("") : (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.QuickClaimProperty.pcf: line 70, column 44
    function reflectionValue_28 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.QuickClaimProperty.pcf: line 78, column 53
    function reflectionValue_33 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'required' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function required_164 () : java.lang.Boolean {
      return Wizard.CommonAssignment
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 155, column 33
    function validationExpression_77 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 172, column 37
    function validationExpression_88 () : java.lang.Object {
      return Claim.ReportedDate == null || Claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_135 () : java.lang.Object {
      return Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRange_168 () : java.lang.Object {
      return Claim.SuggestedAssignees
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_17 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 114, column 41
    function valueRange_54 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 122, column 48
    function valueRange_61 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 221, column 44
    function valueRoot_115 () : java.lang.Object {
      return exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_Workphone_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 268, column 53
    function valueRoot_149 () : java.lang.Object {
      return exposure.Claimant
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_16 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRoot_167 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 67, column 50
    function valueRoot_31 () : java.lang.Object {
      return Claim.reporter
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 85, column 44
    function valueRoot_39 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 188, column 39
    function value_102 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 194, column 43
    function value_106 () : java.lang.Boolean {
      return Claim.CoverageInQuestion
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 221, column 44
    function value_114 () : typekey.LossPartyType {
      return exposure.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_PrimaryCoverage_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 226, column 43
    function value_117 () : typekey.CoverageType {
      return exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 242, column 36
    function value_127 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_132 () : entity.Contact {
      return exposure.Claimant
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_14 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 254, column 42
    function value_142 () : typekey.ClaimantType {
      return exposure.ClaimantType
    }
    
    // 'value' attribute on TextInput (id=Claimant_Workphone_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 268, column 53
    function value_148 () : java.lang.String {
      return exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 277, column 62
    function value_153 () : java.lang.String {
      return exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 287, column 41
    function value_156 () : java.lang.Boolean {
      return exposure.OtherCoverage
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_165 () : gw.api.assignment.Assignee {
      return Wizard.CommonAssignee
    }
    
    // 'value' attribute on RowIterator at QuickClaimDV.QuickClaimProperty.pcf: line 331, column 68
    function value_194 () : gw.cc.claim.NewClaimAssignmentOption[] {
      return Wizard.IndividualAssignments
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 50, column 48
    function value_24 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 67, column 50
    function value_30 () : java.lang.String {
      return Claim.reporter.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_Address_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 75, column 59
    function value_35 () : java.lang.String {
      return Claim.reporter.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 85, column 44
    function value_38 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Policy_Status_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 90, column 43
    function value_41 () : typekey.PolicyStatus {
      return Claim.Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 100, column 38
    function value_44 () : typekey.LOBCode {
      return Claim.LOBCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 106, column 39
    function value_48 () : typekey.LossType {
      return Claim.LossType
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 114, column 41
    function value_51 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 122, column 48
    function value_58 () : typekey.ClaimSecurityType {
      return Claim.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 130, column 36
    function value_65 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 140, column 40
    function value_69 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 146, column 41
    function value_73 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 155, column 33
    function value_78 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 162, column 48
    function value_83 () : java.math.BigDecimal {
      return Claim.Fault
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 172, column 37
    function value_89 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 177, column 40
    function value_94 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 183, column 46
    function value_98 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_136 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_136 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_136 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_169 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_169 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 114, column 41
    function verifyValueRangeIsAllowedType_55 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 114, column 41
    function verifyValueRangeIsAllowedType_55 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 114, column 41
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 122, column 48
    function verifyValueRangeIsAllowedType_62 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 122, column 48
    function verifyValueRangeIsAllowedType_62 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_137 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_136(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_170 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_169(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_19 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 114, column 41
    function verifyValueRange_56 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 122, column 48
    function verifyValueRange_63 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_62(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_123 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on AssigneeCell (id=Assignee_Cell) at QuickClaimDV.QuickClaimProperty.pcf: line 349, column 57
    function visible_178 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_4 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_7 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.QuickClaimProperty.pcf: line 162, column 48
    function visible_82 () : java.lang.Boolean {
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
    
    property get exposure () : Exposure {
      return getVariableValue("exposure", 0) as Exposure
    }
    
    property set exposure ($arg :  Exposure) {
      setVariableValue("exposure", 0, $arg)
    }
    
    property get incidentAddressOwner () : gw.api.address.CCAddressOwner {
      return getVariableValue("incidentAddressOwner", 0) as gw.api.address.CCAddressOwner
    }
    
    property set incidentAddressOwner ($arg :  gw.api.address.CCAddressOwner) {
      setVariableValue("incidentAddressOwner", 0, $arg)
    }
    
    property get newPolicyLocation () : PolicyLocation {
      return getVariableValue("newPolicyLocation", 0) as PolicyLocation
    }
    
    property set newPolicyLocation ($arg :  PolicyLocation) {
      setVariableValue("newPolicyLocation", 0, $arg)
    }
    
    property get quickClaimHelper () : gw.api.claim.QuickClaimUIHelper {
      return getVariableValue("quickClaimHelper", 0) as gw.api.claim.QuickClaimUIHelper
    }
    
    property set quickClaimHelper ($arg :  gw.api.claim.QuickClaimUIHelper) {
      setVariableValue("quickClaimHelper", 0, $arg)
    }
    
    
  }
  
  
}