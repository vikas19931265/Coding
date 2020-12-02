package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubrogationDocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SubrogationDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at SubrogationDocumentsLV.pcf: line 51, column 77
    function action_12 () : void {
      DocumentDetailsPopup.push(document)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at SubrogationDocumentsLV.pcf: line 60, column 90
    function action_17 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at SubrogationDocumentsLV.pcf: line 68, column 88
    function action_22 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=NameLink) at SubrogationDocumentsLV.pcf: line 40, column 87
    function action_8 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at SubrogationDocumentsLV.pcf: line 51, column 77
    function action_dest_13 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document)
    }
    
    // 'action' attribute on Link (id=UploadLink) at SubrogationDocumentsLV.pcf: line 68, column 88
    function action_dest_23 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at SubrogationDocumentsLV.pcf: line 51, column 77
    function available_11 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on Link (id=DownloadLink) at SubrogationDocumentsLV.pcf: line 60, column 90
    function available_15 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=UploadLink) at SubrogationDocumentsLV.pcf: line 68, column 88
    function available_20 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=NameLink) at SubrogationDocumentsLV.pcf: line 40, column 87
    function available_7 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'icon' attribute on Link (id=DownloadLink) at SubrogationDocumentsLV.pcf: line 60, column 90
    function icon_19 () : java.lang.String {
      return "document_download" 
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at SubrogationDocumentsLV.pcf: line 28, column 32
    function icon_6 () : java.lang.String {
      return document.Icon
    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at SubrogationDocumentsLV.pcf: line 73, column 75
    function label_26 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'label' attribute on Link (id=NameLink) at SubrogationDocumentsLV.pcf: line 40, column 87
    function label_9 () : java.lang.Object {
      return document.Name
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at SubrogationDocumentsLV.pcf: line 40, column 87
    function tooltip_10 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at SubrogationDocumentsLV.pcf: line 51, column 77
    function tooltip_14 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at SubrogationDocumentsLV.pcf: line 60, column 90
    function tooltip_18 () : java.lang.String {
      return documentsActionsHelper.DownloadDocumentContentTooltip
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at SubrogationDocumentsLV.pcf: line 68, column 88
    function tooltip_24 () : java.lang.String {
      return documentsActionsHelper.UploadDocumentContentTooltip
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at SubrogationDocumentsLV.pcf: line 78, column 59
    function valueRoot_28 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at SubrogationDocumentsLV.pcf: line 78, column 59
    function value_27 () : java.lang.String {
      return document.RelatedTo as java.lang.String
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at SubrogationDocumentsLV.pcf: line 84, column 45
    function value_30 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubrogationDocumentsLV.pcf: line 89, column 51
    function value_33 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at SubrogationDocumentsLV.pcf: line 94, column 36
    function value_36 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at SubrogationDocumentsLV.pcf: line 102, column 42
    function value_39 () : java.util.Date {
      return document.DateModified
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at SubrogationDocumentsLV.pcf: line 60, column 90
    function visible_16 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=UploadLink) at SubrogationDocumentsLV.pcf: line 68, column 88
    function visible_21 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at SubrogationDocumentsLV.pcf: line 73, column 75
    function visible_25 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(document)
    }
    
    property get document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubrogationDocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at SubrogationDocumentsLV.pcf: line 14, column 52
    function initialValue_0 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'value' attribute on TextCell (id=RelatedTo_Cell) at SubrogationDocumentsLV.pcf: line 78, column 59
    function sortValue_1 (document :  entity.Document) : java.lang.Object {
      return document.RelatedTo as java.lang.String
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at SubrogationDocumentsLV.pcf: line 84, column 45
    function sortValue_2 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at SubrogationDocumentsLV.pcf: line 89, column 51
    function sortValue_3 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at SubrogationDocumentsLV.pcf: line 94, column 36
    function sortValue_4 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at SubrogationDocumentsLV.pcf: line 102, column 42
    function sortValue_5 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'value' attribute on RowIterator at SubrogationDocumentsLV.pcf: line 20, column 37
    function value_42 () : entity.Document[] {
      return documents
    }
    
    property get documents () : Document[] {
      return getRequireValue("documents", 0) as Document[]
    }
    
    property set documents ($arg :  Document[]) {
      setRequireValue("documents", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    
  }
  
  
}