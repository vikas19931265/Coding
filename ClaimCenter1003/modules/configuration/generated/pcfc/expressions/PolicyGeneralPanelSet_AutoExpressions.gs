package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/PolicyGeneralPanelSet.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyGeneralPanelSet_AutoExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/PolicyGeneralPanelSet.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyCoverageListDetailExpressionsImpl extends PolicyGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 229, column 37
    function def_onEnter_241 (def :  pcf.EditableAutoPolicyCoveragesLV) : void {
      def.onEnter(Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 243, column 26
    function def_onEnter_243 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.onEnter(Coverage)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 229, column 37
    function def_refreshVariables_242 (def :  pcf.EditableAutoPolicyCoveragesLV) : void {
      def.refreshVariables(Policy)
    }
    
    // 'def' attribute on PanelRef at PolicyGeneralPanelSet.Auto.pcf: line 243, column 26
    function def_refreshVariables_244 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.refreshVariables(Coverage)
    }
    
    // 'addVisible' attribute on IteratorButtons at PolicyGeneralPanelSet.Auto.pcf: line 238, column 47
    function visible_237 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    property get Coverage () : Coverage {
      return getCurrentSelection(1) as Coverage
    }
    
    property set Coverage ($arg :  Coverage) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/PolicyGeneralPanelSet.Auto.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyGeneralPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_117 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_119 () : void {
      if (Policy.doingbusinessas != null) { ClaimContactDetailPopup.push(Policy.doingbusinessas, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_122 () : void {
      ClaimContactDetailPopup.push(Policy.doingbusinessas, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_151 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_153 () : void {
      if (Policy.agent != null) { ClaimContactDetailPopup.push(Policy.agent, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_155 () : void {
      ClaimContactDetailPopup.push(Policy.agent, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_179 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_181 () : void {
      if (Policy.underwriter != null) { ClaimContactDetailPopup.push(Policy.underwriter, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_183 () : void {
      ClaimContactDetailPopup.push(Policy.underwriter, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_49 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_51 () : void {
      if (Policy.insured != null) { ClaimContactDetailPopup.push(Policy.insured, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_53 () : void {
      ClaimContactDetailPopup.push(Policy.insured, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_92 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_94 () : void {
      if (Policy.policyholder != null) { ClaimContactDetailPopup.push(Policy.policyholder, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_97 () : void {
      ClaimContactDetailPopup.push(Policy.policyholder, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_118 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_123 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.doingbusinessas, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_152 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_156 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.agent, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_180 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_184 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.underwriter, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_50 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_54 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.insured, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_93 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_98 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.policyholder, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_114 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.doingbusinessas), null, Policy.Claim)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 136, column 72
    function def_onEnter_141 (def :  pcf.EditableAdditionalInsuredLV) : void {
      def.onEnter(Policy.getClaimContactRolesByRole(TC_COVEREDPARTY), Policy.Claim, Policy, TC_COVEREDPARTY)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 148, column 73
    function def_onEnter_145 (def :  pcf.EditableExcludedPartiesLV) : void {
      def.onEnter(Policy.getClaimContactRolesByRole(TC_EXCLUDEDPARTY), Policy, TC_EXCLUDEDPARTY)
    }
    
    // 'def' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_148 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.agent), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_176 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.underwriter), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_46 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.insured), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_89 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.policyholder), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_115 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.doingbusinessas), null, Policy.Claim)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 136, column 72
    function def_refreshVariables_142 (def :  pcf.EditableAdditionalInsuredLV) : void {
      def.refreshVariables(Policy.getClaimContactRolesByRole(TC_COVEREDPARTY), Policy.Claim, Policy, TC_COVEREDPARTY)
    }
    
    // 'def' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 148, column 73
    function def_refreshVariables_146 (def :  pcf.EditableExcludedPartiesLV) : void {
      def.refreshVariables(Policy.getClaimContactRolesByRole(TC_EXCLUDEDPARTY), Policy, TC_EXCLUDEDPARTY)
    }
    
    // 'def' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_149 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.agent), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_177 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.underwriter), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_47 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.insured), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_90 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.policyholder), null, Policy.Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_101 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.policyholder = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_126 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.doingbusinessas = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 46, column 42
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_159 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.agent = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at PolicyGeneralPanelSet.Auto.pcf: line 168, column 40
    function defaultSetter_171 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_187 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.underwriter = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Company_Input) at PolicyGeneralPanelSet.Auto.pcf: line 187, column 56
    function defaultSetter_200 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.UnderwritingCo = (__VALUE_TO_SET as typekey.UnderwritingCompanyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Group_Input) at PolicyGeneralPanelSet.Auto.pcf: line 193, column 54
    function defaultSetter_206 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.UnderwritingGroup = (__VALUE_TO_SET as typekey.UnderwritingGroupType)
    }
    
    // 'value' attribute on DateInput (id=CancellationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 51, column 44
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.CancellationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_ForeignCoverage_Input) at PolicyGeneralPanelSet.Auto.pcf: line 205, column 43
    function defaultSetter_215 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ForeignCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Other_OtherFinancialInterests_Input) at PolicyGeneralPanelSet.Auto.pcf: line 210, column 46
    function defaultSetter_221 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.FinancialInterests = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_AssignedRisk_Input) at PolicyGeneralPanelSet.Auto.pcf: line 215, column 40
    function defaultSetter_227 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Other_Notes_Input) at PolicyGeneralPanelSet.Auto.pcf: line 220, column 33
    function defaultSetter_233 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=OrigEffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 56, column 45
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.OrigEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at PolicyGeneralPanelSet.Auto.pcf: line 62, column 45
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Status = (__VALUE_TO_SET as typekey.PolicyStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 69, column 68
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.insured = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 102, column 40
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 111, column 52
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.CustomerServiceTier = (__VALUE_TO_SET as typekey.CustomerServiceTier)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 40, column 41
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 69, column 68
    function editable_37 () : java.lang.Boolean {
      return !Policy.Verified and Policy.CurrencyEditable
    }
    
    // 'editable' attribute on DateInput (id=EffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 40, column 41
    function editable_7 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'initialValue' attribute on Variable at PolicyGeneralPanelSet.Auto.pcf: line 18, column 65
    function initialValue_0 () : java.util.List<typekey.CustomerServiceTier> {
      return CustomerServiceTier.findAvailableCustomerTiers()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_124 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.doingbusinessas); var result = eval("Policy.doingbusinessas = Policy.Claim.resolveContact(Policy.doingbusinessas) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_157 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.agent); var result = eval("Policy.agent = Policy.Claim.resolveContact(Policy.agent) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_185 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.underwriter); var result = eval("Policy.underwriter = Policy.Claim.resolveContact(Policy.underwriter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_55 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.insured); var result = eval("Policy.insured = Policy.Claim.resolveContact(Policy.insured) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_99 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.policyholder); var result = eval("Policy.policyholder = Policy.Claim.resolveContact(Policy.policyholder) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at PolicyGeneralPanelSet.Auto.pcf: line 90, column 55
    function reflectionValue_67 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'validationExpression' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 136, column 72
    function validationExpression_140 () : java.lang.Object {
      return Policy.checkCoveredPartyConstraints()
    }
    
    // 'validationExpression' attribute on ListViewInput at PolicyGeneralPanelSet.Auto.pcf: line 148, column 73
    function validationExpression_144 () : java.lang.Object {
      return Policy.checkExcludedPartyConstraints()
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_128 () : java.lang.Object {
      return Policy.Claim.RelatedCompanyArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_189 () : java.lang.Object {
      return Policy.Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_59 () : java.lang.Object {
      return Policy.Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 111, column 52
    function valueRange_84 () : java.lang.Object {
      return availableCustomerServiceTiers
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 28, column 40
    function valueRoot_2 () : java.lang.Object {
      return Policy
    }
    
    // 'value' attribute on TextAreaInput (id=Insured_Address_Input) at PolicyGeneralPanelSet.Auto.pcf: line 87, column 61
    function valueRoot_70 () : java.lang.Object {
      return Policy.insured
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at PolicyGeneralPanelSet.Auto.pcf: line 96, column 67
    function valueRoot_73 () : java.lang.Object {
      return Policy.PolicyAccount.AccountHolder
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 28, column 40
    function value_1 () : java.lang.String {
      return Policy.PolicyNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_100 () : entity.Contact {
      return Policy.policyholder
    }
    
    // 'value' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_125 () : entity.Company {
      return Policy.doingbusinessas
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 46, column 42
    function value_14 () : java.util.Date {
      return Policy.ExpirationDate
    }
    
    // 'value' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_158 () : entity.Contact {
      return Policy.agent
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at PolicyGeneralPanelSet.Auto.pcf: line 168, column 40
    function value_170 () : java.lang.String {
      return Policy.ProducerCode
    }
    
    // 'value' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_186 () : entity.Person {
      return Policy.underwriter
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Company_Input) at PolicyGeneralPanelSet.Auto.pcf: line 187, column 56
    function value_199 () : typekey.UnderwritingCompanyType {
      return Policy.UnderwritingCo
    }
    
    // 'value' attribute on DateInput (id=CancellationDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 51, column 44
    function value_20 () : java.util.Date {
      return Policy.CancellationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Group_Input) at PolicyGeneralPanelSet.Auto.pcf: line 193, column 54
    function value_205 () : typekey.UnderwritingGroupType {
      return Policy.UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_VerifiedPolicy_Input) at PolicyGeneralPanelSet.Auto.pcf: line 200, column 36
    function value_210 () : java.lang.Boolean {
      return Policy.Verified
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_ForeignCoverage_Input) at PolicyGeneralPanelSet.Auto.pcf: line 205, column 43
    function value_214 () : java.lang.Boolean {
      return Policy.ForeignCoverage
    }
    
    // 'value' attribute on TextInput (id=Other_OtherFinancialInterests_Input) at PolicyGeneralPanelSet.Auto.pcf: line 210, column 46
    function value_220 () : java.lang.String {
      return Policy.FinancialInterests
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_AssignedRisk_Input) at PolicyGeneralPanelSet.Auto.pcf: line 215, column 40
    function value_226 () : java.lang.Boolean {
      return Policy.AssignedRisk
    }
    
    // 'value' attribute on TextInput (id=Other_Notes_Input) at PolicyGeneralPanelSet.Auto.pcf: line 220, column 33
    function value_232 () : java.lang.String {
      return Policy.Notes
    }
    
    // 'value' attribute on DateInput (id=OrigEffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 56, column 45
    function value_26 () : java.util.Date {
      return Policy.OrigEffectiveDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at PolicyGeneralPanelSet.Auto.pcf: line 62, column 45
    function value_32 () : typekey.PolicyStatus {
      return Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 69, column 68
    function value_39 () : typekey.Currency {
      return Policy.Currency
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at PolicyGeneralPanelSet.Auto.pcf: line 34, column 43
    function value_4 () : typekey.PolicyType {
      return Policy.PolicyType
    }
    
    // 'value' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_56 () : entity.Contact {
      return Policy.insured
    }
    
    // 'value' attribute on TextAreaInput (id=Insured_Address_Input) at PolicyGeneralPanelSet.Auto.pcf: line 87, column 61
    function value_69 () : java.lang.String {
      return Policy.insured.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at PolicyGeneralPanelSet.Auto.pcf: line 96, column 67
    function value_72 () : java.lang.String {
      return Policy.PolicyAccount.AccountHolder.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at PolicyGeneralPanelSet.Auto.pcf: line 102, column 40
    function value_76 () : java.lang.String {
      return Policy.AccountNumber
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at PolicyGeneralPanelSet.Auto.pcf: line 40, column 41
    function value_8 () : java.util.Date {
      return Policy.EffectiveDate
    }
    
    // 'value' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 111, column 52
    function value_81 () : typekey.CustomerServiceTier {
      return Policy.CustomerServiceTier
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_104 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_104 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_104 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_129 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_129 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_129 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_162 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_162 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_162 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_190 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_190 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_190 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_60 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 111, column 52
    function verifyValueRangeIsAllowedType_85 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 111, column 52
    function verifyValueRangeIsAllowedType_85 ($$arg :  typekey.CustomerServiceTier[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_105 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_104(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_130 () : void {
      var __valueRangeArg = Policy.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_129(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_163 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_162(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_191 () : void {
      var __valueRangeArg = Policy.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_190(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_61 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_60(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CustomerServiceTierRange_Input) at PolicyGeneralPanelSet.Auto.pcf: line 111, column 52
    function verifyValueRange_86 () : void {
      var __valueRangeArg = availableCustomerServiceTiers
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_85(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=DBA_Input) at PolicyGeneralPanelSet.Auto.pcf: line 128, column 46
    function verifyValueType_138 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Underwriter_Name_Input) at PolicyGeneralPanelSet.Auto.pcf: line 181, column 38
    function verifyValueType_197 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_116 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_150 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_178 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at PolicyGeneralPanelSet.Auto.pcf: line 69, column 68
    function visible_38 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_45 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_48 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_91 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_96 () : java.lang.Boolean {
      return Policy.CommercialPolicy
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get Policy () : Policy {
      return getRequireValue("Policy", 0) as Policy
    }
    
    property set Policy ($arg :  Policy) {
      setRequireValue("Policy", 0, $arg)
    }
    
    property get availableCustomerServiceTiers () : java.util.List<typekey.CustomerServiceTier> {
      return getVariableValue("availableCustomerServiceTiers", 0) as java.util.List<typekey.CustomerServiceTier>
    }
    
    property set availableCustomerServiceTiers ($arg :  java.util.List<typekey.CustomerServiceTier>) {
      setVariableValue("availableCustomerServiceTiers", 0, $arg)
    }
    
    
  }
  
  
}