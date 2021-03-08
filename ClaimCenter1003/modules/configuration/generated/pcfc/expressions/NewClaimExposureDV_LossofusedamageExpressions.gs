package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimExposureDV.Lossofusedamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimExposureDV_LossofusedamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimExposureDV.Lossofusedamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimExposureDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_17 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_19 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 53, column 63
    function action_27 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_41 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_43 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_46 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_20 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 53, column 63
    function action_dest_28 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_42 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_47 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimExposureDV.Lossofusedamage.pcf: line 190, column 120
    function def_onEnter_117 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at NewClaimExposureDV.Lossofusedamage.pcf: line 210, column 134
    function def_onEnter_123 (def :  pcf.OtherServicesLVInputSet) : void {
      def.onEnter(PropertyIncident.Claim, PropertyIncident, PropertyIncident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_38 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewClaimExposureDV.Lossofusedamage.pcf: line 124, column 57
    function def_onEnter_76 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Exposure.AddressOwner)
    }
    
    // 'def' attribute on ListViewInput at NewClaimExposureDV.Lossofusedamage.pcf: line 190, column 120
    function def_refreshVariables_118 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at NewClaimExposureDV.Lossofusedamage.pcf: line 210, column 134
    function def_refreshVariables_124 (def :  pcf.OtherServicesLVInputSet) : void {
      def.refreshVariables(PropertyIncident.Claim, PropertyIncident, PropertyIncident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_39 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewClaimExposureDV.Lossofusedamage.pcf: line 124, column 57
    function def_refreshVariables_77 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Exposure.AddressOwner)
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_ALEMealsRate_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 168, column 56
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.MealsRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 177, column 43
    function defaultSetter_109 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 44, column 38
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 186, column 41
    function defaultSetter_114 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 90, column 42
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 105, column 36
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 135, column 48
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 140, column 44
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.LossofUse = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 147, column 49
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 155, column 57
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.MealsDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsPeople_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 162, column 56
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      PropertyIncident.MealsPeople = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 177, column 43
    function filter_111 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'initialValue' attribute on Variable at NewClaimExposureDV.Lossofusedamage.pcf: line 18, column 39
    function initialValue_0 () : entity.PropertyIncident {
      return Exposure.Incident as PropertyIncident
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_48 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 75, column 34
    function reflectionValue_45 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewClaimExposureDV.Lossofusedamage.pcf: line 92, column 40
    function reflectionValue_58 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewClaimExposureDV.Lossofusedamage.pcf: line 112, column 44
    function reflectionValue_66 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewClaimExposureDV.Lossofusedamage.pcf: line 120, column 53
    function reflectionValue_71 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 44, column 38
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_24 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_52 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 27, column 44
    function valueRoot_2 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 109, column 53
    function valueRoot_69 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 135, column 48
    function valueRoot_80 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 140, column 44
    function valueRoot_84 () : java.lang.Object {
      return PropertyIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 27, column 44
    function value_1 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 44, column 38
    function value_10 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_ALEMealsRate_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 168, column 56
    function value_103 () : gw.api.financials.CurrencyAmount {
      return PropertyIncident.MealsRate
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 177, column 43
    function value_108 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 186, column 41
    function value_113 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_21 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 60, column 65
    function value_33 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 32, column 43
    function value_4 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 78, column 45
    function value_44 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_49 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 90, column 42
    function value_59 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 105, column 36
    function value_63 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 109, column 53
    function value_68 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 37, column 46
    function value_7 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 117, column 62
    function value_73 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 135, column 48
    function value_78 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 140, column 44
    function value_82 () : java.lang.Boolean {
      return PropertyIncident.LossofUse
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 147, column 49
    function value_86 () : gw.api.financials.CurrencyAmount {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 155, column 57
    function value_91 () : java.lang.Integer {
      return PropertyIncident.MealsDays
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsPeople_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 162, column 56
    function value_97 () : java.lang.Integer {
      return PropertyIncident.MealsPeople
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 44, column 38
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 44, column 38
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 44, column 38
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_25 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_25 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_53 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 44, column 38
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_26 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_54 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_53(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 203, column 54
    function visible_119 () : java.lang.Boolean {
      return PropertyIncident.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 208, column 89
    function visible_121 () : java.lang.Boolean {
      return not PropertyIncident.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 60, column 65
    function visible_32 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewClaimExposureDV.Lossofusedamage.pcf: line 46, column 59
    function visible_36 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_37 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_40 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 155, column 57
    function visible_90 () : java.lang.Boolean {
      return  PropertyIncident.LossofUse == true 
    }
    
    // 'visible' attribute on TextInput (id=Exposure_ALEMealsPeople_Input) at NewClaimExposureDV.Lossofusedamage.pcf: line 162, column 56
    function visible_96 () : java.lang.Boolean {
      return PropertyIncident.LossofUse == true 
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get PropertyIncident () : entity.PropertyIncident {
      return getVariableValue("PropertyIncident", 0) as entity.PropertyIncident
    }
    
    property set PropertyIncident ($arg :  entity.PropertyIncident) {
      setVariableValue("PropertyIncident", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
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