package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/StatementDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StatementDocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/StatementDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends StatementDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at StatementDocumentsLV.pcf: line 60, column 55
    function action_12 () : void {
      DocumentDetailsPopup.push(document, not currentStatement.ServiceRequest.AlreadyPromoted)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at StatementDocumentsLV.pcf: line 69, column 181
    function action_17 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at StatementDocumentsLV.pcf: line 77, column 179
    function action_22 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=Unlink) at StatementDocumentsLV.pcf: line 85, column 43
    function action_27 () : void {
      currentStatement.unlinkDocumentForUI(document, currentStatement.New ? false : true) 
    }
    
    // 'action' attribute on Link (id=NameLink) at StatementDocumentsLV.pcf: line 48, column 87
    function action_7 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at StatementDocumentsLV.pcf: line 60, column 55
    function action_dest_13 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document, not currentStatement.ServiceRequest.AlreadyPromoted)
    }
    
    // 'action' attribute on Link (id=UploadLink) at StatementDocumentsLV.pcf: line 77, column 179
    function action_dest_23 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at StatementDocumentsLV.pcf: line 60, column 55
    function available_10 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on Link (id=DownloadLink) at StatementDocumentsLV.pcf: line 69, column 181
    function available_15 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=UploadLink) at StatementDocumentsLV.pcf: line 77, column 179
    function available_20 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=NameLink) at StatementDocumentsLV.pcf: line 48, column 87
    function available_6 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document) and not CurrentLocation.InEditMode
    }
    
    // 'icon' attribute on Link (id=DownloadLink) at StatementDocumentsLV.pcf: line 69, column 181
    function icon_19 () : java.lang.String {
      return "document_download" 
    }
    
    // 'icon' attribute on Link (id=Unlink) at StatementDocumentsLV.pcf: line 85, column 43
    function icon_29 () : java.lang.String {
      return "document_remove"  
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at StatementDocumentsLV.pcf: line 36, column 32
    function icon_5 () : java.lang.String {
      return document.Icon
    }
    
    // 'initialValue' attribute on Variable at StatementDocumentsLV.pcf: line 28, column 26
    function initialValue_4 () : Document {
      return statementDocumentLinkPair.Second
    }
    
    // RowIterator (id=ActiveStatementDocuments) at StatementDocumentsLV.pcf: line 24, column 121
    function initializeVariables_41 () : void {
        document = statementDocumentLinkPair.Second;

    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at StatementDocumentsLV.pcf: line 90, column 75
    function label_31 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'label' attribute on Link (id=NameLink) at StatementDocumentsLV.pcf: line 48, column 87
    function label_8 () : java.lang.Object {
      return document.Name
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at StatementDocumentsLV.pcf: line 60, column 55
    function tooltip_14 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at StatementDocumentsLV.pcf: line 69, column 181
    function tooltip_18 () : java.lang.String {
      return documentsActionsHelper.DownloadDocumentContentTooltip
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at StatementDocumentsLV.pcf: line 77, column 179
    function tooltip_24 () : java.lang.String {
      return documentsActionsHelper.UploadDocumentContentTooltip
    }
    
    // 'tooltip' attribute on Link (id=Unlink) at StatementDocumentsLV.pcf: line 85, column 43
    function tooltip_28 () : java.lang.String {
      return documentsActionsHelper.RemoveDocumentLinkTooltip()
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at StatementDocumentsLV.pcf: line 48, column 87
    function tooltip_9 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at StatementDocumentsLV.pcf: line 96, column 45
    function valueRoot_33 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at StatementDocumentsLV.pcf: line 96, column 45
    function value_32 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at StatementDocumentsLV.pcf: line 100, column 36
    function value_35 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at StatementDocumentsLV.pcf: line 108, column 42
    function value_38 () : java.util.Date {
      return document.DateModified
    }
    
    // 'visible' attribute on Link (id=ViewPropertiesLink) at StatementDocumentsLV.pcf: line 60, column 55
    function visible_11 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at StatementDocumentsLV.pcf: line 69, column 181
    function visible_16 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(document) and not CurrentLocation.InEditMode and not currentStatement.ServiceRequest.AlreadyPromoted
    }
    
    // 'visible' attribute on Link (id=UploadLink) at StatementDocumentsLV.pcf: line 77, column 179
    function visible_21 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentVisible(document)and not CurrentLocation.InEditMode and not currentStatement.ServiceRequest.AlreadyPromoted 
    }
    
    // 'visible' attribute on Link (id=Unlink) at StatementDocumentsLV.pcf: line 85, column 43
    function visible_26 () : java.lang.Boolean {
      return documentsRemovable
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at StatementDocumentsLV.pcf: line 90, column 75
    function visible_30 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(document)
    }
    
    property get document () : Document {
      return getVariableValue("document", 1) as Document
    }
    
    property set document ($arg :  Document) {
      setVariableValue("document", 1, $arg)
    }
    
    property get statementDocumentLinkPair () : gw.util.Pair<entity.ServiceRequestStatementDocumentLink, entity.Document> {
      return getIteratedValue(1) as gw.util.Pair<entity.ServiceRequestStatementDocumentLink, entity.Document>
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/StatementDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StatementDocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at StatementDocumentsLV.pcf: line 18, column 52
    function initialValue_0 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at StatementDocumentsLV.pcf: line 96, column 45
    function sortValue_1 (statementDocumentLinkPair :  gw.util.Pair<entity.ServiceRequestStatementDocumentLink, entity.Document>) : java.lang.Object {
      var document : Document = (statementDocumentLinkPair.Second)
return document.Type
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at StatementDocumentsLV.pcf: line 100, column 36
    function sortValue_2 (statementDocumentLinkPair :  gw.util.Pair<entity.ServiceRequestStatementDocumentLink, entity.Document>) : java.lang.Object {
      var document : Document = (statementDocumentLinkPair.Second)
return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at StatementDocumentsLV.pcf: line 108, column 42
    function sortValue_3 (statementDocumentLinkPair :  gw.util.Pair<entity.ServiceRequestStatementDocumentLink, entity.Document>) : java.lang.Object {
      var document : Document = (statementDocumentLinkPair.Second)
return document.DateModified
    }
    
    // 'value' attribute on RowIterator (id=ActiveStatementDocuments) at StatementDocumentsLV.pcf: line 24, column 121
    function value_42 () : java.util.List<gw.util.Pair<entity.ServiceRequestStatementDocumentLink, entity.Document>> {
      return currentStatement.ViewableDocumentLinksAndDocuments
    }
    
    property get currentStatement () : ServiceRequestStatement {
      return getRequireValue("currentStatement", 0) as ServiceRequestStatement
    }
    
    property set currentStatement ($arg :  ServiceRequestStatement) {
      setRequireValue("currentStatement", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get documentsRemovable () : boolean {
      return getRequireValue("documentsRemovable", 0) as java.lang.Boolean
    }
    
    property set documentsRemovable ($arg :  boolean) {
      setRequireValue("documentsRemovable", 0, $arg)
    }
    
    
  }
  
  
}