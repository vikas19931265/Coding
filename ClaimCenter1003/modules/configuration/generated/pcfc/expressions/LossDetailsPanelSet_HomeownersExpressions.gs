package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LossDetailsPanelSet_HomeownersExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends LossDetailsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_229 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_231 () : void {
      if (Claim.reporter != null) { ClaimContactDetailPopup.push(Claim.reporter, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_232 () : void {
      ClaimContactDetailPopup.push(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_253 () : void {
      AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_255 () : void {
      if (Claim.maincontact != null) { ClaimContactDetailPopup.push(Claim.maincontact, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_256 () : void {
      ClaimContactDetailPopup.push(Claim.maincontact, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_230 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_233 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.reporter, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_254 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_257 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Claim.maincontact, Claim)
    }
    
    // 'def' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at LossDetailsPanelSet.Homeowners.pcf: line 546, column 54
    function def_onEnter_206 (def :  pcf.FireDamageQuestionsPanelSet) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on PanelRef (id=WaterDamageQuestionsPanelSet) at LossDetailsPanelSet.Homeowners.pcf: line 553, column 55
    function def_onEnter_209 (def :  pcf.WaterDamageQuestionsPanelSet) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at LossDetailsPanelSet.Homeowners.pcf: line 569, column 35
    function def_onEnter_211 (def :  pcf.EditableWitnessesLV) : void {
      def.onEnter(Claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), Claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsPanelSet.Homeowners.pcf: line 580, column 35
    function def_onEnter_213 (def :  pcf.EditableOfficialsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at LossDetailsPanelSet.Homeowners.pcf: line 592, column 35
    function def_onEnter_215 (def :  pcf.MetroReportsLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_226 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_250 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsPanelSet.Homeowners.pcf: line 683, column 33
    function def_onEnter_278 (def :  pcf.PriorClaimsLV) : void {
      def.onEnter(Claim.findPriorClaimsByPolicyNumber(Claim.Policy.PolicyNumber, {ClaimState.TC_DRAFT}))
    }
    
    // 'def' attribute on PanelRef at LossDetailsPanelSet.Homeowners.pcf: line 694, column 38
    function def_onEnter_280 (def :  pcf.ISODetailsDV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at LossDetailsPanelSet.Homeowners.pcf: line 145, column 83
    function def_onEnter_72 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(HomeownersHelper.getAddressesWithoutPrimaryLocation())
    }
    
    // 'def' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at LossDetailsPanelSet.Homeowners.pcf: line 546, column 54
    function def_refreshVariables_207 (def :  pcf.FireDamageQuestionsPanelSet) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on PanelRef (id=WaterDamageQuestionsPanelSet) at LossDetailsPanelSet.Homeowners.pcf: line 553, column 55
    function def_refreshVariables_210 (def :  pcf.WaterDamageQuestionsPanelSet) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=WitnessLV) at LossDetailsPanelSet.Homeowners.pcf: line 569, column 35
    function def_refreshVariables_212 (def :  pcf.EditableWitnessesLV) : void {
      def.refreshVariables(Claim.getClaimContactRolesByRole(ContactRole.TC_WITNESS), Claim, ContactRole.TC_WITNESS)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsPanelSet.Homeowners.pcf: line 580, column 35
    function def_refreshVariables_214 (def :  pcf.EditableOfficialsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ListViewInput (id=PoliceReportLV) at LossDetailsPanelSet.Homeowners.pcf: line 592, column 35
    function def_refreshVariables_216 (def :  pcf.MetroReportsLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_227 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.reporter), null, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_251 (def :  pcf.ClaimNewPersonOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Claim.maincontact), null, Claim)
    }
    
    // 'def' attribute on ListViewInput at LossDetailsPanelSet.Homeowners.pcf: line 683, column 33
    function def_refreshVariables_279 (def :  pcf.PriorClaimsLV) : void {
      def.refreshVariables(Claim.findPriorClaimsByPolicyNumber(Claim.Policy.PolicyNumber, {ClaimState.TC_DRAFT}))
    }
    
    // 'def' attribute on PanelRef at LossDetailsPanelSet.Homeowners.pcf: line 694, column 38
    function def_refreshVariables_281 (def :  pcf.ISODetailsDV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on InputSetRef (id=AddressDetailInputSetRef) at LossDetailsPanelSet.Homeowners.pcf: line 145, column 83
    function def_refreshVariables_73 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(HomeownersHelper.getAddressesWithoutPrimaryLocation())
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at LossDetailsPanelSet.Homeowners.pcf: line 46, column 38
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at LossDetailsPanelSet.Homeowners.pcf: line 56, column 45
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LossCause = (__VALUE_TO_SET as typekey.LossCause)
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at LossDetailsPanelSet.Homeowners.pcf: line 66, column 57
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.LocationOfTheft = (__VALUE_TO_SET as typekey.LocationOfTheft)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsPanelSet.Homeowners.pcf: line 609, column 48
    function defaultSetter_218 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FirstNoticeSuit = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsPanelSet.Homeowners.pcf: line 615, column 54
    function defaultSetter_222 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.HowReported = (__VALUE_TO_SET as typekey.HowReportedType)
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_236 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.reporter = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsPanelSet.Homeowners.pcf: line 631, column 56
    function defaultSetter_246 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.ReportedByType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsPanelSet.Homeowners.pcf: line 72, column 48
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.FaultRating = (__VALUE_TO_SET as typekey.FaultRating)
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_260 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.maincontact = (__VALUE_TO_SET as entity.Person)
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsPanelSet.Homeowners.pcf: line 656, column 56
    function defaultSetter_271 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.MainContactType = (__VALUE_TO_SET as typekey.PersonRelationType)
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsPanelSet.Homeowners.pcf: line 673, column 48
    function defaultSetter_275 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.DateRptdToAgent = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsPanelSet.Homeowners.pcf: line 80, column 47
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WeatherRelated_Input) at LossDetailsPanelSet.Homeowners.pcf: line 85, column 45
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.WeatherRelated = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 38, column 42
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      HomeownersHelper.SelectedDamageNames = (__VALUE_TO_SET as java.lang.String[])
    }
    
    // 'value' attribute on Choice (id=PrimaryLocationChoice) at LossDetailsPanelSet.Homeowners.pcf: line 116, column 46
    function defaultSetter_66 (__VALUE_TO_SET :  java.lang.Object) : void {
      HomeownersHelper.LocationChoice = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 20, column 67
    function initialValue_1 () : Map<typekey.Incident, List<Incident>> {
      return HomeownersHelper.IncidentListUIHelper.SortedIncidents.toList().partition(\elt -> elt.Subtype)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 25, column 36
    function initialValue_2 () : typekey.Incident[] {
      return incidentsMap.Keys.toList().sortBy(\i -> i.Code).toTypedArray()
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsPanelSet.Homeowners.pcf: line 58, column 78
    function onChange_14 () : void {
      HomeownersHelper.setDamageAccordingToLossCause()
    }
    
    // 'onChange' attribute on PostOnChange at LossDetailsPanelSet.Homeowners.pcf: line 48, column 80
    function onChange_7 () : void {
      gw.pcf.ClaimLossDetailsUtil.changedLossDate(Claim)
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_234 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.reporter); var result = eval("Claim.reporter = Claim.resolveContact(Claim.reporter) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onPick' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_258 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Claim.maincontact); var result = eval("Claim.maincontact = Claim.resolveContact(Claim.maincontact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'optionIcon' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function optionIcon_44 (VALUE :  java.lang.String) : java.lang.String {
      return HomeownersHelper.getDamageManagerByPropertyName(VALUE).Icon
    }
    
    // 'optionLabel' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function optionLabel_45 (VALUE :  java.lang.String) : java.lang.String {
      return HomeownersHelper.getDamageManagerByPropertyName(VALUE).Name
    }
    
    // Reflect at LossDetailsPanelSet.Homeowners.pcf: line 633, column 50
    function reflectionValue_244 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at LossDetailsPanelSet.Homeowners.pcf: line 658, column 51
    function reflectionValue_269 (TRIGGER_INDEX :  int, VALUE :  entity.Person) : java.lang.Object {
      return (VALUE==Claim.Insured) ? ("self") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'validationExpression' attribute on DateInput (id=Claim_LossDate_Input) at LossDetailsPanelSet.Homeowners.pcf: line 46, column 38
    function validationExpression_8 () : java.lang.Object {
      return Claim.LossDate == null || Claim.LossDate < gw.api.util.DateUtil.currentDate() ? null : DisplayKey.get("Java.Validation.Date.ForbidFuture")
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_238 () : java.lang.Object {
      return Claim.RelatedPersonArray
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsPanelSet.Homeowners.pcf: line 80, column 47
    function valueRange_32 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function valueRange_46 () : java.lang.Object {
      return HomeownersHelper.DamageNames
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function valueRoot_43 () : java.lang.Object {
      return HomeownersHelper
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 38, column 42
    function valueRoot_5 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at LossDetailsPanelSet.Homeowners.pcf: line 109, column 56
    function valueRoot_53 () : java.lang.Object {
      return Claim.LossLocation
    }
    
    // 'value' attribute on TextInput (id=PropertyAddress_Input) at LossDetailsPanelSet.Homeowners.pcf: line 127, column 57
    function valueRoot_62 () : java.lang.Object {
      return Claim.Policy.PrimaryLocation.Address
    }
    
    // 'value' attribute on TypeKeyInput (id=Claim_LossCause_Input) at LossDetailsPanelSet.Homeowners.pcf: line 56, column 45
    function value_15 () : typekey.LossCause {
      return Claim.LossCause
    }
    
    // 'value' attribute on TypeKeyInput (id=LocationOfTheft_Input) at LossDetailsPanelSet.Homeowners.pcf: line 66, column 57
    function value_20 () : typekey.LocationOfTheft {
      return Claim.LocationOfTheft
    }
    
    // 'value' attribute on BooleanRadioInput (id=Notification_FirstNoticeSuit_Input) at LossDetailsPanelSet.Homeowners.pcf: line 609, column 48
    function value_217 () : java.lang.Boolean {
      return Claim.FirstNoticeSuit
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_HowReported_Input) at LossDetailsPanelSet.Homeowners.pcf: line 615, column 54
    function value_221 () : typekey.HowReportedType {
      return Claim.HowReported
    }
    
    // 'value' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_235 () : entity.Contact {
      return Claim.reporter
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_ReportedByType_Input) at LossDetailsPanelSet.Homeowners.pcf: line 631, column 56
    function value_245 () : typekey.PersonRelationType {
      return Claim.ReportedByType
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_Fault_Input) at LossDetailsPanelSet.Homeowners.pcf: line 72, column 48
    function value_25 () : typekey.FaultRating {
      return Claim.FaultRating
    }
    
    // 'value' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_259 () : entity.Person {
      return Claim.maincontact
    }
    
    // 'value' attribute on TypeKeyInput (id=Notification_MainContactType_Input) at LossDetailsPanelSet.Homeowners.pcf: line 656, column 56
    function value_270 () : typekey.PersonRelationType {
      return Claim.MainContactType
    }
    
    // 'value' attribute on DateInput (id=Notification_DateReportedToAgent_Input) at LossDetailsPanelSet.Homeowners.pcf: line 673, column 48
    function value_274 () : java.util.Date {
      return Claim.DateRptdToAgent
    }
    
    // 'value' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsPanelSet.Homeowners.pcf: line 80, column 47
    function value_29 () : entity.Catastrophe {
      return Claim.Catastrophe
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 38, column 42
    function value_3 () : java.lang.String {
      return Claim.Description
    }
    
    // 'value' attribute on BooleanRadioInput (id=WeatherRelated_Input) at LossDetailsPanelSet.Homeowners.pcf: line 85, column 45
    function value_36 () : java.lang.Boolean {
      return Claim.WeatherRelated
    }
    
    // 'value' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function value_41 () : java.lang.String[] {
      return HomeownersHelper.SelectedDamageNames
    }
    
    // 'value' attribute on TextInput (id=LossLocation_Input) at LossDetailsPanelSet.Homeowners.pcf: line 109, column 56
    function value_52 () : java.lang.String {
      return Claim.LossLocation.DisplayName
    }
    
    // 'value' attribute on TextInput (id=PrimaryLocationChoiceLabel_Input) at LossDetailsPanelSet.Homeowners.pcf: line 122, column 57
    function value_57 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on TextInput (id=PropertyAddress_Input) at LossDetailsPanelSet.Homeowners.pcf: line 127, column 57
    function value_61 () : java.lang.String {
      return Claim.Policy.PrimaryLocation.Address.DisplayName
    }
    
    // 'value' attribute on Choice (id=PrimaryLocationChoice) at LossDetailsPanelSet.Homeowners.pcf: line 116, column 46
    function value_65 () : java.lang.String {
      return HomeownersHelper.LocationChoice
    }
    
    // 'value' attribute on MenuItemIterator at LossDetailsPanelSet.Homeowners.pcf: line 162, column 81
    function value_81 () : java.util.List<gw.api.claim.IncidentUIHelper> {
      return HomeownersHelper.IncidentListUIHelper.IncidentHelpers
    }
    
    // 'value' attribute on DateInput (id=Claim_LossDate_Input) at LossDetailsPanelSet.Homeowners.pcf: line 46, column 38
    function value_9 () : java.util.Date {
      return Claim.LossDate
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_239 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_239 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_239 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_263 ($$arg :  entity.Person[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_263 ($$arg :  gw.api.database.IQueryBeanResult<entity.Person>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_263 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsPanelSet.Homeowners.pcf: line 80, column 47
    function verifyValueRangeIsAllowedType_33 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsPanelSet.Homeowners.pcf: line 80, column 47
    function verifyValueRangeIsAllowedType_33 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsPanelSet.Homeowners.pcf: line 80, column 47
    function verifyValueRangeIsAllowedType_33 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function verifyValueRangeIsAllowedType_47 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function verifyValueRangeIsAllowedType_47 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_240 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_239(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_264 () : void {
      var __valueRangeArg = Claim.RelatedPersonArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_263(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Catastrophe_CatastropheNumber_Input) at LossDetailsPanelSet.Homeowners.pcf: line 80, column 47
    function verifyValueRange_34 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_33(__valueRangeArg)
    }
    
    // 'valueRange' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function verifyValueRange_48 () : void {
      var __valueRangeArg = HomeownersHelper.DamageNames
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_47(__valueRangeArg)
    }
    
    // 'valueType' attribute on ClaimContactInput (id=MainContact_Picker_Input) at LossDetailsPanelSet.Homeowners.pcf: line 650, column 44
    function verifyValueType_268 () : void {
      var __valueTypeArg : entity.Person
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : entity.Contact = __valueTypeArg
    }
    
    // 'visible' attribute on TypeKeyInput (id=LocationOfTheft_Input) at LossDetailsPanelSet.Homeowners.pcf: line 66, column 57
    function visible_19 () : java.lang.Boolean {
      return Claim.LossCause == TC_BURGLARY
    }
    
    // 'visible' attribute on PanelRef (id=FireDamageQuestionsPanelSet) at LossDetailsPanelSet.Homeowners.pcf: line 546, column 54
    function visible_205 () : java.lang.Boolean {
      return Claim.PropertyFireDamage != null
    }
    
    // 'visible' attribute on PanelRef (id=WaterDamageQuestionsPanelSet) at LossDetailsPanelSet.Homeowners.pcf: line 553, column 55
    function visible_208 () : java.lang.Boolean {
      return Claim.PropertyWaterDamage != null
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_225 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ReportedBy_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_228 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.reporter), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=MainContact_Picker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_252 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Claim.maincontact), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on Card (id=Claim_ISOCard) at LossDetailsPanelSet.Homeowners.pcf: line 692, column 48
    function visible_282 () : java.lang.Boolean {
      return Claim.ISOClaimLevelMessaging
    }
    
    // 'visible' attribute on CheckBoxGroupInput (id=DamageTypeChooser_Input) at LossDetailsPanelSet.Homeowners.pcf: line 100, column 108
    function visible_40 () : java.lang.Boolean {
      return HomeownersHelper.Damages.hasMatch(\d -> d.Exists) or CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on TextInput (id=LossLocation_Input) at LossDetailsPanelSet.Homeowners.pcf: line 109, column 56
    function visible_51 () : java.lang.Boolean {
      return !(CurrentLocation.InEditMode)
    }
    
    // 'visible' attribute on TextInput (id=PrimaryLocationChoiceLabel_Input) at LossDetailsPanelSet.Homeowners.pcf: line 122, column 57
    function visible_56 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on InputSet at LossDetailsPanelSet.Homeowners.pcf: line 111, column 93
    function visible_68 () : java.lang.Boolean {
      return Claim.Policy.PrimaryLocation != null and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on InputSetRef (id=AddressDetailInputSetRef) at LossDetailsPanelSet.Homeowners.pcf: line 145, column 83
    function visible_71 () : java.lang.Boolean {
      return HomeownersHelper.LocationChoice == "other"
    }
    
    property get incidentKeys () : typekey.Incident[] {
      return getVariableValue("incidentKeys", 1) as typekey.Incident[]
    }
    
    property set incidentKeys ($arg :  typekey.Incident[]) {
      setVariableValue("incidentKeys", 1, $arg)
    }
    
    property get incidentsMap () : Map<typekey.Incident, List<Incident>> {
      return getVariableValue("incidentsMap", 1) as Map<typekey.Incident, List<Incident>>
    }
    
    property set incidentsMap ($arg :  Map<typekey.Incident, List<Incident>>) {
      setVariableValue("incidentsMap", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel2ExpressionsImpl extends PanelIteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 296, column 67
    function action_111 () : void {
      incidentUIHelper.goToViewIncident(incident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 302, column 98
    function action_114 () : void {
      incidentUIHelper.removeIncident(Claim, incident, CurrentLocation, null)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 291, column 83
    function action_117 () : void {
      incidentUIHelper.goToViewIncident(incident, CurrentLocation.InEditMode)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 302, column 98
    function confirmMessage_115 () : java.lang.String {
      return incidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=IncidentIcon) at LossDetailsPanelSet.Homeowners.pcf: line 281, column 44
    function icon_109 () : java.lang.String {
      return incidentUIHelper.Icons.getPanelIcon(incident)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 275, column 61
    function initialValue_108 () : gw.api.claim.IncidentUIHelper {
      return HomeownersHelper.IncidentListUIHelper.getIncidentUIHelper(incident)
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 296, column 67
    function label_112 () : java.lang.Object {
      return incidentUIHelper.EditLabel
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 302, column 98
    function label_116 () : java.lang.Object {
      return incidentUIHelper.RemoveLabel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 308, column 68
    function valueRoot_122 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 291, column 83
    function value_118 () : java.lang.String {
      return incidentUIHelper.getInstanceDisplayName(incident)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 308, column 68
    function value_121 () : java.lang.String {
      return incident.Description
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 296, column 67
    function visible_110 () : java.lang.Boolean {
      return perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 302, column 98
    function visible_113 () : java.lang.Boolean {
      return (!incident.UsedByExposure) and perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 308, column 68
    function visible_120 () : java.lang.Boolean {
      return incident.Description.HasContent
    }
    
    property get incidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("incidentUIHelper", 4) as gw.api.claim.IncidentUIHelper
    }
    
    property set incidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("incidentUIHelper", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel3ExpressionsImpl extends PanelIteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 351, column 67
    function action_130 () : void {
      incidentUIHelper.goToViewIncident(incident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 357, column 98
    function action_133 () : void {
      incidentUIHelper.removeIncident(Claim, incident, CurrentLocation, null)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 346, column 83
    function action_136 () : void {
      incidentUIHelper.goToViewIncident(incident, CurrentLocation.InEditMode)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 357, column 98
    function confirmMessage_134 () : java.lang.String {
      return incidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=IncidentIcon) at LossDetailsPanelSet.Homeowners.pcf: line 336, column 44
    function icon_128 () : java.lang.String {
      return incidentUIHelper.Icons.getPanelIcon(incident)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 330, column 61
    function initialValue_127 () : gw.api.claim.IncidentUIHelper {
      return HomeownersHelper.IncidentListUIHelper.getIncidentUIHelper(incident)
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 351, column 67
    function label_131 () : java.lang.Object {
      return incidentUIHelper.EditLabel
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 357, column 98
    function label_135 () : java.lang.Object {
      return incidentUIHelper.RemoveLabel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 363, column 68
    function valueRoot_141 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 346, column 83
    function value_137 () : java.lang.String {
      return incidentUIHelper.getInstanceDisplayName(incident)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 363, column 68
    function value_140 () : java.lang.String {
      return incident.Description
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 351, column 67
    function visible_129 () : java.lang.Boolean {
      return perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 357, column 98
    function visible_132 () : java.lang.Boolean {
      return (!incident.UsedByExposure) and perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 363, column 68
    function visible_139 () : java.lang.Boolean {
      return incident.Description.HasContent
    }
    
    property get incidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("incidentUIHelper", 4) as gw.api.claim.IncidentUIHelper
    }
    
    property set incidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("incidentUIHelper", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel4ExpressionsImpl extends PanelIteratorEntry4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 411, column 67
    function action_150 () : void {
      incidentUIHelper.goToViewIncident(incident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 417, column 98
    function action_153 () : void {
      incidentUIHelper.removeIncident(Claim, incident, CurrentLocation, null)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 406, column 83
    function action_156 () : void {
      incidentUIHelper.goToViewIncident(incident, CurrentLocation.InEditMode)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 417, column 98
    function confirmMessage_154 () : java.lang.String {
      return incidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=IncidentIcon) at LossDetailsPanelSet.Homeowners.pcf: line 396, column 44
    function icon_148 () : java.lang.String {
      return incidentUIHelper.Icons.getPanelIcon(incident)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 390, column 61
    function initialValue_147 () : gw.api.claim.IncidentUIHelper {
      return HomeownersHelper.IncidentListUIHelper.getIncidentUIHelper(incident)
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 411, column 67
    function label_151 () : java.lang.Object {
      return incidentUIHelper.EditLabel
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 417, column 98
    function label_155 () : java.lang.Object {
      return incidentUIHelper.RemoveLabel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 423, column 68
    function valueRoot_161 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 406, column 83
    function value_157 () : java.lang.String {
      return incidentUIHelper.getInstanceDisplayName(incident)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 423, column 68
    function value_160 () : java.lang.String {
      return incident.Description
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 411, column 67
    function visible_149 () : java.lang.Boolean {
      return perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 417, column 98
    function visible_152 () : java.lang.Boolean {
      return (!incident.UsedByExposure) and perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 423, column 68
    function visible_159 () : java.lang.Boolean {
      return incident.Description.HasContent
    }
    
    property get incidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("incidentUIHelper", 4) as gw.api.claim.IncidentUIHelper
    }
    
    property set incidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("incidentUIHelper", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel5ExpressionsImpl extends PanelIteratorEntry5ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 466, column 67
    function action_169 () : void {
      incidentUIHelper.goToViewIncident(incident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 472, column 98
    function action_172 () : void {
      incidentUIHelper.removeIncident(Claim, incident, CurrentLocation, null)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 461, column 83
    function action_175 () : void {
      incidentUIHelper.goToViewIncident(incident, CurrentLocation.InEditMode)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 472, column 98
    function confirmMessage_173 () : java.lang.String {
      return incidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=IncidentIcon) at LossDetailsPanelSet.Homeowners.pcf: line 451, column 44
    function icon_167 () : java.lang.String {
      return incidentUIHelper.Icons.getPanelIcon(incident)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 445, column 61
    function initialValue_166 () : gw.api.claim.IncidentUIHelper {
      return HomeownersHelper.IncidentListUIHelper.getIncidentUIHelper(incident)
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 466, column 67
    function label_170 () : java.lang.Object {
      return incidentUIHelper.EditLabel
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 472, column 98
    function label_174 () : java.lang.Object {
      return incidentUIHelper.RemoveLabel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 478, column 68
    function valueRoot_180 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 461, column 83
    function value_176 () : java.lang.String {
      return incidentUIHelper.getInstanceDisplayName(incident)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 478, column 68
    function value_179 () : java.lang.String {
      return incident.Description
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 466, column 67
    function visible_168 () : java.lang.Boolean {
      return perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 472, column 98
    function visible_171 () : java.lang.Boolean {
      return (!incident.UsedByExposure) and perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 478, column 68
    function visible_178 () : java.lang.Boolean {
      return incident.Description.HasContent
    }
    
    property get incidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("incidentUIHelper", 4) as gw.api.claim.IncidentUIHelper
    }
    
    property set incidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("incidentUIHelper", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanel6ExpressionsImpl extends PanelIteratorEntry6ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 521, column 67
    function action_188 () : void {
      incidentUIHelper.goToViewIncident(incident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 527, column 98
    function action_191 () : void {
      incidentUIHelper.removeIncident(Claim, incident, CurrentLocation, null)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 516, column 83
    function action_194 () : void {
      incidentUIHelper.goToViewIncident(incident, CurrentLocation.InEditMode)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 527, column 98
    function confirmMessage_192 () : java.lang.String {
      return incidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=IncidentIcon) at LossDetailsPanelSet.Homeowners.pcf: line 506, column 44
    function icon_186 () : java.lang.String {
      return incidentUIHelper.Icons.getPanelIcon(incident)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 500, column 61
    function initialValue_185 () : gw.api.claim.IncidentUIHelper {
      return HomeownersHelper.IncidentListUIHelper.getIncidentUIHelper(incident)
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 521, column 67
    function label_189 () : java.lang.Object {
      return incidentUIHelper.EditLabel
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 527, column 98
    function label_193 () : java.lang.Object {
      return incidentUIHelper.RemoveLabel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 533, column 68
    function valueRoot_199 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 516, column 83
    function value_195 () : java.lang.String {
      return incidentUIHelper.getInstanceDisplayName(incident)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 533, column 68
    function value_198 () : java.lang.String {
      return incident.Description
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 521, column 67
    function visible_187 () : java.lang.Boolean {
      return perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 527, column 98
    function visible_190 () : java.lang.Boolean {
      return (!incident.UsedByExposure) and perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 533, column 68
    function visible_197 () : java.lang.Boolean {
      return incident.Description.HasContent
    }
    
    property get incidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("incidentUIHelper", 4) as gw.api.claim.IncidentUIHelper
    }
    
    property set incidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("incidentUIHelper", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DetailViewPanelExpressionsImpl extends PanelIteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 4)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 241, column 67
    function action_92 () : void {
      incidentUIHelper.goToViewIncident(incident, true)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 247, column 98
    function action_95 () : void {
      incidentUIHelper.removeIncident(Claim, incident, CurrentLocation, null)
    }
    
    // 'action' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 236, column 83
    function action_98 () : void {
      incidentUIHelper.goToViewIncident(incident, CurrentLocation.InEditMode)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 247, column 98
    function confirmMessage_96 () : java.lang.String {
      return incidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=IncidentIcon) at LossDetailsPanelSet.Homeowners.pcf: line 226, column 44
    function icon_90 () : java.lang.String {
      return incidentUIHelper.Icons.getPanelIcon(incident)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 220, column 61
    function initialValue_89 () : gw.api.claim.IncidentUIHelper {
      return HomeownersHelper.IncidentListUIHelper.getIncidentUIHelper(incident)
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 241, column 67
    function label_93 () : java.lang.Object {
      return incidentUIHelper.EditLabel
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 247, column 98
    function label_97 () : java.lang.Object {
      return incidentUIHelper.RemoveLabel
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 253, column 68
    function valueRoot_103 () : java.lang.Object {
      return incident
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 253, column 68
    function value_102 () : java.lang.String {
      return incident.Description
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at LossDetailsPanelSet.Homeowners.pcf: line 236, column 83
    function value_99 () : java.lang.String {
      return incidentUIHelper.getInstanceDisplayName(incident)
    }
    
    // 'visible' attribute on TextAreaInput (id=Description_Input) at LossDetailsPanelSet.Homeowners.pcf: line 253, column 68
    function visible_101 () : java.lang.Boolean {
      return incident.Description.HasContent
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at LossDetailsPanelSet.Homeowners.pcf: line 241, column 67
    function visible_91 () : java.lang.Boolean {
      return perm.Incident.edit(incident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at LossDetailsPanelSet.Homeowners.pcf: line 247, column 98
    function visible_94 () : java.lang.Boolean {
      return (!incident.UsedByExposure) and perm.Incident.edit(incident)
    }
    
    property get incidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("incidentUIHelper", 4) as gw.api.claim.IncidentUIHelper
    }
    
    property set incidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("incidentUIHelper", 4, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IncidentPanelSetExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 178, column 34
    function initialValue_83 () : Incident[] {
      return incidentKeys.HasElements ? incidentsMap.get(incidentKeys[0]).toTypedArray() : {}
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 183, column 34
    function initialValue_84 () : Incident[] {
      return incidentKeys.length > 1 ? incidentsMap.get(incidentKeys[1]).toTypedArray() : {}
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 188, column 34
    function initialValue_85 () : Incident[] {
      return incidentKeys.length > 2 ? incidentsMap.get(incidentKeys[2]).toTypedArray() : {}
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 193, column 34
    function initialValue_86 () : Incident[] {
      return incidentKeys.length > 3 ? incidentsMap.get(incidentKeys[3]).toTypedArray() : {}
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 198, column 34
    function initialValue_87 () : Incident[] {
      return incidentKeys.length > 4 ? incidentsMap.get(incidentKeys[4]).toTypedArray() : {}
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 203, column 34
    function initialValue_88 () : Incident[] {
      return incidentKeys.length > 5 ? incidentsMap.get(incidentKeys[5]).toTypedArray() : {}
    }
    
    // 'value' attribute on PanelIterator (id=IncidentIterator1) at LossDetailsPanelSet.Homeowners.pcf: line 211, column 49
    function value_106 () : entity.Incident[] {
      return incidentListRow1Col1
    }
    
    // 'value' attribute on PanelIterator (id=IncidentIterator2) at LossDetailsPanelSet.Homeowners.pcf: line 266, column 49
    function value_125 () : entity.Incident[] {
      return incidentListRow1Col2
    }
    
    // 'value' attribute on PanelIterator (id=IncidentIterator3) at LossDetailsPanelSet.Homeowners.pcf: line 321, column 49
    function value_144 () : entity.Incident[] {
      return incidentListRow1Col3
    }
    
    // 'value' attribute on PanelIterator (id=IncidentIterator4) at LossDetailsPanelSet.Homeowners.pcf: line 381, column 49
    function value_164 () : entity.Incident[] {
      return incidentListRow2Col1
    }
    
    // 'value' attribute on PanelIterator (id=IncidentIterator5) at LossDetailsPanelSet.Homeowners.pcf: line 436, column 49
    function value_183 () : entity.Incident[] {
      return incidentListRow2Col2
    }
    
    // 'value' attribute on PanelIterator (id=IncidentIterator6) at LossDetailsPanelSet.Homeowners.pcf: line 491, column 49
    function value_202 () : entity.Incident[] {
      return incidentListRow2Col3
    }
    
    // 'visible' attribute on PanelColumn at LossDetailsPanelSet.Homeowners.pcf: line 206, column 60
    function visible_107 () : java.lang.Boolean {
      return incidentListRow1Col1.HasElements
    }
    
    // 'visible' attribute on PanelColumn at LossDetailsPanelSet.Homeowners.pcf: line 261, column 60
    function visible_126 () : java.lang.Boolean {
      return incidentListRow1Col2.HasElements
    }
    
    // 'visible' attribute on PanelColumn at LossDetailsPanelSet.Homeowners.pcf: line 316, column 60
    function visible_145 () : java.lang.Boolean {
      return incidentListRow1Col3.HasElements
    }
    
    // 'visible' attribute on PanelColumn at LossDetailsPanelSet.Homeowners.pcf: line 376, column 60
    function visible_165 () : java.lang.Boolean {
      return incidentListRow2Col1.HasElements
    }
    
    // 'visible' attribute on PanelColumn at LossDetailsPanelSet.Homeowners.pcf: line 431, column 60
    function visible_184 () : java.lang.Boolean {
      return incidentListRow2Col2.HasElements
    }
    
    // 'visible' attribute on PanelColumn at LossDetailsPanelSet.Homeowners.pcf: line 486, column 60
    function visible_203 () : java.lang.Boolean {
      return incidentListRow2Col3.HasElements
    }
    
    // 'visible' attribute on PanelSet (id=IncidentPanelSet) at LossDetailsPanelSet.Homeowners.pcf: line 173, column 48
    function visible_204 () : java.lang.Boolean {
      return incidentKeys.HasElements
    }
    
    property get incidentListRow1Col1 () : Incident[] {
      return getVariableValue("incidentListRow1Col1", 2) as Incident[]
    }
    
    property set incidentListRow1Col1 ($arg :  Incident[]) {
      setVariableValue("incidentListRow1Col1", 2, $arg)
    }
    
    property get incidentListRow1Col2 () : Incident[] {
      return getVariableValue("incidentListRow1Col2", 2) as Incident[]
    }
    
    property set incidentListRow1Col2 ($arg :  Incident[]) {
      setVariableValue("incidentListRow1Col2", 2, $arg)
    }
    
    property get incidentListRow1Col3 () : Incident[] {
      return getVariableValue("incidentListRow1Col3", 2) as Incident[]
    }
    
    property set incidentListRow1Col3 ($arg :  Incident[]) {
      setVariableValue("incidentListRow1Col3", 2, $arg)
    }
    
    property get incidentListRow2Col1 () : Incident[] {
      return getVariableValue("incidentListRow2Col1", 2) as Incident[]
    }
    
    property set incidentListRow2Col1 ($arg :  Incident[]) {
      setVariableValue("incidentListRow2Col1", 2, $arg)
    }
    
    property get incidentListRow2Col2 () : Incident[] {
      return getVariableValue("incidentListRow2Col2", 2) as Incident[]
    }
    
    property set incidentListRow2Col2 ($arg :  Incident[]) {
      setVariableValue("incidentListRow2Col2", 2, $arg)
    }
    
    property get incidentListRow2Col3 () : Incident[] {
      return getVariableValue("incidentListRow2Col3", 2) as Incident[]
    }
    
    property set incidentListRow2Col3 ($arg :  Incident[]) {
      setVariableValue("incidentListRow2Col3", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=CreateIncident) at LossDetailsPanelSet.Homeowners.pcf: line 167, column 123
    function action_79 () : void {
      helper.goToCreateIncident(Claim)
    }
    
    // 'label' attribute on MenuItem (id=CreateIncident) at LossDetailsPanelSet.Homeowners.pcf: line 167, column 123
    function label_80 () : java.lang.Object {
      return helper.CreateLabel
    }
    
    // 'visible' attribute on MenuItem (id=CreateIncident) at LossDetailsPanelSet.Homeowners.pcf: line 167, column 123
    function visible_78 () : java.lang.Boolean {
      return helper.AllowMultiple or not (HomeownersHelper.IncidentListUIHelper.hasIncident(helper.Type))
    }
    
    property get helper () : gw.api.claim.IncidentUIHelper {
      return getIteratedValue(2) as gw.api.claim.IncidentUIHelper
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at LossDetailsPanelSet.Homeowners.pcf: line 14, column 56
    function initialValue_0 () : gw.api.claim.LossDetailsHomeownersHelper {
      return new gw.api.claim.LossDetailsHomeownersHelper(Claim)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get HomeownersHelper () : gw.api.claim.LossDetailsHomeownersHelper {
      return getVariableValue("HomeownersHelper", 0) as gw.api.claim.LossDetailsHomeownersHelper
    }
    
    property set HomeownersHelper ($arg :  gw.api.claim.LossDetailsHomeownersHelper) {
      setVariableValue("HomeownersHelper", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends IncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get incident () : entity.Incident {
      return getIteratedValue(3) as entity.Incident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry3ExpressionsImpl extends IncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get incident () : entity.Incident {
      return getIteratedValue(3) as entity.Incident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry4ExpressionsImpl extends IncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get incident () : entity.Incident {
      return getIteratedValue(3) as entity.Incident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry5ExpressionsImpl extends IncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get incident () : entity.Incident {
      return getIteratedValue(3) as entity.Incident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry6ExpressionsImpl extends IncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get incident () : entity.Incident {
      return getIteratedValue(3) as entity.Incident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/LossDetailsPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends IncidentPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get incident () : entity.Incident {
      return getIteratedValue(3) as entity.Incident
    }
    
    
  }
  
  
}