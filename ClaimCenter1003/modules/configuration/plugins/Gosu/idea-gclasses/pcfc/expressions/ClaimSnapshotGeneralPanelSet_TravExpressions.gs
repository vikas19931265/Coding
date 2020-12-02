package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotGeneralPanelSet_TravExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotGeneralPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 134, column 29
    function def_onEnter_58 (def :  pcf.AddressSnapshotInputSet) : void {
      def.onEnter(Snapshot.LossLocation, Snapshot)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 134, column 29
    function def_refreshVariables_59 (def :  pcf.AddressSnapshotInputSet) : void {
      def.refreshVariables(Snapshot.LossLocation, Snapshot)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 266, column 48
    function sortValue_107 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 272, column 48
    function sortValue_108 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 277, column 48
    function sortValue_109 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 282, column 48
    function sortValue_110 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 287, column 48
    function sortValue_111 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return gw.pcf.LossPartyUtils.getLossParty(Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 292, column 48
    function sortValue_112 (Vehicle :  dynamic.Dynamic) : java.lang.Object {
      return Vehicle.Driver.DisplayName
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 318, column 48
    function sortValue_135 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.AddressLine1
    }
    
    // 'sortBy' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 325, column 48
    function sortValue_136 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.City
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 330, column 48
    function sortValue_137 (FixedPropertyIncidentInstance :  dynamic.Dynamic) : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 352, column 48
    function sortValue_152 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 357, column 48
    function sortValue_153 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 362, column 48
    function sortValue_154 (Official :  dynamic.Dynamic) : java.lang.Object {
      return Official.ReportNumber
    }
    
    // 'value' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 158, column 48
    function sortValue_60 (TripIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return TripIncidentIterator.TripRU.RUNumber + ": " + TripIncidentIterator.TripRU.TripDescription
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 164, column 48
    function sortValue_61 (TripIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return TripIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 192, column 48
    function sortValue_70 (BaggageIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return BaggageIncidentIterator.BaggageType
    }
    
    // 'value' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 199, column 48
    function sortValue_71 (BaggageIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return BaggageIncidentIterator.PropertyDesc
    }
    
    // 'value' attribute on TextCell (id=Baggage_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 205, column 48
    function sortValue_72 (BaggageIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return BaggageIncidentIterator.Description
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function sortValue_87 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.PrimarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function sortValue_88 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.SecondarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function sortValue_89 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.TertiarySortValue
    }
    
    // 'sortBy' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function sortValue_90 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.injured.QuaternarySortValue
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 237, column 48
    function sortValue_91 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 242, column 48
    function sortValue_92 (InjuryIncidentIterator :  dynamic.Dynamic) : java.lang.Object {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 23, column 40
    function valueRoot_1 () : java.lang.Object {
      return Snapshot
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 92, column 40
    function valueRoot_36 () : java.lang.Object {
      return Snapshot.Reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 97, column 40
    function valueRoot_39 () : java.lang.Object {
      return Snapshot.MainContact
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 33, column 40
    function valueRoot_7 () : java.lang.Object {
      return Snapshot.Catastrophe
    }
    
    // 'value' attribute on TextInput (id=LOBCode_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 23, column 40
    function value_0 () : dynamic.Dynamic {
      return Snapshot.LOBCode
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 223, column 46
    function value_106 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "InjuryIncident")
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 48, column 40
    function value_12 () : dynamic.Dynamic {
      return Snapshot.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 259, column 46
    function value_134 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "VehicleIncident")
    }
    
    // 'value' attribute on TextInput (id=LossCause_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 56, column 40
    function value_15 () : dynamic.Dynamic {
      return Snapshot.LossCause
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 310, column 46
    function value_151 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "FixedPropertyIncident")
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 346, column 43
    function value_164 () : dynamic.Dynamic {
      return Snapshot.Officials
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 376, column 40
    function value_165 () : dynamic.Dynamic {
      return Snapshot.CreateTime
    }
    
    // 'value' attribute on TextInput (id=ValidationLevel_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 381, column 40
    function value_168 () : dynamic.Dynamic {
      return Snapshot.ValidationLevel
    }
    
    // 'value' attribute on TextInput (id=Fault_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 61, column 40
    function value_18 () : dynamic.Dynamic {
      return Snapshot.FaultRating
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 68, column 40
    function value_21 () : dynamic.Dynamic {
      return Snapshot.LossDate
    }
    
    // 'value' attribute on TextInput (id=Weather_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 79, column 40
    function value_29 () : dynamic.Dynamic {
      return Snapshot.Weather
    }
    
    // 'value' attribute on TextInput (id=LossType_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 28, column 40
    function value_3 () : dynamic.Dynamic {
      return Snapshot.LossType
    }
    
    // 'value' attribute on BooleanRadioInput (id=EmploymentCourse_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 84, column 40
    function value_32 () : dynamic.Dynamic {
      return Snapshot.EmploymentInjury
    }
    
    // 'value' attribute on TextInput (id=Reporter_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 92, column 40
    function value_35 () : dynamic.Dynamic {
      return Snapshot.Reporter.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContact_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 97, column 40
    function value_38 () : dynamic.Dynamic {
      return Snapshot.MainContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=MainContactType_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 102, column 40
    function value_41 () : dynamic.Dynamic {
      return Snapshot.MainContactType
    }
    
    // 'value' attribute on DateInput (id=ReportedDate_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 108, column 40
    function value_44 () : dynamic.Dynamic {
      return Snapshot.ReportedDate
    }
    
    // 'value' attribute on TextInput (id=FirstNoticeSuit_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 112, column 72
    function value_47 () : java.lang.String {
      return util.Snapshot.renderValue(Snapshot.FirstNoticeSuit)
    }
    
    // 'value' attribute on TextInput (id=HowReported_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 117, column 40
    function value_49 () : dynamic.Dynamic {
      return Snapshot.HowReported
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentReport_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 122, column 40
    function value_52 () : dynamic.Dynamic {
      return Snapshot.IncidentReport
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 127, column 40
    function value_55 () : dynamic.Dynamic {
      return Snapshot.CoverageInQuestion
    }
    
    // 'value' attribute on TextInput (id=Catastrophe_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 33, column 40
    function value_6 () : dynamic.Dynamic {
      return Snapshot.Catastrophe.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=tripincident_iterator) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 150, column 46
    function value_69 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "TripIncident")
    }
    
    // 'value' attribute on RowIterator (id=baggageincident_iterator) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 184, column 46
    function value_86 () : java.lang.Object[] {
      return util.Snapshot.filterBeansOfType(Snapshot.Incidents, "BaggageIncident")
    }
    
    // 'value' attribute on TextInput (id=PermissionRequired_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 38, column 40
    function value_9 () : dynamic.Dynamic {
      return Snapshot.PermissionRequired
    }
    
    // 'visible' attribute on TextInput (id=AtFaultPercentage_Input) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 74, column 65
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 192, column 48
    function action_73 () : void {
      ClaimSnapshotBaggageIncidentPopup.push( Claim, BaggageIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 199, column 48
    function action_78 () : void {
      ClaimSnapshotBaggageIncidentPopup.push( Claim, BaggageIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 192, column 48
    function action_dest_74 () : pcf.api.Destination {
      return pcf.ClaimSnapshotBaggageIncidentPopup.createDestination( Claim, BaggageIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 199, column 48
    function action_dest_79 () : pcf.api.Destination {
      return pcf.ClaimSnapshotBaggageIncidentPopup.createDestination( Claim, BaggageIncidentIterator )
    }
    
    // 'value' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 192, column 48
    function valueRoot_76 () : java.lang.Object {
      return BaggageIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=BaggageType_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 192, column 48
    function value_75 () : dynamic.Dynamic {
      return BaggageIncidentIterator.BaggageType
    }
    
    // 'value' attribute on TextCell (id=PropertyDescription_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 199, column 48
    function value_80 () : dynamic.Dynamic {
      return BaggageIncidentIterator.PropertyDesc
    }
    
    // 'value' attribute on TextCell (id=Baggage_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 205, column 48
    function value_83 () : dynamic.Dynamic {
      return BaggageIncidentIterator.Description
    }
    
    property get BaggageIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function action_93 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 237, column 48
    function action_98 () : void {
      ClaimSnapshotInjuryIncidentPopup.push(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function action_dest_94 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 237, column 48
    function action_dest_99 () : pcf.api.Destination {
      return pcf.ClaimSnapshotInjuryIncidentPopup.createDestination(Claim, InjuryIncidentIterator)
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 237, column 48
    function valueRoot_101 () : java.lang.Object {
      return InjuryIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function valueRoot_96 () : java.lang.Object {
      return InjuryIncidentIterator.injured
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 237, column 48
    function value_100 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Severity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 242, column 48
    function value_103 () : dynamic.Dynamic {
      return InjuryIncidentIterator.Description
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 231, column 48
    function value_95 () : dynamic.Dynamic {
      return InjuryIncidentIterator.injured.DisplayName
    }
    
    property get InjuryIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 266, column 48
    function action_113 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 272, column 48
    function action_118 () : void {
      ClaimSnapshotVehicleIncidentPopup.push(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 266, column 48
    function action_dest_114 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'action' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 272, column 48
    function action_dest_119 () : pcf.api.Destination {
      return pcf.ClaimSnapshotVehicleIncidentPopup.createDestination(Claim, Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 266, column 48
    function valueRoot_116 () : java.lang.Object {
      return Vehicle.Vehicle
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 292, column 48
    function valueRoot_132 () : java.lang.Object {
      return Vehicle.Driver
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 266, column 48
    function value_115 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Make
    }
    
    // 'value' attribute on TextCell (id=Model_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 272, column 48
    function value_120 () : dynamic.Dynamic {
      return Vehicle.Vehicle.Model
    }
    
    // 'value' attribute on TextCell (id=License_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 277, column 48
    function value_123 () : dynamic.Dynamic {
      return Vehicle.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextCell (id=State_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 282, column 48
    function value_126 () : dynamic.Dynamic {
      return Vehicle.Vehicle.State
    }
    
    // 'value' attribute on TextCell (id=LossParty_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 287, column 48
    function value_129 () : dynamic.Dynamic {
      return gw.pcf.LossPartyUtils.getLossParty(Vehicle)
    }
    
    // 'value' attribute on TextCell (id=Driver_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 292, column 48
    function value_131 () : dynamic.Dynamic {
      return Vehicle.Driver.DisplayName
    }
    
    property get Vehicle () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 318, column 48
    function action_138 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 325, column 48
    function action_143 () : void {
      ClaimSnapshotFixedPropertyIncidentPopup.push(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 318, column 48
    function action_dest_139 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'action' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 325, column 48
    function action_dest_144 () : pcf.api.Destination {
      return pcf.ClaimSnapshotFixedPropertyIncidentPopup.createDestination(Claim, FixedPropertyIncidentInstance)
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 318, column 48
    function valueRoot_141 () : java.lang.Object {
      return FixedPropertyIncidentInstance.Property.Address
    }
    
    // 'value' attribute on TextCell (id=Make_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 318, column 48
    function value_140 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.DisplayAddressLine1
    }
    
    // 'value' attribute on TextCell (id=Severity_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 325, column 48
    function value_145 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.DisplayCity
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 330, column 48
    function value_148 () : dynamic.Dynamic {
      return FixedPropertyIncidentInstance.Property.Address.State
    }
    
    property get FixedPropertyIncidentInstance () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 352, column 48
    function valueRoot_156 () : java.lang.Object {
      return Official
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 352, column 48
    function value_155 () : dynamic.Dynamic {
      return Official.OfficialType
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 357, column 48
    function value_158 () : dynamic.Dynamic {
      return Official.Name
    }
    
    // 'value' attribute on TextCell (id=ReportNumber_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 362, column 48
    function value_161 () : dynamic.Dynamic {
      return Official.ReportNumber
    }
    
    property get Official () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 158, column 48
    function action_62 () : void {
      ClaimSnapshotTripIncidentPopup.push( Claim, TripIncidentIterator )
    }
    
    // 'action' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 158, column 48
    function action_dest_63 () : pcf.api.Destination {
      return pcf.ClaimSnapshotTripIncidentPopup.createDestination( Claim, TripIncidentIterator )
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 164, column 48
    function valueRoot_67 () : java.lang.Object {
      return TripIncidentIterator
    }
    
    // 'value' attribute on TextCell (id=TripRU_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 158, column 48
    function value_64 () : dynamic.Dynamic {
      return TripIncidentIterator.TripRU.RUNumber + ": " + TripIncidentIterator.TripRU.TripDescription
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimSnapshotGeneralPanelSet.Trav.pcf: line 164, column 48
    function value_66 () : dynamic.Dynamic {
      return TripIncidentIterator.Description
    }
    
    property get TripIncidentIterator () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}