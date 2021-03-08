package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationsSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimAssociationsSearchResultsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationsSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimAssociationsSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Association_Cell) at ClaimAssociationsSearchResultsLV.pcf: line 27, column 43
    function sortValue_0 (ClaimAssociation :  entity.ClaimAssociation) : java.lang.Object {
      return ClaimAssociation.Title
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ClaimAssociationsSearchResultsLV.pcf: line 32, column 47
    function sortValue_1 (ClaimAssociation :  entity.ClaimAssociation) : java.lang.Object {
      return ClaimAssociation.ClaimAssocType
    }
    
    // 'value' attribute on RowIterator at ClaimAssociationsSearchResultsLV.pcf: line 17, column 45
    function value_16 () : entity.ClaimAssociation[] {
      return ClaimAssociationList
    }
    
    property get ClaimAssociationList () : ClaimAssociation[] {
      return getRequireValue("ClaimAssociationList", 0) as ClaimAssociation[]
    }
    
    property set ClaimAssociationList ($arg :  ClaimAssociation[]) {
      setRequireValue("ClaimAssociationList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationsSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ClaimAssociationClaimNumber) at ClaimAssociationsSearchResultsLV.pcf: line 46, column 57
    function action_9 () : void {
      ClaimInfoForward.go(claimAssoc.ClaimInfo)
    }
    
    // 'action' attribute on Link (id=ClaimAssociationClaimNumber) at ClaimAssociationsSearchResultsLV.pcf: line 46, column 57
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ClaimInfoForward.createDestination(claimAssoc.ClaimInfo)
    }
    
    // 'label' attribute on Link (id=ClaimAssociationClaimNumber) at ClaimAssociationsSearchResultsLV.pcf: line 46, column 57
    function label_11 () : java.lang.Object {
      return claimAssoc.ClaimInfo.ClaimNumber
    }
    
    // 'visible' attribute on Link (id=AssociationsSeparator) at ClaimAssociationsSearchResultsLV.pcf: line 51, column 62
    function visible_12 () : java.lang.Boolean {
      return claimAssoc!=associatedClaims.last()
    }
    
    property get claimAssoc () : entity.ClaimInAssociation {
      return getIteratedValue(2) as entity.ClaimInAssociation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationsSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimAssociationsSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimAssociationsSearchResultsLV.pcf: line 21, column 45
    function initialValue_2 () : entity.ClaimInAssociation[] {
      return ClaimAssociation.ClaimsInAssoc
    }
    
    // RowIterator at ClaimAssociationsSearchResultsLV.pcf: line 17, column 45
    function initializeVariables_14 () : void {
        associatedClaims = ClaimAssociation.ClaimsInAssoc;

    }
    
    // 'pickValue' attribute on RowIterator at ClaimAssociationsSearchResultsLV.pcf: line 17, column 45
    function pickValue_15 () : ClaimAssociation {
      return ClaimAssociation
    }
    
    // 'value' attribute on TextCell (id=Association_Cell) at ClaimAssociationsSearchResultsLV.pcf: line 27, column 43
    function valueRoot_4 () : java.lang.Object {
      return ClaimAssociation
    }
    
    // 'value' attribute on LinkIterator (id=ClaimIterator) at ClaimAssociationsSearchResultsLV.pcf: line 41, column 53
    function value_13 () : entity.ClaimInAssociation[] {
      return associatedClaims
    }
    
    // 'value' attribute on TextCell (id=Association_Cell) at ClaimAssociationsSearchResultsLV.pcf: line 27, column 43
    function value_3 () : java.lang.String {
      return ClaimAssociation.Title
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at ClaimAssociationsSearchResultsLV.pcf: line 32, column 47
    function value_6 () : typekey.ClaimAssocType {
      return ClaimAssociation.ClaimAssocType
    }
    
    property get ClaimAssociation () : entity.ClaimAssociation {
      return getIteratedValue(1) as entity.ClaimAssociation
    }
    
    property get associatedClaims () : entity.ClaimInAssociation[] {
      return getVariableValue("associatedClaims", 1) as entity.ClaimInAssociation[]
    }
    
    property set associatedClaims ($arg :  entity.ClaimInAssociation[]) {
      setVariableValue("associatedClaims", 1, $arg)
    }
    
    
  }
  
  
}