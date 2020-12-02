package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.VehicleDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure310DV_VehicleDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.VehicleDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 349, column 46
    function sortValue_159 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 354, column 46
    function sortValue_160 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 359, column 46
    function sortValue_161 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 365, column 46
    function sortValue_162 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 370, column 46
    function sortValue_163 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 242, column 38
    function valueRoot_111 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 40, column 38
    function valueRoot_12 () : java.lang.Object {
      return Exposure.AssignedUser
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 384, column 51
    function valueRoot_183 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextInput (id=ClaimantAddress_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 100, column 38
    function valueRoot_42 () : java.lang.Object {
      return Exposure.Claimant.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=DriverAddress_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 128, column 38
    function valueRoot_55 () : java.lang.Object {
      return Exposure.Driver.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=LicenseState_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 133, column 38
    function valueRoot_58 () : java.lang.Object {
      return Exposure.Driver
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 150, column 38
    function valueRoot_66 () : java.lang.Object {
      return Exposure.Vehicle
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 222, column 38
    function value_101 () : dynamic.Dynamic {
      return Exposure.Speed
    }
    
    // 'value' attribute on TextInput (id=VehicleDirection_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 227, column 38
    function value_104 () : dynamic.Dynamic {
      return Exposure.VehicleDirection
    }
    
    // 'value' attribute on TextInput (id=CollisionPoint_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 232, column 38
    function value_107 () : dynamic.Dynamic {
      return Exposure.CollisionPoint
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 40, column 38
    function value_11 () : dynamic.Dynamic {
      return Exposure.AssignedUser.Contact
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 242, column 38
    function value_110 () : dynamic.Dynamic {
      return Exposure.Incident.InspectionRequired
    }
    
    // 'value' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 247, column 38
    function value_113 () : dynamic.Dynamic {
      return Exposure.WhenToView
    }
    
    // 'value' attribute on TextInput (id=LocationStreet_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 252, column 38
    function value_116 () : dynamic.Dynamic {
      return Exposure.LocationStreet
    }
    
    // 'value' attribute on TextInput (id=LocationCity_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 257, column 38
    function value_119 () : dynamic.Dynamic {
      return Exposure.LocationCity
    }
    
    // 'value' attribute on TextInput (id=LocationState_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 262, column 38
    function value_122 () : dynamic.Dynamic {
      return Exposure.LocationState
    }
    
    // 'value' attribute on TextInput (id=LocationZip_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 267, column 38
    function value_125 () : dynamic.Dynamic {
      return Exposure.LocationZip
    }
    
    // 'value' attribute on TextInput (id=RepairShop_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 272, column 38
    function value_128 () : dynamic.Dynamic {
      return Exposure.RepairShop
    }
    
    // 'value' attribute on BooleanRadioInput (id=RentalRequired_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 282, column 38
    function value_131 () : dynamic.Dynamic {
      return Exposure.RentalRequired
    }
    
    // 'value' attribute on TextInput (id=RentalBeginDate_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 286, column 70
    function value_134 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.RentalBeginDate)
    }
    
    // 'value' attribute on TextInput (id=RentalEndDate_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 290, column 68
    function value_136 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.RentalEndDate)
    }
    
    // 'value' attribute on TextInput (id=RentalDailyRate_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 295, column 38
    function value_138 () : dynamic.Dynamic {
      return Exposure.RentalDailyRate
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 45, column 38
    function value_14 () : dynamic.Dynamic {
      return Exposure.State
    }
    
    // 'value' attribute on TextInput (id=RentalAgency_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 300, column 38
    function value_141 () : dynamic.Dynamic {
      return Exposure.RentalAgency
    }
    
    // 'value' attribute on TextInput (id=RentalReserveNo_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 305, column 38
    function value_144 () : dynamic.Dynamic {
      return Exposure.RentalReserveNo
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 313, column 38
    function value_147 () : dynamic.Dynamic {
      return Exposure.Segment
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 318, column 38
    function value_150 () : dynamic.Dynamic {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 323, column 38
    function value_153 () : dynamic.Dynamic {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 333, column 38
    function value_156 () : dynamic.Dynamic {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 49, column 65
    function value_17 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CreateTime)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 343, column 41
    function value_179 () : dynamic.Dynamic {
      return Exposure.OtherCoverageDet
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 384, column 51
    function value_182 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 390, column 51
    function value_187 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 53, column 64
    function value_19 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.CloseDate)
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 396, column 51
    function value_192 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 402, column 53
    function value_197 () : dynamic.Dynamic {
      return Exposure.TotalRecoveries
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 408, column 59
    function value_202 () : dynamic.Dynamic {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 57, column 65
    function value_21 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.ReOpenDate)
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 62, column 38
    function value_23 () : dynamic.Dynamic {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 67, column 38
    function value_26 () : dynamic.Dynamic {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 72, column 38
    function value_29 () : dynamic.Dynamic {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 79, column 63
    function value_32 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 84, column 38
    function value_34 () : dynamic.Dynamic {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 91, column 38
    function value_37 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(Exposure.Claim, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 95, column 67
    function value_39 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Claimant)
    }
    
    // 'value' attribute on TextInput (id=ClaimantAddress_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 100, column 38
    function value_41 () : dynamic.Dynamic {
      return Exposure.Claimant.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 107, column 61
    function value_44 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Driver)
    }
    
    // 'value' attribute on TextInput (id=DriverRelToOwner_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 112, column 38
    function value_46 () : dynamic.Dynamic {
      return Exposure.DriverRelToOwner
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 119, column 38
    function value_49 () : dynamic.Dynamic {
      return Exposure.OwnersPermission
    }
    
    // 'value' attribute on TextInput (id=DriverPhone_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 123, column 65
    function value_52 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone(Exposure.Driver)
    }
    
    // 'value' attribute on TextInput (id=DriverAddress_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 128, column 38
    function value_54 () : dynamic.Dynamic {
      return Exposure.Driver.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LicenseState_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 133, column 38
    function value_57 () : dynamic.Dynamic {
      return Exposure.Driver.LicenseState
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 138, column 38
    function value_60 () : dynamic.Dynamic {
      return Exposure.Driver.LicenseNumber
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 145, column 62
    function value_63 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Vehicle)
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 150, column 38
    function value_65 () : dynamic.Dynamic {
      return Exposure.Vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 155, column 38
    function value_68 () : dynamic.Dynamic {
      return Exposure.Vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 160, column 38
    function value_71 () : dynamic.Dynamic {
      return Exposure.Vehicle.Model
    }
    
    // 'value' attribute on TextInput (id=Style_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 165, column 38
    function value_74 () : dynamic.Dynamic {
      return Exposure.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 170, column 38
    function value_77 () : dynamic.Dynamic {
      return Exposure.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 175, column 38
    function value_80 () : dynamic.Dynamic {
      return Exposure.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=VehicleState_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 180, column 38
    function value_83 () : dynamic.Dynamic {
      return Exposure.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 185, column 38
    function value_86 () : dynamic.Dynamic {
      return Exposure.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 195, column 38
    function value_89 () : dynamic.Dynamic {
      return Exposure.Description
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 35, column 63
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Coverage)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 202, column 38
    function value_92 () : dynamic.Dynamic {
      return Exposure.TotalLoss
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleOperable_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 209, column 38
    function value_95 () : dynamic.Dynamic {
      return Exposure.VehicleOperable
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 214, column 38
    function value_98 () : dynamic.Dynamic {
      return Exposure.LossEstimate
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 378, column 61
    function visible_180 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 384, column 51
    function visible_181 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 390, column 51
    function visible_186 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 402, column 53
    function visible_196 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 408, column 59
    function visible_201 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotExposure310DV.VehicleDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 349, column 46
    function valueRoot_165 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 349, column 46
    function value_164 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 354, column 46
    function value_167 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 359, column 46
    function value_170 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 365, column 46
    function value_173 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure310DV.VehicleDamage.pcf: line 370, column 46
    function value_176 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}