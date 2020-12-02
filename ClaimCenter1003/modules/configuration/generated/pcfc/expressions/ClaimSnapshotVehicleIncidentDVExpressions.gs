package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotVehicleIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotVehicleIncidentDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotVehicleIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotVehicleIncidentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at ClaimSnapshotVehicleIncidentDV.pcf: line 189, column 46
    function sortValue_101 (Citation :  dynamic.Dynamic) : java.lang.Object {
      return Citation.CitationNumber
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationAuthority_Cell) at ClaimSnapshotVehicleIncidentDV.pcf: line 195, column 46
    function sortValue_102 (Citation :  dynamic.Dynamic) : java.lang.Object {
      return Citation.CitationAuthority
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationType_Cell) at ClaimSnapshotVehicleIncidentDV.pcf: line 201, column 46
    function sortValue_103 (Citation :  dynamic.Dynamic) : java.lang.Object {
      return Citation.CitationType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VehicleType_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 25, column 38
    function valueRoot_3 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 92, column 38
    function valueRoot_47 () : java.lang.Object {
      return VehicleIncident.Driver
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 30, column 38
    function valueRoot_6 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LossParty_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return gw.pcf.LossPartyUtils.getLossParty(VehicleIncident)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 40, column 38
    function value_11 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotVehicleIncidentDV.pcf: line 182, column 41
    function value_113 () : dynamic.Dynamic {
      return VehicleIncident.Citations
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 215, column 38
    function value_114 () : dynamic.Dynamic {
      return VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 220, column 38
    function value_117 () : dynamic.Dynamic {
      return VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 225, column 38
    function value_120 () : dynamic.Dynamic {
      return VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 230, column 38
    function value_123 () : dynamic.Dynamic {
      return VehicleIncident.EquipmentFailure
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 235, column 38
    function value_126 () : dynamic.Dynamic {
      return VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 240, column 38
    function value_129 () : dynamic.Dynamic {
      return VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Collision_Indicator_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 248, column 38
    function value_132 () : dynamic.Dynamic {
      return VehicleIncident.Collision
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 254, column 46
    function value_136 () : dynamic.Dynamic {
      return VehicleIncident.Speed
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Style_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 45, column 38
    function value_14 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=VehicleDirection_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 260, column 46
    function value_141 () : dynamic.Dynamic {
      return VehicleIncident.VehicleDirection
    }
    
    // 'value' attribute on TextInput (id=CollisionPoint_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 266, column 46
    function value_146 () : dynamic.Dynamic {
      return VehicleIncident.CollisionPoint
    }
    
    // 'value' attribute on TextInput (id=Exposure_TrafficViolation_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 272, column 46
    function value_151 () : dynamic.Dynamic {
      return VehicleIncident.TrafficViolation
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 50, column 38
    function value_17 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VehicleType_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 25, column 38
    function value_2 () : dynamic.Dynamic {
      return VehicleIncident.VehicleType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 56, column 198
    function value_21 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=Vehicle_SerialNumber_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 62, column 196
    function value_26 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.SerialNumber
    }
    
    // 'value' attribute on TextInput (id=Vehicle_State_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 67, column 38
    function value_30 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 72, column 38
    function value_33 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextInput (id=Vehicle_BoatType_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 78, column 75
    function value_37 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.BoatType
    }
    
    // 'value' attribute on TextInput (id=Vehicle_OffRoadStyle_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 84, column 138
    function value_42 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.OffRoadStyle
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 92, column 38
    function value_46 () : dynamic.Dynamic {
      return VehicleIncident.Driver.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ReasonForUse_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 97, column 38
    function value_49 () : dynamic.Dynamic {
      return VehicleIncident.VehicleUseReason
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 30, column 38
    function value_5 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=RelationToInsured_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 102, column 38
    function value_52 () : dynamic.Dynamic {
      return VehicleIncident.DriverRelation
    }
    
    // 'value' attribute on TextInput (id=RelationToOwner_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 107, column 38
    function value_55 () : dynamic.Dynamic {
      return VehicleIncident.DriverRelToOwner
    }
    
    // 'value' attribute on BooleanRadioInput (id=OwnersPermission_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 112, column 38
    function value_58 () : dynamic.Dynamic {
      return VehicleIncident.OwnersPermission
    }
    
    // 'value' attribute on TextInput (id=Driver_IsKidInPolicy_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 118, column 81
    function value_62 () : dynamic.Dynamic {
      return VehicleIncident.MinorOnPolicy
    }
    
    // 'value' attribute on TextInput (id=Driver_Phone_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 123, column 38
    function value_66 () : dynamic.Dynamic {
      return VehicleIncident.Driver.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 129, column 138
    function value_70 () : dynamic.Dynamic {
      return VehicleIncident.PercentagedrivenByMinor
    }
    
    // 'value' attribute on TextAreaInput (id=Driver_Address_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 135, column 38
    function value_74 () : dynamic.Dynamic {
      return VehicleIncident.Driver.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Driver_License_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 140, column 38
    function value_77 () : dynamic.Dynamic {
      return VehicleIncident.Driver.LicenseNumber
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 35, column 38
    function value_8 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on TextInput (id=Driver_LicenseState_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 145, column 38
    function value_80 () : dynamic.Dynamic {
      return VehicleIncident.Driver.LicenseState
    }
    
    // 'value' attribute on BooleanRadioInput (id=LoanInformation_Loan_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 153, column 38
    function value_83 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.Loan
    }
    
    // 'value' attribute on TextInput (id=MonthlyPayment_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 159, column 49
    function value_87 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LoanMonthlyPayment
    }
    
    // 'value' attribute on TextInput (id=MonthsRemaining_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 165, column 50
    function value_92 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LoanMonthsRemaining
    }
    
    // 'value' attribute on TextInput (id=PayoffAmount_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 171, column 49
    function value_97 () : dynamic.Dynamic {
      return VehicleIncident.Vehicle.LoanPayoffAmount
    }
    
    // 'visible' attribute on TextInput (id=Speed_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 254, column 46
    function visible_135 () : java.lang.Boolean {
      return VehicleIncident.Collision
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_VIN_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 56, column 198
    function visible_20 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code != "boat" and VehicleIncident.Vehicle.Style.Code != "ATV" and VehicleIncident.Vehicle.Style.Code != "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_SerialNumber_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 62, column 196
    function visible_25 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code == "boat" or VehicleIncident.Vehicle.Style.Code == "ATV" or VehicleIncident.Vehicle.Style.Code == "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_BoatType_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 78, column 75
    function visible_36 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code == "boat"
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_OffRoadStyle_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 84, column 138
    function visible_41 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Style.Code == "ATV" or VehicleIncident.Vehicle.Style.Code == "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=Driver_IsKidInPolicy_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 118, column 81
    function visible_61 () : java.lang.Boolean {
      return  VehicleIncident.DriverRelToOwner.Code == "child" 
    }
    
    // 'visible' attribute on TextInput (id=Driver_IsKidInPolicy_Percentagedriven_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 129, column 138
    function visible_69 () : java.lang.Boolean {
      return  VehicleIncident.DriverRelToOwner.Code == "child" and VehicleIncident.MinorOnPolicy.Code == "No" 
    }
    
    // 'visible' attribute on TextInput (id=MonthlyPayment_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 159, column 49
    function visible_86 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Loan
    }
    
    // 'visible' attribute on TextInput (id=MonthsRemaining_Input) at ClaimSnapshotVehicleIncidentDV.pcf: line 165, column 50
    function visible_91 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotVehicleIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotVehicleIncidentDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at ClaimSnapshotVehicleIncidentDV.pcf: line 189, column 46
    function valueRoot_105 () : java.lang.Object {
      return Citation
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at ClaimSnapshotVehicleIncidentDV.pcf: line 189, column 46
    function value_104 () : dynamic.Dynamic {
      return Citation.CitationNumber
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationAuthority_Cell) at ClaimSnapshotVehicleIncidentDV.pcf: line 195, column 46
    function value_107 () : dynamic.Dynamic {
      return Citation.CitationAuthority
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationType_Cell) at ClaimSnapshotVehicleIncidentDV.pcf: line 201, column 46
    function value_110 () : dynamic.Dynamic {
      return Citation.CitationType
    }
    
    property get Citation () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}