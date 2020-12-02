package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral310DV_prExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral310DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.pr.pcf: line 246, column 46
    function sortValue_110 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral310DV.pr.pcf: line 251, column 46
    function sortValue_111 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral310DV.pr.pcf: line 256, column 46
    function sortValue_112 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 78, column 38
    function valueRoot_29 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 123, column 38
    function valueRoot_52 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 133, column 38
    function valueRoot_58 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 31, column 38
    function valueRoot_7 () : java.lang.Object {
      return Snapshot.AssignedUser.Contact
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=Flagged_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 218, column 38
    function value_102 () : dynamic.Dynamic {
      return Snapshot.Flagged
    }
    
    // 'value' attribute on TextInput (id=FlaggedDate_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 222, column 66
    function value_105 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FlaggedDate)
    }
    
    // 'value' attribute on TextInput (id=FlaggedReason_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 227, column 38
    function value_107 () : dynamic.Dynamic {
      return Snapshot.FlaggedReason
    }
    
    // 'value' attribute on TextInput (id=Segment_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 40, column 38
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Segment
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral310DV.pr.pcf: line 240, column 41
    function value_122 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on TextInput (id=Strategy_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 45, column 38
    function value_14 () : dynamic.Dynamic {
      return Snapshot.Strategy
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 50, column 38
    function value_17 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 58, column 38
    function value_20 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 66, column 38
    function value_23 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=LossDate_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 70, column 63
    function value_26 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.LossDate)
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 78, column 38
    function value_28 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 83, column 38
    function value_31 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 88, column 38
    function value_34 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 93, column 38
    function value_37 () : dynamic.Dynamic {
      return Snapshot.LossLocationCode
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 98, column 38
    function value_40 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=ReportedDate_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 106, column 67
    function value_43 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.ReportedDate)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 113, column 38
    function value_45 () : dynamic.Dynamic {
      return Snapshot.FirstNoticeSuit
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 118, column 38
    function value_48 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 123, column 38
    function value_51 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DriverRelation_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 128, column 38
    function value_54 () : dynamic.Dynamic {
      return Snapshot.DriverRelation
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 133, column 38
    function value_57 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=DisplayName_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Snapshot.AssignedUser.Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 138, column 38
    function value_60 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on TextInput (id=DateRptdToAgent_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 142, column 70
    function value_63 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.DateRptdToAgent)
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 147, column 38
    function value_65 () : dynamic.Dynamic {
      return Snapshot.Fault
    }
    
    // 'value' attribute on TextInput (id=CreateTime_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 154, column 65
    function value_68 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.CreateTime)
    }
    
    // 'value' attribute on TextInput (id=CloseDate_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 158, column 64
    function value_70 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.CloseDate)
    }
    
    // 'value' attribute on TextInput (id=ClosedOutcome_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 163, column 38
    function value_72 () : dynamic.Dynamic {
      return Snapshot.ClosedOutcome
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 168, column 38
    function value_75 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 175, column 38
    function value_78 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=DeductibleStatus_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 180, column 38
    function value_81 () : dynamic.Dynamic {
      return Snapshot.DeductibleStatus
    }
    
    // 'value' attribute on TextInput (id=LitigationStatus_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 185, column 38
    function value_84 () : dynamic.Dynamic {
      return Snapshot.LitigationStatus
    }
    
    // 'value' attribute on TextInput (id=SubrogationStatus_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 190, column 38
    function value_87 () : dynamic.Dynamic {
      return Snapshot.SubrogationStatus
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 35, column 66
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on TextInput (id=SalvageStatus_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 195, column 38
    function value_90 () : dynamic.Dynamic {
      return Snapshot.SalvageStatus
    }
    
    // 'value' attribute on TextInput (id=OtherRecovStatus_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 200, column 38
    function value_93 () : dynamic.Dynamic {
      return Snapshot.OtherRecovStatus
    }
    
    // 'value' attribute on TextInput (id=SIUStatus_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 205, column 38
    function value_96 () : dynamic.Dynamic {
      return Snapshot.SIUStatus
    }
    
    // 'value' attribute on TextInput (id=ReinsuranceStatus_Input) at ClaimSnapshotGeneral310DV.pr.pcf: line 210, column 38
    function value_99 () : dynamic.Dynamic {
      return Snapshot.ReinsuranceStatus
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotGeneral310DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral310DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.pr.pcf: line 246, column 46
    function valueRoot_114 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral310DV.pr.pcf: line 246, column 46
    function value_113 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral310DV.pr.pcf: line 251, column 46
    function value_116 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral310DV.pr.pcf: line 256, column 46
    function value_119 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}