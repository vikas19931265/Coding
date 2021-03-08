package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneral500DV_TravExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneral500DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Baggage_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 247, column 46
    function sortValue_100 (BaggageIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return BaggageIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 273, column 46
    function sortValue_115 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 279, column 46
    function sortValue_116 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 284, column 46
    function sortValue_117 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 307, column 46
    function sortValue_132 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 312, column 46
    function sortValue_133 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 317, column 46
    function sortValue_134 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 356, column 46
    function sortValue_151 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 361, column 46
    function sortValue_152 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 366, column 46
    function sortValue_153 (MetroReport :  dynamic.Dynamic) : java.lang.Object {
      return MetroReport.CreateTime
    }
    
    // 'value' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 201, column 46
    function sortValue_88 (TripIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return TripIncidentIterator.TripRU.RUNumber + ": " + TripIncidentIterator.TripRU.TripDescription
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 207, column 46
    function sortValue_89 (TripIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return TripIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 234, column 46
    function sortValue_98 (BaggageIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return BaggageIncidentIterator.BaggageType
    }
    
    // 'value' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 241, column 46
    function sortValue_99 (BaggageIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return BaggageIncidentIterator.PropertyDesc
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 21, column 38
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 88, column 38
    function valueRoot_36 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 93, column 38
    function valueRoot_39 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 132, column 38
    function valueRoot_59 () : java.lang.Object {
      return Snapshot.LossLocation
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 31, column 38
    function valueRoot_7 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 21, column 38
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on RowIterator (id=baggageincident_iterator) at ClaimSnapshotGeneral500DV.Trav.pcf: line 226, column 44
    function value_114 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "BaggageIncident")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 44, column 38
    function value_12 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.Trav.pcf: line 266, column 44
    function value_131 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "InjuryIncident")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.Trav.pcf: line 301, column 41
    function value_144 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 331, column 38
    function value_145 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 336, column 38
    function value_148 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 52, column 38
    function value_15 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneral500DV.Trav.pcf: line 350, column 41
    function value_163 () : dynamic.Dynamic {
      return Snapshot.MetroReports
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 57, column 38
    function value_18 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 64, column 38
    function value_21 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Weather_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 75, column 38
    function value_29 () : dynamic.Dynamic {
      return Snapshot.Weather
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentCourse_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 80, column 38
    function value_32 () : dynamic.Dynamic {
      return Snapshot.EmploymentInjury
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 88, column 38
    function value_35 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 93, column 38
    function value_38 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 98, column 38
    function value_41 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 104, column 38
    function value_44 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 108, column 70
    function value_47 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 113, column 38
    function value_49 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 118, column 38
    function value_52 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 123, column 38
    function value_55 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 132, column 38
    function value_58 () : dynamic.Dynamic {
      return Snapshot.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Address1_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 137, column 38
    function value_61 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine1
    }
    
    // 'value' attribute on TextInput (id=Address2_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 142, column 38
    function value_64 () : dynamic.Dynamic {
      return Snapshot.LossLocation.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=City_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 147, column 38
    function value_67 () : dynamic.Dynamic {
      return Snapshot.LossLocation.City
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 152, column 38
    function value_70 () : dynamic.Dynamic {
      return Snapshot.LossLocation.State
    }
    
    // 'value' attribute on TextInput (id=PostalCode_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 157, column 38
    function value_73 () : dynamic.Dynamic {
      return Snapshot.LossLocation.PostalCode
    }
    
    // 'value' attribute on TextInput (id=County_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 162, column 38
    function value_76 () : dynamic.Dynamic {
      return Snapshot.LossLocation.County
    }
    
    // 'value' attribute on TextInput (id=Country_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 167, column 38
    function value_79 () : dynamic.Dynamic {
      return Snapshot.LossLocation.Country
    }
    
    // 'value' attribute on TextInput (id=LossLocationCode_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 172, column 38
    function value_82 () : dynamic.Dynamic {
      return Snapshot.LossLocationCode
    }
    
    // 'value' attribute on TextInput (id=JurisdictionState_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 177, column 38
    function value_85 () : dynamic.Dynamic {
      return Snapshot.JurisdictionState
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 36, column 38
    function value_9 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'value' attribute on RowIterator (id=tripincident_iterator) at ClaimSnapshotGeneral500DV.Trav.pcf: line 193, column 44
    function value_97 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "TripIncident")
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneral500DV.Trav.pcf: line 70, column 63
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 234, column 46
    function action_101 () : void {
      ClaimSnapshotBaggageIncidentPopup.push( Claim, BaggageIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 241, column 46
    function action_106 () : void {
      ClaimSnapshotBaggageIncidentPopup.push( Claim, BaggageIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 234, column 46
    function action_dest_102 () : pcf.api.Destination {
      return pcf.ClaimSnapshotBaggageIncidentPopup.createDestination( Claim, BaggageIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 241, column 46
    function action_dest_107 () : pcf.api.Destination {
      return pcf.ClaimSnapshotBaggageIncidentPopup.createDestination( Claim, BaggageIncidentIterator )
    }
    
    // 'value' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 234, column 46
    function valueRoot_104 () : java.lang.Object {
      return BaggageIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 234, column 46
    function value_103 () : dynamic.Dynamic {
      return BaggageIncidentIterator.BaggageType
    }
    
    // 'value' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 241, column 46
    function value_108 () : dynamic.Dynamic {
      return BaggageIncidentIterator.PropertyDesc
    }
    
    // 'value' attribute on TextCell (id=Baggage_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 247, column 46
    function value_111 () : dynamic.Dynamic {
      return BaggageIncidentIterator.Description
    }
    
    property get BaggageIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 273, column 46
    function action_118 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 279, column 46
    function action_123 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 273, column 46
    function action_dest_119 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 279, column 46
    function action_dest_124 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 273, column 46
    function valueRoot_121 () : java.lang.Object {
      return InjuryIncidentIterator.injured
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 279, column 46
    function valueRoot_126 () : java.lang.Object {
      return InjuryIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 273, column 46
    function value_120 () : dynamic.Dynamic {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 279, column 46
    function value_125 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 284, column 46
    function value_128 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Description
    }
    
    property get InjuryIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 307, column 46
    function valueRoot_136 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 307, column 46
    function value_135 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 312, column 46
    function value_138 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 317, column 46
    function value_141 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 356, column 46
    function valueRoot_155 () : java.lang.Object {
      return MetroReport
    }
    
    // 'value' attribute on TextCell (id=MetroReportType_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 356, column 46
    function value_154 () : dynamic.Dynamic {
      return MetroReport.MetroReportType
    }
    
    // 'value' attribute on TextCell (id=MetroReportStatus_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 361, column 46
    function value_157 () : dynamic.Dynamic {
      return MetroReport.Status
    }
    
    // 'value' attribute on DateCell (id=MetroReportOrderDate_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 366, column 46
    function value_160 () : dynamic.Dynamic {
      return MetroReport.CreateTime
    }
    
    property get MetroReport () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotGeneral500DV.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneral500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 201, column 46
    function action_90 () : void {
      ClaimSnapshotTripIncidentPopup.push( Claim, TripIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 201, column 46
    function action_dest_91 () : pcf.api.Destination {
      return pcf.ClaimSnapshotTripIncidentPopup.createDestination( Claim, TripIncidentIterator )
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 207, column 46
    function valueRoot_95 () : java.lang.Object {
      return TripIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 201, column 46
    function value_92 () : dynamic.Dynamic {
      return TripIncidentIterator.TripRU.RUNumber + ": " + TripIncidentIterator.TripRU.TripDescription
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneral500DV.Trav.pcf: line 207, column 46
    function value_94 () : dynamic.Dynamic {
      return TripIncidentIterator.Description
    }
    
    property get TripIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}