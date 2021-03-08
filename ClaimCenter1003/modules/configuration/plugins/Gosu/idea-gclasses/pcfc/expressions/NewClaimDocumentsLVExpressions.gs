package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewClaimDocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends NewClaimDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at NewClaimDocumentsLV.pcf: line 51, column 77
    function action_10 () : void {
      DocumentDetailsPopup.push(document, false)
    }
    
    // 'action' attribute on Link (id=DeleteDocumentLink) at NewClaimDocumentsLV.pcf: line 59, column 85
    function action_15 () : void {
      gw.document.DocumentsUtil.deleteDocumentWithoutCommitWithClaim(document, Claim)
    }
    
    // 'action' attribute on Link (id=NameLink) at NewClaimDocumentsLV.pcf: line 40, column 87
    function action_6 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at NewClaimDocumentsLV.pcf: line 51, column 77
    function action_dest_11 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document, false)
    }
    
    // 'available' attribute on Link (id=NameLink) at NewClaimDocumentsLV.pcf: line 40, column 87
    function available_5 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at NewClaimDocumentsLV.pcf: line 51, column 77
    function available_9 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'icon' attribute on Link (id=DeleteDocumentLink) at NewClaimDocumentsLV.pcf: line 59, column 85
    function icon_17 () : java.lang.String {
      return "delete" 
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at NewClaimDocumentsLV.pcf: line 28, column 32
    function icon_4 () : java.lang.String {
      return document.Icon
    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at NewClaimDocumentsLV.pcf: line 64, column 72
    function label_19 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'label' attribute on Link (id=NameLink) at NewClaimDocumentsLV.pcf: line 40, column 87
    function label_7 () : java.lang.Object {
      return document.Name
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at NewClaimDocumentsLV.pcf: line 51, column 77
    function tooltip_12 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=DeleteDocumentLink) at NewClaimDocumentsLV.pcf: line 59, column 85
    function tooltip_16 () : java.lang.String {
      return documentsActionsHelper.DeleteDocumentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at NewClaimDocumentsLV.pcf: line 40, column 87
    function tooltip_8 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at NewClaimDocumentsLV.pcf: line 71, column 45
    function valueRoot_21 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at NewClaimDocumentsLV.pcf: line 71, column 45
    function value_20 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at NewClaimDocumentsLV.pcf: line 76, column 51
    function value_23 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at NewClaimDocumentsLV.pcf: line 81, column 36
    function value_26 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at NewClaimDocumentsLV.pcf: line 89, column 42
    function value_29 () : java.util.Date {
      return document.DateModified
    }
    
    // 'visible' attribute on Link (id=DeleteDocumentLink) at NewClaimDocumentsLV.pcf: line 59, column 85
    function visible_14 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkVisible(document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at NewClaimDocumentsLV.pcf: line 64, column 72
    function visible_18 () : java.lang.Boolean {
      return document.PendingDocUID != null and document.DMS
    }
    
    property get document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewClaimDocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at NewClaimDocumentsLV.pcf: line 71, column 45
    function sortValue_0 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at NewClaimDocumentsLV.pcf: line 76, column 51
    function sortValue_1 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at NewClaimDocumentsLV.pcf: line 81, column 36
    function sortValue_2 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at NewClaimDocumentsLV.pcf: line 89, column 42
    function sortValue_3 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'value' attribute on RowIterator at NewClaimDocumentsLV.pcf: line 20, column 37
    function value_32 () : entity.Document[] {
      return DocumentList
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get DocumentList () : Document[] {
      return getRequireValue("DocumentList", 0) as Document[]
    }
    
    property set DocumentList ($arg :  Document[]) {
      setRequireValue("DocumentList", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getRequireValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setRequireValue("documentsActionsHelper", 0, $arg)
    }
    
    
  }
  
  
}