package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral300DV_wcExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral300DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 199, column 38
    function encryptionExpression_70 (VALUE :  dynamic.Dynamic) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(VALUE as String)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 334, column 46
    function sortValue_114 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 338, column 78
    function sortValue_115 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 342, column 76
    function sortValue_116 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 346, column 77
    function sortValue_117 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 351, column 46
    function sortValue_118 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 356, column 46
    function sortValue_119 (ConcurrentEmpl :  dynamic.Dynamic) : java.lang.Object {
      return ConcurrentEmpl.JobTitle
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 379, column 46
    function sortValue_136 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.ReferenceNumber
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 384, column 46
    function sortValue_137 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.Amount
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 388, column 76
    function sortValue_138 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(OtherBenefit.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 392, column 74
    function sortValue_139 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(OtherBenefit.EndDate)
    }
    
    // 'value' attribute on TextCell (id=InitialContact_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 397, column 46
    function sortValue_140 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.InitialContact
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 402, column 46
    function sortValue_141 (OtherBenefit :  dynamic.Dynamic) : java.lang.Object {
      return OtherBenefit.Comments
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 427, column 81
    function sortValue_159 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 432, column 46
    function sortValue_160 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 437, column 46
    function sortValue_161 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Comments
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 630, column 46
    function sortValue_235 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 635, column 46
    function sortValue_236 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 640, column 46
    function sortValue_237 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 160, column 46
    function sortValue_48 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 165, column 46
    function sortValue_49 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextCell (id=Compensability_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 170, column 46
    function sortValue_50 (BodyPart :  dynamic.Dynamic) : java.lang.Object {
      return BodyPart.Compensability
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossType")
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 43, column 38
    function value_10 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Segment")
    }
    
    // 'value' attribute on BooleanRadioInput (id=ModifiedDutyAvail_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 279, column 38
    function value_100 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "ModifiedDutyAvail")
    }
    
    // 'value' attribute on BooleanRadioInput (id=InjuredRegularJob_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 286, column 38
    function value_102 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "InjuredRegularJob")
    }
    
    // 'value' attribute on TextInput (id=EmpQusValidity_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 291, column 38
    function value_104 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmpQusValidity")
    }
    
    // 'value' attribute on TextInput (id=EmployerValidityReason_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 296, column 38
    function value_106 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmployerValidityReason")
    }
    
    // 'value' attribute on TextInput (id=DrugsInvolved_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 301, column 38
    function value_108 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "DrugsInvolved")
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipProv_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 308, column 38
    function value_110 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SafetyEquipProv")
    }
    
    // 'value' attribute on BooleanRadioInput (id=SafetyEquipUsed_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 315, column 38
    function value_112 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SafetyEquipUsed")
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 48, column 38
    function value_12 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Strategy")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral300DV.wc.pcf: line 328, column 44
    function value_135 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Snapshot, "ConcurrentEmpl") as Object[]
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 53, column 38
    function value_14 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "PermissionRequired")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral300DV.wc.pcf: line 373, column 44
    function value_158 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Snapshot, "OtherBenefits") as Object[]
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 61, column 38
    function value_16 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Description")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral300DV.wc.pcf: line 422, column 44
    function value_170 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["WorkStatusChanges"] as Object[]
    }
    
    // 'value' attribute on TextInput (id=DateCompDcsnDue_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 448, column 117
    function value_171 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "DateCompDcsnDue") )
    }
    
    // 'value' attribute on BooleanRadioInput (id=BenefitsStatusDcsn_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 455, column 38
    function value_173 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "BenefitsStatusDcsn")
    }
    
    // 'value' attribute on TextInput (id=DateCompDcsnMade_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 459, column 118
    function value_175 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "DateCompDcsnMade") )
    }
    
    // 'value' attribute on TextAreaInput (id=Reason_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 465, column 38
    function value_177 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "BenefitsDecisionReason")
    }
    
    // 'value' attribute on TextInput (id=ReportedDate_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 472, column 114
    function value_179 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "ReportedDate") )
    }
    
    // 'value' attribute on TextInput (id=DateOfInjury_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 68, column 110
    function value_18 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "LossDate") )
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 479, column 38
    function value_181 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "FirstNoticeSuit")
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 484, column 38
    function value_183 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "HowReported")
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 488, column 108
    function value_185 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getContactByRole(Snapshot, "reporter"))
    }
    
    // 'value' attribute on TextInput (id=DriverRelation_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 493, column 38
    function value_187 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "ReportedByType")
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 497, column 111
    function value_189 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getContactByRole(Snapshot, "maincontact"))
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 502, column 38
    function value_191 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "MainContactType")
    }
    
    // 'value' attribute on TextInput (id=ClaimantRprtdDate_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 506, column 119
    function value_193 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "ClaimantRprtdDate") )
    }
    
    // 'value' attribute on TextInput (id=DateRptdToEmployer_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 510, column 120
    function value_195 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "DateRptdToEmployer") )
    }
    
    // 'value' attribute on TextInput (id=DateFormGivenToEmp_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 514, column 120
    function value_197 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "DateFormGivenToEmp") )
    }
    
    // 'value' attribute on TextInput (id=DateFormRetByEmp_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 518, column 118
    function value_199 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "DateFormRetByEmp") )
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 26, column 38
    function value_2 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LOBCode")
    }
    
    // 'value' attribute on TextInput (id=ExposureBegan_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 72, column 115
    function value_20 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "ExposureBegan") )
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 525, column 114
    function value_201 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "LossLocation") )
    }
    
    // 'value' attribute on TextInput (id=AddressLine2_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 530, column 38
    function value_203 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossLocation")["AddressLine2"]
    }
    
    // 'value' attribute on TextInput (id=LocationDescription_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 535, column 38
    function value_205 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossLocation")["Description"]
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 542, column 112
    function value_207 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "CreateTime") )
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 546, column 111
    function value_209 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "CloseDate") )
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 551, column 38
    function value_211 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "ClosedOutcome")
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 556, column 38
    function value_213 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "IncidentReport")
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 563, column 38
    function value_215 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "CoverageInQuestion")
    }
    
    // 'value' attribute on TextInput (id=DeductibleStatus_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 568, column 38
    function value_217 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "DeductibleStatus")
    }
    
    // 'value' attribute on TextInput (id=LitigationStatus_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 573, column 38
    function value_219 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LitigationStatus")
    }
    
    // 'value' attribute on TextInput (id=ExposureEnded_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 76, column 115
    function value_22 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "ExposureEnded") )
    }
    
    // 'value' attribute on TextInput (id=SubrogationStatus_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 578, column 38
    function value_221 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SubrogationStatus")
    }
    
    // 'value' attribute on TextInput (id=OtherRecovStatus_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 583, column 38
    function value_223 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "OtherRecovStatus")
    }
    
    // 'value' attribute on TextInput (id=SIUStatus_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 588, column 38
    function value_225 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SIUStatus")
    }
    
    // 'value' attribute on TextInput (id=ReinsuranceStatus_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 593, column 38
    function value_227 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "ReinsuranceStatus")
    }
    
    // 'value' attribute on TextInput (id=Flagged_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 601, column 38
    function value_229 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Flagged")
    }
    
    // 'value' attribute on TextInput (id=FlaggedDate_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 605, column 113
    function value_231 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "FlaggedDate") )
    }
    
    // 'value' attribute on TextInput (id=FlaggedReason_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 610, column 38
    function value_233 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "FlaggedReason")
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentInjury_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 83, column 38
    function value_24 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentInjury")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral300DV.wc.pcf: line 624, column 44
    function value_247 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Snapshot, "Officials") as Object[]
    }
    
    // 'value' attribute on TextInput (id=LocationCode_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 87, column 114
    function value_26 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "LocationCode") )
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 92, column 38
    function value_28 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "JurisdictionState")
    }
    
    // 'value' attribute on BooleanRadioInput (id=InsuredPremises_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 99, column 38
    function value_30 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "InsuredPremises")
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 104, column 38
    function value_32 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Severity")
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 112, column 38
    function value_34 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossCause")
    }
    
    // 'value' attribute on TextInput (id=AccidentType_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 117, column 38
    function value_36 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "AccidentType")
    }
    
    // 'value' attribute on TextInput (id=PrimaryInjury_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 122, column 38
    function value_38 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "PrimaryInjury")
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 30, column 135
    function value_4 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "AssignedUser")["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=DetailedInjury_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 127, column 38
    function value_40 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "DetailedInjury")
    }
    
    // 'value' attribute on TextInput (id=PrimaryBodyPart_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 132, column 38
    function value_42 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "PrimaryBodyPart")
    }
    
    // 'value' attribute on TextAreaInput (id=DetailedBodyPart_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 138, column 38
    function value_44 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "DetailedBodyPart")
    }
    
    // 'value' attribute on TextInput (id=InjuryDescription_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 143, column 38
    function value_46 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "InjuryDescription")
    }
    
    // 'value' attribute on TextInput (id=NurseCaseMgr_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 34, column 114
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "NurseCaseMgr") )
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral300DV.wc.pcf: line 154, column 44
    function value_60 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Snapshot, "BodyPartDetails") as Object[]
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 181, column 110
    function value_61 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getContactByRole(Snapshot, "claimant") )
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 185, column 114
    function value_63 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone( util.Snapshot.getContactByRole(Snapshot, "claimant") )
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 189, column 138
    function value_65 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getContactByRole(Snapshot, "claimant")["PrimaryAddress"] )
    }
    
    // 'value' attribute on TextInput (id=DateOfBirth_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 193, column 135
    function value_67 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getContactByRole(Snapshot, "claimant")["DateOfBirth"] )
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 199, column 38
    function value_69 () : dynamic.Dynamic {
      return util.Snapshot.getContactByRole(Snapshot, "claimant")["TaxID"]
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 207, column 38
    function value_72 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "Claimant")["Occupation"]
    }
    
    // 'value' attribute on TextInput (id=EmpClass_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 211, column 138
    function value_74 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["EmpClass"] )
    }
    
    // 'value' attribute on TextInput (id=DepartmentCode_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 216, column 38
    function value_76 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["DepartmentCode"]
    }
    
    // 'value' attribute on TextInput (id=HireDate_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 220, column 138
    function value_78 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["HireDate"] )
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 38, column 66
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on TextInput (id=HireState_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 225, column 38
    function value_80 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["HireState"]
    }
    
    // 'value' attribute on TextInput (id=EmploymentStatus_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 230, column 38
    function value_82 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["EmploymentStatus"]
    }
    
    // 'value' attribute on TextInput (id=Supervisor_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 234, column 112
    function value_84 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "Supervisor") )
    }
    
    // 'value' attribute on TextInput (id=NumDaysWorked_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 239, column 38
    function value_86 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["NumDaysWorked"]
    }
    
    // 'value' attribute on TextInput (id=NumHoursWorked_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 244, column 38
    function value_88 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["NumHoursWorked"]
    }
    
    // 'value' attribute on TextInput (id=WageAmount_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 249, column 38
    function value_90 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["WageAmount"]
    }
    
    // 'value' attribute on TextInput (id=PayPeriod_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 254, column 38
    function value_92 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["PayPeriod"]
    }
    
    // 'value' attribute on TextInput (id=InjuryStartTime_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 258, column 145
    function value_94 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["InjuryStartTime"] )
    }
    
    // 'value' attribute on BooleanRadioInput (id=PaidFull_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 265, column 38
    function value_96 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["PaidFull"]
    }
    
    // 'value' attribute on BooleanRadioInput (id=WagePaymentCont_Input) at ClaimSnapshotGeneral300DV.wc.pcf: line 272, column 38
    function value_98 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "EmploymentData")["WagePaymentCont"]
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 334, column 46
    function valueRoot_121 () : java.lang.Object {
      return ConcurrentEmpl
    }
    
    // 'value' attribute on TextCell (id=CompanyName_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 334, column 46
    function value_120 () : dynamic.Dynamic {
      return ConcurrentEmpl.CompanyName
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 338, column 78
    function value_123 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 342, column 76
    function value_125 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.EndDate)
    }
    
    // 'value' attribute on TextCell (id=FullTime_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 346, column 77
    function value_127 () : java.lang.String {
      return util.Snapshot.renderValue(ConcurrentEmpl.FullTime)
    }
    
    // 'value' attribute on TextCell (id=WeeklyWage_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 351, column 46
    function value_129 () : dynamic.Dynamic {
      return ConcurrentEmpl.WeeklyWage
    }
    
    // 'value' attribute on TextCell (id=JobTitle_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 356, column 46
    function value_132 () : dynamic.Dynamic {
      return ConcurrentEmpl.JobTitle
    }
    
    property get ConcurrentEmpl () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 379, column 46
    function valueRoot_143 () : java.lang.Object {
      return OtherBenefit
    }
    
    // 'value' attribute on TextCell (id=ReferenceNumber_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 379, column 46
    function value_142 () : dynamic.Dynamic {
      return OtherBenefit.ReferenceNumber
    }
    
    // 'value' attribute on TextCell (id=Amount_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 384, column 46
    function value_145 () : dynamic.Dynamic {
      return OtherBenefit.Amount
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 388, column 76
    function value_148 () : java.lang.String {
      return util.Snapshot.renderValue(OtherBenefit.StartDate)
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 392, column 74
    function value_150 () : java.lang.String {
      return util.Snapshot.renderValue(OtherBenefit.EndDate)
    }
    
    // 'value' attribute on TextCell (id=InitialContact_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 397, column 46
    function value_152 () : dynamic.Dynamic {
      return OtherBenefit.InitialContact
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 402, column 46
    function value_155 () : dynamic.Dynamic {
      return OtherBenefit.Comments
    }
    
    property get OtherBenefit () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 432, column 46
    function valueRoot_165 () : java.lang.Object {
      return WorkStatusChange
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 427, column 81
    function value_162 () : java.lang.String {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 432, column 46
    function value_164 () : dynamic.Dynamic {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 437, column 46
    function value_167 () : dynamic.Dynamic {
      return WorkStatusChange.Comments
    }
    
    property get WorkStatusChange () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 630, column 46
    function valueRoot_239 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 630, column 46
    function value_238 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 635, column 46
    function value_241 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 640, column 46
    function value_244 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 160, column 46
    function valueRoot_52 () : java.lang.Object {
      return BodyPart
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 160, column 46
    function value_51 () : dynamic.Dynamic {
      return BodyPart.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 165, column 46
    function value_54 () : dynamic.Dynamic {
      return BodyPart.DetailedBodyPart
    }
    
    // 'value' attribute on TextCell (id=Compensability_Cell) at ClaimSnapshotGeneral300DV.wc.pcf: line 170, column 46
    function value_57 () : dynamic.Dynamic {
      return BodyPart.Compensability
    }
    
    property get BodyPart () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}