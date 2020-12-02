package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral500DV_wcExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral500DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 276, column 38
    function encryptionExpression_133 (VALUE :  dynamic.Dynamic) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(VALUE as String)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 404, column 46
    function sortValue_197 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 408, column 78
    function sortValue_198 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 412, column 76
    function sortValue_199 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 416, column 77
    function sortValue_200 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 421, column 46
    function sortValue_201 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 426, column 46
    function sortValue_202 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.JobTitle
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 448, column 81
    function sortValue_219 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 453, column 46
    function sortValue_220 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 458, column 46
    function sortValue_221 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Comments
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 530, column 46
    function sortValue_255 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 535, column 46
    function sortValue_256 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 540, column 46
    function sortValue_257 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 188, column 46
    function sortValue_86 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 193, column 46
    function sortValue_87 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=MedCase_Hospital_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 231, column 38
    function valueRoot_111 () : java.lang.Object {
      return Snapshot.Hospital
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 252, column 38
    function valueRoot_120 () : java.lang.Object {
      return Snapshot.Claimant
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 266, column 38
    function valueRoot_127 () : java.lang.Object {
      return Snapshot.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on DateInput (id=HireDate_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 295, column 38
    function valueRoot_141 () : java.lang.Object {
      return Snapshot.EmploymentData
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 310, column 38
    function valueRoot_150 () : java.lang.Object {
      return Snapshot.Supervisor
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 58, column 38
    function valueRoot_18 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 470, column 38
    function valueRoot_232 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 480, column 38
    function valueRoot_238 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 146, column 38
    function valueRoot_69 () : java.lang.Object {
      return Snapshot.ClaimInjuryIncident
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 35, column 38
    function valueRoot_9 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 205, column 38
    function valueRoot_96 () : java.lang.Object {
      return Snapshot.FirstIntakeDoctor
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on DateInput (id=MedCase_ExaminationDate_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 216, column 38
    function value_101 () : dynamic.Dynamic {
      return Snapshot.ExaminationDate
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalTreatment_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 221, column 38
    function value_104 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.MedicalTreatmentType
    }
    
    // 'value' attribute on TextAreaInput (id=MedCase_TreatmentRend_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 226, column 38
    function value_107 () : dynamic.Dynamic {
      return Snapshot.TreatmentRend
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 43, column 38
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=MedCase_Hospital_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 231, column 38
    function value_110 () : dynamic.Dynamic {
      return Snapshot.Hospital.DisplayName
    }
    
    // 'value' attribute on DateInput (id=MedCase_HospitalDate_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 237, column 38
    function value_113 () : dynamic.Dynamic {
      return Snapshot.HospitalDate
    }
    
    // 'value' attribute on TextInput (id=MedCase_HospitalDays_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 242, column 38
    function value_116 () : dynamic.Dynamic {
      return Snapshot.HospitalDays
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 252, column 38
    function value_119 () : dynamic.Dynamic {
      return Snapshot.Claimant.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 257, column 38
    function value_122 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Snapshot, null)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 261, column 67
    function value_124 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Snapshot.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 266, column 38
    function value_126 () : dynamic.Dynamic {
      return Snapshot.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DateOfBirth_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 270, column 74
    function value_129 () : java.lang.String {
      return util.Snapshot.renderDate(Snapshot.Claimant.DateOfBirth)
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 276, column 38
    function value_131 () : dynamic.Dynamic {
      return Snapshot.Claimant.TaxID
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 284, column 38
    function value_135 () : dynamic.Dynamic {
      return Snapshot.Claimant.Occupation
    }
    
    // 'value' attribute on TextInput (id=EmpClass_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 288, column 79
    function value_138 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.EmploymentData.ClassCode)
    }
    
    // 'value' attribute on DateInput (id=DateOfInjury_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 53, column 38
    function value_14 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on DateInput (id=HireDate_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 295, column 38
    function value_140 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.HireDate
    }
    
    // 'value' attribute on TextInput (id=HireState_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 300, column 38
    function value_143 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.HireState
    }
    
    // 'value' attribute on TextInput (id=EmploymentStatus_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 305, column 38
    function value_146 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.EmploymentStatus
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 310, column 38
    function value_149 () : dynamic.Dynamic {
      return Snapshot.Supervisor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=NumDaysWorked_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 315, column 38
    function value_152 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=NumHoursWorked_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 320, column 38
    function value_155 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumHoursWorked
    }
    
    // 'value' attribute on TextInput (id=WageAmount_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 325, column 38
    function value_158 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WageAmount
    }
    
    // 'value' attribute on TextInput (id=PayPeriod_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 330, column 38
    function value_161 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PayPeriod
    }
    
    // 'value' attribute on DateInput (id=InjuryStartTime_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 336, column 38
    function value_164 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.InjuryStartTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=PaidFull_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 341, column 38
    function value_167 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PaidFull
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 58, column 38
    function value_17 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=WagePaymentCont_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 346, column 38
    function value_170 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WagePaymentCont
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifiedDutyAvail_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 351, column 38
    function value_173 () : dynamic.Dynamic {
      return Snapshot.ModifiedDutyAvail
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjuredRegularJob_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 356, column 38
    function value_176 () : dynamic.Dynamic {
      return Snapshot.InjuredRegularJob
    }
    
    // 'value' attribute on TextInput (id=EquipmentUsed_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 361, column 38
    function value_179 () : dynamic.Dynamic {
      return Snapshot.EquipmentUsed
    }
    
    // 'value' attribute on TextInput (id=ActivityPerformed_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 366, column 38
    function value_182 () : dynamic.Dynamic {
      return Snapshot.ActivityPerformed
    }
    
    // 'value' attribute on TextInput (id=DrugsInvolved_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 371, column 38
    function value_185 () : dynamic.Dynamic {
      return Snapshot.DrugsInvolved
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipProv_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 376, column 38
    function value_188 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipProv
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipUsed_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 381, column 38
    function value_191 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipUsed
    }
    
    // 'value' attribute on TextInput (id=ConcurrentEmployment_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 386, column 38
    function value_194 () : dynamic.Dynamic {
      return Snapshot.ConcurrentEmp
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 63, column 38
    function value_20 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine1
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.wc.pcf: line 398, column 41
    function value_218 () : dynamic.Dynamic {
      return Snapshot.ConcurrentEmpl
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 68, column 38
    function value_23 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine2
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.wc.pcf: line 443, column 41
    function value_230 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WorkStatusChanges
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 470, column 38
    function value_231 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ReportedByType_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 475, column 38
    function value_234 () : dynamic.Dynamic {
      return Snapshot.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 480, column 38
    function value_237 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 485, column 38
    function value_240 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 492, column 38
    function value_243 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 497, column 38
    function value_246 () : dynamic.Dynamic {
      return Snapshot.FirstNoticeSuit
    }
    
    // 'value' attribute on DateInput (id=ClaimantRprtdDate_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 504, column 38
    function value_249 () : dynamic.Dynamic {
      return Snapshot.ClaimantRprtdDate
    }
    
    // 'value' attribute on DateInput (id=DateRptdToEmployer_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 511, column 38
    function value_252 () : dynamic.Dynamic {
      return Snapshot.DateRptdToEmployer
    }
    
    // 'value' attribute on TextInput (id=City_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 73, column 38
    function value_26 () : dynamic.Dynamic {
      return Snapshot.LossLocation.City
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.wc.pcf: line 524, column 41
    function value_267 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 552, column 38
    function value_268 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 557, column 38
    function value_271 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 78, column 38
    function value_29 () : dynamic.Dynamic {
      return Snapshot.LossLocation.State
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 83, column 38
    function value_32 () : dynamic.Dynamic {
      return Snapshot.LossLocation.PostalCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 88, column 38
    function value_35 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 93, column 38
    function value_38 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LocationDescription_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 98, column 38
    function value_41 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=InsuredPremises_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 103, column 38
    function value_44 () : dynamic.Dynamic {
      return Snapshot.InsuredPremises
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentInjury_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 108, column 38
    function value_47 () : dynamic.Dynamic {
      return Snapshot.EmploymentInjury
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 113, column 38
    function value_50 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 121, column 38
    function value_53 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=MedicalReport_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 126, column 38
    function value_56 () : dynamic.Dynamic {
      return Snapshot.MedicalReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=TimeLossReport_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 131, column 38
    function value_59 () : dynamic.Dynamic {
      return Snapshot.TimeLossReport
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 30, column 67
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LocationCode)
    }
    
    // 'value' attribute on BooleanRadioInput (id=DeathReport_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 136, column 38
    function value_62 () : dynamic.Dynamic {
      return Snapshot.DeathReport
    }
    
    // 'value' attribute on TextInput (id=DeathDate_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 141, column 38
    function value_65 () : dynamic.Dynamic {
      return Snapshot.DeathDate
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 146, column 38
    function value_68 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.Severity
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 151, column 38
    function value_71 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=AccidentType_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 156, column 38
    function value_74 () : dynamic.Dynamic {
      return Snapshot.AccidentType
    }
    
    // 'value' attribute on TextInput (id=PrimaryInjury_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 161, column 38
    function value_77 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.GeneralInjuryType
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 35, column 38
    function value_8 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DetailedInjury_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 166, column 38
    function value_80 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.DetailedInjuryType
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 171, column 38
    function value_83 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.wc.pcf: line 182, column 41
    function value_94 () : dynamic.Dynamic {
      return Snapshot.ClaimInjuryIncident.BodyParts
    }
    
    // 'value' attribute on TextInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 205, column 38
    function value_95 () : dynamic.Dynamic {
      return Snapshot.FirstIntakeDoctor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalDiagnosis_Input) at ClaimSnapshotGeneral500DV.wc.pcf: line 210, column 38
    function value_98 () : dynamic.Dynamic {
      return Snapshot.MedicalDiagnosis
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Snapshot () : dynamic.Dynamic {
      return getRequireValue("Snapshot", 0) as dynamic.Dynamic
    }
    
    property set Snapshot ($arg :  dynamic.Dynamic) {
      setRequireValue("Snapshot", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 404, column 46
    function valueRoot_204 () : java.lang.Object {
      return ConcurrentEmpl
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 404, column 46
    function value_203 () : dynamic.Dynamic {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 408, column 78
    function value_206 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 412, column 76
    function value_208 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 416, column 77
    function value_210 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 421, column 46
    function value_212 () : dynamic.Dynamic {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 426, column 46
    function value_215 () : dynamic.Dynamic {
      return ConcurrentEmpl.JobTitle
    }
    
    property get ConcurrentEmpl () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 453, column 46
    function valueRoot_225 () : java.lang.Object {
      return WorkStatusChange
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 448, column 81
    function value_222 () : java.lang.String {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 453, column 46
    function value_224 () : dynamic.Dynamic {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 458, column 46
    function value_227 () : dynamic.Dynamic {
      return WorkStatusChange.Comments
    }
    
    property get WorkStatusChange () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 530, column 46
    function valueRoot_259 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 530, column 46
    function value_258 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 535, column 46
    function value_261 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 540, column 46
    function value_264 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 188, column 46
    function valueRoot_89 () : java.lang.Object {
      return BodyPart
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 188, column 46
    function value_88 () : dynamic.Dynamic {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral500DV.wc.pcf: line 193, column 46
    function value_91 () : dynamic.Dynamic {
      return BodyPart.DetailedBodyPart
    }
    
    property get BodyPart () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}