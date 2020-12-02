package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral500DV_prExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral500DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 243, column 46
    function sortValue_100 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.VehicleLossParty
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 248, column 46
    function sortValue_101 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Driver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 273, column 46
    function sortValue_125 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 279, column 46
    function sortValue_126 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 284, column 46
    function sortValue_127 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 306, column 46
    function sortValue_142 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 311, column 46
    function sortValue_143 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 316, column 46
    function sortValue_144 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 355, column 46
    function sortValue_161 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 360, column 46
    function sortValue_162 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 365, column 46
    function sortValue_163 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 134, column 46
    function sortValue_51 (prop :  dynamic.Dynamic) : java.lang.Object {
      return prop.Property.Address.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 139, column 46
    function sortValue_52 (prop :  dynamic.Dynamic) : java.lang.Object {
      return prop.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 144, column 46
    function sortValue_53 (prop :  dynamic.Dynamic) : java.lang.Object {
      return prop.Property.Address.State
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 222, column 46
    function sortValue_96 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 228, column 46
    function sortValue_97 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 233, column 46
    function sortValue_98 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 238, column 46
    function sortValue_99 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 77, column 38
    function valueRoot_29 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 82, column 38
    function valueRoot_32 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 156, column 38
    function valueRoot_67 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 43, column 38
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.pr.pcf: line 215, column 44
    function value_124 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "VehicleIncident")
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 51, column 38
    function value_14 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.pr.pcf: line 266, column 44
    function value_141 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "InjuryIncident")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.pr.pcf: line 300, column 41
    function value_154 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 330, column 38
    function value_155 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 335, column 38
    function value_158 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 56, column 38
    function value_17 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.pr.pcf: line 349, column 41
    function value_173 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 63, column 38
    function value_20 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 77, column 38
    function value_28 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 82, column 38
    function value_31 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 87, column 38
    function value_34 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 93, column 38
    function value_37 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 97, column 70
    function value_40 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 102, column 38
    function value_42 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 107, column 38
    function value_45 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 112, column 38
    function value_48 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 30, column 66
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.pr.pcf: line 127, column 44
    function value_65 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "FixedPropertyIncident")
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 156, column 38
    function value_66 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Address1_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 161, column 38
    function value_69 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=Address2_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 166, column 38
    function value_72 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=City_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 171, column 38
    function value_75 () : dynamic.Dynamic {
      return Snapshot.LossLocation.City
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 176, column 38
    function value_78 () : dynamic.Dynamic {
      return Snapshot.LossLocation.State
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 35, column 38
    function value_8 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 181, column 38
    function value_81 () : dynamic.Dynamic {
      return Snapshot.LossLocation.PostalCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 186, column 38
    function value_84 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 191, column 38
    function value_87 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 196, column 38
    function value_90 () : dynamic.Dynamic {
      return Snapshot.LossLocationCode
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 201, column 38
    function value_93 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneral500DV.pr.pcf: line 69, column 63
    function visible_23 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 222, column 46
    function action_102 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 228, column 46
    function action_107 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 222, column 46
    function action_dest_103 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 228, column 46
    function action_dest_108 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 222, column 46
    function valueRoot_105 () : java.lang.Object {
      return Vehicle.Vehicle
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 243, column 46
    function valueRoot_119 () : java.lang.Object {
      return Vehicle
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 248, column 46
    function valueRoot_122 () : java.lang.Object {
      return Vehicle.Driver
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 222, column 46
    function value_104 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 228, column 46
    function value_109 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 233, column 46
    function value_112 () : dynamic.Dynamic {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 238, column 46
    function value_115 () : dynamic.Dynamic {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 243, column 46
    function value_118 () : dynamic.Dynamic {
      return Vehicle.VehicleLossParty
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 248, column 46
    function value_121 () : dynamic.Dynamic {
      return Vehicle.Driver.DisplayName
    }
    
    property get Vehicle () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 273, column 46
    function action_128 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 279, column 46
    function action_133 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 273, column 46
    function action_dest_129 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 279, column 46
    function action_dest_134 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 273, column 46
    function valueRoot_131 () : java.lang.Object {
      return InjuryIncidentIterator.injured
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 279, column 46
    function valueRoot_136 () : java.lang.Object {
      return InjuryIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 273, column 46
    function value_130 () : dynamic.Dynamic {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 279, column 46
    function value_135 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 284, column 46
    function value_138 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Description
    }
    
    property get InjuryIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 306, column 46
    function valueRoot_146 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 306, column 46
    function value_145 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 311, column 46
    function value_148 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 316, column 46
    function value_151 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 355, column 46
    function valueRoot_165 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 355, column 46
    function value_164 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 360, column 46
    function value_167 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 365, column 46
    function value_170 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 134, column 46
    function action_54 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, prop)
    }
    
    // 'action' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 134, column 46
    function action_dest_55 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, prop)
    }
    
    // 'value' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 134, column 46
    function valueRoot_57 () : java.lang.Object {
      return prop.Property.Address
    }
    
    // 'value' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 134, column 46
    function value_56 () : dynamic.Dynamic {
      return prop.Property.Address.AddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 139, column 46
    function value_59 () : dynamic.Dynamic {
      return prop.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneral500DV.pr.pcf: line 144, column 46
    function value_62 () : dynamic.Dynamic {
      return prop.Property.Address.State
    }
    
    property get prop () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}