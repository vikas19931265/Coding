package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotContactEFT600LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotContactEFT600LVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotContactEFT600LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotContactEFT600LVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 24, column 40
    function sortValue_0 (EFTRecord :  dynamic.Dynamic) : java.lang.Object {
      return EFTRecord.AccountName
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 29, column 40
    function sortValue_1 (EFTRecord :  dynamic.Dynamic) : java.lang.Object {
      return EFTRecord.BankName
    }
    
    // 'value' attribute on TextCell (id=BankAccountType_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 34, column 40
    function sortValue_2 (EFTRecord :  dynamic.Dynamic) : java.lang.Object {
      return EFTRecord.BankAccountType
    }
    
    // 'value' attribute on PrivacyCell (id=BankAccountNumber_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 40, column 40
    function sortValue_3 (EFTRecord :  dynamic.Dynamic) : java.lang.Object {
      return EFTRecord.BankAccountNumber
    }
    
    // 'value' attribute on TextCell (id=BankRoutingNumber_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 46, column 40
    function sortValue_4 (EFTRecord :  dynamic.Dynamic) : java.lang.Object {
      return EFTRecord.BankRoutingNumber
    }
    
    // 'value' attribute on TextCell (id=IsPrimary_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 51, column 40
    function sortValue_5 (EFTRecord :  dynamic.Dynamic) : java.lang.Object {
      return EFTRecord.IsPrimary
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotContactEFT600LV.pcf: line 18, column 35
    function value_25 () : dynamic.Dynamic {
      return Contact.EFTRecords
    }
    
    property get Contact () : dynamic.Dynamic {
      return getRequireValue("Contact", 0) as dynamic.Dynamic
    }
    
    property set Contact ($arg :  dynamic.Dynamic) {
      setRequireValue("Contact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotContactEFT600LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotContactEFT600LVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'encryptionExpression' attribute on PrivacyCell (id=BankAccountNumber_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 40, column 40
    function encryptionExpression_17 (VALUE :  dynamic.Dynamic) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskTaxId(VALUE as String)
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 24, column 40
    function valueRoot_7 () : java.lang.Object {
      return EFTRecord
    }
    
    // 'value' attribute on TextCell (id=BankAccountType_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 34, column 40
    function value_12 () : dynamic.Dynamic {
      return EFTRecord.BankAccountType
    }
    
    // 'value' attribute on PrivacyCell (id=BankAccountNumber_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 40, column 40
    function value_15 () : dynamic.Dynamic {
      return EFTRecord.BankAccountNumber
    }
    
    // 'value' attribute on TextCell (id=BankRoutingNumber_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 46, column 40
    function value_19 () : dynamic.Dynamic {
      return EFTRecord.BankRoutingNumber
    }
    
    // 'value' attribute on TextCell (id=IsPrimary_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 51, column 40
    function value_22 () : dynamic.Dynamic {
      return EFTRecord.IsPrimary
    }
    
    // 'value' attribute on TextCell (id=AccountName_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 24, column 40
    function value_6 () : dynamic.Dynamic {
      return EFTRecord.AccountName
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at ClaimSnapshotContactEFT600LV.pcf: line 29, column 40
    function value_9 () : dynamic.Dynamic {
      return EFTRecord.BankName
    }
    
    property get EFTRecord () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}