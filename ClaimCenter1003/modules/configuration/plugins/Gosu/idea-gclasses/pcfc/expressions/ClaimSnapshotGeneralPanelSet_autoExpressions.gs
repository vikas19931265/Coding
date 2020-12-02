package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneralPanelSet_autoExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneralPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPanelSet.auto.pcf: line 134, column 29
    function def_onEnter_58 (def :  pcf.AddressSnapshotInputSet) : void {
      def.onEnter(Snapshot.LossLocation, Snapshot)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPanelSet.auto.pcf: line 134, column 29
    function def_refreshVariables_59 (def :  pcf.AddressSnapshotInputSet) : void {
      def.refreshVariables(Snapshot.LossLocation, Snapshot)
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function sortValue_105 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.PrimarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function sortValue_106 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.SecondarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function sortValue_107 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.TertiarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function sortValue_108 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.QuaternarySortValue
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 249, column 48
    function sortValue_109 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 254, column 48
    function sortValue_110 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 275, column 48
    function sortValue_125 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 280, column 48
    function sortValue_126 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 285, column 48
    function sortValue_127 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 324, column 48
    function sortValue_144 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 329, column 48
    function sortValue_145 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 334, column 48
    function sortValue_146 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 154, column 48
    function sortValue_60 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 160, column 48
    function sortValue_61 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 165, column 48
    function sortValue_62 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 170, column 48
    function sortValue_63 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 175, column 48
    function sortValue_64 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return gw.pcf.LossPartyUtils.getLossParty(Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 180, column 48
    function sortValue_65 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Driver.DisplayName
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 206, column 48
    function sortValue_88 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 213, column 48
    function sortValue_89 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 218, column 48
    function sortValue_90 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 23, column 40
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 92, column 40
    function valueRoot_36 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 97, column 40
    function valueRoot_39 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 33, column 40
    function valueRoot_7 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 23, column 40
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.auto.pcf: line 198, column 46
    function value_104 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "FixedPropertyIncident")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 48, column 40
    function value_12 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.auto.pcf: line 235, column 46
    function value_124 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "InjuryIncident")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.auto.pcf: line 269, column 43
    function value_137 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 299, column 40
    function value_138 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 304, column 40
    function value_141 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 56, column 40
    function value_15 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.auto.pcf: line 318, column 43
    function value_156 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 61, column 40
    function value_18 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 68, column 40
    function value_21 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Weather_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 79, column 40
    function value_29 () : dynamic.Dynamic {
      return Snapshot.Weather
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 28, column 40
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentCourse_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 84, column 40
    function value_32 () : dynamic.Dynamic {
      return Snapshot.EmploymentInjury
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 92, column 40
    function value_35 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 97, column 40
    function value_38 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 102, column 40
    function value_41 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 108, column 40
    function value_44 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 112, column 72
    function value_47 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 117, column 40
    function value_49 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 122, column 40
    function value_52 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 127, column 40
    function value_55 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 33, column 40
    function value_6 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.auto.pcf: line 147, column 46
    function value_87 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "VehicleIncident")
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 38, column 40
    function value_9 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 74, column 65
    function visible_24 () : java.lang.Boolean {
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 206, column 48
    function action_91 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 213, column 48
    function action_96 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 206, column 48
    function action_dest_92 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 213, column 48
    function action_dest_97 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 206, column 48
    function valueRoot_94 () : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 218, column 48
    function value_101 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 206, column 48
    function value_93 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.DisplayAddressLine1
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 213, column 48
    function value_98 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.DisplayCity
    }
    
    property get FixedPropertyIncidentInstance () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function action_111 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 249, column 48
    function action_116 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function action_dest_112 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 249, column 48
    function action_dest_117 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function valueRoot_114 () : java.lang.Object {
      return InjuryIncidentIterator.injured
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 249, column 48
    function valueRoot_119 () : java.lang.Object {
      return InjuryIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 243, column 48
    function value_113 () : dynamic.Dynamic {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 249, column 48
    function value_118 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 254, column 48
    function value_121 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Description
    }
    
    property get InjuryIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 275, column 48
    function valueRoot_129 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 275, column 48
    function value_128 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 280, column 48
    function value_131 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 285, column 48
    function value_134 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 324, column 48
    function valueRoot_148 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 324, column 48
    function value_147 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 329, column 48
    function value_150 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 334, column 48
    function value_153 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 154, column 48
    function action_66 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 160, column 48
    function action_71 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 154, column 48
    function action_dest_67 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 160, column 48
    function action_dest_72 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 154, column 48
    function valueRoot_69 () : java.lang.Object {
      return Vehicle.Vehicle
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 180, column 48
    function valueRoot_85 () : java.lang.Object {
      return Vehicle.Driver
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 154, column 48
    function value_68 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 160, column 48
    function value_73 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 165, column 48
    function value_76 () : dynamic.Dynamic {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 170, column 48
    function value_79 () : dynamic.Dynamic {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 175, column 48
    function value_82 () : dynamic.Dynamic {
      return gw.pcf.LossPartyUtils.getLossParty(Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPanelSet.auto.pcf: line 180, column 48
    function value_84 () : dynamic.Dynamic {
      return Vehicle.Driver.DisplayName
    }
    
    property get Vehicle () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}