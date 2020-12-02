package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Medpay.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExposureDetailDV_MedpayExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Medpay.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposureDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_122 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_124 () : void {
      if (Exposure.altcontact != null) { ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_125 () : void {
      ClaimContactDetailPopup.push(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Medpay.pcf: line 74, column 53
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
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at ExposureDetailDV.Medpay.pcf: line 101, column 67
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
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_123 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_126 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.altcontact, Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Medpay.pcf: line 74, column 53
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
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at ExposureDetailDV.Medpay.pcf: line 101, column 67
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
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Medpay.pcf: line 74, column 53
    function available_36 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_119 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Medpay.pcf: line 186, column 55
    function def_onEnter_138 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Medpay.pcf: line 190, column 47
    function def_onEnter_140 (def :  pcf.BIDamageInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at ExposureDetailDV.Medpay.pcf: line 224, column 31
    function def_onEnter_157 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Medpay.pcf: line 262, column 53
    function def_onEnter_185 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Medpay.pcf: line 271, column 39
    function def_onEnter_187 (def :  pcf.ISODetailsDV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_80 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_120 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.altcontact), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Medpay.pcf: line 186, column 55
    function def_refreshVariables_139 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Medpay.pcf: line 190, column 47
    function def_refreshVariables_141 (def :  pcf.BIDamageInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at ExposureDetailDV.Medpay.pcf: line 224, column 31
    function def_refreshVariables_158 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Medpay.pcf: line 262, column 53
    function def_refreshVariables_186 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Medpay.pcf: line 271, column 39
    function def_refreshVariables_188 (def :  pcf.ISODetailsDV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_81 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at ExposureDetailDV.Medpay.pcf: line 143, column 46
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at ExposureDetailDV.Medpay.pcf: line 158, column 40
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.altcontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Medpay.pcf: line 200, column 47
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at ExposureDetailDV.Medpay.pcf: line 219, column 45
    function defaultSetter_154 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Medpay.pcf: line 62, column 42
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
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Medpay.pcf: line 200, column 47
    function filter_145 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_127 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.altcontact); var result = eval("Exposure.altcontact = Exposure.Claim.resolveContact(Exposure.altcontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_90 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at ExposureDetailDV.Medpay.pcf: line 145, column 44
    function reflectionValue_100 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at ExposureDetailDV.Medpay.pcf: line 165, column 48
    function reflectionValue_108 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at ExposureDetailDV.Medpay.pcf: line 173, column 57
    function reflectionValue_113 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at ExposureDetailDV.Medpay.pcf: line 128, column 38
    function reflectionValue_87 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_131 () : java.lang.Object {
      return Exposure.Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Medpay.pcf: line 62, column 42
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
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at ExposureDetailDV.Medpay.pcf: line 27, column 48
    function valueRoot_1 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at ExposureDetailDV.Medpay.pcf: line 162, column 57
    function valueRoot_111 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Medpay.pcf: line 239, column 64
    function valueRoot_162 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at ExposureDetailDV.Medpay.pcf: line 27, column 48
    function value_0 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at ExposureDetailDV.Medpay.pcf: line 143, column 46
    function value_101 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at ExposureDetailDV.Medpay.pcf: line 158, column 40
    function value_105 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at ExposureDetailDV.Medpay.pcf: line 162, column 57
    function value_110 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at ExposureDetailDV.Medpay.pcf: line 170, column 66
    function value_115 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at ExposureDetailDV.Medpay.pcf: line 43, column 54
    function value_12 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_128 () : entity.Person {
      return Exposure.altcontact
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Medpay.pcf: line 200, column 47
    function value_142 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at ExposureDetailDV.Medpay.pcf: line 205, column 47
    function value_147 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at ExposureDetailDV.Medpay.pcf: line 210, column 48
    function value_150 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at ExposureDetailDV.Medpay.pcf: line 219, column 45
    function value_153 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at ExposureDetailDV.Medpay.pcf: line 48, column 50
    function value_16 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Medpay.pcf: line 239, column 64
    function value_161 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at ExposureDetailDV.Medpay.pcf: line 244, column 64
    function value_166 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at ExposureDetailDV.Medpay.pcf: line 249, column 64
    function value_171 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at ExposureDetailDV.Medpay.pcf: line 254, column 66
    function value_176 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at ExposureDetailDV.Medpay.pcf: line 260, column 72
    function value_181 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Medpay.pcf: line 54, column 54
    function value_20 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Medpay.pcf: line 62, column 42
    function value_24 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at ExposureDetailDV.Medpay.pcf: line 68, column 54
    function value_32 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Medpay.pcf: line 74, column 53
    function value_39 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Medpay.pcf: line 32, column 54
    function value_4 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at ExposureDetailDV.Medpay.pcf: line 78, column 62
    function value_43 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at ExposureDetailDV.Medpay.pcf: line 83, column 48
    function value_46 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Medpay.pcf: line 88, column 37
    function value_49 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ExposureDetailDV.Medpay.pcf: line 92, column 42
    function value_53 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_60 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at ExposureDetailDV.Medpay.pcf: line 108, column 69
    function value_72 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at ExposureDetailDV.Medpay.pcf: line 115, column 50
    function value_76 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at ExposureDetailDV.Medpay.pcf: line 37, column 47
    function value_8 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ExposureDetailDV.Medpay.pcf: line 131, column 49
    function value_86 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_91 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_132 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_132 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_132 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Medpay.pcf: line 62, column 42
    function verifyValueRangeIsAllowedType_28 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Medpay.pcf: line 62, column 42
    function verifyValueRangeIsAllowedType_28 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Medpay.pcf: line 62, column 42
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
    
    // 'valueRange' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_133 () : void {
      var __valueRangeArg = Exposure.Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_132(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Medpay.pcf: line 62, column 42
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
    
    // 'valueType' attribute on ClaimContactInput (id=AltContact_Name_Input) at ExposureDetailDV.Medpay.pcf: line 184, column 40
    function verifyValueType_137 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Medpay.pcf: line 88, column 37
    function verifyValueType_52 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactInput (id=AltContact_Name_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_121 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.altcontact), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on Label at ExposureDetailDV.Medpay.pcf: line 233, column 74
    function visible_159 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Medpay.pcf: line 239, column 64
    function visible_160 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=FuturePayments_Input) at ExposureDetailDV.Medpay.pcf: line 244, column 64
    function visible_165 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalRecoveries_Input) at ExposureDetailDV.Medpay.pcf: line 254, column 66
    function visible_175 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalIncurredNet_Input) at ExposureDetailDV.Medpay.pcf: line 260, column 72
    function visible_180 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Exposure.Claim)
    }
    
    // 'visible' attribute on Card (id=Exposure_ISOCard) at ExposureDetailDV.Medpay.pcf: line 269, column 56
    function visible_189 () : java.lang.Boolean {
      return !Exposure.Claim.ISOClaimLevelMessaging
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Medpay.pcf: line 54, column 54
    function visible_19 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Medpay.pcf: line 32, column 54
    function visible_3 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at ExposureDetailDV.Medpay.pcf: line 108, column 69
    function visible_71 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at ExposureDetailDV.Medpay.pcf: line 94, column 63
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
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
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