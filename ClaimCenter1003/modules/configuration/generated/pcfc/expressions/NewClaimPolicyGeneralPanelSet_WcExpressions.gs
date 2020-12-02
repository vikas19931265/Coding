package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPolicyGeneralPanelSet.Wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimPolicyGeneralPanelSet_WcExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPolicyGeneralPanelSet.Wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimPolicyGeneralPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_112 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_114 () : void {
      if (Policy.doingbusinessas != null) { ClaimContactDetailPopup.push(Policy.doingbusinessas, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_117 () : void {
      ClaimContactDetailPopup.push(Policy.doingbusinessas, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_146 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_148 () : void {
      if (Policy.agent != null) { ClaimContactDetailPopup.push(Policy.agent, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_150 () : void {
      ClaimContactDetailPopup.push(Policy.agent, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_174 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_176 () : void {
      if (Policy.underwriter != null) { ClaimContactDetailPopup.push(Policy.underwriter, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_178 () : void {
      ClaimContactDetailPopup.push(Policy.underwriter, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_51 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_53 () : void {
      if (Policy.insured != null) { ClaimContactDetailPopup.push(Policy.insured, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_55 () : void {
      ClaimContactDetailPopup.push(Policy.insured, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_87 () : void {
      AddressBookPickerPopup.push(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_89 () : void {
      if (Policy.policyholder != null) { ClaimContactDetailPopup.push(Policy.policyholder, Policy.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_92 () : void {
      ClaimContactDetailPopup.push(Policy.policyholder, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_113 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_118 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.doingbusinessas, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_147 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_151 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.agent, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_175 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_179 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.underwriter, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_52 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_56 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.insured, Policy.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_88 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_93 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Policy.policyholder, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_109 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.doingbusinessas), null, Policy.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 122, column 72
    function def_onEnter_136 (def :  pcf.EditableAdditionalInsuredLV) : void {
      def.onEnter(Policy.getClaimContactRolesByRole(TC_COVEREDPARTY), Policy.Claim, Policy, TC_COVEREDPARTY)
    }
    
    // 'def' attribute on ListViewInput at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 134, column 73
    function def_onEnter_140 (def :  pcf.EditableExcludedPartiesLV) : void {
      def.onEnter(Policy.getClaimContactRolesByRole(TC_EXCLUDEDPARTY), Policy, TC_EXCLUDEDPARTY)
    }
    
    // 'def' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_143 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.agent), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_171 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.underwriter), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_48 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.insured), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_84 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Policy.policyholder), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_110 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.doingbusinessas), null, Policy.Claim)
    }
    
    // 'def' attribute on ListViewInput at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 122, column 72
    function def_refreshVariables_137 (def :  pcf.EditableAdditionalInsuredLV) : void {
      def.refreshVariables(Policy.getClaimContactRolesByRole(TC_COVEREDPARTY), Policy.Claim, Policy, TC_COVEREDPARTY)
    }
    
    // 'def' attribute on ListViewInput at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 134, column 73
    function def_refreshVariables_141 (def :  pcf.EditableExcludedPartiesLV) : void {
      def.refreshVariables(Policy.getClaimContactRolesByRole(TC_EXCLUDEDPARTY), Policy, TC_EXCLUDEDPARTY)
    }
    
    // 'def' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_144 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.agent), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_172 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.underwriter), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_49 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.insured), null, Policy.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_85 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Policy.policyholder), null, Policy.Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.doingbusinessas = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 39, column 42
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ExpirationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.agent = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 154, column 40
    function defaultSetter_166 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ProducerCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_182 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.underwriter = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Company_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 173, column 56
    function defaultSetter_195 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.UnderwritingCo = (__VALUE_TO_SET as typekey.UnderwritingCompanyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Group_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 179, column 54
    function defaultSetter_201 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.UnderwritingGroup = (__VALUE_TO_SET as typekey.UnderwritingGroupType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_ForeignCoverage_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 191, column 43
    function defaultSetter_210 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ForeignCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Other_OtherFinancialInterests_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 196, column 46
    function defaultSetter_216 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.FinancialInterests = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=CancellationDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 44, column 44
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.CancellationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_AssignedRisk_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 201, column 40
    function defaultSetter_222 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.AssignedRisk = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Other_Notes_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 206, column 33
    function defaultSetter_228 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=WorkersComp_InsuredSicCode_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 214, column 42
    function defaultSetter_234 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.InsuredSICCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=WorkersComp_PolicyRatingPlan_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 220, column 49
    function defaultSetter_240 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.PolicyRatingPlan = (__VALUE_TO_SET as typekey.PolicyRatingPlan)
    }
    
    // 'value' attribute on TextInput (id=WorkersComp_States_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 225, column 36
    function defaultSetter_246 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.WCStates = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=WorkersComp_OtherStates_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 230, column 41
    function defaultSetter_252 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.WCOtherStates = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WorkersComp_ReturnToWorkPrgm_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 235, column 44
    function defaultSetter_258 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.ReturnToWorkPrgm = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=OrigEffectiveDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 49, column 45
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.OrigEffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 55, column 45
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Status = (__VALUE_TO_SET as typekey.PolicyStatus)
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 63, column 68
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.Currency = (__VALUE_TO_SET as typekey.Currency)
    }
    
    // 'value' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.insured = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 95, column 40
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 32, column 41
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.EffectiveDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      Policy.policyholder = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'editable' attribute on TypeKeyInput (id=Currency_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 63, column 68
    function editable_38 () : java.lang.Boolean {
      return !Policy.Verified and Policy.CurrencyEditable
    }
    
    // 'editable' attribute on DateInput (id=EffectiveDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 32, column 41
    function editable_6 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    // 'onPick' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_119 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.doingbusinessas); var result = eval("Policy.doingbusinessas = Policy.Claim.resolveContact(Policy.doingbusinessas) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_152 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.agent); var result = eval("Policy.agent = Policy.Claim.resolveContact(Policy.agent) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_180 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.underwriter); var result = eval("Policy.underwriter = Policy.Claim.resolveContact(Policy.underwriter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_57 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.insured); var result = eval("Policy.insured = Policy.Claim.resolveContact(Policy.insured) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_94 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Policy.policyholder); var result = eval("Policy.policyholder = Policy.Claim.resolveContact(Policy.policyholder) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 83, column 55
    function reflectionValue_69 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'validationExpression' attribute on DateInput (id=ExpirationDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 39, column 42
    function validationExpression_13 () : java.lang.Object {
      return Policy.EffectiveDate != null and Policy.ExpirationDate != null and Policy.ExpirationDate < Policy.EffectiveDate ? DisplayKey.get("Java.Validation.AdminCatastrophe.Date.ForbidValidReverse") : null
    }
    
    // 'validationExpression' attribute on ListViewInput at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 122, column 72
    function validationExpression_135 () : java.lang.Object {
      return Policy.checkCoveredPartyConstraints()
    }
    
    // 'validationExpression' attribute on ListViewInput at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 134, column 73
    function validationExpression_139 () : java.lang.Object {
      return Policy.checkExcludedPartyConstraints()
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_123 () : java.lang.Object {
      return Policy.Claim.RelatedCompanyArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_184 () : java.lang.Object {
      return Policy.Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_61 () : java.lang.Object {
      return Policy.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 20, column 40
    function valueRoot_1 () : java.lang.Object {
      return Policy
    }
    
    // 'value' attribute on TextInput (id=Insured_Address_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 80, column 61
    function valueRoot_72 () : java.lang.Object {
      return Policy.insured
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 89, column 67
    function valueRoot_75 () : java.lang.Object {
      return Policy.PolicyAccount.AccountHolder
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 20, column 40
    function value_0 () : java.lang.String {
      return Policy.PolicyNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_120 () : entity.Company {
      return Policy.doingbusinessas
    }
    
    // 'value' attribute on DateInput (id=ExpirationDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 39, column 42
    function value_14 () : java.util.Date {
      return Policy.ExpirationDate
    }
    
    // 'value' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_153 () : entity.Contact {
      return Policy.agent
    }
    
    // 'value' attribute on TextInput (id=ProducerCode_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 154, column 40
    function value_165 () : java.lang.String {
      return Policy.ProducerCode
    }
    
    // 'value' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_181 () : entity.Person {
      return Policy.underwriter
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Company_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 173, column 56
    function value_194 () : typekey.UnderwritingCompanyType {
      return Policy.UnderwritingCo
    }
    
    // 'value' attribute on TypeKeyInput (id=Underwriting_Group_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 179, column 54
    function value_200 () : typekey.UnderwritingGroupType {
      return Policy.UnderwritingGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_VerifiedPolicy_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 186, column 36
    function value_205 () : java.lang.Boolean {
      return Policy.Verified
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_ForeignCoverage_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 191, column 43
    function value_209 () : java.lang.Boolean {
      return Policy.ForeignCoverage
    }
    
    // 'value' attribute on DateInput (id=CancellationDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 44, column 44
    function value_21 () : java.util.Date {
      return Policy.CancellationDate
    }
    
    // 'value' attribute on TextInput (id=Other_OtherFinancialInterests_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 196, column 46
    function value_215 () : java.lang.String {
      return Policy.FinancialInterests
    }
    
    // 'value' attribute on BooleanRadioInput (id=Other_AssignedRisk_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 201, column 40
    function value_221 () : java.lang.Boolean {
      return Policy.AssignedRisk
    }
    
    // 'value' attribute on TextInput (id=Other_Notes_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 206, column 33
    function value_227 () : java.lang.String {
      return Policy.Notes
    }
    
    // 'value' attribute on TextInput (id=WorkersComp_InsuredSicCode_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 214, column 42
    function value_233 () : java.lang.String {
      return Policy.InsuredSICCode
    }
    
    // 'value' attribute on TypeKeyInput (id=WorkersComp_PolicyRatingPlan_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 220, column 49
    function value_239 () : typekey.PolicyRatingPlan {
      return Policy.PolicyRatingPlan
    }
    
    // 'value' attribute on TextInput (id=WorkersComp_States_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 225, column 36
    function value_245 () : java.lang.String {
      return Policy.WCStates
    }
    
    // 'value' attribute on TextInput (id=WorkersComp_OtherStates_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 230, column 41
    function value_251 () : java.lang.String {
      return Policy.WCOtherStates
    }
    
    // 'value' attribute on BooleanRadioInput (id=WorkersComp_ReturnToWorkPrgm_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 235, column 44
    function value_257 () : java.lang.Boolean {
      return Policy.ReturnToWorkPrgm
    }
    
    // 'value' attribute on DateInput (id=OrigEffectiveDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 49, column 45
    function value_27 () : java.util.Date {
      return Policy.OrigEffectiveDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 26, column 43
    function value_3 () : typekey.PolicyType {
      return Policy.PolicyType
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 55, column 45
    function value_33 () : typekey.PolicyStatus {
      return Policy.Status
    }
    
    // 'value' attribute on TypeKeyInput (id=Currency_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 63, column 68
    function value_41 () : typekey.Currency {
      return Policy.Currency
    }
    
    // 'value' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_58 () : entity.Contact {
      return Policy.insured
    }
    
    // 'value' attribute on DateInput (id=EffectiveDate_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 32, column 41
    function value_7 () : java.util.Date {
      return Policy.EffectiveDate
    }
    
    // 'value' attribute on TextInput (id=Insured_Address_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 80, column 61
    function value_71 () : java.lang.String {
      return Policy.insured.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 89, column 67
    function value_74 () : java.lang.String {
      return Policy.PolicyAccount.AccountHolder.DisplayName
    }
    
    // 'value' attribute on TextInput (id=AccountNumber_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 95, column 40
    function value_78 () : java.lang.String {
      return Policy.AccountNumber
    }
    
    // 'value' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_95 () : entity.Contact {
      return Policy.policyholder
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_124 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_124 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_124 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_157 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_157 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_157 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_185 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_185 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_185 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_62 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_99 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_99 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_99 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_100 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_99(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_125 () : void {
      var __valueRangeArg = Policy.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_124(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_158 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_157(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_186 () : void {
      var __valueRangeArg = Policy.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_185(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_63 () : void {
      var __valueRangeArg = Policy.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_62(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=DBA_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 114, column 46
    function verifyValueType_133 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on ClaimContactInput (id=Underwriter_Name_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 167, column 38
    function verifyValueType_192 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=DBA_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_111 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.doingbusinessas), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Agent_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_145 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.agent), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Underwriter_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_173 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.underwriter), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TypeKeyInput (id=Currency_Input) at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 63, column 68
    function visible_39 () : java.lang.Boolean {
      return gw.api.util.CurrencyUtil.isMultiCurrencyMode()
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_47 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Insured_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_50 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.insured), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_86 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Policy.policyholder), Policy.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=PolicyHolder_Input) at ClaimContactWidget.xml: line 12, column 273
    function visible_91 () : java.lang.Boolean {
      return Policy.CommercialPolicy
    }
    
    property get Policy () : Policy {
      return getRequireValue("Policy", 0) as Policy
    }
    
    property set Policy ($arg :  Policy) {
      setRequireValue("Policy", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPolicyGeneralPanelSet.Wc.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyCoverageListDetailExpressionsImpl extends NewClaimPolicyGeneralPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 244, column 37
    function def_onEnter_263 (def :  pcf.EditableWorkersCompPolicyCoveragesLV) : void {
      def.onEnter(Policy)
    }
    
    // 'def' attribute on PanelRef at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 255, column 26
    function def_onEnter_265 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.onEnter(Coverage)
    }
    
    // 'def' attribute on PanelRef at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 244, column 37
    function def_refreshVariables_264 (def :  pcf.EditableWorkersCompPolicyCoveragesLV) : void {
      def.refreshVariables(Policy)
    }
    
    // 'def' attribute on PanelRef at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 255, column 26
    function def_refreshVariables_266 (def :  pcf.ClaimPolicyCovTermsCV) : void {
      def.refreshVariables(Coverage)
    }
    
    // 'editable' attribute on PanelRef at NewClaimPolicyGeneralPanelSet.Wc.pcf: line 244, column 37
    function editable_262 () : java.lang.Boolean {
      return !Policy.Verified
    }
    
    property get Coverage () : Coverage {
      return getCurrentSelection(1) as Coverage
    }
    
    property set Coverage ($arg :  Coverage) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}