package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPIPVocBenefitsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimPIPVocBenefitsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPIPVocBenefitsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimPIPVocBenefitsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_14 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.casemgmtco), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_16 () : void {
      if (Exposure.casemgmtco != null) { ClaimContactDetailPopup.push(Exposure.casemgmtco, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_17 () : void {
      ClaimContactDetailPopup.push(Exposure.casemgmtco, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_44 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.casemgr), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_46 () : void {
      if (Exposure.casemgr != null) { ClaimContactDetailPopup.push(Exposure.casemgr, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_47 () : void {
      ClaimContactDetailPopup.push(Exposure.casemgr, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_15 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.casemgmtco), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_18 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.casemgmtco, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_45 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.casemgr), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_48 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.casemgr, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_11 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.casemgmtco), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_41 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.casemgr), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_12 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.casemgmtco), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_42 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.casemgr), null, Exposure.Claim)
    }
    
    // 'value' attribute on DateInput (id=LostWagesBenefits_BenefitsBeginDate_Input) at NewClaimPIPVocBenefitsDV.pcf: line 18, column 60
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.PIPVocBenefits.BenefitsBeginDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.casemgmtco = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.casemgr = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on DateInput (id=LostWagesBenefits_BenefitsEndDate_Input) at NewClaimPIPVocBenefitsDV.pcf: line 24, column 58
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.PIPVocBenefits.BenefitsEndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at NewClaimPIPVocBenefitsDV.pcf: line 69, column 54
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.PIPVocBenefits.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_19 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.casemgmtco); var result = eval("Exposure.casemgmtco = Exposure.Claim.resolveContact(Exposure.casemgmtco) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_49 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.casemgr); var result = eval("Exposure.casemgr = Exposure.Claim.resolveContact(Exposure.casemgr) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at NewClaimPIPVocBenefitsDV.pcf: line 39, column 53
    function reflectionValue_30 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at NewClaimPIPVocBenefitsDV.pcf: line 47, column 44
    function reflectionValue_35 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at NewClaimPIPVocBenefitsDV.pcf: line 63, column 44
    function reflectionValue_60 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'validationExpression' attribute on DateInput (id=LostWagesBenefits_BenefitsEndDate_Input) at NewClaimPIPVocBenefitsDV.pcf: line 24, column 58
    function validationExpression_4 () : java.lang.Object {
      return !(Exposure.PIPVocBenefits.BenefitsBeginDate > Exposure.PIPVocBenefits.BenefitsEndDate) ? null : DisplayKey.get("JSP.PIPDetail.PIP.Date.ValidationError")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_23 () : java.lang.Object {
      return Exposure.Claim.RelatedCompanyArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_53 () : java.lang.Object {
      return Exposure.Claim.RelatedPersonArray
    }
    
    // 'value' attribute on DateInput (id=LostWagesBenefits_BenefitsBeginDate_Input) at NewClaimPIPVocBenefitsDV.pcf: line 18, column 60
    function valueRoot_2 () : java.lang.Object {
      return Exposure.PIPVocBenefits
    }
    
    // 'value' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_22 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=CaseManagementCompany_PrimaryAddress_Input) at NewClaimPIPVocBenefitsDV.pcf: line 36, column 64
    function valueRoot_33 () : java.lang.Object {
      return Exposure.casemgmtco
    }
    
    // 'value' attribute on TextInput (id=CaseMgr_PrimaryPhone_Input) at NewClaimPIPVocBenefitsDV.pcf: line 60, column 52
    function valueRoot_63 () : java.lang.Object {
      return Exposure.casemgr
    }
    
    // 'value' attribute on DateInput (id=LostWagesBenefits_BenefitsBeginDate_Input) at NewClaimPIPVocBenefitsDV.pcf: line 18, column 60
    function value_0 () : java.util.Date {
      return Exposure.PIPVocBenefits.BenefitsBeginDate
    }
    
    // 'value' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_20 () : entity.Company {
      return Exposure.casemgmtco
    }
    
    // 'value' attribute on TextInput (id=CaseManagementCompany_PrimaryAddress_Input) at NewClaimPIPVocBenefitsDV.pcf: line 36, column 64
    function value_32 () : java.lang.String {
      return Exposure.casemgmtco.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=CaseManagementCompany_PrimaryPhone_Input) at NewClaimPIPVocBenefitsDV.pcf: line 44, column 55
    function value_37 () : java.lang.String {
      return Exposure.casemgmtco.PrimaryPhoneValue
    }
    
    // 'value' attribute on DateInput (id=LostWagesBenefits_BenefitsEndDate_Input) at NewClaimPIPVocBenefitsDV.pcf: line 24, column 58
    function value_5 () : java.util.Date {
      return Exposure.PIPVocBenefits.BenefitsEndDate
    }
    
    // 'value' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_50 () : entity.Person {
      return Exposure.casemgr
    }
    
    // 'value' attribute on TextInput (id=CaseMgr_PrimaryPhone_Input) at NewClaimPIPVocBenefitsDV.pcf: line 60, column 52
    function value_62 () : java.lang.String {
      return Exposure.casemgr.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at NewClaimPIPVocBenefitsDV.pcf: line 69, column 54
    function value_65 () : java.lang.String {
      return Exposure.PIPVocBenefits.Description
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_24 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_24 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_54 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_25 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_55 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_54(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at NewClaimPIPVocBenefitsDV.pcf: line 32, column 37
    function verifyValueType_29 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at NewClaimPIPVocBenefitsDV.pcf: line 56, column 36
    function verifyValueType_59 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_10 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManagementCompany_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_13 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.casemgmtco), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=LostWagesBenefits_CaseManager_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_43 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.casemgr), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}