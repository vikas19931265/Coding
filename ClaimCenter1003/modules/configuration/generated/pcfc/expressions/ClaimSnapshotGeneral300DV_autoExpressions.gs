package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral300DV_autoExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral300DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.auto.pcf: line 291, column 46
    function sortValue_122 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral300DV.auto.pcf: line 296, column 46
    function sortValue_123 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral300DV.auto.pcf: line 301, column 46
    function sortValue_124 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 81, column 38
    function valueRoot_30 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 159, column 38
    function valueRoot_66 () : java.lang.Object {
      return Snapshot.Vehicle
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 39, column 38
    function value_10 () : dynamic.Dynamic {
      return Snapshot.Segment
    }
    
    // 'value' attribute on TextInput (id=LitigationStatus_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 229, column 38
    function value_100 () : dynamic.Dynamic {
      return Snapshot.LitigationStatus
    }
    
    // 'value' attribute on TextInput (id=SubrogationStatus_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 234, column 38
    function value_103 () : dynamic.Dynamic {
      return Snapshot.SubrogationStatus
    }
    
    // 'value' attribute on TextInput (id=SalvageStatus_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 239, column 38
    function value_106 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SalvageStatus")
    }
    
    // 'value' attribute on TextInput (id=OtherRecovStatus_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 244, column 38
    function value_108 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "OtherRecovStatus")
    }
    
    // 'value' attribute on TextInput (id=SIUStatus_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 249, column 38
    function value_110 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "SIUStatus")
    }
    
    // 'value' attribute on TextInput (id=ReinsuranceStatus_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 254, column 38
    function value_112 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "ReinsuranceStatus")
    }
    
    // 'value' attribute on TextInput (id=Flagged_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 262, column 38
    function value_114 () : dynamic.Dynamic {
      return Snapshot.Flagged
    }
    
    // 'value' attribute on TextInput (id=FlaggedDate_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 266, column 66
    function value_117 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FlaggedDate)
    }
    
    // 'value' attribute on TextInput (id=FlaggedReason_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 271, column 38
    function value_119 () : dynamic.Dynamic {
      return Snapshot.FlaggedReason
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 44, column 38
    function value_13 () : dynamic.Dynamic {
      return Snapshot.Strategy
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral300DV.auto.pcf: line 285, column 44
    function value_134 () : java.lang.Object[] {
      return util.Snapshot.getPropertyValue(Snapshot, "Officials") as Object[]
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 49, column 38
    function value_16 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 57, column 38
    function value_19 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 65, column 38
    function value_22 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=LossDate_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 69, column 63
    function value_25 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LossDate)
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 76, column 67
    function value_27 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LossLocation)
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 81, column 38
    function value_29 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 86, column 38
    function value_32 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 91, column 38
    function value_35 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "LossLocationCode")
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 96, column 38
    function value_37 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=ReportedDate_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 103, column 67
    function value_40 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.ReportedDate)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 110, column 38
    function value_42 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "FirstNoticeSuit")
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 115, column 38
    function value_44 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 119, column 108
    function value_47 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getContactByRole(Snapshot, "reporter"))
    }
    
    // 'value' attribute on TextInput (id=DriverRelation_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 124, column 38
    function value_49 () : dynamic.Dynamic {
      return Snapshot.DriverRelation
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 128, column 111
    function value_52 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getContactByRole(Snapshot, "maincontact"))
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 133, column 38
    function value_54 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 141, column 60
    function value_59 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Fault)
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 30, column 133
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getPropertyValue(Snapshot, "AssignedUser")["Contact"])
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 149, column 62
    function value_61 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Vehicle)
    }
    
    // 'value' attribute on TextInput (id=Style_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 154, column 38
    function value_63 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot.Vehicle, "Style")
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 159, column 38
    function value_65 () : dynamic.Dynamic {
      return Snapshot.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 164, column 38
    function value_68 () : dynamic.Dynamic {
      return Snapshot.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 169, column 38
    function value_71 () : dynamic.Dynamic {
      return Snapshot.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 174, column 38
    function value_74 () : dynamic.Dynamic {
      return Snapshot.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 181, column 106
    function value_77 () : java.lang.String {
      return util.Snapshot.renderValue(util.Snapshot.getContactByRole(Snapshot, "driver"))
    }
    
    // 'value' attribute on TextInput (id=VehicleUseReason_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 186, column 38
    function value_79 () : dynamic.Dynamic {
      return util.Snapshot.getPropertyValue(Snapshot, "VehicleUseReason")
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 34, column 66
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 198, column 112
    function value_84 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "CreateTime") )
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 202, column 111
    function value_86 () : java.lang.String {
      return util.Snapshot.renderValue( util.Snapshot.getPropertyValue(Snapshot, "CloseDate") )
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 207, column 38
    function value_88 () : dynamic.Dynamic {
      return Snapshot.ClosedOutcome
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 212, column 38
    function value_91 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 219, column 38
    function value_94 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=DeductibleStatus_Input) at ClaimSnapshotGeneral300DV.auto.pcf: line 224, column 38
    function value_97 () : dynamic.Dynamic {
      return Snapshot.DeductibleStatus
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/300/ClaimSnapshotGeneral300DV.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral300DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.auto.pcf: line 291, column 46
    function valueRoot_126 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral300DV.auto.pcf: line 291, column 46
    function value_125 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral300DV.auto.pcf: line 296, column 46
    function value_128 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral300DV.auto.pcf: line 301, column 46
    function value_131 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}