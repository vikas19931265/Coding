package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_NewLossDetailsScreen_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_NewLossDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=AddVehicleButton) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 71, column 25
    function action_21 () : void {
      FNOLVehicleIncidentPopup.push(Claim, Wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPedestrianButton) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 78, column 25
    function action_23 () : void {
      FNOLContactPopup.push(Claim, null, TC_PEDESTRIAN, null, Wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 84, column 120
    function action_25 () : void {
      NewFixedPropertyIncidentPopup.push(Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=AddVehicleButton) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 71, column 25
    function action_dest_22 () : pcf.api.Destination {
      return pcf.FNOLVehicleIncidentPopup.createDestination(Claim, Wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPedestrianButton) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 78, column 25
    function action_dest_24 () : pcf.api.Destination {
      return pcf.FNOLContactPopup.createDestination(Claim, null, TC_PEDESTRIAN, null, Wizard)
    }
    
    // 'action' attribute on ToolbarButton (id=AddPropertyDamageButton) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 84, column 120
    function action_dest_26 () : pcf.api.Destination {
      return pcf.NewFixedPropertyIncidentPopup.createDestination(Claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 57, column 42
    function def_onEnter_19 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 287, column 31
    function def_onEnter_93 (def :  pcf.EditableWitnessesLV) : void {
      def.onEnter(Claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), Claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Officials) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 298, column 31
    function def_onEnter_95 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 309, column 31
    function def_onEnter_97 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 57, column 42
    function def_refreshVariables_20 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 287, column 31
    function def_refreshVariables_94 (def :  pcf.EditableWitnessesLV) : void {
      def.refreshVariables(Claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), Claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput (id=Claim_Officials) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 298, column 31
    function def_refreshVariables_96 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 309, column 31
    function def_refreshVariables_98 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 331, column 46
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Weather_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 337, column 46
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Weather = (__VALUE_TO_SET as typekey.WeatherType)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 345, column 45
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 353, column 52
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.PermissionRequired = (__VALUE_TO_SET as typekey.ClaimSecurityType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 47, column 42
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentOnly_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 52, column 41
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.IncidentReport = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 33, column 38
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.default.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return Claim.Officials.length > 0
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.default.pcf: line 21, column 23
    function initialValue_1 () : boolean {
      return Claim.MetroReports.length > 0
    }
    
    // 'sortBy' attribute on IteratorSort at FNOLWizard_NewLossDetailsScreen.default.pcf: line 96, column 32
    function sortBy_27 (VehicleIncident :  entity.VehicleIncident) : java.lang.Object {
      return VehicleIncident.LossParty
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 40, column 35
    function validationExpression_6 () : java.lang.Object {
      return Claim.LossDate != null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 345, column 45
    function valueRange_110 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 353, column 52
    function valueRange_117 () : java.lang.Object {
      return gw.api.claim.ClaimUtil.getAvailableTypes()
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 33, column 38
    function valueRoot_4 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_Weather_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 337, column 46
    function value_103 () : typekey.WeatherType {
      return Claim.Weather
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 345, column 45
    function value_107 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 47, column 42
    function value_11 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 353, column 52
    function value_114 () : typekey.ClaimSecurityType {
      return Claim.PermissionRequired
    }
    
    // 'value' attribute on CheckBoxInput (id=IncidentOnly_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 52, column 41
    function value_15 () : java.lang.Boolean {
      return Claim.IncidentReport
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 33, column 38
    function value_2 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on PanelIterator (id=VehicleIncidentIterator) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 93, column 52
    function value_63 () : entity.VehicleIncident[] {
      return Claim.VehicleIncidentsOnly
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 40, column 35
    function value_7 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on PanelIterator (id=PedestrianIterator) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 178, column 49
    function value_77 () : entity.ClaimContact[] {
      return Claim.getClaimContactsByRole( ContactRole.TC_PEDESTRIAN )
    }
    
    // 'value' attribute on PanelIterator (id=PropertyIncidentIterator) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 228, column 58
    function value_92 () : entity.FixedPropertyIncident[] {
      return Claim.FixedPropertyIncidentsOnly
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 331, column 46
    function value_99 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 345, column 45
    function verifyValueRangeIsAllowedType_111 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 345, column 45
    function verifyValueRangeIsAllowedType_111 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 345, column 45
    function verifyValueRangeIsAllowedType_111 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 353, column 52
    function verifyValueRangeIsAllowedType_118 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 353, column 52
    function verifyValueRangeIsAllowedType_118 ($$arg :  typekey.ClaimSecurityType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 345, column 45
    function verifyValueRange_112 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_111(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_PermissionRequired_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 353, column 52
    function verifyValueRange_119 () : void {
      var __valueRangeArg = gw.api.claim.ClaimUtil.getAvailableTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_118(__valueRangeArg)
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
    
    function removeVehicleIncident(vehicleIncidentParam : VehicleIncident) {
          for (report in Claim.MetroReports) {
            if (report.VehicleIncident == vehicleIncidentParam) {
              throw new gw.api.util.DisplayableException(DisplayKey.get("Web.NewLossDetailsScreen.CannotDeleteVehicleIncidentExceptionLabel"))
            }
          }
    
          removeInjIncidentFor(vehicleIncidentParam.driver)
          for (person in vehicleIncidentParam.passenger) {
            removeInjIncidentFor(person)
          }
    
          Claim.removeFromIncidents(vehicleIncidentParam)
          // Remove the Services Request attached to vehicleIncidentParam
          gw.api.claim.FnolServiceRequestHelper.removeIncidentServiceRequests(vehicleIncidentParam, Wizard)
        }
    
        function isNewlyCreatedVehicleIncident(vi : VehicleIncident) : boolean {
          return vi != null and vi.Vehicle.ShortDisplayName == DisplayKey.get("Java.DisplayName.NewlyCreated")
        }
    
        function removeInjIncidentFor(person : Person) {
          var injIncident = Wizard.getInjuryIncident(Claim.getClaimContact(person))
          if (injIncident != null) {
            injIncident.injured = null
            Claim.removeFromIncidents(injIncident)
          }
        }
    
        function hasExposures(pedestrian : entity.ClaimContact) : boolean {
          return Wizard.getInjuryIncident(pedestrian)?.Exposures.HasElements
        }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends FNOLWizard_NewLossDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditPedestrian) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 204, column 119
    function action_65 () : void {
      FNOLContactPopup.push(Claim, Pedestrian, TC_PEDESTRIAN, null, Wizard)
    }
    
    // 'action' attribute on MenuItem (id=RemovePedestrian) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 210, column 63
    function action_68 () : void {
      Claim.removeRole( ContactRole.TC_PEDESTRIAN, Pedestrian.Contact )
    }
    
    // 'action' attribute on TextInput (id=PersonName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 200, column 194
    function action_69 () : void {
      FNOLContactPopup.push(Claim, Pedestrian, TC_PEDESTRIAN, null, Wizard)
    }
    
    // 'action' attribute on MenuItem (id=EditPedestrian) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 204, column 119
    function action_dest_66 () : pcf.api.Destination {
      return pcf.FNOLContactPopup.createDestination(Claim, Pedestrian, TC_PEDESTRIAN, null, Wizard)
    }
    
    // 'action' attribute on TextInput (id=PersonName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 200, column 194
    function action_dest_70 () : pcf.api.Destination {
      return pcf.FNOLContactPopup.createDestination(Claim, Pedestrian, TC_PEDESTRIAN, null, Wizard)
    }
    
    // 'icon' attribute on Label (id=PedestrianIcon) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 190, column 42
    function icon_64 () : java.lang.String {
      return gw.api.claim.IncidentIconSet.PANEL_PEDESTRIAN_ICON
    }
    
    // 'value' attribute on TextInput (id=PersonName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 200, column 194
    function value_71 () : java.lang.String {
      return Pedestrian.DisplayName == "" ? DisplayKey.get("Web.NewLossDetailsScreen.PedestrianIterator.Pedestrian.Value") : Pedestrian.DisplayName.elide(25)
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 216, column 83
    function value_74 () : java.lang.String {
      return Wizard.getInjuryDescription(Pedestrian)
    }
    
    // 'visible' attribute on MenuItem (id=RemovePedestrian) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 210, column 63
    function visible_67 () : java.lang.Boolean {
      return not hasExposures(Pedestrian)
    }
    
    // 'visible' attribute on TextAreaInput (id=InjuryIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 216, column 83
    function visible_73 () : java.lang.Boolean {
      return Wizard.getInjuryDescription(Pedestrian).HasContent
    }
    
    property get Pedestrian () : entity.ClaimContact {
      return getIteratedValue(1) as entity.ClaimContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry3ExpressionsImpl extends FNOLWizard_NewLossDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditProperty) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 254, column 139
    function action_79 () : void {
      EditFixedPropertyIncidentPopup.push(PropertyIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveProperty) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 260, column 69
    function action_82 () : void {
      Claim.removeFromIncidents( PropertyIncident ); gw.api.claim.FnolServiceRequestHelper.removeIncidentServiceRequests(PropertyIncident, Wizard)
    }
    
    // 'action' attribute on TextInput (id=PropertyName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 250, column 210
    function action_83 () : void {
      EditFixedPropertyIncidentPopup.push(PropertyIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=EditProperty) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 254, column 139
    function action_dest_80 () : pcf.api.Destination {
      return pcf.EditFixedPropertyIncidentPopup.createDestination(PropertyIncident, true)
    }
    
    // 'action' attribute on TextInput (id=PropertyName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 250, column 210
    function action_dest_84 () : pcf.api.Destination {
      return pcf.EditFixedPropertyIncidentPopup.createDestination(PropertyIncident, true)
    }
    
    // 'icon' attribute on Label (id=PropertyIcon) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 240, column 40
    function icon_78 () : java.lang.String {
      return PropertyIncident.PanelIcon
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 266, column 72
    function valueRoot_89 () : java.lang.Object {
      return PropertyIncident
    }
    
    // 'value' attribute on TextInput (id=PropertyName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 250, column 210
    function value_85 () : java.lang.String {
      return PropertyIncident.DisplayName == "" ? DisplayKey.get("Web.NewLossDetailsScreen.PropertyIncidentIterator.Property.Value") : PropertyIncident.DisplayName.elide(20)
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 266, column 72
    function value_88 () : java.lang.String {
      return PropertyIncident.Description
    }
    
    // 'visible' attribute on MenuItem (id=RemoveProperty) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 260, column 69
    function visible_81 () : java.lang.Boolean {
      return PropertyIncident.Exposures.IsEmpty
    }
    
    // 'visible' attribute on TextAreaInput (id=PropertyIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 266, column 72
    function visible_87 () : java.lang.Boolean {
      return PropertyIncident.Description.HasContent
    }
    
    property get PropertyIncident () : entity.FixedPropertyIncident {
      return getIteratedValue(1) as entity.FixedPropertyIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NewLossDetailsScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends FNOLWizard_NewLossDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditVehicleMenu) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 130, column 135
    function action_31 () : void {
      FNOLVehicleIncidentPopup.push(VehicleIncident, Wizard)
    }
    
    // 'action' attribute on MenuItem (id=RemoveVehicleMenu) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 136, column 68
    function action_34 () : void {
      removeVehicleIncident(VehicleIncident)
    }
    
    // 'action' attribute on TextInput (id=VehicleName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 126, column 231
    function action_35 () : void {
      FNOLVehicleIncidentPopup.push(VehicleIncident, Wizard);
    }
    
    // 'action' attribute on MenuItem (id=EditVehicleMenu) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 130, column 135
    function action_dest_32 () : pcf.api.Destination {
      return pcf.FNOLVehicleIncidentPopup.createDestination(VehicleIncident, Wizard)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.default.pcf: line 164, column 55
    function def_onEnter_60 (def :  pcf.VehicleIncidentOccupantsLV) : void {
      def.onEnter(vehicleOccupants, VehicleIncident, Wizard)
    }
    
    // 'def' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.default.pcf: line 164, column 55
    function def_refreshVariables_61 (def :  pcf.VehicleIncidentOccupantsLV) : void {
      def.refreshVariables(vehicleOccupants, VehicleIncident, Wizard)
    }
    
    // 'filter' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 144, column 70
    function filter_41 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'icon' attribute on Label (id=VehicleIcon) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 116, column 39
    function icon_30 () : java.lang.String {
      return VehicleIncident.PanelIcon
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.default.pcf: line 100, column 62
    function initialValue_28 () : gw.api.claim.VehicleIncidentUIHelper {
      return new gw.api.claim.VehicleIncidentUIHelper(VehicleIncident)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_NewLossDetailsScreen.default.pcf: line 104, column 49
    function initialValue_29 () : ArrayList<Person> {
      return vehicleIncidentHelper.VehicleOccupants
    }
    
    // PanelIterator (id=VehicleIncidentIterator) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 93, column 52
    function initializeVariables_62 () : void {
        vehicleIncidentHelper = new gw.api.claim.VehicleIncidentUIHelper(VehicleIncident);
  vehicleOccupants = vehicleIncidentHelper.VehicleOccupants;

    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 144, column 70
    function valueRoot_40 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextAreaInput (id=VehicleIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 159, column 71
    function valueRoot_56 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=VehicleName_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 126, column 231
    function value_36 () : java.lang.String {
      return isNewlyCreatedVehicleIncident( VehicleIncident ) ? DisplayKey.get("Web.NewLossDetailsScreen.VehicleIncidentIterator.UnknownVehicle.Value") : VehicleIncident.Vehicle.ShortDisplayName.elide(25)
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 144, column 70
    function value_39 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=VehiclePlateNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 149, column 83
    function value_45 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TextInput (id=VehicleVIN_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 154, column 127
    function value_50 () : java.lang.String {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextAreaInput (id=VehicleIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 159, column 71
    function value_55 () : java.lang.String {
      return VehicleIncident.Description
    }
    
    // 'visible' attribute on MenuItem (id=RemoveVehicleMenu) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 136, column 68
    function visible_33 () : java.lang.Boolean {
      return VehicleIncident.Exposures.IsEmpty
    }
    
    // 'visible' attribute on TypeKeyInput (id=VehicleState_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 144, column 70
    function visible_38 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.State != null
    }
    
    // 'visible' attribute on TextInput (id=VehiclePlateNumber_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 149, column 83
    function visible_44 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.LicensePlate.length > 0
    }
    
    // 'visible' attribute on TextInput (id=VehicleVIN_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 154, column 127
    function visible_49 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.LicensePlate.length == 0 and VehicleIncident.Vehicle.Vin.length > 0
    }
    
    // 'visible' attribute on TextAreaInput (id=VehicleIncidentDescription_Input) at FNOLWizard_NewLossDetailsScreen.default.pcf: line 159, column 71
    function visible_54 () : java.lang.Boolean {
      return VehicleIncident.Description.HasContent
    }
    
    // 'visible' attribute on ListViewInput at FNOLWizard_NewLossDetailsScreen.default.pcf: line 164, column 55
    function visible_59 () : java.lang.Boolean {
      return !vehicleOccupants.Empty
    }
    
    property get VehicleIncident () : entity.VehicleIncident {
      return getIteratedValue(1) as entity.VehicleIncident
    }
    
    property get vehicleIncidentHelper () : gw.api.claim.VehicleIncidentUIHelper {
      return getVariableValue("vehicleIncidentHelper", 1) as gw.api.claim.VehicleIncidentUIHelper
    }
    
    property set vehicleIncidentHelper ($arg :  gw.api.claim.VehicleIncidentUIHelper) {
      setVariableValue("vehicleIncidentHelper", 1, $arg)
    }
    
    property get vehicleOccupants () : ArrayList<Person> {
      return getVariableValue("vehicleOccupants", 1) as ArrayList<Person>
    }
    
    property set vehicleOccupants ($arg :  ArrayList<Person>) {
      setVariableValue("vehicleOccupants", 1, $arg)
    }
    
    
  }
  
  
}