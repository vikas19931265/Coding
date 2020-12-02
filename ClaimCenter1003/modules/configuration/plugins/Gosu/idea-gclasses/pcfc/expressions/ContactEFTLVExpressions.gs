package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/contacts/ContactEFTLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactEFTLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/contacts/ContactEFTLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactEFTLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at ContactEFTLV.pcf: line 26, column 42
    function sortValue_0 (EFTRecord :  entity.EFTData) : java.lang.Object {
      return EFTRecord.AccountName
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at ContactEFTLV.pcf: line 32, column 39
    function sortValue_1 (EFTRecord :  entity.EFTData) : java.lang.Object {
      return EFTRecord.BankName
    }
    
    // 'value' attribute on TypeKeyCell (id=BankAccountType_Cell) at ContactEFTLV.pcf: line 39, column 48
    function sortValue_2 (EFTRecord :  entity.EFTData) : java.lang.Object {
      return EFTRecord.BankAccountType
    }
    
    // 'value' attribute on PrivacyCell (id=BankAccountNumber_Cell) at ContactEFTLV.pcf: line 46, column 48
    function sortValue_3 (EFTRecord :  entity.EFTData) : java.lang.Object {
      return EFTRecord.BankAccountNumber
    }
    
    // 'value' attribute on TextCell (id=BankRoutingNumber_Cell) at ContactEFTLV.pcf: line 53, column 48
    function sortValue_4 (EFTRecord :  entity.EFTData) : java.lang.Object {
      return EFTRecord.BankRoutingNumber
    }
    
    // 'value' attribute on BooleanRadioCell (id=IsPrimary_Cell) at ContactEFTLV.pcf: line 59, column 40
    function sortValue_5 (EFTRecord :  entity.EFTData) : java.lang.Object {
      return EFTRecord.IsPrimary
    }
    
    // 'toAdd' attribute on RowIterator at ContactEFTLV.pcf: line 20, column 36
    function toAdd_33 (EFTRecord :  entity.EFTData) : void {
      Contact.addToEFTRecords( EFTRecord )
    }
    
    // 'toRemove' attribute on RowIterator at ContactEFTLV.pcf: line 20, column 36
    function toRemove_34 (EFTRecord :  entity.EFTData) : void {
      Contact.removeFromEFTRecords( EFTRecord )
    }
    
    // 'value' attribute on RowIterator at ContactEFTLV.pcf: line 20, column 36
    function value_35 () : entity.EFTData[] {
      return Contact.EFTRecords
    }
    
    property get Contact () : Contact {
      return getRequireValue("Contact", 0) as Contact
    }
    
    property set Contact ($arg :  Contact) {
      setRequireValue("Contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/contacts/ContactEFTLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ContactEFTLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at ContactEFTLV.pcf: line 32, column 39
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      EFTRecord.BankName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=BankAccountType_Cell) at ContactEFTLV.pcf: line 39, column 48
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      EFTRecord.BankAccountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on PrivacyCell (id=BankAccountNumber_Cell) at ContactEFTLV.pcf: line 46, column 48
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      EFTRecord.BankAccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=BankRoutingNumber_Cell) at ContactEFTLV.pcf: line 53, column 48
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      EFTRecord.BankRoutingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioCell (id=IsPrimary_Cell) at ContactEFTLV.pcf: line 59, column 40
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      EFTRecord.IsPrimary = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at ContactEFTLV.pcf: line 26, column 42
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      EFTRecord.AccountName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyCell (id=BankAccountNumber_Cell) at ContactEFTLV.pcf: line 46, column 48
    function encryptionExpression_21 (VALUE :  java.lang.String) : java.lang.String {
      return EFTRecord.maskBankAccountNumber(VALUE)
    }
    
    // 'validationExpression' attribute on BooleanRadioCell (id=IsPrimary_Cell) at ContactEFTLV.pcf: line 59, column 40
    function validationExpression_27 () : java.lang.Object {
      return Contact.EFTRecords.countWhere( \ e -> e.IsPrimary == true ) > 1 ? DisplayKey.get("Web.Contact.EFT.Primary.Validation") : null
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at ContactEFTLV.pcf: line 26, column 42
    function valueRoot_8 () : java.lang.Object {
      return EFTRecord
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at ContactEFTLV.pcf: line 32, column 39
    function value_10 () : java.lang.String {
      return EFTRecord.BankName
    }
    
    // 'value' attribute on TypeKeyCell (id=BankAccountType_Cell) at ContactEFTLV.pcf: line 39, column 48
    function value_14 () : typekey.BankAccountType {
      return EFTRecord.BankAccountType
    }
    
    // 'value' attribute on PrivacyCell (id=BankAccountNumber_Cell) at ContactEFTLV.pcf: line 46, column 48
    function value_18 () : java.lang.String {
      return EFTRecord.BankAccountNumber
    }
    
    // 'value' attribute on TextCell (id=BankRoutingNumber_Cell) at ContactEFTLV.pcf: line 53, column 48
    function value_23 () : java.lang.String {
      return EFTRecord.BankRoutingNumber
    }
    
    // 'value' attribute on BooleanRadioCell (id=IsPrimary_Cell) at ContactEFTLV.pcf: line 59, column 40
    function value_28 () : java.lang.Boolean {
      return EFTRecord.IsPrimary
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at ContactEFTLV.pcf: line 26, column 42
    function value_6 () : java.lang.String {
      return EFTRecord.AccountName
    }
    
    property get EFTRecord () : entity.EFTData {
      return getIteratedValue(1) as entity.EFTData
    }
    
    
  }
  
  
}