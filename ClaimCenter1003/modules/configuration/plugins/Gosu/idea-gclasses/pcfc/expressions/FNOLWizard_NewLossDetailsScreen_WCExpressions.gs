package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.WC.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_NewLossDetailsScreen_WCExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.WC.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_NewLossDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_175 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.FirstIntakeDoctor), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_177 () : void {
      if (Claim.FirstIntakeDoctor != null) { ClaimContactDetailPopup.push(Claim.FirstIntakeDoctor, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_178 () : void {
      ClaimContactDetailPopup.push(Claim.FirstIntakeDoctor, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_215 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.hospital), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_217 () : void {
      if (Claim.hospital != null) { ClaimContactDetailPopup.push(Claim.hospital, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_218 () : void {
      ClaimContactDetailPopup.push(Claim.hospital, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_285 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.supervisor), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_287 () : void {
      if (Claim.supervisor != null) { ClaimContactDetailPopup.push(Claim.supervisor, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_288 () : void {
      ClaimContactDetailPopup.push(Claim.supervisor, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_73 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_75 () : void {
      if (Claim.claimant != null) { ClaimContactDetailPopup.push(Claim.claimant, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_76 () : void {
      ClaimContactDetailPopup.push(Claim.claimant, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_176 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.FirstIntakeDoctor), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_179 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.FirstIntakeDoctor, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_216 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.hospital), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_219 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.hospital, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_286 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.supervisor), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_289 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.supervisor, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_74 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_77 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.claimant, Claim)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=MakeFirstButton) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 384, column 117
    function checkedRowAction_240 (element :  entity.BodyPartDetails, CheckedValue :  entity.BodyPartDetails) : void {
      Claim.ClaimInjuryIncident.FirstBodyPart = CheckedValue
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 213, column 52
    function def_onEnter_127 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_172 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.FirstIntakeDoctor), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_212 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.hospital), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 372, column 33
    function def_onEnter_241 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.onEnter(Claim.ClaimInjuryIncident, false)
    }
    
    // 'def' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_282 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.supervisor), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 469, column 33
    function def_onEnter_301 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 553, column 33
    function def_onEnter_345 (def :  pcf.EditableWorkStatusChangesLV) : void {
      def.onEnter(Claim.EmploymentData)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 571, column 35
    function def_onEnter_347 (def :  pcf.EditableConcurrentEmploymentLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_70 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.claimant), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 213, column 52
    function def_refreshVariables_128 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_173 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.FirstIntakeDoctor), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_213 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.hospital), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 372, column 33
    function def_refreshVariables_242 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.refreshVariables(Claim.ClaimInjuryIncident, false)
    }
    
    // 'def' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_283 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.supervisor), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 469, column 33
    function def_refreshVariables_302 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 553, column 33
    function def_refreshVariables_346 (def :  pcf.EditableWorkStatusChangesLV) : void {
      def.refreshVariables(Claim.EmploymentData)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 571, column 35
    function def_refreshVariables_348 (def :  pcf.EditableConcurrentEmploymentLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_71 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.claimant), null, Claim)
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_OccurrenceDescription_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 47, column 38
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_TimeLossReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 199, column 40
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.TimeLossReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_AccidentPremises_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 222, column 51
    function defaultSetter_130 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.AccidentPremises = (__VALUE_TO_SET as typekey.AccidentPremises)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_JurisdictionState_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 229, column 47
    function defaultSetter_134 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on TextInput (id=Claim_InjuryDescription_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 245, column 62
    function defaultSetter_139 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimInjuryIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Severity_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 252, column 49
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimInjuryIncident.Severity = (__VALUE_TO_SET as typekey.SeverityType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_DeathReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 258, column 42
    function defaultSetter_148 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DeathReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_EmploymentInjury_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 52, column 43
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentInjury = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_InjuryIllnessCause_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 265, column 46
    function defaultSetter_152 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_AccidentType_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 272, column 49
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.AccidentType = (__VALUE_TO_SET as typekey.AccidentType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_PrimaryInjury_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 279, column 47
    function defaultSetter_160 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimInjuryIncident.GeneralInjuryType = (__VALUE_TO_SET as typekey.InjuryType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_DetailedInjury_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 286, column 55
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimInjuryIncident.DetailedInjuryType = (__VALUE_TO_SET as typekey.DetailedInjuryType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_MedicalReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 292, column 43
    function defaultSetter_168 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MedicalReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_182 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstIntakeDoctor = (__VALUE_TO_SET as entity.Doctor)
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalDiagnosis_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 316, column 49
    function defaultSetter_192 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MedicalDiagnosis = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=MedCase_ExaminationDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 322, column 48
    function defaultSetter_196 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ExaminationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CheckBoxInput (id=InjurySeverity_IncidentReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 33, column 41
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=MedCase_InitialTreatment_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 329, column 55
    function defaultSetter_200 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.InitialTreatment = (__VALUE_TO_SET as typekey.InitialTreatment)
    }
    
    // 'value' attribute on TypeKeyInput (id=MedCase_MedicalTreatment_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 335, column 59
    function defaultSetter_204 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimInjuryIncident.MedicalTreatmentType = (__VALUE_TO_SET as typekey.MedicalTreatmentType)
    }
    
    // 'value' attribute on TextAreaInput (id=MedCase_TreatmentRend_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 341, column 46
    function defaultSetter_208 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.TreatmentRend = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 59, column 56
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.InjuryStartTime = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_222 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.hospital = (__VALUE_TO_SET as entity.MedicalCareOrg)
    }
    
    // 'value' attribute on DateInput (id=MedCase_HospitalDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 355, column 45
    function defaultSetter_232 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HospitalDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=MedCase_HospitalDays_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 361, column 48
    function defaultSetter_236 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HospitalDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_ClassCodeByLocation_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 404, column 63
    function defaultSetter_247 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.ClassCodeByLocation = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 414, column 45
    function defaultSetter_251 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.ClassCode = (__VALUE_TO_SET as entity.ClassCode)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_Occupation_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 419, column 49
    function defaultSetter_260 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.claimant.Occupation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_DepartmentCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 428, column 60
    function defaultSetter_264 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.DepartmentCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_HireDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 436, column 54
    function defaultSetter_269 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.HireDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_HireState_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 442, column 42
    function defaultSetter_274 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.HireState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_EmploymentStatus_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 448, column 57
    function defaultSetter_278 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.EmploymentStatus = (__VALUE_TO_SET as typekey.EmploymentStatusType)
    }
    
    // 'value' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_292 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.supervisor = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumDaysWorkedPerWeek_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 492, column 51
    function defaultSetter_304 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.NumDaysWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumHoursWorkedPerDay_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 498, column 51
    function defaultSetter_308 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.NumHoursWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_WageAmount_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 503, column 58
    function defaultSetter_312 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.WageAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_PayPeriod_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 509, column 52
    function defaultSetter_316 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.PayPeriod = (__VALUE_TO_SET as typekey.PayPeriodType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_PaidFullWages_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 514, column 56
    function defaultSetter_320 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.PaidFull = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_WagePaymentContinued_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 519, column 63
    function defaultSetter_324 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.WagePaymentCont = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_ModifiedDutyAvailable_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 525, column 55
    function defaultSetter_329 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ModifiedDutyAvail = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=DateReportedtoEmployer_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 78, column 45
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateRptdToEmployer = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_DiscontinuedFringeBenefits_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 531, column 73
    function defaultSetter_334 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.DiscontinuedFringeBenefits = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_InjuredOnRegularJob_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 536, column 50
    function defaultSetter_338 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.InjuredRegularJob = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ConcurrentEmployment_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 542, column 43
    function defaultSetter_342 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ConcurrentEmp = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on DateInput (id=Claim_ReportedDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 88, column 39
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Claim_EquipmentUsed_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 93, column 40
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EquipmentUsed = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Claim_ActivityPerformed_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 98, column 44
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ActivityPerformed = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_DrugsInvolved_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 104, column 38
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DrugsInvolved = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_SafetyEquipmentProvided_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 109, column 42
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.SafetyEquipProv = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_SafetyEquipmentUsed_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 114, column 42
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.SafetyEquipUsed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 122, column 43
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.claimant = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 142, column 38
    function defaultSetter_90 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 171, column 40
    function encryptionExpression_111 (VALUE :  java.lang.String) : java.lang.String {
      return Claim.claimant.maskTaxId(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Claim_JurisdictionState_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 229, column 47
    function filter_136 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Claim_Severity_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 252, column 49
    function filter_145 (VALUE :  typekey.SeverityType, VALUES :  typekey.SeverityType[]) : java.lang.Boolean {
      return VALUE.hasCategory( typekey.LossType.TC_WC )
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 17, column 45
    function initialValue_0 () : gw.api.address.CCAddressOwner {
      return Claim.WCAddressOwner
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_180 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.FirstIntakeDoctor); var result = eval("Claim.FirstIntakeDoctor = Claim.resolveContact(Claim.FirstIntakeDoctor) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_220 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.hospital); var result = eval("Claim.hospital = Claim.resolveContact(Claim.hospital) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_290 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.supervisor); var result = eval("Claim.supervisor = Claim.resolveContact(Claim.supervisor) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_78 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.claimant); var result = eval("Claim.claimant = Claim.resolveContact(Claim.claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 165, column 40
    function reflectionValue_102 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.DateOfBirth
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 174, column 34
    function reflectionValue_107 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.TaxID
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 183, column 35
    function reflectionValue_113 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.Gender
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 192, column 42
    function reflectionValue_118 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.MaritalStatus
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 62, column 28
    function reflectionValue_18 (TRIGGER_INDEX :  int, VALUE :  Object) : java.lang.Object {
      return VALUE
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 422, column 43
    function reflectionValue_257 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.Occupation
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 149, column 46
    function reflectionValue_92 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 157, column 55
    function reflectionValue_97 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'validationExpression' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 59, column 56
    function validationExpression_20 () : java.lang.Object {
      return Claim.EmploymentData.InjuryStartTime == null || Claim.EmploymentData.InjuryStartTime < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=EmploymentData_HireDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 436, column 54
    function validationExpression_267 () : java.lang.Object {
      return Claim.EmploymentData.HireDate == null || Claim.EmploymentData.HireDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_ReportedDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 88, column 39
    function validationExpression_36 () : java.lang.Object {
      return Claim.ReportedDate == null || Claim.ReportedDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_InjuryIllnessDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 40, column 35
    function validationExpression_5 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_184 () : java.lang.Object {
      return Claim.getRelatedContacts(Claim.getContactTypes(ContactRole.TC_FIRSTINTAKEDOCTOR)) as Doctor[]
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_224 () : java.lang.Object {
      return Claim.RelatedMedicalCareOrgArray
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 414, column 45
    function valueRange_253 () : java.lang.Object {
      return FilteredClassCodes
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 122, column 43
    function valueRange_65 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_82 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_AccidentPremises_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 222, column 51
    function valueRoot_131 () : java.lang.Object {
      return Claim.ClaimWorkComp
    }
    
    // 'value' attribute on TextInput (id=Claim_InjuryDescription_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 245, column 62
    function valueRoot_140 () : java.lang.Object {
      return Claim.ClaimInjuryIncident
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 59, column 56
    function valueRoot_23 () : java.lang.Object {
      return Claim.EmploymentData
    }
    
    // 'value' attribute on CheckBoxInput (id=InjurySeverity_IncidentReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 33, column 41
    function valueRoot_3 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=Claimant_Phone_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 146, column 52
    function valueRoot_95 () : java.lang.Object {
      return Claim.claimant
    }
    
    // 'value' attribute on CheckBoxInput (id=InjurySeverity_IncidentReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 33, column 41
    function value_1 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on TextAreaInput (id=Claim_OccurrenceDescription_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 47, column 38
    function value_10 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on DateInput (id=Claimant_DateOfBirth_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 162, column 46
    function value_104 () : java.util.Date {
      return Claim.claimant.DateOfBirth
    }
    
    // 'value' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 171, column 40
    function value_109 () : java.lang.String {
      return Claim.claimant.TaxID
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Gender_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 180, column 42
    function value_115 () : typekey.GenderType {
      return Claim.claimant.Gender
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_MaritalStatus_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 189, column 45
    function value_120 () : typekey.MaritalStatus {
      return Claim.claimant.MaritalStatus
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_TimeLossReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 199, column 40
    function value_123 () : java.lang.Boolean {
      return Claim.TimeLossReport
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_AccidentPremises_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 222, column 51
    function value_129 () : typekey.AccidentPremises {
      return Claim.ClaimWorkComp.AccidentPremises
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_JurisdictionState_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 229, column 47
    function value_133 () : typekey.Jurisdiction {
      return Claim.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=Claim_InjuryDescription_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 245, column 62
    function value_138 () : java.lang.String {
      return Claim.ClaimInjuryIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_EmploymentInjury_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 52, column 43
    function value_14 () : java.lang.Boolean {
      return Claim.EmploymentInjury
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Severity_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 252, column 49
    function value_142 () : typekey.SeverityType {
      return Claim.ClaimInjuryIncident.Severity
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_DeathReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 258, column 42
    function value_147 () : java.lang.Boolean {
      return Claim.DeathReport
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_InjuryIllnessCause_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 265, column 46
    function value_151 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_AccidentType_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 272, column 49
    function value_155 () : typekey.AccidentType {
      return Claim.AccidentType
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_PrimaryInjury_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 279, column 47
    function value_159 () : typekey.InjuryType {
      return Claim.ClaimInjuryIncident.GeneralInjuryType
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_DetailedInjury_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 286, column 55
    function value_163 () : typekey.DetailedInjuryType {
      return Claim.ClaimInjuryIncident.DetailedInjuryType
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_MedicalReport_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 292, column 43
    function value_167 () : java.lang.Boolean {
      return Claim.MedicalReport
    }
    
    // 'value' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_181 () : entity.Doctor {
      return Claim.FirstIntakeDoctor
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalDiagnosis_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 316, column 49
    function value_191 () : java.lang.String {
      return Claim.MedicalDiagnosis
    }
    
    // 'value' attribute on DateInput (id=MedCase_ExaminationDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 322, column 48
    function value_195 () : java.util.Date {
      return Claim.ExaminationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=MedCase_InitialTreatment_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 329, column 55
    function value_199 () : typekey.InitialTreatment {
      return Claim.ClaimWorkComp.InitialTreatment
    }
    
    // 'value' attribute on TypeKeyInput (id=MedCase_MedicalTreatment_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 335, column 59
    function value_203 () : typekey.MedicalTreatmentType {
      return Claim.ClaimInjuryIncident.MedicalTreatmentType
    }
    
    // 'value' attribute on TextAreaInput (id=MedCase_TreatmentRend_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 341, column 46
    function value_207 () : java.lang.String {
      return Claim.TreatmentRend
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 59, column 56
    function value_21 () : java.util.Date {
      return Claim.EmploymentData.InjuryStartTime
    }
    
    // 'value' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_221 () : entity.MedicalCareOrg {
      return Claim.hospital
    }
    
    // 'value' attribute on DateInput (id=MedCase_HospitalDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 355, column 45
    function value_231 () : java.util.Date {
      return Claim.HospitalDate
    }
    
    // 'value' attribute on TextInput (id=MedCase_HospitalDays_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 361, column 48
    function value_235 () : java.lang.Integer {
      return Claim.HospitalDays
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_EmploymentLocation_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 399, column 50
    function value_243 () : entity.PolicyLocation {
      return Claim.LocationCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_ClassCodeByLocation_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 404, column 63
    function value_246 () : java.lang.Boolean {
      return Claim.ClaimWorkComp.ClassCodeByLocation
    }
    
    // 'value' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 414, column 45
    function value_250 () : entity.ClassCode {
      return Claim.EmploymentData.ClassCode
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_Occupation_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 419, column 49
    function value_259 () : java.lang.String {
      return Claim.claimant.Occupation
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_DepartmentCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 428, column 60
    function value_263 () : java.lang.String {
      return Claim.EmploymentData.DepartmentCode
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_HireDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 436, column 54
    function value_268 () : java.util.Date {
      return Claim.EmploymentData.HireDate
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_HireState_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 442, column 42
    function value_273 () : typekey.State {
      return Claim.EmploymentData.HireState
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_EmploymentStatus_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 448, column 57
    function value_277 () : typekey.EmploymentStatusType {
      return Claim.EmploymentData.EmploymentStatus
    }
    
    // 'value' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_291 () : entity.Person {
      return Claim.supervisor
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumDaysWorkedPerWeek_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 492, column 51
    function value_303 () : java.math.BigDecimal {
      return Claim.EmploymentData.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumHoursWorkedPerDay_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 498, column 51
    function value_307 () : java.math.BigDecimal {
      return Claim.EmploymentData.NumHoursWorked
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_WageAmount_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 503, column 58
    function value_311 () : gw.api.financials.CurrencyAmount {
      return Claim.EmploymentData.WageAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_PayPeriod_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 509, column 52
    function value_315 () : typekey.PayPeriodType {
      return Claim.EmploymentData.PayPeriod
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_PaidFullWages_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 514, column 56
    function value_319 () : java.lang.Boolean {
      return Claim.EmploymentData.PaidFull
    }
    
    // 'value' attribute on DateInput (id=DateReportedtoEmployer_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 78, column 45
    function value_32 () : java.util.Date {
      return Claim.DateRptdToEmployer
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_WagePaymentContinued_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 519, column 63
    function value_323 () : java.lang.Boolean {
      return Claim.EmploymentData.WagePaymentCont
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_ModifiedDutyAvailable_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 525, column 55
    function value_328 () : java.lang.Boolean {
      return Claim.ModifiedDutyAvail
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_DiscontinuedFringeBenefits_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 531, column 73
    function value_333 () : gw.api.financials.CurrencyAmount {
      return Claim.ClaimWorkComp.DiscontinuedFringeBenefits
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_InjuredOnRegularJob_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 536, column 50
    function value_337 () : java.lang.Boolean {
      return Claim.InjuredRegularJob
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ConcurrentEmployment_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 542, column 43
    function value_341 () : typekey.YesNo {
      return Claim.ConcurrentEmp
    }
    
    // 'value' attribute on DateInput (id=Claim_ReportedDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 88, column 39
    function value_37 () : java.util.Date {
      return Claim.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=Claim_EquipmentUsed_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 93, column 40
    function value_42 () : java.lang.String {
      return Claim.EquipmentUsed
    }
    
    // 'value' attribute on TextInput (id=Claim_ActivityPerformed_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 98, column 44
    function value_46 () : java.lang.String {
      return Claim.ActivityPerformed
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_DrugsInvolved_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 104, column 38
    function value_50 () : typekey.YesNo {
      return Claim.DrugsInvolved
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_SafetyEquipmentProvided_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 109, column 42
    function value_54 () : java.lang.Boolean {
      return Claim.SafetyEquipProv
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_SafetyEquipmentUsed_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 114, column 42
    function value_58 () : java.lang.Boolean {
      return Claim.SafetyEquipUsed
    }
    
    // 'value' attribute on DateInput (id=Claim_InjuryIllnessDate_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 40, column 35
    function value_6 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 122, column 43
    function value_62 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_79 () : entity.Person {
      return Claim.claimant
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 142, column 38
    function value_89 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_Phone_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 146, column 52
    function value_94 () : java.lang.String {
      return Claim.claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 154, column 61
    function value_99 () : java.lang.String {
      return Claim.claimant.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_185 ($$arg :  entity.Doctor[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_185 ($$arg :  gw.api.database.IQueryBeanResult<entity.Doctor>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_185 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_225 ($$arg :  entity.MedicalCareOrg[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_225 ($$arg :  gw.api.database.IQueryBeanResult<entity.MedicalCareOrg>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_225 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 414, column 45
    function verifyValueRangeIsAllowedType_254 ($$arg :  entity.ClassCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 414, column 45
    function verifyValueRangeIsAllowedType_254 ($$arg :  gw.api.database.IQueryBeanResult<entity.ClassCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 414, column 45
    function verifyValueRangeIsAllowedType_254 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_295 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_295 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_295 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 122, column 43
    function verifyValueRangeIsAllowedType_66 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 122, column 43
    function verifyValueRangeIsAllowedType_66 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 122, column 43
    function verifyValueRangeIsAllowedType_66 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_83 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_83 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_83 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_186 () : void {
      var __valueRangeArg = Claim.getRelatedContacts(Claim.getContactTypes(ContactRole.TC_FIRSTINTAKEDOCTOR)) as Doctor[]
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_185(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_226 () : void {
      var __valueRangeArg = Claim.RelatedMedicalCareOrgArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_225(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 414, column 45
    function verifyValueRange_255 () : void {
      var __valueRangeArg = FilteredClassCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_254(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_296 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_295(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 122, column 43
    function verifyValueRange_67 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_66(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_84 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_83(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 311, column 44
    function verifyValueType_190 () : void {
      var __valueTypeArg : entity.Doctor
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 349, column 52
    function verifyValueType_230 () : void {
      var __valueTypeArg : entity.MedicalCareOrg
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 457, column 42
    function verifyValueType_300 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Claimant_Picker_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 137, column 38
    function verifyValueType_88 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_174 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.FirstIntakeDoctor), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MedCase_Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_214 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.hospital), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on InputSet (id=MedicalReport_InputSet) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 301, column 51
    function visible_239 () : java.lang.Boolean {
      return Claim.MedicalReport==true
    }
    
    // 'visible' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_284 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.supervisor), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Claim_ModifiedDutyAvailable_Input) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 525, column 55
    function visible_327 () : java.lang.Boolean {
      return Claim.TimeLossReport==true
    }
    
    // 'visible' attribute on InputSet (id=Claim_ConcurrentEmploymentLV) at FNOLWizard_NewLossDetailsScreen.WC.pcf: line 565, column 61
    function visible_349 () : java.lang.Boolean {
      return Claim.ConcurrentEmp == YesNo.TC_YES
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_69 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_72 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)" != "" && true
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
    
    property get addressOwner () : gw.api.address.CCAddressOwner {
      return getVariableValue("addressOwner", 0) as gw.api.address.CCAddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.CCAddressOwner) {
      setVariableValue("addressOwner", 0, $arg)
    }
    
    property get ContactProhibited() : boolean {
      return Claim.getClaimContact(Claim.claimant).ContactProhibited
    }
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Claim.getClaimContact(Claim.claimant)
      if (claimContact != null) claimContact.ContactProhibited = prohibited
    }
    
    property get FilteredClassCodes() : ClassCode[] {
      if(Claim.ClaimWorkComp.ClassCodeByLocation) {
        return Claim.Policy.ClassCodes.where( \ code -> Claim.LocationCode.LocationBasedRisks*.ClassCode.contains(code) )
      }
      else {
        return Claim.Policy.ClassCodes
      }
    }
    
    
  }
  
  
}