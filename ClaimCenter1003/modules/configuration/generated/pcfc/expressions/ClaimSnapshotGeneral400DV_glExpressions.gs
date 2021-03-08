package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral400DV_glExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral400DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 238, column 46
    function sortValue_102 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 243, column 46
    function sortValue_103 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 248, column 46
    function sortValue_104 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 189, column 46
    function sortValue_83 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 194, column 46
    function sortValue_84 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 199, column 46
    function sortValue_85 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 77, column 38
    function valueRoot_29 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 82, column 38
    function valueRoot_32 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 125, column 38
    function valueRoot_54 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 43, column 38
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.gl.pcf: line 232, column 41
    function value_114 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 51, column 38
    function value_14 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 56, column 38
    function value_17 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 63, column 38
    function value_20 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 77, column 38
    function value_28 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 82, column 38
    function value_31 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 87, column 38
    function value_34 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 93, column 38
    function value_37 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=ManifestationDate_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 97, column 71
    function value_40 () : java.lang.String {
      return util.Snapshot.renderDate(Snapshot.ManifestationDate)
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 101, column 70
    function value_42 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 106, column 38
    function value_44 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 111, column 38
    function value_47 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 116, column 38
    function value_50 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 125, column 38
    function value_53 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Address1_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 130, column 38
    function value_56 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=Address2_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 135, column 38
    function value_59 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 30, column 66
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on TextInput (id=City_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 140, column 38
    function value_62 () : dynamic.Dynamic {
      return Snapshot.LossLocation.City
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 145, column 38
    function value_65 () : dynamic.Dynamic {
      return Snapshot.LossLocation.State
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 150, column 38
    function value_68 () : dynamic.Dynamic {
      return Snapshot.LossLocation.PostalCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 155, column 38
    function value_71 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 160, column 38
    function value_74 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 165, column 38
    function value_77 () : dynamic.Dynamic {
      return Snapshot.LossLocationCode
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 35, column 38
    function value_8 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 170, column 38
    function value_80 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral400DV.gl.pcf: line 183, column 41
    function value_95 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 213, column 38
    function value_96 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 218, column 38
    function value_99 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneral400DV.gl.pcf: line 69, column 76
    function visible_23 () : java.lang.Boolean {
      return Snapshot.FaultRating["Code"] == "1"
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 238, column 46
    function valueRoot_106 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 238, column 46
    function value_105 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 243, column 46
    function value_108 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 248, column 46
    function value_111 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/400/ClaimSnapshotGeneral400DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral400DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 189, column 46
    function valueRoot_87 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 189, column 46
    function value_86 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 194, column 46
    function value_89 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral400DV.gl.pcf: line 199, column 46
    function value_92 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}