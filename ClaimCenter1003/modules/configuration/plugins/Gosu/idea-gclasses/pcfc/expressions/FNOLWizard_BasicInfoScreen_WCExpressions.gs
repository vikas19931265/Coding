package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_BasicInfoScreen.WC.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_BasicInfoScreen_WCExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_BasicInfoScreen.WC.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_BasicInfoScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_13 () : void {
      AddressBookPickerPopup.push(entity.Person.Type, Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_15 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_17 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_43 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_45 () : void {
      if (Claim.maincontact != null) { ClaimContactDetailPopup.push(Claim.maincontact, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_47 () : void {
      ClaimContactDetailPopup.push(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_73 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_75 () : void {
      if (Claim.claimant != null) { ClaimContactDetailPopup.push(Claim.claimant, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_77 () : void {
      ClaimContactDetailPopup.push(Claim.claimant, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_14 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(entity.Person.Type, Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_44 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_74 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_78 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.claimant, Claim)
    }
    
    // 'available' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 131, column 45
    function available_92 () : java.lang.Boolean {
      return Claim.claimant != null
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_10 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(entity.Person.Type, null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_40 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_70 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.claimant), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_11 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(entity.Person.Type, null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_41 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_71 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.claimant), null, Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LocationCode = (__VALUE_TO_SET as entity.PolicyLocation)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 72, column 54
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=MainContactChoice_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 86, column 45
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      maincontactSamePerson = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_MainContactType_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 107, column 49
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.claimant = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 131, column 45
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.claimant.TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 131, column 45
    function encryptionExpression_96 (VALUE :  java.lang.String) : java.lang.String {
      return Claim.claimant.maskTaxId(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 72, column 54
    function filter_33 (VALUE :  typekey.PersonRelationType, VALUES :  typekey.PersonRelationType[]) : java.lang.Boolean {
      return VALUE.hasCategory(claimPolicyType)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_BasicInfoScreen.WC.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return ((Claim.maincontact == Claim.reporter and Claim.MainContactType == Claim.ReportedByType) || (Claim.maincontact == null and Claim.MainContactType == null))
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_BasicInfoScreen.WC.pcf: line 21, column 26
    function initialValue_1 () : PolicyType {
      return Claim.Policy.PolicyType
    }
    
    // 'onChange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 63, column 274
    function onChange_16 () : void {
      if (Claim.reporter == Claim.Insured) Claim.ReportedByType = PersonRelationType.TC_SELF else Claim.ReportedByType = null; if (maincontactSamePerson) {Claim.maincontact = (Claim.reporter as Person);  Claim.MainContactType = Claim.ReportedByType;}
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_BasicInfoScreen.WC.pcf: line 74, column 104
    function onChange_29 () : void {
      if (maincontactSamePerson) {Claim.MainContactType = Claim.ReportedByType;}
    }
    
    // 'onChange' attribute on PostOnChange at FNOLWizard_BasicInfoScreen.WC.pcf: line 88, column 217
    function onChange_35 () : void {
      if (maincontactSamePerson) {Claim.maincontact = (Claim.reporter as Person);  Claim.MainContactType = Claim.ReportedByType;} else {Claim.maincontact = null;  Claim.MainContactType = null;}
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_19 (PickedValue :  Contact) : void {
      var contactType = entity.Person.Type; var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_49 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.maincontact); var result = eval("Claim.maincontact = Claim.resolveContact(Claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_79 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.claimant); var result = eval("Claim.claimant = Claim.resolveContact(Claim.claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'validationExpression' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function validationExpression_76 () : java.lang.Object {
      return !Claim.claimant.DisplayName.HasContent ? DisplayKey.get("NVV.Claim.SubView.NewClaimLossDetailsWorkersComp.Claim.Claimant.Picker.ValidationError") : null
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_23 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function valueRange_5 () : java.lang.Object {
      return Claim.PolicyProperties
    }
    
    // 'value' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function valueRoot_4 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 131, column 45
    function valueRoot_95 () : java.lang.Object {
      return Claim.claimant
    }
    
    // 'value' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function value_2 () : entity.PolicyLocation {
      return Claim.LocationCode
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_20 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_ReportedByType_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 72, column 54
    function value_30 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on BooleanRadioInput (id=MainContactChoice_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 86, column 45
    function value_36 () : java.lang.Boolean {
      return maincontactSamePerson
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_50 () : entity.Person {
      return Claim.maincontact
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_MainContactType_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 107, column 49
    function value_63 () : typekey.PersonRelationType {
      return Claim.MainContactType
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_80 () : entity.Person {
      return Claim.claimant
    }
    
    // 'value' attribute on PrivacyInput (id=Claimant_TaxNumber_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 131, column 45
    function value_93 () : java.lang.String {
      return Claim.claimant.TaxID
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function verifyValueRangeIsAllowedType_6 ($$arg :  entity.PolicyLocation[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function verifyValueRangeIsAllowedType_6 ($$arg :  gw.api.database.IQueryBeanResult<entity.PolicyLocation>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function verifyValueRangeIsAllowedType_6 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_84 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_84 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_84 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_25 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_55 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Claim_LocationCode_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 40, column 50
    function verifyValueRange_7 () : void {
      var __valueRangeArg = Claim.PolicyProperties
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_6(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_85 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_84(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Name_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 99, column 49
    function verifyValueType_61 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Claimant_Name_Input) at FNOLWizard_BasicInfoScreen.WC.pcf: line 122, column 41
    function verifyValueType_91 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_12 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(entity.Person.Type, Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_42 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_46 () : java.lang.Boolean {
      return !maincontactSamePerson
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_72 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.claimant), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_9 () : java.lang.Boolean {
      return perm.Contact.createlocal
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
    
    property get claimPolicyType () : PolicyType {
      return getVariableValue("claimPolicyType", 0) as PolicyType
    }
    
    property set claimPolicyType ($arg :  PolicyType) {
      setVariableValue("claimPolicyType", 0, $arg)
    }
    
    property get contact () : Contact {
      return getVariableValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get maincontactSamePerson () : boolean {
      return getVariableValue("maincontactSamePerson", 0) as java.lang.Boolean
    }
    
    property set maincontactSamePerson ($arg :  boolean) {
      setVariableValue("maincontactSamePerson", 0, $arg)
    }
    
    
  }
  
  
}