package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPIPSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimPIPSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPIPSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimPIPSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimPIPSummaryDV.pcf: line 32, column 63
    function action_16 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_34 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_36 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_39 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_6 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_68 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_70 () : void {
      if (Exposure.disbenprovider != null) { ClaimContactDetailPopup.push(Exposure.disbenprovider, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_71 () : void {
      ClaimContactDetailPopup.push(Exposure.disbenprovider, Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_8 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at NewClaimPIPSummaryDV.pcf: line 32, column 63
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_35 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_40 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_69 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_72 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.disbenprovider, Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewClaimPIPSummaryDV.pcf: line 43, column 43
    function def_onEnter_26 (def :  pcf.BIDamageInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at NewClaimPIPSummaryDV.pcf: line 48, column 101
    function def_onEnter_28 (def :  pcf.IMEPerformedLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_31 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_65 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.disbenprovider), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewClaimPIPSummaryDV.pcf: line 43, column 43
    function def_refreshVariables_27 (def :  pcf.BIDamageInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at NewClaimPIPSummaryDV.pcf: line 48, column 101
    function def_refreshVariables_29 (def :  pcf.IMEPerformedLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_32 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_66 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.disbenprovider), null, Exposure.Claim)
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at NewClaimPIPSummaryDV.pcf: line 141, column 54
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DisBenefits.WeeklyCompRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at NewClaimPIPSummaryDV.pcf: line 146, column 51
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DisBenefits.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactPermitted_Input) at NewClaimPIPSummaryDV.pcf: line 79, column 44
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ContactPermitted = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_ClaimantType_Input) at NewClaimPIPSummaryDV.pcf: line 86, column 42
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PIPDamages_SSDIEligible_Input) at NewClaimPIPSummaryDV.pcf: line 104, column 40
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SSDIEligible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.disbenprovider = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_41 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_73 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.disbenprovider); var result = eval("Exposure.disbenprovider = Exposure.Claim.resolveContact(Exposure.disbenprovider) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at NewClaimPIPSummaryDV.pcf: line 155, column 44
    function reflectionValue_107 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewClaimPIPSummaryDV.pcf: line 163, column 53
    function reflectionValue_112 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // ClaimContactInput (id=PIPDamages_Claimant_Input) at NewClaimPIPSummaryDV.pcf: line 66, column 34
    function reflectionValue_38 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at NewClaimPIPSummaryDV.pcf: line 88, column 44
    function reflectionValue_55 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at NewClaimPIPSummaryDV.pcf: line 119, column 53
    function reflectionValue_84 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at NewClaimPIPSummaryDV.pcf: line 127, column 53
    function reflectionValue_89 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on Reflect at NewClaimPIPSummaryDV.pcf: line 135, column 44
    function reflectionValue_94 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_45 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_77 () : java.lang.Object {
      return Exposure.Claim.RelatedCompanyArray
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimPIPSummaryDV.pcf: line 18, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at NewClaimPIPSummaryDV.pcf: line 141, column 54
    function valueRoot_101 () : java.lang.Object {
      return Exposure.DisBenefits
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimPIPSummaryDV.pcf: line 152, column 53
    function valueRoot_110 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryAddress_Input) at NewClaimPIPSummaryDV.pcf: line 116, column 68
    function valueRoot_87 () : java.lang.Object {
      return Exposure.disbenprovider
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryContact_Input) at NewClaimPIPSummaryDV.pcf: line 124, column 68
    function valueRoot_92 () : java.lang.Object {
      return Exposure.disbenprovider.PrimaryContact
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at NewClaimPIPSummaryDV.pcf: line 18, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_10 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at NewClaimPIPSummaryDV.pcf: line 146, column 51
    function value_103 () : java.lang.String {
      return Exposure.DisBenefits.Description
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at NewClaimPIPSummaryDV.pcf: line 152, column 53
    function value_109 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryAddress_Input) at NewClaimPIPSummaryDV.pcf: line 160, column 62
    function value_114 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimPIPSummaryDV.pcf: line 39, column 65
    function value_22 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at NewClaimPIPSummaryDV.pcf: line 23, column 43
    function value_3 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at NewClaimPIPSummaryDV.pcf: line 69, column 45
    function value_37 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_42 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactPermitted_Input) at NewClaimPIPSummaryDV.pcf: line 79, column 44
    function value_51 () : java.lang.Boolean {
      return Exposure.ContactPermitted
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_ClaimantType_Input) at NewClaimPIPSummaryDV.pcf: line 86, column 42
    function value_56 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=PIPDamages_SSDIEligible_Input) at NewClaimPIPSummaryDV.pcf: line 104, column 40
    function value_60 () : java.lang.Boolean {
      return Exposure.SSDIEligible
    }
    
    // 'value' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_74 () : entity.Company {
      return Exposure.disbenprovider
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryAddress_Input) at NewClaimPIPSummaryDV.pcf: line 116, column 68
    function value_86 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryContact_Input) at NewClaimPIPSummaryDV.pcf: line 124, column 68
    function value_91 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryPhone_Input) at NewClaimPIPSummaryDV.pcf: line 132, column 59
    function value_96 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryPhoneValue
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at NewClaimPIPSummaryDV.pcf: line 141, column 54
    function value_99 () : gw.api.financials.CurrencyAmount {
      return Exposure.DisBenefits.WeeklyCompRate
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_46 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_46 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_78 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_78 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_78 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_47 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_79 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_78(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at NewClaimPIPSummaryDV.pcf: line 112, column 37
    function verifyValueType_83 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at NewClaimPIPSummaryDV.pcf: line 39, column 65
    function visible_21 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at NewClaimPIPSummaryDV.pcf: line 25, column 59
    function visible_25 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_30 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_33 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_67 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}