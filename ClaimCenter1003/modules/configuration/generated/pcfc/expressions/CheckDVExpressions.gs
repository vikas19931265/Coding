package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CheckDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CheckDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=BulkInvoice_Input) at CheckDV.pcf: line 170, column 42
    function action_103 () : void {
      EditBulkInvoiceDetail.go(Check.BulkInvoiceItem.BulkInvoice)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_113 () : void {
      AddressBookPickerPopup.push(statictypeof (Check.Claimant), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_115 () : void {
      if (Check.Claimant != null) { ClaimContactDetailPopup.push(Check.Claimant, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_116 () : void {
      ClaimContactDetailPopup.push(Check.Claimant, Check.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_174 () : void {
      AddressBookPickerPopup.push(statictypeof (Check.CreateUser.Contact), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_176 () : void {
      if (Check.CreateUser.Contact != null) { ClaimContactDetailPopup.push(Check.CreateUser.Contact, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_177 () : void {
      ClaimContactDetailPopup.push(Check.CreateUser.Contact, Check.Claim)
    }
    
    // 'action' attribute on TextInput (id=BulkInvoice_Input) at CheckDV.pcf: line 170, column 42
    function action_dest_104 () : pcf.api.Destination {
      return pcf.EditBulkInvoiceDetail.createDestination(Check.BulkInvoiceItem.BulkInvoice)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_114 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Check.Claimant), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_117 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Check.Claimant, Check.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_175 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Check.CreateUser.Contact), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_178 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Check.CreateUser.Contact, Check.Claim)
    }
    
    // 'available' attribute on TextInput (id=BulkInvoice_Input) at CheckDV.pcf: line 170, column 42
    function available_102 () : java.lang.Boolean {
      return Check.isBulked()
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_110 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Check.Claimant), null, Check.Claim)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 195, column 27
    function def_onEnter_140 (def :  pcf.CheckPayeesLV) : void {
      def.onEnter(Check)
    }
    
    // 'def' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_171 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Check.CreateUser.Contact), null, Check.Claim)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 271, column 27
    function def_onEnter_197 (def :  pcf.ApprovalHistoryLV) : void {
      def.onEnter(Check.CheckSet.ApprovalHistory?.toTypedArray())
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 279, column 27
    function def_onEnter_199 (def :  pcf.CheckSummaryPaymentsLV) : void {
      def.onEnter((Check.Group == null ? Check.Payments : Check.Group.PrimaryCheck.Payments))
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 286, column 39
    function def_onEnter_202 (def :  pcf.CheckGroupChecksLV) : void {
      def.onEnter(Check.Group)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 293, column 53
    function def_onEnter_205 (def :  pcf.RecurrenceChecksLV) : void {
      def.onEnter(Check.CheckSet)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 300, column 40
    function def_onEnter_208 (def :  pcf.UnmodifiableTransactionSetDocumentsLV) : void {
      def.onEnter(Check.CheckSet.LinkedDocuments)
    }
    
    // 'def' attribute on InputSetRef at CheckDV.pcf: line 56, column 27
    function def_onEnter_27 (def :  pcf.CheckExchangeRateInputSet) : void {
      def.onEnter(Check,null)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 80, column 27
    function def_onEnter_43 (def :  pcf.PaymentDeductionsLV) : void {
      def.onEnter(Check)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_111 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Check.Claimant), null, Check.Claim)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 195, column 27
    function def_refreshVariables_141 (def :  pcf.CheckPayeesLV) : void {
      def.refreshVariables(Check)
    }
    
    // 'def' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_172 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Check.CreateUser.Contact), null, Check.Claim)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 271, column 27
    function def_refreshVariables_198 (def :  pcf.ApprovalHistoryLV) : void {
      def.refreshVariables(Check.CheckSet.ApprovalHistory?.toTypedArray())
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 279, column 27
    function def_refreshVariables_200 (def :  pcf.CheckSummaryPaymentsLV) : void {
      def.refreshVariables((Check.Group == null ? Check.Payments : Check.Group.PrimaryCheck.Payments))
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 286, column 39
    function def_refreshVariables_203 (def :  pcf.CheckGroupChecksLV) : void {
      def.refreshVariables(Check.Group)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 293, column 53
    function def_refreshVariables_206 (def :  pcf.RecurrenceChecksLV) : void {
      def.refreshVariables(Check.CheckSet)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 300, column 40
    function def_refreshVariables_209 (def :  pcf.UnmodifiableTransactionSetDocumentsLV) : void {
      def.refreshVariables(Check.CheckSet.LinkedDocuments)
    }
    
    // 'def' attribute on InputSetRef at CheckDV.pcf: line 56, column 27
    function def_refreshVariables_28 (def :  pcf.CheckExchangeRateInputSet) : void {
      def.refreshVariables(Check,null)
    }
    
    // 'def' attribute on ListViewInput at CheckDV.pcf: line 80, column 27
    function def_refreshVariables_44 (def :  pcf.PaymentDeductionsLV) : void {
      def.refreshVariables(Check)
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.EFTData = (__VALUE_TO_SET as entity.EFTData)
    }
    
    // 'value' attribute on TextAreaInput (id=PayTo_Input) at CheckDV.pcf: line 113, column 31
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at CheckDV.pcf: line 122, column 34
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at CheckDV.pcf: line 134, column 47
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankAccountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at CheckDV.pcf: line 145, column 43
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankAccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at CheckDV.pcf: line 155, column 43
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.BankRoutingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'encryptionExpression' attribute on PrivacyInput (id=BankAccountNumber_Input) at CheckDV.pcf: line 145, column 43
    function encryptionExpression_90 (VALUE :  java.lang.String) : java.lang.String {
      return Check.maskBankAccountNumber(VALUE)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_118 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Check.Claimant); var result = eval("Check.Claimant = Check.Claim.resolveContact(Check.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_179 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Check.CreateUser.Contact); var result = eval("Check.CreateUser.Contact = Check.Claim.resolveContact(Check.CreateUser.Contact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at CheckDV.pcf: line 116, column 40
    function reflectionValue_64 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.AccountName
    }
    
    // 'value' attribute on Reflect at CheckDV.pcf: line 125, column 37
    function reflectionValue_70 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankName
    }
    
    // 'value' attribute on Reflect at CheckDV.pcf: line 137, column 44
    function reflectionValue_76 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountType
    }
    
    // 'value' attribute on Reflect at CheckDV.pcf: line 148, column 46
    function reflectionValue_85 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankAccountNumber
    }
    
    // 'value' attribute on Reflect at CheckDV.pcf: line 158, column 46
    function reflectionValue_92 (TRIGGER_INDEX :  int, VALUE :  entity.EFTData) : java.lang.Object {
      return VALUE.BankRoutingNumber
    }
    
    // 'value' attribute on TextCell (id=InvoiceReferenceNumber_Cell) at CheckDV.pcf: line 321, column 176
    function sortValue_210 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.ReferenceNumber.HasContent ? invoice.ReferenceNumber : DisplayKey.get("LV.Financials.Check.Invoices.InvoiceReferenceNumberMissing")
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestNumber_Cell) at CheckDV.pcf: line 326, column 70
    function sortValue_211 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.ServiceRequest.ServiceRequestNumber
    }
    
    // 'value' attribute on DateCell (id=SubmittedDate_Cell) at CheckDV.pcf: line 332, column 56
    function sortValue_212 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.StatementCreationTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at CheckDV.pcf: line 336, column 41
    function sortValue_213 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Amount
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CheckDV.pcf: line 340, column 56
    function sortValue_214 (invoice :  entity.ServiceRequestInvoice) : java.lang.Object {
      return invoice.Description.elide(28)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_121 () : java.lang.Object {
      return Check.Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_182 () : java.lang.Object {
      return Check.Claim.RelatedUserContactArray
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function valueRange_59 () : java.lang.Object {
      return Check.FirstPayee.Payee.EFTRecords
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at CheckDV.pcf: line 134, column 47
    function valueRange_81 () : java.lang.Object {
      return BankAccountType.getTypeKeys( false )
    }
    
    // 'value' attribute on TextInput (id=Portion_Percentage_Input) at CheckDV.pcf: line 41, column 53
    function valueRoot_17 () : java.lang.Object {
      return Check.Portion
    }
    
    // 'value' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_181 () : java.lang.Object {
      return Check.CreateUser
    }
    
    // 'value' attribute on CurrencyInput (id=Recurrence_Total_Input) at CheckDV.pcf: line 266, column 59
    function valueRoot_195 () : java.lang.Object {
      return Check.CheckSet.Recurrence
    }
    
    // 'value' attribute on TextInput (id=PayTo_Input) at CheckDV.pcf: line 17, column 64
    function valueRoot_2 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextInput (id=Transfer_Check_Input) at CheckDV.pcf: line 61, column 42
    function valueRoot_31 () : java.lang.Object {
      return Check.getTransferredToCheck().Claim
    }
    
    // 'value' attribute on TextInput (id=PayTo_Input) at CheckDV.pcf: line 17, column 64
    function value_1 () : java.lang.String {
      return Check.PayTo
    }
    
    // 'value' attribute on TextInput (id=BulkInvoice_Input) at CheckDV.pcf: line 170, column 42
    function value_105 () : java.lang.String {
      return Check.BulkInvoiceNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_119 () : entity.Contact {
      return Check.Claimant
    }
    
    // 'value' attribute on TextInput (id=Memo_Input) at CheckDV.pcf: line 32, column 29
    function value_12 () : java.lang.String {
      return Check.Memo
    }
    
    // 'value' attribute on DateInput (id=DateOfService_Input) at CheckDV.pcf: line 181, column 58
    function value_128 () : java.util.Date {
      return Check.DateOfService
    }
    
    // 'value' attribute on TextInput (id=ServicePeriod_Input) at CheckDV.pcf: line 186, column 57
    function value_133 () : java.lang.String {
      return Check.ServicePeriodString
    }
    
    // 'value' attribute on TextInput (id=Comments_Input) at CheckDV.pcf: line 190, column 33
    function value_137 () : java.lang.String {
      return Check.Comments
    }
    
    // 'value' attribute on TextInput (id=MailToContact_Input) at CheckDV.pcf: line 206, column 64
    function value_143 () : java.lang.String {
      return Check.MailTo
    }
    
    // 'value' attribute on TypeKeyInput (id=PaymentMethod_Input) at CheckDV.pcf: line 211, column 44
    function value_147 () : typekey.PaymentMethod {
      return Check.PaymentMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=CheckBatching_Input) at CheckDV.pcf: line 216, column 44
    function value_150 () : typekey.CheckBatching {
      return Check.CheckBatching
    }
    
    // 'value' attribute on TypeKeyInput (id=DeliveryMethod_Input) at CheckDV.pcf: line 222, column 64
    function value_154 () : typekey.DeliveryMethod {
      return Check.DeliveryMethod
    }
    
    // 'value' attribute on TypeKeyInput (id=CheckInstructions_Input) at CheckDV.pcf: line 227, column 56
    function value_158 () : typekey.CheckHandlingInstructions {
      return Check.CheckInstructions
    }
    
    // 'value' attribute on TextInput (id=Portion_Percentage_Input) at CheckDV.pcf: line 41, column 53
    function value_16 () : java.math.BigDecimal {
      return Check.Portion.Percentage
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at CheckDV.pcf: line 235, column 48
    function value_161 () : typekey.TransactionStatus {
      return Check.Status
    }
    
    // 'value' attribute on DateInput (id=IssueDate_Input) at CheckDV.pcf: line 239, column 34
    function value_164 () : java.util.Date {
      return Check.IssueDate
    }
    
    // 'value' attribute on DateInput (id=ScheduledSendDate_Input) at CheckDV.pcf: line 243, column 42
    function value_167 () : java.util.Date {
      return Check.ScheduledSendDate
    }
    
    // 'value' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_180 () : entity.UserContact {
      return Check.CreateUser.Contact
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at CheckDV.pcf: line 254, column 35
    function value_189 () : java.util.Date {
      return Check.CreateTime
    }
    
    // 'value' attribute on TextInput (id=Recurrence_Description_Input) at CheckDV.pcf: line 261, column 141
    function value_192 () : java.lang.String {
      return Check.CheckSet.Recurrence.Description != null ? Check.CheckSet.Recurrence.Description : DisplayKey.get("Web.NA")
    }
    
    // 'value' attribute on CurrencyInput (id=Recurrence_Total_Input) at CheckDV.pcf: line 266, column 59
    function value_194 () : gw.api.financials.CurrencyAmountPair {
      return Check.CheckSet.Recurrence.TotalPair
    }
    
    // 'value' attribute on TextInput (id=Portion_FixedAmount_Input) at CheckDV.pcf: line 47, column 65
    function value_21 () : java.lang.String {
      return Check.Portion.getMultiCurrencyDisplayName(Check)
    }
    
    // 'value' attribute on RowIterator at CheckDV.pcf: line 314, column 56
    function value_230 () : entity.ServiceRequestInvoice[] {
      return Check.ServiceRequestInvoices
    }
    
    // 'value' attribute on CurrencyInput (id=Amount_Gross_Input) at CheckDV.pcf: line 53, column 59
    function value_24 () : gw.api.financials.CurrencyAmountPair {
      return Check.GrossAmountPair
    }
    
    // 'value' attribute on TextInput (id=Transfer_Check_Input) at CheckDV.pcf: line 61, column 42
    function value_30 () : java.lang.String {
      return Check.getTransferredToCheck().Claim.ClaimNumber
    }
    
    // 'value' attribute on CurrencyInput (id=Transfer_Amount_Input) at CheckDV.pcf: line 67, column 42
    function value_35 () : gw.api.financials.CurrencyAmount {
      return Check.getTransferredAmount()
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxReporting_Input) at CheckDV.pcf: line 72, column 48
    function value_38 () : typekey.ReportabilityType {
      return Check.Reportability
    }
    
    // 'value' attribute on TextInput (id=Amount_Reportable_Input) at CheckDV.pcf: line 76, column 199
    function value_41 () : java.lang.String {
      return (Check.Reportability == ReportabilityType.TC_NOTREPORTABLE) ? DisplayKey.get("Web.NA") : gw.api.util.CurrencyUtil.renderAsCurrency(Check.ReportableAmount, Check.Currency)
    }
    
    // 'value' attribute on TextInput (id=CheckNumber_Input) at CheckDV.pcf: line 90, column 64
    function value_46 () : java.lang.String {
      return Check.CheckNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=BankAccount_Input) at CheckDV.pcf: line 96, column 64
    function value_51 () : typekey.BankAccount {
      return Check.BankAccount
    }
    
    // 'value' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function value_56 () : entity.EFTData {
      return Check.EFTData
    }
    
    // 'value' attribute on TextInput (id=MailingAddress_Input) at CheckDV.pcf: line 22, column 64
    function value_6 () : java.lang.String {
      return Check.FormatAddressSummary(true)
    }
    
    // 'value' attribute on TextInput (id=BankName_Input) at CheckDV.pcf: line 122, column 34
    function value_72 () : java.lang.String {
      return Check.BankName
    }
    
    // 'value' attribute on RangeRadioInput (id=BankAccountType_Input) at CheckDV.pcf: line 134, column 47
    function value_78 () : typekey.BankAccountType {
      return Check.BankAccountType
    }
    
    // 'value' attribute on PrivacyInput (id=BankAccountNumber_Input) at CheckDV.pcf: line 145, column 43
    function value_87 () : java.lang.String {
      return Check.BankAccountNumber
    }
    
    // 'value' attribute on CurrencyInput (id=Amount_Net_Input) at CheckDV.pcf: line 28, column 59
    function value_9 () : gw.api.financials.CurrencyAmountPair {
      return Check.NetAmountPair
    }
    
    // 'value' attribute on TextInput (id=BankRoutingNumber_Input) at CheckDV.pcf: line 155, column 43
    function value_94 () : java.lang.String {
      return Check.BankRoutingNumber
    }
    
    // 'value' attribute on TextInput (id=InvoiceNumber_Input) at CheckDV.pcf: line 164, column 38
    function value_99 () : java.lang.String {
      return Check.InvoiceNumber
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_122 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_122 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_122 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_183 ($$arg :  entity.UserContact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_183 ($$arg :  gw.api.database.IQueryBeanResult<entity.UserContact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_183 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function verifyValueRangeIsAllowedType_60 ($$arg :  entity.EFTData[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function verifyValueRangeIsAllowedType_60 ($$arg :  gw.api.database.IQueryBeanResult<entity.EFTData>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function verifyValueRangeIsAllowedType_60 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at CheckDV.pcf: line 134, column 47
    function verifyValueRangeIsAllowedType_82 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at CheckDV.pcf: line 134, column 47
    function verifyValueRangeIsAllowedType_82 ($$arg :  typekey.BankAccountType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_123 () : void {
      var __valueRangeArg = Check.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_122(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_184 () : void {
      var __valueRangeArg = Check.Claim.RelatedUserContactArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_183(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function verifyValueRange_61 () : void {
      var __valueRangeArg = Check.FirstPayee.Payee.EFTRecords
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_60(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=BankAccountType_Input) at CheckDV.pcf: line 134, column 47
    function verifyValueRange_83 () : void {
      var __valueRangeArg = BankAccountType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_82(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=CreateUser_Input) at CheckDV.pcf: line 250, column 41
    function verifyValueType_188 () : void {
      var __valueTypeArg : entity.UserContact
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=PayTo_Input) at CheckDV.pcf: line 17, column 64
    function visible_0 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_109 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_112 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Check.Claimant), Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on DateInput (id=DateOfService_Input) at CheckDV.pcf: line 181, column 58
    function visible_127 () : java.lang.Boolean {
      return !Check.hasExposureWithServicePeriod()
    }
    
    // 'visible' attribute on TextInput (id=ServicePeriod_Input) at CheckDV.pcf: line 186, column 57
    function visible_132 () : java.lang.Boolean {
      return Check.hasExposureWithServicePeriod()
    }
    
    // 'visible' attribute on TextInput (id=Portion_Percentage_Input) at CheckDV.pcf: line 41, column 53
    function visible_15 () : java.lang.Boolean {
      return Check.Portion.Percentage != null
    }
    
    // 'visible' attribute on ClaimContactInput (id=CreateUser_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_173 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Check.CreateUser.Contact), Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=Portion_FixedAmount_Input) at CheckDV.pcf: line 47, column 65
    function visible_20 () : java.lang.Boolean {
      return Check.Portion.FixedTransactionAmount != null
    }
    
    // 'visible' attribute on ListViewInput at CheckDV.pcf: line 286, column 39
    function visible_201 () : java.lang.Boolean {
      return Check.Group != null
    }
    
    // 'visible' attribute on ListViewInput at CheckDV.pcf: line 293, column 53
    function visible_204 () : java.lang.Boolean {
      return Check.CheckSet.Recurrence != null
    }
    
    // 'visible' attribute on ListViewInput at CheckDV.pcf: line 300, column 40
    function visible_207 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'visible' attribute on ListViewInput at CheckDV.pcf: line 306, column 60
    function visible_231 () : java.lang.Boolean {
      return Check.ServiceRequestInvoices.HasElements
    }
    
    // 'visible' attribute on TextInput (id=Transfer_Check_Input) at CheckDV.pcf: line 61, column 42
    function visible_29 () : java.lang.Boolean {
      return Check.isTransferred()
    }
    
    // 'visible' attribute on RangeInput (id=EFTRecords_Input) at CheckDV.pcf: line 107, column 49
    function visible_55 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on InputSet (id=EFTDataInputSet) at CheckDV.pcf: line 99, column 63
    function visible_98 () : java.lang.Boolean {
      return Check.PaymentMethod == PaymentMethod.TC_EFT
    }
    
    property get Check () : Check {
      return getRequireValue("Check", 0) as Check
    }
    
    property set Check ($arg :  Check) {
      setRequireValue("Check", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/checks/CheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CheckDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=InvoiceReferenceNumber_Cell) at CheckDV.pcf: line 321, column 176
    function action_215 () : void {
      ClaimServiceRequests.go(invoice.Check.Claim, invoice.ServiceRequest, invoice)
    }
    
    // 'action' attribute on TextCell (id=InvoiceReferenceNumber_Cell) at CheckDV.pcf: line 321, column 176
    function action_dest_216 () : pcf.api.Destination {
      return pcf.ClaimServiceRequests.createDestination(invoice.Check.Claim, invoice.ServiceRequest, invoice)
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestNumber_Cell) at CheckDV.pcf: line 326, column 70
    function valueRoot_220 () : java.lang.Object {
      return invoice.ServiceRequest
    }
    
    // 'value' attribute on DateCell (id=SubmittedDate_Cell) at CheckDV.pcf: line 332, column 56
    function valueRoot_223 () : java.lang.Object {
      return invoice
    }
    
    // 'value' attribute on TextCell (id=InvoiceReferenceNumber_Cell) at CheckDV.pcf: line 321, column 176
    function value_217 () : java.lang.String {
      return invoice.ReferenceNumber.HasContent ? invoice.ReferenceNumber : DisplayKey.get("LV.Financials.Check.Invoices.InvoiceReferenceNumberMissing")
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestNumber_Cell) at CheckDV.pcf: line 326, column 70
    function value_219 () : java.lang.String {
      return invoice.ServiceRequest.ServiceRequestNumber
    }
    
    // 'value' attribute on DateCell (id=SubmittedDate_Cell) at CheckDV.pcf: line 332, column 56
    function value_222 () : java.util.Date {
      return invoice.StatementCreationTime
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at CheckDV.pcf: line 336, column 41
    function value_225 () : gw.api.financials.CurrencyAmount {
      return invoice.Amount
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at CheckDV.pcf: line 340, column 56
    function value_228 () : java.lang.String {
      return invoice.Description.elide(28)
    }
    
    property get invoice () : entity.ServiceRequestInvoice {
      return getIteratedValue(1) as entity.ServiceRequestInvoice
    }
    
    
  }
  
  
}