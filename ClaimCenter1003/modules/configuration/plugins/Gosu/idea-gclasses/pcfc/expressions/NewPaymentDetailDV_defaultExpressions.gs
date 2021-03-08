package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/NewPaymentDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewPaymentDetailDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/NewPaymentDetailDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewPaymentDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ApplyDeductibleButton) at NewPaymentDetailDV.default.pcf: line 91, column 52
    function action_39 () : void {
      Payment.addDeductibleLineItem()
    }
    
    // 'available' attribute on ToolbarButton (id=ApplyDeductibleButton) at NewPaymentDetailDV.default.pcf: line 91, column 52
    function available_37 () : java.lang.Boolean {
      return Payment.canAddDeductibleLineItem()
    }
    
    // 'available' attribute on ListViewInput at NewPaymentDetailDV.default.pcf: line 76, column 84
    function available_42 () : java.lang.Boolean {
      return Payment.ReserveLine != null
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 28, column 72
    function def_onEnter_1 (def :  pcf.ReserveLineInputSet) : void {
      def.onEnter(Payment, reserveLineInputSetHelper)
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 69, column 62
    function def_onEnter_33 (def :  pcf.CheckExchangeRateInputSet) : void {
      def.onEnter(Payment.Check,null)
    }
    
    // 'def' attribute on ListViewInput at NewPaymentDetailDV.default.pcf: line 76, column 84
    function def_onEnter_44 (def :  pcf.EditablePaymentLineItemsLV_default) : void {
      def.onEnter(Payment)
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 99, column 57
    function def_onEnter_48 (def :  pcf.ServiceRequestInvoiceInputSet_multiple) : void {
      def.onEnter(Wizard, true)
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 99, column 57
    function def_onEnter_50 (def :  pcf.ServiceRequestInvoiceInputSet_single) : void {
      def.onEnter(Wizard, true)
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 28, column 72
    function def_refreshVariables_2 (def :  pcf.ReserveLineInputSet) : void {
      def.refreshVariables(Payment, reserveLineInputSetHelper)
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 69, column 62
    function def_refreshVariables_34 (def :  pcf.CheckExchangeRateInputSet) : void {
      def.refreshVariables(Payment.Check,null)
    }
    
    // 'def' attribute on ListViewInput at NewPaymentDetailDV.default.pcf: line 76, column 84
    function def_refreshVariables_45 (def :  pcf.EditablePaymentLineItemsLV_default) : void {
      def.refreshVariables(Payment)
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 99, column 57
    function def_refreshVariables_49 (def :  pcf.ServiceRequestInvoiceInputSet_multiple) : void {
      def.refreshVariables(Wizard, true)
    }
    
    // 'def' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 99, column 57
    function def_refreshVariables_51 (def :  pcf.ServiceRequestInvoiceInputSet_single) : void {
      def.refreshVariables(Wizard, true)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Payment_Eroding_Input) at NewPaymentDetailDV.default.pcf: line 44, column 98
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.ErodesReserves = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Transaction_Comments_Input) at NewPaymentDetailDV.default.pcf: line 56, column 35
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at NewPaymentDetailDV.default.pcf: line 64, column 66
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Wizard.CheckCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at NewPaymentDetailDV.default.pcf: line 37, column 42
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Payment.PaymentType = (__VALUE_TO_SET as typekey.PaymentType)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Payment_Currency_Input) at NewPaymentDetailDV.default.pcf: line 64, column 66
    function editable_25 () : java.lang.Boolean {
      return not Wizard.Check.LinkedToServiceRequests
    }
    
    // 'filter' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at NewPaymentDetailDV.default.pcf: line 37, column 42
    function filter_7 (VALUE :  typekey.PaymentType, VALUES :  typekey.PaymentType[]) : java.lang.Boolean {
      return Wizard.isAllowedPaymentType( Payment, VALUE )
    }
    
    // 'initialValue' attribute on Variable at NewPaymentDetailDV.default.pcf: line 25, column 26
    function initialValue_0 () : Deductible {
      return Payment.SharedDeductible
    }
    
    // 'label' attribute on ToolbarButton (id=ApplyDeductibleButton) at NewPaymentDetailDV.default.pcf: line 91, column 52
    function label_40 () : java.lang.Object {
      return Payment.LabelForAddDeductibleButton
    }
    
    // 'mode' attribute on ListViewInput at NewPaymentDetailDV.default.pcf: line 76, column 84
    function mode_46 () : java.lang.Object {
      return getMode()
    }
    
    // 'mode' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 99, column 57
    function mode_52 () : java.lang.Object {
      return Wizard.Check.ServiceRequestInvoices.Count == 1 ? "single" : "multiple"
    }
    
    // 'onChange' attribute on PostOnChange at NewPaymentDetailDV.default.pcf: line 66, column 57
    function onChange_24 () : void {
      Wizard.Check.unapplyDeductibles()
    }
    
    // 'requestValidationExpression' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at NewPaymentDetailDV.default.pcf: line 37, column 42
    function requestValidationExpression_3 (VALUE :  typekey.PaymentType) : java.lang.Object {
      return Wizard.validatePaymentType(Payment, VALUE)
    }
    
    // 'tooltip' attribute on ToolbarButton (id=ApplyDeductibleButton) at NewPaymentDetailDV.default.pcf: line 91, column 52
    function tooltip_41 () : java.lang.String {
      return new gw.api.financials.PaymentUIHelper(Payment).DeductibleButtonToolTip
    }
    
    // 'validationExpression' attribute on ListViewInput at NewPaymentDetailDV.default.pcf: line 76, column 84
    function validationExpression_43 () : java.lang.Object {
      return Payment.getCheckWizardPaymentValidationExpression()
    }
    
    // 'value' attribute on CurrencyInput (id=Transaction_AvailableReserves_Input) at NewPaymentDetailDV.default.pcf: line 51, column 80
    function valueRoot_17 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getAvailableReserves(Payment)
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at NewPaymentDetailDV.default.pcf: line 64, column 66
    function valueRoot_29 () : java.lang.Object {
      return Wizard
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at NewPaymentDetailDV.default.pcf: line 37, column 42
    function valueRoot_6 () : java.lang.Object {
      return Payment
    }
    
    // 'value' attribute on BooleanRadioInput (id=Payment_Eroding_Input) at NewPaymentDetailDV.default.pcf: line 44, column 98
    function value_10 () : java.lang.Boolean {
      return Payment.ErodesReserves
    }
    
    // 'value' attribute on CurrencyInput (id=Transaction_AvailableReserves_Input) at NewPaymentDetailDV.default.pcf: line 51, column 80
    function value_16 () : gw.api.financials.IPairedMoney {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getAvailableReserves(Payment).ReservingAmountTransactionAmountPair
    }
    
    // 'value' attribute on TextInput (id=Transaction_Comments_Input) at NewPaymentDetailDV.default.pcf: line 56, column 35
    function value_20 () : java.lang.String {
      return Payment.Comments
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_Currency_Input) at NewPaymentDetailDV.default.pcf: line 64, column 66
    function value_27 () : typekey.Currency {
      return Wizard.CheckCurrency
    }
    
    // 'value' attribute on TypeKeyInput (id=Payment_PaymentType_Input) at NewPaymentDetailDV.default.pcf: line 37, column 42
    function value_4 () : typekey.PaymentType {
      return Payment.PaymentType
    }
    
    // 'visible' attribute on CurrencyInput (id=Transaction_AvailableReserves_Input) at NewPaymentDetailDV.default.pcf: line 51, column 80
    function visible_15 () : java.lang.Boolean {
      return Payment.ReserveLine != null and not Payment.ReserveLine.New
    }
    
    // 'visible' attribute on TypeKeyInput (id=Payment_Currency_Input) at NewPaymentDetailDV.default.pcf: line 64, column 66
    function visible_26 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'addVisible' attribute on IteratorButtons at NewPaymentDetailDV.default.pcf: line 83, column 90
    function visible_35 () : java.lang.Boolean {
      return gw.api.financials.FinancialsUtil.isAllowMultipleLineItems()
    }
    
    // 'visible' attribute on ToolbarButton (id=ApplyDeductibleButton) at NewPaymentDetailDV.default.pcf: line 91, column 52
    function visible_38 () : java.lang.Boolean {
      return Payment.DeductibleAvailable
    }
    
    // 'visible' attribute on InputSetRef at NewPaymentDetailDV.default.pcf: line 99, column 57
    function visible_47 () : java.lang.Boolean {
      return Wizard.Check.LinkedToServiceRequests
    }
    
    // 'visible' attribute on BooleanRadioInput (id=Payment_Eroding_Input) at NewPaymentDetailDV.default.pcf: line 44, column 98
    function visible_9 () : java.lang.Boolean {
      return !Payment.Exposure.Closed and Payment.PaymentType != PaymentType.TC_SUPPLEMENT
    }
    
    property get Payment () : Payment {
      return getRequireValue("Payment", 0) as Payment
    }
    
    property set Payment ($arg :  Payment) {
      setRequireValue("Payment", 0, $arg)
    }
    
    property get Wizard () : gw.api.financials.CheckWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.financials.CheckWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.financials.CheckWizardInfo) {
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
    
    
    function getMode() : String {
      if (Payment.LineItems.countWhere(\ t -> t.LineCategory==TC_DEDUCTIBLE) == 1) {
        return "deductible"
      } else {
        return "default"
      }
    }
          
        
    
    
  }
  
  
}