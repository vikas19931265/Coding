package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/AddressBookAdditionalInfoInputSet.Adjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookAdditionalInfoInputSet_AdjudicatorExpressions {
  @javax.annotation.Generated("config/web/pcf/addressbook/AddressBookAdditionalInfoInputSet.Adjudicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookAdditionalInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionEnabled' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 10, column 154
    function actionEnabled_28 () : java.lang.Boolean {
      return (contact as Adjudicator).Employer != null
    }
    
    // 'action' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 12, column 225
    function action_20 () : void {
      AddressBookPickerPopup.push(statictypeof ((contact as Adjudicator).Employer))
    }
    
    // 'action' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 14, column 151
    function action_22 () : void {
      (contact as Adjudicator).Employer = null
    }
    
    // 'action' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 10, column 154
    function action_23 () : void {
      AddressBookContactDetailPopup.push(externalContactSource.wrap((contact as Adjudicator).Employer),allowEditContact)
    }
    
    // 'action' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 12, column 225
    function action_dest_21 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof ((contact as Adjudicator).Employer))
    }
    
    // 'action' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 10, column 154
    function action_dest_24 () : pcf.api.Destination {
      return pcf.AddressBookContactDetailPopup.createDestination(externalContactSource.wrap((contact as Adjudicator).Employer),allowEditContact)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 21, column 60
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Adjudicator).AdjudicatorLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 40, column 65
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.PreferredCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 10, column 154
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Adjudicator).Employer = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicativeDomain_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 27, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Adjudicator).AdjudicativeDomain = (__VALUE_TO_SET as typekey.AdjudicativeDomain)
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 33, column 47
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      (contact as Adjudicator).TaxID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=TaxID_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 33, column 47
    function encryptionExpression_11 (VALUE :  java.lang.String) : java.lang.String {
      return contact.maskTaxId(VALUE)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 40, column 65
    function valueRoot_16 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 21, column 60
    function valueRoot_2 () : java.lang.Object {
      return (contact as Adjudicator)
    }
    
    // 'value' attribute on TextInput (id=AdjudicatorLicense_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 21, column 60
    function value_0 () : java.lang.String {
      return (contact as Adjudicator).AdjudicatorLicense
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 40, column 65
    function value_14 () : typekey.Currency {
      return contact.PreferredCurrency
    }
    
    // 'value' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 10, column 154
    function value_25 () : entity.Company {
      return (contact as Adjudicator).Employer
    }
    
    // 'value' attribute on TypeKeyInput (id=AdjudicativeDomain_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 27, column 47
    function value_4 () : typekey.AdjudicativeDomain {
      return (contact as Adjudicator).AdjudicativeDomain
    }
    
    // 'value' attribute on PrivacyInput (id=TaxID_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 33, column 47
    function value_8 () : java.lang.String {
      return (contact as Adjudicator).TaxID
    }
    
    // 'valueType' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 48, column 35
    function verifyValueType_32 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at AddressBookAdditionalInfoInputSet.Adjudicator.pcf: line 40, column 65
    function visible_13 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on AddressBookContactInput (id=Organization_Input) at AddressBookContactWidget.xml: line 12, column 225
    function visible_19 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof ((contact as Adjudicator).Employer))" != "" && true
    }
    
    property get allowEditContact () : boolean {
      return getRequireValue("allowEditContact", 0) as java.lang.Boolean
    }
    
    property set allowEditContact ($arg :  boolean) {
      setRequireValue("allowEditContact", 0, $arg)
    }
    
    property get contact () : Person {
      return getRequireValue("contact", 0) as Person
    }
    
    property set contact ($arg :  Person) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get externalContactSource () : gw.api.contact.ExternalContactSource {
      return getRequireValue("externalContactSource", 0) as gw.api.contact.ExternalContactSource
    }
    
    property set externalContactSource ($arg :  gw.api.contact.ExternalContactSource) {
      setRequireValue("externalContactSource", 0, $arg)
    }
    
    
  }
  
  
}