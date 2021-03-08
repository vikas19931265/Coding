package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPRPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneralPRPanelSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPRPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneralPRPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 171, column 29
    function def_onEnter_76 (def :  pcf.AddressSnapshotInputSet) : void {
      def.onEnter(Snapshot.LossLocation, Snapshot)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 171, column 29
    function def_refreshVariables_77 (def :  pcf.AddressSnapshotInputSet) : void {
      def.refreshVariables(Snapshot.LossLocation, Snapshot)
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function sortValue_106 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.PrimarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function sortValue_107 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.SecondarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function sortValue_108 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.TertiarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function sortValue_109 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.QuaternarySortValue
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 248, column 48
    function sortValue_110 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 253, column 48
    function sortValue_111 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 274, column 48
    function sortValue_126 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 279, column 48
    function sortValue_127 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 284, column 48
    function sortValue_128 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 323, column 48
    function sortValue_145 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 328, column 48
    function sortValue_146 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 333, column 48
    function sortValue_147 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 150, column 48
    function sortValue_61 (prop :  dynamic.Dynamic) : java.lang.Object {
      return prop.Property.Address.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=City_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 156, column 48
    function sortValue_62 (prop :  dynamic.Dynamic) : java.lang.Object {
      return prop.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 161, column 48
    function sortValue_63 (prop :  dynamic.Dynamic) : java.lang.Object {
      return prop.Property.Address.State
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 191, column 48
    function sortValue_78 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 197, column 48
    function sortValue_79 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 202, column 48
    function sortValue_80 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 207, column 48
    function sortValue_81 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 212, column 48
    function sortValue_82 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return gw.pcf.LossPartyUtils.getLossParty(Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 217, column 48
    function sortValue_83 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Driver.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 23, column 40
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 61, column 66
    function valueRoot_19 () : java.lang.Object {
      return Snapshot.PropertyFireDamage
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 93, column 40
    function valueRoot_39 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 98, column 40
    function valueRoot_42 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 23, column 40
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 184, column 46
    function value_105 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "VehicleIncident")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 47, column 40
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 234, column 46
    function value_125 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "InjuryIncident")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 268, column 43
    function value_138 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 298, column 40
    function value_139 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 55, column 40
    function value_14 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 303, column 40
    function value_142 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 317, column 43
    function value_157 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 61, column 66
    function value_18 () : dynamic.Dynamic {
      return Snapshot.PropertyFireDamage.Arson
    }
    
    // 'value' attribute on TextInput (id=LocationOfTheft_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 67, column 70
    function value_23 () : dynamic.Dynamic {
      return Snapshot.LocationOfTheft
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 72, column 40
    function value_27 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 28, column 40
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 79, column 40
    function value_30 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 93, column 40
    function value_38 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 98, column 40
    function value_41 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 103, column 40
    function value_44 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 109, column 40
    function value_47 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 113, column 72
    function value_50 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 118, column 40
    function value_52 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 123, column 40
    function value_55 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 128, column 40
    function value_58 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 32, column 68
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 142, column 46
    function value_75 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "FixedPropertyIncident")
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 37, column 40
    function value_8 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ArsonInvolved_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 61, column 66
    function visible_17 () : java.lang.Boolean {
      return Snapshot.LossCause.Code == "fire"
    }
    
    // 'visible' attribute on TextInput (id=LocationOfTheft_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 67, column 70
    function visible_22 () : java.lang.Boolean {
      return Snapshot.LossCause.Code == "burglary"
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 85, column 65
    function visible_33 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPRPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneralPRPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 191, column 48
    function action_84 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 197, column 48
    function action_89 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 191, column 48
    function action_dest_85 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 197, column 48
    function action_dest_90 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 217, column 48
    function valueRoot_103 () : java.lang.Object {
      return Vehicle.Driver
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 191, column 48
    function valueRoot_87 () : java.lang.Object {
      return Vehicle.Vehicle
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 212, column 48
    function value_100 () : dynamic.Dynamic {
      return gw.pcf.LossPartyUtils.getLossParty(Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 217, column 48
    function value_102 () : dynamic.Dynamic {
      return Vehicle.Driver.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 191, column 48
    function value_86 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 197, column 48
    function value_91 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 202, column 48
    function value_94 () : dynamic.Dynamic {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 207, column 48
    function value_97 () : dynamic.Dynamic {
      return Vehicle.Vehicle.State
    }
    
    property get Vehicle () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPRPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneralPRPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function action_112 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 248, column 48
    function action_117 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function action_dest_113 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 248, column 48
    function action_dest_118 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function valueRoot_115 () : java.lang.Object {
      return InjuryIncidentIterator.injured
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 248, column 48
    function valueRoot_120 () : java.lang.Object {
      return InjuryIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 242, column 48
    function value_114 () : dynamic.Dynamic {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 248, column 48
    function value_119 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 253, column 48
    function value_122 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Description
    }
    
    property get InjuryIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPRPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneralPRPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 274, column 48
    function valueRoot_130 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 274, column 48
    function value_129 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 279, column 48
    function value_132 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 284, column 48
    function value_135 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPRPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneralPRPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 323, column 48
    function valueRoot_149 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 323, column 48
    function value_148 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 328, column 48
    function value_151 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 333, column 48
    function value_154 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPRPanelSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneralPRPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 150, column 48
    function action_64 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, prop)
    }
    
    // 'action' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 150, column 48
    function action_dest_65 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, prop)
    }
    
    // 'value' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 150, column 48
    function valueRoot_67 () : java.lang.Object {
      return prop.Property.Address
    }
    
    // 'value' attribute on TextCell (id=Address1_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 150, column 48
    function value_66 () : dynamic.Dynamic {
      return prop.Property.Address.DisplayAddressLine1
    }
    
    // 'value' attribute on TextCell (id=City_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 156, column 48
    function value_69 () : dynamic.Dynamic {
      return prop.Property.Address.DisplayCity
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPRPanelSet.default.pcf: line 161, column 48
    function value_72 () : dynamic.Dynamic {
      return prop.Property.Address.State
    }
    
    property get prop () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}