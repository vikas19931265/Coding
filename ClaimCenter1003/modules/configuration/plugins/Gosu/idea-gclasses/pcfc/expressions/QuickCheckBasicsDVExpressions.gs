package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/QuickCheckBasicsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class QuickCheckBasicsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/QuickCheckBasicsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends QuickCheckBasicsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_44 () : void {
      AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), Payment.Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_46 () : void {
      if (CheckPayee.Payee != null) { ClaimContactDetailPopup.push(CheckPayee.Payee, Payment.Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_48 () : void {
      ClaimContactDetailPopup.push(CheckPayee.Payee, Payment.Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_45 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (CheckPayee.Payee), Payment.Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_49 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(CheckPayee.Payee, Payment.Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_41 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (CheckPayee.Payee), null, Payment.Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_42 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (CheckPayee.Payee), null, Payment.Check.Claim)
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at QuickCheckBasicsDV.pcf: line 95, column 50
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'onChange' attribute on ClaimContactCell (id=PayeeName_Cell) at QuickCheckBasicsDV.pcf: line 86, column 78
    function onChange_47 () : void {
      Payment.Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_50 (PickedValue :  Contact) : void {
      var contactType = statictypeof (CheckPayee.Payee); var result = eval("CheckPayee.Payee = Payment.Check.Claim.resolveContact(CheckPayee.Payee) as " + contactType.Name + ";return null;"); Payment.Check.handleOnPickForPayee(CheckPayee);
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at QuickCheckBasicsDV.pcf: line 84, column 66
    function onPick_57 (PickedValue :  java.lang.Object) : void {
      Payment.Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=PayeeType_Cell) at QuickCheckBasicsDV.pcf: line 95, column 50
    function validationExpression_61 () : java.lang.Object {
      return CheckPayee.PayeeType == TC_CLAIMANT && !CheckPayee.ClaimContact.isClaimant() ? DisplayKey.get("Java.NewPayment.Error.PayeeIsNotClaimant") : null
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_54 () : java.lang.Object {
      return Payment.Check.Claim.PayeeCandidates
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_53 () : java.lang.Object {
      return CheckPayee
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_51 () : entity.Contact {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at QuickCheckBasicsDV.pcf: line 95, column 50
    function value_62 () : typekey.ContactRole {
      return CheckPayee.PayeeType
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_55 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_56 () : void {
      var __valueRangeArg = Payment.Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_55(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_40 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_43 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), Payment.Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get CheckPayee () : entity.CheckPayee {
      return getIteratedValue(1) as entity.CheckPayee
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/QuickCheckBasicsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class QuickCheckBasicsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_11 () : void {
      ClaimContactDetailPopup.push(Payment.Check.FirstPayee.Payee, Payment.Check.Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyDeductibleButton) at QuickCheckBasicsDV.pcf: line 303, column 52
    function action_199 () : void {
      Payment.addDeductibleLineItem()
    }
    
    // 'action' attribute on ButtonInput (id=AddJointPayees_Input) at QuickCheckBasicsDV.pcf: line 55, column 56
    function action_36 () : void {
      Payment.Check.addNewPayee()
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_6 () : void {
      AddressBookPickerPopup.push(statictypeof (Payment.Check.FirstPayee.Payee), Payment.Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_8 () : void {
      if (Payment.Check.FirstPayee.Payee != null) { ClaimContactDetailPopup.push(Payment.Check.FirstPayee.Payee, Payment.Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Payment.Check.FirstPayee.Payee, Payment.Check.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Payment.Check.FirstPayee.Payee), Payment.Check.Claim, null as List<SpecialistService>)
    }
    
    // 'available' attribute on ToolbarButton (id=ApplyDeductibleButton) at QuickCheckBasicsDV.pcf: line 303, column 52
    function available_197 () : java.lang.Boolean {
      return Payment.canAddDeductibleLineItem()
    }
    
    // 'available' attribute on ListViewInput at QuickCheckBasicsDV.pcf: line 288, column 84
    function available_202 () : java.lang.Boolean {
      return Payment.ReserveLine != null
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at QuickCheckBasicsDV.pcf: line 222, column 96
    function def_onEnter_153 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Payment.Check.CheckAddressOwner)
    }
    
    // 'def' attribute on InputSetRef at QuickCheckBasicsDV.pcf: line 240, column 72
    function def_onEnter_159 (def :  pcf.ReserveLineInputSet) : void {
      def.onEnter(Payment, reserveLineInputSetHelper)
    }
    
    // 'def' attribute on InputSetRef at QuickCheckBasicsDV.pcf: line 281, column 62
    function def_onEnter_193 (def :  pcf.CheckExchangeRateInputSet) : void {
      def.onEnter(Payment.Check,null)
    }
    
    // 'def' attribute on ListViewInput at QuickCheckBasicsDV.pcf: line 288, column 84
    function def_onEnter_204 (def :  pcf.EditablePaymentLineItemsLV_default) : void {
      def.onEnter(Payment)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_3 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Payment.Check.FirstPayee.Payee), null, Payment.Check.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at QuickCheckBasicsDV.pcf: line 222, column 96
    function def_refreshVariables_154 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Payment.Check.CheckAddressOwner)
    }
    
    // 'def' attribute on InputSetRef at QuickCheckBasicsDV.pcf: line 240, column 72
    function def_refreshVariables_160 (def :  pcf.ReserveLineInputSet) : void {
      def.refreshVariables(Payment, reserveLineInputSetHelper)
    }
    
    // 'def' attribute on InputSetRef at QuickCheckBasicsDV.pcf: line 281, column 62
    function def_refreshVariables_194 (def :  pcf.CheckExchangeRateInputSet) : void {
      def.refreshVariables(Payment.Check,null)
    }
    
    // 'def' attribute on ListViewInput at QuickCheckBasicsDV.pcf: line 288, column 84
    function def_refreshVariables_205 (def :  pcf.EditablePaymentLineItemsLV_default) : void {
      def.refreshVariables(Payment)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Payment.Check.FirstPayee.Payee), null, Payment.Check.Claim)
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at QuickCheckBasicsDV.pcf: line 147, column 42
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.BankName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at QuickCheckBasicsDV.pcf: line 159, column 47
    function defaultSetter_109 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.BankAccountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at QuickCheckBasicsDV.pcf: line 170, column 51
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.BankAccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at QuickCheckBasicsDV.pcf: line 180, column 51
    function defaultSetter_125 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.BankRoutingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_DeliveryMethod_Input) at QuickCheckBasicsDV.pcf: line 195, column 74
    function defaultSetter_132 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.DeliveryMethod = (__VALUE_TO_SET as typekey.DeliveryMethod)
    }
    
    // 'value' attribute on TextInput (id=Check_MailToContact_Input) at QuickCheckBasicsDV.pcf: line 202, column 74
    function defaultSetter_138 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.MailTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at QuickCheckBasicsDV.pcf: line 215, column 116
    function defaultSetter_149 (__VALUE_TO_SET :  java.lang.Object) : void {
      showAddressFields = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.FirstPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_Reportability_Input) at QuickCheckBasicsDV.pcf: line 231, column 47
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.Reportability = (__VALUE_TO_SET as typekey.ReportabilityType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at QuickCheckBasicsDV.pcf: line 249, column 42
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.PaymentType = (__VALUE_TO_SET as typekey.PaymentType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Payment_Eroding_Input) at QuickCheckBasicsDV.pcf: line 256, column 98
    function defaultSetter_171 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.ErodesReserves = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Transaction_Comments_Input) at QuickCheckBasicsDV.pcf: line 268, column 35
    function defaultSetter_182 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at QuickCheckBasicsDV.pcf: line 276, column 66
    function defaultSetter_189 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CheckCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at QuickCheckBasicsDV.pcf: line 50, column 56
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.FirstPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.PaymentMethod = (__VALUE_TO_SET as typekey.PaymentMethod)
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at QuickCheckBasicsDV.pcf: line 121, column 73
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at QuickCheckBasicsDV.pcf: line 132, column 39
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Check.EFTData = (__VALUE_TO_SET as entity.EFTData)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at QuickCheckBasicsDV.pcf: line 249, column 42
    function editable_161 () : java.lang.Boolean {
      return Payment.New
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=BankAccountNumber_Input) at QuickCheckBasicsDV.pcf: line 170, column 51
    function encryptionExpression_120 (VALUE :  java.lang.String) : java.lang.String {
      return Payment.Check.maskBankAccountNumber(VALUE)
    }
    
    // 'filter' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at QuickCheckBasicsDV.pcf: line 249, column 42
    function filter_166 (VALUE :  typekey.PaymentType, VALUES :  typekey.PaymentType[]) : java.lang.Boolean {
      return Wizard.isAllowedPaymentType( Payment, VALUE )
    }
    
    // 'filter' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function filter_75 (VALUE :  typekey.PaymentMethod, VALUES :  typekey.PaymentMethod[]) : java.lang.Boolean {
      return VALUE !=  PaymentMethod.TC_MANUAL
    }
    
    // 'initialValue' attribute on Variable at QuickCheckBasicsDV.pcf: line 20, column 26
    function initialValue_0 () : Deductible {
      return Payment.SharedDeductible
    }
    
    // 'label' attribute on ToolbarButton (id=ApplyDeductibleButton) at QuickCheckBasicsDV.pcf: line 303, column 52
    function label_200 () : java.lang.Object {
      return Payment.LabelForAddDeductibleButton
    }
    
    // 'mode' attribute on ListViewInput at QuickCheckBasicsDV.pcf: line 288, column 84
    function mode_206 () : java.lang.Object {
      return getMode()
    }
    
    // 'onChange' attribute on PostOnChange at QuickCheckBasicsDV.pcf: line 278, column 57
    function onChange_186 () : void {
      Wizard.Check.unapplyDeductibles()
    }
    
    // 'onChange' attribute on PostOnChange at QuickCheckBasicsDV.pcf: line 111, column 64
    function onChange_71 () : void {
      Payment.Check.handleOnPickForPayee(null)
    }
    
    // 'onChange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at QuickCheckBasicsDV.pcf: line 40, column 150
    function onChange_9 () : void {
      Payment.Check.handleOnPickForPayee(Payment.Check.FirstPayee); showAddressFields = !Payment.Check.addressRequiredFieldsValid();
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_13 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Payment.Check.FirstPayee.Payee); var result = eval("Payment.Check.FirstPayee.Payee = Payment.Check.Claim.resolveContact(Payment.Check.FirstPayee.Payee) as " + contactType.Name + ";return null;"); Payment.Check.handleOnPickForPayee(Payment.Check.FirstPayee); showAddressFields = !Payment.Check.addressRequiredFieldsValid();;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at QuickCheckBasicsDV.pcf: line 38, column 55
    function onPick_21 (PickedValue :  java.lang.Object) : void {
      Payment.Check.handleOnPickForPayee(Payment.Check.FirstPayee); showAddressFields = !Payment.Check.addressRequiredFieldsValid();
    }
    
    // 'value' attribute on Reflect at QuickCheckBasicsDV.pcf: line 150, column 37
    function reflectionValue_100 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankName
    }
    
    // 'value' attribute on Reflect at QuickCheckBasicsDV.pcf: line 162, column 44
    function reflectionValue_106 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountType
    }
    
    // 'value' attribute on Reflect at QuickCheckBasicsDV.pcf: line 173, column 46
    function reflectionValue_115 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountNumber
    }
    
    // 'value' attribute on Reflect at QuickCheckBasicsDV.pcf: line 183, column 46
    function reflectionValue_122 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankRoutingNumber
    }
    
    // 'value' attribute on Reflect at QuickCheckBasicsDV.pcf: line 141, column 40
    function reflectionValue_94 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.AccountName
    }
    
    // 'requestValidationExpression' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at QuickCheckBasicsDV.pcf: line 249, column 42
    function requestValidationExpression_162 (VALUE :  typekey.PaymentType) : java.lang.Object {
      return Wizard.validatePaymentType(Payment, VALUE)
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at QuickCheckBasicsDV.pcf: line 84, column 66
    function sortValue_38 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at QuickCheckBasicsDV.pcf: line 95, column 50
    function sortValue_39 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.PayeeType
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at QuickCheckBasicsDV.pcf: line 74, column 45
    function toCreateAndAdd_67 () : entity.CheckPayee {
      return Payment.Check.addNewPayee()
    }
    
    // 'toRemove' attribute on RowIterator at QuickCheckBasicsDV.pcf: line 74, column 45
    function toRemove_68 (CheckPayee :  entity.CheckPayee) : void {
      Payment.Check.removeFromPayees(CheckPayee); Payment.Check.handleOnPickForPayee(null);
    }
    
    // 'tooltip' attribute on ToolbarButton (id=ApplyDeductibleButton) at QuickCheckBasicsDV.pcf: line 303, column 52
    function tooltip_201 () : java.lang.String {
      return new gw.api.financials.PaymentUIHelper(Payment).DeductibleButtonToolTip
    }
    
    // 'validationExpression' attribute on ListViewInput at QuickCheckBasicsDV.pcf: line 288, column 84
    function validationExpression_203 () : java.lang.Object {
      return Payment.getCheckWizardPaymentValidationExpression()
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at QuickCheckBasicsDV.pcf: line 159, column 47
    function valueRange_111 () : java.lang.Object {
      return BankAccountType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_17 () : java.lang.Object {
      return Payment.Check.Claim.PayeeCandidates
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at QuickCheckBasicsDV.pcf: line 50, column 56
    function valueRange_30 () : java.lang.Object {
      return Payment.Check.getAllowedPayeeTypes(Payment.Check.FirstPayee.Payee)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function valueRange_76 () : java.lang.Object {
      return PaymentMethod.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at QuickCheckBasicsDV.pcf: line 132, column 39
    function valueRange_90 () : java.lang.Object {
      return Payment.Check.FirstPayee.Payee.EFTRecords
    }
    
    // 'value' attribute on TextInput (id=Check_MailingAddress_Input) at QuickCheckBasicsDV.pcf: line 208, column 74
    function valueRoot_144 () : java.lang.Object {
      return Payment.Check.CheckAddressOwner
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_16 () : java.lang.Object {
      return Payment.Check.FirstPayee
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at QuickCheckBasicsDV.pcf: line 249, column 42
    function valueRoot_165 () : java.lang.Object {
      return Payment
    }
    
    // 'value' attribute on CurrencyInput (id=Transaction_AvailableReserves_Input) at QuickCheckBasicsDV.pcf: line 263, column 80
    function valueRoot_177 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getAvailableReserves(Payment)
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at QuickCheckBasicsDV.pcf: line 276, column 66
    function valueRoot_190 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function valueRoot_74 () : java.lang.Object {
      return Payment.Check
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at QuickCheckBasicsDV.pcf: line 147, column 42
    function value_102 () : java.lang.String {
      return Payment.Check.BankName
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at QuickCheckBasicsDV.pcf: line 159, column 47
    function value_108 () : typekey.BankAccountType {
      return Payment.Check.BankAccountType
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at QuickCheckBasicsDV.pcf: line 170, column 51
    function value_117 () : java.lang.String {
      return Payment.Check.BankAccountNumber
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at QuickCheckBasicsDV.pcf: line 180, column 51
    function value_124 () : java.lang.String {
      return Payment.Check.BankRoutingNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_DeliveryMethod_Input) at QuickCheckBasicsDV.pcf: line 195, column 74
    function value_131 () : typekey.DeliveryMethod {
      return Payment.Check.DeliveryMethod
    }
    
    // 'value' attribute on TextInput (id=Check_MailToContact_Input) at QuickCheckBasicsDV.pcf: line 202, column 74
    function value_137 () : java.lang.String {
      return Payment.Check.MailTo
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_14 () : entity.Contact {
      return Payment.Check.FirstPayee.Payee
    }
    
    // 'value' attribute on TextInput (id=Check_MailingAddress_Input) at QuickCheckBasicsDV.pcf: line 208, column 74
    function value_143 () : entity.Address {
      return Payment.Check.CheckAddressOwner.Address
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at QuickCheckBasicsDV.pcf: line 215, column 116
    function value_148 () : java.lang.Boolean {
      return showAddressFields
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_Reportability_Input) at QuickCheckBasicsDV.pcf: line 231, column 47
    function value_155 () : typekey.ReportabilityType {
      return Payment.Check.Reportability
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at QuickCheckBasicsDV.pcf: line 249, column 42
    function value_163 () : typekey.PaymentType {
      return Payment.PaymentType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Payment_Eroding_Input) at QuickCheckBasicsDV.pcf: line 256, column 98
    function value_170 () : java.lang.Boolean {
      return Payment.ErodesReserves
    }
    
    // 'value' attribute on CurrencyInput (id=Transaction_AvailableReserves_Input) at QuickCheckBasicsDV.pcf: line 263, column 80
    function value_176 () : gw.api.financials.IPairedMoney {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getAvailableReserves(Payment).ReservingAmountTransactionAmountPair
    }
    
    // 'value' attribute on TextInput (id=Transaction_Comments_Input) at QuickCheckBasicsDV.pcf: line 268, column 35
    function value_181 () : java.lang.String {
      return Payment.Comments
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at QuickCheckBasicsDV.pcf: line 276, column 66
    function value_188 () : typekey.Currency {
      return Wizard.CheckCurrency
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at QuickCheckBasicsDV.pcf: line 50, column 56
    function value_27 () : typekey.ContactRole {
      return Payment.Check.FirstPayee.PayeeType
    }
    
    // 'value' attribute on RowIterator at QuickCheckBasicsDV.pcf: line 74, column 45
    function value_69 () : entity.CheckPayee[] {
      return Payment.Check.Payees
    }
    
    // 'value' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function value_72 () : typekey.PaymentMethod {
      return Payment.Check.PaymentMethod
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at QuickCheckBasicsDV.pcf: line 121, column 73
    function value_82 () : java.lang.String {
      return Payment.Check.PayTo
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at QuickCheckBasicsDV.pcf: line 132, column 39
    function value_87 () : entity.EFTData {
      return Payment.Check.EFTData
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at QuickCheckBasicsDV.pcf: line 159, column 47
    function verifyValueRangeIsAllowedType_112 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at QuickCheckBasicsDV.pcf: line 159, column 47
    function verifyValueRangeIsAllowedType_112 ($$arg :  typekey.BankAccountType[]) : void {
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
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at QuickCheckBasicsDV.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at QuickCheckBasicsDV.pcf: line 50, column 56
    function verifyValueRangeIsAllowedType_31 ($$arg :  typekey.ContactRole[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function verifyValueRangeIsAllowedType_77 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function verifyValueRangeIsAllowedType_77 ($$arg :  typekey.PaymentMethod[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at QuickCheckBasicsDV.pcf: line 132, column 39
    function verifyValueRangeIsAllowedType_91 ($$arg :  entity.EFTData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at QuickCheckBasicsDV.pcf: line 132, column 39
    function verifyValueRangeIsAllowedType_91 ($$arg :  gw.api.database.IQueryBeanResult<entity.EFTData>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at QuickCheckBasicsDV.pcf: line 132, column 39
    function verifyValueRangeIsAllowedType_91 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at QuickCheckBasicsDV.pcf: line 159, column 47
    function verifyValueRange_113 () : void {
      var __valueRangeArg = BankAccountType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_112(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_19 () : void {
      var __valueRangeArg = Payment.Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at QuickCheckBasicsDV.pcf: line 50, column 56
    function verifyValueRange_32 () : void {
      var __valueRangeArg = Payment.Check.getAllowedPayeeTypes(Payment.Check.FirstPayee.Payee)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=PaymentMethod_Input) at QuickCheckBasicsDV.pcf: line 109, column 43
    function verifyValueRange_78 () : void {
      var __valueRangeArg = PaymentMethod.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_77(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at QuickCheckBasicsDV.pcf: line 132, column 39
    function verifyValueRange_92 () : void {
      var __valueRangeArg = Payment.Check.FirstPayee.Payee.EFTRecords
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_91(__valueRangeArg)
    }
    
    // 'visible' attribute on Label at QuickCheckBasicsDV.pcf: line 28, column 56
    function visible_1 () : java.lang.Boolean {
      return Payment.Check.Payees.length <= 1
    }
    
    // 'visible' attribute on InputSet (id=EFTDataInputSet) at QuickCheckBasicsDV.pcf: line 125, column 71
    function visible_128 () : java.lang.Boolean {
      return Payment.Check.PaymentMethod == PaymentMethod.TC_EFT
    }
    
    // 'visible' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at QuickCheckBasicsDV.pcf: line 215, column 116
    function visible_147 () : java.lang.Boolean {
      return Payment.Check.PaymentMethod == PaymentMethod.TC_CHECK and Payment.Check.FirstPayee.Payee != null
    }
    
    // 'visible' attribute on InputSetRef (id=MailingAddressInputSet) at QuickCheckBasicsDV.pcf: line 222, column 96
    function visible_152 () : java.lang.Boolean {
      return Payment.Check.PaymentMethod == PaymentMethod.TC_CHECK and showAddressFields
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Payment_Eroding_Input) at QuickCheckBasicsDV.pcf: line 256, column 98
    function visible_169 () : java.lang.Boolean {
      return !Payment.Exposure.Closed and Payment.PaymentType != PaymentType.TC_SUPPLEMENT
    }
    
    // 'visible' attribute on CurrencyInput (id=Transaction_AvailableReserves_Input) at QuickCheckBasicsDV.pcf: line 263, column 80
    function visible_175 () : java.lang.Boolean {
      return Payment.ReserveLine != null and not Payment.ReserveLine.New
    }
    
    // 'visible' attribute on TypeKeyInput (id=Payment_Currency_Input) at QuickCheckBasicsDV.pcf: line 276, column 66
    function visible_187 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'addVisible' attribute on IteratorButtons at QuickCheckBasicsDV.pcf: line 295, column 90
    function visible_195 () : java.lang.Boolean {
      return gw.api.financials.FinancialsUtil.isAllowMultipleLineItems()
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyDeductibleButton) at QuickCheckBasicsDV.pcf: line 303, column 52
    function visible_198 () : java.lang.Boolean {
      return Payment.DeductibleAvailable
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_2 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_5 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Payment.Check.FirstPayee.Payee), Payment.Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ListViewInput at QuickCheckBasicsDV.pcf: line 61, column 54
    function visible_70 () : java.lang.Boolean {
      return Payment.Check.Payees.length > 1
    }
    
    // 'visible' attribute on TextAreaInput (id=PayTo_Input) at QuickCheckBasicsDV.pcf: line 121, column 73
    function visible_80 () : java.lang.Boolean {
      return Payment.Check.PaymentMethod == PaymentMethod.TC_CHECK
    }
    
    property get Payment () : Payment {
      return getRequireValue("Payment", 0) as Payment
    }
    
    property set Payment ($arg :  Payment) {
      setRequireValue("Payment", 0, $arg)
    }
    
    property get Wizard () : gw.api.financials.QuickCreateCheckWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.financials.QuickCreateCheckWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.financials.QuickCreateCheckWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    property get deductible () : Deductible {
      return getVariableValue("deductible", 0) as Deductible
    }
    
    property set deductible ($arg :  Deductible) {
      setVariableValue("deductible", 0, $arg)
    }
    
    property get reserveLineInputSetHelper () : gw.api.financials.ReserveLineInputSetHelper {
      return getRequireValue("reserveLineInputSetHelper", 0) as gw.api.financials.ReserveLineInputSetHelper
    }
    
    property set reserveLineInputSetHelper ($arg :  gw.api.financials.ReserveLineInputSetHelper) {
      setRequireValue("reserveLineInputSetHelper", 0, $arg)
    }
    
    property get showAddressFields () : boolean {
      return getVariableValue("showAddressFields", 0) as java.lang.Boolean
    }
    
    property set showAddressFields ($arg :  boolean) {
      setVariableValue("showAddressFields", 0, $arg)
    }
    
    function getMode() : String {
      if (Payment.LineItems.where( \ t -> t.LineCategory==TC_DEDUCTIBLE ).Count == 1) {
        return "deductible"
      } else {
        return "default"
      }
    }
    
    
  }
  
  
}