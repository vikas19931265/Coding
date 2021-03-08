package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.Set
@javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Personalpropertydamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExposureDetailDV_PersonalpropertydamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Personalpropertydamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposureDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 81, column 53
    function action_39 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_58 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_60 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 108, column 67
    function action_68 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_85 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_87 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_90 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 81, column 53
    function action_dest_40 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_59 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_61 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 108, column 67
    function action_dest_69 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_86 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_91 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 81, column 53
    function available_38 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Personalpropertydamage.pcf: line 202, column 55
    function def_onEnter_132 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at ExposureDetailDV.Personalpropertydamage.pcf: line 257, column 31
    function def_onEnter_161 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at ExposureDetailDV.Personalpropertydamage.pcf: line 278, column 44
    function def_onEnter_167 (def :  pcf.AppraisalServiceInputSet) : void {
      def.onEnter(AppraisalServiceRequest, Exposure.MobilePropertyIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Personalpropertydamage.pcf: line 280, column 197
    function def_onEnter_169 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.onEnter(Exposure.MobilePropertyIncident.Claim, Exposure.MobilePropertyIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Personalpropertydamage.pcf: line 313, column 53
    function def_onEnter_197 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Personalpropertydamage.pcf: line 322, column 39
    function def_onEnter_199 (def :  pcf.ISODetailsDV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_82 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Personalpropertydamage.pcf: line 202, column 55
    function def_refreshVariables_133 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at ExposureDetailDV.Personalpropertydamage.pcf: line 257, column 31
    function def_refreshVariables_162 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at ExposureDetailDV.Personalpropertydamage.pcf: line 278, column 44
    function def_refreshVariables_168 (def :  pcf.AppraisalServiceInputSet) : void {
      def.refreshVariables(AppraisalServiceRequest, Exposure.MobilePropertyIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Personalpropertydamage.pcf: line 280, column 197
    function def_refreshVariables_170 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.refreshVariables(Exposure.MobilePropertyIncident.Claim, Exposure.MobilePropertyIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Personalpropertydamage.pcf: line 313, column 53
    function def_refreshVariables_198 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on PanelRef at ExposureDetailDV.Personalpropertydamage.pcf: line 322, column 39
    function def_refreshVariables_200 (def :  pcf.ISODetailsDV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_83 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 150, column 46
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 165, column 40
    function defaultSetter_108 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyPropertyDamage_PropertyDescription_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 189, column 67
    function defaultSetter_121 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.PropertyDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=ThirdPartyPropertyDamage_Description_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 195, column 52
    function defaultSetter_125 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=ThirdPartyPropertyDamage_LossEstimate_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 200, column 53
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=ThirdPartyPropertyDamage_EstimatedReceived_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 213, column 40
    function defaultSetter_135 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.EstimatesReceived = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on CurrencyInput (id=ThirdPartyPropertyDamage_EstimateCost_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 218, column 68
    function defaultSetter_139 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.EstRepairCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyPropertyDamage_EstimateTime_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 223, column 68
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.MobilePropertyIncident.EstRepairTime = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 243, column 47
    function defaultSetter_153 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 252, column 45
    function defaultSetter_158 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 69, column 42
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 243, column 47
    function filter_155 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'initialValue' attribute on Variable at ExposureDetailDV.Personalpropertydamage.pcf: line 17, column 22
    function initialValue_0 () : String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.PROPINSPECTAPPRAISAL
    }
    
    // 'initialValue' attribute on Variable at ExposureDetailDV.Personalpropertydamage.pcf: line 21, column 51
    function initialValue_1 () : java.util.Set<ServiceRequest> {
      return createOtherServiceRequests()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_92 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at ExposureDetailDV.Personalpropertydamage.pcf: line 152, column 44
    function reflectionValue_102 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at ExposureDetailDV.Personalpropertydamage.pcf: line 172, column 48
    function reflectionValue_110 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at ExposureDetailDV.Personalpropertydamage.pcf: line 180, column 57
    function reflectionValue_115 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 135, column 38
    function reflectionValue_89 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 69, column 42
    function valueRange_29 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_65 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_96 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 169, column 57
    function valueRoot_113 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyPropertyDamage_PropertyDescription_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 189, column 67
    function valueRoot_122 () : java.lang.Object {
      return Exposure.MobilePropertyIncident
    }
    
    // 'value' attribute on TextAreaInput (id=ThirdPartyPropertyDamage_Description_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 195, column 52
    function valueRoot_126 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 290, column 64
    function valueRoot_174 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 35, column 48
    function valueRoot_3 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 45, column 47
    function value_10 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 150, column 46
    function value_103 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 165, column 40
    function value_107 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 169, column 57
    function value_112 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 177, column 66
    function value_117 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyPropertyDamage_PropertyDescription_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 189, column 67
    function value_120 () : java.lang.String {
      return Exposure.MobilePropertyIncident.PropertyDesc
    }
    
    // 'value' attribute on TextAreaInput (id=ThirdPartyPropertyDamage_Description_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 195, column 52
    function value_124 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on CurrencyInput (id=ThirdPartyPropertyDamage_LossEstimate_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 200, column 53
    function value_128 () : gw.api.financials.CurrencyAmount {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on TypeKeyInput (id=ThirdPartyPropertyDamage_EstimatedReceived_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 213, column 40
    function value_134 () : typekey.YesNo {
      return Exposure.MobilePropertyIncident.EstimatesReceived
    }
    
    // 'value' attribute on CurrencyInput (id=ThirdPartyPropertyDamage_EstimateCost_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 218, column 68
    function value_138 () : gw.api.financials.CurrencyAmount {
      return Exposure.MobilePropertyIncident.EstRepairCost
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 51, column 54
    function value_14 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=ThirdPartyPropertyDamage_EstimateTime_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 223, column 68
    function value_142 () : java.lang.String {
      return Exposure.MobilePropertyIncident.EstRepairTime
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 231, column 47
    function value_146 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 236, column 48
    function value_149 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 243, column 47
    function value_152 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 252, column 45
    function value_157 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 290, column 64
    function value_173 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 295, column 64
    function value_178 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 56, column 50
    function value_18 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 300, column 64
    function value_183 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 305, column 66
    function value_188 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 311, column 72
    function value_193 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 35, column 48
    function value_2 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 62, column 54
    function value_22 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 69, column 42
    function value_26 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 75, column 54
    function value_34 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 81, column 53
    function value_41 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 85, column 62
    function value_45 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 90, column 48
    function value_48 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 95, column 37
    function value_51 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 99, column 42
    function value_55 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 40, column 54
    function value_6 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_62 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 115, column 69
    function value_74 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 122, column 50
    function value_78 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 138, column 49
    function value_88 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_93 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 69, column 42
    function verifyValueRangeIsAllowedType_30 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 69, column 42
    function verifyValueRangeIsAllowedType_30 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 69, column 42
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_66 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_66 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_66 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_97 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_97 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_97 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 69, column 42
    function verifyValueRange_31 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_67 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_66(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_98 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_97(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 95, column 37
    function verifyValueType_54 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 270, column 50
    function visible_163 () : java.lang.Boolean {
      return Exposure.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 275, column 85
    function visible_165 () : java.lang.Boolean {
      return not Exposure.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on Label at ExposureDetailDV.Personalpropertydamage.pcf: line 284, column 74
    function visible_171 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=RemainingReserves_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 290, column 64
    function visible_172 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=FuturePayments_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 295, column 64
    function visible_177 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalRecoveries_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 305, column 66
    function visible_187 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalIncurredNet_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 311, column 72
    function visible_192 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Exposure.Claim)
    }
    
    // 'visible' attribute on Card (id=Exposure_ISOCard) at ExposureDetailDV.Personalpropertydamage.pcf: line 320, column 56
    function visible_201 () : java.lang.Boolean {
      return !Exposure.Claim.ISOClaimLevelMessaging
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 62, column 54
    function visible_21 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 40, column 54
    function visible_5 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at ExposureDetailDV.Personalpropertydamage.pcf: line 115, column 69
    function visible_73 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at ExposureDetailDV.Personalpropertydamage.pcf: line 101, column 63
    function visible_77 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_81 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_84 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get appraisalIncidentCode () : String {
      return getVariableValue("appraisalIncidentCode", 0) as String
    }
    
    property set appraisalIncidentCode ($arg :  String) {
      setVariableValue("appraisalIncidentCode", 0, $arg)
    }
    
    property get otherServiceRequests () : java.util.Set<ServiceRequest> {
      return getVariableValue("otherServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set otherServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setVariableValue("otherServiceRequests", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
    function findServiceRequest(serviceCode : String) : ServiceRequest {
      return Exposure.MobilePropertyIncident.ServiceRequests.firstWhere(\ sr ->
          sr.Instruction.Services.Count == 1
              and sr.Instruction.Services.single().Service.Code == serviceCode
              and (otherServiceRequests == null or not otherServiceRequests.contains(sr))
      )
    }
    
    property get AppraisalServiceRequest() : ServiceRequest {
      return findServiceRequest(appraisalIncidentCode)
    }
    
    function createOtherServiceRequests() :  Set<ServiceRequest> {
      return Exposure.MobilePropertyIncident.ServiceRequests.where(\sr -> sr != AppraisalServiceRequest).toSet()
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