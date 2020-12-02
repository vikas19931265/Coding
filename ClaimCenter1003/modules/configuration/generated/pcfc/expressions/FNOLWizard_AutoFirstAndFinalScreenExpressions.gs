package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_AutoFirstAndFinalScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_AutoFirstAndFinalScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_AutoFirstAndFinalScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_AutoFirstAndFinalScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=NewClaimWizard_QuickClaimScreen_ReturnFromQuickClaimButton) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 28, column 23
    function action_2 () : void {
      Wizard.goToFullWizardFromIncompatible("BasicInfo", "Summary")
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_29 () : void {
      AddressBookPickerPopup.push(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_31 () : void {
      if (exposure.Claimant != null) { ClaimContactDetailPopup.push(exposure.Claimant, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_32 () : void {
      ClaimContactDetailPopup.push(exposure.Claimant, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_70 () : void {
      AddressBookPickerPopup.push(statictypeof (serviceRequest.Specialist), Claim, new java.util.ArrayList<SpecialistService>())
    }
    
    // 'action' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_72 () : void {
      if (serviceRequest.Specialist != null) { ClaimContactDetailPopup.push(serviceRequest.Specialist, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_75 () : void {
      ClaimContactDetailPopup.push(serviceRequest.Specialist, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_30 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_33 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(exposure.Claimant, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_71 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (serviceRequest.Specialist), Claim, new java.util.ArrayList<SpecialistService>())
    }
    
    // 'action' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_76 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(serviceRequest.Specialist, Claim)
    }
    
    // 'def' attribute on PanelRef (id=AutoFirstAndFinalReportedPanelSet) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 47, column 52
    function def_onEnter_10 (def :  pcf.FNOLWizardAutoFirstAndFinalPanelSet_VENDOR) : void {
      def.onEnter(Claim, Wizard, VehicleIncident)
    }
    
    // 'def' attribute on PanelRef at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 170, column 86
    function def_onEnter_101 (def :  pcf.FNOLWizardCheckDV_notready) : void {
      def.onEnter(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 170, column 86
    function def_onEnter_103 (def :  pcf.FNOLWizardCheckDV_ready) : void {
      def.onEnter(Claim, Wizard)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 177, column 60
    function def_onEnter_106 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Claim.AddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_26 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (exposure.Claimant), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_67 (def :  pcf.ClaimNewRepairShopOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (serviceRequest.Specialist), null, Claim)
    }
    
    // 'def' attribute on PanelRef (id=AutoFirstAndFinalReportedPanelSet) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 47, column 52
    function def_onEnter_8 (def :  pcf.FNOLWizardAutoFirstAndFinalPanelSet_INSURED) : void {
      def.onEnter(Claim, Wizard, VehicleIncident)
    }
    
    // 'def' attribute on PanelRef at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 170, column 86
    function def_refreshVariables_102 (def :  pcf.FNOLWizardCheckDV_notready) : void {
      def.refreshVariables(Claim, Wizard)
    }
    
    // 'def' attribute on PanelRef at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 170, column 86
    function def_refreshVariables_104 (def :  pcf.FNOLWizardCheckDV_ready) : void {
      def.refreshVariables(Claim, Wizard)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 177, column 60
    function def_refreshVariables_107 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Claim.AddressOwner)
    }
    
    // 'def' attribute on PanelRef (id=AutoFirstAndFinalReportedPanelSet) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 47, column 52
    function def_refreshVariables_11 (def :  pcf.FNOLWizardAutoFirstAndFinalPanelSet_VENDOR) : void {
      def.refreshVariables(Claim, Wizard, VehicleIncident)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_27 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (exposure.Claimant), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_68 (def :  pcf.ClaimNewRepairShopOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (serviceRequest.Specialist), null, Claim)
    }
    
    // 'def' attribute on PanelRef (id=AutoFirstAndFinalReportedPanelSet) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 47, column 52
    function def_refreshVariables_9 (def :  pcf.FNOLWizardAutoFirstAndFinalPanelSet_INSURED) : void {
      def.refreshVariables(Claim, Wizard, VehicleIncident)
    }
    
    // 'value' attribute on DateInput (id=Claim_lossTime_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 190, column 39
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleRU = (__VALUE_TO_SET as entity.VehicleRU)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 74, column 42
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on RangeInput (id=Claimant_Type_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 93, column 48
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=FirstFinalReportedAgencyRadioButton_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 37, column 56
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.FirstFinalReportedAgency = (__VALUE_TO_SET as typekey.FirstFinalReportedAgency)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 125, column 47
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      serviceRequest.Specialist = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=ServiceRequest_InstructionText_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 147, column 67
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      serviceRequest.Instruction.InstructionText = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReadyToPay_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 163, column 47
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.Check.ReadyToPay = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function editable_74 () : java.lang.Boolean {
      return Wizard.FirstFinalReportedAgency != typekey.FirstFinalReportedAgency.TC_VENDOR
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 16, column 24
    function initialValue_0 () : Exposure {
      return Claim.Exposures.single()
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 20, column 37
    function initialValue_1 () : entity.ServiceRequest {
      return Claim.ServiceRequests.single()
    }
    
    // 'mode' attribute on PanelRef at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 170, column 86
    function mode_105 () : java.lang.Object {
      return Wizard.Check.ReadyToPay ? "ready" : "notready"
    }
    
    // 'mode' attribute on PanelRef (id=AutoFirstAndFinalReportedPanelSet) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 47, column 52
    function mode_12 () : java.lang.Object {
      return Wizard.FirstFinalReportedAgency.Code
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 39, column 179
    function onChange_3 () : void {
      Claim.reporter = ((Wizard.FirstFinalReportedAgency == FirstFinalReportedAgency.TC_INSURED and Claim.Insured typeis entity.Person) ? Claim.Insured : null)
    }
    
    // 'onChange' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 141, column 69
    function onChange_73 () : void {
      Wizard.repairShopOnPick(serviceRequest)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_34 (PickedValue :  Contact) : void {
      var contactType = statictypeof (exposure.Claimant); var result = eval("exposure.Claimant = Claim.resolveContact(exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_77 (PickedValue :  Contact) : void {
      var contactType = statictypeof (serviceRequest.Specialist); var result = eval("serviceRequest.Specialist = Claim.resolveContact(serviceRequest.Specialist) as " + contactType.Name + ";return null;"); Wizard.repairShopOnPick(serviceRequest);
    }
    
    // 'onPick' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 139, column 30
    function onPick_85 (PickedValue :  java.lang.Object) : void {
      Wizard.repairShopOnPick(serviceRequest)
    }
    
    // Reflect at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 95, column 46
    function reflectionValue_44 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 110, column 50
    function reflectionValue_52 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 118, column 59
    function reflectionValue_57 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 183, column 39
    function validationExpression_108 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'validationExpression' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function validationExpression_13 () : java.lang.Object {
      return !(VehicleIncident.Vehicle.Vin == null and VehicleIncident.Vehicle.LicensePlate == null and (VehicleIncident.Vehicle.Model == null or exposure.VehicleIncident.Vehicle.Make == null)) ? null : DisplayKey.get("NVV.Claim.SubView.NewQuickClaimClaimAutoFirstAndFinal.Claim.Vehicle.ValidationError")
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function valueRange_16 () : java.lang.Object {
      return Claim.Policy.Vehicles
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_38 () : java.lang.Object {
      return Claim.getRelatedContacts(exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'valueRange' attribute on RangeInput (id=Claimant_Type_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 93, column 48
    function valueRange_48 () : java.lang.Object {
      return ClaimantType.getTypeKeys(false)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_81 () : java.lang.Object {
      return Claim.RelatedAutoRepairShopArray
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 74, column 42
    function valueRoot_23 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_37 () : java.lang.Object {
      return exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_Workphone_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 107, column 59
    function valueRoot_55 () : java.lang.Object {
      return exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=FirstFinalReportedAgencyRadioButton_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 37, column 56
    function valueRoot_6 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_80 () : java.lang.Object {
      return serviceRequest
    }
    
    // 'value' attribute on TextInput (id=ServiceRequest_InstructionText_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 147, column 67
    function valueRoot_92 () : java.lang.Object {
      return serviceRequest.Instruction
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReadyToPay_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 163, column 47
    function valueRoot_99 () : java.lang.Object {
      return Wizard.Check
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 183, column 39
    function value_109 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function value_14 () : entity.VehicleRU {
      return VehicleRU
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 74, column 42
    function value_21 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_35 () : entity.Contact {
      return exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=FirstFinalReportedAgencyRadioButton_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 37, column 56
    function value_4 () : typekey.FirstFinalReportedAgency {
      return Wizard.FirstFinalReportedAgency
    }
    
    // 'value' attribute on RangeInput (id=Claimant_Type_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 93, column 48
    function value_45 () : typekey.ClaimantType {
      return exposure.ClaimantType
    }
    
    // 'value' attribute on TextInput (id=Claimant_Workphone_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 107, column 59
    function value_54 () : java.lang.String {
      return exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 115, column 68
    function value_59 () : java.lang.String {
      return exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 125, column 47
    function value_62 () : java.lang.Boolean {
      return exposure.OtherCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_78 () : entity.Contact {
      return serviceRequest.Specialist
    }
    
    // 'value' attribute on TextInput (id=ServiceRequest_InstructionText_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 147, column 67
    function value_90 () : java.lang.String {
      return serviceRequest.Instruction.InstructionText
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_PrimaryCoverage_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 154, column 49
    function value_94 () : typekey.CoverageType {
      return exposure.PrimaryCoverage
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReadyToPay_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 163, column 47
    function value_97 () : java.lang.Boolean {
      return Wizard.Check.ReadyToPay
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.VehicleRU[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.VehicleRU>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claimant_Type_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 93, column 48
    function verifyValueRangeIsAllowedType_49 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claimant_Type_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 93, column 48
    function verifyValueRangeIsAllowedType_49 ($$arg :  typekey.ClaimantType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_82 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_82 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_82 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Name_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 65, column 44
    function verifyValueRange_18 () : void {
      var __valueRangeArg = Claim.Policy.Vehicles
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_40 () : void {
      var __valueRangeArg = Claim.getRelatedContacts(exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_39(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claimant_Type_Input) at FNOLWizard_AutoFirstAndFinalScreen.pcf: line 93, column 48
    function verifyValueRange_50 () : void {
      var __valueRangeArg = ClaimantType.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_49(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_83 () : void {
      var __valueRangeArg = Claim.RelatedAutoRepairShopArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_82(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_25 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_28 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (exposure.Claimant), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=RepairShop_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_69 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (serviceRequest.Specialist), Claim, new java.util.ArrayList<SpecialistService>())" != "" && true
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    property get exposure () : Exposure {
      return getVariableValue("exposure", 0) as Exposure
    }
    
    property set exposure ($arg :  Exposure) {
      setVariableValue("exposure", 0, $arg)
    }
    
    property get serviceRequest () : entity.ServiceRequest {
      return getVariableValue("serviceRequest", 0) as entity.ServiceRequest
    }
    
    property set serviceRequest ($arg :  entity.ServiceRequest) {
      setVariableValue("serviceRequest", 0, $arg)
    }
    
    property get VehicleIncident() : VehicleIncident {return exposure.VehicleIncident}
    
    property get VehicleRU() : VehicleRU {
      return Claim.Policy.Vehicles.firstWhere( \ vru -> vru.Vehicle==exposure.VehicleIncident.Vehicle)
    }
    
    property set VehicleRU(riskUnit : VehicleRU) {
      VehicleIncident.Vehicle = riskUnit.Vehicle
      exposure.updateCoverage(riskUnit)
    }
    
    
  }
  
  
}