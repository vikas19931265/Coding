package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/recovery/RecoveryDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RecoveryDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/recovery/RecoveryDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RecoveryDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_39 () : void {
      AddressBookPickerPopup.push(statictypeof (recovery.OnBehalfOf), recovery.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_4 () : void {
      AddressBookPickerPopup.push(statictypeof (recovery.Payer), recovery.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_41 () : void {
      if (recovery.OnBehalfOf != null) { ClaimContactDetailPopup.push(recovery.OnBehalfOf, recovery.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_43 () : void {
      ClaimContactDetailPopup.push(recovery.OnBehalfOf, recovery.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_6 () : void {
      if (recovery.Payer != null) { ClaimContactDetailPopup.push(recovery.Payer, recovery.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_8 () : void {
      ClaimContactDetailPopup.push(recovery.Payer, recovery.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_40 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (recovery.OnBehalfOf), recovery.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_44 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(recovery.OnBehalfOf, recovery.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_5 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (recovery.Payer), recovery.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(recovery.Payer, recovery.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_1 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (recovery.Payer), null, recovery.Claim)
    }
    
    // 'def' attribute on InputSetRef at RecoveryDetailDV.pcf: line 30, column 73
    function def_onEnter_21 (def :  pcf.ReserveLineInputSet) : void {
      def.onEnter(recovery, reserveLineInputSetHelper)
    }
    
    // 'def' attribute on InputSetRef at RecoveryDetailDV.pcf: line 50, column 58
    function def_onEnter_33 (def :  pcf.TransactionExchangeRateInputSet) : void {
      def.onEnter(recovery)
    }
    
    // 'def' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_36 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (recovery.OnBehalfOf), null, recovery.Claim)
    }
    
    // 'def' attribute on ListViewInput at RecoveryDetailDV.pcf: line 96, column 27
    function def_onEnter_79 (def :  pcf.EditableRecoveryLineItemsLV) : void {
      def.onEnter(recovery)
    }
    
    // 'def' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_2 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (recovery.Payer), null, recovery.Claim)
    }
    
    // 'def' attribute on InputSetRef at RecoveryDetailDV.pcf: line 30, column 73
    function def_refreshVariables_22 (def :  pcf.ReserveLineInputSet) : void {
      def.refreshVariables(recovery, reserveLineInputSetHelper)
    }
    
    // 'def' attribute on InputSetRef at RecoveryDetailDV.pcf: line 50, column 58
    function def_refreshVariables_34 (def :  pcf.TransactionExchangeRateInputSet) : void {
      def.refreshVariables(recovery)
    }
    
    // 'def' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_37 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (recovery.OnBehalfOf), null, recovery.Claim)
    }
    
    // 'def' attribute on ListViewInput at RecoveryDetailDV.pcf: line 96, column 27
    function def_refreshVariables_80 (def :  pcf.EditableRecoveryLineItemsLV) : void {
      def.refreshVariables(recovery)
    }
    
    // 'value' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      recovery.Payer = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCategory_Input) at RecoveryDetailDV.pcf: line 37, column 46
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      recovery.RecoveryCategory = (__VALUE_TO_SET as typekey.RecoveryCategory)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at RecoveryDetailDV.pcf: line 46, column 66
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      recoveryHelper.RecoveryCurrency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      recovery.OnBehalfOf = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=Comments_Input) at RecoveryDetailDV.pcf: line 67, column 36
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      recovery.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on ListViewInput at RecoveryDetailDV.pcf: line 96, column 27
    function editable_78 () : java.lang.Boolean {
      return recovery.ReserveLine != null
    }
    
    // 'onChange' attribute on ClaimContactInput (id=Payer_Input) at RecoveryDetailDV.pcf: line 27, column 64
    function onChange_7 () : void {
      recoveryHelper.autoSetRecoveryCurrency()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_10 (PickedValue :  Contact) : void {
      var contactType = statictypeof (recovery.Payer); var result = eval("recovery.Payer = recovery.Claim.resolveContact(recovery.Payer) as " + contactType.Name + ";return null;"); recoveryHelper.autoSetRecoveryCurrency();
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Payer_Input) at RecoveryDetailDV.pcf: line 25, column 53
    function onPick_17 (PickedValue :  java.lang.Object) : void {
      recoveryHelper.autoSetRecoveryCurrency()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_45 (PickedValue :  Contact) : void {
      var contactType = statictypeof (recovery.OnBehalfOf); var result = eval("recovery.OnBehalfOf = recovery.Claim.resolveContact(recovery.OnBehalfOf) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_14 () : java.lang.Object {
      return recovery.Claim.RelatedContacts
    }
    
    // 'value' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_13 () : java.lang.Object {
      return recovery
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at RecoveryDetailDV.pcf: line 46, column 66
    function valueRoot_30 () : java.lang.Object {
      return recoveryHelper
    }
    
    // 'value' attribute on CurrencyInput (id=OpenRecoveryReserves_Input) at RecoveryDetailDV.pcf: line 74, column 147
    function valueRoot_63 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getOpenRecoveryReserves(recovery)
    }
    
    // 'value' attribute on CurrencyInput (id=Payments_Input) at RecoveryDetailDV.pcf: line 81, column 95
    function valueRoot_68 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getTotalPayments(recovery)
    }
    
    // 'value' attribute on CurrencyInput (id=PastRecoveries_Input) at RecoveryDetailDV.pcf: line 88, column 97
    function valueRoot_73 () : java.lang.Object {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getTotalRecoveries(recovery)
    }
    
    // 'value' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_11 () : entity.Contact {
      return recovery.Payer
    }
    
    // 'value' attribute on TypeKeyInput (id=RecoveryCategory_Input) at RecoveryDetailDV.pcf: line 37, column 46
    function value_23 () : typekey.RecoveryCategory {
      return recovery.RecoveryCategory
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at RecoveryDetailDV.pcf: line 46, column 66
    function value_28 () : typekey.Currency {
      return recoveryHelper.RecoveryCurrency
    }
    
    // 'value' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_46 () : entity.Contact {
      return recovery.OnBehalfOf
    }
    
    // 'value' attribute on TextInput (id=Comments_Input) at RecoveryDetailDV.pcf: line 67, column 36
    function value_57 () : java.lang.String {
      return recovery.Comments
    }
    
    // 'value' attribute on CurrencyInput (id=OpenRecoveryReserves_Input) at RecoveryDetailDV.pcf: line 74, column 147
    function value_62 () : gw.api.financials.IMoney {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getOpenRecoveryReserves(recovery).ReservingAmount
    }
    
    // 'value' attribute on CurrencyInput (id=Payments_Input) at RecoveryDetailDV.pcf: line 81, column 95
    function value_67 () : gw.api.financials.IMoney {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getTotalPayments(recovery).ReservingAmount
    }
    
    // 'value' attribute on CurrencyInput (id=PastRecoveries_Input) at RecoveryDetailDV.pcf: line 88, column 97
    function value_72 () : gw.api.financials.IMoney {
      return gw.api.financials.FinancialsCalculationsForEditedTransaction.getTotalRecoveries(recovery).ReservingAmount
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_15 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_50 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_50 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_50 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_16 () : void {
      var __valueRangeArg = recovery.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_51 () : void {
      var __valueRangeArg = recovery.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_50(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_0 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at RecoveryDetailDV.pcf: line 46, column 66
    function visible_27 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ClaimContactInput (id=Payer_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_3 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (recovery.Payer), recovery.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_38 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (recovery.OnBehalfOf), recovery.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=OnBehalfOf_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_42 () : java.lang.Boolean {
      return recovery.RecoveryCategory == RecoveryCategory.TC_SUBRO
    }
    
    // 'visible' attribute on CurrencyInput (id=OpenRecoveryReserves_Input) at RecoveryDetailDV.pcf: line 74, column 147
    function visible_61 () : java.lang.Boolean {
      return shouldShowCalculation() && recovery.isUseRecoveryReserves() && perm.Claim.viewrecoveryreserves(recovery.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=Payments_Input) at RecoveryDetailDV.pcf: line 81, column 95
    function visible_66 () : java.lang.Boolean {
      return shouldShowCalculation() && perm.Claim.viewpayments(recovery.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=PastRecoveries_Input) at RecoveryDetailDV.pcf: line 88, column 97
    function visible_71 () : java.lang.Boolean {
      return shouldShowCalculation() && perm.Claim.viewrecoveries(recovery.Claim)
    }
    
    // 'addVisible' attribute on IteratorButtons at RecoveryDetailDV.pcf: line 103, column 90
    function visible_76 () : java.lang.Boolean {
      return gw.api.financials.FinancialsUtil.isAllowMultipleLineItems()
    }
    
    property get recovery () : Recovery {
      return getRequireValue("recovery", 0) as Recovery
    }
    
    property set recovery ($arg :  Recovery) {
      setRequireValue("recovery", 0, $arg)
    }
    
    property get recoveryHelper () : gw.api.financials.RecoveryHelper {
      return getRequireValue("recoveryHelper", 0) as gw.api.financials.RecoveryHelper
    }
    
    property set recoveryHelper ($arg :  gw.api.financials.RecoveryHelper) {
      setRequireValue("recoveryHelper", 0, $arg)
    }
    
    property get reserveLineInputSetHelper () : gw.api.financials.ReserveLineInputSetHelper {
      return getRequireValue("reserveLineInputSetHelper", 0) as gw.api.financials.ReserveLineInputSetHelper
    }
    
    property set reserveLineInputSetHelper ($arg :  gw.api.financials.ReserveLineInputSetHelper) {
      setRequireValue("reserveLineInputSetHelper", 0, $arg)
    }
    
    function shouldShowCalculation() : boolean {
      var reserveLine = recovery.ReserveLine
      if (reserveLine == null) {
        return false
      } else if (reserveLine.New) {
        return recovery.CostType != null && recovery.CostCategory != null && recovery.ReservingCurrency != null
      }
      return true
    }
    
    
  }
  
  
}