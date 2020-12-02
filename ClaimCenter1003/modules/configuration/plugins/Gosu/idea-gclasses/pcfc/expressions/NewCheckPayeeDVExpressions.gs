package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/check/NewCheckPayeeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewCheckPayeeDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/check/NewCheckPayeeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewCheckPayeeDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_51 () : void {
      NewCheckWizardAddressBookPickerPopup.push(statictypeof(CheckPayee.Payee), Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_53 () : void {
      if (CheckPayee.Payee != null) { ClaimContactDetailPopup.push(CheckPayee.Payee, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_55 () : void {
      ClaimContactDetailPopup.push(CheckPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_52 () : pcf.api.Destination {
      return pcf.NewCheckWizardAddressBookPickerPopup.createDestination(statictypeof(CheckPayee.Payee), Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_56 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(CheckPayee.Payee, Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_48 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (CheckPayee.Payee), null, Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_49 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (CheckPayee.Payee), null, Check.Claim)
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckPayeeDV.pcf: line 102, column 50
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'onChange' attribute on ClaimContactCell (id=PayeeName_Cell) at NewCheckPayeeDV.pcf: line 93, column 70
    function onChange_54 () : void {
      Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_57 (PickedValue :  Contact) : void {
      var contactType = statictypeof (CheckPayee.Payee); var result = eval("CheckPayee.Payee = Check.Claim.resolveContact(CheckPayee.Payee) as " + contactType.Name + ";return null;"); Check.handleOnPickForPayee(CheckPayee);
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at NewCheckPayeeDV.pcf: line 91, column 58
    function onPick_64 (PickedValue :  java.lang.Object) : void {
      Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckPayeeDV.pcf: line 102, column 50
    function validationExpression_68 () : java.lang.Object {
      return CheckPayee.PayeeType == TC_CLAIMANT && !CheckPayee.ClaimContact.isClaimant() ? DisplayKey.get("Java.NewPayment.Error.PayeeIsNotClaimant") : null
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_61 () : java.lang.Object {
      return Check.Claim.PayeeCandidates
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_60 () : java.lang.Object {
      return CheckPayee
    }
    
    // 'value' attribute on TypeKeyCell (id=Payee_Currency_Cell) at NewCheckPayeeDV.pcf: line 109, column 75
    function valueRoot_75 () : java.lang.Object {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_58 () : entity.Contact {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckPayeeDV.pcf: line 102, column 50
    function value_69 () : typekey.ContactRole {
      return CheckPayee.PayeeType
    }
    
    // 'value' attribute on TypeKeyCell (id=Payee_Currency_Cell) at NewCheckPayeeDV.pcf: line 109, column 75
    function value_74 () : typekey.Currency {
      return CheckPayee.Payee.PreferredCurrency
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_63 () : void {
      var __valueRangeArg = Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_62(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_47 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_50 () : java.lang.Boolean {
      return "NewCheckWizardAddressBookPickerPopup.push(statictypeof(CheckPayee.Payee), Check.Claim)" != "" && true
    }
    
    // 'visible' attribute on TypeKeyCell (id=Payee_Currency_Cell) at NewCheckPayeeDV.pcf: line 109, column 75
    function visible_76 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    property get CheckPayee () : entity.CheckPayee {
      return getIteratedValue(1) as entity.CheckPayee
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/check/NewCheckPayeeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewCheckPayeeDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_11 () : void {
      ClaimContactDetailPopup.push(Check.FirstPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ButtonInput (id=AddJointPayees_Input) at NewCheckPayeeDV.pcf: line 60, column 49
    function action_41 () : void {
      Check.addNewPayee()
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_6 () : void {
      NewCheckWizardAddressBookPickerPopup.push(statictypeof(Check.FirstPayee.Payee), Check.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_8 () : void {
      if (Check.FirstPayee.Payee != null) { ClaimContactDetailPopup.push(Check.FirstPayee.Payee, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Check.FirstPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_7 () : pcf.api.Destination {
      return pcf.NewCheckWizardAddressBookPickerPopup.createDestination(statictypeof(Check.FirstPayee.Payee), Check.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at NewCheckPayeeDV.pcf: line 241, column 86
    function def_onEnter_170 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Check.CheckAddressOwner)
    }
    
    // 'def' attribute on InputSetRef at NewCheckPayeeDV.pcf: line 260, column 57
    function def_onEnter_177 (def :  pcf.ServiceRequestInvoiceInputSet_multiple) : void {
      def.onEnter(Wizard, true)
    }
    
    // 'def' attribute on InputSetRef at NewCheckPayeeDV.pcf: line 260, column 57
    function def_onEnter_179 (def :  pcf.ServiceRequestInvoiceInputSet_single) : void {
      def.onEnter(Wizard, true)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_3 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Check.FirstPayee.Payee), null, Check.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at NewCheckPayeeDV.pcf: line 241, column 86
    function def_refreshVariables_171 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Check.CheckAddressOwner)
    }
    
    // 'def' attribute on InputSetRef at NewCheckPayeeDV.pcf: line 260, column 57
    function def_refreshVariables_178 (def :  pcf.ServiceRequestInvoiceInputSet_multiple) : void {
      def.refreshVariables(Wizard, true)
    }
    
    // 'def' attribute on InputSetRef at NewCheckPayeeDV.pcf: line 260, column 57
    function def_refreshVariables_180 (def :  pcf.ServiceRequestInvoiceInputSet_single) : void {
      def.refreshVariables(Wizard, true)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Check.FirstPayee.Payee), null, Check.Claim)
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at NewCheckPayeeDV.pcf: line 145, column 39
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.EFTData = (__VALUE_TO_SET as entity.EFTData)
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at NewCheckPayeeDV.pcf: line 161, column 34
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckPayeeDV.pcf: line 173, column 47
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankAccountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at NewCheckPayeeDV.pcf: line 184, column 43
    function defaultSetter_130 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankAccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at NewCheckPayeeDV.pcf: line 194, column 43
    function defaultSetter_137 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankRoutingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=DeliveryMethod_Input) at NewCheckPayeeDV.pcf: line 209, column 64
    function defaultSetter_144 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.DeliveryMethod = (__VALUE_TO_SET as typekey.DeliveryMethod)
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.FirstPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=MailToContact_Input) at NewCheckPayeeDV.pcf: line 216, column 64
    function defaultSetter_150 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.MailTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at NewCheckPayeeDV.pcf: line 234, column 98
    function defaultSetter_166 (__VALUE_TO_SET :  java.lang.Object) : void {
      showAddressFields = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Reportability_Input) at NewCheckPayeeDV.pcf: line 250, column 47
    function defaultSetter_173 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.Reportability = (__VALUE_TO_SET as typekey.ReportabilityType)
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckPayeeDV.pcf: line 49, column 48
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.FirstPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.PaymentMethod = (__VALUE_TO_SET as typekey.PaymentMethod)
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at NewCheckPayeeDV.pcf: line 135, column 64
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=BankAccountNumber_Input) at NewCheckPayeeDV.pcf: line 184, column 43
    function encryptionExpression_132 (VALUE :  java.lang.String) : java.lang.String {
      return Check.maskBankAccountNumber(VALUE)
    }
    
    // 'filter' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function filter_87 (VALUE :  typekey.PaymentMethod, VALUES :  typekey.PaymentMethod[]) : java.lang.Boolean {
      return VALUE !=  PaymentMethod.TC_MANUAL
    }
    
    // 'initialValue' attribute on Variable at NewCheckPayeeDV.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return Check.ShowAddressFields
    }
    
    // 'mode' attribute on InputSetRef at NewCheckPayeeDV.pcf: line 260, column 57
    function mode_181 () : java.lang.Object {
      return Wizard.Check.ServiceRequestInvoices.Count == 1 ? "single" : "multiple"
    }
    
    // 'onChange' attribute on PostOnChange at NewCheckPayeeDV.pcf: line 125, column 56
    function onChange_83 () : void {
      Check.handleOnPickForPayee(null)
    }
    
    // 'onChange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at NewCheckPayeeDV.pcf: line 39, column 126
    function onChange_9 () : void {
      Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_13 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Check.FirstPayee.Payee); var result = eval("Check.FirstPayee.Payee = Check.Claim.resolveContact(Check.FirstPayee.Payee) as " + contactType.Name + ";return null;"); Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at NewCheckPayeeDV.pcf: line 37, column 47
    function onPick_21 (PickedValue :  java.lang.Object) : void {
      Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();
    }
    
    // 'value' attribute on Reflect at NewCheckPayeeDV.pcf: line 155, column 40
    function reflectionValue_106 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.AccountName
    }
    
    // 'value' attribute on Reflect at NewCheckPayeeDV.pcf: line 164, column 37
    function reflectionValue_112 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankName
    }
    
    // 'value' attribute on Reflect at NewCheckPayeeDV.pcf: line 176, column 44
    function reflectionValue_118 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountType
    }
    
    // 'value' attribute on Reflect at NewCheckPayeeDV.pcf: line 187, column 46
    function reflectionValue_127 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountNumber
    }
    
    // 'value' attribute on Reflect at NewCheckPayeeDV.pcf: line 197, column 46
    function reflectionValue_134 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankRoutingNumber
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at NewCheckPayeeDV.pcf: line 91, column 58
    function sortValue_43 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at NewCheckPayeeDV.pcf: line 102, column 50
    function sortValue_44 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.PayeeType
    }
    
    // 'value' attribute on TypeKeyCell (id=Payee_Currency_Cell) at NewCheckPayeeDV.pcf: line 109, column 75
    function sortValue_45 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.Payee.PreferredCurrency
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at NewCheckPayeeDV.pcf: line 80, column 45
    function toCreateAndAdd_78 () : entity.CheckPayee {
      return Check.addNewPayee()
    }
    
    // 'toRemove' attribute on RowIterator at NewCheckPayeeDV.pcf: line 80, column 45
    function toRemove_79 (CheckPayee :  entity.CheckPayee) : void {
      Check.removeFromPayees(CheckPayee); Check.handleOnPickForPayee(null);
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=NewCheckPayeeDVPayeesLV) at NewCheckPayeeDV.pcf: line 73, column 75
    function validationExpression_81 () : java.lang.Object {
      Check.validateCheckPayees(); return null
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckPayeeDV.pcf: line 145, column 39
    function valueRange_102 () : java.lang.Object {
      return Check.FirstPayee.Payee.EFTRecords
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckPayeeDV.pcf: line 173, column 47
    function valueRange_123 () : java.lang.Object {
      return BankAccountType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_17 () : java.lang.Object {
      return Check.Claim.PayeeCandidates
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckPayeeDV.pcf: line 49, column 48
    function valueRange_30 () : java.lang.Object {
      return Check.getAllowedPayeeTypes(Check.FirstPayee.Payee)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function valueRange_88 () : java.lang.Object {
      return PaymentMethod.getTypeKeys( false )
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_16 () : java.lang.Object {
      return Check.FirstPayee
    }
    
    // 'value' attribute on TextInput (id=MailingAddress_Input) at NewCheckPayeeDV.pcf: line 227, column 64
    function valueRoot_161 () : java.lang.Object {
      return Check.CheckAddressOwner
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPayee_Currency_Input) at NewCheckPayeeDV.pcf: line 55, column 106
    function valueRoot_37 () : java.lang.Object {
      return Check.FirstPayee.Payee
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function valueRoot_86 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at NewCheckPayeeDV.pcf: line 161, column 34
    function value_114 () : java.lang.String {
      return Check.BankName
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckPayeeDV.pcf: line 173, column 47
    function value_120 () : typekey.BankAccountType {
      return Check.BankAccountType
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at NewCheckPayeeDV.pcf: line 184, column 43
    function value_129 () : java.lang.String {
      return Check.BankAccountNumber
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at NewCheckPayeeDV.pcf: line 194, column 43
    function value_136 () : java.lang.String {
      return Check.BankRoutingNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_14 () : entity.Contact {
      return Check.FirstPayee.Payee
    }
    
    // 'value' attribute on TypeKeyInput (id=DeliveryMethod_Input) at NewCheckPayeeDV.pcf: line 209, column 64
    function value_143 () : typekey.DeliveryMethod {
      return Check.DeliveryMethod
    }
    
    // 'value' attribute on TextInput (id=MailToContact_Input) at NewCheckPayeeDV.pcf: line 216, column 64
    function value_149 () : java.lang.String {
      return Check.MailTo
    }
    
    // 'value' attribute on TextInput (id=OldMailingAddress_Input) at NewCheckPayeeDV.pcf: line 221, column 99
    function value_155 () : java.lang.String {
      return Check.OldMailToAddress
    }
    
    // 'value' attribute on TextInput (id=MailingAddress_Input) at NewCheckPayeeDV.pcf: line 227, column 64
    function value_160 () : entity.Address {
      return Check.CheckAddressOwner.Address
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at NewCheckPayeeDV.pcf: line 234, column 98
    function value_165 () : java.lang.Boolean {
      return showAddressFields
    }
    
    // 'value' attribute on TypeKeyInput (id=Reportability_Input) at NewCheckPayeeDV.pcf: line 250, column 47
    function value_172 () : typekey.ReportabilityType {
      return Check.Reportability
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckPayeeDV.pcf: line 49, column 48
    function value_27 () : typekey.ContactRole {
      return Check.FirstPayee.PayeeType
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryPayee_Currency_Input) at NewCheckPayeeDV.pcf: line 55, column 106
    function value_36 () : typekey.Currency {
      return Check.FirstPayee.Payee.PreferredCurrency
    }
    
    // 'value' attribute on RowIterator at NewCheckPayeeDV.pcf: line 80, column 45
    function value_80 () : entity.CheckPayee[] {
      return Check.Payees
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function value_84 () : typekey.PaymentMethod {
      return Check.PaymentMethod
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at NewCheckPayeeDV.pcf: line 135, column 64
    function value_94 () : java.lang.String {
      return Check.PayTo
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at NewCheckPayeeDV.pcf: line 145, column 39
    function value_99 () : entity.EFTData {
      return Check.EFTData
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckPayeeDV.pcf: line 145, column 39
    function verifyValueRangeIsAllowedType_103 ($$arg :  entity.EFTData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckPayeeDV.pcf: line 145, column 39
    function verifyValueRangeIsAllowedType_103 ($$arg :  gw.api.database.IQueryBeanResult<entity.EFTData>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckPayeeDV.pcf: line 145, column 39
    function verifyValueRangeIsAllowedType_103 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckPayeeDV.pcf: line 173, column 47
    function verifyValueRangeIsAllowedType_124 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckPayeeDV.pcf: line 173, column 47
    function verifyValueRangeIsAllowedType_124 ($$arg :  typekey.BankAccountType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckPayeeDV.pcf: line 49, column 48
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckPayeeDV.pcf: line 49, column 48
    function verifyValueRangeIsAllowedType_31 ($$arg :  typekey.ContactRole[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function verifyValueRangeIsAllowedType_89 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function verifyValueRangeIsAllowedType_89 ($$arg :  typekey.PaymentMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at NewCheckPayeeDV.pcf: line 145, column 39
    function verifyValueRange_104 () : void {
      var __valueRangeArg = Check.FirstPayee.Payee.EFTRecords
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_103(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at NewCheckPayeeDV.pcf: line 173, column 47
    function verifyValueRange_125 () : void {
      var __valueRangeArg = BankAccountType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_124(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_19 () : void {
      var __valueRangeArg = Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at NewCheckPayeeDV.pcf: line 49, column 48
    function verifyValueRange_32 () : void {
      var __valueRangeArg = Check.getAllowedPayeeTypes(Check.FirstPayee.Payee)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at NewCheckPayeeDV.pcf: line 123, column 43
    function verifyValueRange_90 () : void {
      var __valueRangeArg = PaymentMethod.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_89(__valueRangeArg)
    }
    
    // 'visible' attribute on Label at NewCheckPayeeDV.pcf: line 26, column 48
    function visible_1 () : java.lang.Boolean {
      return Check.Payees.length <= 1
    }
    
    // 'visible' attribute on InputSet (id=EFTDataInputSet) at NewCheckPayeeDV.pcf: line 138, column 63
    function visible_140 () : java.lang.Boolean {
      return Check.PaymentMethod == PaymentMethod.TC_EFT
    }
    
    // 'visible' attribute on TextInput (id=OldMailingAddress_Input) at NewCheckPayeeDV.pcf: line 221, column 99
    function visible_154 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and Check.OldMailToAddress != null
    }
    
    // 'visible' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at NewCheckPayeeDV.pcf: line 234, column 98
    function visible_164 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and Check.FirstPayee.Payee != null
    }
    
    // 'visible' attribute on InputSetRef (id=MailingAddressInputSet) at NewCheckPayeeDV.pcf: line 241, column 86
    function visible_169 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and showAddressFields
    }
    
    // 'visible' attribute on InputSetRef at NewCheckPayeeDV.pcf: line 260, column 57
    function visible_176 () : java.lang.Boolean {
      return Wizard.Check.LinkedToServiceRequests
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_2 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on TypeKeyInput (id=PrimaryPayee_Currency_Input) at NewCheckPayeeDV.pcf: line 55, column 106
    function visible_35 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode() && Check.Payees.length <= 1
    }
    
    // 'visible' attribute on ButtonInput (id=AddJointPayees_Input) at NewCheckPayeeDV.pcf: line 60, column 49
    function visible_40 () : java.lang.Boolean {
      return Check.Payees.length <= 1 
    }
    
    // 'visible' attribute on TypeKeyCell (id=Payee_Currency_Cell) at NewCheckPayeeDV.pcf: line 109, column 75
    function visible_46 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_5 () : java.lang.Boolean {
      return "NewCheckWizardAddressBookPickerPopup.push(statictypeof(Check.FirstPayee.Payee), Check.Claim)" != "" && true
    }
    
    // 'visible' attribute on ListViewInput at NewCheckPayeeDV.pcf: line 66, column 46
    function visible_82 () : java.lang.Boolean {
      return Check.Payees.length > 1
    }
    
    // 'visible' attribute on TextAreaInput (id=PayTo_Input) at NewCheckPayeeDV.pcf: line 135, column 64
    function visible_92 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT
    }
    
    property get Check () : Check {
      return getRequireValue("Check", 0) as Check
    }
    
    property set Check ($arg :  Check) {
      setRequireValue("Check", 0, $arg)
    }
    
    property get Wizard () : gw.api.financials.CheckWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.financials.CheckWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.financials.CheckWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    property get showAddressFields () : boolean {
      return getVariableValue("showAddressFields", 0) as java.lang.Boolean
    }
    
    property set showAddressFields ($arg :  boolean) {
      setVariableValue("showAddressFields", 0, $arg)
    }
    
    
  }
  
  
}