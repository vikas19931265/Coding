package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral310DV_autoExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.auto.pcf: line 298, column 46
    function sortValue_138 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral310DV.auto.pcf: line 303, column 46
    function sortValue_139 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral310DV.auto.pcf: line 308, column 46
    function sortValue_140 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 36, column 38
    function valueRoot_10 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 79, column 38
    function valueRoot_30 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 123, column 38
    function valueRoot_53 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 133, column 38
    function valueRoot_59 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 31, column 38
    function valueRoot_7 () : java.lang.Object {
      return Snapshot.AssignedUser.Contact
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 156, column 38
    function valueRoot_70 () : java.lang.Object {
      return Snapshot.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 189, column 38
    function valueRoot_88 () : java.lang.Object {
      return Snapshot.Driver
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 215, column 38
    function value_100 () : dynamic.Dynamic {
      return Snapshot.ClosedOutcome
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 220, column 38
    function value_103 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 227, column 38
    function value_106 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=DeductibleStatus_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 232, column 38
    function value_109 () : dynamic.Dynamic {
      return Snapshot.DeductibleStatus
    }
    
    // 'value' attribute on TextInput (id=LitigationStatus_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 237, column 38
    function value_112 () : dynamic.Dynamic {
      return Snapshot.LitigationStatus
    }
    
    // 'value' attribute on TextInput (id=SubrogationStatus_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 242, column 38
    function value_115 () : dynamic.Dynamic {
      return Snapshot.SubrogationStatus
    }
    
    // 'value' attribute on TextInput (id=SalvageStatus_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 247, column 38
    function value_118 () : dynamic.Dynamic {
      return Snapshot.SalvageStatus
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 41, column 38
    function value_12 () : dynamic.Dynamic {
      return Snapshot.Segment
    }
    
    // 'value' attribute on TextInput (id=OtherRecovStatus_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 252, column 38
    function value_121 () : dynamic.Dynamic {
      return Snapshot.OtherRecovStatus
    }
    
    // 'value' attribute on TextInput (id=SIUStatus_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 257, column 38
    function value_124 () : dynamic.Dynamic {
      return Snapshot.SIUStatus
    }
    
    // 'value' attribute on TextInput (id=ReinsuranceStatus_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 262, column 38
    function value_127 () : dynamic.Dynamic {
      return Snapshot.ReinsuranceStatus
    }
    
    // 'value' attribute on TextInput (id=Flagged_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 270, column 38
    function value_130 () : dynamic.Dynamic {
      return Snapshot.Flagged
    }
    
    // 'value' attribute on TextInput (id=FlaggedDate_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 274, column 66
    function value_133 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FlaggedDate)
    }
    
    // 'value' attribute on TextInput (id=FlaggedReason_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 279, column 38
    function value_135 () : dynamic.Dynamic {
      return Snapshot.FlaggedReason
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 46, column 38
    function value_15 () : dynamic.Dynamic {
      return Snapshot.Strategy
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral310DV.auto.pcf: line 292, column 41
    function value_150 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 51, column 38
    function value_18 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 59, column 38
    function value_21 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 67, column 38
    function value_24 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=LossDate_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 71, column 63
    function value_27 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LossDate)
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 79, column 38
    function value_29 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 84, column 38
    function value_32 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 89, column 38
    function value_35 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 94, column 38
    function value_38 () : dynamic.Dynamic {
      return Snapshot.LossLocationCode
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 99, column 38
    function value_41 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=ReportedDate_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 106, column 67
    function value_44 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.ReportedDate)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 113, column 38
    function value_46 () : dynamic.Dynamic {
      return Snapshot.FirstNoticeSuit
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 118, column 38
    function value_49 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 123, column 38
    function value_52 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DriverRelation_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 128, column 38
    function value_55 () : dynamic.Dynamic {
      return Snapshot.DriverRelation
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 133, column 38
    function value_58 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Snapshot.AssignedUser.Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 138, column 38
    function value_61 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on TextInput (id=DateRptdToAgent_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 142, column 70
    function value_64 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.DateRptdToAgent)
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 147, column 38
    function value_66 () : dynamic.Dynamic {
      return Snapshot.Fault
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 156, column 38
    function value_69 () : dynamic.Dynamic {
      return Snapshot.Vehicle.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Style_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 161, column 38
    function value_72 () : dynamic.Dynamic {
      return Snapshot.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 166, column 38
    function value_75 () : dynamic.Dynamic {
      return Snapshot.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 171, column 38
    function value_78 () : dynamic.Dynamic {
      return Snapshot.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 176, column 38
    function value_81 () : dynamic.Dynamic {
      return Snapshot.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 181, column 38
    function value_84 () : dynamic.Dynamic {
      return Snapshot.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextInput (id=Driver_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 189, column 38
    function value_87 () : dynamic.Dynamic {
      return Snapshot.Driver.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 36, column 38
    function value_9 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on TextInput (id=VehicleUseReason_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 194, column 38
    function value_90 () : dynamic.Dynamic {
      return Snapshot.VehicleUseReason
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 206, column 65
    function value_96 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotGeneral310DV.auto.pcf: line 210, column 64
    function value_98 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.CloseDate)
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.auto.pcf: line 298, column 46
    function valueRoot_142 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.auto.pcf: line 298, column 46
    function value_141 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral310DV.auto.pcf: line 303, column 46
    function value_144 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral310DV.auto.pcf: line 308, column 46
    function value_147 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}