package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ServiceRequestDocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ServiceRequestDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at ServiceRequestDocumentsLV.pcf: line 48, column 87
    function action_11 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ServiceRequestDocumentsLV.pcf: line 59, column 77
    function action_15 () : void {
      DocumentDetailsPopup.push(document, not serviceRequest.AlreadyPromoted)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at ServiceRequestDocumentsLV.pcf: line 68, column 129
    function action_20 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at ServiceRequestDocumentsLV.pcf: line 76, column 127
    function action_25 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=Unlink) at ServiceRequestDocumentsLV.pcf: line 83, column 91
    function action_29 () : void {
      serviceRequest.unlinkDocumentForUI(document)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at ServiceRequestDocumentsLV.pcf: line 59, column 77
    function action_dest_16 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document, not serviceRequest.AlreadyPromoted)
    }
    
    // 'action' attribute on Link (id=UploadLink) at ServiceRequestDocumentsLV.pcf: line 76, column 127
    function action_dest_26 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'available' attribute on Link (id=NameLink) at ServiceRequestDocumentsLV.pcf: line 48, column 87
    function available_10 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at ServiceRequestDocumentsLV.pcf: line 59, column 77
    function available_14 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on Link (id=DownloadLink) at ServiceRequestDocumentsLV.pcf: line 68, column 129
    function available_18 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=UploadLink) at ServiceRequestDocumentsLV.pcf: line 76, column 127
    function available_23 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=Unlink) at ServiceRequestDocumentsLV.pcf: line 83, column 91
    function available_28 () : java.lang.Boolean {
      return documentsActionsHelper.isRemoveDocumentLinkAvailable(documentInfoPair)
    }
    
    // 'icon' attribute on Link (id=DownloadLink) at ServiceRequestDocumentsLV.pcf: line 68, column 129
    function icon_22 () : java.lang.String {
      return "document_download" 
    }
    
    // 'icon' attribute on Link (id=Unlink) at ServiceRequestDocumentsLV.pcf: line 83, column 91
    function icon_31 () : java.lang.String {
      return "document_remove"  
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at ServiceRequestDocumentsLV.pcf: line 36, column 32
    function icon_9 () : java.lang.String {
      return document.Icon
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestDocumentsLV.pcf: line 28, column 33
    function initialValue_8 () : entity.Document {
      return documentInfoPair.Second
    }
    
    // RowIterator at ServiceRequestDocumentsLV.pcf: line 24, column 112
    function initializeVariables_51 () : void {
        document = documentInfoPair.Second;

    }
    
    // 'label' attribute on Link (id=NameLink) at ServiceRequestDocumentsLV.pcf: line 48, column 87
    function label_12 () : java.lang.Object {
      return document.Name
    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at ServiceRequestDocumentsLV.pcf: line 88, column 75
    function label_33 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at ServiceRequestDocumentsLV.pcf: line 48, column 87
    function tooltip_13 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at ServiceRequestDocumentsLV.pcf: line 59, column 77
    function tooltip_17 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at ServiceRequestDocumentsLV.pcf: line 68, column 129
    function tooltip_21 () : java.lang.String {
      return documentsActionsHelper.DownloadDocumentContentTooltip
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at ServiceRequestDocumentsLV.pcf: line 76, column 127
    function tooltip_27 () : java.lang.String {
      return documentsActionsHelper.UploadDocumentContentTooltip
    }
    
    // 'tooltip' attribute on Link (id=Unlink) at ServiceRequestDocumentsLV.pcf: line 83, column 91
    function tooltip_30 () : java.lang.String {
      return documentsActionsHelper.RemoveDocumentLinkTooltip(documentInfoPair)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ServiceRequestDocumentsLV.pcf: line 95, column 45
    function valueRoot_35 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on DateCell (id=DateSpecialistNotified_Cell) at ServiceRequestDocumentsLV.pcf: line 126, column 66
    function valueRoot_49 () : java.lang.Object {
      return documentInfoPair.First
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ServiceRequestDocumentsLV.pcf: line 95, column 45
    function value_34 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TextCell (id=RelatedStatementType_Cell) at ServiceRequestDocumentsLV.pcf: line 100, column 62
    function value_37 () : java.lang.String {
      return getRelatedStatementType(documentInfoPair)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ServiceRequestDocumentsLV.pcf: line 105, column 51
    function value_39 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ServiceRequestDocumentsLV.pcf: line 110, column 36
    function value_42 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ServiceRequestDocumentsLV.pcf: line 118, column 42
    function value_45 () : java.util.Date {
      return document.DateModified
    }
    
    // 'value' attribute on DateCell (id=DateSpecialistNotified_Cell) at ServiceRequestDocumentsLV.pcf: line 126, column 66
    function value_48 () : java.util.Date {
      return documentInfoPair.First.DateSpecialistNotified
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at ServiceRequestDocumentsLV.pcf: line 68, column 129
    function visible_19 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(document) and not serviceRequest.AlreadyPromoted
    }
    
    // 'visible' attribute on Link (id=UploadLink) at ServiceRequestDocumentsLV.pcf: line 76, column 127
    function visible_24 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentVisible(document) and not serviceRequest.AlreadyPromoted
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at ServiceRequestDocumentsLV.pcf: line 88, column 75
    function visible_32 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(document)
    }
    
    property get document () : entity.Document {
      return getVariableValue("document", 1) as entity.Document
    }
    
    property set document ($arg :  entity.Document) {
      setVariableValue("document", 1, $arg)
    }
    
    property get documentInfoPair () : gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document> {
      return getIteratedValue(1) as gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ServiceRequestDocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestDocumentsLV.pcf: line 14, column 108
    function initialValue_0 () : java.util.List<gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>> {
      return serviceRequest.ViewableDocumentLinksAndDocuments
    }
    
    // 'initialValue' attribute on Variable at ServiceRequestDocumentsLV.pcf: line 19, column 52
    function initialValue_1 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ServiceRequestDocumentsLV.pcf: line 95, column 45
    function sortValue_2 (documentInfoPair :  gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>) : java.lang.Object {
      var document : entity.Document = (documentInfoPair.Second)
return document.Type
    }
    
    // 'value' attribute on TextCell (id=RelatedStatementType_Cell) at ServiceRequestDocumentsLV.pcf: line 100, column 62
    function sortValue_3 (documentInfoPair :  gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>) : java.lang.Object {
      var document : entity.Document = (documentInfoPair.Second)
return getRelatedStatementType(documentInfoPair)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at ServiceRequestDocumentsLV.pcf: line 105, column 51
    function sortValue_4 (documentInfoPair :  gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>) : java.lang.Object {
      var document : entity.Document = (documentInfoPair.Second)
return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at ServiceRequestDocumentsLV.pcf: line 110, column 36
    function sortValue_5 (documentInfoPair :  gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>) : java.lang.Object {
      var document : entity.Document = (documentInfoPair.Second)
return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at ServiceRequestDocumentsLV.pcf: line 118, column 42
    function sortValue_6 (documentInfoPair :  gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>) : java.lang.Object {
      var document : entity.Document = (documentInfoPair.Second)
return document.DateModified
    }
    
    // 'value' attribute on DateCell (id=DateSpecialistNotified_Cell) at ServiceRequestDocumentsLV.pcf: line 126, column 66
    function sortValue_7 (documentInfoPair :  gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>) : java.lang.Object {
      var document : entity.Document = (documentInfoPair.Second)
return documentInfoPair.First.DateSpecialistNotified
    }
    
    // 'value' attribute on RowIterator at ServiceRequestDocumentsLV.pcf: line 24, column 112
    function value_52 () : java.util.List<gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>> {
      return documentInfoPairs
    }
    
    property get documentInfoPairs () : java.util.List<gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>> {
      return getVariableValue("documentInfoPairs", 0) as java.util.List<gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>>
    }
    
    property set documentInfoPairs ($arg :  java.util.List<gw.util.Pair<entity.ServiceRequestDocumentLink, entity.Document>>) {
      setVariableValue("documentInfoPairs", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get serviceRequest () : ServiceRequest {
      return getRequireValue("serviceRequest", 0) as ServiceRequest
    }
    
    property set serviceRequest ($arg :  ServiceRequest) {
      setRequireValue("serviceRequest", 0, $arg)
    }
    
    function getRelatedStatementType(docLinkPair : gw.util.Pair<ServiceRequestDocumentLink,Document>) : String {
      if (not docLinkPair.Second.IsServiceRequestStatementDocument) {
        return ""
      }
      
      var statementDocInfos = docLinkPair.First.StatementDocumentLinks
      if (statementDocInfos.allMatch(\ s -> s.ServiceRequestStatement typeis ServiceRequestQuote)) {
        return DisplayKey.get("Web.ServiceRequest.Quote.Proper")
      } else if (statementDocInfos.allMatch(\ s -> s.ServiceRequestStatement typeis ServiceRequestInvoice)) {
        return DisplayKey.get("Web.ServiceRequest.Invoice.Proper")
      }
      return DisplayKey.get("LV.Claim.ServiceRequest.Document.QuoteAndInvoice")
    }
    
    
  }
  
  
}