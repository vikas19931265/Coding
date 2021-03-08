package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral310DV_wcExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 203, column 38
    function encryptionExpression_93 (VALUE :  dynamic.Dynamic) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(VALUE as String)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 338, column 46
    function sortValue_155 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 342, column 78
    function sortValue_156 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 346, column 76
    function sortValue_157 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 350, column 77
    function sortValue_158 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 355, column 46
    function sortValue_159 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 360, column 46
    function sortValue_160 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.JobTitle
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 382, column 46
    function sortValue_177 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.ReferenceNumber
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 387, column 46
    function sortValue_178 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.Amount
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 391, column 76
    function sortValue_179 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(OtherBenefit.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 395, column 74
    function sortValue_180 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(OtherBenefit.EndDate)
    }
    
    // 'value' attribute on TextCell (id=InitialContact_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 400, column 46
    function sortValue_181 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.InitialContact
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 405, column 46
    function sortValue_182 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.Comments
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 429, column 81
    function sortValue_200 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 434, column 46
    function sortValue_201 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 439, column 46
    function sortValue_202 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Comments
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 634, column 46
    function sortValue_298 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 639, column 46
    function sortValue_299 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 644, column 46
    function sortValue_300 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 162, column 46
    function sortValue_68 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 167, column 46
    function sortValue_69 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextCell (id=Compensability_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 172, column 46
    function sortValue_70 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.Compensability
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=NurseCaseMgr_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 36, column 38
    function valueRoot_10 () : java.lang.Object {
      return Snapshot.NurseCaseMgr
    }
    
    // 'value' attribute on TextInput (id=DepartmentCode_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 220, column 38
    function valueRoot_101 () : java.lang.Object {
      return Snapshot.EmploymentData
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 239, column 38
    function valueRoot_112 () : java.lang.Object {
      return Snapshot.Supervisor
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 41, column 38
    function valueRoot_13 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 491, column 38
    function valueRoot_231 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 501, column 38
    function valueRoot_237 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 530, column 38
    function valueRoot_251 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 31, column 38
    function valueRoot_7 () : java.lang.Object {
      return Snapshot.AssignedUser.Contact
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 184, column 38
    function valueRoot_82 () : java.lang.Object {
      return Snapshot.Claimant
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 193, column 38
    function valueRoot_87 () : java.lang.Object {
      return Snapshot.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=DepartmentCode_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 220, column 38
    function value_100 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.DepartmentCode
    }
    
    // 'value' attribute on TextInput (id=HireDate_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 224, column 78
    function value_103 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.EmploymentData.HireDate)
    }
    
    // 'value' attribute on TextInput (id=HireState_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 229, column 38
    function value_105 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.HireState
    }
    
    // 'value' attribute on TextInput (id=EmploymentStatus_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 234, column 38
    function value_108 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.EmploymentStatus
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 239, column 38
    function value_111 () : dynamic.Dynamic {
      return Snapshot.Supervisor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=NumDaysWorked_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 244, column 38
    function value_114 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=NumHoursWorked_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 249, column 38
    function value_117 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.NumHoursWorked
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 41, column 38
    function value_12 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on TextInput (id=WageAmount_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 254, column 38
    function value_120 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WageAmount
    }
    
    // 'value' attribute on TextInput (id=PayPeriod_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 259, column 38
    function value_123 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PayPeriod
    }
    
    // 'value' attribute on TextInput (id=InjuryStartTime_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 263, column 85
    function value_126 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.EmploymentData.InjuryStartTime)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PaidFull_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 270, column 38
    function value_128 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.PaidFull
    }
    
    // 'value' attribute on BooleanRadioInput (id=WagePaymentCont_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 277, column 38
    function value_131 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WagePaymentCont
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifiedDutyAvail_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 284, column 38
    function value_134 () : dynamic.Dynamic {
      return Snapshot.ModifiedDutyAvail
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjuredRegularJob_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 291, column 38
    function value_137 () : dynamic.Dynamic {
      return Snapshot.InjuredRegularJob
    }
    
    // 'value' attribute on TextInput (id=EmpQusValidity_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 296, column 38
    function value_140 () : dynamic.Dynamic {
      return Snapshot.EmpQusValidity
    }
    
    // 'value' attribute on TextInput (id=EmployerValidityReason_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 301, column 38
    function value_143 () : dynamic.Dynamic {
      return Snapshot.EmployerValidityReason
    }
    
    // 'value' attribute on TextInput (id=DrugsInvolved_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 306, column 38
    function value_146 () : dynamic.Dynamic {
      return Snapshot.DrugsInvolved
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipProv_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 313, column 38
    function value_149 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipProv
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 46, column 38
    function value_15 () : dynamic.Dynamic {
      return Snapshot.Segment
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipUsed_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 320, column 38
    function value_152 () : dynamic.Dynamic {
      return Snapshot.SafetyEquipUsed
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral310DV.wc.pcf: line 332, column 41
    function value_176 () : dynamic.Dynamic {
      return Snapshot.ConcurrentEmpl
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 51, column 38
    function value_18 () : dynamic.Dynamic {
      return Snapshot.Strategy
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral310DV.wc.pcf: line 376, column 41
    function value_199 () : dynamic.Dynamic {
      return Snapshot.OtherBenefits
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 56, column 38
    function value_21 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral310DV.wc.pcf: line 424, column 41
    function value_211 () : dynamic.Dynamic {
      return Snapshot.EmploymentData.WorkStatusChanges
    }
    
    // 'value' attribute on TextInput (id=DateCompDcsnDue_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 450, column 70
    function value_212 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.DateCompDcsnDue)
    }
    
    // 'value' attribute on BooleanRadioInput (id=BenefitsStatusDcsn_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 457, column 38
    function value_214 () : dynamic.Dynamic {
      return Snapshot.BenefitsStatusDcsn
    }
    
    // 'value' attribute on TextInput (id=DateCompDcsnMade_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 461, column 71
    function value_217 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.DateCompDcsnMade)
    }
    
    // 'value' attribute on TextAreaInput (id=Reason_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 467, column 38
    function value_219 () : dynamic.Dynamic {
      return Snapshot.BenefitsDecisionReason
    }
    
    // 'value' attribute on TextInput (id=ReportedDate_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 474, column 67
    function value_222 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.ReportedDate)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 481, column 38
    function value_224 () : dynamic.Dynamic {
      return Snapshot.FirstNoticeSuit
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 486, column 38
    function value_227 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 491, column 38
    function value_230 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ReportedByType_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 496, column 38
    function value_233 () : dynamic.Dynamic {
      return Snapshot.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 501, column 38
    function value_236 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 506, column 38
    function value_239 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 64, column 38
    function value_24 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=ClaimantRprtdDate_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 510, column 72
    function value_242 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.ClaimantRprtdDate)
    }
    
    // 'value' attribute on TextInput (id=DateRptdToEmployer_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 514, column 73
    function value_244 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.DateRptdToEmployer)
    }
    
    // 'value' attribute on TextInput (id=DateFormGivenToEmp_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 518, column 73
    function value_246 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.DateFormGivenToEmp)
    }
    
    // 'value' attribute on TextInput (id=DateFormRetByEmp_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 522, column 71
    function value_248 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.DateFormRetByEmp)
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 530, column 38
    function value_250 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 535, column 38
    function value_253 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=LocationDescription_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 540, column 38
    function value_256 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Description
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 547, column 65
    function value_259 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 551, column 64
    function value_261 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.CloseDate)
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 556, column 38
    function value_263 () : dynamic.Dynamic {
      return Snapshot.ClosedOutcome
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 561, column 38
    function value_266 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 568, column 38
    function value_269 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=DateOfInjury_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 71, column 63
    function value_27 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LossDate)
    }
    
    // 'value' attribute on TextInput (id=DeductibleStatus_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 573, column 38
    function value_272 () : dynamic.Dynamic {
      return Snapshot.DeductibleStatus
    }
    
    // 'value' attribute on TextInput (id=LitigationStatus_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 578, column 38
    function value_275 () : dynamic.Dynamic {
      return Snapshot.LitigationStatus
    }
    
    // 'value' attribute on TextInput (id=SubrogationStatus_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 583, column 38
    function value_278 () : dynamic.Dynamic {
      return Snapshot.SubrogationStatus
    }
    
    // 'value' attribute on TextInput (id=OtherRecovStatus_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 588, column 38
    function value_281 () : dynamic.Dynamic {
      return Snapshot.OtherRecovStatus
    }
    
    // 'value' attribute on TextInput (id=SIUStatus_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 593, column 38
    function value_284 () : dynamic.Dynamic {
      return Snapshot.SIUStatus
    }
    
    // 'value' attribute on TextInput (id=ReinsuranceStatus_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 598, column 38
    function value_287 () : dynamic.Dynamic {
      return Snapshot.ReinsuranceStatus
    }
    
    // 'value' attribute on TextInput (id=ExposureBegan_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 75, column 68
    function value_29 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.ExposureBegan)
    }
    
    // 'value' attribute on TextInput (id=Flagged_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 606, column 38
    function value_290 () : dynamic.Dynamic {
      return Snapshot.Flagged
    }
    
    // 'value' attribute on TextInput (id=FlaggedDate_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 610, column 66
    function value_293 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FlaggedDate)
    }
    
    // 'value' attribute on TextInput (id=FlaggedReason_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 615, column 38
    function value_295 () : dynamic.Dynamic {
      return Snapshot.FlaggedReason
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextInput (id=ExposureEnded_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 79, column 68
    function value_31 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.ExposureEnded)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral310DV.wc.pcf: line 628, column 41
    function value_310 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentInjury_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 86, column 38
    function value_33 () : dynamic.Dynamic {
      return Snapshot.EmploymentInjury
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 90, column 67
    function value_36 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LocationCode)
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 95, column 38
    function value_38 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=InsuredPremises_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 102, column 38
    function value_41 () : dynamic.Dynamic {
      return Snapshot.InsuredPremises
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 107, column 38
    function value_44 () : dynamic.Dynamic {
      return Snapshot.Severity
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 115, column 38
    function value_47 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=AccidentType_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 120, column 38
    function value_50 () : dynamic.Dynamic {
      return Snapshot.AccidentType
    }
    
    // 'value' attribute on TextInput (id=PrimaryInjury_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 125, column 38
    function value_53 () : dynamic.Dynamic {
      return Snapshot.PrimaryInjury
    }
    
    // 'value' attribute on TextInput (id=DetailedInjury_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 130, column 38
    function value_56 () : dynamic.Dynamic {
      return Snapshot.DetailedInjury
    }
    
    // 'value' attribute on TextInput (id=PrimaryBodyPart_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 135, column 38
    function value_59 () : dynamic.Dynamic {
      return Snapshot.PrimaryBodyPart
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Snapshot.AssignedUser.Contact.DisplayName
    }
    
    // 'value' attribute on TextAreaInput (id=DetailedBodyPart_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 141, column 38
    function value_62 () : dynamic.Dynamic {
      return Snapshot.DetailedBodyPart
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 146, column 38
    function value_65 () : dynamic.Dynamic {
      return Snapshot.InjuryDescription
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral310DV.wc.pcf: line 156, column 41
    function value_80 () : dynamic.Dynamic {
      return Snapshot.BodyPartDetails
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 184, column 38
    function value_81 () : dynamic.Dynamic {
      return Snapshot.Claimant.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 188, column 67
    function value_84 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Snapshot.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 193, column 38
    function value_86 () : dynamic.Dynamic {
      return Snapshot.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DateOfBirth_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 197, column 75
    function value_89 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Claimant.DateOfBirth)
    }
    
    // 'value' attribute on TextInput (id=NurseCaseMgr_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 36, column 38
    function value_9 () : dynamic.Dynamic {
      return Snapshot.NurseCaseMgr.DisplayName
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 203, column 38
    function value_91 () : dynamic.Dynamic {
      return Snapshot.Claimant.TaxID
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 211, column 38
    function value_95 () : dynamic.Dynamic {
      return Snapshot.Claimant.Occupation
    }
    
    // 'value' attribute on TextInput (id=EmpClass_Input) at ClaimSnapshotGeneral310DV.wc.pcf: line 215, column 78
    function value_98 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.EmploymentData.EmpClass)
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 338, column 46
    function valueRoot_162 () : java.lang.Object {
      return ConcurrentEmpl
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 338, column 46
    function value_161 () : dynamic.Dynamic {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 342, column 78
    function value_164 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 346, column 76
    function value_166 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 350, column 77
    function value_168 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 355, column 46
    function value_170 () : dynamic.Dynamic {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 360, column 46
    function value_173 () : dynamic.Dynamic {
      return ConcurrentEmpl.JobTitle
    }
    
    property get ConcurrentEmpl () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 382, column 46
    function valueRoot_184 () : java.lang.Object {
      return OtherBenefit
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 382, column 46
    function value_183 () : dynamic.Dynamic {
      return OtherBenefit.ReferenceNumber
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 387, column 46
    function value_186 () : dynamic.Dynamic {
      return OtherBenefit.Amount
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 391, column 76
    function value_189 () : java.lang.String {
      return util.Snapshot.renderValue(OtherBenefit.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 395, column 74
    function value_191 () : java.lang.String {
      return util.Snapshot.renderValue(OtherBenefit.EndDate)
    }
    
    // 'value' attribute on TextCell (id=InitialContact_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 400, column 46
    function value_193 () : dynamic.Dynamic {
      return OtherBenefit.InitialContact
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 405, column 46
    function value_196 () : dynamic.Dynamic {
      return OtherBenefit.Comments
    }
    
    property get OtherBenefit () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 434, column 46
    function valueRoot_206 () : java.lang.Object {
      return WorkStatusChange
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 429, column 81
    function value_203 () : java.lang.String {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 434, column 46
    function value_205 () : dynamic.Dynamic {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 439, column 46
    function value_208 () : dynamic.Dynamic {
      return WorkStatusChange.Comments
    }
    
    property get WorkStatusChange () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 634, column 46
    function valueRoot_302 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 634, column 46
    function value_301 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 639, column 46
    function value_304 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 644, column 46
    function value_307 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 162, column 46
    function valueRoot_72 () : java.lang.Object {
      return BodyPart
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 162, column 46
    function value_71 () : dynamic.Dynamic {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 167, column 46
    function value_74 () : dynamic.Dynamic {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextCell (id=Compensability_Cell) at ClaimSnapshotGeneral310DV.wc.pcf: line 172, column 46
    function value_77 () : dynamic.Dynamic {
      return BodyPart.Compensability
    }
    
    property get BodyPart () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}