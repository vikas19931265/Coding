package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/HomeownersEmergencyMakeSafeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class HomeownersEmergencyMakeSafeDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/HomeownersEmergencyMakeSafeDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HomeownersEmergencyMakeSafeDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_6 () : void {
      AddressBookPickerPopup.push(statictypeof (emsService.SpecialistAndCreateClaimContact), claim, {SpecialistService.getForCode(emsmakesafeServiceCode)})
    }
    
    // 'action' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_8 () : void {
      if (emsService.SpecialistAndCreateClaimContact != null) { ClaimContactDetailPopup.push(emsService.SpecialistAndCreateClaimContact, claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_9 () : void {
      ClaimContactDetailPopup.push(emsService.SpecialistAndCreateClaimContact, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(emsService.SpecialistAndCreateClaimContact, claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_7 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (emsService.SpecialistAndCreateClaimContact), claim, {SpecialistService.getForCode(emsmakesafeServiceCode)})
    }
    
    // 'def' attribute on InputSetRef at HomeownersEmergencyMakeSafeDV.pcf: line 59, column 83
    function def_onEnter_24 (def :  pcf.NewServiceRequestInstructionInputSet_default) : void {
      def.onEnter(emsService, null, null)
    }
    
    // 'def' attribute on InputSetRef at HomeownersEmergencyMakeSafeDV.pcf: line 59, column 83
    function def_onEnter_26 (def :  pcf.NewServiceRequestInstructionInputSet_rental) : void {
      def.onEnter(emsService, null, null)
    }
    
    // 'def' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_3 (def :  pcf.ClaimNewVendorOnlyPickerMenuItemSet) : void {
      def.onEnter(statictypeof (emsService.SpecialistAndCreateClaimContact), null, claim)
    }
    
    // 'def' attribute on InputSetRef at HomeownersEmergencyMakeSafeDV.pcf: line 59, column 83
    function def_refreshVariables_25 (def :  pcf.NewServiceRequestInstructionInputSet_default) : void {
      def.refreshVariables(emsService, null, null)
    }
    
    // 'def' attribute on InputSetRef at HomeownersEmergencyMakeSafeDV.pcf: line 59, column 83
    function def_refreshVariables_27 (def :  pcf.NewServiceRequestInstructionInputSet_rental) : void {
      def.refreshVariables(emsService, null, null)
    }
    
    // 'def' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_4 (def :  pcf.ClaimNewVendorOnlyPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (emsService.SpecialistAndCreateClaimContact), null, claim)
    }
    
    // 'value' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      emsService.SpecialistAndCreateClaimContact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'editable' attribute on InputSet at HomeownersEmergencyMakeSafeDV.pcf: line 37, column 40
    function editable_29 () : java.lang.Boolean {
      return isEditableServiceRequest()
    }
    
    // 'initialValue' attribute on Variable at HomeownersEmergencyMakeSafeDV.pcf: line 22, column 32
    function initialValue_0 () : java.lang.String {
      return gw.vendormanagement.SpecialistServiceCodeConstants.PROPEMSMAKESAFE
    }
    
    // 'initialValue' attribute on Variable at HomeownersEmergencyMakeSafeDV.pcf: line 26, column 23
    function initialValue_1 () : boolean {
      return emsService != null
    }
    
    // 'onPick' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_11 (PickedValue :  Contact) : void {
      var contactType = statictypeof (emsService.SpecialistAndCreateClaimContact); var result = eval("emsService.SpecialistAndCreateClaimContact = claim.resolveContact(emsService.SpecialistAndCreateClaimContact) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'onToggle' attribute on InputGroup (id=EMSMakeSafeInputGroup) at HomeownersEmergencyMakeSafeDV.pcf: line 34, column 48
    function setter_33 (VALUE :  java.lang.Boolean) : void {
      toggleServiceRequest(VALUE)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_15 () : java.lang.Object {
      return claim.RelatedCompanyArray
    }
    
    // 'value' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_14 () : java.lang.Object {
      return emsService
    }
    
    // 'value' attribute on TextInput (id=EMSPhone_Input) at HomeownersEmergencyMakeSafeDV.pcf: line 57, column 64
    function valueRoot_22 () : java.lang.Object {
      return emsService.Specialist
    }
    
    // 'value' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_12 () : entity.Contact {
      return emsService.SpecialistAndCreateClaimContact
    }
    
    // 'value' attribute on TextInput (id=EMSPhone_Input) at HomeownersEmergencyMakeSafeDV.pcf: line 57, column 64
    function value_21 () : java.lang.String {
      return emsService.Specialist.PrimaryPhoneValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_17 () : void {
      var __valueRangeArg = claim.RelatedCompanyArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_2 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on InputSet (id=OtherServiceRequestInfo) at HomeownersEmergencyMakeSafeDV.pcf: line 53, column 53
    function visible_28 () : java.lang.Boolean {
      return emsService.Specialist != null
    }
    
    // 'visible' attribute on InputSet at HomeownersEmergencyMakeSafeDV.pcf: line 37, column 40
    function visible_30 () : java.lang.Boolean {
      return emsServiceSelected
    }
    
    // 'visible' attribute on ClaimContactInput (id=EMSPicker_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_5 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (emsService.SpecialistAndCreateClaimContact), claim, {SpecialistService.getForCode(emsmakesafeServiceCode)})" != "" && true
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get emsService () : ServiceRequest {
      return getRequireValue("emsService", 0) as ServiceRequest
    }
    
    property set emsService ($arg :  ServiceRequest) {
      setRequireValue("emsService", 0, $arg)
    }
    
    property get emsServiceSelected () : boolean {
      return getVariableValue("emsServiceSelected", 0) as java.lang.Boolean
    }
    
    property set emsServiceSelected ($arg :  boolean) {
      setVariableValue("emsServiceSelected", 0, $arg)
    }
    
    property get emsmakesafeServiceCode () : java.lang.String {
      return getVariableValue("emsmakesafeServiceCode", 0) as java.lang.String
    }
    
    property set emsmakesafeServiceCode ($arg :  java.lang.String) {
      setVariableValue("emsmakesafeServiceCode", 0, $arg)
    }
    
    property get incident () : PropertyIncident {
      return getRequireValue("incident", 0) as PropertyIncident
    }
    
    property set incident ($arg :  PropertyIncident) {
      setRequireValue("incident", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<entity.ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<entity.ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<entity.ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    function isEditableServiceRequest() : boolean {
      return emsService == null or emsService.IsEditableInUI
    }
    
    function toggleServiceRequest(checkboxValue : boolean) {
      if (emsService == null) {
        if (checkboxValue) {
          emsService = claim.newServiceRequest(claim.maincontact, incident)
          emsService.Instruction.addServiceFoundByCode(emsmakesafeServiceCode)
          emsService.Kind = ServiceRequestKind.TC_QUOTEANDSERVICE
        }
      } else {
        if (not checkboxValue) {
          unusedServiceRequests.add(emsService)
        } else {
          unusedServiceRequests.remove(emsService)
        }
      }
      emsServiceSelected = checkboxValue
    }
    
    
  }
  
  
}