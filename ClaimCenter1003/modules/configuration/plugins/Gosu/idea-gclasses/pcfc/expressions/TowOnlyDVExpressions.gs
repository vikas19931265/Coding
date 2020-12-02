package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/TowOnlyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TowOnlyDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/TowOnlyDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TowOnlyDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=TowOnlyDV_NewIncidentMenuItem) at TowOnlyDV.pcf: line 171, column 98
    function action_105 () : void {
      NewVehicleIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=TowOnlyDV_EditIncidentMenuItem) at TowOnlyDV.pcf: line 176, column 99
    function action_107 () : void {
      EditVehicleIncidentPopup.push(Exposure.VehicleIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=TowOnlyDV_ViewIncidentMenuItem) at TowOnlyDV.pcf: line 181, column 99
    function action_109 () : void {
      EditVehicleIncidentPopup.push(Exposure.VehicleIncident, false)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_160 () : void {
      AddressBookPickerPopup.push(statictypeof (asVehicleIncident().recoveryagent), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_162 () : void {
      if (asVehicleIncident().recoveryagent != null) { ClaimContactDetailPopup.push(asVehicleIncident().recoveryagent, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_164 () : void {
      ClaimContactDetailPopup.push(asVehicleIncident().recoveryagent, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=Exposure_StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_32 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_34 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at TowOnlyDV.pcf: line 67, column 63
    function action_42 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_69 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_71 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_74 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=TowOnlyDV_NewIncidentMenuItem) at TowOnlyDV.pcf: line 171, column 98
    function action_dest_106 () : pcf.api.Destination {
      return pcf.NewVehicleIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=TowOnlyDV_EditIncidentMenuItem) at TowOnlyDV.pcf: line 176, column 99
    function action_dest_108 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(Exposure.VehicleIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=TowOnlyDV_ViewIncidentMenuItem) at TowOnlyDV.pcf: line 181, column 99
    function action_dest_110 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(Exposure.VehicleIncident, false)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_161 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (asVehicleIncident().recoveryagent), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_165 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(asVehicleIncident().recoveryagent, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=Exposure_StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_33 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_35 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at TowOnlyDV.pcf: line 67, column 63
    function action_dest_43 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_70 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_75 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at TowOnlyDV.pcf: line 217, column 51
    function def_onEnter_138 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_157 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (asVehicleIncident().recoveryagent), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=RecoveryAddress) at TowOnlyDV.pcf: line 263, column 167
    function def_onEnter_185 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(asVehicleIncident().RecoveryAddressOwner)
    }
    
    // 'def' attribute on ListViewInput at TowOnlyDV.pcf: line 304, column 27
    function def_onEnter_208 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TowOnlyDV.pcf: line 337, column 49
    function def_onEnter_225 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_66 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at TowOnlyDV.pcf: line 217, column 51
    function def_refreshVariables_139 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_158 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (asVehicleIncident().recoveryagent), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=RecoveryAddress) at TowOnlyDV.pcf: line 263, column 167
    function def_refreshVariables_186 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(asVehicleIncident().RecoveryAddressOwner)
    }
    
    // 'def' attribute on ListViewInput at TowOnlyDV.pcf: line 304, column 27
    function def_refreshVariables_209 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TowOnlyDV.pcf: line 337, column 49
    function def_refreshVariables_226 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_67 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at TowOnlyDV.pcf: line 36, column 38
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at TowOnlyDV.pcf: line 163, column 44
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident = (__VALUE_TO_SET as entity.VehicleIncident)
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovInd_Input) at TowOnlyDV.pcf: line 227, column 35
    function defaultSetter_141 (__VALUE_TO_SET :  java.lang.Object) : void {
      asVehicleIncident().RecovInd = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on DateInput (id=Recovery_RecovDate_Input) at TowOnlyDV.pcf: line 235, column 61
    function defaultSetter_146 (__VALUE_TO_SET :  java.lang.Object) : void {
      asVehicleIncident().RecovDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovState_Input) at TowOnlyDV.pcf: line 242, column 61
    function defaultSetter_152 (__VALUE_TO_SET :  java.lang.Object) : void {
      asVehicleIncident().RecovState = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_168 (__VALUE_TO_SET :  java.lang.Object) : void {
      asVehicleIncident().recoveryagent = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovCondType_Input) at TowOnlyDV.pcf: line 257, column 60
    function defaultSetter_180 (__VALUE_TO_SET :  java.lang.Object) : void {
      asVehicleIncident().RecovCondType = (__VALUE_TO_SET as typekey.RecovCondType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovClassType_Input) at TowOnlyDV.pcf: line 270, column 60
    function defaultSetter_189 (__VALUE_TO_SET :  java.lang.Object) : void {
      asVehicleIncident().RecovClassType = (__VALUE_TO_SET as typekey.RecovClassType)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at TowOnlyDV.pcf: line 290, column 43
    function defaultSetter_200 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at TowOnlyDV.pcf: line 299, column 41
    function defaultSetter_205 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_78 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at TowOnlyDV.pcf: line 120, column 42
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactPermitted_Input) at TowOnlyDV.pcf: line 135, column 36
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at TowOnlyDV.pcf: line 290, column 43
    function filter_202 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_166 (PickedValue :  Contact) : void {
      var contactType = statictypeof (asVehicleIncident().recoveryagent); var result = eval("asVehicleIncident().recoveryagent = Exposure.Claim.resolveContact(asVehicleIncident().recoveryagent) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_76 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at TowOnlyDV.pcf: line 190, column 33
    function reflectionValue_118 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.driver
    }
    
    // 'value' attribute on Reflect at TowOnlyDV.pcf: line 198, column 38
    function reflectionValue_123 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.Description
    }
    
    // 'value' attribute on Reflect at TowOnlyDV.pcf: line 206, column 42
    function reflectionValue_128 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.VehicleOperable
    }
    
    // 'value' attribute on Reflect at TowOnlyDV.pcf: line 214, column 39
    function reflectionValue_133 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.LossEstimate
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at TowOnlyDV.pcf: line 105, column 43
    function reflectionValue_73 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at TowOnlyDV.pcf: line 122, column 40
    function reflectionValue_86 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at TowOnlyDV.pcf: line 142, column 44
    function reflectionValue_94 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at TowOnlyDV.pcf: line 150, column 53
    function reflectionValue_99 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on Reflect at TowOnlyDV.pcf: line 166, column 82
    function valueRange_104 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at TowOnlyDV.pcf: line 163, column 44
    function valueRange_114 () : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at TowOnlyDV.pcf: line 36, column 38
    function valueRange_12 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_170 () : java.lang.Object {
      return Exposure.Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_39 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_80 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at TowOnlyDV.pcf: line 18, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at TowOnlyDV.pcf: line 187, column 35
    function valueRoot_121 () : java.lang.Object {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovInd_Input) at TowOnlyDV.pcf: line 227, column 35
    function valueRoot_142 () : java.lang.Object {
      return asVehicleIncident()
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_RemainingReserves_Input) at TowOnlyDV.pcf: line 317, column 57
    function valueRoot_211 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at TowOnlyDV.pcf: line 139, column 53
    function valueRoot_97 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_LossParty_Input) at TowOnlyDV.pcf: line 18, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at TowOnlyDV.pcf: line 147, column 62
    function value_101 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at TowOnlyDV.pcf: line 163, column 44
    function value_111 () : entity.VehicleIncident {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at TowOnlyDV.pcf: line 187, column 35
    function value_120 () : entity.Person {
      return Exposure.VehicleIncident.driver
    }
    
    // 'value' attribute on TextInput (id=Incident_Description_Input) at TowOnlyDV.pcf: line 195, column 54
    function value_125 () : java.lang.String {
      return Exposure.VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Incident_VehicleOperable_Input) at TowOnlyDV.pcf: line 203, column 58
    function value_130 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on CurrencyInput (id=Incident_LossEstimate_Input) at TowOnlyDV.pcf: line 211, column 55
    function value_135 () : gw.api.financials.CurrencyAmount {
      return Exposure.VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovInd_Input) at TowOnlyDV.pcf: line 227, column 35
    function value_140 () : typekey.YesNo {
      return asVehicleIncident().RecovInd
    }
    
    // 'value' attribute on DateInput (id=Recovery_RecovDate_Input) at TowOnlyDV.pcf: line 235, column 61
    function value_145 () : java.util.Date {
      return asVehicleIncident().RecovDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovState_Input) at TowOnlyDV.pcf: line 242, column 61
    function value_151 () : typekey.State {
      return asVehicleIncident().RecovState
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at TowOnlyDV.pcf: line 40, column 49
    function value_16 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_167 () : entity.Contact {
      return asVehicleIncident().recoveryagent
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovCondType_Input) at TowOnlyDV.pcf: line 257, column 60
    function value_179 () : typekey.RecovCondType {
      return asVehicleIncident().RecovCondType
    }
    
    // 'value' attribute on TypeKeyInput (id=Recovery_RecovClassType_Input) at TowOnlyDV.pcf: line 270, column 60
    function value_188 () : typekey.RecovClassType {
      return asVehicleIncident().RecovClassType
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at TowOnlyDV.pcf: line 44, column 58
    function value_19 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_Segment_Input) at TowOnlyDV.pcf: line 278, column 43
    function value_193 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_Strategy_Input) at TowOnlyDV.pcf: line 283, column 44
    function value_196 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at TowOnlyDV.pcf: line 290, column 43
    function value_199 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at TowOnlyDV.pcf: line 299, column 41
    function value_204 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_RemainingReserves_Input) at TowOnlyDV.pcf: line 317, column 57
    function value_210 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_FuturePayments_Input) at TowOnlyDV.pcf: line 321, column 54
    function value_213 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_TotalPayments_Input) at TowOnlyDV.pcf: line 325, column 53
    function value_216 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_TotalRecoveries_Input) at TowOnlyDV.pcf: line 329, column 55
    function value_219 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at TowOnlyDV.pcf: line 49, column 44
    function value_22 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_TotalIncurredNet_Input) at TowOnlyDV.pcf: line 334, column 56
    function value_222 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at TowOnlyDV.pcf: line 54, column 33
    function value_25 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at TowOnlyDV.pcf: line 58, column 38
    function value_29 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_PrimaryCoverage_Input) at TowOnlyDV.pcf: line 23, column 43
    function value_3 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_36 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at TowOnlyDV.pcf: line 74, column 65
    function value_48 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at TowOnlyDV.pcf: line 81, column 48
    function value_53 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at TowOnlyDV.pcf: line 87, column 49
    function value_58 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_CoverageSubType_Input) at TowOnlyDV.pcf: line 28, column 46
    function value_6 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at TowOnlyDV.pcf: line 92, column 46
    function value_62 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at TowOnlyDV.pcf: line 108, column 45
    function value_72 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_77 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at TowOnlyDV.pcf: line 120, column 42
    function value_87 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on RangeInput (id=Exposure_Coverage_Input) at TowOnlyDV.pcf: line 36, column 38
    function value_9 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactPermitted_Input) at TowOnlyDV.pcf: line 135, column 36
    function value_91 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at TowOnlyDV.pcf: line 139, column 53
    function value_96 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at TowOnlyDV.pcf: line 163, column 44
    function verifyValueRangeIsAllowedType_115 ($$arg :  entity.VehicleIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at TowOnlyDV.pcf: line 163, column 44
    function verifyValueRangeIsAllowedType_115 ($$arg :  gw.api.database.IQueryBeanResult<entity.VehicleIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at TowOnlyDV.pcf: line 163, column 44
    function verifyValueRangeIsAllowedType_115 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at TowOnlyDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at TowOnlyDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at TowOnlyDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_171 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_171 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_171 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_40 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_40 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_40 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_81 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_81 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_81 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at TowOnlyDV.pcf: line 163, column 44
    function verifyValueRange_116 () : void {
      var __valueRangeArg = Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_115(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Exposure_Coverage_Input) at TowOnlyDV.pcf: line 36, column 38
    function verifyValueRange_14 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_172 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_171(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=Exposure_StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_41 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_40(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_82 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_81(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at TowOnlyDV.pcf: line 54, column 33
    function verifyValueType_28 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on DateInput (id=Recovery_RecovDate_Input) at TowOnlyDV.pcf: line 235, column 61
    function visible_144 () : java.lang.Boolean {
      return  asVehicleIncident().RecovInd == TC_YES 
    }
    
    // 'visible' attribute on ClaimContactInput (id=RecovAgcy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_159 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (asVehicleIncident().recoveryagent), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on InputSetRef (id=RecoveryAddress) at TowOnlyDV.pcf: line 263, column 167
    function visible_184 () : java.lang.Boolean {
      return asVehicleIncident().RecovInd == YesNo.TC_YES and (asVehicleIncident().RecovCondType != null and asVehicleIncident().RecovCondType != TC_NOT_RECOV)
    }
    
    // 'visible' attribute on TypeKeyInput (id=Recovery_RecovClassType_Input) at TowOnlyDV.pcf: line 270, column 60
    function visible_187 () : java.lang.Boolean {
      return asVehicleIncident().RecovInd == TC_YES 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at TowOnlyDV.pcf: line 74, column 65
    function visible_47 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at TowOnlyDV.pcf: line 60, column 59
    function visible_51 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at TowOnlyDV.pcf: line 81, column 48
    function visible_52 () : java.lang.Boolean {
      return Exposure.State == TC_CLOSED
    }
    
    // 'visible' attribute on TypeKeyInput (id=ClosedOutcome_Input) at TowOnlyDV.pcf: line 87, column 49
    function visible_57 () : java.lang.Boolean {
      return Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_65 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_68 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
    function asVehicleIncident() : VehicleIncident {
            return Exposure.Incident as VehicleIncident;
          }
          
    property get ContactProhibited() : boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
      
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant) 
      if (claimContact != null) claimContact.ContactProhibited = prohibited 
    }
          
        
    
    
  }
  
  
}