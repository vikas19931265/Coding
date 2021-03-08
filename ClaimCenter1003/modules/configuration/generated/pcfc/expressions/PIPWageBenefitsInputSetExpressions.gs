package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/shared/exposures/PIPWageBenefitsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PIPWageBenefitsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/shared/exposures/PIPWageBenefitsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PIPWageBenefitsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_10 () : void {
      if (Exposure.employer != null) { ClaimContactDetailPopup.push(Exposure.employer, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_12 () : void {
      ClaimContactDetailPopup.push(Exposure.employer, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_8 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.employer), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_13 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.employer, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_9 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.employer), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_5 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.employer), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_6 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.employer), null, Exposure.Claim)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WageBenefitCollected_Question_Input) at PIPWageBenefitsInputSet.pcf: line 16, column 36
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.WageBenefit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.employer = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumHoursWorkedPerDay_Input) at PIPWageBenefitsInputSet.pcf: line 61, column 48
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.NewEmpData.NumHoursWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumDaysWorkedPerWeek_Input) at PIPWageBenefitsInputSet.pcf: line 68, column 48
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.NewEmpData.NumDaysWorked = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_WageAmount_Input) at PIPWageBenefitsInputSet.pcf: line 74, column 48
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.NewEmpData.WageAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_PayPeriod_Input) at PIPWageBenefitsInputSet.pcf: line 81, column 48
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.NewEmpData.PayPeriod = (__VALUE_TO_SET as typekey.PayPeriodType)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_14 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.employer); var result = eval("Exposure.employer = Exposure.Claim.resolveContact(Exposure.employer) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at PIPWageBenefitsInputSet.pcf: line 35, column 51
    function reflectionValue_27 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at PIPWageBenefitsInputSet.pcf: line 44, column 51
    function reflectionValue_34 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on Reflect at PIPWageBenefitsInputSet.pcf: line 53, column 42
    function reflectionValue_41 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_18 () : java.lang.Object {
      return Exposure.Claim.RelatedCompanyArray
    }
    
    // 'value' attribute on BooleanRadioInput (id=WageBenefitCollected_Question_Input) at PIPWageBenefitsInputSet.pcf: line 16, column 36
    function valueRoot_2 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Employer_PrimaryAddress_Input) at PIPWageBenefitsInputSet.pcf: line 32, column 47
    function valueRoot_31 () : java.lang.Object {
      return Exposure.employer
    }
    
    // 'value' attribute on TextInput (id=Employer_PrimaryContact_Input) at PIPWageBenefitsInputSet.pcf: line 41, column 47
    function valueRoot_38 () : java.lang.Object {
      return Exposure.employer.PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumHoursWorkedPerDay_Input) at PIPWageBenefitsInputSet.pcf: line 61, column 48
    function valueRoot_51 () : java.lang.Object {
      return Exposure.NewEmpData
    }
    
    // 'value' attribute on BooleanRadioInput (id=WageBenefitCollected_Question_Input) at PIPWageBenefitsInputSet.pcf: line 16, column 36
    function value_0 () : java.lang.Boolean {
      return Exposure.WageBenefit
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_15 () : entity.Company {
      return Exposure.employer
    }
    
    // 'value' attribute on TextInput (id=Employer_PrimaryAddress_Input) at PIPWageBenefitsInputSet.pcf: line 32, column 47
    function value_30 () : java.lang.String {
      return Exposure.employer.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Employer_PrimaryContact_Input) at PIPWageBenefitsInputSet.pcf: line 41, column 47
    function value_37 () : java.lang.String {
      return Exposure.employer.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Employer_PrimaryPhone_Input) at PIPWageBenefitsInputSet.pcf: line 50, column 47
    function value_44 () : java.lang.String {
      return Exposure.employer.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumHoursWorkedPerDay_Input) at PIPWageBenefitsInputSet.pcf: line 61, column 48
    function value_49 () : java.math.BigDecimal {
      return Exposure.NewEmpData.NumHoursWorked
    }
    
    // 'value' attribute on TextInput (id=EmploymentData_NumDaysWorkedPerWeek_Input) at PIPWageBenefitsInputSet.pcf: line 68, column 48
    function value_55 () : java.math.BigDecimal {
      return Exposure.NewEmpData.NumDaysWorked
    }
    
    // 'value' attribute on CurrencyInput (id=EmploymentData_WageAmount_Input) at PIPWageBenefitsInputSet.pcf: line 74, column 48
    function value_61 () : gw.api.financials.CurrencyAmount {
      return Exposure.NewEmpData.WageAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=EmploymentData_PayPeriod_Input) at PIPWageBenefitsInputSet.pcf: line 81, column 48
    function value_67 () : typekey.PayPeriodType {
      return Exposure.NewEmpData.PayPeriod
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_20 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at PIPWageBenefitsInputSet.pcf: line 27, column 48
    function verifyValueType_26 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_11 () : java.lang.Boolean {
      return  Exposure.WageBenefit == true
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_4 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Employer_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_7 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.employer), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}