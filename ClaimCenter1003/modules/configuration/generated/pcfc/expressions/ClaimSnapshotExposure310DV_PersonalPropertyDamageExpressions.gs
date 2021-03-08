package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure310DV_PersonalPropertyDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 217, column 46
    function sortValue_91 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 222, column 46
    function sortValue_92 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 227, column 46
    function sortValue_93 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 233, column 46
    function sortValue_94 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 238, column 46
    function sortValue_95 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 252, column 51
    function valueRoot_115 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 40, column 38
    function valueRoot_12 () : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 94, column 38
    function valueRoot_38 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 125, column 38
    function valueRoot_50 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 40, column 38
    function value_11 () : dynamic.Dynamic {
      return Exposure.AssignedUser.Contact
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 211, column 41
    function value_111 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 252, column 51
    function value_114 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 258, column 51
    function value_119 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 264, column 51
    function value_124 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 270, column 53
    function value_129 () : dynamic.Dynamic {
      return Exposure.TotalRecoveries
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 276, column 59
    function value_134 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 45, column 38
    function value_14 () : dynamic.Dynamic {
      return Exposure.State
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 49, column 65
    function value_17 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 53, column 64
    function value_19 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CloseDate)
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 57, column 65
    function value_21 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.ReOpenDate)
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 62, column 38
    function value_23 () : dynamic.Dynamic {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 66, column 63
    function value_26 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.StatLine)
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 73, column 63
    function value_28 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 78, column 38
    function value_30 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 85, column 38
    function value_33 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 89, column 67
    function value_35 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=PrimaryAddress_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 94, column 38
    function value_37 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PropertyDesc_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 102, column 38
    function value_40 () : dynamic.Dynamic {
      return Exposure.PropertyDesc
    }
    
    // 'value' attribute on TextAreaInput (id=DamageDescription_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 108, column 38
    function value_43 () : dynamic.Dynamic {
      return Exposure.Description
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 113, column 38
    function value_46 () : dynamic.Dynamic {
      return Exposure.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 125, column 38
    function value_49 () : dynamic.Dynamic {
      return Exposure.Incident.InspectionRequired
    }
    
    // 'value' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 130, column 38
    function value_52 () : dynamic.Dynamic {
      return Exposure.WhenToView
    }
    
    // 'value' attribute on TextInput (id=LocationStreet_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 135, column 38
    function value_55 () : dynamic.Dynamic {
      return Exposure.LocationStreet
    }
    
    // 'value' attribute on TextInput (id=LocationCity_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 140, column 38
    function value_58 () : dynamic.Dynamic {
      return Exposure.LocationCity
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=LocationState_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 145, column 38
    function value_61 () : dynamic.Dynamic {
      return Exposure.LocationState
    }
    
    // 'value' attribute on TextInput (id=LocationZip_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 150, column 38
    function value_64 () : dynamic.Dynamic {
      return Exposure.LocationZip
    }
    
    // 'value' attribute on TextInput (id=EstimatesReceived_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 158, column 38
    function value_67 () : dynamic.Dynamic {
      return Exposure.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstRepairCost_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 163, column 38
    function value_70 () : dynamic.Dynamic {
      return Exposure.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstRepairTime_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 168, column 38
    function value_73 () : dynamic.Dynamic {
      return Exposure.EstRepairTime
    }
    
    // 'value' attribute on TextInput (id=RepairShop_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 173, column 38
    function value_76 () : dynamic.Dynamic {
      return Exposure.RepairShop
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 181, column 38
    function value_79 () : dynamic.Dynamic {
      return Exposure.Segment
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 186, column 38
    function value_82 () : dynamic.Dynamic {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 191, column 38
    function value_85 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 201, column 38
    function value_88 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 35, column 63
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Coverage)
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 246, column 61
    function visible_112 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 252, column 51
    function visible_113 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 258, column 51
    function visible_118 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 270, column 53
    function visible_128 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 276, column 59
    function visible_133 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 217, column 46
    function valueRoot_97 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 227, column 46
    function value_102 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 233, column 46
    function value_105 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 238, column 46
    function value_108 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 217, column 46
    function value_96 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.PersonalPropertyDamage.pcf: line 222, column 46
    function value_99 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}