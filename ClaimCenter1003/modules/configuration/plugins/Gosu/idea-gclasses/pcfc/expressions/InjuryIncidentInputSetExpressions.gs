package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/InjuryIncidentInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InjuryIncidentInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/InjuryIncidentInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryIncidentInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_41 () : void {
      AddressBookPickerPopup.push(statictypeof (injury.PrimaryDoctor), injury.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_43 () : void {
      if (injury.PrimaryDoctor != null) { ClaimContactDetailPopup.push(injury.PrimaryDoctor, injury.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_45 () : void {
      ClaimContactDetailPopup.push(injury.PrimaryDoctor, injury.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_42 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (injury.PrimaryDoctor), injury.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_46 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(injury.PrimaryDoctor, injury.Claim)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=MakeFirstButton) at InjuryIncidentInputSet.pcf: line 63, column 109
    function checkedRowAction_22 (element :  entity.BodyPartDetails, CheckedValue :  entity.BodyPartDetails) : void {
      injury.FirstBodyPart = CheckedValue
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=Make_Primary) at InjuryIncidentInputSet.pcf: line 132, column 87
    function checkedRowAction_74 (element :  entity.InjuryDiagnosis, CheckedValue :  entity.InjuryDiagnosis) : void {
      injury.setPrimaryDiagnosisToFalse(); CheckedValue.IsPrimary = true
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=Reconfirmed_Diagnosis) at InjuryIncidentInputSet.pcf: line 139, column 112
    function checkedRowAction_75 (element :  entity.InjuryDiagnosis, CheckedValue :  entity.InjuryDiagnosis) : void {
      CheckedValue.reconfirmDiagnosis()
    }
    
    // 'confirmMessage' attribute on CheckedValuesToolbarButton (id=Make_Primary) at InjuryIncidentInputSet.pcf: line 132, column 87
    function confirmMessage_72 () : java.lang.String {
      return DisplayKey.get("NVV.Claim.MedCaseMgrDetails.MedicalDiagnosis.MakePrimary.Confirm",  injury.InjuryDiagnoses.firstWhere( \ i -> i.IsPrimary == true ).ICDCode.Code + " : " +  injury.InjuryDiagnoses.firstWhere( \ i -> i.IsPrimary == true ).ICDCode.CodeDesc)
    }
    
    // 'def' attribute on ListViewInput at InjuryIncidentInputSet.pcf: line 51, column 25
    function def_onEnter_23 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.onEnter(injury, false)
    }
    
    // 'def' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_38 (def :  pcf.ClaimNewDoctorOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (injury.PrimaryDoctor), null, injury.Claim)
    }
    
    // 'def' attribute on ListViewInput (id=MedicalDiagnosisLVInput) at InjuryIncidentInputSet.pcf: line 118, column 25
    function def_onEnter_76 (def :  pcf.MedicalDiagnosisLV) : void {
      def.onEnter(injury, true)
    }
    
    // 'def' attribute on ListViewInput (id=NotesLVInput) at InjuryIncidentInputSet.pcf: line 149, column 72
    function def_onEnter_79 (def :  pcf.NotesLV) : void {
      def.onEnter(getNotes())
    }
    
    // 'def' attribute on InputSetRef at InjuryIncidentInputSet.pcf: line 166, column 167
    function def_onEnter_85 (def :  pcf.OtherServicesLVInputSet) : void {
      def.onEnter(injury.Claim, injury, injury != null ? injury.ServiceRequests.toSet() : new java.util.HashSet<ServiceRequest>(), null, {})
    }
    
    // 'def' attribute on ListViewInput at InjuryIncidentInputSet.pcf: line 51, column 25
    function def_refreshVariables_24 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.refreshVariables(injury, false)
    }
    
    // 'def' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_39 (def :  pcf.ClaimNewDoctorOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (injury.PrimaryDoctor), null, injury.Claim)
    }
    
    // 'def' attribute on ListViewInput (id=MedicalDiagnosisLVInput) at InjuryIncidentInputSet.pcf: line 118, column 25
    function def_refreshVariables_77 (def :  pcf.MedicalDiagnosisLV) : void {
      def.refreshVariables(injury, true)
    }
    
    // 'def' attribute on ListViewInput (id=NotesLVInput) at InjuryIncidentInputSet.pcf: line 149, column 72
    function def_refreshVariables_80 (def :  pcf.NotesLV) : void {
      def.refreshVariables(getNotes())
    }
    
    // 'def' attribute on InputSetRef at InjuryIncidentInputSet.pcf: line 166, column 167
    function def_refreshVariables_86 (def :  pcf.OtherServicesLVInputSet) : void {
      def.refreshVariables(injury.Claim, injury, injury != null ? injury.ServiceRequests.toSet() : new java.util.HashSet<ServiceRequest>(), null, {})
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryDescription_Input) at InjuryIncidentInputSet.pcf: line 33, column 35
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryInjuryType_Input) at InjuryIncidentInputSet.pcf: line 39, column 39
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.GeneralInjuryType = (__VALUE_TO_SET as typekey.InjuryType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DetailedInjuryType_Input) at InjuryIncidentInputSet.pcf: line 45, column 47
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.DetailedInjuryType = (__VALUE_TO_SET as typekey.DetailedInjuryType)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at InjuryIncidentInputSet.pcf: line 20, column 42
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.LossParty = (__VALUE_TO_SET as typekey.LossPartyType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReceivedTreatment_Input) at InjuryIncidentInputSet.pcf: line 72, column 25
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      treatment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=TreatmentType_Input) at InjuryIncidentInputSet.pcf: line 82, column 28
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.MedicalTreatmentType = (__VALUE_TO_SET as typekey.MedicalTreatmentType)
    }
    
    // 'value' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.PrimaryDoctor = (__VALUE_TO_SET as entity.Doctor)
    }
    
    // 'value' attribute on TypeKeyInput (id=Severity_Input) at InjuryIncidentInputSet.pcf: line 27, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.Severity = (__VALUE_TO_SET as typekey.SeverityType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DisabledDueToAccident_Input) at InjuryIncidentInputSet.pcf: line 98, column 50
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.DisabledDueToAccident = (__VALUE_TO_SET as typekey.DisabledDueToAccident)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AmbulanceUsed_Input) at InjuryIncidentInputSet.pcf: line 103, column 37
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.AmbulanceUsed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=LostWages_Input) at InjuryIncidentInputSet.pcf: line 108, column 32
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      injury.LostWages = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Severity_Input) at InjuryIncidentInputSet.pcf: line 27, column 41
    function filter_8 (VALUE :  typekey.SeverityType, VALUES :  typekey.SeverityType[]) : java.lang.Boolean {
      return VALUE.hasCategory( injury.Subtype )
    }
    
    // 'initialValue' attribute on Variable at InjuryIncidentInputSet.pcf: line 13, column 23
    function initialValue_0 () : boolean {
      return injury.MedicalTreatmentType != null || injury.PrimaryDoctor != null
    }
    
    // 'onChange' attribute on PostOnChange at InjuryIncidentInputSet.pcf: line 74, column 105
    function onChange_25 () : void {
      if (!treatment) { injury.PrimaryDoctor = null; injury.MedicalTreatmentType = null }
    }
    
    // 'onPick' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_47 (PickedValue :  Contact) : void {
      var contactType = statictypeof (injury.PrimaryDoctor); var result = eval("injury.PrimaryDoctor = injury.Claim.resolveContact(injury.PrimaryDoctor) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'showConfirmMessage' attribute on CheckedValuesToolbarButton (id=Make_Primary) at InjuryIncidentInputSet.pcf: line 132, column 87
    function showConfirmMessage_73 () : java.lang.Boolean {
      return injury.InjuryDiagnoses.hasMatch(\i -> i.IsPrimary)
    }
    
    // 'validationExpression' attribute on BooleanRadioInput (id=ReceivedTreatment_Input) at InjuryIncidentInputSet.pcf: line 72, column 25
    function validationExpression_26 () : java.lang.Object {
      return (treatment && injury.PrimaryDoctor == null && injury.MedicalTreatmentType == null) ? DisplayKey.get("Web.InjuryIncidentInputSet.TreatmentDetailsRequired") : null
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_51 () : java.lang.Object {
      return injury.Claim.RelatedDoctorArray
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at InjuryIncidentInputSet.pcf: line 20, column 42
    function valueRoot_3 () : java.lang.Object {
      return injury
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at InjuryIncidentInputSet.pcf: line 20, column 42
    function value_1 () : typekey.LossPartyType {
      return injury.LossParty
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryDescription_Input) at InjuryIncidentInputSet.pcf: line 33, column 35
    function value_10 () : java.lang.String {
      return injury.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryInjuryType_Input) at InjuryIncidentInputSet.pcf: line 39, column 39
    function value_14 () : typekey.InjuryType {
      return injury.GeneralInjuryType
    }
    
    // 'value' attribute on TypeKeyInput (id=DetailedInjuryType_Input) at InjuryIncidentInputSet.pcf: line 45, column 47
    function value_18 () : typekey.DetailedInjuryType {
      return injury.DetailedInjuryType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReceivedTreatment_Input) at InjuryIncidentInputSet.pcf: line 72, column 25
    function value_27 () : java.lang.Boolean {
      return treatment
    }
    
    // 'value' attribute on TypeKeyInput (id=TreatmentType_Input) at InjuryIncidentInputSet.pcf: line 82, column 28
    function value_32 () : typekey.MedicalTreatmentType {
      return injury.MedicalTreatmentType
    }
    
    // 'value' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_48 () : entity.Doctor {
      return injury.PrimaryDoctor
    }
    
    // 'value' attribute on TypeKeyInput (id=Severity_Input) at InjuryIncidentInputSet.pcf: line 27, column 41
    function value_5 () : typekey.SeverityType {
      return injury.Severity
    }
    
    // 'value' attribute on TypeKeyInput (id=DisabledDueToAccident_Input) at InjuryIncidentInputSet.pcf: line 98, column 50
    function value_60 () : typekey.DisabledDueToAccident {
      return injury.DisabledDueToAccident
    }
    
    // 'value' attribute on BooleanRadioInput (id=AmbulanceUsed_Input) at InjuryIncidentInputSet.pcf: line 103, column 37
    function value_64 () : java.lang.Boolean {
      return injury.AmbulanceUsed
    }
    
    // 'value' attribute on BooleanRadioInput (id=LostWages_Input) at InjuryIncidentInputSet.pcf: line 108, column 32
    function value_68 () : java.lang.Boolean {
      return injury.LostWages
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_52 ($$arg :  entity.Doctor[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_52 ($$arg :  gw.api.database.IQueryBeanResult<entity.Doctor>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_53 () : void {
      var __valueRangeArg = injury.Claim.RelatedDoctorArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=doctor_Input) at InjuryIncidentInputSet.pcf: line 92, column 28
    function verifyValueType_59 () : void {
      var __valueTypeArg : entity.Doctor
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_37 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=doctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_40 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (injury.PrimaryDoctor), injury.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ListViewInput (id=NotesLVInput) at InjuryIncidentInputSet.pcf: line 149, column 72
    function visible_78 () : java.lang.Boolean {
      return perm.System.viewmednote and perm.System.viewclaimnotes
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at InjuryIncidentInputSet.pcf: line 159, column 42
    function visible_81 () : java.lang.Boolean {
      return injury.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at InjuryIncidentInputSet.pcf: line 164, column 77
    function visible_83 () : java.lang.Boolean {
      return not injury.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    property get injury () : InjuryIncident {
      return getRequireValue("injury", 0) as InjuryIncident
    }
    
    property set injury ($arg :  InjuryIncident) {
      setRequireValue("injury", 0, $arg)
    }
    
    property get treatment () : boolean {
      return getVariableValue("treatment", 0) as java.lang.Boolean
    }
    
    property set treatment ($arg :  boolean) {
      setVariableValue("treatment", 0, $arg)
    }
    
    function getNotes(): gw.api.database.IQueryBeanResult<Note> {
          return injury.Claim != null ? injury.Claim.getAllNotesWithTopicAndSubject(NoteTopicType.TC_MEDICAL, DisplayKey.get("NVV.Claim.MedCaseMgrDetails.MedicalDiagnosis.DiagnosisConfirmation", injury.injured)) : (new Note[0])?.asQuery()
        }
    
    
  }
  
  
}