package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/AdverseParty/SubrogationPartyDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubrogationPartyDetailDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/AdverseParty/SubrogationPartyDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubrogationPartyDetailDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at SubrogationPartyDetailDV.pcf: line 87, column 46
    function action_46 () : void {
      SubrogationDetail.go(partyOverride.Subrogation)
    }
    
    // 'action' attribute on TextCell (id=Exposure_Cell) at SubrogationPartyDetailDV.pcf: line 87, column 46
    function action_dest_47 () : pcf.api.Destination {
      return pcf.SubrogationDetail.createDestination(partyOverride.Subrogation)
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at SubrogationPartyDetailDV.pcf: line 87, column 46
    function valueRoot_49 () : java.lang.Object {
      return partyOverride.Subrogation
    }
    
    // 'value' attribute on TextCell (id=Liability_Cell) at SubrogationPartyDetailDV.pcf: line 93, column 51
    function valueRoot_52 () : java.lang.Object {
      return partyOverride
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at SubrogationPartyDetailDV.pcf: line 87, column 46
    function value_48 () : entity.Exposure {
      return partyOverride.Subrogation.Exposure
    }
    
    // 'value' attribute on TextCell (id=Liability_Cell) at SubrogationPartyDetailDV.pcf: line 93, column 51
    function value_51 () : java.math.BigDecimal {
      return partyOverride.Fault
    }
    
    // 'value' attribute on TextCell (id=ExpectedRecovery_Cell) at SubrogationPartyDetailDV.pcf: line 99, column 51
    function value_54 () : java.math.BigDecimal {
      return partyOverride.ExpectedRecovery
    }
    
    property get partyOverride () : SubroAdversePartyOverride {
      return getIteratedValue(1) as SubroAdversePartyOverride
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/AdverseParty/SubrogationPartyDetailDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubrogationPartyDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_10 () : void {
      ClaimContactDetailPopup.push(subroadverseparty.AdverseParty, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_114 () : void {
      AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_116 () : void {
      if (subroadverseparty.AdverseParty.Thirdpartyinsurer != null) { ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.Thirdpartyinsurer, subroadverseparty.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_117 () : void {
      ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.Thirdpartyinsurer, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_141 () : void {
      AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_143 () : void {
      if (subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact != null) { ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact, subroadverseparty.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_144 () : void {
      ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_170 () : void {
      AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.CollectionAgency), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_172 () : void {
      if (subroadverseparty.AdverseParty.CollectionAgency != null) { ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.CollectionAgency, subroadverseparty.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_174 () : void {
      ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.CollectionAgency, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_6 () : void {
      AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_75 () : void {
      AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.PrimaryContact), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_77 () : void {
      if (subroadverseparty.AdverseParty.PrimaryContact != null) { ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.PrimaryContact, subroadverseparty.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_8 () : void {
      if (subroadverseparty.AdverseParty != null) { ClaimContactDetailPopup.push(subroadverseparty.AdverseParty, subroadverseparty.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_81 () : void {
      ClaimContactDetailPopup.push(subroadverseparty.AdverseParty.PrimaryContact, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(subroadverseparty.AdverseParty, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_115 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_118 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(subroadverseparty.AdverseParty.Thirdpartyinsurer, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_142 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_145 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_171 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (subroadverseparty.AdverseParty.CollectionAgency), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_175 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(subroadverseparty.AdverseParty.CollectionAgency, subroadverseparty.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (subroadverseparty.AdverseParty), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_76 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (subroadverseparty.AdverseParty.PrimaryContact), subroadverseparty.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_82 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(subroadverseparty.AdverseParty.PrimaryContact, subroadverseparty.Claim)
    }
    
    // 'available' attribute on ClaimContactInput (id=SubroKeyContact_Input) at SubrogationPartyDetailDV.pcf: line 148, column 33
    function available_78 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE != null
    }
    
    // 'available' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function available_80 () : java.lang.Boolean {
      return subroadverseparty.AdverseParty != null
    }
    
    // 'def' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_111 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_138 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_167 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (subroadverseparty.AdverseParty.CollectionAgency), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ListViewInput (id=PaymentPlan_ScheduledPayments) at SubrogationPartyDetailDV.pcf: line 311, column 54
    function def_onEnter_234 (def :  pcf.EditablePaymentScheduleLV) : void {
      def.onEnter(subroadverseparty)
    }
    
    // 'def' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_3 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (subroadverseparty.AdverseParty), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_72 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (subroadverseparty.AdverseParty.PrimaryContact), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_112 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_139 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_168 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (subroadverseparty.AdverseParty.CollectionAgency), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ListViewInput (id=PaymentPlan_ScheduledPayments) at SubrogationPartyDetailDV.pcf: line 311, column 54
    function def_refreshVariables_235 (def :  pcf.EditablePaymentScheduleLV) : void {
      def.refreshVariables(subroadverseparty)
    }
    
    // 'def' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (subroadverseparty.AdverseParty), null, subroadverseparty.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_73 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (subroadverseparty.AdverseParty.PrimaryContact), null, subroadverseparty.Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.AdverseParty.Thirdpartyinsurer = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.AdverseParty = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at SubrogationPartyDetailDV.pcf: line 215, column 50
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at SubrogationPartyDetailDV.pcf: line 220, column 51
    function defaultSetter_160 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_178 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.AdverseParty.CollectionAgency = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ScheduleRecovery_Input) at SubrogationPartyDetailDV.pcf: line 259, column 52
    function defaultSetter_199 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.ScheduleRecovery = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=ScheduleRecoveryType_Input) at SubrogationPartyDetailDV.pcf: line 268, column 54
    function defaultSetter_204 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.ScheduleRecoveryType = (__VALUE_TO_SET as typekey.SubroSchedRecoveryType)
    }
    
    // 'value' attribute on DateInput (id=NoteSent_Input) at SubrogationPartyDetailDV.pcf: line 277, column 115
    function defaultSetter_210 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.NoteSent = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=NoteReceived_Input) at SubrogationPartyDetailDV.pcf: line 284, column 115
    function defaultSetter_216 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.NoteReceived = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=LiabilityPercentage_Input) at SubrogationPartyDetailDV.pcf: line 57, column 43
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=ExpectedRecovery_Input) at SubrogationPartyDetailDV.pcf: line 65, column 43
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.ExpectedRecovery = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=Classification_Input) at SubrogationPartyDetailDV.pcf: line 113, column 49
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.Classification = (__VALUE_TO_SET as typekey.SubroClassification)
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at SubrogationPartyDetailDV.pcf: line 122, column 43
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.Strategy = (__VALUE_TO_SET as typekey.SubroStrategy)
    }
    
    // 'value' attribute on TypeKeyInput (id=GovInvolved_Input) at SubrogationPartyDetailDV.pcf: line 131, column 53
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.SubroGovernmentInvolved = (__VALUE_TO_SET as typekey.SubroGovernmentInvolved)
    }
    
    // 'value' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.AdverseParty.PrimaryContact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationToAdverse_Input) at SubrogationPartyDetailDV.pcf: line 155, column 48
    function defaultSetter_97 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'editable' attribute on ListViewInput (id=PaymentPlan_ScheduledPayments) at SubrogationPartyDetailDV.pcf: line 311, column 54
    function editable_232 () : java.lang.Boolean {
      return perm.Claim.createanytransaction(subroadverseparty.Claim)
    }
    
    // 'initialValue' attribute on Variable at SubrogationPartyDetailDV.pcf: line 14, column 28
    function initialValue_0 () : entity.Claim {
      return subroadverseparty.Claim
    }
    
    // 'initialValue' attribute on Variable at SubrogationPartyDetailDV.pcf: line 19, column 43
    function initialValue_1 () : SubroAdversePartyOverride[] {
      return subroadverseparty.OverridesForAllExposures
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_119 (PickedValue :  Contact) : void {
      var contactType = statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer); var result = eval("subroadverseparty.AdverseParty.Thirdpartyinsurer = subroadverseparty.Claim.resolveContact(subroadverseparty.AdverseParty.Thirdpartyinsurer) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_12 (PickedValue :  Contact) : void {
      var contactType = statictypeof (subroadverseparty.AdverseParty); var result = eval("subroadverseparty.AdverseParty = subroadverseparty.Claim.resolveContact(subroadverseparty.AdverseParty) as " + contactType.Name + ";return null;"); subroadverseparty.Claim.createClaimContact(subroadverseparty.AdverseParty);
    }
    
    // 'onPick' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_146 (PickedValue :  Contact) : void {
      var contactType = statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact); var result = eval("subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact = subroadverseparty.Claim.resolveContact(subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_176 (PickedValue :  Contact) : void {
      var contactType = statictypeof (subroadverseparty.AdverseParty.CollectionAgency); var result = eval("subroadverseparty.AdverseParty.CollectionAgency = subroadverseparty.Claim.resolveContact(subroadverseparty.AdverseParty.CollectionAgency) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Adverse_Input) at SubrogationPartyDetailDV.pcf: line 32, column 166
    function onPick_20 (PickedValue :  java.lang.Object) : void {
      subroadverseparty.Claim.createClaimContact(subroadverseparty.AdverseParty)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_83 (PickedValue :  Contact) : void {
      var contactType = statictypeof (subroadverseparty.AdverseParty.PrimaryContact); var result = eval("subroadverseparty.AdverseParty.PrimaryContact = subroadverseparty.Claim.resolveContact(subroadverseparty.AdverseParty.PrimaryContact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at SubrogationPartyDetailDV.pcf: line 203, column 46
    function reflectionValue_132 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at SubrogationPartyDetailDV.pcf: line 39, column 44
    function reflectionValue_25 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at SubrogationPartyDetailDV.pcf: line 48, column 53
    function reflectionValue_30 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // ClaimContactInput (id=SubroKeyContact_Input) at SubrogationPartyDetailDV.pcf: line 148, column 33
    function reflectionValue_79 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryContact
    }
    
    // Reflect at SubrogationPartyDetailDV.pcf: line 157, column 40
    function reflectionValue_95 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==subroadverseparty.AdverseParty) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'required' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function required_120 () : java.lang.Boolean {
      return subroadverseparty.Classification == TC_INSURED
    }
    
    // 'value' attribute on TextCell (id=Exposure_Cell) at SubrogationPartyDetailDV.pcf: line 87, column 46
    function sortValue_43 (partyOverride :  SubroAdversePartyOverride) : java.lang.Object {
      return partyOverride.Subrogation.Exposure
    }
    
    // 'value' attribute on TextCell (id=Liability_Cell) at SubrogationPartyDetailDV.pcf: line 93, column 51
    function sortValue_44 (partyOverride :  SubroAdversePartyOverride) : java.lang.Object {
      return partyOverride.Fault
    }
    
    // 'value' attribute on TextCell (id=ExpectedRecovery_Cell) at SubrogationPartyDetailDV.pcf: line 99, column 51
    function sortValue_45 (partyOverride :  SubroAdversePartyOverride) : java.lang.Object {
      return partyOverride.ExpectedRecovery
    }
    
    // 'validationExpression' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function validationExpression_9 () : java.lang.Object {
      return subroadverseparty.AdverseParty != claim.Insured ? null : DisplayKey.get("NVV.Claim.Subro.AdverseParty.PartyDetails.Contact.Error")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_124 () : java.lang.Object {
      return subroadverseparty.Claim.RelatedCompanyArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_149 () : java.lang.Object {
      return subroadverseparty.Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_16 () : java.lang.Object {
      return subroadverseparty.Claim.RelatedContacts.where(\contact -> not claim.SubrogationSummary.SubroAdverseParties*.AdverseParty.contains(contact))
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_87 () : java.lang.Object {
      return subroadverseparty.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=KeyContact_PrimaryPhone_Input) at SubrogationPartyDetailDV.pcf: line 169, column 81
    function valueRoot_103 () : java.lang.Object {
      return subroadverseparty.AdverseParty.PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=Insurer_PrimaryPhone_Input) at SubrogationPartyDetailDV.pcf: line 200, column 86
    function valueRoot_135 () : java.lang.Object {
      return subroadverseparty.AdverseParty.Thirdpartyinsurer
    }
    
    // 'value' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_15 () : java.lang.Object {
      return subroadverseparty
    }
    
    // 'value' attribute on TextInput (id=AdverseParty_PrimaryPhone_Input) at SubrogationPartyDetailDV.pcf: line 36, column 66
    function valueRoot_28 () : java.lang.Object {
      return subroadverseparty.AdverseParty
    }
    
    // 'value' attribute on TextInput (id=KeyContact_PrimaryPhone_Input) at SubrogationPartyDetailDV.pcf: line 169, column 81
    function value_102 () : java.lang.String {
      return subroadverseparty.AdverseParty.PrimaryContact.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextAreaInput (id=KeyContact_Address_Input) at SubrogationPartyDetailDV.pcf: line 178, column 90
    function value_107 () : java.lang.String {
      return subroadverseparty.AdverseParty.PrimaryContact.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_121 () : entity.Company {
      return subroadverseparty.AdverseParty.Thirdpartyinsurer
    }
    
    // 'value' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_13 () : entity.Contact {
      return subroadverseparty.AdverseParty
    }
    
    // 'value' attribute on TextInput (id=Insurer_PrimaryPhone_Input) at SubrogationPartyDetailDV.pcf: line 200, column 86
    function value_134 () : java.lang.String {
      return subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryPhoneValue
    }
    
    // 'value' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_147 () : entity.Contact {
      return subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at SubrogationPartyDetailDV.pcf: line 215, column 50
    function value_155 () : java.lang.String {
      return subroadverseparty.ClaimNumber
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at SubrogationPartyDetailDV.pcf: line 220, column 51
    function value_159 () : java.lang.String {
      return subroadverseparty.PolicyNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_177 () : entity.Company {
      return subroadverseparty.AdverseParty.CollectionAgency
    }
    
    // 'value' attribute on CurrencyInput (id=CalcRecovFromPayee_Input) at SubrogationPartyDetailDV.pcf: line 246, column 71
    function value_191 () : gw.api.financials.CurrencyAmount {
      return subroadverseparty.getTotAmountRecoveredForParty()
    }
    
    // 'value' attribute on CurrencyInput (id=TotClaimCostSubroRecoveryForParty_Input) at SubrogationPartyDetailDV.pcf: line 252, column 71
    function value_195 () : gw.api.financials.CurrencyAmount {
      return subroadverseparty.getTotClaimCostSubroRecoveryForParty()
    }
    
    // 'value' attribute on BooleanRadioInput (id=ScheduleRecovery_Input) at SubrogationPartyDetailDV.pcf: line 259, column 52
    function value_198 () : java.lang.Boolean {
      return subroadverseparty.ScheduleRecovery
    }
    
    // 'value' attribute on TypeKeyInput (id=ScheduleRecoveryType_Input) at SubrogationPartyDetailDV.pcf: line 268, column 54
    function value_203 () : typekey.SubroSchedRecoveryType {
      return subroadverseparty.ScheduleRecoveryType
    }
    
    // 'value' attribute on DateInput (id=NoteSent_Input) at SubrogationPartyDetailDV.pcf: line 277, column 115
    function value_209 () : java.util.Date {
      return subroadverseparty.NoteSent
    }
    
    // 'value' attribute on DateInput (id=NoteReceived_Input) at SubrogationPartyDetailDV.pcf: line 284, column 115
    function value_215 () : java.util.Date {
      return subroadverseparty.NoteReceived
    }
    
    // 'value' attribute on CurrencyInput (id=TotalAmount_Input) at SubrogationPartyDetailDV.pcf: line 291, column 55
    function value_221 () : gw.api.financials.CurrencyAmount {
      return subroadverseparty.TotPromissoryAmount()
    }
    
    // 'value' attribute on CurrencyInput (id=CalcOSForPayee_Input) at SubrogationPartyDetailDV.pcf: line 297, column 55
    function value_225 () : gw.api.financials.CurrencyAmount {
      return (subroadverseparty.TotPromissoryAmount() - subroadverseparty.getTotAmountRecoveredForParty())
    }
    
    // 'value' attribute on CurrencyInput (id=CalcExpectedOSFromPayee_Input) at SubrogationPartyDetailDV.pcf: line 303, column 55
    function value_229 () : gw.api.financials.CurrencyAmount {
      return (subroadverseparty.PromissoryAmountDueAsOf() - subroadverseparty.getTotAmountRecoveredForParty())
    }
    
    // 'value' attribute on TextInput (id=AdverseParty_PrimaryPhone_Input) at SubrogationPartyDetailDV.pcf: line 36, column 66
    function value_27 () : java.lang.String {
      return subroadverseparty.AdverseParty.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextAreaInput (id=AdverseParty_Address_Input) at SubrogationPartyDetailDV.pcf: line 45, column 75
    function value_32 () : java.lang.String {
      return subroadverseparty.AdverseParty.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=LiabilityPercentage_Input) at SubrogationPartyDetailDV.pcf: line 57, column 43
    function value_35 () : java.math.BigDecimal {
      return subroadverseparty.Fault
    }
    
    // 'value' attribute on TextInput (id=ExpectedRecovery_Input) at SubrogationPartyDetailDV.pcf: line 65, column 43
    function value_39 () : java.math.BigDecimal {
      return subroadverseparty.ExpectedRecovery
    }
    
    // 'value' attribute on RowIterator at SubrogationPartyDetailDV.pcf: line 80, column 60
    function value_57 () : entity.SubroAdversePartyOverride[] {
      return allOverrides
    }
    
    // 'value' attribute on TypeKeyInput (id=Classification_Input) at SubrogationPartyDetailDV.pcf: line 113, column 49
    function value_59 () : typekey.SubroClassification {
      return subroadverseparty.Classification
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at SubrogationPartyDetailDV.pcf: line 122, column 43
    function value_63 () : typekey.SubroStrategy {
      return subroadverseparty.Strategy
    }
    
    // 'value' attribute on TypeKeyInput (id=GovInvolved_Input) at SubrogationPartyDetailDV.pcf: line 131, column 53
    function value_67 () : typekey.SubroGovernmentInvolved {
      return subroadverseparty.SubroGovernmentInvolved
    }
    
    // 'value' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_84 () : entity.Contact {
      return subroadverseparty.AdverseParty.PrimaryContact
    }
    
    // 'value' attribute on TypeKeyInput (id=RelationToAdverse_Input) at SubrogationPartyDetailDV.pcf: line 155, column 48
    function value_96 () : typekey.PersonRelationType {
      return subroadverseparty.MainContactType
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_125 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_125 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_125 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_150 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_150 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_150 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_17 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_181 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_181 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_181 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_88 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_88 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_88 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_126 () : void {
      var __valueRangeArg = subroadverseparty.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_125(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_151 () : void {
      var __valueRangeArg = subroadverseparty.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_150(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_18 () : void {
      var __valueRangeArg = subroadverseparty.Claim.RelatedContacts.where(\contact -> not claim.SubrogationSummary.SubroAdverseParties*.AdverseParty.contains(contact))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_17(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_182 () : void {
      var __valueRangeArg = subroadverseparty.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_181(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_89 () : void {
      var __valueRangeArg = subroadverseparty.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_88(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Insurer_Input) at SubrogationPartyDetailDV.pcf: line 196, column 39
    function verifyValueType_131 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=collectionagency_Input) at SubrogationPartyDetailDV.pcf: line 235, column 123
    function verifyValueType_188 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insurer_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_113 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer), subroadverseparty.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=InsurerContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_140 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.Thirdpartyinsurer.PrimaryContact), subroadverseparty.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on InputSet at SubrogationPartyDetailDV.pcf: line 184, column 126
    function visible_163 () : java.lang.Boolean {
      return subroadverseparty.Classification == TC_INSURED or subroadverseparty.AdverseParty.Thirdpartyinsurer != null
    }
    
    // 'visible' attribute on InputDivider at SubrogationPartyDetailDV.pcf: line 223, column 123
    function visible_164 () : java.lang.Boolean {
      return subroadverseparty.Strategy == TC_COLLECTION or subroadverseparty.AdverseParty.CollectionAgency != null
    }
    
    // 'visible' attribute on ClaimContactInput (id=collectionagency_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_169 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.CollectionAgency), subroadverseparty.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on Label at SubrogationPartyDetailDV.pcf: line 240, column 71
    function visible_189 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(subroadverseparty.Claim)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_2 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on DateInput (id=NoteSent_Input) at SubrogationPartyDetailDV.pcf: line 277, column 115
    function visible_208 () : java.lang.Boolean {
      return subroadverseparty.ScheduleRecovery and subroadverseparty.ScheduleRecoveryType == TC_PROMISSORY
    }
    
    // 'visible' attribute on ClaimContactInput (id=Adverse_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_5 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty), subroadverseparty.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ListViewInput (id=Overrides) at SubrogationPartyDetailDV.pcf: line 72, column 44
    function visible_58 () : java.lang.Boolean {
      return not allOverrides.IsEmpty
    }
    
    // 'visible' attribute on ClaimContactInput (id=SubroKeyContact_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_74 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (subroadverseparty.AdverseParty.PrimaryContact), subroadverseparty.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get allOverrides () : SubroAdversePartyOverride[] {
      return getVariableValue("allOverrides", 0) as SubroAdversePartyOverride[]
    }
    
    property set allOverrides ($arg :  SubroAdversePartyOverride[]) {
      setVariableValue("allOverrides", 0, $arg)
    }
    
    property get claim () : entity.Claim {
      return getVariableValue("claim", 0) as entity.Claim
    }
    
    property set claim ($arg :  entity.Claim) {
      setVariableValue("claim", 0, $arg)
    }
    
    property get subroadverseparty () : SubroAdverseParty {
      return getRequireValue("subroadverseparty", 0) as SubroAdverseParty
    }
    
    property set subroadverseparty ($arg :  SubroAdverseParty) {
      setRequireValue("subroadverseparty", 0, $arg)
    }
    
    
  }
  
  
}