package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossDetailsDV_WcExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsDV.Wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_230 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_232 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_233 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_255 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_257 () : void {
      if (Claim.maincontact != null) { ClaimContactDetailPopup.push(Claim.maincontact, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_258 () : void {
      ClaimContactDetailPopup.push(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_319 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.supervisor), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_321 () : void {
      if (Claim.supervisor != null) { ClaimContactDetailPopup.push(Claim.supervisor, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_322 () : void {
      ClaimContactDetailPopup.push(Claim.supervisor, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_37 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_39 () : void {
      if (Claim.claimant != null) { ClaimContactDetailPopup.push(Claim.claimant, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_40 () : void {
      ClaimContactDetailPopup.push(Claim.claimant, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_231 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_234 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_256 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_259 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_320 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.supervisor), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_323 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.supervisor, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_38 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_41 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.claimant, Claim)
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=MakeFirstButton) at LossDetailsDV.Wc.pcf: line 434, column 111
    function checkedRowAction_279 (element :  entity.BodyPartDetails, CheckedValue :  entity.BodyPartDetails) : void {
      Claim.ensureClaimInjuryIncident().FirstBodyPart = CheckedValue
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Wc.pcf: line 34, column 54
    function def_onEnter_12 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Wc.pcf: line 257, column 45
    function def_onEnter_157 (def :  pcf.CompensableInputSet) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_227 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_252 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 422, column 27
    function def_onEnter_280 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.onEnter(Claim.ensureClaimInjuryIncident(), true)
    }
    
    // 'def' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_316 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.supervisor), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_34 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.claimant), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 550, column 58
    function def_onEnter_368 (def :  pcf.EditableConcurrentEmploymentLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 563, column 27
    function def_onEnter_370 (def :  pcf.EditableOtherBenefitsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 574, column 27
    function def_onEnter_372 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 585, column 27
    function def_onEnter_374 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Wc.pcf: line 34, column 54
    function def_refreshVariables_13 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on InputSetRef at LossDetailsDV.Wc.pcf: line 257, column 45
    function def_refreshVariables_158 (def :  pcf.CompensableInputSet) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_228 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_253 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 422, column 27
    function def_refreshVariables_281 (def :  pcf.EditableBodyPartDetailsLV) : void {
      def.refreshVariables(Claim.ensureClaimInjuryIncident(), true)
    }
    
    // 'def' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_317 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.supervisor), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_35 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.claimant), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 550, column 58
    function def_refreshVariables_369 (def :  pcf.EditableConcurrentEmploymentLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 563, column 27
    function def_refreshVariables_371 (def :  pcf.EditableOtherBenefitsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 574, column 27
    function def_refreshVariables_373 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 585, column 27
    function def_refreshVariables_375 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'value' attribute on TextAreaInput (id=OccurrenceDescription_Input) at LossDetailsDV.Wc.pcf: line 21, column 36
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_DeathReport_Input) at LossDetailsDV.Wc.pcf: line 159, column 36
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DeathReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=DeathDate_Input) at LossDetailsDV.Wc.pcf: line 165, column 47
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DeathDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_InjuryIllnessCause_Input) at LossDetailsDV.Wc.pcf: line 172, column 40
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_AccidentType_Input) at LossDetailsDV.Wc.pcf: line 178, column 43
    function defaultSetter_116 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.AccidentType = (__VALUE_TO_SET as typekey.AccidentType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_PrimaryInjury_Input) at LossDetailsDV.Wc.pcf: line 185, column 41
    function defaultSetter_120 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ensureClaimInjuryIncident().GeneralInjuryType = (__VALUE_TO_SET as typekey.InjuryType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_DetailedInjury_Input) at LossDetailsDV.Wc.pcf: line 192, column 49
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ensureClaimInjuryIncident().DetailedInjuryType = (__VALUE_TO_SET as typekey.DetailedInjuryType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_EmploymentInjury_Input) at LossDetailsDV.Wc.pcf: line 204, column 42
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentInjury = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjuredOnRegularJob_Input) at LossDetailsDV.Wc.pcf: line 212, column 43
    function defaultSetter_132 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.InjuredRegularJob = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=EmployerQuestionsValidity_Input) at LossDetailsDV.Wc.pcf: line 221, column 37
    function defaultSetter_136 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmpQusValidity = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TextInput (id=EmployerValidityReason_Input) at LossDetailsDV.Wc.pcf: line 230, column 53
    function defaultSetter_141 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmployerValidityReason = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipmentProvided_Input) at LossDetailsDV.Wc.pcf: line 235, column 41
    function defaultSetter_146 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.SafetyEquipProv = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=LocationCode_Input) at LossDetailsDV.Wc.pcf: line 41, column 43
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LocationCode = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipmentUsed_Input) at LossDetailsDV.Wc.pcf: line 243, column 41
    function defaultSetter_150 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.SafetyEquipUsed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=DrugsInvolved_Input) at LossDetailsDV.Wc.pcf: line 252, column 37
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DrugsInvolved = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_MedicalReport_Input) at LossDetailsDV.Wc.pcf: line 269, column 38
    function defaultSetter_160 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MedicalReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_TimeLossReport_Input) at LossDetailsDV.Wc.pcf: line 276, column 39
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.TimeLossReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_EmployerLiability_Input) at LossDetailsDV.Wc.pcf: line 283, column 42
    function defaultSetter_168 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmployerLiability = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Wc.pcf: line 291, column 41
    function defaultSetter_172 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on DateInput (id=Claim_InjuryIllnessDate_Input) at LossDetailsDV.Wc.pcf: line 303, column 32
    function defaultSetter_181 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at LossDetailsDV.Wc.pcf: line 320, column 55
    function defaultSetter_193 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.InjuryStartTime = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Claim_DateReportedtoEmployer_Input) at LossDetailsDV.Wc.pcf: line 335, column 43
    function defaultSetter_204 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateRptdToEmployer = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=ClaimFormGiven_Input) at LossDetailsDV.Wc.pcf: line 342, column 43
    function defaultSetter_208 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateFormGivenToEmp = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Wc.pcf: line 350, column 39
    function defaultSetter_213 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateNotifiedOfEmployeeRepresentation_Input) at LossDetailsDV.Wc.pcf: line 361, column 50
    function defaultSetter_218 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.DateOfEmployeeRepresentation = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=AccidentPremises_Input) at LossDetailsDV.Wc.pcf: line 50, column 47
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.AccidentPremises = (__VALUE_TO_SET as typekey.AccidentPremises)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_HowReported_Input) at LossDetailsDV.Wc.pcf: line 367, column 46
    function defaultSetter_223 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_237 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at LossDetailsDV.Wc.pcf: line 384, column 48
    function defaultSetter_247 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at LossDetailsDV.Wc.pcf: line 57, column 43
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_262 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_MainContactType_Input) at LossDetailsDV.Wc.pcf: line 410, column 49
    function defaultSetter_272 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_WorkCompAWW_Input) at LossDetailsDV.Wc.pcf: line 443, column 50
    function defaultSetter_283 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.WageAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_ClassCodeByLocation_Input) at LossDetailsDV.Wc.pcf: line 448, column 57
    function defaultSetter_287 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.ClassCodeByLocation = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at LossDetailsDV.Wc.pcf: line 458, column 39
    function defaultSetter_291 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.ClassCode = (__VALUE_TO_SET as entity.ClassCode)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_DepartmentCode_Input) at LossDetailsDV.Wc.pcf: line 463, column 54
    function defaultSetter_298 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.DepartmentCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_HireDate_Input) at LossDetailsDV.Wc.pcf: line 471, column 48
    function defaultSetter_303 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.HireDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_HireState_Input) at LossDetailsDV.Wc.pcf: line 477, column 36
    function defaultSetter_308 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.HireState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_EmploymentStatus_Input) at LossDetailsDV.Wc.pcf: line 483, column 51
    function defaultSetter_312 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.EmploymentStatus = (__VALUE_TO_SET as typekey.EmploymentStatusType)
    }
    
    // 'value' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_326 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.supervisor = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumDaysWorkedPerWeek_Input) at LossDetailsDV.Wc.pcf: line 498, column 43
    function defaultSetter_336 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.NumDaysWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumHoursWorkedPerDay_Input) at LossDetailsDV.Wc.pcf: line 504, column 43
    function defaultSetter_340 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.NumHoursWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_PayPeriod_Input) at LossDetailsDV.Wc.pcf: line 510, column 44
    function defaultSetter_344 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.PayPeriod = (__VALUE_TO_SET as typekey.PayPeriodType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_PaidFullWages_Input) at LossDetailsDV.Wc.pcf: line 515, column 48
    function defaultSetter_348 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.PaidFull = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_WagePaymentContinued_Input) at LossDetailsDV.Wc.pcf: line 520, column 55
    function defaultSetter_352 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EmploymentData.WagePaymentCont = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifiedDutyAvailable_Input) at LossDetailsDV.Wc.pcf: line 525, column 42
    function defaultSetter_356 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ModifiedDutyAvail = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_DiscontinuedFringeBenefits_Input) at LossDetailsDV.Wc.pcf: line 532, column 55
    function defaultSetter_360 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ClaimWorkComp.DiscontinuedFringeBenefits = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=ConcurrentEmployment_Input) at LossDetailsDV.Wc.pcf: line 538, column 35
    function defaultSetter_364 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ConcurrentEmp = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.claimant = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TextInput (id=Claim_ActivityPerformed_Input) at LossDetailsDV.Wc.pcf: line 26, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ActivityPerformed = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at LossDetailsDV.Wc.pcf: line 80, column 36
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at LossDetailsDV.Wc.pcf: line 129, column 64
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ensureClaimInjuryIncident().Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Severity_Input) at LossDetailsDV.Wc.pcf: line 136, column 43
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ensureClaimInjuryIncident().Severity = (__VALUE_TO_SET as typekey.SeverityType)
    }
    
    // 'value' attribute on TextInput (id=Claim_EquipmentUsed_Input) at LossDetailsDV.Wc.pcf: line 32, column 38
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.EquipmentUsed = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=Claim_ExposureBegan_Input) at LossDetailsDV.Wc.pcf: line 145, column 38
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ExposureBegan = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Claim_ExposureEnded_Input) at LossDetailsDV.Wc.pcf: line 153, column 38
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ExposureEnded = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at LossDetailsDV.Wc.pcf: line 109, column 38
    function encryptionExpression_75 (VALUE :  java.lang.String) : java.lang.String {
      return Claim.claimant.maskTaxId(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at LossDetailsDV.Wc.pcf: line 384, column 48
    function filter_249 (VALUE :  typekey.PersonRelationType, VALUES :  typekey.PersonRelationType[]) : java.lang.Boolean {
      return VALUE.hasCategory(Claim.Policy.PolicyType)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at LossDetailsDV.Wc.pcf: line 57, column 43
    function filter_28 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Claim_Severity_Input) at LossDetailsDV.Wc.pcf: line 136, column 43
    function filter_89 (VALUE :  typekey.SeverityType, VALUES :  typekey.SeverityType[]) : java.lang.Boolean {
      return VALUE.hasCategory(LossType.TC_WC)
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsDV.Wc.pcf: line 305, column 74
    function onChange_178 () : void {
      gw.pcf.ClaimLossDetailsUtil.changedLossDate(Claim)
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsDV.Wc.pcf: line 353, column 73
    function onChange_211 () : void {
      Claim.clearDateNotifiedOfEmployeeRepresentation()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_235 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_260 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.maincontact); var result = eval("Claim.maincontact = Claim.resolveContact(Claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_324 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.supervisor); var result = eval("Claim.supervisor = Claim.resolveContact(Claim.supervisor) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_42 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.claimant); var result = eval("Claim.claimant = Claim.resolveContact(Claim.claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at LossDetailsDV.Wc.pcf: line 386, column 42
    function reflectionValue_245 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at LossDetailsDV.Wc.pcf: line 87, column 44
    function reflectionValue_56 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at LossDetailsDV.Wc.pcf: line 95, column 53
    function reflectionValue_61 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at LossDetailsDV.Wc.pcf: line 103, column 38
    function reflectionValue_66 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.DateOfBirth
    }
    
    // 'value' attribute on Reflect at LossDetailsDV.Wc.pcf: line 112, column 32
    function reflectionValue_71 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.TaxID
    }
    
    // 'value' attribute on Reflect at LossDetailsDV.Wc.pcf: line 120, column 37
    function reflectionValue_77 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.Occupation
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_InjuryIllnessDate_Input) at LossDetailsDV.Wc.pcf: line 303, column 32
    function validationExpression_179 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_lossTime_Input) at LossDetailsDV.Wc.pcf: line 313, column 33
    function validationExpression_185 () : java.lang.Object {
      return Claim.LossDate != null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at LossDetailsDV.Wc.pcf: line 320, column 55
    function validationExpression_191 () : java.lang.Object {
      return Claim.EmploymentData.InjuryStartTime == null || Claim.EmploymentData.InjuryStartTime < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=EmploymentData_HireDate_Input) at LossDetailsDV.Wc.pcf: line 471, column 48
    function validationExpression_301 () : java.lang.Object {
      return Claim.EmploymentData.HireDate == null || Claim.EmploymentData.HireDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_ExposureBegan_Input) at LossDetailsDV.Wc.pcf: line 145, column 38
    function validationExpression_91 () : java.lang.Object {
      return Claim.ExposureBegan == null || Claim.ExposureBegan < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationCode_Input) at LossDetailsDV.Wc.pcf: line 41, column 43
    function valueRange_17 () : java.lang.Object {
      return Claim.PolicyProperties
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Wc.pcf: line 291, column 41
    function valueRange_174 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at LossDetailsDV.Wc.pcf: line 458, column 39
    function valueRange_293 () : java.lang.Object {
      return FilteredClassCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_46 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at LossDetailsDV.Wc.pcf: line 320, column 55
    function valueRoot_194 () : java.lang.Object {
      return Claim.EmploymentData
    }
    
    // 'value' attribute on TextAreaInput (id=OccurrenceDescription_Input) at LossDetailsDV.Wc.pcf: line 21, column 36
    function valueRoot_2 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TypeKeyInput (id=AccidentPremises_Input) at LossDetailsDV.Wc.pcf: line 50, column 47
    function valueRoot_23 () : java.lang.Object {
      return Claim.ClaimWorkComp
    }
    
    // 'value' attribute on TextInput (id=Claimant_Phone_Input) at LossDetailsDV.Wc.pcf: line 84, column 50
    function valueRoot_59 () : java.lang.Object {
      return Claim.claimant
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at LossDetailsDV.Wc.pcf: line 129, column 64
    function valueRoot_84 () : java.lang.Object {
      return Claim.ensureClaimInjuryIncident()
    }
    
    // 'value' attribute on TextAreaInput (id=OccurrenceDescription_Input) at LossDetailsDV.Wc.pcf: line 21, column 36
    function value_0 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_DeathReport_Input) at LossDetailsDV.Wc.pcf: line 159, column 36
    function value_101 () : java.lang.Boolean {
      return Claim.DeathReport
    }
    
    // 'value' attribute on DateInput (id=DeathDate_Input) at LossDetailsDV.Wc.pcf: line 165, column 47
    function value_106 () : java.util.Date {
      return Claim.DeathDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_InjuryIllnessCause_Input) at LossDetailsDV.Wc.pcf: line 172, column 40
    function value_111 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_AccidentType_Input) at LossDetailsDV.Wc.pcf: line 178, column 43
    function value_115 () : typekey.AccidentType {
      return Claim.AccidentType
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_PrimaryInjury_Input) at LossDetailsDV.Wc.pcf: line 185, column 41
    function value_119 () : typekey.InjuryType {
      return Claim.ensureClaimInjuryIncident().GeneralInjuryType
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_DetailedInjury_Input) at LossDetailsDV.Wc.pcf: line 192, column 49
    function value_123 () : typekey.DetailedInjuryType {
      return Claim.ensureClaimInjuryIncident().DetailedInjuryType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claim_EmploymentInjury_Input) at LossDetailsDV.Wc.pcf: line 204, column 42
    function value_127 () : java.lang.Boolean {
      return Claim.EmploymentInjury
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjuredOnRegularJob_Input) at LossDetailsDV.Wc.pcf: line 212, column 43
    function value_131 () : java.lang.Boolean {
      return Claim.InjuredRegularJob
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=EmployerQuestionsValidity_Input) at LossDetailsDV.Wc.pcf: line 221, column 37
    function value_135 () : typekey.YesNo {
      return Claim.EmpQusValidity
    }
    
    // 'value' attribute on RangeInput (id=LocationCode_Input) at LossDetailsDV.Wc.pcf: line 41, column 43
    function value_14 () : entity.PolicyLocation {
      return Claim.LocationCode
    }
    
    // 'value' attribute on TextInput (id=EmployerValidityReason_Input) at LossDetailsDV.Wc.pcf: line 230, column 53
    function value_140 () : java.lang.String {
      return Claim.EmployerValidityReason
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipmentProvided_Input) at LossDetailsDV.Wc.pcf: line 235, column 41
    function value_145 () : java.lang.Boolean {
      return Claim.SafetyEquipProv
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipmentUsed_Input) at LossDetailsDV.Wc.pcf: line 243, column 41
    function value_149 () : java.lang.Boolean {
      return Claim.SafetyEquipUsed
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=DrugsInvolved_Input) at LossDetailsDV.Wc.pcf: line 252, column 37
    function value_153 () : typekey.YesNo {
      return Claim.DrugsInvolved
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_MedicalReport_Input) at LossDetailsDV.Wc.pcf: line 269, column 38
    function value_159 () : java.lang.Boolean {
      return Claim.MedicalReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_TimeLossReport_Input) at LossDetailsDV.Wc.pcf: line 276, column 39
    function value_163 () : java.lang.Boolean {
      return Claim.TimeLossReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjurySeverity_EmployerLiability_Input) at LossDetailsDV.Wc.pcf: line 283, column 42
    function value_167 () : java.lang.Boolean {
      return Claim.EmployerLiability
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Wc.pcf: line 291, column 41
    function value_171 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on DateInput (id=Claim_InjuryIllnessDate_Input) at LossDetailsDV.Wc.pcf: line 303, column 32
    function value_180 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_InjuryStartDate_Input) at LossDetailsDV.Wc.pcf: line 320, column 55
    function value_192 () : java.util.Date {
      return Claim.EmploymentData.InjuryStartTime
    }
    
    // 'value' attribute on DateInput (id=Claim_DateReportedtoEmployer_Input) at LossDetailsDV.Wc.pcf: line 335, column 43
    function value_203 () : java.util.Date {
      return Claim.DateRptdToEmployer
    }
    
    // 'value' attribute on DateInput (id=ClaimFormGiven_Input) at LossDetailsDV.Wc.pcf: line 342, column 43
    function value_207 () : java.util.Date {
      return Claim.DateFormGivenToEmp
    }
    
    // 'value' attribute on TypeKeyInput (id=AccidentPremises_Input) at LossDetailsDV.Wc.pcf: line 50, column 47
    function value_21 () : typekey.AccidentPremises {
      return Claim.ClaimWorkComp.AccidentPremises
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsDV.Wc.pcf: line 350, column 39
    function value_212 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on DateInput (id=Notification_DateNotifiedOfEmployeeRepresentation_Input) at LossDetailsDV.Wc.pcf: line 361, column 50
    function value_217 () : java.util.Date {
      return Claim.ClaimWorkComp.DateOfEmployeeRepresentation
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_HowReported_Input) at LossDetailsDV.Wc.pcf: line 367, column 46
    function value_222 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_236 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at LossDetailsDV.Wc.pcf: line 384, column 48
    function value_246 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at LossDetailsDV.Wc.pcf: line 57, column 43
    function value_25 () : typekey.Jurisdiction {
      return Claim.JurisdictionState
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_261 () : entity.Person {
      return Claim.maincontact
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_MainContactType_Input) at LossDetailsDV.Wc.pcf: line 410, column 49
    function value_271 () : typekey.PersonRelationType {
      return Claim.MainContactType
    }
    
    // 'value' attribute on TextInput (id=Notification_InsuredReportNumber_Input) at LossDetailsDV.Wc.pcf: line 414, column 58
    function value_276 () : java.lang.String {
      return Claim.ClaimWorkComp.InsuredReportNumber
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_WorkCompAWW_Input) at LossDetailsDV.Wc.pcf: line 443, column 50
    function value_282 () : gw.api.financials.CurrencyAmount {
      return Claim.EmploymentData.WageAmount
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_ClassCodeByLocation_Input) at LossDetailsDV.Wc.pcf: line 448, column 57
    function value_286 () : java.lang.Boolean {
      return Claim.ClaimWorkComp.ClassCodeByLocation
    }
    
    // 'value' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at LossDetailsDV.Wc.pcf: line 458, column 39
    function value_290 () : entity.ClassCode {
      return Claim.EmploymentData.ClassCode
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_DepartmentCode_Input) at LossDetailsDV.Wc.pcf: line 463, column 54
    function value_297 () : java.lang.String {
      return Claim.EmploymentData.DepartmentCode
    }
    
    // 'value' attribute on TextInput (id=JurisdictionClaimNumber_Input) at LossDetailsDV.Wc.pcf: line 62, column 62
    function value_30 () : java.lang.String {
      return Claim.ClaimWorkComp.JurisdictionClaimNumber
    }
    
    // 'value' attribute on DateInput (id=EmploymentData_HireDate_Input) at LossDetailsDV.Wc.pcf: line 471, column 48
    function value_302 () : java.util.Date {
      return Claim.EmploymentData.HireDate
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_HireState_Input) at LossDetailsDV.Wc.pcf: line 477, column 36
    function value_307 () : typekey.State {
      return Claim.EmploymentData.HireState
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_EmploymentStatus_Input) at LossDetailsDV.Wc.pcf: line 483, column 51
    function value_311 () : typekey.EmploymentStatusType {
      return Claim.EmploymentData.EmploymentStatus
    }
    
    // 'value' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_325 () : entity.Person {
      return Claim.supervisor
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumDaysWorkedPerWeek_Input) at LossDetailsDV.Wc.pcf: line 498, column 43
    function value_335 () : java.math.BigDecimal {
      return Claim.EmploymentData.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumHoursWorkedPerDay_Input) at LossDetailsDV.Wc.pcf: line 504, column 43
    function value_339 () : java.math.BigDecimal {
      return Claim.EmploymentData.NumHoursWorked
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_PayPeriod_Input) at LossDetailsDV.Wc.pcf: line 510, column 44
    function value_343 () : typekey.PayPeriodType {
      return Claim.EmploymentData.PayPeriod
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_PaidFullWages_Input) at LossDetailsDV.Wc.pcf: line 515, column 48
    function value_347 () : java.lang.Boolean {
      return Claim.EmploymentData.PaidFull
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentData_WagePaymentContinued_Input) at LossDetailsDV.Wc.pcf: line 520, column 55
    function value_351 () : java.lang.Boolean {
      return Claim.EmploymentData.WagePaymentCont
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifiedDutyAvailable_Input) at LossDetailsDV.Wc.pcf: line 525, column 42
    function value_355 () : java.lang.Boolean {
      return Claim.ModifiedDutyAvail
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_DiscontinuedFringeBenefits_Input) at LossDetailsDV.Wc.pcf: line 532, column 55
    function value_359 () : gw.api.financials.CurrencyAmount {
      return Claim.ClaimWorkComp.DiscontinuedFringeBenefits
    }
    
    // 'value' attribute on TypeKeyInput (id=ConcurrentEmployment_Input) at LossDetailsDV.Wc.pcf: line 538, column 35
    function value_363 () : typekey.YesNo {
      return Claim.ConcurrentEmp
    }
    
    // 'value' attribute on TextInput (id=Claim_ActivityPerformed_Input) at LossDetailsDV.Wc.pcf: line 26, column 42
    function value_4 () : java.lang.String {
      return Claim.ActivityPerformed
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_43 () : entity.Person {
      return Claim.claimant
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at LossDetailsDV.Wc.pcf: line 80, column 36
    function value_53 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_Phone_Input) at LossDetailsDV.Wc.pcf: line 84, column 50
    function value_58 () : java.lang.String {
      return Claim.claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at LossDetailsDV.Wc.pcf: line 92, column 59
    function value_63 () : java.lang.String {
      return Claim.claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on DateInput (id=Claimant_DateOfBirth_Input) at LossDetailsDV.Wc.pcf: line 100, column 44
    function value_68 () : java.util.Date {
      return Claim.claimant.DateOfBirth
    }
    
    // 'value' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at LossDetailsDV.Wc.pcf: line 109, column 38
    function value_73 () : java.lang.String {
      return Claim.claimant.TaxID
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_Occupation_Input) at LossDetailsDV.Wc.pcf: line 117, column 43
    function value_79 () : java.lang.String {
      return Claim.claimant.Occupation
    }
    
    // 'value' attribute on TextInput (id=Claim_EquipmentUsed_Input) at LossDetailsDV.Wc.pcf: line 32, column 38
    function value_8 () : java.lang.String {
      return Claim.EquipmentUsed
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at LossDetailsDV.Wc.pcf: line 129, column 64
    function value_82 () : java.lang.String {
      return Claim.ensureClaimInjuryIncident().Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Severity_Input) at LossDetailsDV.Wc.pcf: line 136, column 43
    function value_86 () : typekey.SeverityType {
      return Claim.ensureClaimInjuryIncident().Severity
    }
    
    // 'value' attribute on DateInput (id=Claim_ExposureBegan_Input) at LossDetailsDV.Wc.pcf: line 145, column 38
    function value_92 () : java.util.Date {
      return Claim.ExposureBegan
    }
    
    // 'value' attribute on DateInput (id=Claim_ExposureEnded_Input) at LossDetailsDV.Wc.pcf: line 153, column 38
    function value_97 () : java.util.Date {
      return Claim.ExposureEnded
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Wc.pcf: line 291, column 41
    function verifyValueRangeIsAllowedType_175 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Wc.pcf: line 291, column 41
    function verifyValueRangeIsAllowedType_175 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Wc.pcf: line 291, column 41
    function verifyValueRangeIsAllowedType_175 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationCode_Input) at LossDetailsDV.Wc.pcf: line 41, column 43
    function verifyValueRangeIsAllowedType_18 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationCode_Input) at LossDetailsDV.Wc.pcf: line 41, column 43
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationCode_Input) at LossDetailsDV.Wc.pcf: line 41, column 43
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_240 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_240 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_240 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_265 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_265 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_265 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at LossDetailsDV.Wc.pcf: line 458, column 39
    function verifyValueRangeIsAllowedType_294 ($$arg :  entity.ClassCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at LossDetailsDV.Wc.pcf: line 458, column 39
    function verifyValueRangeIsAllowedType_294 ($$arg :  gw.api.database.IQueryBeanResult<entity.ClassCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at LossDetailsDV.Wc.pcf: line 458, column 39
    function verifyValueRangeIsAllowedType_294 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_329 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_329 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_329 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsDV.Wc.pcf: line 291, column 41
    function verifyValueRange_176 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_175(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationCode_Input) at LossDetailsDV.Wc.pcf: line 41, column 43
    function verifyValueRange_19 () : void {
      var __valueRangeArg = Claim.PolicyProperties
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_241 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_240(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_266 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_265(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=EmploymentData_ClassCode_Input) at LossDetailsDV.Wc.pcf: line 458, column 39
    function verifyValueRange_295 () : void {
      var __valueRangeArg = FilteredClassCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_294(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_330 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_329(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_48 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_47(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Picker_Input) at LossDetailsDV.Wc.pcf: line 403, column 36
    function verifyValueType_270 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at LossDetailsDV.Wc.pcf: line 492, column 36
    function verifyValueType_334 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Claimant_Picker_Input) at LossDetailsDV.Wc.pcf: line 75, column 36
    function verifyValueType_52 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on DateInput (id=DeathDate_Input) at LossDetailsDV.Wc.pcf: line 165, column 47
    function visible_105 () : java.lang.Boolean {
      return Claim.DeathReport == true 
    }
    
    // 'visible' attribute on TextInput (id=EmployerValidityReason_Input) at LossDetailsDV.Wc.pcf: line 230, column 53
    function visible_139 () : java.lang.Boolean {
      return Claim.EmpQusValidity == TC_YES
    }
    
    // 'visible' attribute on DateInput (id=Notification_DateNotifiedOfEmployeeRepresentation_Input) at LossDetailsDV.Wc.pcf: line 361, column 50
    function visible_216 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit == true
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_229 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_254 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=EmploymentData_SupervisorPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_318 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.supervisor), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_33 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_36 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ListViewInput at LossDetailsDV.Wc.pcf: line 550, column 58
    function visible_367 () : java.lang.Boolean {
      return Claim.ConcurrentEmp == YesNo.TC_YES 
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
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