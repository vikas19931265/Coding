package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.claim.FnolServiceRequestHelper
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLVehicleIncidentPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLVehicleIncidentPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim, Wizard :  gw.api.claim.NewClaimWizardInfo) : int {
      return 1
    }
    
    static function __constructorIndex (VehicleIncident :  VehicleIncident, Wizard :  gw.api.claim.NewClaimWizardInfo) : int {
      return 0
    }
    
    // 'action' attribute on MenuItem (id=NewVehicleMenuItem) at FNOLVehicleIncidentPopup.pcf: line 80, column 110
    function action_10 () : void {
      VehicleIncident.Vehicle = new Vehicle(); NewVehicle = true;
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_120 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_122 () : void {
      if (VehicleIncident.incidentowner != null) { ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_124 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CalculateButton) at FNOLVehicleIncidentPopup.pcf: line 241, column 51
    function action_152 () : void {
      TotalLossCalculatorPopup.push(VehicleIncident)
    }
    
    // 'action' attribute on ToolbarButton (id=AddDriverButton) at FNOLVehicleIncidentPopup.pcf: line 357, column 63
    function action_222 () : void {
      FNOLContactPopup.push(Claim, null, ContactRole.TC_DRIVER, VehicleIncident, Wizard);
    }
    
    // 'action' attribute on ToolbarButton (id=AddPassengerButton) at FNOLVehicleIncidentPopup.pcf: line 364, column 35
    function action_223 () : void {
      FNOLContactPopup.push(Claim, null, ContactRole.TC_PASSENGER, VehicleIncident, Wizard);
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_260 () : void {
      AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_262 () : void {
      if (VehicleIncident.InsuredRep != null) { ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_264 () : void {
      ClaimContactDetailPopup.push(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDetailMenuItem) at FNOLVehicleIncidentPopup.pcf: line 76, column 113
    function action_8 () : void {
      NewClaimWizard_PolicyVehicleDetailPopup.push(Claim.Policy.getVehicleRU( VehicleIncident.Vehicle?.ID ), Claim.Policy)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_121 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_125 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on MenuItem (id=CalculateButton) at FNOLVehicleIncidentPopup.pcf: line 241, column 51
    function action_dest_153 () : pcf.api.Destination {
      return pcf.TotalLossCalculatorPopup.createDestination(VehicleIncident)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_261 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_265 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(VehicleIncident.InsuredRep, Claim)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDetailMenuItem) at FNOLVehicleIncidentPopup.pcf: line 76, column 113
    function action_dest_9 () : pcf.api.Destination {
      return pcf.NewClaimWizard_PolicyVehicleDetailPopup.createDestination(Claim.Policy.getVehicleRU( VehicleIncident.Vehicle?.ID ), Claim.Policy)
    }
    
    // 'afterEnter' attribute on Popup (id=FNOLVehicleIncidentPopup) at FNOLVehicleIncidentPopup.pcf: line 14, column 76
    function afterEnter_281 () : void {
      initializeVariable()
    }
    
    // 'available' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 107, column 39
    function available_27 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return Claim.canEditVehicle(VALUE)
    }
    
    // 'available' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 103, column 54
    function available_30 () : java.lang.Boolean {
      return Claim.canEditVehicle(VehicleIncident.Vehicle)
    }
    
    // 'beforeCancel' attribute on Popup (id=FNOLVehicleIncidentPopup) at FNOLVehicleIncidentPopup.pcf: line 14, column 76
    function beforeCancel_282 () : void {
      Wizard.VehicleIncidentOtherServiceRequests.removeWhere( \ sr -> not vehicleIncidentOtherServiceRequestsCopy.contains(sr))
    }
    
    // 'beforeCommit' attribute on Popup (id=FNOLVehicleIncidentPopup) at FNOLVehicleIncidentPopup.pcf: line 14, column 76
    function beforeCommit_283 (pickedValue :  VehicleIncident) : void {
      cleanBeforeCommit()
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_117 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLVehicleIncidentPopup.pcf: line 332, column 57
    function def_onEnter_219 (def :  pcf.DriverCitationsLV) : void {
      def.onEnter(VehicleIncident)
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_257 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on PanelRef at FNOLVehicleIncidentPopup.pcf: line 477, column 135
    function def_onEnter_279 (def :  pcf.VehicleIncidentPanelSet) : void {
      def.onEnter(VehicleIncident, Wizard.UnusedServiceRequests, Wizard.VehicleIncidentOtherServiceRequests)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_118 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at FNOLVehicleIncidentPopup.pcf: line 332, column 57
    function def_refreshVariables_220 (def :  pcf.DriverCitationsLV) : void {
      def.refreshVariables(VehicleIncident)
    }
    
    // 'def' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_258 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (VehicleIncident.InsuredRep), null, Claim)
    }
    
    // 'def' attribute on PanelRef at FNOLVehicleIncidentPopup.pcf: line 477, column 135
    function def_refreshVariables_280 (def :  pcf.VehicleIncidentPanelSet) : void {
      def.refreshVariables(VehicleIncident, Wizard.UnusedServiceRequests, Wizard.VehicleIncidentOtherServiceRequests)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at FNOLVehicleIncidentPopup.pcf: line 194, column 235
    function defaultSetter_111 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.incidentowner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle = (__VALUE_TO_SET as entity.Vehicle)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at FNOLVehicleIncidentPopup.pcf: line 213, column 39
    function defaultSetter_140 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehStolenInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at FNOLVehicleIncidentPopup.pcf: line 220, column 55
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleParked = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLVehicleIncidentPopup.pcf: line 236, column 54
    function defaultSetter_149 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at FNOLVehicleIncidentPopup.pcf: line 241, column 51
    function defaultSetter_155 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.TotalLoss = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at FNOLVehicleIncidentPopup.pcf: line 256, column 58
    function defaultSetter_162 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleOperable = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at FNOLVehicleIncidentPopup.pcf: line 262, column 57
    function defaultSetter_168 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AirbagsDeployed = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at FNOLVehicleIncidentPopup.pcf: line 271, column 58
    function defaultSetter_174 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.EquipmentFailure = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at FNOLVehicleIncidentPopup.pcf: line 286, column 93
    function defaultSetter_180 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Speed = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at FNOLVehicleIncidentPopup.pcf: line 293, column 93
    function defaultSetter_186 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleDirection = (__VALUE_TO_SET as typekey.VehicleDirection)
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at FNOLVehicleIncidentPopup.pcf: line 300, column 58
    function defaultSetter_192 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.CollisionPoint = (__VALUE_TO_SET as typekey.CollisionPoint)
    }
    
    // 'value' attribute on BooleanRadioInput (id=LoanInformation_Loan_Input) at FNOLVehicleIncidentPopup.pcf: line 305, column 54
    function defaultSetter_197 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Loan = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=MonthlyPayment_Input) at FNOLVehicleIncidentPopup.pcf: line 313, column 68
    function defaultSetter_202 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LoanMonthlyPayment = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=MonthsRemaining_Input) at FNOLVehicleIncidentPopup.pcf: line 320, column 67
    function defaultSetter_208 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LoanMonthsRemaining = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CurrencyInput (id=PayoffAmount_Input) at FNOLVehicleIncidentPopup.pcf: line 326, column 67
    function defaultSetter_214 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LoanPayoffAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at FNOLVehicleIncidentPopup.pcf: line 88, column 99
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleType = (__VALUE_TO_SET as typekey.VehicleType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at FNOLVehicleIncidentPopup.pcf: line 418, column 52
    function defaultSetter_241 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehLockInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at FNOLVehicleIncidentPopup.pcf: line 425, column 53
    function defaultSetter_245 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AntiThftInd = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at FNOLVehicleIncidentPopup.pcf: line 433, column 47
    function defaultSetter_249 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.OdomRead = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at FNOLVehicleIncidentPopup.pcf: line 442, column 43
    function defaultSetter_253 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AffdvCmplInd = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_268 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.InsuredRep = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 103, column 54
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Year = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at FNOLVehicleIncidentPopup.pcf: line 116, column 54
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Make = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at FNOLVehicleIncidentPopup.pcf: line 129, column 54
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Model = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=LossParty_Input) at FNOLVehicleIncidentPopup.pcf: line 59, column 37
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      InsurerLoss = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at FNOLVehicleIncidentPopup.pcf: line 143, column 54
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Style = (__VALUE_TO_SET as typekey.VehicleStyle)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at FNOLVehicleIncidentPopup.pcf: line 156, column 54
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.Color = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at FNOLVehicleIncidentPopup.pcf: line 168, column 54
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.LicensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 182, column 56
    function defaultSetter_99 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Vehicle.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 182, column 56
    function filter_101 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'icon' attribute on TitleBar at FNOLVehicleIncidentPopup.pcf: line 42, column 33
    function icon_1 () : java.lang.String {
      return VehicleIncident.HeaderIcon
    }
    
    // 'initialValue' attribute on Variable at FNOLVehicleIncidentPopup.pcf: line 37, column 51
    function initialValue_0 () : java.util.Set<ServiceRequest> {
      return Wizard.VehicleIncidentOtherServiceRequests.copy()
    }
    
    // EditButtons at FNOLVehicleIncidentPopup.pcf: line 45, column 40
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'onChange' attribute on PostOnChange at FNOLVehicleIncidentPopup.pcf: line 264, column 78
    function onChange_165 () : void {
      VehicleIncident.TotalLossCalculatorPreUpdate()
    }
    
    // 'onChange' attribute on PostOnChange at FNOLVehicleIncidentPopup.pcf: line 61, column 131
    function onChange_4 () : void {
      VehicleIncident.LossParty = (InsurerLoss ? LossPartyType.TC_INSURED : LossPartyType.TC_THIRD_PARTY)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_126 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.incidentowner); var result = eval("VehicleIncident.incidentowner = Claim.resolveContact(VehicleIncident.incidentowner) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_266 (PickedValue :  Contact) : void {
      var contactType = statictypeof (VehicleIncident.InsuredRep); var result = eval("VehicleIncident.InsuredRep = Claim.resolveContact(VehicleIncident.InsuredRep) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'pickValue' attribute on EditButtons at FNOLVehicleIncidentPopup.pcf: line 45, column 40
    function pickValue_2 () : VehicleIncident {
      return VehicleIncident
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 198, column 38
    function reflectionValue_106 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Vin
    }
    
    // Reflect at FNOLVehicleIncidentPopup.pcf: line 90, column 47
    function reflectionValue_20 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return (VehicleIncident.Claim.Policy.isPolicyVehicle(VALUE)) ? ("listed") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 107, column 39
    function reflectionValue_28 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Year
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 120, column 39
    function reflectionValue_39 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Make
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 133, column 40
    function reflectionValue_50 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Model
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 147, column 40
    function reflectionValue_61 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Style
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 160, column 40
    function reflectionValue_72 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.Color
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 172, column 47
    function reflectionValue_83 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.LicensePlate
    }
    
    // 'value' attribute on Reflect at FNOLVehicleIncidentPopup.pcf: line 186, column 40
    function reflectionValue_94 (TRIGGER_INDEX :  int, VALUE :  entity.Vehicle) : java.lang.Object {
      return VALUE.State
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 398, column 249
    function sortValue_224 (ContactPerson :  entity.Contact) : java.lang.Object {
      return DisplayKey.get("Web.FNOLVehicleIncidentPopup.NamePosition", ContactPerson.DisplayName, (VehicleIncident.driver == ContactPerson ? ContactRole.TC_DRIVER.DisplayName : ContactRole.TC_PASSENGER.DisplayName))
    }
    
    // 'value' attribute on TextCell (id=Injuries_Cell) at FNOLVehicleIncidentPopup.pcf: line 402, column 102
    function sortValue_225 (ContactPerson :  entity.Contact) : java.lang.Object {
      return Wizard.getInjuryDescription( Claim.getClaimContact(ContactPerson) )
    }
    
    // 'toRemove' attribute on RowIterator at FNOLVehicleIncidentPopup.pcf: line 377, column 50
    function toRemove_237 (ContactPerson :  entity.Contact) : void {
      removeContact(ContactPerson)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_130 () : java.lang.Object {
      return Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function valueRange_15 () : java.lang.Object {
      return VehicleIncident.AvailableVehicles
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function valueRoot_14 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 103, column 54
    function valueRoot_34 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=Vehicle_VIN_Input) at FNOLVehicleIncidentPopup.pcf: line 194, column 235
    function value_110 () : java.lang.String {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function value_12 () : entity.Vehicle {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_127 () : entity.Contact {
      return VehicleIncident.incidentowner
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_Indicator_Input) at FNOLVehicleIncidentPopup.pcf: line 213, column 39
    function value_139 () : java.lang.Boolean {
      return VehicleIncident.VehStolenInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleParked_Input) at FNOLVehicleIncidentPopup.pcf: line 220, column 55
    function value_144 () : java.lang.Boolean {
      return VehicleIncident.VehicleParked
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLVehicleIncidentPopup.pcf: line 236, column 54
    function value_148 () : java.lang.String {
      return VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=TotalLoss_Input) at FNOLVehicleIncidentPopup.pcf: line 241, column 51
    function value_154 () : java.lang.Boolean {
      return VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on TextInput (id=TotalLossPoints_Input) at FNOLVehicleIncidentPopup.pcf: line 251, column 48
    function value_158 () : java.lang.Integer {
      return VehicleIncident.TotalLossPoints
    }
    
    // 'value' attribute on BooleanRadioInput (id=Operable_Input) at FNOLVehicleIncidentPopup.pcf: line 256, column 58
    function value_161 () : java.lang.Boolean {
      return VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at FNOLVehicleIncidentPopup.pcf: line 262, column 57
    function value_167 () : java.lang.Boolean {
      return VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_EquipmentFailure_Input) at FNOLVehicleIncidentPopup.pcf: line 271, column 58
    function value_173 () : java.lang.Boolean {
      return VehicleIncident.EquipmentFailure
    }
    
    // 'value' attribute on TextInput (id=Speed_Input) at FNOLVehicleIncidentPopup.pcf: line 286, column 93
    function value_179 () : java.lang.Integer {
      return VehicleIncident.Speed
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleDirection_Input) at FNOLVehicleIncidentPopup.pcf: line 293, column 93
    function value_185 () : typekey.VehicleDirection {
      return VehicleIncident.VehicleDirection
    }
    
    // 'value' attribute on TypeKeyInput (id=CollisionPoint_Input) at FNOLVehicleIncidentPopup.pcf: line 300, column 58
    function value_191 () : typekey.CollisionPoint {
      return VehicleIncident.CollisionPoint
    }
    
    // 'value' attribute on BooleanRadioInput (id=LoanInformation_Loan_Input) at FNOLVehicleIncidentPopup.pcf: line 305, column 54
    function value_196 () : java.lang.Boolean {
      return VehicleIncident.Vehicle.Loan
    }
    
    // 'value' attribute on CurrencyInput (id=MonthlyPayment_Input) at FNOLVehicleIncidentPopup.pcf: line 313, column 68
    function value_201 () : gw.api.financials.CurrencyAmount {
      return VehicleIncident.Vehicle.LoanMonthlyPayment
    }
    
    // 'value' attribute on TextInput (id=MonthsRemaining_Input) at FNOLVehicleIncidentPopup.pcf: line 320, column 67
    function value_207 () : java.lang.Integer {
      return VehicleIncident.Vehicle.LoanMonthsRemaining
    }
    
    // 'value' attribute on CurrencyInput (id=PayoffAmount_Input) at FNOLVehicleIncidentPopup.pcf: line 326, column 67
    function value_213 () : gw.api.financials.CurrencyAmount {
      return VehicleIncident.Vehicle.LoanPayoffAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at FNOLVehicleIncidentPopup.pcf: line 88, column 99
    function value_22 () : typekey.VehicleType {
      return VehicleIncident.VehicleType
    }
    
    // 'value' attribute on RowIterator at FNOLVehicleIncidentPopup.pcf: line 377, column 50
    function value_238 () : entity.Contact[] {
      return VehicleIncident.getContactsByRoles( {ContactRole.TC_DRIVER, ContactRole.TC_PASSENGER} )
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_VehLockInd_Input) at FNOLVehicleIncidentPopup.pcf: line 418, column 52
    function value_240 () : java.lang.Boolean {
      return VehicleIncident.VehLockInd
    }
    
    // 'value' attribute on BooleanRadioInput (id=Theft_AntiThftInd_Input) at FNOLVehicleIncidentPopup.pcf: line 425, column 53
    function value_244 () : java.lang.Boolean {
      return VehicleIncident.AntiThftInd
    }
    
    // 'value' attribute on TextInput (id=Theft_OdomRead_Input) at FNOLVehicleIncidentPopup.pcf: line 433, column 47
    function value_248 () : java.lang.Integer {
      return VehicleIncident.OdomRead
    }
    
    // 'value' attribute on TypeKeyInput (id=Theft_AffdvCmplInd_Input) at FNOLVehicleIncidentPopup.pcf: line 442, column 43
    function value_252 () : typekey.YesNo {
      return VehicleIncident.AffdvCmplInd
    }
    
    // 'value' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_267 () : entity.Contact {
      return VehicleIncident.InsuredRep
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 103, column 54
    function value_32 () : java.lang.Integer {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Make_Input) at FNOLVehicleIncidentPopup.pcf: line 116, column 54
    function value_43 () : java.lang.String {
      return VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on BooleanRadioInput (id=LossParty_Input) at FNOLVehicleIncidentPopup.pcf: line 59, column 37
    function value_5 () : java.lang.Boolean {
      return InsurerLoss
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Model_Input) at FNOLVehicleIncidentPopup.pcf: line 129, column 54
    function value_54 () : java.lang.String {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_Style_Input) at FNOLVehicleIncidentPopup.pcf: line 143, column 54
    function value_65 () : typekey.VehicleStyle {
      return VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=Vehicle_Color_Input) at FNOLVehicleIncidentPopup.pcf: line 156, column 54
    function value_76 () : java.lang.String {
      return VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=Vehicle_LicensePlate_Input) at FNOLVehicleIncidentPopup.pcf: line 168, column 54
    function value_87 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 182, column 56
    function value_98 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_131 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_131 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_131 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Vehicle[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Vehicle>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_271 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_271 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_271 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_132 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_131(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Picker_Input) at FNOLVehicleIncidentPopup.pcf: line 72, column 39
    function verifyValueRange_17 () : void {
      var __valueRangeArg = VehicleIncident.AvailableVehicles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_272 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_271(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_VIN_Input) at FNOLVehicleIncidentPopup.pcf: line 194, column 235
    function visible_109 () : java.lang.Boolean {
      return (!InsurerLoss or NewVehicle) and VehicleIncident.Vehicle.Style != VehicleStyle.TC_BOAT and VehicleIncident.Vehicle.Style != VehicleStyle.TC_ATV and VehicleIncident.Vehicle.Style != VehicleStyle.TC_SNOWMOBILE
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_116 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_119 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.incidentowner), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_123 () : java.lang.Boolean {
      return VehicleIncident.LossParty == LossPartyType.TC_THIRD_PARTY
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Exposure_AirbagsDeployed_Input) at FNOLVehicleIncidentPopup.pcf: line 262, column 57
    function visible_166 () : java.lang.Boolean {
      return !VehicleIncident.VehStolenInd
    }
    
    // 'visible' attribute on TextInput (id=Speed_Input) at FNOLVehicleIncidentPopup.pcf: line 286, column 93
    function visible_178 () : java.lang.Boolean {
      return !(VehicleIncident.VehStolenInd or VehicleIncident.VehicleParked)
    }
    
    // 'visible' attribute on CurrencyInput (id=MonthlyPayment_Input) at FNOLVehicleIncidentPopup.pcf: line 313, column 68
    function visible_200 () : java.lang.Boolean {
      return  VehicleIncident.Vehicle.Loan == true  
    }
    
    // 'visible' attribute on TextInput (id=MonthsRemaining_Input) at FNOLVehicleIncidentPopup.pcf: line 320, column 67
    function visible_206 () : java.lang.Boolean {
      return  VehicleIncident.Vehicle.Loan == true 
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_VehicleType_Input) at FNOLVehicleIncidentPopup.pcf: line 88, column 99
    function visible_21 () : java.lang.Boolean {
      return NewVehicle or VehicleIncident.LossParty == LossPartyType.TC_THIRD_PARTY
    }
    
    // 'visible' attribute on ToolbarButton (id=AddDriverButton) at FNOLVehicleIncidentPopup.pcf: line 357, column 63
    function visible_221 () : java.lang.Boolean {
      return VehicleIncident.driver == null
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_259 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (VehicleIncident.InsuredRep), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Theft_AffdvCmplBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_263 () : java.lang.Boolean {
      return VehicleIncident.AffdvCmplInd == TC_YES
    }
    
    // 'visible' attribute on TextInput (id=Vehicle_Year_Input) at FNOLVehicleIncidentPopup.pcf: line 103, column 54
    function visible_31 () : java.lang.Boolean {
      return !InsurerLoss or NewVehicle
    }
    
    // 'visible' attribute on TypeKeyInput (id=Vehicle_State_Input) at FNOLVehicleIncidentPopup.pcf: line 182, column 56
    function visible_97 () : java.lang.Boolean {
      return (!InsurerLoss or NewVehicle)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.FNOLVehicleIncidentPopup {
      return super.CurrentLocation as pcf.FNOLVehicleIncidentPopup
    }
    
    property get InsurerLoss () : boolean {
      return getVariableValue("InsurerLoss", 0) as java.lang.Boolean
    }
    
    property set InsurerLoss ($arg :  boolean) {
      setVariableValue("InsurerLoss", 0, $arg)
    }
    
    property get NewVehicle () : boolean {
      return getVariableValue("NewVehicle", 0) as java.lang.Boolean
    }
    
    property set NewVehicle ($arg :  boolean) {
      setVariableValue("NewVehicle", 0, $arg)
    }
    
    property get VehicleIncident () : VehicleIncident {
      return getVariableValue("VehicleIncident", 0) as VehicleIncident
    }
    
    property set VehicleIncident ($arg :  VehicleIncident) {
      setVariableValue("VehicleIncident", 0, $arg)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getVariableValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setVariableValue("Wizard", 0, $arg)
    }
    
    property get vehicleIncidentOtherServiceRequestsCopy () : java.util.Set<ServiceRequest> {
      return getVariableValue("vehicleIncidentOtherServiceRequestsCopy", 0) as java.util.Set<ServiceRequest>
    }
    
    property set vehicleIncidentOtherServiceRequestsCopy ($arg :  java.util.Set<ServiceRequest>) {
      setVariableValue("vehicleIncidentOtherServiceRequestsCopy", 0, $arg)
    }
    
    
    function initializeVariable() {
      if (Claim == null) {
        Claim = VehicleIncident.getClaim()
      }
      if (VehicleIncident == null) {
        VehicleIncident = new VehicleIncident()
        VehicleIncident.Vehicle = new Vehicle()
        NewVehicle = true
        if (Claim.VehicleIncidentsOnly.length == 0) {
          InsurerLoss = true
          VehicleIncident.LossParty = LossPartyType.TC_INSURED
        } else if(gw.config.LOBAbstraction.ForClaim.ForLossType.isTravel(Claim)) {
          //Travel vehicle incidents should default to 3rd party
          InsurerLoss = false
          VehicleIncident.LossParty = LossPartyType.TC_THIRD_PARTY
        } else {
          InsurerLoss = false
          VehicleIncident.LossParty = LossPartyType.TC_THIRD_PARTY
        }
        Claim.addToIncidents(VehicleIncident)
      }
      else {
        InsurerLoss = checkForIncident()
      }
    }
    
    function checkForIncident() : boolean {
      if (VehicleIncident.LossParty == LossPartyType.TC_INSURED) {
        return true
      } else if (VehicleIncident.LossParty == LossPartyType.TC_THIRD_PARTY) {
        return false
      } else {
        for (currentVehicle in Claim.Policy.Vehicles) {
          if ((currentVehicle).Vehicle == VehicleIncident.Vehicle) {
            VehicleIncident.LossParty = LossPartyType.TC_INSURED
            return true
          }
        }
        VehicleIncident.LossParty = LossPartyType.TC_THIRD_PARTY
        return false
      }
    }
    
    /**
     * Removes any orphaned injury incidents that were created that no longer have any involvement
     * with the vehicle incident.  Also finishes initializing any service requests that were created.
     */
    function cleanBeforeCommit() {
      // Travel LOB does not need to remove the injury incidents
      if (not gw.config.LOBAbstraction.ForClaim.ForLossType.isTravel(VehicleIncident.Claim)) {
        var involvedPersons = new java.util.HashSet<Contact>()
        var injuryIncidents = VehicleIncident.Claim.InjuryIncidentsOnly
    
        // retrieve a list of all drivers and passegners on the all vehicle incidents
        Claim.VehicleIncidentsOnly.each(\ v -> v.getContactsByRoles( {ContactRole.TC_DRIVER, ContactRole.TC_PASSENGER} ).each(\ c -> involvedPersons.add(c)))
        Claim.getContactsByRole(ContactRole.TC_PEDESTRIAN).each(\ c-> involvedPersons.add(c))
    
        injuryIncidents.each( \ ii -> {
          // if the injured person for the incident is not related to any contacts on a vehicle incidents, remove it.
          if (!involvedPersons.contains( ii.injured )) {
            Claim.removeFromIncidents( ii )
            gw.api.claim.FnolServiceRequestHelper.removeIncidentServiceRequests(ii, Wizard)
          }
        })
      }
    
      FnolServiceRequestHelper.cleanAndFinishServiceRequests(Wizard)
    }
    
    function removeContact(contact : Contact) {
      if (VehicleIncident.driver == contact) {
        VehicleIncident.driver = null
      } else {
        VehicleIncident.removeRole( ContactRole.TC_PASSENGER, contact )
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLVehicleIncidentPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FNOLVehicleIncidentPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 398, column 249
    function action_231 () : void {
      FNOLContactPopup.push(Claim, Claim.getClaimContact(ContactPerson), typekey.ContactRole.get(VehicleIncident.driver == ContactPerson ? "driver" : "passenger"), VehicleIncident, Wizard)
    }
    
    // 'action' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 398, column 249
    function action_dest_232 () : pcf.api.Destination {
      return pcf.FNOLContactPopup.createDestination(Claim, Claim.getClaimContact(ContactPerson), typekey.ContactRole.get(VehicleIncident.driver == ContactPerson ? "driver" : "passenger"), VehicleIncident, Wizard)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=RoleIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 393, column 46
    function iconLabel_229 () : java.lang.String {
      return VehicleIncident.driver == ContactPerson ? DisplayKey.get("Web.FNOLVehicleIncidentPopup.DriverIcon.Label") : DisplayKey.get("Web.FNOLVehicleIncidentPopup.PassengerIcon.Label")
    }
    
    // 'icon' attribute on BooleanRadioCell (id=InjuredIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 385, column 89
    function icon_227 () : java.lang.String {
      return Wizard.getInjurySeverity(Claim.getClaimContact(ContactPerson)) == SeverityType.TC_FATAL ? "fatality" : "injury"
    }
    
    // 'icon' attribute on BooleanRadioCell (id=RoleIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 393, column 46
    function icon_230 () : java.lang.String {
      return VehicleIncident.driver == ContactPerson ? "driver" : "passenger"
    }
    
    // 'value' attribute on BooleanRadioCell (id=InjuredIcon_Cell) at FNOLVehicleIncidentPopup.pcf: line 385, column 89
    function value_226 () : java.lang.Boolean {
      return Wizard.isInjured(Claim.getClaimContact(ContactPerson))
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at FNOLVehicleIncidentPopup.pcf: line 398, column 249
    function value_233 () : java.lang.String {
      return DisplayKey.get("Web.FNOLVehicleIncidentPopup.NamePosition", ContactPerson.DisplayName, (VehicleIncident.driver == ContactPerson ? ContactRole.TC_DRIVER.DisplayName : ContactRole.TC_PASSENGER.DisplayName))
    }
    
    // 'value' attribute on TextCell (id=Injuries_Cell) at FNOLVehicleIncidentPopup.pcf: line 402, column 102
    function value_235 () : java.lang.String {
      return Wizard.getInjuryDescription( Claim.getClaimContact(ContactPerson) )
    }
    
    property get ContactPerson () : entity.Contact {
      return getIteratedValue(1) as entity.Contact
    }
    
    
  }
  
  
}