package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizardCheckDV.ready.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizardCheckDV_readyExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizardCheckDV.ready.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizardCheckDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_11 () : void {
      AddressBookPickerPopup.push(statictypeof (check.Payee), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_13 () : void {
      if (check.Payee != null) { ClaimContactDetailPopup.push(check.Payee, claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_14 () : void {
      ClaimContactDetailPopup.push(check.Payee, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_12 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (check.Payee), claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(check.Payee, claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at FNOLWizardCheckDV.ready.pcf: line 220, column 33
    function def_onEnter_150 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(check.ClaimCheckAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_8 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (check.Payee), null, claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at FNOLWizardCheckDV.ready.pcf: line 220, column 33
    function def_refreshVariables_151 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(check.ClaimCheckAddressOwner)
    }
    
    // 'def' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_9 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (check.Payee), null, claim)
    }
    
    // 'value' attribute on TextInput (id=Payment_RateSet_Description_Input) at FNOLWizardCheckDV.ready.pcf: line 157, column 49
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.ExchangeRateDescription = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplyDeductible_Input) at FNOLWizardCheckDV.ready.pcf: line 179, column 33
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.ApplyDeductible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=DeliveryMethod_Input) at FNOLWizardCheckDV.ready.pcf: line 202, column 35
    function defaultSetter_133 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.DeliveryMethod = (__VALUE_TO_SET as typekey.DeliveryMethod)
    }
    
    // 'value' attribute on TextInput (id=CheckMailTo_Input) at FNOLWizardCheckDV.ready.pcf: line 210, column 33
    function defaultSetter_140 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.MailTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=ScheduledDeliveryDate_Input) at FNOLWizardCheckDV.ready.pcf: line 227, column 42
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.ScheduledSendDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at FNOLWizardCheckDV.ready.pcf: line 54, column 39
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.EFTData = (__VALUE_TO_SET as entity.EFTData)
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=PaymentMethod_Input) at FNOLWizardCheckDV.ready.pcf: line 32, column 43
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.PaymentMethod = (__VALUE_TO_SET as typekey.PaymentMethod)
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at FNOLWizardCheckDV.ready.pcf: line 61, column 31
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at FNOLWizardCheckDV.ready.pcf: line 70, column 34
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.BankName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at FNOLWizardCheckDV.ready.pcf: line 82, column 47
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.BankAccountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at FNOLWizardCheckDV.ready.pcf: line 93, column 43
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.BankAccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at FNOLWizardCheckDV.ready.pcf: line 103, column 43
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.BankRoutingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=PayeeRole_Input) at FNOLWizardCheckDV.ready.pcf: line 116, column 42
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.PayeeRole = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'value' attribute on TextInput (id=CheckInvoiceNumber_Input) at FNOLWizardCheckDV.ready.pcf: line 121, column 38
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.InvoiceNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at FNOLWizardCheckDV.ready.pcf: line 129, column 66
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.TransactionCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Payment_ExchangeRateOverride_Input) at FNOLWizardCheckDV.ready.pcf: line 139, column 48
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.OverrideExchangeRate = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Payment_ExchangeRate_Input) at FNOLWizardCheckDV.ready.pcf: line 149, column 48
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      check.ExchangeRate = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=Payment_ExchangeRateOverride_Input) at FNOLWizardCheckDV.ready.pcf: line 139, column 48
    function editable_85 () : java.lang.Boolean {
      return perm.ExchangeRate.edit
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=BankAccountNumber_Input) at FNOLWizardCheckDV.ready.pcf: line 93, column 43
    function encryptionExpression_59 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.privacy.EncryptionMaskExpressions.maskBankAccountNumber(VALUE)
    }
    
    // 'filter' attribute on TypeKeyRadioInput (id=PaymentMethod_Input) at FNOLWizardCheckDV.ready.pcf: line 32, column 43
    function filter_5 (VALUE :  typekey.PaymentMethod, VALUES :  typekey.PaymentMethod[]) : java.lang.Boolean {
      return VALUE != PaymentMethod.TC_MANUAL
    }
    
    // 'format' attribute on TextInput (id=Payment_ExchangeRate_Input) at FNOLWizardCheckDV.ready.pcf: line 149, column 48
    function format_95 () : java.lang.String {
      return "1 " + check.TransactionCurrency.DisplayName + " = #.###### " + claim.Currency.DisplayName;
    }
    
    // 'initialValue' attribute on Variable at FNOLWizardCheckDV.ready.pcf: line 17, column 42
    function initialValue_0 () : gw.api.claim.NewClaimCheck {
      return Wizard.Check
    }
    
    // 'initialValue' attribute on Variable at FNOLWizardCheckDV.ready.pcf: line 22, column 23
    function initialValue_1 () : boolean {
      return claim.Exposures[0].Coverage.ClaimDeductible != null and claim.Exposures[0].Coverage.ClaimDeductible.HasRemainingAmount
    }
    
    // 'label' attribute on BooleanRadioInput (id=ApplyDeductible_Input) at FNOLWizardCheckDV.ready.pcf: line 179, column 33
    function label_119 () : java.lang.Object {
      return DisplayKey.get("NVV.Financials.NewPaymentDetail.Transaction.DeductibleRemaining", claim.Exposures[0].Coverage.ClaimDeductible.AmountRemaining)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_16 (PickedValue :  Contact) : void {
      var contactType = statictypeof (check.Payee); var result = eval("check.Payee = claim.resolveContact(check.Payee) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at FNOLWizardCheckDV.ready.pcf: line 64, column 40
    function reflectionValue_33 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.AccountName
    }
    
    // 'value' attribute on Reflect at FNOLWizardCheckDV.ready.pcf: line 73, column 37
    function reflectionValue_39 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankName
    }
    
    // 'value' attribute on Reflect at FNOLWizardCheckDV.ready.pcf: line 85, column 44
    function reflectionValue_45 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountType
    }
    
    // 'value' attribute on Reflect at FNOLWizardCheckDV.ready.pcf: line 96, column 46
    function reflectionValue_54 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountNumber
    }
    
    // 'value' attribute on Reflect at FNOLWizardCheckDV.ready.pcf: line 106, column 46
    function reflectionValue_61 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankRoutingNumber
    }
    
    // 'validationExpression' attribute on DateInput (id=ScheduledDeliveryDate_Input) at FNOLWizardCheckDV.ready.pcf: line 227, column 42
    function validationExpression_152 () : java.lang.Object {
      return check.ScheduledSendDate.before(java.util.Date.Today) ? DisplayKey.get("Java.Validation.Date.ForbidPast") : null
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_20 () : java.lang.Object {
      return claim.PayeeCandidates
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at FNOLWizardCheckDV.ready.pcf: line 54, column 39
    function valueRange_29 () : java.lang.Object {
      return check.Payee.EFTRecords
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at FNOLWizardCheckDV.ready.pcf: line 82, column 47
    function valueRange_50 () : java.lang.Object {
      return BankAccountType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on RangeInput (id=PayeeRole_Input) at FNOLWizardCheckDV.ready.pcf: line 116, column 42
    function valueRange_71 () : java.lang.Object {
      return claim.getAllowedPayeeTypes( check.Payee)
    }
    
    // 'value' attribute on TextInput (id=CheckMailToAddr_Input) at FNOLWizardCheckDV.ready.pcf: line 216, column 33
    function valueRoot_146 () : java.lang.Object {
      return check.ClaimCheckAddressOwner
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=PaymentMethod_Input) at FNOLWizardCheckDV.ready.pcf: line 32, column 43
    function valueRoot_4 () : java.lang.Object {
      return check
    }
    
    // 'value' attribute on TextInput (id=Payment_RateSet_Description_Input) at FNOLWizardCheckDV.ready.pcf: line 157, column 49
    function value_104 () : java.lang.String {
      return check.ExchangeRateDescription
    }
    
    // 'value' attribute on DateInput (id=RateSet_Date_Input) at FNOLWizardCheckDV.ready.pcf: line 162, column 49
    function value_111 () : java.util.Date {
      return check.UpdateTime
    }
    
    // 'value' attribute on CurrencyInput (id=CheckAmount_Input) at FNOLWizardCheckDV.ready.pcf: line 169, column 66
    function value_115 () : gw.api.financials.AbstractMutablePairedMoney {
      return check.TransactionAmount
    }
    
    // 'value' attribute on BooleanRadioInput (id=ApplyDeductible_Input) at FNOLWizardCheckDV.ready.pcf: line 179, column 33
    function value_120 () : java.lang.Boolean {
      return check.ApplyDeductible
    }
    
    // 'value' attribute on CurrencyInput (id=DecuctibleAppliedAmount_Input) at FNOLWizardCheckDV.ready.pcf: line 189, column 55
    function value_126 () : gw.api.financials.IPairedMoney {
      return new gw.api.financials.CurrencyAmountPair(-check.DeductibleAmount, -check.DeductibleClaimAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=CheckTotalAmount_Input) at FNOLWizardCheckDV.ready.pcf: line 194, column 61
    function value_128 () : gw.api.financials.CurrencyAmountPair {
      return check.CheckAmount
    }
    
    // 'value' attribute on TypeKeyInput (id=DeliveryMethod_Input) at FNOLWizardCheckDV.ready.pcf: line 202, column 35
    function value_132 () : typekey.DeliveryMethod {
      return check.DeliveryMethod
    }
    
    // 'value' attribute on TextInput (id=CheckMailTo_Input) at FNOLWizardCheckDV.ready.pcf: line 210, column 33
    function value_139 () : java.lang.String {
      return check.MailTo
    }
    
    // 'value' attribute on TextInput (id=CheckMailToAddr_Input) at FNOLWizardCheckDV.ready.pcf: line 216, column 33
    function value_145 () : entity.Address {
      return check.ClaimCheckAddressOwner.Address
    }
    
    // 'value' attribute on DateInput (id=ScheduledDeliveryDate_Input) at FNOLWizardCheckDV.ready.pcf: line 227, column 42
    function value_153 () : java.util.Date {
      return check.ScheduledSendDate
    }
    
    // 'value' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_17 () : entity.Contact {
      return check.Payee
    }
    
    // 'value' attribute on TypeKeyRadioInput (id=PaymentMethod_Input) at FNOLWizardCheckDV.ready.pcf: line 32, column 43
    function value_2 () : typekey.PaymentMethod {
      return check.PaymentMethod
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at FNOLWizardCheckDV.ready.pcf: line 54, column 39
    function value_26 () : entity.EFTData {
      return check.EFTData
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at FNOLWizardCheckDV.ready.pcf: line 61, column 31
    function value_35 () : java.lang.String {
      return check.PayTo
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at FNOLWizardCheckDV.ready.pcf: line 70, column 34
    function value_41 () : java.lang.String {
      return check.BankName
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at FNOLWizardCheckDV.ready.pcf: line 82, column 47
    function value_47 () : typekey.BankAccountType {
      return check.BankAccountType
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at FNOLWizardCheckDV.ready.pcf: line 93, column 43
    function value_56 () : java.lang.String {
      return check.BankAccountNumber
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at FNOLWizardCheckDV.ready.pcf: line 103, column 43
    function value_63 () : java.lang.String {
      return check.BankRoutingNumber
    }
    
    // 'value' attribute on RangeInput (id=PayeeRole_Input) at FNOLWizardCheckDV.ready.pcf: line 116, column 42
    function value_68 () : typekey.ContactRole {
      return check.PayeeRole
    }
    
    // 'value' attribute on TextInput (id=CheckInvoiceNumber_Input) at FNOLWizardCheckDV.ready.pcf: line 121, column 38
    function value_75 () : java.lang.String {
      return check.InvoiceNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at FNOLWizardCheckDV.ready.pcf: line 129, column 66
    function value_80 () : typekey.Currency {
      return check.TransactionCurrency
    }
    
    // 'value' attribute on BooleanRadioInput (id=Payment_ExchangeRateOverride_Input) at FNOLWizardCheckDV.ready.pcf: line 139, column 48
    function value_87 () : java.lang.Boolean {
      return check.OverrideExchangeRate
    }
    
    // 'value' attribute on TextInput (id=Payment_ExchangeRate_Input) at FNOLWizardCheckDV.ready.pcf: line 149, column 48
    function value_96 () : java.math.BigDecimal {
      return check.ExchangeRate
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at FNOLWizardCheckDV.ready.pcf: line 54, column 39
    function verifyValueRangeIsAllowedType_30 ($$arg :  entity.EFTData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at FNOLWizardCheckDV.ready.pcf: line 54, column 39
    function verifyValueRangeIsAllowedType_30 ($$arg :  gw.api.database.IQueryBeanResult<entity.EFTData>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at FNOLWizardCheckDV.ready.pcf: line 54, column 39
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at FNOLWizardCheckDV.ready.pcf: line 82, column 47
    function verifyValueRangeIsAllowedType_51 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at FNOLWizardCheckDV.ready.pcf: line 82, column 47
    function verifyValueRangeIsAllowedType_51 ($$arg :  typekey.BankAccountType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PayeeRole_Input) at FNOLWizardCheckDV.ready.pcf: line 116, column 42
    function verifyValueRangeIsAllowedType_72 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PayeeRole_Input) at FNOLWizardCheckDV.ready.pcf: line 116, column 42
    function verifyValueRangeIsAllowedType_72 ($$arg :  typekey.ContactRole[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_22 () : void {
      var __valueRangeArg = claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at FNOLWizardCheckDV.ready.pcf: line 54, column 39
    function verifyValueRange_31 () : void {
      var __valueRangeArg = check.Payee.EFTRecords
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at FNOLWizardCheckDV.ready.pcf: line 82, column 47
    function verifyValueRange_52 () : void {
      var __valueRangeArg = BankAccountType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_51(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PayeeRole_Input) at FNOLWizardCheckDV.ready.pcf: line 116, column 42
    function verifyValueRange_73 () : void {
      var __valueRangeArg = claim.getAllowedPayeeTypes( check.Payee)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_72(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_10 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (check.Payee), claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on BooleanRadioInput (id=ApplyDeductible_Input) at FNOLWizardCheckDV.ready.pcf: line 179, column 33
    function visible_118 () : java.lang.Boolean {
      return hasDeductible
    }
    
    // 'visible' attribute on TypeKeyInput (id=DeliveryMethod_Input) at FNOLWizardCheckDV.ready.pcf: line 202, column 35
    function visible_131 () : java.lang.Boolean {
      return !check.IsEFT
    }
    
    // 'visible' attribute on InputSet at FNOLWizardCheckDV.ready.pcf: line 183, column 59
    function visible_137 () : java.lang.Boolean {
      return hasDeductible and check.ApplyDeductible
    }
    
    // 'visible' attribute on InputSet (id=EFTDataInputSet) at FNOLWizardCheckDV.ready.pcf: line 47, column 31
    function visible_67 () : java.lang.Boolean {
      return check.IsEFT
    }
    
    // 'visible' attribute on ClaimContactInput (id=Payee_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_7 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on TypeKeyInput (id=Payment_Currency_Input) at FNOLWizardCheckDV.ready.pcf: line 129, column 66
    function visible_79 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Payment_ExchangeRateOverride_Input) at FNOLWizardCheckDV.ready.pcf: line 139, column 48
    function visible_86 () : java.lang.Boolean {
      return check.UseExchangeRate(claim)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    property get check () : gw.api.claim.NewClaimCheck {
      return getVariableValue("check", 0) as gw.api.claim.NewClaimCheck
    }
    
    property set check ($arg :  gw.api.claim.NewClaimCheck) {
      setVariableValue("check", 0, $arg)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get hasDeductible () : boolean {
      return getVariableValue("hasDeductible", 0) as java.lang.Boolean
    }
    
    property set hasDeductible ($arg :  boolean) {
      setVariableValue("hasDeductible", 0, $arg)
    }
    
    
  }
  
  
}