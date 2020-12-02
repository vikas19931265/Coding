package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/LossOfUseDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossOfUseDamageDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/LossOfUseDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossOfUseDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at LossOfUseDamageDV.pcf: line 67, column 49
    function action_37 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_56 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_58 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at LossOfUseDamageDV.pcf: line 94, column 63
    function action_66 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_83 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_85 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_88 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at LossOfUseDamageDV.pcf: line 67, column 49
    function action_dest_38 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_57 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_59 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at LossOfUseDamageDV.pcf: line 94, column 63
    function action_dest_67 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_84 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_89 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at LossOfUseDamageDV.pcf: line 67, column 49
    function available_36 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 170, column 57
    function def_onEnter_118 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(Exposure.AddressOwner)
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 172, column 51
    function def_onEnter_120 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at LossOfUseDamageDV.pcf: line 249, column 27
    function def_onEnter_167 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 269, column 144
    function def_onEnter_173 (def :  pcf.OtherServicesLVInputSet) : void {
      def.onEnter(Exposure.Claim, Exposure.PropertyIncident, Exposure.PropertyIncident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 296, column 49
    function def_onEnter_190 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_80 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 170, column 57
    function def_refreshVariables_119 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(Exposure.AddressOwner)
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 172, column 51
    function def_refreshVariables_121 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at LossOfUseDamageDV.pcf: line 249, column 27
    function def_refreshVariables_168 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 269, column 144
    function def_refreshVariables_174 (def :  pcf.OtherServicesLVInputSet) : void {
      def.refreshVariables(Exposure.Claim, Exposure.PropertyIncident, Exposure.PropertyIncident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on InputSetRef at LossOfUseDamageDV.pcf: line 296, column 49
    function def_refreshVariables_191 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_81 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at LossOfUseDamageDV.pcf: line 136, column 42
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at LossOfUseDamageDV.pcf: line 151, column 36
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossOfUseDamageDV.pcf: line 183, column 48
    function defaultSetter_123 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at LossOfUseDamageDV.pcf: line 188, column 53
    function defaultSetter_127 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.PropertyIncident.LossofUse = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at LossOfUseDamageDV.pcf: line 195, column 49
    function defaultSetter_131 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at LossOfUseDamageDV.pcf: line 203, column 64
    function defaultSetter_136 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.PropertyIncident.MealsDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsPeople_Input) at LossOfUseDamageDV.pcf: line 210, column 64
    function defaultSetter_142 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.PropertyIncident.MealsPeople = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_ALEMealsRate_Input) at LossOfUseDamageDV.pcf: line 216, column 64
    function defaultSetter_148 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.PropertyIncident.MealsRate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at LossOfUseDamageDV.pcf: line 225, column 43
    function defaultSetter_153 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at LossOfUseDamageDV.pcf: line 244, column 41
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at LossOfUseDamageDV.pcf: line 55, column 38
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at LossOfUseDamageDV.pcf: line 225, column 43
    function filter_155 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_90 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at LossOfUseDamageDV.pcf: line 138, column 40
    function reflectionValue_100 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at LossOfUseDamageDV.pcf: line 158, column 44
    function reflectionValue_108 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at LossOfUseDamageDV.pcf: line 166, column 53
    function reflectionValue_113 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at LossOfUseDamageDV.pcf: line 121, column 34
    function reflectionValue_87 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at LossOfUseDamageDV.pcf: line 55, column 38
    function valueRange_27 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_63 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_94 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at LossOfUseDamageDV.pcf: line 21, column 44
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at LossOfUseDamageDV.pcf: line 155, column 53
    function valueRoot_111 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossOfUseDamageDV.pcf: line 183, column 48
    function valueRoot_124 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at LossOfUseDamageDV.pcf: line 188, column 53
    function valueRoot_128 () : java.lang.Object {
      return Exposure.PropertyIncident
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at LossOfUseDamageDV.pcf: line 277, column 57
    function valueRoot_176 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at LossOfUseDamageDV.pcf: line 21, column 44
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at LossOfUseDamageDV.pcf: line 136, column 42
    function value_101 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at LossOfUseDamageDV.pcf: line 151, column 36
    function value_105 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at LossOfUseDamageDV.pcf: line 155, column 53
    function value_110 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at LossOfUseDamageDV.pcf: line 163, column 62
    function value_115 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at LossOfUseDamageDV.pcf: line 37, column 50
    function value_12 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossOfUseDamageDV.pcf: line 183, column 48
    function value_122 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Exposure_LossofUse_Input) at LossOfUseDamageDV.pcf: line 188, column 53
    function value_126 () : java.lang.Boolean {
      return Exposure.PropertyIncident.LossofUse
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at LossOfUseDamageDV.pcf: line 195, column 49
    function value_130 () : gw.api.financials.CurrencyAmount {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at LossOfUseDamageDV.pcf: line 203, column 64
    function value_135 () : java.lang.Integer {
      return Exposure.PropertyIncident.MealsDays
    }
    
    // 'value' attribute on TextInput (id=Exposure_ALEMealsPeople_Input) at LossOfUseDamageDV.pcf: line 210, column 64
    function value_141 () : java.lang.Integer {
      return Exposure.PropertyIncident.MealsPeople
    }
    
    // 'value' attribute on CurrencyInput (id=Exposure_ALEMealsRate_Input) at LossOfUseDamageDV.pcf: line 216, column 64
    function value_147 () : gw.api.financials.CurrencyAmount {
      return Exposure.PropertyIncident.MealsRate
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at LossOfUseDamageDV.pcf: line 225, column 43
    function value_152 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at LossOfUseDamageDV.pcf: line 230, column 43
    function value_157 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at LossOfUseDamageDV.pcf: line 42, column 46
    function value_16 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at LossOfUseDamageDV.pcf: line 235, column 44
    function value_160 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at LossOfUseDamageDV.pcf: line 244, column 41
    function value_163 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at LossOfUseDamageDV.pcf: line 277, column 57
    function value_175 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at LossOfUseDamageDV.pcf: line 281, column 54
    function value_178 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at LossOfUseDamageDV.pcf: line 285, column 53
    function value_181 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at LossOfUseDamageDV.pcf: line 289, column 55
    function value_184 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at LossOfUseDamageDV.pcf: line 294, column 56
    function value_187 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at LossOfUseDamageDV.pcf: line 48, column 50
    function value_20 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at LossOfUseDamageDV.pcf: line 55, column 38
    function value_24 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at LossOfUseDamageDV.pcf: line 61, column 50
    function value_32 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at LossOfUseDamageDV.pcf: line 67, column 49
    function value_39 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at LossOfUseDamageDV.pcf: line 26, column 50
    function value_4 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at LossOfUseDamageDV.pcf: line 71, column 58
    function value_43 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at LossOfUseDamageDV.pcf: line 76, column 44
    function value_46 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at LossOfUseDamageDV.pcf: line 81, column 33
    function value_49 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at LossOfUseDamageDV.pcf: line 85, column 38
    function value_53 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_60 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at LossOfUseDamageDV.pcf: line 101, column 65
    function value_72 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at LossOfUseDamageDV.pcf: line 108, column 46
    function value_76 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at LossOfUseDamageDV.pcf: line 31, column 43
    function value_8 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at LossOfUseDamageDV.pcf: line 124, column 45
    function value_86 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_91 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at LossOfUseDamageDV.pcf: line 55, column 38
    function verifyValueRangeIsAllowedType_28 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at LossOfUseDamageDV.pcf: line 55, column 38
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at LossOfUseDamageDV.pcf: line 55, column 38
    function verifyValueRangeIsAllowedType_28 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_64 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_64 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_64 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_95 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_95 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_95 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at LossOfUseDamageDV.pcf: line 55, column 38
    function verifyValueRange_29 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_28(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_65 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_64(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_96 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_95(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at LossOfUseDamageDV.pcf: line 81, column 33
    function verifyValueType_52 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=Exposure_ALEMealsDays_Input) at LossOfUseDamageDV.pcf: line 203, column 64
    function visible_134 () : java.lang.Boolean {
      return Exposure.PropertyIncident.LossofUse == true
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at LossOfUseDamageDV.pcf: line 262, column 46
    function visible_169 () : java.lang.Boolean {
      return Exposure.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at LossOfUseDamageDV.pcf: line 267, column 81
    function visible_171 () : java.lang.Boolean {
      return not Exposure.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at LossOfUseDamageDV.pcf: line 48, column 50
    function visible_19 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at LossOfUseDamageDV.pcf: line 26, column 50
    function visible_3 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at LossOfUseDamageDV.pcf: line 101, column 65
    function visible_71 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at LossOfUseDamageDV.pcf: line 87, column 59
    function visible_75 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_79 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_82 () : java.lang.Boolean {
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