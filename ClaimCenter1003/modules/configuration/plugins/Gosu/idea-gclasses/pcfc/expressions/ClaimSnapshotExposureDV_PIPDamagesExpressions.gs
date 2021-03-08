package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposureDV.PIPDamages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposureDV_PIPDamagesExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposureDV.PIPDamages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposureDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 163, column 81
    function sortValue_69 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 168, column 46
    function sortValue_70 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 173, column 46
    function sortValue_71 (WorkStatusChange :  dynamic.Dynamic) : java.lang.Object {
      return WorkStatusChange.Comments
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 214, column 46
    function sortValue_87 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 219, column 46
    function sortValue_88 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 224, column 46
    function sortValue_89 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 230, column 46
    function sortValue_90 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 235, column 46
    function sortValue_91 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 72, column 38
    function valueRoot_26 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 80, column 38
    function valueRoot_29 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextInput (id=ContactCompany_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 85, column 38
    function valueRoot_32 () : java.lang.Object {
      return Exposure.Claimant.ContactCompany
    }
    
    // 'value' attribute on TextInput (id=PrimaryContact_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 90, column 38
    function valueRoot_35 () : java.lang.Object {
      return Exposure.Claimant.ContactCompany.PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=EmploymentStatus_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 99, column 38
    function valueRoot_40 () : java.lang.Object {
      return Exposure.PriorEmpData
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposureDV.PIPDamages.pcf: line 208, column 41
    function value_107 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 40, column 65
    function value_12 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 44, column 63
    function value_14 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.StatLine)
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 51, column 63
    function value_16 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 56, column 38
    function value_18 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 63, column 38
    function value_21 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 67, column 67
    function value_23 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 72, column 38
    function value_25 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Occupation_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 80, column 38
    function value_28 () : dynamic.Dynamic {
      return Exposure.Claimant.Occupation
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=ContactCompany_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 85, column 38
    function value_31 () : dynamic.Dynamic {
      return Exposure.Claimant.ContactCompany.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PrimaryContact_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 90, column 38
    function value_34 () : dynamic.Dynamic {
      return Exposure.Claimant.ContactCompany.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=HireDate_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 94, column 76
    function value_37 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.PriorEmpData.HireDate)
    }
    
    // 'value' attribute on TextInput (id=EmploymentStatus_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 99, column 38
    function value_39 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.EmploymentStatus
    }
    
    // 'value' attribute on TextInput (id=NumHoursWorked_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 104, column 38
    function value_42 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.NumHoursWorked
    }
    
    // 'value' attribute on TextInput (id=NumDaysWorked_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 109, column 38
    function value_45 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.NumDaysWorked
    }
    
    // 'value' attribute on TextInput (id=WageAmount_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 114, column 38
    function value_48 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.WageAmount
    }
    
    // 'value' attribute on TextInput (id=OvertimeRate_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 119, column 38
    function value_51 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.OvertimeRate
    }
    
    // 'value' attribute on TextInput (id=LastYearIncome_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 124, column 38
    function value_54 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.LastYearIncome
    }
    
    // 'value' attribute on TextInput (id=PayPeriod_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 129, column 38
    function value_57 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.PayPeriod
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on BooleanRadioInput (id=WagePaymentCont_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 136, column 38
    function value_60 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.WagePaymentCont
    }
    
    // 'value' attribute on TextInput (id=InjuryStartTime_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 141, column 38
    function value_63 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.InjuryStartTime
    }
    
    // 'value' attribute on TextInput (id=DaysWorkedWeek_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 146, column 38
    function value_66 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.DaysWorkedWeek
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposureDV.PIPDamages.pcf: line 158, column 41
    function value_80 () : dynamic.Dynamic {
      return Exposure.PriorEmpData.WorkStatusChanges
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 187, column 38
    function value_81 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 197, column 38
    function value_84 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 36, column 38
    function value_9 () : dynamic.Dynamic {
      return Exposure.Coverage
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Exposure () : dynamic.Dynamic {
      return getRequireValue("Exposure", 0) as dynamic.Dynamic
    }
    
    property set Exposure ($arg :  dynamic.Dynamic) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposureDV.PIPDamages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotExposureDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 214, column 46
    function valueRoot_93 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 230, column 46
    function value_101 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 235, column 46
    function value_104 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 214, column 46
    function value_92 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 219, column 46
    function value_95 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 224, column 46
    function value_98 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposureDV.PIPDamages.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposureDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 168, column 46
    function valueRoot_75 () : java.lang.Object {
      return WorkStatusChange
    }
    
    // 'value' attribute on TextCell (id=StatusDate_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 163, column 81
    function value_72 () : java.lang.String {
      return util.Snapshot.renderValue(WorkStatusChange.StatusDate)
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 168, column 46
    function value_74 () : dynamic.Dynamic {
      return WorkStatusChange.Status
    }
    
    // 'value' attribute on TextCell (id=Comments_Cell) at ClaimSnapshotExposureDV.PIPDamages.pcf: line 173, column 46
    function value_77 () : dynamic.Dynamic {
      return WorkStatusChange.Comments
    }
    
    property get WorkStatusChange () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}