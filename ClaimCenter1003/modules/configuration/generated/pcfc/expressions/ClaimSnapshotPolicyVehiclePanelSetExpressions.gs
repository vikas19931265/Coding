package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotPolicyVehiclePanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyVehicleLDPExpressionsImpl extends ClaimSnapshotPolicyVehiclePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 183, column 37
    function def_onEnter_91 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_700) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 183, column 37
    function def_onEnter_93 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_800) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 183, column 37
    function def_onEnter_95 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_default) : void {
      def.onEnter(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 183, column 37
    function def_refreshVariables_92 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_700) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 183, column 37
    function def_refreshVariables_94 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_800) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 183, column 37
    function def_refreshVariables_96 (def :  pcf.ClaimSnapshotPolicyCovTermsCV_default) : void {
      def.refreshVariables(SelectedCoverage)
    }
    
    // 'label' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 123, column 71
    function label_40 () : java.lang.Object {
      return DisplayKey.get("Web.ClaimSnapshotPolicyVehicleDV.Currency")
    }
    
    // 'value' attribute on TextCell (id=CoverageType_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 116, column 46
    function sortValue_39 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.Type
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 123, column 71
    function sortValue_41 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.Currency
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 130, column 80
    function sortValue_43 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 136, column 46
    function sortValue_45 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 142, column 46
    function sortValue_46 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=NonmedAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 148, column 46
    function sortValue_47 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.NonmedAggLimit
    }
    
    // 'value' attribute on TextCell (id=ReplaceAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 154, column 46
    function sortValue_48 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.ReplaceAggLimit
    }
    
    // 'value' attribute on TextCell (id=PersonAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 160, column 46
    function sortValue_49 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.PersonAggLimit
    }
    
    // 'value' attribute on TextCell (id=ClaimAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 166, column 46
    function sortValue_50 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.ClaimAggLimit
    }
    
    // 'value' attribute on TextCell (id=LimitsIndicator_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 171, column 46
    function sortValue_51 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 176, column 46
    function sortValue_52 (VehicleCoverage :  dynamic.Dynamic) : java.lang.Object {
      return VehicleCoverage.Notes
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 109, column 41
    function value_90 () : dynamic.Dynamic {
      return VehicleRU.Coverages
    }
    
    // 'visible' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 123, column 71
    function visible_42 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 130, column 80
    function visible_44 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(VehicleRU)
    }
    
    property get SelectedCoverage () : dynamic.Dynamic {
      return getCurrentSelection(1) as dynamic.Dynamic
    }
    
    property set SelectedCoverage ($arg :  dynamic.Dynamic) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotPolicyVehiclePanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 83, column 79
    function sortValue_32 (VehicleOwner :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(VehicleOwner.Lienholder)
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 87, column 78
    function sortValue_33 (VehicleOwner :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(VehicleOwner.OwnerType)
    }
    
    // 'value' attribute on TextInput (id=Number_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 19, column 66
    function value_0 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.RUNumber)
    }
    
    // 'value' attribute on TextInput (id=VIN_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 40, column 196
    function value_11 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.Vin)
    }
    
    // 'value' attribute on TextInput (id=SerialNumber_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 45, column 180
    function value_15 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.SerialNumber)
    }
    
    // 'value' attribute on TextInput (id=Color_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 49, column 71
    function value_18 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.Color)
    }
    
    // 'value' attribute on TextInput (id=Make_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 23, column 70
    function value_2 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.Make)
    }
    
    // 'value' attribute on TextInput (id=State_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 53, column 71
    function value_20 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.State)
    }
    
    // 'value' attribute on TextInput (id=LicensePlate_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 57, column 78
    function value_22 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.LicensePlate)
    }
    
    // 'value' attribute on TextInput (id=BoatType_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 62, column 71
    function value_25 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.BoatType)
    }
    
    // 'value' attribute on TextInput (id=OffRoadStyle_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 67, column 128
    function value_29 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.OffRoadStyle)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 78, column 43
    function value_38 () : dynamic.Dynamic {
      return VehicleRU.Vehicle.Lienholders
    }
    
    // 'value' attribute on TextInput (id=Model_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 27, column 71
    function value_4 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.Model)
    }
    
    // 'value' attribute on TextInput (id=Year_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 31, column 70
    function value_6 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.Year)
    }
    
    // 'value' attribute on TextInput (id=Style_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 35, column 71
    function value_8 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleRU.Vehicle.Style)
    }
    
    // 'visible' attribute on TextInput (id=VIN_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 40, column 196
    function visible_10 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style.Code != "boat" && VehicleRU.Vehicle.Style.Code != "ATV" && VehicleRU.Vehicle.Style.Code != "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=SerialNumber_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 45, column 180
    function visible_14 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style.Code == "boat" || VehicleRU.Vehicle.Style.Code == "ATV" || VehicleRU.Vehicle.Style.Code == "snowmobile"
    }
    
    // 'visible' attribute on TextInput (id=BoatType_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 62, column 71
    function visible_24 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style.Code == "boat"
    }
    
    // 'visible' attribute on TextInput (id=OffRoadStyle_Input) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 67, column 128
    function visible_28 () : java.lang.Boolean {
      return VehicleRU.Vehicle.Style.Code == "ATV" || VehicleRU.Vehicle.Style.Code == "snowmobile"
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get VehicleRU () : dynamic.Dynamic {
      return getRequireValue("VehicleRU", 0) as dynamic.Dynamic
    }
    
    property set VehicleRU ($arg :  dynamic.Dynamic) {
      setRequireValue("VehicleRU", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ClaimSnapshotPolicyVehicleLDPExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 123, column 71
    function label_56 () : java.lang.Object {
      return DisplayKey.get("Web.ClaimSnapshotPolicyVehicleDV.Currency")
    }
    
    // 'value' attribute on TextCell (id=CoverageType_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 116, column 46
    function valueRoot_54 () : java.lang.Object {
      return VehicleCoverage
    }
    
    // 'value' attribute on TextCell (id=CoverageType_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 116, column 46
    function value_53 () : dynamic.Dynamic {
      return VehicleCoverage.Type
    }
    
    // 'value' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 123, column 71
    function value_57 () : dynamic.Dynamic {
      return VehicleCoverage.Currency
    }
    
    // 'value' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 130, column 80
    function value_62 () : dynamic.Dynamic {
      return VehicleCoverage.Deductible
    }
    
    // 'value' attribute on TextCell (id=ExposureLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 136, column 46
    function value_66 () : dynamic.Dynamic {
      return VehicleCoverage.ExposureLimit
    }
    
    // 'value' attribute on TextCell (id=IncidentLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 142, column 46
    function value_69 () : dynamic.Dynamic {
      return VehicleCoverage.IncidentLimit
    }
    
    // 'value' attribute on TextCell (id=NonmedAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 148, column 46
    function value_72 () : dynamic.Dynamic {
      return VehicleCoverage.NonmedAggLimit
    }
    
    // 'value' attribute on TextCell (id=ReplaceAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 154, column 46
    function value_75 () : dynamic.Dynamic {
      return VehicleCoverage.ReplaceAggLimit
    }
    
    // 'value' attribute on TextCell (id=PersonAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 160, column 46
    function value_78 () : dynamic.Dynamic {
      return VehicleCoverage.PersonAggLimit
    }
    
    // 'value' attribute on TextCell (id=ClaimAggLimit_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 166, column 46
    function value_81 () : dynamic.Dynamic {
      return VehicleCoverage.ClaimAggLimit
    }
    
    // 'value' attribute on TextCell (id=LimitsIndicator_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 171, column 46
    function value_84 () : dynamic.Dynamic {
      return VehicleCoverage.LimitsIndicator
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 176, column 46
    function value_87 () : dynamic.Dynamic {
      return VehicleCoverage.Notes
    }
    
    // 'visible' attribute on TextCell (id=Currency_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 123, column 71
    function visible_59 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.MultiCurrencyMode
    }
    
    // 'visible' attribute on TextCell (id=Deductible_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 130, column 80
    function visible_64 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.isDeductiblePresent(VehicleRU)
    }
    
    property get VehicleCoverage () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyVehiclePanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotPolicyVehiclePanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 83, column 79
    function value_34 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleOwner.Lienholder)
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotPolicyVehiclePanelSet.pcf: line 87, column 78
    function value_36 () : java.lang.String {
      return util.Snapshot.renderValue(VehicleOwner.OwnerType)
    }
    
    property get VehicleOwner () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}