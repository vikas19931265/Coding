package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/vehicle/VehicleDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleDamageDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/vehicle/VehicleDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDamageDV_NewIncidentMenuItem) at VehicleDamageDV.pcf: line 196, column 104
    function action_122 () : void {
      NewVehicleIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDamageDV_EditIncidentMenuItem) at VehicleDamageDV.pcf: line 201, column 105
    function action_124 () : void {
      EditVehicleIncidentPopup.push(Exposure.VehicleIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDamageDV_ViewIncidentMenuItem) at VehicleDamageDV.pcf: line 206, column 105
    function action_126 () : void {
      EditVehicleIncidentPopup.push(Exposure.VehicleIncident, false)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at VehicleDamageDV.pcf: line 75, column 49
    function action_40 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_59 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_61 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at VehicleDamageDV.pcf: line 102, column 63
    function action_69 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_86 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_88 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_91 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDamageDV_NewIncidentMenuItem) at VehicleDamageDV.pcf: line 196, column 104
    function action_dest_123 () : pcf.api.Destination {
      return pcf.NewVehicleIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDamageDV_EditIncidentMenuItem) at VehicleDamageDV.pcf: line 201, column 105
    function action_dest_125 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(Exposure.VehicleIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=VehicleDamageDV_ViewIncidentMenuItem) at VehicleDamageDV.pcf: line 206, column 105
    function action_dest_127 () : pcf.api.Destination {
      return pcf.EditVehicleIncidentPopup.createDestination(Exposure.VehicleIncident, false)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name_Input) at VehicleDamageDV.pcf: line 75, column 49
    function action_dest_41 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_60 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_62 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at VehicleDamageDV.pcf: line 102, column 63
    function action_dest_70 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_87 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_92 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name_Input) at VehicleDamageDV.pcf: line 75, column 49
    function available_39 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'def' attribute on InputSetRef at VehicleDamageDV.pcf: line 242, column 51
    function def_onEnter_155 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at VehicleDamageDV.pcf: line 277, column 27
    function def_onEnter_172 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at VehicleDamageDV.pcf: line 315, column 49
    function def_onEnter_200 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_83 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at VehicleDamageDV.pcf: line 242, column 51
    function def_refreshVariables_156 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at VehicleDamageDV.pcf: line 277, column 27
    function def_refreshVariables_173 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at VehicleDamageDV.pcf: line 315, column 49
    function def_refreshVariables_201 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_84 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at VehicleDamageDV.pcf: line 144, column 42
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at VehicleDamageDV.pcf: line 159, column 36
    function defaultSetter_109 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at VehicleDamageDV.pcf: line 188, column 44
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident = (__VALUE_TO_SET as entity.VehicleIncident)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at VehicleDamageDV.pcf: line 263, column 43
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at VehicleDamageDV.pcf: line 272, column 41
    function defaultSetter_169 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function defaultSetter_28 (__VALUE_TO_SET :  java.lang.Object) : void {
      coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'editable' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function editable_26 () : java.lang.Boolean {
      return Exposure.Coverage == null or Exposure.Coverage.IsEditable
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState_Input) at VehicleDamageDV.pcf: line 263, column 43
    function filter_166 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'initialValue' attribute on Variable at VehicleDamageDV.pcf: line 16, column 24
    function initialValue_0 () : Coverage {
      return Exposure.Coverage
    }
    
    // 'onChange' attribute on PostOnChange at VehicleDamageDV.pcf: line 62, column 45
    function onChange_25 () : void {
      setCoverage(coverage)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_93 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at VehicleDamageDV.pcf: line 146, column 40
    function reflectionValue_103 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at VehicleDamageDV.pcf: line 166, column 44
    function reflectionValue_111 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at VehicleDamageDV.pcf: line 175, column 53
    function reflectionValue_116 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on Reflect at VehicleDamageDV.pcf: line 215, column 33
    function reflectionValue_135 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.driver
    }
    
    // 'value' attribute on Reflect at VehicleDamageDV.pcf: line 223, column 38
    function reflectionValue_140 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.Description
    }
    
    // 'value' attribute on Reflect at VehicleDamageDV.pcf: line 231, column 42
    function reflectionValue_145 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.VehicleOperable
    }
    
    // 'value' attribute on Reflect at VehicleDamageDV.pcf: line 239, column 39
    function reflectionValue_150 (TRIGGER_INDEX :  int, VALUE :  entity.VehicleIncident) : java.lang.Object {
      return VALUE.LossEstimate
    }
    
    // ClaimContactInput (id=Claimant_Picker_Input) at VehicleDamageDV.pcf: line 129, column 34
    function reflectionValue_90 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'valueRange' attribute on Reflect at VehicleDamageDV.pcf: line 191, column 82
    function valueRange_121 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(VALUE)
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at VehicleDamageDV.pcf: line 188, column 44
    function valueRange_131 () : java.lang.Object {
      return Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function valueRange_29 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_66 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_97 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at VehicleDamageDV.pcf: line 163, column 53
    function valueRoot_114 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at VehicleDamageDV.pcf: line 212, column 35
    function valueRoot_138 () : java.lang.Object {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at VehicleDamageDV.pcf: line 292, column 60
    function valueRoot_177 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at VehicleDamageDV.pcf: line 25, column 44
    function valueRoot_2 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty_Input) at VehicleDamageDV.pcf: line 25, column 44
    function value_1 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type_Input) at VehicleDamageDV.pcf: line 144, column 42
    function value_104 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited_Input) at VehicleDamageDV.pcf: line 159, column 36
    function value_108 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone_Input) at VehicleDamageDV.pcf: line 163, column 53
    function value_113 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextAreaInput (id=Claimant_Address_Input) at VehicleDamageDV.pcf: line 172, column 62
    function value_118 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on RangeInput (id=Vehicle_Incident_Input) at VehicleDamageDV.pcf: line 188, column 44
    function value_128 () : entity.VehicleIncident {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome_Input) at VehicleDamageDV.pcf: line 41, column 50
    function value_13 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on TextInput (id=Incident_Driver_Input) at VehicleDamageDV.pcf: line 212, column 35
    function value_137 () : entity.Person {
      return Exposure.VehicleIncident.driver
    }
    
    // 'value' attribute on TextInput (id=Incident_Description_Input) at VehicleDamageDV.pcf: line 220, column 54
    function value_142 () : java.lang.String {
      return Exposure.VehicleIncident.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=Incident_VehicleOperable_Input) at VehicleDamageDV.pcf: line 228, column 58
    function value_147 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleOperable
    }
    
    // 'value' attribute on CurrencyInput (id=Incident_LossEstimate_Input) at VehicleDamageDV.pcf: line 236, column 55
    function value_152 () : gw.api.financials.CurrencyAmount {
      return Exposure.VehicleIncident.LossEstimate
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment_Input) at VehicleDamageDV.pcf: line 251, column 43
    function value_157 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy_Input) at VehicleDamageDV.pcf: line 256, column 44
    function value_160 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState_Input) at VehicleDamageDV.pcf: line 263, column 43
    function value_163 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage_Input) at VehicleDamageDV.pcf: line 272, column 41
    function value_168 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType_Input) at VehicleDamageDV.pcf: line 46, column 46
    function value_17 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves_Input) at VehicleDamageDV.pcf: line 292, column 60
    function value_176 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments_Input) at VehicleDamageDV.pcf: line 297, column 60
    function value_181 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments_Input) at VehicleDamageDV.pcf: line 302, column 60
    function value_186 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries_Input) at VehicleDamageDV.pcf: line 307, column 62
    function value_191 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet_Input) at VehicleDamageDV.pcf: line 313, column 68
    function value_196 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate_Input) at VehicleDamageDV.pcf: line 52, column 50
    function value_21 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function value_27 () : entity.Coverage {
      return coverage
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason_Input) at VehicleDamageDV.pcf: line 69, column 50
    function value_35 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name_Input) at VehicleDamageDV.pcf: line 75, column 49
    function value_42 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name_Input) at VehicleDamageDV.pcf: line 79, column 58
    function value_46 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at VehicleDamageDV.pcf: line 84, column 44
    function value_49 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on DateInput (id=ClosedDate_Input) at VehicleDamageDV.pcf: line 30, column 50
    function value_5 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TypeKeyInput (id=CreatedVia_Input) at VehicleDamageDV.pcf: line 89, column 33
    function value_52 () : CreatedVia {
      return Exposure.CreatedVia
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at VehicleDamageDV.pcf: line 93, column 38
    function value_56 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function value_63 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning_Input) at VehicleDamageDV.pcf: line 109, column 65
    function value_75 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel_Input) at VehicleDamageDV.pcf: line 116, column 46
    function value_79 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at VehicleDamageDV.pcf: line 132, column 45
    function value_89 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage_Input) at VehicleDamageDV.pcf: line 35, column 43
    function value_9 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_94 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at VehicleDamageDV.pcf: line 188, column 44
    function verifyValueRangeIsAllowedType_132 ($$arg :  entity.VehicleIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at VehicleDamageDV.pcf: line 188, column 44
    function verifyValueRangeIsAllowedType_132 ($$arg :  gw.api.database.IQueryBeanResult<entity.VehicleIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at VehicleDamageDV.pcf: line 188, column 44
    function verifyValueRangeIsAllowedType_132 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function verifyValueRangeIsAllowedType_30 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function verifyValueRangeIsAllowedType_30 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function verifyValueRangeIsAllowedType_30 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_67 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_67 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_67 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_98 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_98 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_98 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Vehicle_Incident_Input) at VehicleDamageDV.pcf: line 188, column 44
    function verifyValueRange_133 () : void {
      var __valueRangeArg = Exposure.getVehicleIncidentsWithMatchingLossParty(Exposure.LossParty)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_132(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage_Input) at VehicleDamageDV.pcf: line 60, column 37
    function verifyValueRange_31 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_30(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine_Input) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_68 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_67(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_99 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactTypes(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_98(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=CreatedVia_Input) at VehicleDamageDV.pcf: line 89, column 33
    function verifyValueType_55 () : void {
      var __valueTypeArg : CreatedVia
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on Label at VehicleDamageDV.pcf: line 286, column 70
    function visible_174 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=RemainingReserves_Input) at VehicleDamageDV.pcf: line 292, column 60
    function visible_175 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=FuturePayments_Input) at VehicleDamageDV.pcf: line 297, column 60
    function visible_180 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalRecoveries_Input) at VehicleDamageDV.pcf: line 307, column 62
    function visible_190 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalIncurredNet_Input) at VehicleDamageDV.pcf: line 313, column 68
    function visible_195 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Exposure.Claim)
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate_Input) at VehicleDamageDV.pcf: line 52, column 50
    function visible_20 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate_Input) at VehicleDamageDV.pcf: line 30, column 50
    function visible_4 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning_Input) at VehicleDamageDV.pcf: line 109, column 65
    function visible_74 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at VehicleDamageDV.pcf: line 95, column 59
    function visible_78 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_82 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_85 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get coverage () : Coverage {
      return getVariableValue("coverage", 0) as Coverage
    }
    
    property set coverage ($arg :  Coverage) {
      setVariableValue("coverage", 0, $arg)
    }
    
    property get ContactProhibited() : boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
      
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant) 
      if (claimContact != null) claimContact.ContactProhibited = prohibited 
    }
    
    function setCoverage(cov : Coverage) {
      var result = Exposure.updateCoverage(cov)
    
      // Display a warning if changing from a coverage with a waived deductible and the new deductible is unwaived
      if (Exposure.Coverage.ClaimDeductible != null
          and !Exposure.Coverage.ClaimDeductible.Waived
          and result.OriginalDeductibleWasWaived) {
        gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Deductible.ChangingFromCoverageWithWaivedDeductible"))      
      }
      // Display a warning if changing from a coverage with a modified deductible and the new deductible is unmodified
      if (Exposure.Coverage.ClaimDeductible != null
          and !Exposure.Coverage.ClaimDeductible.Overridden
          and result.OriginalDeductibleWasOverridden) {
        gw.api.util.LocationUtil.addRequestScopedInfoMessage(DisplayKey.get("Deductible.ChangingFromCoverageWithModifiedDeductible"))      
      }
    }
    
    
  }
  
  
}