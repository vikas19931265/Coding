package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.system.CCLoggerCategory
@javax.annotation.Generated("config/web/pcf/shared/documenttemplatesearch/DocumentTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentTemplateSearchResultLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/documenttemplatesearch/DocumentTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentTemplateSearchResultLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at DocumentTemplateSearchResultLV.pcf: line 23, column 50
    function sortValue_0 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentTemplateSearchResultLV.pcf: line 28, column 45
    function sortValue_1 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultLV.pcf: line 66, column 69
    function sortValue_10 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.Language
    }
    
    // 'sortBy' attribute on TextCell (id=LossType_Cell) at DocumentTemplateSearchResultLV.pcf: line 33, column 56
    function sortValue_2 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.Lob
    }
    
    // 'sortBy' attribute on TextCell (id=JurisdictionState_Cell) at DocumentTemplateSearchResultLV.pcf: line 38, column 58
    function sortValue_3 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.State
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at DocumentTemplateSearchResultLV.pcf: line 42, column 58
    function sortValue_4 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.DateModified
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at DocumentTemplateSearchResultLV.pcf: line 46, column 59
    function sortValue_5 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.DateEffective
    }
    
    // 'value' attribute on DateCell (id=Expires_Cell) at DocumentTemplateSearchResultLV.pcf: line 50, column 57
    function sortValue_6 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.DateExpires
    }
    
    // 'sortBy' attribute on TextCell (id=Section_Cell) at DocumentTemplateSearchResultLV.pcf: line 56, column 72
    function sortValue_7 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.Section
    }
    
    // 'value' attribute on TextCell (id=Identifier_Cell) at DocumentTemplateSearchResultLV.pcf: line 60, column 56
    function sortValue_9 (DocTemplateSearchResults :  entity.DocumentTemplateSearchResults) : java.lang.Object {
      return DocTemplateSearchResults.Identifier
    }
    
    // 'value' attribute on RowIterator at DocumentTemplateSearchResultLV.pcf: line 17, column 58
    function value_42 () : entity.DocumentTemplateSearchResults[] {
      return DocTemplateSearchResultsList
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultLV.pcf: line 66, column 69
    function visible_11 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TextCell (id=Section_Cell) at DocumentTemplateSearchResultLV.pcf: line 56, column 72
    function visible_8 () : java.lang.Boolean {
      return DocumentSection.getTypeKeys( false ).Count > 1
    }
    
    property get DocTemplateSearchResultsList () : DocumentTemplateSearchResults[] {
      return getRequireValue("DocTemplateSearchResultsList", 0) as DocumentTemplateSearchResults[]
    }
    
    property set DocTemplateSearchResultsList ($arg :  DocumentTemplateSearchResults[]) {
      setRequireValue("DocTemplateSearchResultsList", 0, $arg)
    }
    
    
    function formatLOB(result : DocumentTemplateSearchResults) : String {
      if (result.Lob == null) {
        return null
      }
      try {
        return result.Lob.split( ",\\s*" ).map( \ s -> (typekey.LOBCode.get(s)).DisplayName).join(", ")
      } catch (e : java.lang.Throwable) {
        CCLoggerCategory.DOCUMENT.error(DisplayKey.get("LV.Claim.DocumentTemplateSearch.DocumentTemplateDescriptor.LOB.error",  result.TemplateID, e.Message))
        return result.Lob
      }
    }
    
    function formatState(result : DocumentTemplateSearchResults) : String {
      if (result.State == null) {
        return null
      }
      try {
       return result.State.split( ",\\s*" ).map( \ s -> (typekey.Jurisdiction.get(s) ).DisplayName).join(", ")
      } catch (e : java.lang.Throwable) {
        CCLoggerCategory.DOCUMENT.error(DisplayKey.get("LV.Claim.DocumentTemplateSearch.DocumentTemplateDescriptor.JurisdictionState.error",  result.TemplateID, e.Message))
        return result.State
      }
    }
    
    function formatDocSection(result : DocumentTemplateSearchResults) : String {
      if (result.Section == null) {
        return null
      }
      try {
       return (typekey.DocumentSection.get(result.Section)).DisplayName
      } catch (e : java.lang.Throwable) {
        CCLoggerCategory.DOCUMENT.error(DisplayKey.get("LV.Claim.DocumentTemplateSearch.DocumentTemplateDescriptor.Section.error", result.TemplateID,e.Message))
        return result.Section
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/documenttemplatesearch/DocumentTemplateSearchResultLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentTemplateSearchResultLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickValue' attribute on RowIterator at DocumentTemplateSearchResultLV.pcf: line 17, column 58
    function pickValue_41 () : gw.plugin.document.IDocumentTemplateDescriptor {
      return DocTemplateSearchResults.loadDescriptor()
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at DocumentTemplateSearchResultLV.pcf: line 23, column 50
    function valueRoot_13 () : java.lang.Object {
      return DocTemplateSearchResults
    }
    
    // 'value' attribute on TextCell (id=Template_Cell) at DocumentTemplateSearchResultLV.pcf: line 23, column 50
    function value_12 () : java.lang.String {
      return DocTemplateSearchResults.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at DocumentTemplateSearchResultLV.pcf: line 28, column 45
    function value_15 () : typekey.DocumentType {
      return DocTemplateSearchResults.Type
    }
    
    // 'value' attribute on TextCell (id=LossType_Cell) at DocumentTemplateSearchResultLV.pcf: line 33, column 56
    function value_18 () : java.lang.String {
      return formatLOB(DocTemplateSearchResults)
    }
    
    // 'value' attribute on TextCell (id=JurisdictionState_Cell) at DocumentTemplateSearchResultLV.pcf: line 38, column 58
    function value_20 () : java.lang.String {
      return formatState(DocTemplateSearchResults)
    }
    
    // 'value' attribute on DateCell (id=DateModified_Cell) at DocumentTemplateSearchResultLV.pcf: line 42, column 58
    function value_22 () : java.util.Date {
      return DocTemplateSearchResults.DateModified
    }
    
    // 'value' attribute on DateCell (id=Effective_Cell) at DocumentTemplateSearchResultLV.pcf: line 46, column 59
    function value_25 () : java.util.Date {
      return DocTemplateSearchResults.DateEffective
    }
    
    // 'value' attribute on DateCell (id=Expires_Cell) at DocumentTemplateSearchResultLV.pcf: line 50, column 57
    function value_28 () : java.util.Date {
      return DocTemplateSearchResults.DateExpires
    }
    
    // 'value' attribute on TextCell (id=Section_Cell) at DocumentTemplateSearchResultLV.pcf: line 56, column 72
    function value_31 () : java.lang.String {
      return formatDocSection(DocTemplateSearchResults)
    }
    
    // 'value' attribute on TextCell (id=Identifier_Cell) at DocumentTemplateSearchResultLV.pcf: line 60, column 56
    function value_34 () : java.lang.String {
      return DocTemplateSearchResults.Identifier
    }
    
    // 'value' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultLV.pcf: line 66, column 69
    function value_37 () : typekey.LanguageType {
      return DocTemplateSearchResults.Language
    }
    
    // 'visible' attribute on TextCell (id=Section_Cell) at DocumentTemplateSearchResultLV.pcf: line 56, column 72
    function visible_32 () : java.lang.Boolean {
      return DocumentSection.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TypeKeyCell (id=Language_Cell) at DocumentTemplateSearchResultLV.pcf: line 66, column 69
    function visible_39 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get DocTemplateSearchResults () : entity.DocumentTemplateSearchResults {
      return getIteratedValue(1) as entity.DocumentTemplateSearchResults
    }
    
    
  }
  
  
}