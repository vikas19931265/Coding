package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_NewLossDetailsScreen_TravExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_NewLossDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddTripButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 71, column 25
    function action_21 () : void {
      TripIncidentPopup.push(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddBaggageDamageButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 78, column 25
    function action_24 () : void {
      BaggageIncidentPopup.push(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInjuriesButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 85, column 25
    function action_27 () : void {
      NewInjuryIncidentPopup.push(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddVehicleButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 92, column 25
    function action_30 () : void {
      FNOLVehicleIncidentPopup.push(Claim, Wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 98, column 120
    function action_33 () : void {
      NewFixedPropertyIncidentPopup.push(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddTripButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 71, column 25
    function action_dest_22 () : pcf.api.Destination {
      return pcf.TripIncidentPopup.createDestination(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddBaggageDamageButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 78, column 25
    function action_dest_25 () : pcf.api.Destination {
      return pcf.BaggageIncidentPopup.createDestination(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddInjuriesButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 85, column 25
    function action_dest_28 () : pcf.api.Destination {
      return pcf.NewInjuryIncidentPopup.createDestination(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddVehicleButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 92, column 25
    function action_dest_31 () : pcf.api.Destination {
      return pcf.FNOLVehicleIncidentPopup.createDestination(Claim, Wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 98, column 120
    function action_dest_34 () : pcf.api.Destination {
      return pcf.NewFixedPropertyIncidentPopup.createDestination(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 438, column 31
    function def_onEnter_145 (def :  pcf.EditableWitnessesLV) : void {
      def.onEnter(Claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), Claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Officials) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 449, column 31
    function def_onEnter_147 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 57, column 42
    function def_onEnter_19 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 438, column 31
    function def_refreshVariables_146 (def :  pcf.EditableWitnessesLV) : void {
      def.refreshVariables(Claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), Claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Officials) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 449, column 31
    function def_refreshVariables_148 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 57, column 42
    function def_refreshVariables_20 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 47, column 42
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 469, column 46
    function defaultSetter_150 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Weather_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 475, column 46
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Weather = (__VALUE_TO_SET as typekey.WeatherType)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 483, column 45
    function defaultSetter_158 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentOnly_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 52, column 41
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 491, column 52
    function defaultSetter_165 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 33, column 38
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'icon' attribute on ToolbarButton (id=AddTripButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 71, column 25
    function icon_23 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.TRIP.ButtonIcon
    }
    
    // 'icon' attribute on ToolbarButton (id=AddBaggageDamageButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 78, column 25
    function icon_26 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.BAGGAGE.ButtonIcon
    }
    
    // 'icon' attribute on ToolbarButton (id=AddInjuriesButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 85, column 25
    function icon_29 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.INJURY.ButtonIcon
    }
    
    // 'icon' attribute on ToolbarButton (id=AddVehicleButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 92, column 25
    function icon_32 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.VEHICLE.ButtonIcon
    }
    
    // 'icon' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 98, column 120
    function icon_35 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.PROPERTY_LIABILITY.ButtonIcon
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return Claim.Officials.length > 0
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 21, column 23
    function initialValue_1 () : boolean {
      return Claim.MetroReports.length > 0
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 40, column 35
    function validationExpression_6 () : java.lang.Object {
      return Claim.LossDate != null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 483, column 45
    function valueRange_160 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 491, column 52
    function valueRange_167 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 33, column 38
    function valueRoot_4 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 47, column 42
    function value_11 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 469, column 46
    function value_149 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentOnly_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 52, column 41
    function value_15 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Weather_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 475, column 46
    function value_153 () : typekey.WeatherType {
      return Claim.Weather
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 483, column 45
    function value_157 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 491, column 52
    function value_164 () : typekey.ClaimSecurityType {
      return Claim.PermissionRequired
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 33, column 38
    function value_2 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 40, column 35
    function value_7 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 483, column 45
    function verifyValueRangeIsAllowedType_161 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 483, column 45
    function verifyValueRangeIsAllowedType_161 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 483, column 45
    function verifyValueRangeIsAllowedType_161 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 491, column 52
    function verifyValueRangeIsAllowedType_168 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 491, column 52
    function verifyValueRangeIsAllowedType_168 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 483, column 45
    function verifyValueRange_162 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_161(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 491, column 52
    function verifyValueRange_169 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_168(__valueRangeArg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Officials () : boolean {
      return getVariableValue("Officials", 0) as java.lang.Boolean
    }
    
    property set Officials ($arg :  boolean) {
      setVariableValue("Officials", 0, $arg)
    }
    
    property get PoliceReport () : boolean {
      return getVariableValue("PoliceReport", 0) as java.lang.Boolean
    }
    
    property set PoliceReport ($arg :  boolean) {
      setVariableValue("PoliceReport", 0, $arg)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    
    function removeTripIncident(tripIncidentParam : TripIncident) {
      tripIncidentParam.Claim.removeFromIncidents(tripIncidentParam)
    }
    
    function removeBaggageIncident(baggageIncidentParam : BaggageIncident) {
      baggageIncidentParam.Claim.removeFromIncidents(baggageIncidentParam)
    }
    
    function removeInjuryIncident(injuryIncidentParam : InjuryIncident) {
      injuryIncidentParam.Claim.removeFromIncidents(injuryIncidentParam)
    }
    
    function removeVehicleIncident(vehicleIncidentParam : VehicleIncident) {
      vehicleIncidentParam.Claim.removeFromIncidents(vehicleIncidentParam)
    
    }
    
    function isNewlyCreatedVehicleIncident(vi : VehicleIncident) : boolean {
      return vi != null and vi.Vehicle.ShortDisplayName == DisplayKey.get("Java.DisplayName.NewlyCreated")
    }
    
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditBaggage) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 216, column 135
    function action_59 () : void {
      BaggageIncidentPopup.push( BaggageIncident, true )
    }
    
    // 'action' attribute on MenuItem (id=RemoveBaggage) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 222, column 68
    function action_62 () : void {
      removeBaggageIncident( BaggageIncident )
    }
    
    // 'action' attribute on TypeKeyInput (id=Baggage_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 212, column 53
    function action_63 () : void {
      BaggageIncidentPopup.push( BaggageIncident, true )
    }
    
    // 'action' attribute on MenuItem (id=EditBaggage) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 216, column 135
    function action_dest_60 () : pcf.api.Destination {
      return pcf.BaggageIncidentPopup.createDestination( BaggageIncident, true )
    }
    
    // 'action' attribute on TypeKeyInput (id=Baggage_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 212, column 53
    function action_dest_64 () : pcf.api.Destination {
      return pcf.BaggageIncidentPopup.createDestination( BaggageIncident, true )
    }
    
    // 'icon' attribute on Label (id=BaggageIcon) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 201, column 39
    function icon_58 () : java.lang.String {
      return BaggageIncident.PanelIcon
    }
    
    // 'value' attribute on TypeKeyInput (id=Baggage_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 212, column 53
    function valueRoot_66 () : java.lang.Object {
      return BaggageIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=Baggage_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 212, column 53
    function value_65 () : typekey.BaggageType {
      return BaggageIncident.BaggageType
    }
    
    // 'value' attribute on TextAreaInput (id=BaggageIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 228, column 71
    function value_69 () : java.lang.String {
      return BaggageIncident.Description
    }
    
    // 'visible' attribute on MenuItem (id=RemoveBaggage) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 222, column 68
    function visible_61 () : java.lang.Boolean {
      return BaggageIncident.Exposures.IsEmpty
    }
    
    // 'visible' attribute on TextAreaInput (id=BaggageIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 228, column 71
    function visible_68 () : java.lang.Boolean {
      return BaggageIncident.Description.HasContent
    }
    
    property get BaggageIncident () : entity.BaggageIncident {
      return getIteratedValue(2) as entity.BaggageIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry3ExpressionsImpl extends PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditInjury) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 268, column 133
    function action_76 () : void {
      EditInjuryIncidentPopup.push(InjuryIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveInjury) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 274, column 67
    function action_79 () : void {
      removeInjuryIncident( InjuryIncident )
    }
    
    // 'action' attribute on TextInput (id=InjuryName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 264, column 40
    function action_80 () : void {
      EditInjuryIncidentPopup.push(InjuryIncident, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on MenuItem (id=EditInjury) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 268, column 133
    function action_dest_77 () : pcf.api.Destination {
      return pcf.EditInjuryIncidentPopup.createDestination(InjuryIncident, true)
    }
    
    // 'action' attribute on TextInput (id=InjuryName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 264, column 40
    function action_dest_81 () : pcf.api.Destination {
      return pcf.EditInjuryIncidentPopup.createDestination(InjuryIncident, CurrentLocation.InEditMode)
    }
    
    // 'icon' attribute on Label (id=InjuryIcon) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 253, column 38
    function icon_75 () : java.lang.String {
      return InjuryIncident.PanelIcon
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 280, column 70
    function valueRoot_86 () : java.lang.Object {
      return InjuryIncident
    }
    
    // 'value' attribute on TextInput (id=InjuryName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 264, column 40
    function value_82 () : String {
      return InjuryIncident.injured.DisplayName.elide(25)
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 280, column 70
    function value_85 () : java.lang.String {
      return InjuryIncident.Description
    }
    
    // 'visible' attribute on MenuItem (id=RemoveInjury) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 274, column 67
    function visible_78 () : java.lang.Boolean {
      return InjuryIncident.Exposures.IsEmpty
    }
    
    // 'visible' attribute on TextAreaInput (id=InjuryIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 280, column 70
    function visible_84 () : java.lang.Boolean {
      return InjuryIncident.Description.HasContent
    }
    
    property get InjuryIncident () : entity.InjuryIncident {
      return getIteratedValue(2) as entity.InjuryIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry4ExpressionsImpl extends PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditVehicleMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 330, column 135
    function action_95 () : void {
      FNOLVehicleIncidentPopup.push(VehicleIncident, Wizard)
    }
    
    // 'action' attribute on MenuItem (id=RemoveVehicleMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 336, column 68
    function action_98 () : void {
      removeVehicleIncident(VehicleIncident)
    }
    
    // 'action' attribute on TextInput (id=VehicleName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 326, column 231
    function action_99 () : void {
      FNOLVehicleIncidentPopup.push(VehicleIncident, Wizard);
    }
    
    // 'action' attribute on MenuItem (id=EditVehicleMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 330, column 135
    function action_dest_96 () : pcf.api.Destination {
      return pcf.FNOLVehicleIncidentPopup.createDestination(VehicleIncident, Wizard)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 364, column 55
    function def_onEnter_124 (def :  pcf.VehicleIncidentOccupantsLV) : void {
      def.onEnter(vehicleOccupants, VehicleIncident, Wizard)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 364, column 55
    function def_refreshVariables_125 (def :  pcf.VehicleIncidentOccupantsLV) : void {
      def.refreshVariables(vehicleOccupants, VehicleIncident, Wizard)
    }
    
    // 'filter' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 344, column 70
    function filter_105 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'icon' attribute on Label (id=VehicleIcon) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 316, column 39
    function icon_94 () : java.lang.String {
      return VehicleIncident.PanelIcon
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 300, column 62
    function initialValue_92 () : gw.api.claim.VehicleIncidentUIHelper {
      return new gw.api.claim.VehicleIncidentUIHelper(VehicleIncident)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 304, column 49
    function initialValue_93 () : ArrayList<Person> {
      return vehicleIncidentHelper.VehicleOccupants
    }
    
    // PanelIterator (id=VehicleIncidentIterator) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 293, column 52
    function initializeVariables_126 () : void {
        vehicleIncidentHelper = new gw.api.claim.VehicleIncidentUIHelper(VehicleIncident);
  vehicleOccupants = vehicleIncidentHelper.VehicleOccupants;

    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 344, column 70
    function valueRoot_104 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextAreaInput (id=VehicleIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 359, column 71
    function valueRoot_120 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=VehicleName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 326, column 231
    function value_100 () : java.lang.String {
      return isNewlyCreatedVehicleIncident( VehicleIncident ) ? DisplayKey.get("Web.NewLossDetailsScreen.VehicleIncidentIterator.UnknownVehicle.Value") : VehicleIncident.Vehicle.ShortDisplayName.elide(25)
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 344, column 70
    function value_103 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=VehiclePlateNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 349, column 83
    function value_109 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextInput (id=VehicleVIN_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 354, column 127
    function value_114 () : java.lang.String {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextAreaInput (id=VehicleIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 359, column 71
    function value_119 () : java.lang.String {
      return VehicleIncident.Description
    }
    
    // 'visible' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 344, column 70
    function visible_102 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.State != null
    }
    
    // 'visible' attribute on TextInput (id=VehiclePlateNumber_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 349, column 83
    function visible_108 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.LicensePlate.length > 0
    }
    
    // 'visible' attribute on TextInput (id=VehicleVIN_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 354, column 127
    function visible_113 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.LicensePlate.length == 0 and VehicleIncident.Vehicle.Vin.length > 0
    }
    
    // 'visible' attribute on TextAreaInput (id=VehicleIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 359, column 71
    function visible_118 () : java.lang.Boolean {
      return VehicleIncident.Description.HasContent
    }
    
    // 'visible' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 364, column 55
    function visible_123 () : java.lang.Boolean {
      return !vehicleOccupants.Empty
    }
    
    // 'visible' attribute on MenuItem (id=RemoveVehicleMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 336, column 68
    function visible_97 () : java.lang.Boolean {
      return VehicleIncident.Exposures.IsEmpty
    }
    
    property get VehicleIncident () : entity.VehicleIncident {
      return getIteratedValue(2) as entity.VehicleIncident
    }
    
    property get vehicleIncidentHelper () : gw.api.claim.VehicleIncidentUIHelper {
      return getVariableValue("vehicleIncidentHelper", 2) as gw.api.claim.VehicleIncidentUIHelper
    }
    
    property set vehicleIncidentHelper ($arg :  gw.api.claim.VehicleIncidentUIHelper) {
      setVariableValue("vehicleIncidentHelper", 2, $arg)
    }
    
    property get vehicleOccupants () : ArrayList<Person> {
      return getVariableValue("vehicleOccupants", 2) as ArrayList<Person>
    }
    
    property set vehicleOccupants ($arg :  ArrayList<Person>) {
      setVariableValue("vehicleOccupants", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry5ExpressionsImpl extends PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditProperty) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 405, column 139
    function action_130 () : void {
      EditFixedPropertyIncidentPopup.push(PropertyIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveProperty) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 411, column 69
    function action_133 () : void {
      Claim.removeFromIncidents(PropertyIncident)
    }
    
    // 'action' attribute on TextInput (id=PropertyName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 401, column 210
    function action_134 () : void {
      EditFixedPropertyIncidentPopup.push(PropertyIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=EditProperty) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 405, column 139
    function action_dest_131 () : pcf.api.Destination {
      return pcf.EditFixedPropertyIncidentPopup.createDestination(PropertyIncident, true)
    }
    
    // 'action' attribute on TextInput (id=PropertyName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 401, column 210
    function action_dest_135 () : pcf.api.Destination {
      return pcf.EditFixedPropertyIncidentPopup.createDestination(PropertyIncident, true)
    }
    
    // 'icon' attribute on Label (id=PropertyIcon) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 391, column 40
    function icon_129 () : java.lang.String {
      return PropertyIncident.PanelIcon
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 417, column 72
    function valueRoot_140 () : java.lang.Object {
      return PropertyIncident
    }
    
    // 'value' attribute on TextInput (id=PropertyName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 401, column 210
    function value_136 () : java.lang.String {
      return PropertyIncident.DisplayName == "" ? DisplayKey.get("Web.NewLossDetailsScreen.PropertyIncidentIterator.Property.Value") : PropertyIncident.DisplayName.elide(25)
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 417, column 72
    function value_139 () : java.lang.String {
      return PropertyIncident.Description
    }
    
    // 'visible' attribute on MenuItem (id=RemoveProperty) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 411, column 69
    function visible_132 () : java.lang.Boolean {
      return PropertyIncident.Exposures.IsEmpty
    }
    
    // 'visible' attribute on TextAreaInput (id=PropertyIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 417, column 72
    function visible_138 () : java.lang.Boolean {
      return PropertyIncident.Description.HasContent
    }
    
    property get PropertyIncident () : entity.FixedPropertyIncident {
      return getIteratedValue(2) as entity.FixedPropertyIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends PanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditTripMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 163, column 129
    function action_43 () : void {
      TripIncidentPopup.push( TripIncident, true )
    }
    
    // 'action' attribute on MenuItem (id=RemoveTripMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 169, column 65
    function action_46 () : void {
      removeTripIncident( TripIncident)
    }
    
    // 'action' attribute on TextInput (id=TripName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 159, column 40
    function action_47 () : void {
      TripIncidentPopup.push(TripIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=EditTripMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 163, column 129
    function action_dest_44 () : pcf.api.Destination {
      return pcf.TripIncidentPopup.createDestination( TripIncident, true )
    }
    
    // 'action' attribute on TextInput (id=TripName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 159, column 40
    function action_dest_48 () : pcf.api.Destination {
      return pcf.TripIncidentPopup.createDestination(TripIncident, true)
    }
    
    // 'icon' attribute on Label (id=tripIcon) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 148, column 36
    function icon_42 () : java.lang.String {
      return TripIncident.PanelIcon
    }
    
    // 'value' attribute on TextAreaInput (id=TripIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 176, column 68
    function valueRoot_53 () : java.lang.Object {
      return TripIncident
    }
    
    // 'value' attribute on TextInput (id=TripName_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 159, column 40
    function value_49 () : String {
      return TripIncident.TripRU.DisplayName.elide(25)
    }
    
    // 'value' attribute on TextAreaInput (id=TripIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 176, column 68
    function value_52 () : String {
      return TripIncident.Description
    }
    
    // 'visible' attribute on MenuItem (id=RemoveTripMenu) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 169, column 65
    function visible_45 () : java.lang.Boolean {
      return TripIncident.Exposures.IsEmpty
    }
    
    // 'visible' attribute on TextAreaInput (id=TripIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 176, column 68
    function visible_51 () : java.lang.Boolean {
      return TripIncident.Description.HasContent
    }
    
    property get TripIncident () : entity.TripIncident {
      return getIteratedValue(2) as entity.TripIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelSetExpressionsImpl extends FNOLWizard_NewLossDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 105, column 41
    function initialValue_36 () : entity.TripIncident[] {
      return Claim.TripIncidentsOnly
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 110, column 44
    function initialValue_37 () : entity.BaggageIncident[] {
      return Claim.BaggageIncidentsOnly
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 115, column 43
    function initialValue_38 () : entity.InjuryIncident[] {
      return Claim.InjuryIncidentsOnly
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 120, column 44
    function initialValue_39 () : entity.VehicleIncident[] {
      return Claim.VehicleIncidentsOnly
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 125, column 50
    function initialValue_40 () : entity.FixedPropertyIncident[] {
      return Claim.FixedPropertyIncidentsOnly
    }
    
    // 'sortBy' attribute on IteratorSort at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 136, column 32
    function sortBy_41 (TripIncident :  entity.TripIncident) : java.lang.Object {
      return TripIncident.TripRU
    }
    
    // 'sortBy' attribute on IteratorSort at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 296, column 32
    function sortBy_91 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.LossParty
    }
    
    // 'value' attribute on PanelIterator (id=VehicleIncidentIterator) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 293, column 52
    function value_127 () : entity.VehicleIncident[] {
      return vehicleIncidents
    }
    
    // 'value' attribute on PanelIterator (id=PropertyIncidentIterator) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 379, column 58
    function value_143 () : entity.FixedPropertyIncident[] {
      return fixedPropertyIncidents
    }
    
    // 'value' attribute on PanelIterator (id=TripIncidentIterator) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 133, column 49
    function value_56 () : entity.TripIncident[] {
      return tripIncidents
    }
    
    // 'value' attribute on PanelIterator (id=BaggageIncidentIterator) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 189, column 52
    function value_73 () : entity.BaggageIncident[] {
      return baggageIncidents
    }
    
    // 'value' attribute on PanelIterator (id=InjuryIncidentIterator) at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 241, column 51
    function value_89 () : entity.InjuryIncident[] {
      return injuryIncidents
    }
    
    // 'visible' attribute on PanelColumn at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 288, column 52
    function visible_128 () : java.lang.Boolean {
      return vehicleIncidents.HasElements
    }
    
    // 'visible' attribute on PanelColumn at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 374, column 58
    function visible_144 () : java.lang.Boolean {
      return fixedPropertyIncidents.HasElements
    }
    
    // 'visible' attribute on PanelColumn at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 128, column 49
    function visible_57 () : java.lang.Boolean {
      return tripIncidents.HasElements
    }
    
    // 'visible' attribute on PanelColumn at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 184, column 52
    function visible_74 () : java.lang.Boolean {
      return baggageIncidents.HasElements
    }
    
    // 'visible' attribute on PanelColumn at FNOLWizard_NewLossDetailsScreen.Trav.pcf: line 236, column 51
    function visible_90 () : java.lang.Boolean {
      return injuryIncidents.HasElements
    }
    
    property get baggageIncidents () : entity.BaggageIncident[] {
      return getVariableValue("baggageIncidents", 1) as entity.BaggageIncident[]
    }
    
    property set baggageIncidents ($arg :  entity.BaggageIncident[]) {
      setVariableValue("baggageIncidents", 1, $arg)
    }
    
    property get fixedPropertyIncidents () : entity.FixedPropertyIncident[] {
      return getVariableValue("fixedPropertyIncidents", 1) as entity.FixedPropertyIncident[]
    }
    
    property set fixedPropertyIncidents ($arg :  entity.FixedPropertyIncident[]) {
      setVariableValue("fixedPropertyIncidents", 1, $arg)
    }
    
    property get injuryIncidents () : entity.InjuryIncident[] {
      return getVariableValue("injuryIncidents", 1) as entity.InjuryIncident[]
    }
    
    property set injuryIncidents ($arg :  entity.InjuryIncident[]) {
      setVariableValue("injuryIncidents", 1, $arg)
    }
    
    property get tripIncidents () : entity.TripIncident[] {
      return getVariableValue("tripIncidents", 1) as entity.TripIncident[]
    }
    
    property set tripIncidents ($arg :  entity.TripIncident[]) {
      setVariableValue("tripIncidents", 1, $arg)
    }
    
    property get vehicleIncidents () : entity.VehicleIncident[] {
      return getVariableValue("vehicleIncidents", 1) as entity.VehicleIncident[]
    }
    
    property set vehicleIncidents ($arg :  entity.VehicleIncident[]) {
      setVariableValue("vehicleIncidents", 1, $arg)
    }
    
    
  }
  
  
}