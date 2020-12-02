package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.vendormanagement.servicerequeststate.ServiceRequestActionHandler
uses gw.vendormanagement.servicerequeststate.ServiceRequestActionLocation
uses java.lang.IllegalArgumentException
uses gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ServiceRequestLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ServiceRequestLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'actionAvailable' attribute on TextCell (id=ServiceRequestNumber_Cell) at ServiceRequestLV.pcf: line 70, column 56
    function actionAvailable_26 () : java.lang.Boolean {
      return filterServiceRequests
    }
    
    // 'actionAvailable' attribute on TextCell (id=Specialist_Cell) at ServiceRequestLV.pcf: line 118, column 50
    function actionAvailable_61 () : java.lang.Boolean {
      return serviceRequest.Specialist != null
    }
    
    // 'action' attribute on TextCell (id=ServiceRequestNumber_Cell) at ServiceRequestLV.pcf: line 70, column 56
    function action_24 () : void {
      pcf.ClaimServiceRequests.go(claim, serviceRequest)
    }
    
    // 'action' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 9, column 49
    function action_34 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 12, column 49
    function action_36 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on Link (id=NextActionLink) at ServiceRequestLV.pcf: line 92, column 84
    function action_47 () : void {
      goToActionLocation(serviceRequest, stateHandler)
    }
    
    // 'action' attribute on TextCell (id=Specialist_Cell) at ServiceRequestLV.pcf: line 118, column 50
    function action_59 () : void {
      ClaimContactDetailPopup.push(serviceRequest.Specialist, serviceRequest.Claim)
    }
    
    // 'action' attribute on TextCell (id=ServiceRequestNumber_Cell) at ServiceRequestLV.pcf: line 70, column 56
    function action_dest_25 () : pcf.api.Destination {
      return pcf.ClaimServiceRequests.createDestination(claim, serviceRequest)
    }
    
    // 'action' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_35 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_37 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=Specialist_Cell) at ServiceRequestLV.pcf: line 118, column 50
    function action_dest_60 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(serviceRequest.Specialist, serviceRequest.Claim)
    }
    
    // 'available' attribute on Link (id=NextActionLink) at ServiceRequestLV.pcf: line 92, column 84
    function available_46 () : java.lang.Boolean {
      return nextActionDefinition.ActionLocation != null
    }
    
    // 'confirmMessage' attribute on Link (id=NextActionLink) at ServiceRequestLV.pcf: line 92, column 84
    function confirmMessage_48 () : java.lang.String {
      return nextActionDefinition.ConfirmationMessage
    }
    
    // 'iconColor' attribute on Link (id=Status) at ServiceRequestLV.pcf: line 55, column 56
    function iconColor_19 () : gw.api.web.color.GWColor {
      return serviceRequest.StatusIcon.IconColor
    }
    
    // 'iconColor' attribute on Link (id=ActionRequired) at ServiceRequestLV.pcf: line 62, column 75
    function iconColor_23 () : gw.api.web.color.GWColor {
      return serviceRequest.actionRequiredIcon(stateHandler).IconColor
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=Kind_Cell) at ServiceRequestLV.pcf: line 46, column 32
    function iconLabel_15 () : java.lang.String {
      return serviceRequest.Kind.Label
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Kind_Cell) at ServiceRequestLV.pcf: line 46, column 32
    function icon_16 () : java.lang.String {
      return serviceRequest.Kind.Icon
    }
    
    // 'icon' attribute on Link (id=Status) at ServiceRequestLV.pcf: line 55, column 56
    function icon_18 () : java.lang.String {
      return serviceRequest.StatusIcon.Icon
    }
    
    // 'icon' attribute on Link (id=ActionRequired) at ServiceRequestLV.pcf: line 62, column 75
    function icon_22 () : java.lang.String {
      return serviceRequest.actionRequiredIcon(stateHandler).Icon
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestLV.pcf: line 32, column 84
    function initialValue_13 () : gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler {
      return serviceRequest.createStateHandler()
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestLV.pcf: line 36, column 102
    function initialValue_14 () : gw.vendormanagement.servicerequeststate.ServiceRequestActionHandler.ActionDefinition {
      return serviceRequest.nextActionDefinition(stateHandler)
    }
    
    // RowIterator at ServiceRequestLV.pcf: line 28, column 43
    function initializeVariables_71 () : void {
        stateHandler = serviceRequest.createStateHandler();
  nextActionDefinition = serviceRequest.nextActionDefinition(stateHandler);

    }
    
    // 'label' attribute on Link (id=NextActionLink) at ServiceRequestLV.pcf: line 92, column 84
    function label_49 () : java.lang.Object {
      return nextActionDefinition.NextAction.ActionName
    }
    
    // 'showConfirmMessage' attribute on Link (id=NextActionLink) at ServiceRequestLV.pcf: line 92, column 84
    function showConfirmMessage_50 () : java.lang.Boolean {
      return nextActionDefinition.ConfirmationMessage != null
    }
    
    // 'tooltip' attribute on Link (id=Status) at ServiceRequestLV.pcf: line 55, column 56
    function tooltip_17 () : java.lang.String {
      return serviceRequest.StatusIcon.Label
    }
    
    // 'tooltip' attribute on Link (id=ActionRequired) at ServiceRequestLV.pcf: line 62, column 75
    function tooltip_21 () : java.lang.String {
      return serviceRequest.actionRequiredIcon(stateHandler).Label
    }
    
    // 'valueRange' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_40 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestNumber_Cell) at ServiceRequestLV.pcf: line 70, column 56
    function valueRoot_28 () : java.lang.Object {
      return serviceRequest
    }
    
    // 'value' attribute on TextCell (id=ActionOwner_Cell) at ServiceRequestLV.pcf: line 98, column 25
    function valueRoot_52 () : java.lang.Object {
      return serviceRequest.nextActionDefinition(stateHandler)
    }
    
    // 'value' attribute on CurrencyCell (id=QuoteAmount_Cell) at ServiceRequestLV.pcf: line 130, column 25
    function valueRoot_69 () : java.lang.Object {
      return serviceRequest?.LatestQuote
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestNumber_Cell) at ServiceRequestLV.pcf: line 70, column 56
    function value_27 () : java.lang.String {
      return serviceRequest.ServiceRequestNumber
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestReferenceNumber_Cell) at ServiceRequestLV.pcf: line 75, column 45
    function value_30 () : java.lang.String {
      return serviceRequest.ServiceRequestReferenceNumber
    }
    
    // 'value' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 6, column 85
    function value_38 () : entity.User {
      return serviceRequest.AssignedUser
    }
    
    // 'value' attribute on TextCell (id=ActionOwner_Cell) at ServiceRequestLV.pcf: line 98, column 25
    function value_51 () : java.lang.String {
      return serviceRequest.nextActionDefinition(stateHandler).ActionOwnerString
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at ServiceRequestLV.pcf: line 105, column 49
    function value_54 () : java.lang.String {
      return serviceRequest.RelatedToName
    }
    
    // 'value' attribute on TextCell (id=Services_Cell) at ServiceRequestLV.pcf: line 110, column 25
    function value_57 () : java.lang.String {
      return serviceRequest.Instruction.OrderedServices*.Service.join("\n")
    }
    
    // 'value' attribute on TextCell (id=Specialist_Cell) at ServiceRequestLV.pcf: line 118, column 50
    function value_62 () : java.lang.String {
      return serviceRequest.SpecialistName
    }
    
    // 'value' attribute on DateCell (id=ExpectedCompletionDate_Cell) at ServiceRequestLV.pcf: line 124, column 25
    function value_65 () : java.util.Date {
      return serviceRequest.nextExpectedCompletionDate(stateHandler)
    }
    
    // 'value' attribute on CurrencyCell (id=QuoteAmount_Cell) at ServiceRequestLV.pcf: line 130, column 25
    function value_68 () : gw.api.financials.CurrencyAmount {
      return serviceRequest?.LatestQuote.Amount
    }
    
    // 'valueRange' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_41 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_41 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_41 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=ServiceRequestAssignee_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_42 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_41(__valueRangeArg)
    }
    
    // 'visible' attribute on Link (id=ActionRequired) at ServiceRequestLV.pcf: line 62, column 75
    function visible_20 () : java.lang.Boolean {
      return serviceRequest.actionRequiredVisible(stateHandler)
    }
    
    // 'visible' attribute on TextCell (id=ServiceRequestReferenceNumber_Cell) at ServiceRequestLV.pcf: line 75, column 45
    function visible_32 () : java.lang.Boolean {
      return !filterServiceRequests
    }
    
    property get nextActionDefinition () : gw.vendormanagement.servicerequeststate.ServiceRequestActionHandler.ActionDefinition {
      return getVariableValue("nextActionDefinition", 1) as gw.vendormanagement.servicerequeststate.ServiceRequestActionHandler.ActionDefinition
    }
    
    property set nextActionDefinition ($arg :  gw.vendormanagement.servicerequeststate.ServiceRequestActionHandler.ActionDefinition) {
      setVariableValue("nextActionDefinition", 1, $arg)
    }
    
    property get serviceRequest () : entity.ServiceRequest {
      return getIteratedValue(1) as entity.ServiceRequest
    }
    
    property get stateHandler () : gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler {
      return getVariableValue("stateHandler", 1) as gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler
    }
    
    property set stateHandler ($arg :  gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler) {
      setVariableValue("stateHandler", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ServiceRequestLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestLV.pcf: line 23, column 39
    function initialValue_0 () : entity.ServiceRequest[] {
      return initializeFilteredServiceRequests()
    }
    
    // 'value' attribute on BooleanRadioCell (id=Kind_Cell) at ServiceRequestLV.pcf: line 46, column 32
    function sortValue_1 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return true
    }
    
    // 'value' attribute on DateCell (id=ExpectedCompletionDate_Cell) at ServiceRequestLV.pcf: line 124, column 25
    function sortValue_10 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      var stateHandler : gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler = (serviceRequest.createStateHandler())
var nextActionDefinition : gw.vendormanagement.servicerequeststate.ServiceRequestActionHandler.ActionDefinition = (serviceRequest.nextActionDefinition(stateHandler))
return serviceRequest.nextExpectedCompletionDate(stateHandler)
    }
    
    // 'value' attribute on CurrencyCell (id=QuoteAmount_Cell) at ServiceRequestLV.pcf: line 130, column 25
    function sortValue_12 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return serviceRequest?.LatestQuote.Amount
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestNumber_Cell) at ServiceRequestLV.pcf: line 70, column 56
    function sortValue_2 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return serviceRequest.ServiceRequestNumber
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestReferenceNumber_Cell) at ServiceRequestLV.pcf: line 75, column 45
    function sortValue_3 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return serviceRequest.ServiceRequestReferenceNumber
    }
    
    // 'value' attribute on UserCell (id=ServiceRequestAssignee_Cell) at ServiceRequestLV.pcf: line 81, column 25
    function sortValue_5 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return serviceRequest.AssignedUser
    }
    
    // 'value' attribute on TextCell (id=ActionOwner_Cell) at ServiceRequestLV.pcf: line 98, column 25
    function sortValue_6 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      var stateHandler : gw.vendormanagement.servicerequeststate.ServiceRequestStateHandler = (serviceRequest.createStateHandler())
var nextActionDefinition : gw.vendormanagement.servicerequeststate.ServiceRequestActionHandler.ActionDefinition = (serviceRequest.nextActionDefinition(stateHandler))
return serviceRequest.nextActionDefinition(stateHandler).ActionOwnerString
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at ServiceRequestLV.pcf: line 105, column 49
    function sortValue_7 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return serviceRequest.RelatedToName
    }
    
    // 'value' attribute on TextCell (id=Services_Cell) at ServiceRequestLV.pcf: line 110, column 25
    function sortValue_8 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return serviceRequest.Instruction.OrderedServices*.Service.join("\n")
    }
    
    // 'value' attribute on TextCell (id=Specialist_Cell) at ServiceRequestLV.pcf: line 118, column 50
    function sortValue_9 (serviceRequest :  entity.ServiceRequest) : java.lang.Object {
      return serviceRequest.SpecialistName
    }
    
    // 'value' attribute on RowIterator at ServiceRequestLV.pcf: line 28, column 43
    function value_72 () : entity.ServiceRequest[] {
      return filteredServiceRequests
    }
    
    // 'visible' attribute on TextCell (id=ServiceRequestReferenceNumber_Cell) at ServiceRequestLV.pcf: line 75, column 45
    function visible_4 () : java.lang.Boolean {
      return !filterServiceRequests
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get filterServiceRequests () : boolean {
      return getRequireValue("filterServiceRequests", 0) as java.lang.Boolean
    }
    
    property set filterServiceRequests ($arg :  boolean) {
      setRequireValue("filterServiceRequests", 0, $arg)
    }
    
    property get filteredServiceRequests () : entity.ServiceRequest[] {
      return getVariableValue("filteredServiceRequests", 0) as entity.ServiceRequest[]
    }
    
    property set filteredServiceRequests ($arg :  entity.ServiceRequest[]) {
      setVariableValue("filteredServiceRequests", 0, $arg)
    }
    
    property get operationCallbackHelper () : gw.vendormanagement.ServiceRequestOperationCallbackHelper {
      return getRequireValue("operationCallbackHelper", 0) as gw.vendormanagement.ServiceRequestOperationCallbackHelper
    }
    
    property set operationCallbackHelper ($arg :  gw.vendormanagement.ServiceRequestOperationCallbackHelper) {
      setRequireValue("operationCallbackHelper", 0, $arg)
    }
    
    
    function initializeFilteredServiceRequests() : ServiceRequest[] {
      // Filter the Service Requests to show only "active and non-complete" and "complete with attention required" service requests
      if (filterServiceRequests) {
          return claim.ServiceRequests.where(\s -> (s.IsActive and not s.IsDone) or (s.IsDone and s.actionRequiredVisible()))
      }
      return claim.ServiceRequests
    }
    
    function goToActionLocation(sr: ServiceRequest, stateHandler : ServiceRequestStateHandler) {
      var nextActionDefinition = sr.nextActionDefinition(stateHandler)
      var nextActionLocation = nextActionDefinition.ActionLocation
      if (nextActionLocation != null) {
          switch (nextActionLocation) {
              case ServiceRequestActionLocation.PERFORM_OPERATION_WITH_CONFIRMATION:
                      operationCallbackHelper.performServiceRequestOperation(CurrentLocation, sr, nextActionDefinition.ActionOperation, stateHandler)
                      break
              case ServiceRequestActionLocation.ADD_QUOTE_POPUP:
                      AddReviseQuotePopup.push(sr)
                      break
              case ServiceRequestActionLocation.REVISE_QUOTE_POPUP:
                      AddReviseQuotePopup.push(sr, sr.LatestQuote)
                      break
              case ServiceRequestActionLocation.APPROVE_QUOTE_POPUP:
                      ApproveQuotePopup.push(sr)
                      break
              case ServiceRequestActionLocation.ADD_INVOICE_POPUP:
                      NewInvoice.go(sr)
                      break
              case ServiceRequestActionLocation.SERVICE_REQUEST_INVOICE:
                      pcf.ClaimServiceRequestForward.go(claim, sr, nextActionDefinition.ActionInvoice)
                      break
              case ServiceRequestActionLocation.SERVICE_REQUEST_DETAILS:
                      pcf.ClaimServiceRequestForward.go(claim, sr)
                      break
              default: throw new IllegalArgumentException("ServiceRequestActionLocation not recognized: " + nextActionLocation.Name)
          }
      }
    }
    
    
  }
  
  
}