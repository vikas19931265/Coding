package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.LossOfUseDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure310DV_LossOfUseDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.LossOfUseDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 161, column 46
    function sortValue_61 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 166, column 46
    function sortValue_62 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 171, column 46
    function sortValue_63 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 177, column 46
    function sortValue_64 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 182, column 46
    function sortValue_65 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 40, column 38
    function valueRoot_12 () : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 94, column 38
    function valueRoot_38 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=TempLocation_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 103, column 38
    function valueRoot_41 () : java.lang.Object {
      return Exposure.TempLocation
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 196, column 51
    function valueRoot_85 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 220, column 59
    function value_104 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 40, column 38
    function value_11 () : dynamic.Dynamic {
      return Exposure.AssignedUser.Contact
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 45, column 38
    function value_14 () : dynamic.Dynamic {
      return Exposure.State
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 49, column 65
    function value_17 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 53, column 64
    function value_19 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CloseDate)
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 57, column 65
    function value_21 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.ReOpenDate)
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 62, column 38
    function value_23 () : dynamic.Dynamic {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 66, column 63
    function value_26 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.StatLine)
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 73, column 63
    function value_28 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 78, column 38
    function value_30 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 85, column 38
    function value_33 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 89, column 67
    function value_35 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 94, column 38
    function value_37 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=TempLocation_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 103, column 38
    function value_40 () : dynamic.Dynamic {
      return Exposure.TempLocation.DisplayName
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 112, column 38
    function value_43 () : dynamic.Dynamic {
      return Exposure.Description
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 117, column 38
    function value_46 () : dynamic.Dynamic {
      return Exposure.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 125, column 38
    function value_49 () : dynamic.Dynamic {
      return Exposure.Segment
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 130, column 38
    function value_52 () : dynamic.Dynamic {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 135, column 38
    function value_55 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 145, column 38
    function value_58 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 155, column 41
    function value_81 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 196, column 51
    function value_84 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 202, column 51
    function value_89 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 35, column 63
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Coverage)
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 208, column 51
    function value_94 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 214, column 53
    function value_99 () : dynamic.Dynamic {
      return Exposure.TotalRecoveries
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 220, column 59
    function visible_103 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Claim)
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 190, column 61
    function visible_82 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 196, column 51
    function visible_83 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 202, column 51
    function visible_88 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 214, column 53
    function visible_98 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.LossOfUseDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 161, column 46
    function valueRoot_67 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 161, column 46
    function value_66 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 166, column 46
    function value_69 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 171, column 46
    function value_72 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 177, column 46
    function value_75 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.LossOfUseDamage.pcf: line 182, column 46
    function value_78 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}