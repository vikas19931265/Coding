package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposuresScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotExposuresScreen_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposuresScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotExposuresScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get SnapshotParam () : dynamic.Dynamic {
      return getRequireValue("SnapshotParam", 0) as dynamic.Dynamic
    }
    
    property set SnapshotParam ($arg :  dynamic.Dynamic) {
      setRequireValue("SnapshotParam", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposuresScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 31, column 44
    function valueRoot_6 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 41, column 44
    function value_11 () : dynamic.Dynamic {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 45, column 69
    function value_14 () : java.lang.String {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextCell (id=CreatedVia_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 50, column 44
    function value_16 () : dynamic.Dynamic {
      return util.Snapshot.renderValue(Exposure.CreatedVia)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 31, column 44
    function value_5 () : dynamic.Dynamic {
      return Exposure.ClaimOrder
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 36, column 44
    function value_8 () : dynamic.Dynamic {
      return Exposure.ExposureType
    }
    
    property get Exposure () : dynamic.Dynamic {
      return getIteratedValue(2) as dynamic.Dynamic
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotExposuresScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ClaimSnapshotExposuresScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_19 (def :  pcf.ClaimSnapshotExposureDV_Baggage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_21 (def :  pcf.ClaimSnapshotExposureDV_BodilyInjuryDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_23 (def :  pcf.ClaimSnapshotExposureDV_Content) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_25 (def :  pcf.ClaimSnapshotExposureDV_Dwelling) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_27 (def :  pcf.ClaimSnapshotExposureDV_GeneralDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_29 (def :  pcf.ClaimSnapshotExposureDV_LivingExpenses) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_31 (def :  pcf.ClaimSnapshotExposureDV_LossOfUseDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_33 (def :  pcf.ClaimSnapshotExposureDV_OtherStructure) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_35 (def :  pcf.ClaimSnapshotExposureDV_PIPDamages) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_37 (def :  pcf.ClaimSnapshotExposureDV_PersonalPropertyDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_39 (def :  pcf.ClaimSnapshotExposureDV_PropertyDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_41 (def :  pcf.ClaimSnapshotExposureDV_TowOnly) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_43 (def :  pcf.ClaimSnapshotExposureDV_TripCancellationDelay) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_onEnter_45 (def :  pcf.ClaimSnapshotExposureDV_VehicleDamage) : void {
      def.onEnter(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 77, column 74
    function def_onEnter_48 (def :  pcf.ClaimSnapshotExposureWageBenefitsDV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 85, column 45
    function def_onEnter_51 (def :  pcf.ClaimSnapshotExposureReplacementServicesDV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 92, column 81
    function def_onEnter_55 (def :  pcf.ClaimSnapshotExposuresVocationalBenefitsDV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 99, column 75
    function def_onEnter_58 (def :  pcf.ClaimSnapshotExposureDeathBenefitsDV) : void {
      def.onEnter(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_20 (def :  pcf.ClaimSnapshotExposureDV_Baggage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_22 (def :  pcf.ClaimSnapshotExposureDV_BodilyInjuryDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_24 (def :  pcf.ClaimSnapshotExposureDV_Content) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_26 (def :  pcf.ClaimSnapshotExposureDV_Dwelling) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_28 (def :  pcf.ClaimSnapshotExposureDV_GeneralDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_30 (def :  pcf.ClaimSnapshotExposureDV_LivingExpenses) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_32 (def :  pcf.ClaimSnapshotExposureDV_LossOfUseDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_34 (def :  pcf.ClaimSnapshotExposureDV_OtherStructure) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_36 (def :  pcf.ClaimSnapshotExposureDV_PIPDamages) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_38 (def :  pcf.ClaimSnapshotExposureDV_PersonalPropertyDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_40 (def :  pcf.ClaimSnapshotExposureDV_PropertyDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_42 (def :  pcf.ClaimSnapshotExposureDV_TowOnly) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_44 (def :  pcf.ClaimSnapshotExposureDV_TripCancellationDelay) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function def_refreshVariables_46 (def :  pcf.ClaimSnapshotExposureDV_VehicleDamage) : void {
      def.refreshVariables(Claim, SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 77, column 74
    function def_refreshVariables_49 (def :  pcf.ClaimSnapshotExposureWageBenefitsDV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 85, column 45
    function def_refreshVariables_52 (def :  pcf.ClaimSnapshotExposureReplacementServicesDV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 92, column 81
    function def_refreshVariables_56 (def :  pcf.ClaimSnapshotExposuresVocationalBenefitsDV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'def' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 99, column 75
    function def_refreshVariables_59 (def :  pcf.ClaimSnapshotExposureDeathBenefitsDV) : void {
      def.refreshVariables(SelectedExposure)
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 70, column 56
    function mode_47 () : java.lang.Object {
      return SelectedExposure.ExposureType.Code
    }
    
    // 'mode' attribute on PanelRef at ClaimSnapshotExposuresScreen.default.pcf: line 85, column 45
    function mode_53 () : java.lang.Object {
      return ClaimSnapshotExposureDV
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 31, column 44
    function sortValue_0 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.ClaimOrder
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 36, column 44
    function sortValue_1 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.ExposureType
    }
    
    // 'value' attribute on TextCell (id=Coverage_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 41, column 44
    function sortValue_2 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextCell (id=Claimant_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 45, column 69
    function sortValue_3 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(Exposure.Claimant)
    }
    
    // 'value' attribute on TextCell (id=CreatedVia_Cell) at ClaimSnapshotExposuresScreen.default.pcf: line 50, column 44
    function sortValue_4 (Exposure :  dynamic.Dynamic) : java.lang.Object {
      return util.Snapshot.renderValue(Exposure.CreatedVia)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotExposuresScreen.default.pcf: line 24, column 39
    function value_18 () : dynamic.Dynamic {
      return SnapshotParam.Exposures
    }
    
    // 'visible' attribute on Card (id=WageBenefits) at ClaimSnapshotExposuresScreen.default.pcf: line 75, column 82
    function visible_50 () : java.lang.Boolean {
      return SelectedExposure.ExposureType.Code == "PIPDamages"
    }
    
    property get SelectedExposure () : dynamic.Dynamic {
      return getCurrentSelection(1) as dynamic.Dynamic
    }
    
    property set SelectedExposure ($arg :  dynamic.Dynamic) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}