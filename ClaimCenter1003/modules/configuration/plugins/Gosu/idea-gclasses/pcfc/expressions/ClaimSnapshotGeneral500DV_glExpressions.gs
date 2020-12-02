package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral500DV_glExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral500DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 242, column 46
    function sortValue_112 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 248, column 46
    function sortValue_113 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 253, column 46
    function sortValue_114 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 278, column 46
    function sortValue_129 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 284, column 46
    function sortValue_130 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 289, column 46
    function sortValue_131 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 311, column 46
    function sortValue_146 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 316, column 46
    function sortValue_147 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 321, column 46
    function sortValue_148 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 360, column 46
    function sortValue_165 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 365, column 46
    function sortValue_166 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 370, column 46
    function sortValue_167 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 191, column 46
    function sortValue_83 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 197, column 46
    function sortValue_84 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 202, column 46
    function sortValue_85 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 207, column 46
    function sortValue_86 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 212, column 46
    function sortValue_87 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.VehicleLossParty
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 217, column 46
    function sortValue_88 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Driver.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 77, column 38
    function valueRoot_29 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 82, column 38
    function valueRoot_32 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 125, column 38
    function valueRoot_54 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 43, column 38
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.gl.pcf: line 184, column 44
    function value_111 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "VehicleIncident")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.gl.pcf: line 235, column 44
    function value_128 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "FixedPropertyIncident")
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 51, column 38
    function value_14 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.gl.pcf: line 271, column 44
    function value_145 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "InjuryIncident")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.gl.pcf: line 305, column 41
    function value_158 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 335, column 38
    function value_159 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 340, column 38
    function value_162 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 56, column 38
    function value_17 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.gl.pcf: line 354, column 41
    function value_177 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 62, column 63
    function value_21 () : dynamic.Dynamic {
      return Snapshot.Fault
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 69, column 38
    function value_25 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 77, column 38
    function value_28 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 82, column 38
    function value_31 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 87, column 38
    function value_34 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 93, column 38
    function value_37 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=ManifestationDate_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 97, column 71
    function value_40 () : java.lang.String {
      return util.Snapshot.renderDate(Snapshot.ManifestationDate)
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 101, column 70
    function value_42 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 106, column 38
    function value_44 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 111, column 38
    function value_47 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 116, column 38
    function value_50 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 125, column 38
    function value_53 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Address1_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 130, column 38
    function value_56 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=Address2_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 135, column 38
    function value_59 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 30, column 66
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on TextInput (id=City_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 140, column 38
    function value_62 () : dynamic.Dynamic {
      return Snapshot.LossLocation.City
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 145, column 38
    function value_65 () : dynamic.Dynamic {
      return Snapshot.LossLocation.State
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 150, column 38
    function value_68 () : dynamic.Dynamic {
      return Snapshot.LossLocation.PostalCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 155, column 38
    function value_71 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 160, column 38
    function value_74 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 165, column 38
    function value_77 () : dynamic.Dynamic {
      return Snapshot.LossLocationCode
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 35, column 38
    function value_8 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 170, column 38
    function value_80 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneral500DV.gl.pcf: line 62, column 63
    function visible_20 () : java.lang.Boolean {
      return Snapshot.FaultRating.Code == "1"
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 242, column 46
    function action_115 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 248, column 46
    function action_120 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 242, column 46
    function action_dest_116 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 248, column 46
    function action_dest_121 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 242, column 46
    function valueRoot_118 () : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 242, column 46
    function value_117 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 248, column 46
    function value_122 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 253, column 46
    function value_125 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    property get FixedPropertyIncidentInstance () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 278, column 46
    function action_132 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 284, column 46
    function action_137 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 278, column 46
    function action_dest_133 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 284, column 46
    function action_dest_138 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 278, column 46
    function valueRoot_135 () : java.lang.Object {
      return InjuryIncidentIterator.injured
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 284, column 46
    function valueRoot_140 () : java.lang.Object {
      return InjuryIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 278, column 46
    function value_134 () : dynamic.Dynamic {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 284, column 46
    function value_139 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 289, column 46
    function value_142 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Description
    }
    
    property get InjuryIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 311, column 46
    function valueRoot_150 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 311, column 46
    function value_149 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 316, column 46
    function value_152 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 321, column 46
    function value_155 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 360, column 46
    function valueRoot_169 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 360, column 46
    function value_168 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 365, column 46
    function value_171 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 370, column 46
    function value_174 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 191, column 46
    function action_89 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 197, column 46
    function action_94 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 191, column 46
    function action_dest_90 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 197, column 46
    function action_dest_95 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 212, column 46
    function valueRoot_106 () : java.lang.Object {
      return Vehicle
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 217, column 46
    function valueRoot_109 () : java.lang.Object {
      return Vehicle.Driver
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 191, column 46
    function valueRoot_92 () : java.lang.Object {
      return Vehicle.Vehicle
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 207, column 46
    function value_102 () : dynamic.Dynamic {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 212, column 46
    function value_105 () : dynamic.Dynamic {
      return Vehicle.VehicleLossParty
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 217, column 46
    function value_108 () : dynamic.Dynamic {
      return Vehicle.Driver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 191, column 46
    function value_91 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 197, column 46
    function value_96 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneral500DV.gl.pcf: line 202, column 46
    function value_99 () : dynamic.Dynamic {
      return Vehicle.Vehicle.LicensePlate
    }
    
    property get Vehicle () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}