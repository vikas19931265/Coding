package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotLivingExpensesIncident800Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotLivingExpensesIncident800PopupExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotLivingExpensesIncident800Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotLivingExpensesIncident800PopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim, IncidentParam :  dynamic.Dynamic) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_onEnter_25 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_600) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_onEnter_27 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_700) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_onEnter_29 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_800) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_onEnter_31 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_default) : void {
      def.onEnter(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_refreshVariables_26 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_600) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_refreshVariables_28 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_700) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_refreshVariables_30 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_800) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function def_refreshVariables_32 (def :  pcf.ClaimSnapshotIncidentRelatedExposuresPanelSet_default) : void {
      def.refreshVariables(Claim, Snapshot)
    }
    
    // 'icon' attribute on TitleBar at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 31, column 33
    function icon_3 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.LIVING_EXPENSES.DefaultHeaderIcon
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 19, column 31
    function initialValue_0 () : dynamic.Dynamic {
      return gw.api.snapshot.ClaimSnapshotUtil.getSnapshot(Claim)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 23, column 22
    function initialValue_1 () : String {
      return gw.api.snapshot.ClaimSnapshotUtil.getPageVersion(Snapshot)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 27, column 31
    function initialValue_2 () : dynamic.Dynamic {
      return IncidentParam
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 93, column 25
    function mode_33 () : java.lang.Object {
      return 800
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 116, column 50
    function sortValue_34 (aLodgingProvider :  dynamic.Dynamic) : java.lang.Object {
      return aLodgingProvider.StartDate
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 121, column 50
    function sortValue_35 (aLodgingProvider :  dynamic.Dynamic) : java.lang.Object {
      return aLodgingProvider.EndDate
    }
    
    // 'value' attribute on TextCell (id=Days_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 142, column 50
    function sortValue_36 (aLodgingProvider :  dynamic.Dynamic) : java.lang.Object {
      return aLodgingProvider.Days
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 148, column 50
    function sortValue_37 (aLodgingProvider :  dynamic.Dynamic) : java.lang.Object {
      return aLodgingProvider.LodgingRate
    }
    
    // 'value' attribute on TextCell (id=Approx_Total_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 154, column 50
    function sortValue_38 (aLodgingProvider :  dynamic.Dynamic) : java.lang.Object {
      return aLodgingProvider.LodgingTotal
    }
    
    // 'value' attribute on TextAreaCell (id=Comments_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 160, column 50
    function sortValue_39 (aLodgingProvider :  dynamic.Dynamic) : java.lang.Object {
      return aLodgingProvider.Comments
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 45, column 48
    function valueRoot_5 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextInput (id=TotalLodgingEstimate_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 56, column 48
    function value_10 () : dynamic.Dynamic {
      return incident.TotalLodgingEstimate
    }
    
    // 'value' attribute on TextInput (id=TotalMealsEstimate_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 62, column 48
    function value_13 () : dynamic.Dynamic {
      return incident.TotalMealsEstimate
    }
    
    // 'value' attribute on TextInput (id=MealsDays_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 75, column 48
    function value_16 () : dynamic.Dynamic {
      return incident.MealsDays
    }
    
    // 'value' attribute on TextInput (id=MealsPeople_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 80, column 48
    function value_19 () : dynamic.Dynamic {
      return incident.MealsPeople
    }
    
    // 'value' attribute on TextInput (id=MealsRate_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 85, column 48
    function value_22 () : dynamic.Dynamic {
      return incident.MealsRate
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 45, column 48
    function value_4 () : dynamic.Dynamic {
      return incident.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 109, column 45
    function value_67 () : dynamic.Dynamic {
      return incident.LodgingProviders
    }
    
    // 'value' attribute on TextInput (id=ExpectedDuration_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 50, column 48
    function value_7 () : dynamic.Dynamic {
      return incident.ExpectedDurationEstimate
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimSnapshotLivingExpensesIncident800Popup {
      return super.CurrentLocation as pcf.ClaimSnapshotLivingExpensesIncident800Popup
    }
    
    property get IncidentParam () : dynamic.Dynamic {
      return getVariableValue("IncidentParam", 0) as dynamic.Dynamic
    }
    
    property set IncidentParam ($arg :  dynamic.Dynamic) {
      setVariableValue("IncidentParam", 0, $arg)
    }
    
    property get Snapshot () : dynamic.Dynamic {
      return getVariableValue("Snapshot", 0) as dynamic.Dynamic
    }
    
    property set Snapshot ($arg :  dynamic.Dynamic) {
      setVariableValue("Snapshot", 0, $arg)
    }
    
    property get Version () : String {
      return getVariableValue("Version", 0) as String
    }
    
    property set Version ($arg :  String) {
      setVariableValue("Version", 0, $arg)
    }
    
    property get incident () : dynamic.Dynamic {
      return getVariableValue("incident", 0) as dynamic.Dynamic
    }
    
    property set incident ($arg :  dynamic.Dynamic) {
      setVariableValue("incident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotLivingExpensesIncident800Popup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotLivingExpensesIncident800PopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 116, column 50
    function valueRoot_41 () : java.lang.Object {
      return aLodgingProvider
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 128, column 52
    function valueRoot_47 () : java.lang.Object {
      return aLodgingProvider.Contact
    }
    
    // 'value' attribute on TextInput (id=Contact_PrimaryAddress_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 132, column 52
    function valueRoot_50 () : java.lang.Object {
      return aLodgingProvider.Contact.PrimaryAddress
    }
    
    // 'value' attribute on TextCell (id=StartDate_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 116, column 50
    function value_40 () : dynamic.Dynamic {
      return aLodgingProvider.StartDate
    }
    
    // 'value' attribute on TextCell (id=EndDate_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 121, column 50
    function value_43 () : dynamic.Dynamic {
      return aLodgingProvider.EndDate
    }
    
    // 'value' attribute on TextInput (id=Contact_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 128, column 52
    function value_46 () : dynamic.Dynamic {
      return aLodgingProvider.Contact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Contact_PrimaryAddress_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 132, column 52
    function value_49 () : dynamic.Dynamic {
      return aLodgingProvider.Contact.PrimaryAddress.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Contact_Phone_Input) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 136, column 52
    function value_52 () : dynamic.Dynamic {
      return aLodgingProvider.Contact.WorkPhone
    }
    
    // 'value' attribute on TextCell (id=Days_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 142, column 50
    function value_55 () : dynamic.Dynamic {
      return aLodgingProvider.Days
    }
    
    // 'value' attribute on TextCell (id=Rate_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 148, column 50
    function value_58 () : dynamic.Dynamic {
      return aLodgingProvider.LodgingRate
    }
    
    // 'value' attribute on TextCell (id=Approx_Total_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 154, column 50
    function value_61 () : dynamic.Dynamic {
      return aLodgingProvider.LodgingTotal
    }
    
    // 'value' attribute on TextAreaCell (id=Comments_Cell) at ClaimSnapshotLivingExpensesIncident800Popup.pcf: line 160, column 50
    function value_64 () : dynamic.Dynamic {
      return aLodgingProvider.Comments
    }
    
    property get aLodgingProvider () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}