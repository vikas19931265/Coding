package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.GeneralDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure310DV_GeneralDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.GeneralDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 159, column 46
    function sortValue_62 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 164, column 46
    function sortValue_63 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 169, column 46
    function sortValue_64 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 175, column 46
    function sortValue_65 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 180, column 46
    function sortValue_66 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 40, column 38
    function valueRoot_12 () : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 95, column 38
    function valueRoot_39 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 194, column 51
    function valueRoot_86 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 212, column 53
    function value_100 () : dynamic.Dynamic {
      return Exposure.TotalRecoveries
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 218, column 59
    function value_105 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 40, column 38
    function value_11 () : dynamic.Dynamic {
      return Exposure.AssignedUser.Contact
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 45, column 38
    function value_14 () : dynamic.Dynamic {
      return Exposure.State
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 49, column 65
    function value_17 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 53, column 64
    function value_19 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CloseDate)
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 57, column 65
    function value_21 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.ReOpenDate)
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 62, column 38
    function value_23 () : dynamic.Dynamic {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 67, column 38
    function value_26 () : dynamic.Dynamic {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 74, column 63
    function value_29 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 79, column 38
    function value_31 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 86, column 38
    function value_34 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 90, column 67
    function value_36 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 95, column 38
    function value_38 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 104, column 38
    function value_41 () : dynamic.Dynamic {
      return Exposure.Severity
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 110, column 38
    function value_44 () : dynamic.Dynamic {
      return Exposure.Description
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 115, column 38
    function value_47 () : dynamic.Dynamic {
      return Exposure.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 123, column 38
    function value_50 () : dynamic.Dynamic {
      return Exposure.Segment
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 128, column 38
    function value_53 () : dynamic.Dynamic {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 133, column 38
    function value_56 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 143, column 38
    function value_59 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 153, column 41
    function value_82 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 194, column 51
    function value_85 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 35, column 63
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Coverage)
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 200, column 51
    function value_90 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 206, column 51
    function value_95 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 218, column 59
    function visible_104 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Claim)
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 188, column 61
    function visible_83 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 194, column 51
    function visible_84 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 200, column 51
    function visible_89 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 212, column 53
    function visible_99 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.GeneralDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 159, column 46
    function valueRoot_68 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 159, column 46
    function value_67 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 164, column 46
    function value_70 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 169, column 46
    function value_73 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 175, column 46
    function value_76 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.GeneralDamage.pcf: line 180, column 46
    function value_79 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}