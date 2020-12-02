package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotVehicleIncident700DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotVehicleIncident700DVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotVehicleIncident700DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotVehicleIncident700DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotVehicleIncident700DV.pcf: line 326, column 27
    function def_onEnter_185 (def :  pcf.AddressSnapshot700InputSet) : void {
      def.onEnter(VehicleIncident.LocationAddress,null)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotVehicleIncident700DV.pcf: line 326, column 27
    function def_refreshVariables_186 (def :  pcf.AddressSnapshot700InputSet) : void {
      def.refreshVariables(VehicleIncident.LocationAddress,null)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at ClaimSnapshotVehicleIncident700DV.pcf: line 188, column 46
    function sortValue_102 (Citation :  dynamic.Dynamic) : java.lang.Object {
      return Citation.CitationNumber
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationAuthority_Cell) at ClaimSnapshotVehicleIncident700DV.pcf: line 194, column 46
    function sortValue_103 (Citation :  dynamic.Dynamic) : java.lang.Object {
      return Citation.CitationAuthority
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationType_Cell) at ClaimSnapshotVehicleIncident700DV.pcf: line 200, column 46
    function sortValue_104 (Citation :  dynamic.Dynamic) : java.lang.Object {
      return Citation.CitationType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LossParty_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 20, column 38
    function valueRoot_1 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=TowingAgcy_Picker_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 247, column 38
    function valueRoot_134 () : java.lang.Object {
      return VehicleIncident.TowingAgcy
    }
    
    // 'value' attribute on TextInput (id=RepairShop_Picker_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 262, column 38
    function valueRoot_143 () : java.lang.Object {
      return VehicleIncident.RepairShop
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 92, column 38
    function valueRoot_48 () : java.lang.Object {
      return VehicleIncident.Driver
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 30, column 38
    function valueRoot_7 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LossParty_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return VehicleIncident.VehicleLossParty
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotVehicleIncident700DV.pcf: line 181, column 41
    function value_114 () : dynamic.Dynamic {
      return VehicleIncident.Citations
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 214, column 38
    function value_115 () : dynamic.Dynamic {
      return VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 219, column 38
    function value_118 () : dynamic.Dynamic {
      return VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 40, column 38
    function value_12 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 224, column 38
    function value_121 () : dynamic.Dynamic {
      return VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 229, column 38
    function value_124 () : dynamic.Dynamic {
      return VehicleIncident.EquipmentFailure
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 234, column 38
    function value_127 () : dynamic.Dynamic {
      return VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 239, column 38
    function value_130 () : dynamic.Dynamic {
      return VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=TowingAgcy_Picker_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 247, column 38
    function value_133 () : dynamic.Dynamic {
      return VehicleIncident.TowingAgcy.DisplayName
    }
    
    // 'value' attribute on TextInput (id=TowingAgcy_Phone_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 252, column 38
    function value_136 () : dynamic.Dynamic {
      return VehicleIncident.TowingAgcy.PrimaryPhoneValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=RepWhereDisInd_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 257, column 38
    function value_139 () : dynamic.Dynamic {
      return VehicleIncident.RepWhereDisInd
    }
    
    // 'value' attribute on TextInput (id=RepairShop_Picker_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 262, column 38
    function value_142 () : dynamic.Dynamic {
      return VehicleIncident.RepairShop.DisplayName
    }
    
    // 'value' attribute on TextInput (id=RepairShop_Phone_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 267, column 38
    function value_145 () : dynamic.Dynamic {
      return VehicleIncident.RepairShop.PrimaryPhoneValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=Collision_Indicator_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 275, column 38
    function value_148 () : dynamic.Dynamic {
      return VehicleIncident.Collision
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Style_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 45, column 38
    function value_15 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 281, column 46
    function value_152 () : dynamic.Dynamic {
      return VehicleIncident.Speed
    }
    
    // 'value' attribute on TextInput (id=VehicleDirection_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 287, column 46
    function value_157 () : dynamic.Dynamic {
      return VehicleIncident.VehicleDirection
    }
    
    // 'value' attribute on TextInput (id=CollisionPoint_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 293, column 46
    function value_162 () : dynamic.Dynamic {
      return VehicleIncident.CollisionPoint
    }
    
    // 'value' attribute on TextInput (id=Exposure_TrafficViolation_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 299, column 46
    function value_167 () : dynamic.Dynamic {
      return VehicleIncident.TrafficViolation
    }
    
    // 'value' attribute on BooleanRadioInput (id=InspectionRequired_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 307, column 38
    function value_171 () : dynamic.Dynamic {
      return VehicleIncident.InspectionRequired
    }
    
    // 'value' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 313, column 55
    function value_175 () : dynamic.Dynamic {
      return VehicleIncident.WhenToView
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 50, column 38
    function value_18 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleLocationInd_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 323, column 55
    function value_181 () : dynamic.Dynamic {
      return VehicleIncident.LocationInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=RentalRequired_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 334, column 38
    function value_187 () : dynamic.Dynamic {
      return VehicleIncident.RentalRequired
    }
    
    // 'value' attribute on DateInput (id=RentalBeginDate_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 341, column 51
    function value_191 () : dynamic.Dynamic {
      return VehicleIncident.RentalBeginDate
    }
    
    // 'value' attribute on DateInput (id=RentalEndDate_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 348, column 51
    function value_196 () : dynamic.Dynamic {
      return VehicleIncident.RentalEndDate
    }
    
    // 'value' attribute on TextInput (id=RentalDailyRate_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 354, column 51
    function value_201 () : dynamic.Dynamic {
      return VehicleIncident.RentalDailyRate
    }
    
    // 'value' attribute on TextInput (id=RentalAgency_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 360, column 51
    function value_206 () : dynamic.Dynamic {
      return VehicleIncident.RentalAgency
    }
    
    // 'value' attribute on TextInput (id=RentalReservationNumber_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 366, column 51
    function value_211 () : dynamic.Dynamic {
      return VehicleIncident.RentalReserveNo
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 56, column 198
    function value_22 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=Vehicle_SerialNumber_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 62, column 196
    function value_27 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.SerialNumber
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VehicleType_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 25, column 38
    function value_3 () : dynamic.Dynamic {
      return VehicleIncident.VehicleType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_State_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 67, column 38
    function value_31 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 72, column 38
    function value_34 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextInput (id=Vehicle_BoatType_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 78, column 75
    function value_38 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.BoatType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_OffRoadStyle_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 84, column 138
    function value_43 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.OffRoadStyle
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 92, column 38
    function value_47 () : dynamic.Dynamic {
      return VehicleIncident.Driver.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ReasonForUse_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 97, column 38
    function value_50 () : dynamic.Dynamic {
      return VehicleIncident.VehicleUseReason
    }
    
    // 'value' attribute on TextInput (id=RelationToInsured_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 102, column 38
    function value_53 () : dynamic.Dynamic {
      return VehicleIncident.DriverRelation
    }
    
    // 'value' attribute on TextInput (id=RelationToOwner_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 107, column 38
    function value_56 () : dynamic.Dynamic {
      return VehicleIncident.DriverRelToOwner
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 112, column 38
    function value_59 () : dynamic.Dynamic {
      return VehicleIncident.OwnersPermission
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 30, column 38
    function value_6 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Driver_IsKidInPolicy_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 118, column 81
    function value_63 () : dynamic.Dynamic {
      return VehicleIncident.MinorOnPolicy
    }
    
    // 'value' attribute on TextInput (id=Driver_Phone_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 123, column 38
    function value_67 () : dynamic.Dynamic {
      return VehicleIncident.Driver.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 129, column 138
    function value_71 () : dynamic.Dynamic {
      return VehicleIncident.PercentagedrivenByMinor
    }
    
    // 'value' attribute on TextAreaInput (id=Driver_Address_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 135, column 38
    function value_75 () : dynamic.Dynamic {
      return VehicleIncident.Driver.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Driver_License_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 140, column 38
    function value_78 () : dynamic.Dynamic {
      return VehicleIncident.Driver.LicenseNumber
    }
    
    // 'value' attribute on TextInput (id=Driver_LicenseState_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 145, column 38
    function value_81 () : dynamic.Dynamic {
      return VehicleIncident.Driver.LicenseState
    }
    
    // 'value' attribute on BooleanRadioInput (id=LoanInformation_Loan_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 153, column 38
    function value_84 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Loan
    }
    
    // 'value' attribute on TextInput (id=MonthlyPayment_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 159, column 49
    function value_88 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LoanMonthlyPayment
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 35, column 38
    function value_9 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=MonthsRemaining_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 165, column 50
    function value_93 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LoanMonthsRemaining
    }
    
    // 'value' attribute on TextInput (id=PayoffAmount_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 171, column 49
    function value_98 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LoanPayoffAmount
    }
    
    // 'visible' attribute on TextInput (id=Speed_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 281, column 46
    function visible_151 () : java.lang.Boolean {
      return VehicleIncident.Collision
    }
    
    // 'visible' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 313, column 55
    function visible_174 () : java.lang.Boolean {
      return VehicleIncident.InspectionRequired
    }
    
    // 'visible' attribute on DateInput (id=RentalBeginDate_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 341, column 51
    function visible_190 () : java.lang.Boolean {
      return VehicleIncident.RentalRequired
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_VIN_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 56, column 198
    function visible_21 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code != "boat" and VehicleIncident.Vehicle.Style.Code != "ATV" and VehicleIncident.Vehicle.Style.Code != "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_SerialNumber_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 62, column 196
    function visible_26 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code == "boat" or VehicleIncident.Vehicle.Style.Code == "ATV" or VehicleIncident.Vehicle.Style.Code == "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_BoatType_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 78, column 75
    function visible_37 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code == "boat"
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_OffRoadStyle_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 84, column 138
    function visible_42 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code == "ATV" or VehicleIncident.Vehicle.Style.Code == "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=Driver_IsKidInPolicy_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 118, column 81
    function visible_62 () : java.lang.Boolean {
      return  VehicleIncident.DriverRelToOwner.Code == "child" 
    }
    
    // 'visible' attribute on TextInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 129, column 138
    function visible_70 () : java.lang.Boolean {
      return  VehicleIncident.DriverRelToOwner.Code == "child" and VehicleIncident.MinorOnPolicy.Code == "No" 
    }
    
    // 'visible' attribute on TextInput (id=MonthlyPayment_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 159, column 49
    function visible_87 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Loan
    }
    
    // 'visible' attribute on TextInput (id=MonthsRemaining_Input) at ClaimSnapshotVehicleIncident700DV.pcf: line 165, column 50
    function visible_92 () : java.lang.Boolean {
      return  VehicleIncident.Vehicle.Loan
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get VehicleIncident () : dynamic.Dynamic {
      return getRequireValue("VehicleIncident", 0) as dynamic.Dynamic
    }
    
    property set VehicleIncident ($arg :  dynamic.Dynamic) {
      setRequireValue("VehicleIncident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/700/ClaimSnapshotVehicleIncident700DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotVehicleIncident700DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at ClaimSnapshotVehicleIncident700DV.pcf: line 188, column 46
    function valueRoot_106 () : java.lang.Object {
      return Citation
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at ClaimSnapshotVehicleIncident700DV.pcf: line 188, column 46
    function value_105 () : dynamic.Dynamic {
      return Citation.CitationNumber
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationAuthority_Cell) at ClaimSnapshotVehicleIncident700DV.pcf: line 194, column 46
    function value_108 () : dynamic.Dynamic {
      return Citation.CitationAuthority
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationType_Cell) at ClaimSnapshotVehicleIncident700DV.pcf: line 200, column 46
    function value_111 () : dynamic.Dynamic {
      return Citation.CitationType
    }
    
    property get Citation () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}