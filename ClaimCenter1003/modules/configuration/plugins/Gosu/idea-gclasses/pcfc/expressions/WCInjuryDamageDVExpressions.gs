package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/WCInjuryDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCInjuryDamageDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/WCInjuryDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCInjuryDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_100 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claim.hospital), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_102 () : void {
      if (Exposure.Claim.hospital != null) { ClaimContactDetailPopup.push(Exposure.Claim.hospital, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_103 () : void {
      ClaimContactDetailPopup.push(Exposure.Claim.hospital, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_52 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claim.FirstIntakeDoctor), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_54 () : void {
      if (Exposure.Claim.FirstIntakeDoctor != null) { ClaimContactDetailPopup.push(Exposure.Claim.FirstIntakeDoctor, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_55 () : void {
      ClaimContactDetailPopup.push(Exposure.Claim.FirstIntakeDoctor, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_101 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claim.hospital), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_104 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claim.hospital, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_53 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claim.FirstIntakeDoctor), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_56 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claim.FirstIntakeDoctor, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_49 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claim.FirstIntakeDoctor), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_97 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claim.hospital), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_50 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claim.FirstIntakeDoctor), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_98 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claim.hospital), null, Exposure.Claim)
    }
    
    // 'value' attribute on BooleanRadioInput (id=MPN_PTPinMPN_Input) at WCInjuryDamageDV.pcf: line 20, column 42
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.PTPinMPN = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_107 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.hospital = (__VALUE_TO_SET as entity.MedicalCareOrg)
    }
    
    // 'value' attribute on DateInput (id=Hospital_HospitalDate_Input) at WCInjuryDamageDV.pcf: line 153, column 46
    function defaultSetter_117 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.HospitalDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Hospital_HospitalDays_Input) at WCInjuryDamageDV.pcf: line 159, column 40
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.HospitalDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Hospital_PreexDisability_Input) at WCInjuryDamageDV.pcf: line 164, column 45
    function defaultSetter_125 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.PreexDisblty = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=MPN_InjWkrInMPN_Input) at WCInjuryDamageDV.pcf: line 38, column 45
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.InjWkrInMPN = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=Hospital_PreexDisabilityInfo_Input) at WCInjuryDamageDV.pcf: line 172, column 56
    function defaultSetter_130 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.PreexDisbltyInfo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at WCInjuryDamageDV.pcf: line 181, column 38
    function defaultSetter_136 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at WCInjuryDamageDV.pcf: line 187, column 43
    function defaultSetter_141 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SettleMethod = (__VALUE_TO_SET as typekey.SettleMethod)
    }
    
    // 'value' attribute on DateInput (id=MMI_MMIdate_Input) at WCInjuryDamageDV.pcf: line 47, column 41
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.MMIdate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=MMI_MMInote_Input) at WCInjuryDamageDV.pcf: line 53, column 41
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.MMInote = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=FirstNotice_SubjComplaints_Input) at WCInjuryDamageDV.pcf: line 63, column 48
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.SubjComplaints = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=FirstNotice_ObjFindings_Input) at WCInjuryDamageDV.pcf: line 69, column 45
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.ObjFindings = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_DiagnosticConsistent_Input) at WCInjuryDamageDV.pcf: line 74, column 52
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.DiagnosticCnsistnt = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_CurrentConditions_Input) at WCInjuryDamageDV.pcf: line 79, column 51
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.CurrentConditions = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_TreatedPatientBefore_Input) at WCInjuryDamageDV.pcf: line 84, column 51
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.TreatedPatientBfr = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=MPN_InsurerSentMPNNotice_Input) at WCInjuryDamageDV.pcf: line 26, column 54
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.InsurerSentMPNNotice = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.FirstIntakeDoctor = (__VALUE_TO_SET as entity.Doctor)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_EmployeeAuthorizationToReleaseMedicalRecords_Input) at WCInjuryDamageDV.pcf: line 103, column 65
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.ClaimWorkComp.MedRecReleaseAuth = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=FirstNotice_MedicalDiagnosis_Input) at WCInjuryDamageDV.pcf: line 108, column 50
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.MedicalDiagnosis = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=FirstNotice_ExaminationDate_Input) at WCInjuryDamageDV.pcf: line 114, column 49
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.ExaminationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=FirstNotice_InitialTreatment_Input) at WCInjuryDamageDV.pcf: line 121, column 47
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.ClaimWorkComp.InitialTreatment = (__VALUE_TO_SET as typekey.InitialTreatment)
    }
    
    // 'value' attribute on TypeKeyInput (id=FirstNotice_MedicalTreatment_Input) at WCInjuryDamageDV.pcf: line 127, column 51
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.ClaimInjuryIncident.MedicalTreatmentType = (__VALUE_TO_SET as typekey.MedicalTreatmentType)
    }
    
    // 'value' attribute on TextAreaInput (id=FirstNotice_TreatmentRend_Input) at WCInjuryDamageDV.pcf: line 134, column 47
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.TreatmentRend = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=MPN_EmpSentMPNNotice_Input) at WCInjuryDamageDV.pcf: line 32, column 50
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.EmpSentMPNNotice = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_FurtherTreatment_Input) at WCInjuryDamageDV.pcf: line 139, column 50
    function defaultSetter_93 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claim.FurtherTreatment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on DateInput (id=MMI_MMIdate_Input) at WCInjuryDamageDV.pcf: line 47, column 41
    function editable_16 () : java.lang.Boolean {
      return perm.System.editSensMCMdetails
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_105 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claim.hospital); var result = eval("Exposure.Claim.hospital = Exposure.Claim.resolveContact(Exposure.Claim.hospital) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_57 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claim.FirstIntakeDoctor); var result = eval("Exposure.Claim.FirstIntakeDoctor = Exposure.Claim.resolveContact(Exposure.Claim.FirstIntakeDoctor) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'validationExpression' attribute on DateInput (id=SettlementDate_Input) at WCInjuryDamageDV.pcf: line 181, column 38
    function validationExpression_134 () : java.lang.Object {
      return Exposure.SettleDate == null || Exposure.SettleDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_109 () : java.lang.Object {
      return Exposure.Claim.RelatedMedicalCareOrgArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_61 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.Claim.getContactTypes(TC_FIRSTINTAKEDOCTOR)) as Doctor[]
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at WCInjuryDamageDV.pcf: line 181, column 38
    function valueRoot_137 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on BooleanRadioInput (id=MPN_PTPinMPN_Input) at WCInjuryDamageDV.pcf: line 20, column 42
    function valueRoot_2 () : java.lang.Object {
      return Exposure.Claim
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_EmployeeAuthorizationToReleaseMedicalRecords_Input) at WCInjuryDamageDV.pcf: line 103, column 65
    function valueRoot_70 () : java.lang.Object {
      return Exposure.Claim.ClaimWorkComp
    }
    
    // 'value' attribute on TypeKeyInput (id=FirstNotice_MedicalTreatment_Input) at WCInjuryDamageDV.pcf: line 127, column 51
    function valueRoot_86 () : java.lang.Object {
      return Exposure.Claim.ClaimInjuryIncident
    }
    
    // 'value' attribute on BooleanRadioInput (id=MPN_PTPinMPN_Input) at WCInjuryDamageDV.pcf: line 20, column 42
    function value_0 () : java.lang.Boolean {
      return Exposure.Claim.PTPinMPN
    }
    
    // 'value' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_106 () : entity.MedicalCareOrg {
      return Exposure.Claim.hospital
    }
    
    // 'value' attribute on DateInput (id=Hospital_HospitalDate_Input) at WCInjuryDamageDV.pcf: line 153, column 46
    function value_116 () : java.util.Date {
      return Exposure.Claim.HospitalDate
    }
    
    // 'value' attribute on DateInput (id=MPN_InjWkrInMPN_Input) at WCInjuryDamageDV.pcf: line 38, column 45
    function value_12 () : java.util.Date {
      return Exposure.Claim.InjWkrInMPN
    }
    
    // 'value' attribute on TextInput (id=Hospital_HospitalDays_Input) at WCInjuryDamageDV.pcf: line 159, column 40
    function value_120 () : java.lang.Integer {
      return Exposure.Claim.HospitalDays
    }
    
    // 'value' attribute on BooleanRadioInput (id=Hospital_PreexDisability_Input) at WCInjuryDamageDV.pcf: line 164, column 45
    function value_124 () : java.lang.Boolean {
      return Exposure.Claim.PreexDisblty
    }
    
    // 'value' attribute on TextInput (id=Hospital_PreexDisabilityInfo_Input) at WCInjuryDamageDV.pcf: line 172, column 56
    function value_129 () : java.lang.String {
      return Exposure.Claim.PreexDisbltyInfo
    }
    
    // 'value' attribute on DateInput (id=SettlementDate_Input) at WCInjuryDamageDV.pcf: line 181, column 38
    function value_135 () : java.util.Date {
      return Exposure.SettleDate
    }
    
    // 'value' attribute on TypeKeyInput (id=SettlementMethod_Input) at WCInjuryDamageDV.pcf: line 187, column 43
    function value_140 () : typekey.SettleMethod {
      return Exposure.SettleMethod
    }
    
    // 'value' attribute on DateInput (id=MMI_MMIdate_Input) at WCInjuryDamageDV.pcf: line 47, column 41
    function value_17 () : java.util.Date {
      return Exposure.Claim.MMIdate
    }
    
    // 'value' attribute on TextAreaInput (id=MMI_MMInote_Input) at WCInjuryDamageDV.pcf: line 53, column 41
    function value_23 () : java.lang.String {
      return Exposure.Claim.MMInote
    }
    
    // 'value' attribute on TextAreaInput (id=FirstNotice_SubjComplaints_Input) at WCInjuryDamageDV.pcf: line 63, column 48
    function value_28 () : java.lang.String {
      return Exposure.Claim.SubjComplaints
    }
    
    // 'value' attribute on TextAreaInput (id=FirstNotice_ObjFindings_Input) at WCInjuryDamageDV.pcf: line 69, column 45
    function value_32 () : java.lang.String {
      return Exposure.Claim.ObjFindings
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_DiagnosticConsistent_Input) at WCInjuryDamageDV.pcf: line 74, column 52
    function value_36 () : java.lang.Boolean {
      return Exposure.Claim.DiagnosticCnsistnt
    }
    
    // 'value' attribute on DateInput (id=MPN_InsurerSentMPNNotice_Input) at WCInjuryDamageDV.pcf: line 26, column 54
    function value_4 () : java.util.Date {
      return Exposure.Claim.InsurerSentMPNNotice
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_CurrentConditions_Input) at WCInjuryDamageDV.pcf: line 79, column 51
    function value_40 () : java.lang.Boolean {
      return Exposure.Claim.CurrentConditions
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_TreatedPatientBefore_Input) at WCInjuryDamageDV.pcf: line 84, column 51
    function value_44 () : java.lang.Boolean {
      return Exposure.Claim.TreatedPatientBfr
    }
    
    // 'value' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_58 () : entity.Doctor {
      return Exposure.Claim.FirstIntakeDoctor
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_EmployeeAuthorizationToReleaseMedicalRecords_Input) at WCInjuryDamageDV.pcf: line 103, column 65
    function value_68 () : java.lang.Boolean {
      return Exposure.Claim.ClaimWorkComp.MedRecReleaseAuth
    }
    
    // 'value' attribute on TextInput (id=FirstNotice_MedicalDiagnosis_Input) at WCInjuryDamageDV.pcf: line 108, column 50
    function value_72 () : java.lang.String {
      return Exposure.Claim.MedicalDiagnosis
    }
    
    // 'value' attribute on DateInput (id=FirstNotice_ExaminationDate_Input) at WCInjuryDamageDV.pcf: line 114, column 49
    function value_76 () : java.util.Date {
      return Exposure.Claim.ExaminationDate
    }
    
    // 'value' attribute on DateInput (id=MPN_EmpSentMPNNotice_Input) at WCInjuryDamageDV.pcf: line 32, column 50
    function value_8 () : java.util.Date {
      return Exposure.Claim.EmpSentMPNNotice
    }
    
    // 'value' attribute on TypeKeyInput (id=FirstNotice_InitialTreatment_Input) at WCInjuryDamageDV.pcf: line 121, column 47
    function value_80 () : typekey.InitialTreatment {
      return Exposure.Claim.ClaimWorkComp.InitialTreatment
    }
    
    // 'value' attribute on TypeKeyInput (id=FirstNotice_MedicalTreatment_Input) at WCInjuryDamageDV.pcf: line 127, column 51
    function value_84 () : typekey.MedicalTreatmentType {
      return Exposure.Claim.ClaimInjuryIncident.MedicalTreatmentType
    }
    
    // 'value' attribute on TextAreaInput (id=FirstNotice_TreatmentRend_Input) at WCInjuryDamageDV.pcf: line 134, column 47
    function value_88 () : java.lang.String {
      return Exposure.Claim.TreatmentRend
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNotice_FurtherTreatment_Input) at WCInjuryDamageDV.pcf: line 139, column 50
    function value_92 () : java.lang.Boolean {
      return Exposure.Claim.FurtherTreatment
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_110 ($$arg :  entity.MedicalCareOrg[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_110 ($$arg :  gw.api.database.IQueryBeanResult<entity.MedicalCareOrg>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_110 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  entity.Doctor[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  gw.api.database.IQueryBeanResult<entity.Doctor>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_111 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedMedicalCareOrgArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_110(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_63 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.Claim.getContactTypes(TC_FIRSTINTAKEDOCTOR)) as Doctor[]
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_62(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at WCInjuryDamageDV.pcf: line 147, column 44
    function verifyValueType_115 () : void {
      var __valueTypeArg : entity.MedicalCareOrg
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at WCInjuryDamageDV.pcf: line 97, column 36
    function verifyValueType_67 () : void {
      var __valueTypeArg : entity.Doctor
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=Hospital_PreexDisabilityInfo_Input) at WCInjuryDamageDV.pcf: line 172, column 56
    function visible_128 () : java.lang.Boolean {
      return Exposure.Claim.PreexDisblty == true
    }
    
    // 'visible' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_48 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=FirstNotice_FirstIntakeDoctor_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_51 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claim.FirstIntakeDoctor), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Hospital_Hospital_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_99 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claim.hospital), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}