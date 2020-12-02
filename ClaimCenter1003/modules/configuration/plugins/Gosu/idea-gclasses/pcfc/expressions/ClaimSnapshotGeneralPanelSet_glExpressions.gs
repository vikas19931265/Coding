package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneralPanelSet_glExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneralPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPanelSet.gl.pcf: line 127, column 29
    function def_onEnter_53 (def :  pcf.AddressSnapshotInputSet) : void {
      def.onEnter(Snapshot.LossLocation, Snapshot)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPanelSet.gl.pcf: line 127, column 29
    function def_refreshVariables_54 (def :  pcf.AddressSnapshotInputSet) : void {
      def.refreshVariables(Snapshot.LossLocation, Snapshot)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 267, column 48
    function sortValue_111 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 272, column 48
    function sortValue_112 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 277, column 48
    function sortValue_113 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 149, column 48
    function sortValue_55 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 156, column 48
    function sortValue_56 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 161, column 48
    function sortValue_57 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function sortValue_72 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.PrimarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function sortValue_73 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.SecondarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function sortValue_74 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.TertiarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function sortValue_75 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.QuaternarySortValue
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 192, column 48
    function sortValue_76 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 197, column 48
    function sortValue_77 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 218, column 48
    function sortValue_92 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 223, column 48
    function sortValue_93 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 228, column 48
    function sortValue_94 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 23, column 40
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 81, column 40
    function valueRoot_29 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 86, column 40
    function valueRoot_32 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 23, column 40
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.gl.pcf: line 212, column 43
    function value_104 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 242, column 40
    function value_105 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 247, column 40
    function value_108 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 47, column 40
    function value_11 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.gl.pcf: line 261, column 43
    function value_123 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 55, column 40
    function value_14 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 60, column 40
    function value_17 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 66, column 65
    function value_21 () : dynamic.Dynamic {
      return Snapshot.Fault
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 73, column 40
    function value_25 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 81, column 40
    function value_28 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 28, column 40
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 86, column 40
    function value_31 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 91, column 40
    function value_34 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 97, column 40
    function value_37 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=ManifestationDate_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 101, column 73
    function value_40 () : java.lang.String {
      return util.Snapshot.renderDate(Snapshot.ManifestationDate)
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 105, column 72
    function value_42 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 110, column 40
    function value_44 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 115, column 40
    function value_47 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 120, column 40
    function value_50 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 32, column 68
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.Catastrophe)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.gl.pcf: line 141, column 46
    function value_71 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "FixedPropertyIncident")
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 37, column 40
    function value_8 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.gl.pcf: line 178, column 46
    function value_91 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "InjuryIncident")
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 66, column 65
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function action_78 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 192, column 48
    function action_83 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function action_dest_79 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 192, column 48
    function action_dest_84 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function valueRoot_81 () : java.lang.Object {
      return InjuryIncidentIterator.injured
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 192, column 48
    function valueRoot_86 () : java.lang.Object {
      return InjuryIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 186, column 48
    function value_80 () : dynamic.Dynamic {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 192, column 48
    function value_85 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 197, column 48
    function value_88 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Description
    }
    
    property get InjuryIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 218, column 48
    function valueRoot_96 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 228, column 48
    function value_101 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 218, column 48
    function value_95 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 223, column 48
    function value_98 () : dynamic.Dynamic {
      return Official.Name
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 267, column 48
    function valueRoot_115 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 267, column 48
    function value_114 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 272, column 48
    function value_117 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 277, column 48
    function value_120 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 149, column 48
    function action_58 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 156, column 48
    function action_63 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 149, column 48
    function action_dest_59 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 156, column 48
    function action_dest_64 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 149, column 48
    function valueRoot_61 () : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 149, column 48
    function value_60 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.DisplayAddressLine1
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 156, column 48
    function value_65 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.DisplayCity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.gl.pcf: line 161, column 48
    function value_68 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    property get FixedPropertyIncidentInstance () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}