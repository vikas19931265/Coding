package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.VehicleDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposure300DV_VehicleDamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.VehicleDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposure300DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 21, column 31
    function initialValue_0 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Vehicle")
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 350, column 46
    function sortValue_113 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 355, column 46
    function sortValue_114 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 360, column 46
    function sortValue_115 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 366, column 46
    function sortValue_116 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 371, column 46
    function sortValue_117 (OtherCoverageDet :  dynamic.Dynamic) : java.lang.Object {
      return OtherCoverageDet.Notes
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 29, column 38
    function value_1 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LossParty")
    }
    
    // 'value' attribute on TextInput (id=RentalAgency_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 300, column 38
    function value_101 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "RentalAgency")
    }
    
    // 'value' attribute on TextInput (id=RentalReserveNo_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 305, column 38
    function value_103 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "RentalReserveNo")
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 313, column 38
    function value_105 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Segment")
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 318, column 38
    function value_107 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Strategy")
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 323, column 38
    function value_109 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "JurisdictionState")
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 53, column 38
    function value_11 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "State")
    }
    
    // 'value' attribute on BooleanRadioInput (id=OtherCoverage_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 333, column 38
    function value_111 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "OtherCoverage")
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 57, column 112
    function value_13 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "CreateTime") )
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 344, column 44
    function value_133 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Exposure, "OtherCoverageDet") as Object[]
    }
    
    // 'value' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 385, column 51
    function value_136 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["RemainingReserves"]
    }
    
    // 'value' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 391, column 51
    function value_140 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["FuturePayments"]
    }
    
    // 'value' attribute on TextInput (id=TotalPayments_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 397, column 51
    function value_144 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["TotalPayments"]
    }
    
    // 'value' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 403, column 53
    function value_148 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "TotalRecoveries")
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 61, column 111
    function value_15 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "CloseDate") )
    }
    
    // 'value' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 409, column 59
    function value_152 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ExposureRpt")["TotalIncurredNet"]
    }
    
    // 'value' attribute on TextInput (id=ReOpenDate_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 65, column 112
    function value_17 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "ReOpenDate") )
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 70, column 38
    function value_19 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ClosedOutcome")
    }
    
    // 'value' attribute on TextInput (id=StatLine_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 74, column 110
    function value_21 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Exposure, "StatLine") )
    }
    
    // 'value' attribute on TextInput (id=Claimant_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 81, column 119
    function value_23 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=ClaimantType_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 86, column 38
    function value_25 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "ClaimantType")
    }
    
    // 'value' attribute on BooleanRadioInput (id=ContactProhibited_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 93, column 38
    function value_27 () : dynamic.Dynamic {
      return util.Snapshot.getClaimant(SnapshotParam, Exposure)["ContactProhibited"]
    }
    
    // 'value' attribute on TextInput (id=PrimaryPhone_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 97, column 123
    function value_29 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"] )
    }
    
    // 'value' attribute on TextInput (id=PrimaryCoverage_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 34, column 38
    function value_3 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "PrimaryCoverage")
    }
    
    // 'value' attribute on TextInput (id=ClaimantAddress_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 101, column 147
    function value_31 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getClaimant(SnapshotParam, Exposure)["Contact"]["PrimaryAddress"] )
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 108, column 105
    function value_33 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getContactByRole(Claim, "Driver") )
    }
    
    // 'value' attribute on TextInput (id=DriverRelToOwner_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 113, column 38
    function value_35 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "DriverRelToOwner")
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 120, column 38
    function value_37 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "OwnersPermission")
    }
    
    // 'value' attribute on TextInput (id=DriverPhone_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 124, column 134
    function value_39 () : java.lang.String {
      return util.Snapshot.getPrimaryPhone( util.Snapshot.getExposureClaimContact(SnapshotParam, Exposure, "driver") )
    }
    
    // 'value' attribute on TextInput (id=DriverAddress_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 128, column 158
    function value_41 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getExposureClaimContact(SnapshotParam, Exposure, "driver")["PrimaryAddress"] )
    }
    
    // 'value' attribute on TextInput (id=LicenseState_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 133, column 38
    function value_43 () : dynamic.Dynamic {
      return util.Snapshot.getExposureClaimContact(SnapshotParam, Exposure, "driver")["LicenseState"]
    }
    
    // 'value' attribute on TextInput (id=LicenseNumber_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 138, column 38
    function value_45 () : dynamic.Dynamic {
      return util.Snapshot.getExposureClaimContact(SnapshotParam, Exposure, "driver")["LicenseNumber"]
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 145, column 53
    function value_47 () : java.lang.String {
      return util.Snapshot.renderValue(Vehicle)
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 150, column 38
    function value_49 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "Year")
    }
    
    // 'value' attribute on TextInput (id=CoverageSubType_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 39, column 38
    function value_5 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "CoverageSubType")
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 155, column 38
    function value_51 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "Make")
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 160, column 38
    function value_53 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "Model")
    }
    
    // 'value' attribute on TextInput (id=Style_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 165, column 38
    function value_55 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "Style")
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 170, column 38
    function value_57 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "Color")
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 175, column 38
    function value_59 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "Vin")
    }
    
    // 'value' attribute on TextInput (id=VehicleState_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 180, column 38
    function value_61 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "State")
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 185, column 38
    function value_63 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Vehicle, "LicensePlate")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 195, column 38
    function value_65 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Description")
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 202, column 38
    function value_67 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "TotalLoss")
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleOperable_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 209, column 38
    function value_69 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "VehicleOperable")
    }
    
    // 'value' attribute on TextInput (id=Coverage_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 43, column 127
    function value_7 () : java.lang.String {
      return util.Snapshot.getCoverageName(SnapshotParam, util.Snapshot.getPropertyValue(Exposure, "Coverage"))
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 214, column 38
    function value_71 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LossEstimate")
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 222, column 38
    function value_73 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "Speed")
    }
    
    // 'value' attribute on TextInput (id=VehicleDirection_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 227, column 38
    function value_75 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "VehicleDirection")
    }
    
    // 'value' attribute on TextInput (id=CollisionPoint_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 232, column 38
    function value_77 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "CollisionPoint")
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 242, column 38
    function value_79 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "InspectionRequired")
    }
    
    // 'value' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 247, column 38
    function value_81 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "WhenToView")
    }
    
    // 'value' attribute on TextInput (id=LocationStreet_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 252, column 38
    function value_83 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LocationStreet")
    }
    
    // 'value' attribute on TextInput (id=LocationCity_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 257, column 38
    function value_85 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LocationCity")
    }
    
    // 'value' attribute on TextInput (id=LocationState_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 262, column 38
    function value_87 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LocationState")
    }
    
    // 'value' attribute on TextInput (id=LocationZip_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 267, column 38
    function value_89 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "LocationZip")
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 48, column 38
    function value_9 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "AssignedUser")["Contact"]
    }
    
    // 'value' attribute on TextInput (id=RepairShop_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 272, column 38
    function value_91 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "RepairShop")
    }
    
    // 'value' attribute on BooleanRadioInput (id=RentalRequired_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 282, column 38
    function value_93 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "RentalRequired")
    }
    
    // 'value' attribute on TextInput (id=RentalBeginDate_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 286, column 115
    function value_95 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPropertyValue(Exposure, "RentalBeginDate"))
    }
    
    // 'value' attribute on TextInput (id=RentalEndDate_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 290, column 113
    function value_97 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPropertyValue(Exposure, "RentalEndDate"))
    }
    
    // 'value' attribute on TextInput (id=RentalDailyRate_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 295, column 38
    function value_99 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Exposure, "RentalDailyRate")
    }
    
    // 'visible' attribute on Label at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 379, column 61
    function visible_134 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'visible' attribute on TextInput (id=RemainingReserves_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 385, column 51
    function visible_135 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'visible' attribute on TextInput (id=FuturePayments_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 391, column 51
    function visible_139 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalRecoveries_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 403, column 53
    function visible_147 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalIncurredNet_Input) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 409, column 59
    function visible_151 () : java.lang.Boolean {
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
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    property get Vehicle () : dynamic.Dynamic {
      return getVariableValue("Vehicle", 0) as dynamic.Dynamic
    }
    
    property set Vehicle ($arg :  dynamic.Dynamic) {
      setVariableValue("Vehicle", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotExposure300DV.VehicleDamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotExposure300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 350, column 46
    function valueRoot_119 () : java.lang.Object {
      return OtherCoverageDet
    }
    
    // 'value' attribute on TextCell (id=Insurer_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 350, column 46
    function value_118 () : dynamic.Dynamic {
      return OtherCoverageDet.Insurer
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 355, column 46
    function value_121 () : dynamic.Dynamic {
      return OtherCoverageDet.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 360, column 46
    function value_124 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactName
    }
    
    // 'value' attribute on TextCell (id=ContactPhone_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 366, column 46
    function value_127 () : dynamic.Dynamic {
      return OtherCoverageDet.ContactPhone
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotExposure300DV.VehicleDamage.pcf: line 371, column 46
    function value_130 () : dynamic.Dynamic {
      return OtherCoverageDet.Notes
    }
    
    property get OtherCoverageDet () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}