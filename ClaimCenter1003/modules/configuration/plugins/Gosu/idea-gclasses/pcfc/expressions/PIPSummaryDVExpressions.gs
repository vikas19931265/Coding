package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/PIPSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PIPSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/PIPSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PIPSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_113 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_115 () : void {
      if (Exposure.disbenprovider != null) { ClaimContactDetailPopup.push(Exposure.disbenprovider, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_116 () : void {
      ClaimContactDetailPopup.push(Exposure.disbenprovider, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_18 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_20 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PIPSummaryDV.pcf: line 45, column 63
    function action_28 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_64 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_66 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_69 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_114 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_117 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.disbenprovider, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PIPSummaryDV.pcf: line 45, column 63
    function action_dest_29 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_65 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_70 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at PIPSummaryDV.pcf: line 152, column 93
    function def_onEnter_101 (def :  pcf.IMEPerformedLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at PIPSummaryDV.pcf: line 159, column 51
    function def_onEnter_103 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_110 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.disbenprovider), null, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at PIPSummaryDV.pcf: line 250, column 27
    function def_onEnter_170 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at PIPSummaryDV.pcf: line 283, column 49
    function def_onEnter_187 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_61 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at PIPSummaryDV.pcf: line 148, column 43
    function def_onEnter_99 (def :  pcf.BIDamageInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at PIPSummaryDV.pcf: line 148, column 43
    function def_refreshVariables_100 (def :  pcf.BIDamageInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at PIPSummaryDV.pcf: line 152, column 93
    function def_refreshVariables_102 (def :  pcf.IMEPerformedLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at PIPSummaryDV.pcf: line 159, column 51
    function def_refreshVariables_104 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_111 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.disbenprovider), null, Exposure.Claim)
    }
    
    // 'def' attribute on ListViewInput at PIPSummaryDV.pcf: line 250, column 27
    function def_refreshVariables_171 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at PIPSummaryDV.pcf: line 283, column 49
    function def_refreshVariables_188 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_62 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on BooleanRadioInput (id=PIPDamages_SSDIEligible_Input) at PIPSummaryDV.pcf: line 169, column 40
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.SSDIEligible = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_120 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.disbenprovider = (__VALUE_TO_SET as entity.Company)
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at PIPSummaryDV.pcf: line 206, column 54
    function defaultSetter_145 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DisBenefits.WeeklyCompRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at PIPSummaryDV.pcf: line 211, column 51
    function defaultSetter_149 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DisBenefits.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at PIPSummaryDV.pcf: line 236, column 43
    function defaultSetter_162 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at PIPSummaryDV.pcf: line 245, column 41
    function defaultSetter_167 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_ClaimantType_Input) at PIPSummaryDV.pcf: line 113, column 42
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at PIPSummaryDV.pcf: line 128, column 36
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function editable_9 () : java.lang.Boolean {
      return !Exposure.New
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at PIPSummaryDV.pcf: line 236, column 43
    function filter_164 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_118 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.disbenprovider); var result = eval("Exposure.disbenprovider = Exposure.Claim.resolveContact(Exposure.disbenprovider) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_71 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'value' attribute on Reflect at PIPSummaryDV.pcf: line 184, column 53
    function reflectionValue_129 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at PIPSummaryDV.pcf: line 192, column 53
    function reflectionValue_134 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on Reflect at PIPSummaryDV.pcf: line 200, column 44
    function reflectionValue_139 (TRIGGER_INDEX :  int, VALUE :  entity.Company) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // ClaimContactInput (id=PIPDamages_Claimant_Input) at PIPSummaryDV.pcf: line 98, column 34
    function reflectionValue_68 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at PIPSummaryDV.pcf: line 115, column 44
    function reflectionValue_81 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at PIPSummaryDV.pcf: line 135, column 44
    function reflectionValue_89 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at PIPSummaryDV.pcf: line 144, column 53
    function reflectionValue_94 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_122 () : java.lang.Object {
      return Exposure.Claim.RelatedCompanyArray
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_25 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_75 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at PIPSummaryDV.pcf: line 18, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryAddress_Input) at PIPSummaryDV.pcf: line 181, column 68
    function valueRoot_132 () : java.lang.Object {
      return Exposure.disbenprovider
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryContact_Input) at PIPSummaryDV.pcf: line 189, column 68
    function valueRoot_137 () : java.lang.Object {
      return Exposure.disbenprovider.PrimaryContact
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at PIPSummaryDV.pcf: line 206, column 54
    function valueRoot_146 () : java.lang.Object {
      return Exposure.DisBenefits
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at PIPSummaryDV.pcf: line 263, column 57
    function valueRoot_173 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at PIPSummaryDV.pcf: line 132, column 53
    function valueRoot_92 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at PIPSummaryDV.pcf: line 18, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function value_10 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on BooleanRadioInput (id=PIPDamages_SSDIEligible_Input) at PIPSummaryDV.pcf: line 169, column 40
    function value_105 () : java.lang.Boolean {
      return Exposure.SSDIEligible
    }
    
    // 'value' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_119 () : entity.Company {
      return Exposure.disbenprovider
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryAddress_Input) at PIPSummaryDV.pcf: line 181, column 68
    function value_131 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryContact_Input) at PIPSummaryDV.pcf: line 189, column 68
    function value_136 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Provider_PrimaryPhone_Input) at PIPSummaryDV.pcf: line 197, column 59
    function value_141 () : java.lang.String {
      return Exposure.disbenprovider.PrimaryPhoneValue
    }
    
    // 'value' attribute on CurrencyInput (id=LostWagesBenefits_WeeklyCompRate_Input) at PIPSummaryDV.pcf: line 206, column 54
    function value_144 () : gw.api.financials.CurrencyAmount {
      return Exposure.DisBenefits.WeeklyCompRate
    }
    
    // 'value' attribute on TextInput (id=LostWagesBenefits_Description_Input) at PIPSummaryDV.pcf: line 211, column 51
    function value_148 () : java.lang.String {
      return Exposure.DisBenefits.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_Segment_Input) at PIPSummaryDV.pcf: line 219, column 43
    function value_152 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_Strategy_Input) at PIPSummaryDV.pcf: line 224, column 44
    function value_155 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_ValidationLevel_Input) at PIPSummaryDV.pcf: line 229, column 46
    function value_158 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at PIPSummaryDV.pcf: line 236, column 43
    function value_161 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at PIPSummaryDV.pcf: line 245, column 41
    function value_166 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at PIPSummaryDV.pcf: line 263, column 57
    function value_172 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at PIPSummaryDV.pcf: line 267, column 54
    function value_175 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at PIPSummaryDV.pcf: line 271, column 53
    function value_178 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at PIPSummaryDV.pcf: line 275, column 55
    function value_181 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at PIPSummaryDV.pcf: line 280, column 56
    function value_184 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_22 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TypeKeyInput (id=Title_CoverageSubType_Input) at PIPSummaryDV.pcf: line 23, column 46
    function value_3 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at PIPSummaryDV.pcf: line 52, column 65
    function value_34 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at PIPSummaryDV.pcf: line 58, column 49
    function value_38 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at PIPSummaryDV.pcf: line 62, column 58
    function value_41 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at PIPSummaryDV.pcf: line 67, column 44
    function value_44 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at PIPSummaryDV.pcf: line 72, column 33
    function value_47 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at PIPSummaryDV.pcf: line 76, column 38
    function value_51 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at PIPSummaryDV.pcf: line 80, column 37
    function value_54 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at PIPSummaryDV.pcf: line 85, column 56
    function value_57 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at PIPSummaryDV.pcf: line 28, column 43
    function value_6 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at PIPSummaryDV.pcf: line 101, column 45
    function value_67 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_72 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Exposure_ClaimantType_Input) at PIPSummaryDV.pcf: line 113, column 42
    function value_82 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at PIPSummaryDV.pcf: line 128, column 36
    function value_86 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at PIPSummaryDV.pcf: line 132, column 53
    function value_91 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextAreaInput (id=Claimant_PrimaryAddress_Input) at PIPSummaryDV.pcf: line 141, column 62
    function value_96 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_123 ($$arg :  entity.Company[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_123 ($$arg :  gw.api.database.IQueryBeanResult<entity.Company>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_123 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_26 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_76 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_76 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_76 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_124 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_123(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Title_Coverage_Input) at PIPSummaryDV.pcf: line 36, column 38
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_27 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_26(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_77 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_76(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at PIPSummaryDV.pcf: line 177, column 37
    function verifyValueType_128 () : void {
      var __valueTypeArg : entity.Company
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at PIPSummaryDV.pcf: line 72, column 33
    function verifyValueType_50 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=DisBenefits_Provider_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_112 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.disbenprovider), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at PIPSummaryDV.pcf: line 52, column 65
    function visible_33 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at PIPSummaryDV.pcf: line 38, column 59
    function visible_37 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_60 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=PIPDamages_Claimant_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_63 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
    property get ContactProhibited() : boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
      
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant) 
      if (claimContact != null) claimContact.ContactProhibited = prohibited 
    }
          
        
    
    
  }
  
  
}