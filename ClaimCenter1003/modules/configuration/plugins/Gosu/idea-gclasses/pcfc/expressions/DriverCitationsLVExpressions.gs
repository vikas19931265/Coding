package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/DriverCitationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DriverCitationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/DriverCitationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DriverCitationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at DriverCitationsLV.pcf: line 27, column 29
    function sortValue_0 (Citation :  entity.Citation) : java.lang.Object {
      return Citation.CitationNumber
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationAuthority_Cell) at DriverCitationsLV.pcf: line 34, column 29
    function sortValue_1 (Citation :  entity.Citation) : java.lang.Object {
      return Citation.CitationAuthority
    }
    
    // 'value' attribute on TypeKeyCell (id=CitationsArray_CitationType_Cell) at DriverCitationsLV.pcf: line 42, column 29
    function sortValue_2 (Citation :  entity.Citation) : java.lang.Object {
      return Citation.CitationType
    }
    
    // 'toAdd' attribute on RowIterator at DriverCitationsLV.pcf: line 19, column 37
    function toAdd_15 (Citation :  entity.Citation) : void {
      VehicleIncident.addToCitations(Citation)
    }
    
    // 'toRemove' attribute on RowIterator at DriverCitationsLV.pcf: line 19, column 37
    function toRemove_16 (Citation :  entity.Citation) : void {
      VehicleIncident.removeFromCitations(Citation)
    }
    
    // 'value' attribute on RowIterator at DriverCitationsLV.pcf: line 19, column 37
    function value_17 () : entity.Citation[] {
      return VehicleIncident.Citations
    }
    
    property get VehicleIncident () : VehicleIncident {
      return getRequireValue("VehicleIncident", 0) as VehicleIncident
    }
    
    property set VehicleIncident ($arg :  VehicleIncident) {
      setRequireValue("VehicleIncident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/exposures/DriverCitationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DriverCitationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=CitationsArray_CitationType_Cell) at DriverCitationsLV.pcf: line 42, column 29
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Citation.CitationType = (__VALUE_TO_SET as typekey.CitationType)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at DriverCitationsLV.pcf: line 27, column 29
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Citation.CitationNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationAuthority_Cell) at DriverCitationsLV.pcf: line 34, column 29
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      Citation.CitationAuthority = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at DriverCitationsLV.pcf: line 27, column 29
    function valueRoot_5 () : java.lang.Object {
      return Citation
    }
    
    // 'value' attribute on TypeKeyCell (id=CitationsArray_CitationType_Cell) at DriverCitationsLV.pcf: line 42, column 29
    function value_11 () : typekey.CitationType {
      return Citation.CitationType
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationNumber_Cell) at DriverCitationsLV.pcf: line 27, column 29
    function value_3 () : java.lang.String {
      return Citation.CitationNumber
    }
    
    // 'value' attribute on TextCell (id=CitationsArray_CitationAuthority_Cell) at DriverCitationsLV.pcf: line 34, column 29
    function value_7 () : java.lang.String {
      return Citation.CitationAuthority
    }
    
    property get Citation () : entity.Citation {
      return getIteratedValue(1) as entity.Citation
    }
    
    
  }
  
  
}