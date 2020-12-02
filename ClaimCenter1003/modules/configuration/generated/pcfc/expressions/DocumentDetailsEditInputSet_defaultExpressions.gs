package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/documents/DocumentDetailsEditInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentDetailsEditInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/documents/DocumentDetailsEditInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentDetailsEditInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentDetailsEditInputSet.default.pcf: line 65, column 83
    function action_29 () : void {
      document.downloadContent()
    }
    
    // 'available' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 29, column 61
    function available_2 () : java.lang.Boolean {
      return documentDetailsCCHelper.AllowFieldsSubset
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentDetailsEditInputSet.default.pcf: line 65, column 83
    function available_28 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentDetailsEditInputSet.default.pcf: line 143, column 46
    function defaultSetter_105 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Section = (__VALUE_TO_SET as typekey.DocumentSection)
    }
    
    // 'value' attribute on CheckBoxInput (id=relatedToEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 152, column 61
    function defaultSetter_113 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.RelatedToEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function defaultSetter_123 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.RelatedTo = (__VALUE_TO_SET as gw.pl.persistence.core.Bean)
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 43, column 61
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.NameEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 196, column 61
    function defaultSetter_143 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.AuthorEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentDetailsEditInputSet.default.pcf: line 205, column 49
    function defaultSetter_150 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 213, column 61
    function defaultSetter_157 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.RecipientEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentDetailsEditInputSet.default.pcf: line 222, column 52
    function defaultSetter_164 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=inboundEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 231, column 61
    function defaultSetter_171 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.InboundEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InBound_Input) at DocumentDetailsEditInputSet.default.pcf: line 240, column 50
    function defaultSetter_178 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Inbound = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 248, column 61
    function defaultSetter_185 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.StatusEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentDetailsEditInputSet.default.pcf: line 259, column 49
    function defaultSetter_192 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 267, column 61
    function defaultSetter_199 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.SecurityTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentDetailsEditInputSet.default.pcf: line 277, column 51
    function defaultSetter_206 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 285, column 61
    function defaultSetter_213 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.TypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentDetailsEditInputSet.default.pcf: line 296, column 43
    function defaultSetter_220 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DocumentDetailsEditInputSet.default.pcf: line 54, column 47
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 74, column 61
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.DescriptionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentDetailsEditInputSet.default.pcf: line 83, column 54
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 29, column 61
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.AllFieldsEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 91, column 61
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.MimeTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function defaultSetter_62 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.MimeType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 113, column 119
    function defaultSetter_76 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.LanguageEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.default.pcf: line 125, column 67
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on CheckBoxInput (id=sectionEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 133, column 61
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentDetailsCCHelper.SectionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on CheckBoxInput (id=relatedToEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 152, column 61
    function editable_110 () : java.lang.Boolean {
      return documentDetailsCCHelper.RelatedToEditable
    }
    
    // 'editable' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 91, column 61
    function editable_48 () : java.lang.Boolean {
      return not fromTemplate
    }
    
    // 'editable' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 113, column 119
    function editable_73 () : java.lang.Boolean {
      return documentDetailsCCHelper.Language == null or not fromTemplate
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditInputSet.default.pcf: line 17, column 52
    function initialValue_0 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'initialValue' attribute on Variable at DocumentDetailsEditInputSet.default.pcf: line 21, column 24
    function initialValue_1 () : Document {
      return documentDetailsCCHelper.getDocuments().Count == 1 ? documentDetailsCCHelper.getDocuments().single() : null
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentDetailsEditInputSet.default.pcf: line 65, column 83
    function label_30 () : java.lang.Object {
      return documentDetailsCCHelper.Name
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function optionGroupLabel_125 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionGroupLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function optionLabel_126 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function optionLabel_64 (VALUE :  java.lang.String) : java.lang.String {
      return gw.document.DocumentsUtil.getMimeTypeLabel(VALUE)
    }
    
    // 'required' attribute on TextInput (id=Name_Input) at DocumentDetailsEditInputSet.default.pcf: line 54, column 47
    function required_21 () : java.lang.Boolean {
      return !documentDetailsCCHelper.AllowFieldsSubset
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestDisplayName_Cell) at DocumentDetailsEditInputSet.default.pcf: line 184, column 53
    function sortValue_134 (ServiceRequest :  entity.ServiceRequest) : java.lang.Object {
      return ServiceRequest.DisplayName
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentDetailsEditInputSet.default.pcf: line 65, column 83
    function tooltip_31 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function valueRange_127 () : java.lang.Object {
      return documentDetailsCCHelper.RelatedToCandidates
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function valueRange_65 () : java.lang.Object {
      return documentDetailsCCHelper.getMimeTypeList(documentDetailsCCHelper.MimeType)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.default.pcf: line 125, column 67
    function valueRange_88 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 29, column 61
    function valueRoot_6 () : java.lang.Object {
      return documentDetailsCCHelper
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentDetailsEditInputSet.default.pcf: line 143, column 46
    function value_104 () : typekey.DocumentSection {
      return documentDetailsCCHelper.Section
    }
    
    // 'value' attribute on CheckBoxInput (id=relatedToEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 152, column 61
    function value_112 () : java.lang.Boolean {
      return documentDetailsCCHelper.RelatedToEnabled
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function value_122 () : gw.pl.persistence.core.Bean {
      return documentDetailsCCHelper.RelatedTo
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 43, column 61
    function value_13 () : java.lang.Boolean {
      return documentDetailsCCHelper.NameEnabled
    }
    
    // 'value' attribute on RowIterator at DocumentDetailsEditInputSet.default.pcf: line 179, column 49
    function value_138 () : entity.ServiceRequest[] {
      return documentDetailsCCHelper.RelatedServiceRequests
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 196, column 61
    function value_142 () : java.lang.Boolean {
      return documentDetailsCCHelper.AuthorEnabled
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentDetailsEditInputSet.default.pcf: line 205, column 49
    function value_149 () : java.lang.String {
      return documentDetailsCCHelper.Author
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 213, column 61
    function value_156 () : java.lang.Boolean {
      return documentDetailsCCHelper.RecipientEnabled
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentDetailsEditInputSet.default.pcf: line 222, column 52
    function value_163 () : java.lang.String {
      return documentDetailsCCHelper.Recipient
    }
    
    // 'value' attribute on CheckBoxInput (id=inboundEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 231, column 61
    function value_170 () : java.lang.Boolean {
      return documentDetailsCCHelper.InboundEnabled
    }
    
    // 'value' attribute on BooleanRadioInput (id=InBound_Input) at DocumentDetailsEditInputSet.default.pcf: line 240, column 50
    function value_177 () : java.lang.Boolean {
      return documentDetailsCCHelper.Inbound
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 248, column 61
    function value_184 () : java.lang.Boolean {
      return documentDetailsCCHelper.StatusEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentDetailsEditInputSet.default.pcf: line 259, column 49
    function value_191 () : typekey.DocumentStatusType {
      return documentDetailsCCHelper.Status
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 267, column 61
    function value_198 () : java.lang.Boolean {
      return documentDetailsCCHelper.SecurityTypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentDetailsEditInputSet.default.pcf: line 277, column 51
    function value_205 () : typekey.DocumentSecurityType {
      return documentDetailsCCHelper.SecurityType
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 285, column 61
    function value_212 () : java.lang.Boolean {
      return documentDetailsCCHelper.TypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentDetailsEditInputSet.default.pcf: line 296, column 43
    function value_219 () : typekey.DocumentType {
      return documentDetailsCCHelper.Type
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at DocumentDetailsEditInputSet.default.pcf: line 54, column 47
    function value_22 () : java.lang.String {
      return documentDetailsCCHelper.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 74, column 61
    function value_35 () : java.lang.Boolean {
      return documentDetailsCCHelper.DescriptionEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 29, column 61
    function value_4 () : java.lang.Boolean {
      return documentDetailsCCHelper.AllFieldsEnabled
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentDetailsEditInputSet.default.pcf: line 83, column 54
    function value_42 () : java.lang.String {
      return documentDetailsCCHelper.Description
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 91, column 61
    function value_50 () : java.lang.Boolean {
      return documentDetailsCCHelper.MimeTypeEnabled
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function value_61 () : java.lang.String {
      return documentDetailsCCHelper.MimeType
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 113, column 119
    function value_75 () : java.lang.Boolean {
      return documentDetailsCCHelper.LanguageEnabled
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.default.pcf: line 125, column 67
    function value_85 () : typekey.LanguageType {
      return documentDetailsCCHelper.Language
    }
    
    // 'value' attribute on CheckBoxInput (id=sectionEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 133, column 61
    function value_97 () : java.lang.Boolean {
      return documentDetailsCCHelper.SectionEnabled
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function verifyValueRangeIsAllowedType_128 ($$arg :  gw.pl.persistence.core.Bean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function verifyValueRangeIsAllowedType_128 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function verifyValueRangeIsAllowedType_66 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function verifyValueRangeIsAllowedType_66 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.default.pcf: line 125, column 67
    function verifyValueRangeIsAllowedType_89 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.default.pcf: line 125, column 67
    function verifyValueRangeIsAllowedType_89 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function verifyValueRange_129 () : void {
      var __valueRangeArg = documentDetailsCCHelper.RelatedToCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_128(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function verifyValueRange_67 () : void {
      var __valueRangeArg = documentDetailsCCHelper.getMimeTypeList(documentDetailsCCHelper.MimeType)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_66(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.default.pcf: line 125, column 67
    function verifyValueRange_90 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_89(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=RelatedTo_Input) at DocumentDetailsEditInputSet.default.pcf: line 168, column 61
    function visible_121 () : java.lang.Boolean {
      return documentDetailsCCHelper.RelatedToVisible
    }
    
    // 'visible' attribute on ListViewInput at DocumentDetailsEditInputSet.default.pcf: line 171, column 61
    function visible_139 () : java.lang.Boolean {
      return !documentDetailsCCHelper.RelatedToVisible
    }
    
    // 'visible' attribute on TextInput (id=Name_Input) at DocumentDetailsEditInputSet.default.pcf: line 54, column 47
    function visible_20 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on ContentInput (id=DocumentLink) at DocumentDetailsEditInputSet.default.pcf: line 58, column 69
    function visible_32 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode and document != null
    }
    
    // 'visible' attribute on RangeInput (id=MimeType_Input) at DocumentDetailsEditInputSet.default.pcf: line 105, column 73
    function visible_59 () : java.lang.Boolean {
      return fromTemplate || documentDetailsCCHelper.ShowMimeType
    }
    
    // 'visible' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentDetailsEditInputSet.default.pcf: line 113, column 119
    function visible_74 () : java.lang.Boolean {
      return documentDetailsCCHelper.AllowFieldsSubset && LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeInput (id=Language_Input) at DocumentDetailsEditInputSet.default.pcf: line 125, column 67
    function visible_84 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get document () : Document {
      return getVariableValue("document", 0) as Document
    }
    
    property set document ($arg :  Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get documentDetailsCCHelper () : gw.document.DocumentDetailsCCHelper {
      return getRequireValue("documentDetailsCCHelper", 0) as gw.document.DocumentDetailsCCHelper
    }
    
    property set documentDetailsCCHelper ($arg :  gw.document.DocumentDetailsCCHelper) {
      setRequireValue("documentDetailsCCHelper", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get fromTemplate () : boolean {
      return getRequireValue("fromTemplate", 0) as java.lang.Boolean
    }
    
    property set fromTemplate ($arg :  boolean) {
      setRequireValue("fromTemplate", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/documents/DocumentDetailsEditInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentDetailsEditInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestDisplayName_Cell) at DocumentDetailsEditInputSet.default.pcf: line 184, column 53
    function valueRoot_136 () : java.lang.Object {
      return ServiceRequest
    }
    
    // 'value' attribute on TextCell (id=ServiceRequestDisplayName_Cell) at DocumentDetailsEditInputSet.default.pcf: line 184, column 53
    function value_135 () : java.lang.String {
      return ServiceRequest.DisplayName
    }
    
    property get ServiceRequest () : entity.ServiceRequest {
      return getIteratedValue(1) as entity.ServiceRequest
    }
    
    
  }
  
  
}