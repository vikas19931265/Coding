package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/documents/DocumentDetailsEditLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/documents/DocumentDetailsEditLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditLV.pcf: line 24, column 45
    function initialValue_0 () : gw.document.DocumentCCContext {
      return DocumentApplicationContext as gw.document.DocumentCCContext
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DocumentDetailsEditLV.pcf: line 57, column 34
    function sortValue_1 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentDetailsEditLV.pcf: line 120, column 51
    function sortValue_10 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentDetailsEditLV.pcf: line 126, column 53
    function sortValue_11 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.SecurityType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentDetailsEditLV.pcf: line 134, column 45
    function sortValue_12 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Type
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentDetailsEditLV.pcf: line 63, column 41
    function sortValue_2 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Description
    }
    
    // 'value' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function sortValue_3 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.MimeType
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 79, column 45
    function sortValue_4 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Language
    }
    
    // 'value' attribute on TypeKeyCell (id=Section_Cell) at DocumentDetailsEditLV.pcf: line 85, column 48
    function sortValue_5 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Section
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function sortValue_6 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.RelatedTo
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentDetailsEditLV.pcf: line 102, column 36
    function sortValue_7 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentDetailsEditLV.pcf: line 108, column 39
    function sortValue_8 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Recipient
    }
    
    // 'value' attribute on BooleanRadioCell (id=InBound_Cell) at DocumentDetailsEditLV.pcf: line 113, column 37
    function sortValue_9 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : java.lang.Object {
      var Document : entity.Document = (DocumentCreationInfo.Document)
var relatedServiceRequests : ServiceRequest[] = (Document.RelatedServiceRequests.toTypedArray())
return Document.Inbound
    }
    
    // 'toRemove' attribute on RowIterator at DocumentDetailsEditLV.pcf: line 34, column 54
    function toRemove_76 (DocumentCreationInfo :  gw.document.DocumentCreationInfo) : void {
      DocumentCreationInfos.remove(DocumentCreationInfo); DocumentCreationInfo.Document.remove()
    }
    
    // 'value' attribute on RowIterator at DocumentDetailsEditLV.pcf: line 34, column 54
    function value_77 () : gw.document.DocumentCreationInfo[] {
      return DocumentCreationInfos.toTypedArray()
    }
    
    property get DocumentApplicationContext () : gw.document.DocumentApplicationContext {
      return getRequireValue("DocumentApplicationContext", 0) as gw.document.DocumentApplicationContext
    }
    
    property set DocumentApplicationContext ($arg :  gw.document.DocumentApplicationContext) {
      setRequireValue("DocumentApplicationContext", 0, $arg)
    }
    
    property get DocumentCCContext () : gw.document.DocumentCCContext {
      return getVariableValue("DocumentCCContext", 0) as gw.document.DocumentCCContext
    }
    
    property set DocumentCCContext ($arg :  gw.document.DocumentCCContext) {
      setVariableValue("DocumentCCContext", 0, $arg)
    }
    
    property get DocumentCreationInfos () : java.util.Collection<gw.document.DocumentCreationInfo> {
      return getRequireValue("DocumentCreationInfos", 0) as java.util.Collection<gw.document.DocumentCreationInfo>
    }
    
    property set DocumentCreationInfos ($arg :  java.util.Collection<gw.document.DocumentCreationInfo>) {
      setRequireValue("DocumentCreationInfos", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/documents/DocumentDetailsEditLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentDetailsEditLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DocumentDetailsEditLV.pcf: line 57, column 34
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentDetailsEditLV.pcf: line 63, column 41
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.MimeType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 79, column 45
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Section_Cell) at DocumentDetailsEditLV.pcf: line 85, column 48
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Section = (__VALUE_TO_SET as typekey.DocumentSection)
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.RelatedTo = (__VALUE_TO_SET as gw.pl.persistence.core.Bean)
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentDetailsEditLV.pcf: line 102, column 36
    function defaultSetter_52 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentDetailsEditLV.pcf: line 108, column 39
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioCell (id=InBound_Cell) at DocumentDetailsEditLV.pcf: line 113, column 37
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Inbound = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentDetailsEditLV.pcf: line 120, column 51
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentDetailsEditLV.pcf: line 126, column 53
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentDetailsEditLV.pcf: line 134, column 45
    function defaultSetter_72 (__VALUE_TO_SET :  java.lang.Object) : void {
      Document.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'editable' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function editable_40 () : java.lang.Boolean {
      return (DocumentApplicationContext.createDocumentDetailsHelper({ Document }) as gw.document.DocumentDetailsCCHelper).RelatedToEditable
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon_Cell) at DocumentDetailsEditLV.pcf: line 50, column 32
    function icon_15 () : java.lang.String {
      return Document.Icon
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditLV.pcf: line 38, column 33
    function initialValue_13 () : entity.Document {
      return DocumentCreationInfo.Document
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditLV.pcf: line 42, column 34
    function initialValue_14 () : ServiceRequest[] {
      return Document.RelatedServiceRequests.toTypedArray()
    }
    
    // RowIterator at DocumentDetailsEditLV.pcf: line 34, column 54
    function initializeVariables_75 () : void {
        Document = DocumentCreationInfo.Document;
  relatedServiceRequests = Document.RelatedServiceRequests.toTypedArray();

    }
    
    // 'optionGroupLabel' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function optionGroupLabel_44 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionGroupLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function optionLabel_27 (VALUE :  java.lang.String) : java.lang.String {
      return Document.getMimeTypeLabel(VALUE)
    }
    
    // 'optionLabel' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function optionLabel_45 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionLabel(VALUE as KeyableBean)
    }
    
    // 'valueRange' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function valueRange_28 () : java.lang.Object {
      return Document.MimeTypeList
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function valueRange_46 () : java.lang.Object {
      return Document.Claim.RelatedToCandidates
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DocumentDetailsEditLV.pcf: line 57, column 34
    function valueRoot_18 () : java.lang.Object {
      return Document
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DocumentDetailsEditLV.pcf: line 57, column 34
    function value_16 () : java.lang.String {
      return Document.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at DocumentDetailsEditLV.pcf: line 63, column 41
    function value_20 () : java.lang.String {
      return Document.Description
    }
    
    // 'value' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function value_24 () : java.lang.String {
      return Document.MimeType
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at DocumentDetailsEditLV.pcf: line 79, column 45
    function value_32 () : typekey.LanguageType {
      return Document.Language
    }
    
    // 'value' attribute on TypeKeyCell (id=Section_Cell) at DocumentDetailsEditLV.pcf: line 85, column 48
    function value_36 () : typekey.DocumentSection {
      return Document.Section
    }
    
    // 'value' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function value_41 () : gw.pl.persistence.core.Bean {
      return Document.RelatedTo
    }
    
    // 'value' attribute on TextCell (id=Author_Cell) at DocumentDetailsEditLV.pcf: line 102, column 36
    function value_51 () : java.lang.String {
      return Document.Author
    }
    
    // 'value' attribute on TextCell (id=Recipient_Cell) at DocumentDetailsEditLV.pcf: line 108, column 39
    function value_55 () : java.lang.String {
      return Document.Recipient
    }
    
    // 'value' attribute on BooleanRadioCell (id=InBound_Cell) at DocumentDetailsEditLV.pcf: line 113, column 37
    function value_59 () : java.lang.Boolean {
      return Document.Inbound
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DocumentDetailsEditLV.pcf: line 120, column 51
    function value_63 () : typekey.DocumentStatusType {
      return Document.Status
    }
    
    // 'value' attribute on TypeKeyCell (id=SecurityType_Cell) at DocumentDetailsEditLV.pcf: line 126, column 53
    function value_67 () : typekey.DocumentSecurityType {
      return Document.SecurityType
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentDetailsEditLV.pcf: line 134, column 45
    function value_71 () : typekey.DocumentType {
      return Document.Type
    }
    
    // 'valueRange' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function verifyValueRangeIsAllowedType_47 ($$arg :  gw.pl.persistence.core.Bean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function verifyValueRangeIsAllowedType_47 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=DocType_Cell) at DocumentDetailsEditLV.pcf: line 72, column 41
    function verifyValueRange_30 () : void {
      var __valueRangeArg = Document.MimeTypeList
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeCell (id=RelatedTo_Cell) at DocumentDetailsEditLV.pcf: line 96, column 52
    function verifyValueRange_48 () : void {
      var __valueRangeArg = Document.Claim.RelatedToCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_47(__valueRangeArg)
    }
    
    property get Document () : entity.Document {
      return getVariableValue("Document", 1) as entity.Document
    }
    
    property set Document ($arg :  entity.Document) {
      setVariableValue("Document", 1, $arg)
    }
    
    property get DocumentCreationInfo () : gw.document.DocumentCreationInfo {
      return getIteratedValue(1) as gw.document.DocumentCreationInfo
    }
    
    property get relatedServiceRequests () : ServiceRequest[] {
      return getVariableValue("relatedServiceRequests", 1) as ServiceRequest[]
    }
    
    property set relatedServiceRequests ($arg :  ServiceRequest[]) {
      setVariableValue("relatedServiceRequests", 1, $arg)
    }
    
    
  }
  
  
}