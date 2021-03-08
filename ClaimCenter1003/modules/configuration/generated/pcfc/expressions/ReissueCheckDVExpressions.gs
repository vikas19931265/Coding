package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/ReissueCheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ReissueCheckDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/ReissueCheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ReissueCheckDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_47 () : void {
      AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_49 () : void {
      if (CheckPayee.Payee != null) { ClaimContactDetailPopup.push(CheckPayee.Payee, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_51 () : void {
      ClaimContactDetailPopup.push(CheckPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_48 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (CheckPayee.Payee), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_52 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(CheckPayee.Payee, Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_44 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (CheckPayee.Payee), null, Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_45 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (CheckPayee.Payee), null, Check.Claim)
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at ReissueCheckDV.pcf: line 95, column 50
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'onChange' attribute on ClaimContactCell (id=PayeeName_Cell) at ReissueCheckDV.pcf: line 86, column 70
    function onChange_50 () : void {
      Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_53 (PickedValue :  Contact) : void {
      var contactType = statictypeof (CheckPayee.Payee); var result = eval("CheckPayee.Payee = Check.Claim.resolveContact(CheckPayee.Payee) as " + contactType.Name + ";return null;"); Check.handleOnPickForPayee(CheckPayee);
    }
    
    // 'onPick' attribute on ClaimContactCell (id=PayeeName_Cell) at ReissueCheckDV.pcf: line 84, column 58
    function onPick_60 (PickedValue :  java.lang.Object) : void {
      Check.handleOnPickForPayee(CheckPayee)
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=PayeeType_Cell) at ReissueCheckDV.pcf: line 95, column 50
    function validationExpression_64 () : java.lang.Object {
      return CheckPayee.PayeeType == TC_CLAIMANT && !CheckPayee.ClaimContact.isClaimant() ? DisplayKey.get("Java.NewPayment.Error.PayeeIsNotClaimant") : null
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_57 () : java.lang.Object {
      return Check.Claim.PayeeCandidates
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_56 () : java.lang.Object {
      return CheckPayee
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_54 () : entity.Contact {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at ReissueCheckDV.pcf: line 95, column 50
    function value_65 () : typekey.ContactRole {
      return CheckPayee.PayeeType
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_58 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_58 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_58 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_59 () : void {
      var __valueRangeArg = Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_58(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_43 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=PayeeName_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_46 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get CheckPayee () : entity.CheckPayee {
      return getIteratedValue(1) as entity.CheckPayee
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/ReissueCheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReissueCheckDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_11 () : void {
      if (Check.FirstPayee.Payee != null) { ClaimContactDetailPopup.push(Check.FirstPayee.Payee, Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_14 () : void {
      ClaimContactDetailPopup.push(Check.FirstPayee.Payee, Check.Claim)
    }
    
    // 'action' attribute on ButtonInput (id=AddJointPayees_Input) at ReissueCheckDV.pcf: line 55, column 48
    function action_39 () : void {
      Check.addNewPayee()
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_9 () : void {
      AddressBookPickerPopup.push(statictypeof (Check.FirstPayee.Payee), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Check.FirstPayee.Payee), Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Check.FirstPayee.Payee, Check.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at ReissueCheckDV.pcf: line 147, column 86
    function def_onEnter_102 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Check.CheckAddressOwner)
    }
    
    // 'def' attribute on ListViewInput at ReissueCheckDV.pcf: line 174, column 27
    function def_onEnter_116 (def :  pcf.CheckSummaryPaymentsLV) : void {
      def.onEnter(Check.Group.PrimaryCheck.Payments)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_6 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Check.FirstPayee.Payee), null, Check.Claim)
    }
    
    // 'def' attribute on InputSetRef (id=MailingAddressInputSet) at ReissueCheckDV.pcf: line 147, column 86
    function def_refreshVariables_103 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Check.CheckAddressOwner)
    }
    
    // 'def' attribute on ListViewInput at ReissueCheckDV.pcf: line 174, column 27
    function def_refreshVariables_117 (def :  pcf.CheckSummaryPaymentsLV) : void {
      def.refreshVariables(Check.Group.PrimaryCheck.Payments)
    }
    
    // 'def' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_7 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Check.FirstPayee.Payee), null, Check.Claim)
    }
    
    // 'value' attribute on TextInput (id=Check_Comments_Input) at ReissueCheckDV.pcf: line 24, column 33
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.Comments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_DeductionType_Input) at ReissueCheckDV.pcf: line 159, column 40
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.DeductionType = (__VALUE_TO_SET as typekey.DeductionType)
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.FirstPayee.Payee = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at ReissueCheckDV.pcf: line 50, column 48
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.FirstPayee.PayeeType = (__VALUE_TO_SET as typekey.ContactRole)
    }
    
    // 'value' attribute on TextAreaInput (id=Check_PayTo_Input) at ReissueCheckDV.pcf: line 108, column 30
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.PayTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_DeliveryMethod_Input) at ReissueCheckDV.pcf: line 120, column 64
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.DeliveryMethod = (__VALUE_TO_SET as typekey.DeliveryMethod)
    }
    
    // 'value' attribute on TextInput (id=Check_MailToContact_Input) at ReissueCheckDV.pcf: line 127, column 64
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.MailTo = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at ReissueCheckDV.pcf: line 140, column 98
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      showAddressFields = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'onChange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ReissueCheckDV.pcf: line 40, column 126
    function onChange_12 () : void {
      Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_16 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Check.FirstPayee.Payee); var result = eval("Check.FirstPayee.Payee = Check.Claim.resolveContact(Check.FirstPayee.Payee) as " + contactType.Name + ";return null;"); Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ReissueCheckDV.pcf: line 38, column 47
    function onPick_24 (PickedValue :  java.lang.Object) : void {
      Check.handleOnPickForPayee(Check.FirstPayee); showAddressFields = !Check.addressRequiredFieldsValid();
    }
    
    // 'value' attribute on ClaimContactCell (id=PayeeName_Cell) at ReissueCheckDV.pcf: line 84, column 58
    function sortValue_41 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=PayeeType_Cell) at ReissueCheckDV.pcf: line 95, column 50
    function sortValue_42 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.PayeeType
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at ReissueCheckDV.pcf: line 74, column 45
    function toCreateAndAdd_70 () : entity.CheckPayee {
      return Check.addNewPayee()
    }
    
    // 'toRemove' attribute on RowIterator at ReissueCheckDV.pcf: line 74, column 45
    function toRemove_71 (CheckPayee :  entity.CheckPayee) : void {
      Check.removeFromPayees(CheckPayee); Check.handleOnPickForPayee(null)
    }
    
    // 'validationExpression' attribute on TypeKeyInput (id=Check_DeductionType_Input) at ReissueCheckDV.pcf: line 159, column 40
    function validationExpression_105 () : java.lang.Object {
      return (Check.isPrimary()) ? ((Check.DeductionType != null) ? DisplayKey.get("Java.NewPayment.Error.DeductionTypeNotNull") : null) : ((Check.DeductionType == null) ? DisplayKey.get("Java.NewPayment.Error.DeductionTypeNull") : null)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_20 () : java.lang.Object {
      return Check.Claim.PayeeCandidates
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at ReissueCheckDV.pcf: line 50, column 48
    function valueRange_33 () : java.lang.Object {
      return Check.getAllowedPayeeTypes(Check.FirstPayee.Payee)
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_19 () : java.lang.Object {
      return Check.FirstPayee
    }
    
    // 'value' attribute on TextInput (id=Check_Comments_Input) at ReissueCheckDV.pcf: line 24, column 33
    function valueRoot_2 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TextInput (id=Check_MailingAddress_Input) at ReissueCheckDV.pcf: line 133, column 64
    function valueRoot_93 () : java.lang.Object {
      return Check.CheckAddressOwner
    }
    
    // 'value' attribute on TextInput (id=Check_Comments_Input) at ReissueCheckDV.pcf: line 24, column 33
    function value_0 () : java.lang.String {
      return Check.Comments
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_DeductionType_Input) at ReissueCheckDV.pcf: line 159, column 40
    function value_107 () : typekey.DeductionType {
      return Check.DeductionType
    }
    
    // 'value' attribute on CurrencyInput (id=Check_NetAmount_Input) at ReissueCheckDV.pcf: line 167, column 59
    function value_113 () : gw.api.financials.CurrencyAmountPair {
      return Check.NetAmountPair
    }
    
    // 'value' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_17 () : entity.Contact {
      return Check.FirstPayee.Payee
    }
    
    // 'value' attribute on RangeInput (id=PrimaryPayee_Type_Input) at ReissueCheckDV.pcf: line 50, column 48
    function value_30 () : typekey.ContactRole {
      return Check.FirstPayee.PayeeType
    }
    
    // 'value' attribute on RowIterator at ReissueCheckDV.pcf: line 74, column 45
    function value_72 () : entity.CheckPayee[] {
      return Check.Payees
    }
    
    // 'value' attribute on TextAreaInput (id=Check_PayTo_Input) at ReissueCheckDV.pcf: line 108, column 30
    function value_74 () : java.lang.String {
      return Check.PayTo
    }
    
    // 'value' attribute on TypeKeyInput (id=Check_DeliveryMethod_Input) at ReissueCheckDV.pcf: line 120, column 64
    function value_80 () : typekey.DeliveryMethod {
      return Check.DeliveryMethod
    }
    
    // 'value' attribute on TextInput (id=Check_MailToContact_Input) at ReissueCheckDV.pcf: line 127, column 64
    function value_86 () : java.lang.String {
      return Check.MailTo
    }
    
    // 'value' attribute on TextInput (id=Check_MailingAddress_Input) at ReissueCheckDV.pcf: line 133, column 64
    function value_92 () : entity.Address {
      return Check.CheckAddressOwner.Address
    }
    
    // 'value' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at ReissueCheckDV.pcf: line 140, column 98
    function value_97 () : java.lang.Boolean {
      return showAddressFields
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at ReissueCheckDV.pcf: line 50, column 48
    function verifyValueRangeIsAllowedType_34 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at ReissueCheckDV.pcf: line 50, column 48
    function verifyValueRangeIsAllowedType_34 ($$arg :  typekey.ContactRole[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_22 () : void {
      var __valueRangeArg = Check.Claim.PayeeCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=PrimaryPayee_Type_Input) at ReissueCheckDV.pcf: line 50, column 48
    function verifyValueRange_35 () : void {
      var __valueRangeArg = Check.getAllowedPayeeTypes(Check.FirstPayee.Payee)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_34(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSetRef (id=MailingAddressInputSet) at ReissueCheckDV.pcf: line 147, column 86
    function visible_101 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and showAddressFields
    }
    
    // 'visible' attribute on InputDivider at ReissueCheckDV.pcf: line 149, column 40
    function visible_104 () : java.lang.Boolean {
      return oldCheckIsSecondary
    }
    
    // 'visible' attribute on Label at ReissueCheckDV.pcf: line 28, column 48
    function visible_4 () : java.lang.Boolean {
      return Check.Payees.length <= 1
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_5 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ListViewInput at ReissueCheckDV.pcf: line 61, column 46
    function visible_73 () : java.lang.Boolean {
      return Check.Payees.length > 1
    }
    
    // 'visible' attribute on Label at ReissueCheckDV.pcf: line 113, column 64
    function visible_78 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT
    }
    
    // 'visible' attribute on ClaimContactInput (id=PrimaryPayee_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_8 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Check.FirstPayee.Payee), Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on CheckBoxInput (id=ToggleAddressEdit_Input) at ReissueCheckDV.pcf: line 140, column 98
    function visible_96 () : java.lang.Boolean {
      return Check.PaymentMethod != PaymentMethod.TC_EFT and Check.FirstPayee.Payee != null
    }
    
    property get Check () : Check {
      return getRequireValue("Check", 0) as Check
    }
    
    property set Check ($arg :  Check) {
      setRequireValue("Check", 0, $arg)
    }
    
    property get oldCheckIsSecondary () : Boolean {
      return getRequireValue("oldCheckIsSecondary", 0) as Boolean
    }
    
    property set oldCheckIsSecondary ($arg :  Boolean) {
      setRequireValue("oldCheckIsSecondary", 0, $arg)
    }
    
    property get showAddressFields () : boolean {
      return getVariableValue("showAddressFields", 0) as java.lang.Boolean
    }
    
    property set showAddressFields ($arg :  boolean) {
      setVariableValue("showAddressFields", 0, $arg)
    }
    
    
  }
  
  
}