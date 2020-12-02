package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionTrackingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionTrackingInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/TransactionTrackingInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionTrackingInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_10 () : void {
      ClaimContactDetailPopup.push(Transaction.TransactionSet.CreateUser.Contact, Transaction.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_7 () : void {
      AddressBookPickerPopup.push(statictypeof (Transaction.TransactionSet.CreateUser.Contact), Transaction.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_9 () : void {
      if (Transaction.TransactionSet.CreateUser.Contact != null) { ClaimContactDetailPopup.push(Transaction.TransactionSet.CreateUser.Contact, Transaction.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Transaction.TransactionSet.CreateUser.Contact, Transaction.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_8 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Transaction.TransactionSet.CreateUser.Contact), Transaction.Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Transaction.TransactionSet.CreateUser.Contact), null, Transaction.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_5 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Transaction.TransactionSet.CreateUser.Contact), null, Transaction.Claim)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_12 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Transaction.TransactionSet.CreateUser.Contact); var result = eval("Transaction.TransactionSet.CreateUser.Contact = Transaction.Claim.resolveContact(Transaction.TransactionSet.CreateUser.Contact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_15 () : java.lang.Object {
      return Transaction.Claim.RelatedUserContactArray
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at TransactionTrackingInputSet.pcf: line 17, column 46
    function valueRoot_1 () : java.lang.Object {
      return Transaction
    }
    
    // 'value' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_14 () : java.lang.Object {
      return Transaction.TransactionSet.CreateUser
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at TransactionTrackingInputSet.pcf: line 30, column 45
    function valueRoot_24 () : java.lang.Object {
      return Transaction.TransactionSet
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at TransactionTrackingInputSet.pcf: line 17, column 46
    function value_0 () : typekey.TransactionStatus {
      return Transaction.Status
    }
    
    // 'value' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_13 () : entity.UserContact {
      return Transaction.TransactionSet.CreateUser.Contact
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at TransactionTrackingInputSet.pcf: line 30, column 45
    function value_23 () : CreatedVia {
      return Transaction.TransactionSet.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at TransactionTrackingInputSet.pcf: line 34, column 39
    function value_28 () : java.util.Date {
      return Transaction.CreateTime
    }
    
    // 'value' attribute on DateInput (id=BookingDate_Input) at TransactionTrackingInputSet.pcf: line 38, column 40
    function value_31 () : java.util.Date {
      return Transaction.BookingDate
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.UserContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.UserContact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_17 () : void {
      var __valueRangeArg = Transaction.Claim.RelatedUserContactArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=EnteredBy_Input) at TransactionTrackingInputSet.pcf: line 24, column 39
    function verifyValueType_21 () : void {
      var __valueTypeArg : entity.UserContact
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at TransactionTrackingInputSet.pcf: line 30, column 45
    function verifyValueType_27 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyInput (id=CreatedVia_Input) at TransactionTrackingInputSet.pcf: line 30, column 45
    function visible_22 () : java.lang.Boolean {
      return Transaction typeis Reserve
    }
    
    // 'visible' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_3 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=EnteredBy_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_6 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Transaction.TransactionSet.CreateUser.Contact), Transaction.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Transaction () : Transaction {
      return getRequireValue("Transaction", 0) as Transaction
    }
    
    property set Transaction ($arg :  Transaction) {
      setRequireValue("Transaction", 0, $arg)
    }
    
    
  }
  
  
}