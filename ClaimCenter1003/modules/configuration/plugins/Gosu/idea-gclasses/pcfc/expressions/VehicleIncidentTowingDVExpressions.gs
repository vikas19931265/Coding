package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/VehicleIncidentTowingDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleIncidentTowingDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/VehicleIncidentTowingDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncidentTowingDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_11 () : void {
      if (towingServiceRequest.SpecialistAndCreateClaimContact != null) { ClaimContactDetailPopup.push(towingServiceRequest.SpecialistAndCreateClaimContact, vehicleIncident.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_12 () : void {
      ClaimContactDetailPopup.push(towingServiceRequest.SpecialistAndCreateClaimContact, vehicleIncident.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_9 () : void {
      AddressBookPickerPopup.push(statictypeof (towingServiceRequest.SpecialistAndCreateClaimContact), vehicleIncident.Claim, {SpecialistService.getForCode(autoTowingServiceCode)})
    }
    
    // 'action' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_10 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (towingServiceRequest.SpecialistAndCreateClaimContact), vehicleIncident.Claim, {SpecialistService.getForCode(autoTowingServiceCode)})
    }
    
    // 'action' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_13 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(towingServiceRequest.SpecialistAndCreateClaimContact, vehicleIncident.Claim)
    }
    
    // 'allowToggle' attribute on InputGroup (id=TowingInputGroup) at VehicleIncidentTowingDV.pcf: line 36, column 48
    function available_37 () : java.lang.Boolean {
      return isEditableServiceRequest()
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentTowingDV.pcf: line 70, column 43
    function def_onEnter_30 (def :  pcf.NewServiceRequestInstructionInputSet_default) : void {
      def.onEnter(towingServiceRequest, DisplayKey.get("Web.VehicleIncidentTowingDV.PickUpLocation"), null)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentTowingDV.pcf: line 70, column 43
    function def_onEnter_32 (def :  pcf.NewServiceRequestInstructionInputSet_rental) : void {
      def.onEnter(towingServiceRequest, DisplayKey.get("Web.VehicleIncidentTowingDV.PickUpLocation"), null)
    }
    
    // 'def' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_6 (def :  pcf.ClaimNewTowingOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (towingServiceRequest.SpecialistAndCreateClaimContact), null, vehicleIncident.Claim)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentTowingDV.pcf: line 70, column 43
    function def_refreshVariables_31 (def :  pcf.NewServiceRequestInstructionInputSet_default) : void {
      def.refreshVariables(towingServiceRequest, DisplayKey.get("Web.VehicleIncidentTowingDV.PickUpLocation"), null)
    }
    
    // 'def' attribute on InputSetRef at VehicleIncidentTowingDV.pcf: line 70, column 43
    function def_refreshVariables_33 (def :  pcf.NewServiceRequestInstructionInputSet_rental) : void {
      def.refreshVariables(towingServiceRequest, DisplayKey.get("Web.VehicleIncidentTowingDV.PickUpLocation"), null)
    }
    
    // 'def' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_7 (def :  pcf.ClaimNewTowingOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (towingServiceRequest.SpecialistAndCreateClaimContact), null, vehicleIncident.Claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      towingServiceRequest.SpecialistAndCreateClaimContact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentTowingDV.pcf: line 20, column 22
    function initialValue_0 () : String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.AUTOTOWING
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentTowingDV.pcf: line 24, column 22
    function initialValue_1 () : String {
      return vehicleIncident.getCoverageDescription(vehicleIncident.Claim.Policy.TowingCoverageType)
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentTowingDV.pcf: line 28, column 23
    function initialValue_2 () : boolean {
      return towingServiceRequest != null
    }
    
    // 'label' attribute on InputGroup (id=TowingInputGroup) at VehicleIncidentTowingDV.pcf: line 36, column 48
    function label_38 () : java.lang.Object {
      return coverageValue != null ? DisplayKey.get("Web.VehicleIncidentTowingDV.Towing.ValueLabel") : DisplayKey.get("Web.VehicleIncidentTowingDV.Towing.LabelNoCoverage")
    }
    
    // 'onPick' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_14 (PickedValue :  Contact) : void {
      var contactType = statictypeof (towingServiceRequest.SpecialistAndCreateClaimContact); var result = eval("towingServiceRequest.SpecialistAndCreateClaimContact = vehicleIncident.Claim.resolveContact(towingServiceRequest.SpecialistAndCreateClaimContact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onToggle' attribute on InputGroup (id=TowingInputGroup) at VehicleIncidentTowingDV.pcf: line 36, column 48
    function setter_39 (VALUE :  java.lang.Boolean) : void {
      toggleServiceRequest(VALUE)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_18 () : java.lang.Object {
      return vehicleIncident.Claim.RelatedAutoTowingAgcyArray
    }
    
    // 'value' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_17 () : java.lang.Object {
      return towingServiceRequest
    }
    
    // 'value' attribute on TextInput (id=TowingAgencyAddress_Input) at VehicleIncidentTowingDV.pcf: line 63, column 43
    function valueRoot_25 () : java.lang.Object {
      return towingServiceRequest.Specialist
    }
    
    // 'value' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_15 () : entity.Contact {
      return towingServiceRequest.SpecialistAndCreateClaimContact
    }
    
    // 'value' attribute on TextInput (id=TowingAgencyAddress_Input) at VehicleIncidentTowingDV.pcf: line 63, column 43
    function value_24 () : entity.Address {
      return towingServiceRequest.Specialist.PrimaryAddress
    }
    
    // 'value' attribute on TextInput (id=TowingAgencyPhone_Input) at VehicleIncidentTowingDV.pcf: line 67, column 74
    function value_27 () : java.lang.String {
      return towingServiceRequest.Specialist.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=TowingCoverage_Input) at VehicleIncidentTowingDV.pcf: line 42, column 150
    function value_3 () : java.lang.String {
      return coverageValue == null ? DisplayKey.get("Web.VehicleIncidentTowingDV.TowingCoverage.NoCoverage.Value") : coverageValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_20 () : void {
      var __valueRangeArg = vehicleIncident.Claim.RelatedAutoTowingAgcyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSet (id=OtherServiceRequestInfo) at VehicleIncidentTowingDV.pcf: line 58, column 63
    function visible_34 () : java.lang.Boolean {
      return towingServiceRequest.Specialist != null
    }
    
    // 'visible' attribute on InputSet at VehicleIncidentTowingDV.pcf: line 38, column 36
    function visible_35 () : java.lang.Boolean {
      return towingSelected
    }
    
    // 'visible' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_5 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=TowingAgency_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_8 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (towingServiceRequest.SpecialistAndCreateClaimContact), vehicleIncident.Claim, {SpecialistService.getForCode(autoTowingServiceCode)})" != "" && true
    }
    
    property get autoTowingServiceCode () : String {
      return getVariableValue("autoTowingServiceCode", 0) as String
    }
    
    property set autoTowingServiceCode ($arg :  String) {
      setVariableValue("autoTowingServiceCode", 0, $arg)
    }
    
    property get coverageValue () : String {
      return getVariableValue("coverageValue", 0) as String
    }
    
    property set coverageValue ($arg :  String) {
      setVariableValue("coverageValue", 0, $arg)
    }
    
    property get towingSelected () : boolean {
      return getVariableValue("towingSelected", 0) as java.lang.Boolean
    }
    
    property set towingSelected ($arg :  boolean) {
      setVariableValue("towingSelected", 0, $arg)
    }
    
    property get towingServiceRequest () : ServiceRequest {
      return getRequireValue("towingServiceRequest", 0) as ServiceRequest
    }
    
    property set towingServiceRequest ($arg :  ServiceRequest) {
      setRequireValue("towingServiceRequest", 0, $arg)
    }
    
    property get unusedServices () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServices", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServices ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServices", 0, $arg)
    }
    
    property get vehicleIncident () : VehicleIncident {
      return getRequireValue("vehicleIncident", 0) as VehicleIncident
    }
    
    property set vehicleIncident ($arg :  VehicleIncident) {
      setRequireValue("vehicleIncident", 0, $arg)
    }
    
    function isEditableServiceRequest() : boolean {
      return towingServiceRequest == null or towingServiceRequest.IsEditableInUI
    }
    
    function toggleServiceRequest(checkboxValue : boolean) {
      if (towingServiceRequest == null) {
        if (checkboxValue) {
          towingServiceRequest = vehicleIncident.Claim.newServiceRequest(vehicleIncident.Claim.maincontact, vehicleIncident)
          towingServiceRequest.Instruction.addServiceFoundByCode(autoTowingServiceCode)
          towingServiceRequest.Kind = ServiceRequestKind.TC_SERVICEONLY
        }
      } else {
        if (not checkboxValue) {
          unusedServices.add(towingServiceRequest)
        } else {
          unusedServices.remove(towingServiceRequest)
        }
      }
      towingSelected = checkboxValue
    }
    
    
  }
  
  
}