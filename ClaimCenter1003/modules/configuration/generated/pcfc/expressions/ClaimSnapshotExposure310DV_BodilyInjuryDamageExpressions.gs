package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure310DV_BodilyInjuryDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 205, column 46
    function sortValue_87 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 210, column 46
    function sortValue_88 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 215, column 46
    function sortValue_89 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 221, column 46
    function sortValue_90 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 226, column 46
    function sortValue_91 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 240, column 51
    function valueRoot_111 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 40, column 38
    function valueRoot_12 () : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 95, column 38
    function valueRoot_39 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 199, column 41
    function value_107 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 40, column 38
    function value_11 () : dynamic.Dynamic {
      return Exposure.AssignedUser.Contact
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 240, column 51
    function value_110 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 246, column 51
    function value_115 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 252, column 51
    function value_120 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 258, column 53
    function value_125 () : dynamic.Dynamic {
      return Exposure.TotalRecoveries
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 264, column 59
    function value_130 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 45, column 38
    function value_14 () : dynamic.Dynamic {
      return Exposure.State
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 49, column 65
    function value_17 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 53, column 64
    function value_19 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CloseDate)
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 57, column 65
    function value_21 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.ReOpenDate)
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 62, column 38
    function value_23 () : dynamic.Dynamic {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 67, column 38
    function value_26 () : dynamic.Dynamic {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 74, column 63
    function value_29 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 79, column 38
    function value_31 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 86, column 38
    function value_34 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 90, column 67
    function value_36 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 95, column 38
    function value_38 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AltContact_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 100, column 65
    function value_41 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.AltContact)
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 109, column 38
    function value_43 () : dynamic.Dynamic {
      return Exposure.Severity
    }
    
    // 'value' attribute on TextInput (id=LeadingInjury_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 114, column 38
    function value_46 () : dynamic.Dynamic {
      return Exposure.LeadingInjury
    }
    
    // 'value' attribute on TextInput (id=DetailedInjury_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 119, column 38
    function value_49 () : dynamic.Dynamic {
      return Exposure.DetailedInjury
    }
    
    // 'value' attribute on TextInput (id=PrimaryBodyPart_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 124, column 38
    function value_52 () : dynamic.Dynamic {
      return Exposure.PrimaryBodyPart
    }
    
    // 'value' attribute on TextInput (id=DetailedBodyPart_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 129, column 38
    function value_55 () : dynamic.Dynamic {
      return Exposure.DetailedBodyPart
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 135, column 38
    function value_58 () : dynamic.Dynamic {
      return Exposure.Description
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=Doctor_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 139, column 61
    function value_61 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Doctor)
    }
    
    // 'value' attribute on TextInput (id=MedicalTreatment_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 144, column 38
    function value_63 () : dynamic.Dynamic {
      return Exposure.MedicalTreatment
    }
    
    // 'value' attribute on BooleanRadioInput (id=LostWages_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 151, column 38
    function value_66 () : dynamic.Dynamic {
      return Exposure.LostWages
    }
    
    // 'value' attribute on TextInput (id=Impairment_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 156, column 38
    function value_69 () : dynamic.Dynamic {
      return Exposure.Impairment
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 161, column 38
    function value_72 () : dynamic.Dynamic {
      return Exposure.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 169, column 38
    function value_75 () : dynamic.Dynamic {
      return Exposure.Segment
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 174, column 38
    function value_78 () : dynamic.Dynamic {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 179, column 38
    function value_81 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 189, column 38
    function value_84 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 35, column 63
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Coverage)
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 234, column 61
    function visible_108 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 240, column 51
    function visible_109 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 246, column 51
    function visible_114 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 258, column 53
    function visible_124 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 264, column 59
    function visible_129 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Claim)
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 205, column 46
    function valueRoot_93 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 221, column 46
    function value_101 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 226, column 46
    function value_104 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 205, column 46
    function value_92 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 210, column 46
    function value_95 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.BodilyInjuryDamage.pcf: line 215, column 46
    function value_98 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}