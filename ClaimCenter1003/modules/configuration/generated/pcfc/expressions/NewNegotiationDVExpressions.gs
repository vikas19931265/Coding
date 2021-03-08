package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newother/NewNegotiationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewNegotiationDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newother/NewNegotiationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewNegotiationDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_33 () : void {
      AddressBookPickerPopup.push(statictypeof (Negotiation.negcontact), Negotiation.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_35 () : void {
      if (Negotiation.negcontact != null) { ClaimContactDetailPopup.push(Negotiation.negcontact, Negotiation.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_36 () : void {
      ClaimContactDetailPopup.push(Negotiation.negcontact, Negotiation.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_34 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Negotiation.negcontact), Negotiation.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_37 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Negotiation.negcontact, Negotiation.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_30 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Negotiation.negcontact), null, Negotiation.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewNegotiationDV.pcf: line 103, column 27
    function def_onEnter_64 (def :  pcf.EditableNegotiationLinesLV) : void {
      def.onEnter(Negotiation)
    }
    
    // 'def' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_31 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Negotiation.negcontact), null, Negotiation.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewNegotiationDV.pcf: line 103, column 27
    function def_refreshVariables_65 (def :  pcf.EditableNegotiationLinesLV) : void {
      def.refreshVariables(Negotiation)
    }
    
    // 'value' attribute on TextInput (id=General_Name_Input) at NewNegotiationDV.pcf: line 17, column 35
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=General_TargetOffer_Input) at NewNegotiationDV.pcf: line 40, column 42
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.TargetOffer = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextAreaInput (id=General_TargetOfferRationale_Input) at NewNegotiationDV.pcf: line 47, column 40
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.Rationale = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.RelatedTo = (__VALUE_TO_SET as gw.pl.persistence.core.Bean)
    }
    
    // 'value' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.negcontact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextAreaInput (id=General_DefenseArgument_Input) at NewNegotiationDV.pcf: line 74, column 46
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.DefenseArgument = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=General_OverallLiabilityAssessment_Input) at NewNegotiationDV.pcf: line 25, column 44
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.LiabilityEval = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextAreaInput (id=General_PlaintiffArgument_Input) at NewNegotiationDV.pcf: line 81, column 48
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.PlaintiffArgument = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=General_SettlementPlan_Input) at NewNegotiationDV.pcf: line 88, column 45
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.SettlementPlan = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=General_AlternativeToSettlement_Input) at NewNegotiationDV.pcf: line 96, column 54
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.AlternativeToSettlement = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=General_MaxOffer_Input) at NewNegotiationDV.pcf: line 32, column 39
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      Negotiation.MaxOffer = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_38 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Negotiation.negcontact); var result = eval("Negotiation.negcontact = Negotiation.Claim.resolveContact(Negotiation.negcontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function optionGroupLabel_23 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionGroupLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function optionLabel_24 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionLabel(VALUE as KeyableBean)
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function valueRange_25 () : java.lang.Object {
      return Negotiation.Claim.RelatedToCandidates
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_42 () : java.lang.Object {
      return Negotiation.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=General_Name_Input) at NewNegotiationDV.pcf: line 17, column 35
    function valueRoot_2 () : java.lang.Object {
      return Negotiation
    }
    
    // 'value' attribute on TextInput (id=General_Name_Input) at NewNegotiationDV.pcf: line 17, column 35
    function value_0 () : java.lang.String {
      return Negotiation.Name
    }
    
    // 'value' attribute on CurrencyInput (id=General_TargetOffer_Input) at NewNegotiationDV.pcf: line 40, column 42
    function value_12 () : gw.api.financials.CurrencyAmount {
      return Negotiation.TargetOffer
    }
    
    // 'value' attribute on TextAreaInput (id=General_TargetOfferRationale_Input) at NewNegotiationDV.pcf: line 47, column 40
    function value_16 () : java.lang.String {
      return Negotiation.Rationale
    }
    
    // 'value' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function value_20 () : gw.pl.persistence.core.Bean {
      return Negotiation.RelatedTo
    }
    
    // 'value' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_39 () : entity.Contact {
      return Negotiation.negcontact
    }
    
    // 'value' attribute on CurrencyInput (id=General_OverallLiabilityAssessment_Input) at NewNegotiationDV.pcf: line 25, column 44
    function value_4 () : gw.api.financials.CurrencyAmount {
      return Negotiation.LiabilityEval
    }
    
    // 'value' attribute on TextAreaInput (id=General_DefenseArgument_Input) at NewNegotiationDV.pcf: line 74, column 46
    function value_48 () : java.lang.String {
      return Negotiation.DefenseArgument
    }
    
    // 'value' attribute on TextAreaInput (id=General_PlaintiffArgument_Input) at NewNegotiationDV.pcf: line 81, column 48
    function value_52 () : java.lang.String {
      return Negotiation.PlaintiffArgument
    }
    
    // 'value' attribute on TextAreaInput (id=General_SettlementPlan_Input) at NewNegotiationDV.pcf: line 88, column 45
    function value_56 () : java.lang.String {
      return Negotiation.SettlementPlan
    }
    
    // 'value' attribute on TextAreaInput (id=General_AlternativeToSettlement_Input) at NewNegotiationDV.pcf: line 96, column 54
    function value_60 () : java.lang.String {
      return Negotiation.AlternativeToSettlement
    }
    
    // 'value' attribute on CurrencyInput (id=General_MaxOffer_Input) at NewNegotiationDV.pcf: line 32, column 39
    function value_8 () : gw.api.financials.CurrencyAmount {
      return Negotiation.MaxOffer
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.pl.persistence.core.Bean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_43 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_43 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewNegotiationDV.pcf: line 59, column 50
    function verifyValueRange_27 () : void {
      var __valueRangeArg = Negotiation.Claim.RelatedToCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_44 () : void {
      var __valueRangeArg = Negotiation.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_43(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_29 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=General_NegContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_32 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Negotiation.negcontact), Negotiation.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Negotiation () : Negotiation {
      return getRequireValue("Negotiation", 0) as Negotiation
    }
    
    property set Negotiation ($arg :  Negotiation) {
      setRequireValue("Negotiation", 0, $arg)
    }
    
    
  }
  
  
}