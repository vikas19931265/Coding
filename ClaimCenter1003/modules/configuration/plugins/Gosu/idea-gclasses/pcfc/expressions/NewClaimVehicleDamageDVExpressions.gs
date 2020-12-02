package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimVehicleDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimVehicleDamageDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimVehicleDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimVehicleDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_16 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_18 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimVehicleDamageDV.pcf: line 45, column 63
    function action_26 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_40 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_42 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_45 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_NewIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 132, column 112
    function action_76 () : void {
      NewVehicleIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_EditIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 136, column 113
    function action_78 () : void {
      EditVehicleIncidentPopup.push(Exposure.VehicleIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimVehicleDamageDV.pcf: line 45, column 63
    function action_dest_27 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_41 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_46 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_NewIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 132, column 112
    function action_dest_77 () : pcf.api.Destination {
      return pcf.NewVehicleIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=NewClaimVehicleDamageDV_EditIncidentMenuItem) at NewClaimVehicleDamageDV.pcf: line 136, column 113
    function action_dest_79 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(Exposure.VehicleIncident, true)
    }
    
    // 'def' attribute on ListViewInput at NewClaimVehicleDamageDV.pcf: line 184, column 118
    function def_onEnter_111 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_37 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimVehicleDamageDV.pcf: line 184, column 118
    function def_refreshVariables_112 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_38 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 38
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimVehicleDamageDV.pcf: line 180, column 41
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimVehicleDamageDV.pcf: line 82, column 42
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimVehicleDamageDV.pcf: line 97, column 36
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 125, column 44
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident = (__VALUE_TO_SET as entity.VehicleIncident)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_47 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 169, column 39
    function reflectionValue_102 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.LossEstimate
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at NewClaimVehicleDamageDV.pcf: line 67, column 34
    function reflectionValue_44 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewClaimVehicleDamageDV.pcf: line 84, column 40
    function reflectionValue_57 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 104, column 44
    function reflectionValue_65 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 112, column 53
    function reflectionValue_70 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 145, column 33
    function reflectionValue_87 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.driver
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 153, column 38
    function reflectionValue_92 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.Description
    }
    
    // 'value' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 161, column 42
    function reflectionValue_97 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.VehicleOperable
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 38
    function valueRange_12 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_23 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_51 () : java.lang.Object {
      return Exposure.Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on Reflect at NewClaimVehicleDamageDV.pcf: line 128, column 82
    function valueRange_75 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 125, column 44
    function valueRange_83 () : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimVehicleDamageDV.pcf: line 18, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimVehicleDamageDV.pcf: line 101, column 53
    function valueRoot_68 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at NewClaimVehicleDamageDV.pcf: line 142, column 35
    function valueRoot_90 () : java.lang.Object {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimVehicleDamageDV.pcf: line 18, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on CurrencyInput (id=Incident_LossEstimate_Input) at NewClaimVehicleDamageDV.pcf: line 166, column 55
    function value_104 () : gw.api.financials.CurrencyAmount {
      return Exposure.VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimVehicleDamageDV.pcf: line 180, column 41
    function value_107 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_20 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewClaimVehicleDamageDV.pcf: line 23, column 43
    function value_3 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimVehicleDamageDV.pcf: line 52, column 65
    function value_32 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at NewClaimVehicleDamageDV.pcf: line 70, column 45
    function value_43 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_48 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimVehicleDamageDV.pcf: line 82, column 42
    function value_58 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at NewClaimVehicleDamageDV.pcf: line 28, column 46
    function value_6 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimVehicleDamageDV.pcf: line 97, column 36
    function value_62 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimVehicleDamageDV.pcf: line 101, column 53
    function value_67 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at NewClaimVehicleDamageDV.pcf: line 109, column 62
    function value_72 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 125, column 44
    function value_80 () : entity.VehicleIncident {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at NewClaimVehicleDamageDV.pcf: line 142, column 35
    function value_89 () : entity.Person {
      return Exposure.VehicleIncident.driver
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 38
    function value_9 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TextInput (id=Incident_Description_Input) at NewClaimVehicleDamageDV.pcf: line 150, column 54
    function value_94 () : java.lang.String {
      return Exposure.VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Incident_VehicleOperable_Input) at NewClaimVehicleDamageDV.pcf: line 158, column 58
    function value_99 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleOperable
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_52 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_52 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 125, column 44
    function verifyValueRangeIsAllowedType_84 ($$arg :  entity.VehicleIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 125, column 44
    function verifyValueRangeIsAllowedType_84 ($$arg :  gw.api.database.IQueryBeanResult<entity.VehicleIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 125, column 44
    function verifyValueRangeIsAllowedType_84 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimVehicleDamageDV.pcf: line 36, column 38
    function verifyValueRange_14 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_25 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_53 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at NewClaimVehicleDamageDV.pcf: line 125, column 44
    function verifyValueRange_85 () : void {
      var __valueRangeArg = Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_84(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimVehicleDamageDV.pcf: line 52, column 65
    function visible_31 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewClaimVehicleDamageDV.pcf: line 38, column 59
    function visible_35 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_36 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_39 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
    property get ContactProhibited() : Boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
      
    property set ContactProhibited(prohibited : Boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant) 
      if (claimContact != null) claimContact.ContactProhibited = prohibited 
    }
        
    
    
  }
  
  
}