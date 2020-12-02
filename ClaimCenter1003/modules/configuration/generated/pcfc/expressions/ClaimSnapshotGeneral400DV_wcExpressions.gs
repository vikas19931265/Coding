package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral400DV_wcExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral400DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 81, column 38
    function encryptionExpression_32 (VALUE :  dynamic.Dynamic) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(VALUE as String)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 420, column 46
    function sortValue_208 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 424, column 78
    function sortValue_209 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 428, column 76
    function sortValue_210 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 432, column 77
    function sortValue_211 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 437, column 46
    function sortValue_212 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 442, column 46
    function sortValue_213 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.JobTitle
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 464, column 81
    function sortValue_230 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 469, column 46
    function sortValue_231 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 474, column 46
    function sortValue_232 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Comments
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 642, column 46
    function sortValue_317 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 647, column 46
    function sortValue_318 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 652, column 46
    function sortValue_319 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 689, column 46
    function sortValue_336 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.ReferenceNumber
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 694, column 46
    function sortValue_337 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.Amount
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 698, column 76
    function sortValue_338 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(OtherBenefit.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 702, column 74
    function sortValue_339 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(OtherBenefit.EndDate)
    }
    
    // 'value' attribute on TextCell (id=InitialContact_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 707, column 46
    function sortValue_340 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.InitialContact
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 712, column 46
    function sortValue_341 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.Comments
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 734, column 46
    function sortValue_359 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 739, column 46
    function sortValue_360 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 744, column 46
    function sortValue_361 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 184, column 46
    function sortValue_78 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 189, column 46
    function sortValue_79 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextCell (id=Compensability_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 194, column 46
    function sortValue_80 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.Compensability
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 36, column 38
    function valueRoot_10 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=MedCase_Hospital_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 262, column 38
    function valueRoot_125 () : java.lang.Object {
      return Snapshot.Hospital
    }
    
    // 'value' attribute on TextInput (id=DepartmentCode_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 303, column 38
    function valueRoot_147 () : java.lang.Object {
      return Snapshot.EmploymentData
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 325, column 38
    function valueRoot_159 () : java.lang.Object {
      return Snapshot.Supervisor
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 57, column 38
    function valueRoot_19 () : java.lang.Object {
      return Snapshot.Claimant
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 512, column 38
    function valueRoot_255 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 71, column 38
    function valueRoot_26 () : java.lang.Object {
      return Snapshot.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 522, column 38
    function valueRoot_261 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 583, column 38
    function valueRoot_291 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=NurseCaseMgr_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 31, column 38
    function valueRoot_7 () : java.lang.Object {
      return Snapshot.NurseCaseMgr
    }
    
    // 'value' attribute on TextInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 206, column 38
    function valueRoot_92 () : java.lang.Object {
      return Snapshot.FirstIntakeDoctor
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on BooleanRadioInput (id=MedCase_TreatedPatientBefore_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 222, column 38
    function value_100 () : dynamic.Dynamic {
      return Snapshot.TreatedPatientBfr
    }
    
    // 'value' attribute on TextAreaInput (id=MedCase_SubjComplaints_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 227, column 38
    function value_103 () : dynamic.Dynamic {
      return Snapshot.SubjComplaints
    }
    
    // 'value' attribute on TextAreaInput (id=MedCase_ObjFindings_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 232, column 38
    function value_106 () : dynamic.Dynamic {
      return Snapshot.ObjFindings
    }
    
    // 'value' attribute on BooleanRadioInput (id=MedCase_DiagnosticConsistent_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 237, column 38
    function value_109 () : dynamic.Dynamic {
      return Snapshot.DiagnosticCnsistnt
    }
    
    // 'value' attribute on BooleanRadioInput (id=MedCase_CurrentConditions_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 242, column 38
    function value_112 () : dynamic.Dynamic {
      return Snapshot.CurrentConditions
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalTreatment_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 247, column 38
    function value_115 () : dynamic.Dynamic {
      return Snapshot.MedicalTreatmentType
    }
    
    // 'value' attribute on TextAreaInput (id=MedCase_TreatmentRend_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 252, column 38
    function value_118 () : dynamic.Dynamic {
      return Snapshot.TreatmentRend
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 41, column 38
    function value_12 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on BooleanRadioInput (id=MedCase_FurtherTreatment_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 257, column 38
    function value_121 () : dynamic.Dynamic {
      return Snapshot.FurtherTreatment
    }
    
    // 'value' attribute on TextInput (id=MedCase_Hospital_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 262, column 38
    function value_124 () : dynamic.Dynamic {
      return Snapshot.Hospital.DisplayName
    }
    
    // 'value' attribute on DateInput (id=MedCase_HospitalDate_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 268, column 38
    function value_127 () : dynamic.Dynamic {
      return Snapshot.HospitalDate
    }
    
    // 'value' attribute on TextInput (id=MedCase_HospitalDays_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 273, column 38
    function value_130 () : dynamic.Dynamic {
      return Snapshot.HospitalDays
    }
    
    // 'value' attribute on BooleanRadioInput (id=MedCase_PreexDisability_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 278, column 38
    function value_133 () : dynamic.Dynamic {
      return Snapshot.PreexDisblty
    }
    
    // 'value' attribute on TextInput (id=MedCase_PreexDisabilityInfo_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 284, column 42
    function value_137 () : dynamic.Dynamic {
      return Snapshot.PreexDisbltyInfo
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 294, column 38
    function value_141 () : dynamic.Dynamic {
      return Snapshot.Claimant.Occupation
    }
    
    // 'value' attribute on TextInput (id=EmpClass_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 298, column 78
    function value_144 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.EmploymentData.EmpClass)
    }
    
    // 'value' attribute on TextInput (id=DepartmentCode_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 303, column 38
    function value_146 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.DepartmentCode
    }
    
    // 'value' attribute on DateInput (id=HireDate_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 310, column 38
    function value_149 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.HireDate
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 49, column 38
    function value_15 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=HireState_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 315, column 38
    function value_152 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.HireState
    }
    
    // 'value' attribute on TextInput (id=EmploymentStatus_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 320, column 38
    function value_155 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.EmploymentStatus
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 325, column 38
    function value_158 () : dynamic.Dynamic {
      return Snapshot.Supervisor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=NumDaysWorked_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 330, column 38
    function value_161 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=NumHoursWorked_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 335, column 38
    function value_164 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumHoursWorked
    }
    
    // 'value' attribute on TextInput (id=WageAmount_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 340, column 38
    function value_167 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WageAmount
    }
    
    // 'value' attribute on TextInput (id=PayPeriod_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 345, column 38
    function value_170 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PayPeriod
    }
    
    // 'value' attribute on DateInput (id=InjuryStartTime_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 351, column 38
    function value_173 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.InjuryStartTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=PaidFull_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 356, column 38
    function value_176 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PaidFull
    }
    
    // 'value' attribute on BooleanRadioInput (id=WagePaymentCont_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 361, column 38
    function value_179 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WagePaymentCont
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 57, column 38
    function value_18 () : dynamic.Dynamic {
      return Snapshot.Claimant.DisplayName
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifiedDutyAvail_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 366, column 38
    function value_182 () : dynamic.Dynamic {
      return Snapshot.ModifiedDutyAvail
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjuredRegularJob_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 371, column 38
    function value_185 () : dynamic.Dynamic {
      return Snapshot.InjuredRegularJob
    }
    
    // 'value' attribute on TextInput (id=EmpQusValidity_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 376, column 38
    function value_188 () : dynamic.Dynamic {
      return Snapshot.EmpQusValidity
    }
    
    // 'value' attribute on TextInput (id=EmployerValidityReason_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 382, column 73
    function value_192 () : dynamic.Dynamic {
      return Snapshot.EmployerValidityReason
    }
    
    // 'value' attribute on TextInput (id=DrugsInvolved_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 387, column 38
    function value_196 () : dynamic.Dynamic {
      return Snapshot.DrugsInvolved
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipProv_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 392, column 38
    function value_199 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipProv
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipUsed_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 397, column 38
    function value_202 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipUsed
    }
    
    // 'value' attribute on TextInput (id=ConcurrentEmployment_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 402, column 38
    function value_205 () : dynamic.Dynamic {
      return Snapshot.ConcurrentEmp
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 62, column 38
    function value_21 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Snapshot, null)["ContactProhibited"]
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.wc.pcf: line 414, column 41
    function value_229 () : dynamic.Dynamic {
      return Snapshot.ConcurrentEmpl
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 66, column 67
    function value_23 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Snapshot.Claimant)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.wc.pcf: line 459, column 41
    function value_241 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WorkStatusChanges
    }
    
    // 'value' attribute on DateInput (id=DateCompDcsnDue_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 487, column 38
    function value_242 () : dynamic.Dynamic {
      return Snapshot.DateCompDcsnDue
    }
    
    // 'value' attribute on BooleanRadioInput (id=BenefitsStatusDcsn_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 492, column 38
    function value_245 () : dynamic.Dynamic {
      return Snapshot.BenefitsStatusDcsn
    }
    
    // 'value' attribute on DateInput (id=DateCompDcsnMade_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 498, column 38
    function value_248 () : dynamic.Dynamic {
      return Snapshot.DateCompDcsnMade
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 71, column 38
    function value_25 () : dynamic.Dynamic {
      return Snapshot.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextAreaInput (id=Reason_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 504, column 38
    function value_251 () : dynamic.Dynamic {
      return Snapshot.BenefitsDecisionReason
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 512, column 38
    function value_254 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ReportedByType_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 517, column 38
    function value_257 () : dynamic.Dynamic {
      return Snapshot.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 522, column 38
    function value_260 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 527, column 38
    function value_263 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 534, column 38
    function value_266 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 539, column 38
    function value_269 () : dynamic.Dynamic {
      return Snapshot.FirstNoticeSuit
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 544, column 38
    function value_272 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 549, column 38
    function value_275 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on DateInput (id=ClaimantRprtdDate_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 556, column 38
    function value_278 () : dynamic.Dynamic {
      return Snapshot.ClaimantRprtdDate
    }
    
    // 'value' attribute on TextInput (id=DateOfBirth_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 75, column 74
    function value_28 () : java.lang.String {
      return util.Snapshot.renderDate(Snapshot.Claimant.DateOfBirth)
    }
    
    // 'value' attribute on DateInput (id=DateRptdToEmployer_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 563, column 38
    function value_281 () : dynamic.Dynamic {
      return Snapshot.DateRptdToEmployer
    }
    
    // 'value' attribute on DateInput (id=DateFormGivenToEmp_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 569, column 38
    function value_284 () : dynamic.Dynamic {
      return Snapshot.DateFormGivenToEmp
    }
    
    // 'value' attribute on DateInput (id=DateFormRetByEmp_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 575, column 38
    function value_287 () : dynamic.Dynamic {
      return Snapshot.DateFormRetByEmp
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 583, column 38
    function value_290 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AddressLine1_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 588, column 38
    function value_293 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 593, column 38
    function value_296 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=City_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 598, column 38
    function value_299 () : dynamic.Dynamic {
      return Snapshot.LossLocation.City
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 81, column 38
    function value_30 () : dynamic.Dynamic {
      return Snapshot.Claimant.TaxID
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 603, column 38
    function value_302 () : dynamic.Dynamic {
      return Snapshot.LossLocation.State
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 608, column 38
    function value_305 () : dynamic.Dynamic {
      return Snapshot.LossLocation.PostalCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 613, column 38
    function value_308 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 618, column 38
    function value_311 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LocationDescription_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 623, column 38
    function value_314 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.wc.pcf: line 636, column 41
    function value_329 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 664, column 38
    function value_330 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 669, column 38
    function value_333 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on DateInput (id=DateOfInjury_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 91, column 38
    function value_34 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.wc.pcf: line 683, column 41
    function value_358 () : dynamic.Dynamic {
      return Snapshot.OtherBenefits
    }
    
    // 'value' attribute on DateInput (id=ExposureBegan_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 98, column 38
    function value_37 () : dynamic.Dynamic {
      return Snapshot.ExposureBegan
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.wc.pcf: line 728, column 41
    function value_371 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on DateInput (id=ExposureEnded_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 105, column 38
    function value_40 () : dynamic.Dynamic {
      return Snapshot.ExposureEnded
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentInjury_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 110, column 38
    function value_43 () : dynamic.Dynamic {
      return Snapshot.EmploymentInjury
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 114, column 67
    function value_46 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LocationCode)
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 119, column 38
    function value_48 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=InsuredPremises_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 124, column 38
    function value_51 () : dynamic.Dynamic {
      return Snapshot.InsuredPremises
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 129, column 38
    function value_54 () : dynamic.Dynamic {
      return Snapshot.Severity
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 137, column 38
    function value_57 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=NurseCaseMgr_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Snapshot.NurseCaseMgr.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AccidentType_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 142, column 38
    function value_60 () : dynamic.Dynamic {
      return Snapshot.AccidentType
    }
    
    // 'value' attribute on TextInput (id=PrimaryInjury_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 147, column 38
    function value_63 () : dynamic.Dynamic {
      return Snapshot.PrimaryInjury
    }
    
    // 'value' attribute on TextInput (id=DetailedInjury_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 152, column 38
    function value_66 () : dynamic.Dynamic {
      return Snapshot.DetailedInjury
    }
    
    // 'value' attribute on TextInput (id=PrimaryBodyPart_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 157, column 38
    function value_69 () : dynamic.Dynamic {
      return Snapshot.PrimaryBodyPart
    }
    
    // 'value' attribute on TextInput (id=DetailedBodyPart_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 162, column 38
    function value_72 () : dynamic.Dynamic {
      return Snapshot.DetailedBodyPart
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 167, column 38
    function value_75 () : dynamic.Dynamic {
      return Snapshot.InjuryDescription
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 36, column 38
    function value_9 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.wc.pcf: line 178, column 41
    function value_90 () : dynamic.Dynamic {
      return Snapshot.BodyPartDetails
    }
    
    // 'value' attribute on TextInput (id=MedCase_FirstIntakeDoctor_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 206, column 38
    function value_91 () : dynamic.Dynamic {
      return Snapshot.FirstIntakeDoctor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MedCase_MedicalDiagnosis_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 211, column 38
    function value_94 () : dynamic.Dynamic {
      return Snapshot.MedicalDiagnosis
    }
    
    // 'value' attribute on DateInput (id=MedCase_ExaminationDate_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 217, column 38
    function value_97 () : dynamic.Dynamic {
      return Snapshot.ExaminationDate
    }
    
    // 'visible' attribute on TextInput (id=MedCase_PreexDisabilityInfo_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 284, column 42
    function visible_136 () : java.lang.Boolean {
      return Snapshot.PreexDisblty
    }
    
    // 'visible' attribute on TextInput (id=EmployerValidityReason_Input) at ClaimSnapshotGeneral400DV.wc.pcf: line 382, column 73
    function visible_191 () : java.lang.Boolean {
      return Snapshot.EmpQusValidity as String == "Yes"
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 420, column 46
    function valueRoot_215 () : java.lang.Object {
      return ConcurrentEmpl
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 420, column 46
    function value_214 () : dynamic.Dynamic {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 424, column 78
    function value_217 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 428, column 76
    function value_219 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 432, column 77
    function value_221 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 437, column 46
    function value_223 () : dynamic.Dynamic {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 442, column 46
    function value_226 () : dynamic.Dynamic {
      return ConcurrentEmpl.JobTitle
    }
    
    property get ConcurrentEmpl () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 469, column 46
    function valueRoot_236 () : java.lang.Object {
      return WorkStatusChange
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 464, column 81
    function value_233 () : java.lang.String {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 469, column 46
    function value_235 () : dynamic.Dynamic {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 474, column 46
    function value_238 () : dynamic.Dynamic {
      return WorkStatusChange.Comments
    }
    
    property get WorkStatusChange () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 642, column 46
    function valueRoot_321 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 642, column 46
    function value_320 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 647, column 46
    function value_323 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 652, column 46
    function value_326 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 689, column 46
    function valueRoot_343 () : java.lang.Object {
      return OtherBenefit
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 689, column 46
    function value_342 () : dynamic.Dynamic {
      return OtherBenefit.ReferenceNumber
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 694, column 46
    function value_345 () : dynamic.Dynamic {
      return OtherBenefit.Amount
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 698, column 76
    function value_348 () : java.lang.String {
      return util.Snapshot.renderValue(OtherBenefit.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 702, column 74
    function value_350 () : java.lang.String {
      return util.Snapshot.renderValue(OtherBenefit.EndDate)
    }
    
    // 'value' attribute on TextCell (id=InitialContact_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 707, column 46
    function value_352 () : dynamic.Dynamic {
      return OtherBenefit.InitialContact
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 712, column 46
    function value_355 () : dynamic.Dynamic {
      return OtherBenefit.Comments
    }
    
    property get OtherBenefit () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 734, column 46
    function valueRoot_363 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 734, column 46
    function value_362 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 739, column 46
    function value_365 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 744, column 46
    function value_368 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 184, column 46
    function valueRoot_82 () : java.lang.Object {
      return BodyPart
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 184, column 46
    function value_81 () : dynamic.Dynamic {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 189, column 46
    function value_84 () : dynamic.Dynamic {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextCell (id=Compensability_Cell) at ClaimSnapshotGeneral400DV.wc.pcf: line 194, column 46
    function value_87 () : dynamic.Dynamic {
      return BodyPart.Compensability
    }
    
    property get BodyPart () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}