package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses java.util.Set
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/FixedPropertyIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FixedPropertyIncidentDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/FixedPropertyIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FixedPropertyIncidentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_29 () : void {
      AddressBookPickerPopup.push(statictypeof (FixedPropertyIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_31 () : void {
      if (FixedPropertyIncident.incidentowner != null) { ClaimContactDetailPopup.push(FixedPropertyIncident.incidentowner, Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_32 () : void {
      ClaimContactDetailPopup.push(FixedPropertyIncident.incidentowner, Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_30 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (FixedPropertyIncident.incidentowner), Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_33 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(FixedPropertyIncident.incidentowner, Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_26 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (FixedPropertyIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at FixedPropertyIncidentDV.pcf: line 76, column 48
    function def_onEnter_44 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on ListViewInput at FixedPropertyIncidentDV.pcf: line 83, column 113
    function def_onEnter_47 (def :  pcf.AllPolicyLocationLienHoldersLV) : void {
      def.onEnter(FixedPropertyIncident.Property)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at FixedPropertyIncidentDV.pcf: line 101, column 40
    function def_onEnter_53 (def :  pcf.AppraisalServiceInputSet) : void {
      def.onEnter(PropertyAppraisalServiceRequest, FixedPropertyIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at FixedPropertyIncidentDV.pcf: line 103, column 151
    function def_onEnter_55 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.onEnter(Claim, FixedPropertyIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on InputSetRef at FixedPropertyIncidentDV.pcf: line 138, column 65
    function def_onEnter_77 (def :  pcf.PropertyAttributeInputSet) : void {
      def.onEnter(FixedPropertyIncident)
    }
    
    // 'def' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_27 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (FixedPropertyIncident.incidentowner), null, Claim)
    }
    
    // 'def' attribute on InputSetRef at FixedPropertyIncidentDV.pcf: line 76, column 48
    function def_refreshVariables_45 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'def' attribute on ListViewInput at FixedPropertyIncidentDV.pcf: line 83, column 113
    function def_refreshVariables_48 (def :  pcf.AllPolicyLocationLienHoldersLV) : void {
      def.refreshVariables(FixedPropertyIncident.Property)
    }
    
    // 'def' attribute on InputSetRef (id=AppraisalServiceInputSet) at FixedPropertyIncidentDV.pcf: line 101, column 40
    function def_refreshVariables_54 (def :  pcf.AppraisalServiceInputSet) : void {
      def.refreshVariables(PropertyAppraisalServiceRequest, FixedPropertyIncident, unusedServiceRequests, appraisalIncidentCode)
    }
    
    // 'def' attribute on InputSetRef at FixedPropertyIncidentDV.pcf: line 103, column 151
    function def_refreshVariables_56 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.refreshVariables(Claim, FixedPropertyIncident, otherServiceRequests, otherServiceRequests, unusedServiceRequests, {})
    }
    
    // 'def' attribute on InputSetRef at FixedPropertyIncidentDV.pcf: line 138, column 65
    function def_refreshVariables_78 (def :  pcf.PropertyAttributeInputSet) : void {
      def.refreshVariables(FixedPropertyIncident)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at FixedPropertyIncidentDV.pcf: line 51, column 53
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=EstDamageAmt_Input) at FixedPropertyIncidentDV.pcf: line 57, column 44
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.EstDamageType = (__VALUE_TO_SET as typekey.EstDamageType)
    }
    
    // 'value' attribute on TextAreaInput (id=ExtDamagetxt_Input) at FixedPropertyIncidentDV.pcf: line 63, column 53
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.ExtDamagetxt = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.incidentowner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at FixedPropertyIncidentDV.pcf: line 40, column 53
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.PropertyDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at FixedPropertyIncidentDV.pcf: line 112, column 35
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.EstimatesReceived = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at FixedPropertyIncidentDV.pcf: line 120, column 70
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.EstRepairCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at FixedPropertyIncidentDV.pcf: line 126, column 70
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.EstRepairTime = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AlreadyRepaired_Input) at FixedPropertyIncidentDV.pcf: line 131, column 55
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.AlreadyRepaired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FixedPropertyIncidentDV.pcf: line 46, column 52
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at FixedPropertyIncidentDV.pcf: line 19, column 21
    function initialValue_0 () : Claim {
      return FixedPropertyIncident.Claim
    }
    
    // 'initialValue' attribute on Variable at FixedPropertyIncidentDV.pcf: line 24, column 45
    function initialValue_1 () : gw.api.address.CCAddressOwner {
      return new gw.api.address.FixedPropertyAddressOwner(FixedPropertyIncident, singletonNewFixedProperty)
    }
    
    // 'initialValue' attribute on Variable at FixedPropertyIncidentDV.pcf: line 28, column 22
    function initialValue_2 () : String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.PROPINSPECTAPPRAISAL
    }
    
    // 'initialValue' attribute on Variable at FixedPropertyIncidentDV.pcf: line 32, column 51
    function initialValue_3 () : java.util.Set<ServiceRequest> {
      return createOtherServiceRequests()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_34 (PickedValue :  Contact) : void {
      var contactType = statictypeof (FixedPropertyIncident.incidentowner); var result = eval("FixedPropertyIncident.incidentowner = Claim.resolveContact(FixedPropertyIncident.incidentowner) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_38 () : java.lang.Object {
      return Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at FixedPropertyIncidentDV.pcf: line 40, column 53
    function valueRoot_6 () : java.lang.Object {
      return FixedPropertyIncident
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at FixedPropertyIncidentDV.pcf: line 51, column 53
    function value_12 () : gw.api.financials.CurrencyAmount {
      return FixedPropertyIncident.LossEstimate
    }
    
    // 'value' attribute on TypeKeyInput (id=EstDamageAmt_Input) at FixedPropertyIncidentDV.pcf: line 57, column 44
    function value_16 () : typekey.EstDamageType {
      return FixedPropertyIncident.EstDamageType
    }
    
    // 'value' attribute on TextAreaInput (id=ExtDamagetxt_Input) at FixedPropertyIncidentDV.pcf: line 63, column 53
    function value_20 () : java.lang.String {
      return FixedPropertyIncident.ExtDamagetxt
    }
    
    // 'value' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_35 () : entity.Contact {
      return FixedPropertyIncident.incidentowner
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at FixedPropertyIncidentDV.pcf: line 40, column 53
    function value_4 () : java.lang.String {
      return FixedPropertyIncident.PropertyDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at FixedPropertyIncidentDV.pcf: line 112, column 35
    function value_57 () : typekey.YesNo {
      return FixedPropertyIncident.EstimatesReceived
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at FixedPropertyIncidentDV.pcf: line 120, column 70
    function value_62 () : gw.api.financials.CurrencyAmount {
      return FixedPropertyIncident.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at FixedPropertyIncidentDV.pcf: line 126, column 70
    function value_68 () : java.lang.String {
      return FixedPropertyIncident.EstRepairTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=AlreadyRepaired_Input) at FixedPropertyIncidentDV.pcf: line 131, column 55
    function value_73 () : java.lang.Boolean {
      return FixedPropertyIncident.AlreadyRepaired
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at FixedPropertyIncidentDV.pcf: line 46, column 52
    function value_8 () : java.lang.String {
      return FixedPropertyIncident.Description
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_40 () : void {
      var __valueRangeArg = Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_39(__valueRangeArg)
    }
    
    // 'visible' attribute on InputDivider at FixedPropertyIncidentDV.pcf: line 65, column 110
    function visible_24 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForPolicy.isHomeownersPolicy(FixedPropertyIncident.Claim.Policy)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_25 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Owner_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_28 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (FixedPropertyIncident.incidentowner), Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ListViewInput at FixedPropertyIncidentDV.pcf: line 83, column 113
    function visible_46 () : java.lang.Boolean {
      return not gw.config.LOBAbstraction.ForPolicy.isHomeownersPolicy(FixedPropertyIncident.Claim.Policy)
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL_Input) at FixedPropertyIncidentDV.pcf: line 93, column 37
    function visible_49 () : java.lang.Boolean {
      return Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage_Input) at FixedPropertyIncidentDV.pcf: line 98, column 72
    function visible_51 () : java.lang.Boolean {
      return not Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on CurrencyInput (id=EstimateCost_Input) at FixedPropertyIncidentDV.pcf: line 120, column 70
    function visible_61 () : java.lang.Boolean {
      return FixedPropertyIncident.EstimatesReceived == TC_YES
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    property get FixedPropertyIncident () : FixedPropertyIncident {
      return getRequireValue("FixedPropertyIncident", 0) as FixedPropertyIncident
    }
    
    property set FixedPropertyIncident ($arg :  FixedPropertyIncident) {
      setRequireValue("FixedPropertyIncident", 0, $arg)
    }
    
    property get addressOwner () : gw.api.address.CCAddressOwner {
      return getVariableValue("addressOwner", 0) as gw.api.address.CCAddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.CCAddressOwner) {
      setVariableValue("addressOwner", 0, $arg)
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
    
    property get singletonNewFixedProperty () : PolicyLocation {
      return getRequireValue("singletonNewFixedProperty", 0) as PolicyLocation
    }
    
    property set singletonNewFixedProperty ($arg :  PolicyLocation) {
      setRequireValue("singletonNewFixedProperty", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
    property get PropertyAppraisalServiceRequest() : ServiceRequest {
      return FixedPropertyIncident.ServiceRequests.firstWhere(\ sr ->
             sr.Instruction.Services.Count == 1
             and sr.Instruction.Services.single().Service.Code == appraisalIncidentCode
             and (otherServiceRequests == null or not otherServiceRequests.contains(sr)))
    }
    
    function createOtherServiceRequests() :  Set<ServiceRequest> {
      return FixedPropertyIncident.ServiceRequests.where(\sr -> sr != PropertyAppraisalServiceRequest).toSet()
    }
    
    
  }
  
  
}