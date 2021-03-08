package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.GL.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickClaimDV_GLExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.GL.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends QuickClaimDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_179 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Assignment.Target))))
    }
    
    // 'action' attribute on MenuItem (id=Assignee_PickerButton) at AssigneeCell.xml: line 7, column 25
    function action_dest_180 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Assignment.Target))))
    }
    
    // 'value' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function defaultSetter_182 (__VALUE_TO_SET :  java.lang.Object) : void {
      Assignment.Assignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function valueRange_184 () : java.lang.Object {
      return Assignment.Target.SuggestedAssignees
    }
    
    // 'value' attribute on TextCell (id=ForAssign_Cell) at QuickClaimDV.GL.pcf: line 324, column 52
    function valueRoot_177 () : java.lang.Object {
      return Assignment
    }
    
    // 'value' attribute on TextCell (id=ForAssign_Cell) at QuickClaimDV.GL.pcf: line 324, column 52
    function value_176 () : java.lang.String {
      return Assignment.TargetName
    }
    
    // 'value' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function value_181 () : gw.api.assignment.Assignee {
      return Assignment.Assignee
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_185 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRangeIsAllowedType_185 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on AssigneeCell (id=Assignee_Cell) at AssigneeCell.xml: line 7, column 25
    function verifyValueRange_186 () : void {
      var __valueRangeArg = Assignment.Target.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_185(__valueRangeArg)
    }
    
    // 'visible' attribute on AssigneeCell (id=Assignee_Cell) at QuickClaimDV.GL.pcf: line 336, column 57
    function visible_189 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    property get Assignment () : gw.cc.claim.NewClaimAssignmentOption {
      return getIteratedValue(1) as gw.cc.claim.NewClaimAssignmentOption
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/QuickClaimDV.GL.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickClaimDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_10 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_123 () : void {
      AddressBookPickerPopup.push(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_125 () : void {
      if (exposure.Claimant != null) { ClaimContactDetailPopup.push(exposure.Claimant, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_128 () : void {
      ClaimContactDetailPopup.push(exposure.Claimant, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_159 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_7 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_9 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_124 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_129 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(exposure.Claimant, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CommonAssign_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_160 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Claim))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_8 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.GL.pcf: line 195, column 54
    function def_onEnter_109 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at QuickClaimDV.GL.pcf: line 202, column 27
    function def_onEnter_111 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_120 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (exposure.Claimant), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_4 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at QuickClaimDV.GL.pcf: line 195, column 54
    function def_refreshVariables_110 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at QuickClaimDV.GL.pcf: line 202, column 27
    function def_refreshVariables_112 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_121 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (exposure.Claimant), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_5 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.GL.pcf: line 182, column 39
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.GL.pcf: line 188, column 43
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_132 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at QuickClaimDV.GL.pcf: line 249, column 42
    function defaultSetter_142 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at QuickClaimDV.GL.pcf: line 281, column 41
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_163 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignee = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on Choice at QuickClaimDV.GL.pcf: line 289, column 41
    function defaultSetter_173 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CommonAssignment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.GL.pcf: line 44, column 48
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.GL.pcf: line 94, column 38
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LOBCode = (__VALUE_TO_SET as typekey.LOBCode)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.GL.pcf: line 108, column 41
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.GL.pcf: line 116, column 48
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.GL.pcf: line 124, column 36
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.GL.pcf: line 134, column 40
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at QuickClaimDV.GL.pcf: line 140, column 41
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.GL.pcf: line 156, column 48
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.GL.pcf: line 166, column 37
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at QuickClaimDV.GL.pcf: line 171, column 40
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at QuickClaimDV.GL.pcf: line 177, column 46
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.GL.pcf: line 17, column 47
    function initialValue_0 () : gw.api.claim.QuickClaimUIHelper {
      return new gw.api.claim.QuickClaimUIHelper(Claim, Wizard)
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.GL.pcf: line 21, column 24
    function initialValue_1 () : Exposure {
      return quickClaimHelper.GLExposure
    }
    
    // 'initialValue' attribute on Variable at QuickClaimDV.GL.pcf: line 25, column 23
    function initialValue_2 () : Address {
      return quickClaimHelper.ClaimAddress
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_12 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_130 (PickedValue :  Contact) : void {
      var contactType = statictypeof (exposure.Claimant); var result = eval("exposure.Claimant = Claim.resolveContact(exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at QuickClaimDV.GL.pcf: line 234, column 43
    function reflectionValue_127 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at QuickClaimDV.GL.pcf: line 251, column 40
    function reflectionValue_140 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at QuickClaimDV.GL.pcf: line 46, column 40
    function reflectionValue_22 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==null) ? ("") : (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.GL.pcf: line 64, column 44
    function reflectionValue_27 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at QuickClaimDV.GL.pcf: line 72, column 53
    function reflectionValue_32 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'required' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function required_161 () : java.lang.Boolean {
      return Wizard.CommonAssignment
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.GL.pcf: line 149, column 33
    function validationExpression_76 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.GL.pcf: line 166, column 37
    function validationExpression_87 () : java.lang.Object {
      return Claim.ReportedDate == null || Claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_134 () : java.lang.Object {
      return Claim.getRelatedContacts(exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_16 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRange_165 () : java.lang.Object {
      return Claim.SuggestedAssignees
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.GL.pcf: line 108, column 41
    function valueRange_53 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.GL.pcf: line 116, column 48
    function valueRange_60 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at QuickClaimDV.GL.pcf: line 216, column 44
    function valueRoot_114 () : java.lang.Object {
      return exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_Workphone_Input) at QuickClaimDV.GL.pcf: line 263, column 53
    function valueRoot_148 () : java.lang.Object {
      return exposure.Claimant
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_15 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRoot_164 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.GL.pcf: line 61, column 50
    function valueRoot_30 () : java.lang.Object {
      return Claim.reporter
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.GL.pcf: line 79, column 44
    function valueRoot_38 () : java.lang.Object {
      return Claim.Policy
    }
    
    // 'value' attribute on CheckBoxInput (id=Status_IncidentReport_Input) at QuickClaimDV.GL.pcf: line 182, column 39
    function value_101 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=Status_CoverageQuestion_Input) at QuickClaimDV.GL.pcf: line 188, column 43
    function value_105 () : java.lang.Boolean {
      return Claim.CoverageInQuestion
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at QuickClaimDV.GL.pcf: line 216, column 44
    function value_113 () : typekey.LossPartyType {
      return exposure.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_PrimaryCoverage_Input) at QuickClaimDV.GL.pcf: line 221, column 43
    function value_116 () : typekey.CoverageType {
      return exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at QuickClaimDV.GL.pcf: line 237, column 36
    function value_126 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_13 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_131 () : entity.Contact {
      return exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at QuickClaimDV.GL.pcf: line 249, column 42
    function value_141 () : typekey.ClaimantType {
      return exposure.ClaimantType
    }
    
    // 'value' attribute on TextInput (id=Claimant_Workphone_Input) at QuickClaimDV.GL.pcf: line 263, column 53
    function value_147 () : java.lang.String {
      return exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at QuickClaimDV.GL.pcf: line 271, column 62
    function value_152 () : java.lang.String {
      return exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at QuickClaimDV.GL.pcf: line 281, column 41
    function value_155 () : java.lang.Boolean {
      return exposure.OtherCoverage
    }
    
    // 'value' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_162 () : gw.api.assignment.Assignee {
      return Wizard.CommonAssignee
    }
    
    // 'value' attribute on RowIterator at QuickClaimDV.GL.pcf: line 318, column 68
    function value_191 () : gw.cc.claim.NewClaimAssignmentOption[] {
      return Wizard.IndividualAssignments
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at QuickClaimDV.GL.pcf: line 44, column 48
    function value_23 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_WorkPhone_Input) at QuickClaimDV.GL.pcf: line 61, column 50
    function value_29 () : java.lang.String {
      return Claim.reporter.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_Address_Input) at QuickClaimDV.GL.pcf: line 69, column 59
    function value_34 () : java.lang.String {
      return Claim.reporter.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Policy_PolicyNumber_Input) at QuickClaimDV.GL.pcf: line 79, column 44
    function value_37 () : java.lang.String {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Policy_Status_Input) at QuickClaimDV.GL.pcf: line 84, column 43
    function value_40 () : typekey.PolicyStatus {
      return Claim.Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LOBCode_Input) at QuickClaimDV.GL.pcf: line 94, column 38
    function value_43 () : typekey.LOBCode {
      return Claim.LOBCode
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossType_Input) at QuickClaimDV.GL.pcf: line 100, column 39
    function value_47 () : typekey.LossType {
      return Claim.LossType
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.GL.pcf: line 108, column 41
    function value_50 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.GL.pcf: line 116, column 48
    function value_57 () : typekey.ClaimSecurityType {
      return Claim.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_Description_Input) at QuickClaimDV.GL.pcf: line 124, column 36
    function value_64 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at QuickClaimDV.GL.pcf: line 134, column 40
    function value_68 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at QuickClaimDV.GL.pcf: line 140, column 41
    function value_72 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at QuickClaimDV.GL.pcf: line 149, column 33
    function value_77 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.GL.pcf: line 156, column 48
    function value_82 () : java.math.BigDecimal {
      return Claim.Fault
    }
    
    // 'value' attribute on DateInput (id=Notification_ReportedDate_Input) at QuickClaimDV.GL.pcf: line 166, column 37
    function value_88 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at QuickClaimDV.GL.pcf: line 171, column 40
    function value_93 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at QuickClaimDV.GL.pcf: line 177, column 46
    function value_97 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_135 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_135 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_135 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_166 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_166 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.GL.pcf: line 108, column 41
    function verifyValueRangeIsAllowedType_54 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.GL.pcf: line 108, column 41
    function verifyValueRangeIsAllowedType_54 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.GL.pcf: line 108, column 41
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.GL.pcf: line 116, column 48
    function verifyValueRangeIsAllowedType_61 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.GL.pcf: line 116, column 48
    function verifyValueRangeIsAllowedType_61 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_136 () : void {
      var __valueRangeArg = Claim.getRelatedContacts(exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_135(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=CommonAssign_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_167 () : void {
      var __valueRangeArg = Claim.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_166(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_18 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at QuickClaimDV.GL.pcf: line 108, column 41
    function verifyValueRange_55 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at QuickClaimDV.GL.pcf: line 116, column 48
    function verifyValueRange_62 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_61(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_122 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on AssigneeCell (id=Assignee_Cell) at QuickClaimDV.GL.pcf: line 336, column 57
    function visible_175 () : java.lang.Boolean {
      return !Wizard.CommonAssignment
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_3 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_6 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=Notification_AtFaultPercentage_Input) at QuickClaimDV.GL.pcf: line 156, column 48
    function visible_81 () : java.lang.Boolean {
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
    
    property get localAddress () : Address {
      return getVariableValue("localAddress", 0) as Address
    }
    
    property set localAddress ($arg :  Address) {
      setVariableValue("localAddress", 0, $arg)
    }
    
    property get quickClaimHelper () : gw.api.claim.QuickClaimUIHelper {
      return getVariableValue("quickClaimHelper", 0) as gw.api.claim.QuickClaimUIHelper
    }
    
    property set quickClaimHelper ($arg :  gw.api.claim.QuickClaimUIHelper) {
      setVariableValue("quickClaimHelper", 0, $arg)
    }
    
    
  }
  
  
}