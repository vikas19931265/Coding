package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPeopleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimPeopleDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPeopleDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimPeopleDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_36 () : void {
      AddressBookPickerPopup.push(statictypeof (claim.maincontact), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_38 () : void {
      if (claim.maincontact != null) { ClaimContactDetailPopup.push(claim.maincontact, claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_40 () : void {
      ClaimContactDetailPopup.push(claim.maincontact, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_5 () : void {
      AddressBookPickerPopup.push(statictypeof (claim.reporter), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_7 () : void {
      if (claim.reporter != null) { ClaimContactDetailPopup.push(claim.reporter, claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_73 () : void {
      AddressBookPickerPopup.push(statictypeof (claim.Insured), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_75 () : void {
      if (claim.Insured != null) { ClaimContactDetailPopup.push(claim.Insured, claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_76 () : void {
      ClaimContactDetailPopup.push(claim.Insured, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_9 () : void {
      ClaimContactDetailPopup.push(claim.reporter, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(claim.reporter, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_37 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (claim.maincontact), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_41 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(claim.maincontact, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_6 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (claim.reporter), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_74 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (claim.Insured), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_77 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(claim.Insured, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_2 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (claim.reporter), null, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_33 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (claim.maincontact), null, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_70 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (claim.Insured), null, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_3 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (claim.reporter), null, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_34 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (claim.maincontact), null, claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_71 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (claim.Insured), null, claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at NewClaimPeopleDV.pcf: line 40, column 49
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=MainContact_Type_Input) at NewClaimPeopleDV.pcf: line 77, column 49
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at NewClaimPeopleDV.pcf: line 40, column 49
    function filter_24 (VALUE :  typekey.PersonRelationType, VALUES :  typekey.PersonRelationType[]) : java.lang.Boolean {
      return VALUE.hasCategory(claimPolicyType)
    }
    
    // 'initialValue' attribute on Variable at NewClaimPeopleDV.pcf: line 16, column 26
    function initialValue_0 () : PolicyType {
      return claim.Policy.PolicyType
    }
    
    // 'inputConversion' attribute on HiddenInput (id=HiddenInsured_Input) at NewClaimPeopleDV.pcf: line 70, column 37
    function inputConversion_53 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.api.tools.KeyEncoder.decodeFromString(VALUE)
    }
    
    // 'onChange' attribute on ClaimContactInput (id=MainContact_Name_Input) at NewClaimPeopleDV.pcf: line 63, column 114
    function onChange_39 () : void {
      if (claim.maincontact == claim.Insured) claim.MainContactType = PersonRelationType.TC_SELF
    }
    
    // 'onChange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at NewClaimPeopleDV.pcf: line 31, column 110
    function onChange_8 () : void {
      if (claim.reporter == claim.Insured) claim.ReportedByType = PersonRelationType.TC_SELF
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_11 (PickedValue :  Contact) : void {
      var contactType = statictypeof (claim.reporter); var result = eval("claim.reporter = claim.resolveContact(claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_42 (PickedValue :  Contact) : void {
      var contactType = statictypeof (claim.maincontact); var result = eval("claim.maincontact = claim.resolveContact(claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_78 (PickedValue :  Contact) : void {
      var contactType = statictypeof (claim.Insured); var result = eval("claim.Insured = claim.resolveContact(claim.Insured) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'outputConversion' attribute on HiddenInput (id=HiddenInsured_Input) at NewClaimPeopleDV.pcf: line 70, column 37
    function outputConversion_54 (VALUE :  entity.Contact) : java.lang.String {
      return VALUE == null ? null : gw.api.tools.KeyEncoder.encodeIdToString(VALUE)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_15 () : java.lang.Object {
      return claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_81 () : java.lang.Object {
      return claim.RelatedContacts
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_14 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_PrimaryPhone_Input) at NewClaimPeopleDV.pcf: line 44, column 51
    function valueRoot_27 () : java.lang.Object {
      return claim.reporter
    }
    
    // 'value' attribute on TextInput (id=MainContact_PrimaryPhone_Input) at NewClaimPeopleDV.pcf: line 81, column 54
    function valueRoot_64 () : java.lang.Object {
      return claim.maincontact
    }
    
    // 'value' attribute on TextInput (id=Insured_PrimaryPhone_Input) at NewClaimPeopleDV.pcf: line 100, column 50
    function valueRoot_88 () : java.lang.Object {
      return claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_12 () : entity.Contact {
      return claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at NewClaimPeopleDV.pcf: line 40, column 49
    function value_21 () : typekey.PersonRelationType {
      return claim.ReportedByType
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_PrimaryPhone_Input) at NewClaimPeopleDV.pcf: line 44, column 51
    function value_26 () : java.lang.String {
      return claim.reporter.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=ReportedBy_Address_Input) at NewClaimPeopleDV.pcf: line 48, column 60
    function value_29 () : java.lang.String {
      return claim.reporter.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_43 () : entity.Person {
      return claim.maincontact
    }
    
    // 'value' attribute on HiddenInput (id=HiddenInsured_Input) at NewClaimPeopleDV.pcf: line 70, column 37
    function value_55 () : entity.Contact {
      return claim.Insured
    }
    
    // 'value' attribute on TypeKeyInput (id=MainContact_Type_Input) at NewClaimPeopleDV.pcf: line 77, column 49
    function value_58 () : typekey.PersonRelationType {
      return claim.MainContactType
    }
    
    // 'value' attribute on TextInput (id=MainContact_PrimaryPhone_Input) at NewClaimPeopleDV.pcf: line 81, column 54
    function value_63 () : java.lang.String {
      return claim.maincontact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=MainContact_Address_Input) at NewClaimPeopleDV.pcf: line 85, column 63
    function value_66 () : java.lang.String {
      return claim.maincontact.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Insured_PrimaryPhone_Input) at NewClaimPeopleDV.pcf: line 100, column 50
    function value_87 () : java.lang.String {
      return claim.Insured.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Insured_Address_Input) at NewClaimPeopleDV.pcf: line 104, column 59
    function value_90 () : java.lang.String {
      return claim.Insured.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_47 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_82 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_82 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_82 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_17 () : void {
      var __valueRangeArg = claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_48 () : void {
      var __valueRangeArg = claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_47(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_83 () : void {
      var __valueRangeArg = claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_82(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Name_Input) at NewClaimPeopleDV.pcf: line 60, column 35
    function verifyValueType_52 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_1 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_35 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (claim.maincontact), claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_4 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (claim.reporter), claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_72 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (claim.Insured), claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get claimPolicyType () : PolicyType {
      return getVariableValue("claimPolicyType", 0) as PolicyType
    }
    
    property set claimPolicyType ($arg :  PolicyType) {
      setVariableValue("claimPolicyType", 0, $arg)
    }
    
    
  }
  
  
}