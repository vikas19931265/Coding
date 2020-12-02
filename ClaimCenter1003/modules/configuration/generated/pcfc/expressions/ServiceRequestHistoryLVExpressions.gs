package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ServiceRequestHistoryLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ServiceRequestHistoryLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=InvoiceDetail) at ServiceRequestHistoryLV.pcf: line 49, column 78
    function action_15 () : void {
      pcf.ClaimServiceRequestForward.go(serviceRequest.Claim, serviceRequest, history.RelatedStatement as ServiceRequestInvoice) 
    }
    
    // 'action' attribute on Link (id=PromotedServiceDetail) at ServiceRequestHistoryLV.pcf: line 55, column 82
    function action_17 () : void {
      pcf.ClaimServiceRequestForward.go(serviceRequest.Claim, serviceRequest.PromotionServiceRequest) 
    }
    
    // 'action' attribute on Link (id=QuoteDetail) at ServiceRequestHistoryLV.pcf: line 61, column 76
    function action_19 () : void {
      QuoteDetailsPopup.push(history.RelatedStatement as ServiceRequestQuote)
    }
    
    // 'action' attribute on Link (id=QuoteDetail) at ServiceRequestHistoryLV.pcf: line 61, column 76
    function action_dest_20 () : pcf.api.Destination {
      return pcf.QuoteDetailsPopup.createDestination(history.RelatedStatement as ServiceRequestQuote)
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at ServiceRequestHistoryLV.pcf: line 32, column 38
    function valueRoot_6 () : java.lang.Object {
      return history
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ServiceRequestHistoryLV.pcf: line 41, column 40
    function value_11 () : java.lang.String {
      return history.Description
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at ServiceRequestHistoryLV.pcf: line 32, column 38
    function value_5 () : java.util.Date {
      return history.Timestamp
    }
    
    // 'value' attribute on TextCell (id=Initiator_Cell) at ServiceRequestHistoryLV.pcf: line 37, column 39
    function value_8 () : entity.Contact {
      return history.Initiator
    }
    
    // 'visible' attribute on Link (id=InvoiceDetail) at ServiceRequestHistoryLV.pcf: line 49, column 78
    function visible_14 () : java.lang.Boolean {
      return history.RelatedStatement typeis ServiceRequestInvoice
    }
    
    // 'visible' attribute on Link (id=PromotedServiceDetail) at ServiceRequestHistoryLV.pcf: line 55, column 82
    function visible_16 () : java.lang.Boolean {
      return serviceRequest.AlreadyPromoted and history == firstChange
    }
    
    // 'visible' attribute on Link (id=QuoteDetail) at ServiceRequestHistoryLV.pcf: line 61, column 76
    function visible_18 () : java.lang.Boolean {
      return history.RelatedStatement typeis ServiceRequestQuote
    }
    
    // 'visible' attribute on LinkCell at ServiceRequestHistoryLV.pcf: line 43, column 33
    function visible_21 () : java.lang.Boolean {
      return viewDetails
    }
    
    property get history () : entity.ServiceRequestChange {
      return getIteratedValue(1) as entity.ServiceRequestChange
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ServiceRequestHistoryLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestHistoryLV.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return DetailsColumnVisible
    }
    
    // 'value' attribute on DateCell (id=Date_Cell) at ServiceRequestHistoryLV.pcf: line 32, column 38
    function sortValue_1 (history :  entity.ServiceRequestChange) : java.lang.Object {
      return history.Timestamp
    }
    
    // 'value' attribute on TextCell (id=Initiator_Cell) at ServiceRequestHistoryLV.pcf: line 37, column 39
    function sortValue_2 (history :  entity.ServiceRequestChange) : java.lang.Object {
      return history.Initiator
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ServiceRequestHistoryLV.pcf: line 41, column 40
    function sortValue_3 (history :  entity.ServiceRequestChange) : java.lang.Object {
      return history.Description
    }
    
    // 'value' attribute on RowIterator at ServiceRequestHistoryLV.pcf: line 23, column 69
    function value_22 () : java.util.List<entity.ServiceRequestChange> {
      var serviceRequestHistory = serviceRequest.OrderedHistory.reverse(); firstChange = serviceRequestHistory.first(); return serviceRequestHistory
    }
    
    // 'visible' attribute on LinkCell at ServiceRequestHistoryLV.pcf: line 43, column 33
    function visible_4 () : java.lang.Boolean {
      return viewDetails
    }
    
    property get firstChange () : ServiceRequestChange {
      return getVariableValue("firstChange", 0) as ServiceRequestChange
    }
    
    property set firstChange ($arg :  ServiceRequestChange) {
      setVariableValue("firstChange", 0, $arg)
    }
    
    property get serviceRequest () : ServiceRequest {
      return getRequireValue("serviceRequest", 0) as ServiceRequest
    }
    
    property set serviceRequest ($arg :  ServiceRequest) {
      setRequireValue("serviceRequest", 0, $arg)
    }
    
    property get viewDetails () : boolean {
      return getVariableValue("viewDetails", 0) as java.lang.Boolean
    }
    
    property set viewDetails ($arg :  boolean) {
      setVariableValue("viewDetails", 0, $arg)
    }
    
    property get DetailsColumnVisible(): boolean {
      if (serviceRequest != null) {
        return serviceRequest.AlreadyPromoted or serviceRequest.History.hasMatch(\ c -> c.RelatedStatement != null)
      } 
      return false
    }
    
    
  }
  
  
}