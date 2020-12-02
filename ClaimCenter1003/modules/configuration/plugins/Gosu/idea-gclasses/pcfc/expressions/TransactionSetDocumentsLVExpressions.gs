package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/TransactionSetDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionSetDocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/TransactionSetDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TransactionSetDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function action_11 () : void {
      DocumentDetailsPopup.push(document, false)
    }
    
    // 'action' attribute on Link (id=DocumentsLV_RemoveLink) at TransactionSetDocumentsLV.pcf: line 57, column 42
    function action_15 () : void {
      TransactionSet.removeLinkedDocument(document)
    }
    
    // 'action' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function action_7 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function action_dest_12 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document, false)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function available_10 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function available_6 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'icon' attribute on Link (id=DocumentsLV_RemoveLink) at TransactionSetDocumentsLV.pcf: line 57, column 42
    function icon_16 () : java.lang.String {
      return "document_remove"  
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at TransactionSetDocumentsLV.pcf: line 28, column 32
    function icon_5 () : java.lang.String {
      return document.Icon
    }
    
    // 'label' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function label_8 () : java.lang.Object {
      return document.Name
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function tooltip_13 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function tooltip_9 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at TransactionSetDocumentsLV.pcf: line 64, column 45
    function valueRoot_18 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at TransactionSetDocumentsLV.pcf: line 64, column 45
    function value_17 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionSetDocumentsLV.pcf: line 69, column 51
    function value_20 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at TransactionSetDocumentsLV.pcf: line 74, column 36
    function value_23 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at TransactionSetDocumentsLV.pcf: line 82, column 42
    function value_26 () : java.util.Date {
      return document.DateModified
    }
    
    property get document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/TransactionSetDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionSetDocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TransactionSetDocumentsLV.pcf: line 14, column 52
    function initialValue_0 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at TransactionSetDocumentsLV.pcf: line 64, column 45
    function sortValue_1 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TransactionSetDocumentsLV.pcf: line 69, column 51
    function sortValue_2 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at TransactionSetDocumentsLV.pcf: line 74, column 36
    function sortValue_3 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at TransactionSetDocumentsLV.pcf: line 82, column 42
    function sortValue_4 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'value' attribute on RowIterator at TransactionSetDocumentsLV.pcf: line 20, column 37
    function value_29 () : entity.Document[] {
      return TransactionSet.LinkedDocuments.where( \ d -> perm.Document.view(d) )
    }
    
    property get TransactionSet () : TransactionSet {
      return getRequireValue("TransactionSet", 0) as TransactionSet
    }
    
    property set TransactionSet ($arg :  TransactionSet) {
      setRequireValue("TransactionSet", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    
  }
  
  
}