package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/AssociatedClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AssociatedClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/AssociatedClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AssociatedClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Association_Cell) at AssociatedClaimsLV.pcf: line 34, column 43
    function sortValue_0 (ClaimAssociation :  entity.ClaimAssociation) : java.lang.Object {
      return ClaimAssociation.Title
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AssociatedClaimsLV.pcf: line 60, column 47
    function sortValue_1 (ClaimAssociation :  entity.ClaimAssociation) : java.lang.Object {
      return ClaimAssociation.ClaimAssocType
    }
    
    // 'value' attribute on RowIterator at AssociatedClaimsLV.pcf: line 23, column 45
    function value_17 () : entity.ClaimAssociation[] {
      return ClaimAssociationList
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get ClaimAssociationList () : ClaimAssociation[] {
      return getRequireValue("ClaimAssociationList", 0) as ClaimAssociation[]
    }
    
    property set ClaimAssociationList ($arg :  ClaimAssociation[]) {
      setRequireValue("ClaimAssociationList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/AssociatedClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ClaimAssociationClaimNumber) at AssociatedClaimsLV.pcf: line 48, column 41
    function action_8 () : void {
      ClaimInfoForward.go(claimAssoc.ClaimInfo)
    }
    
    // 'action' attribute on Link (id=ClaimAssociationClaimNumber) at AssociatedClaimsLV.pcf: line 48, column 41
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ClaimInfoForward.createDestination(claimAssoc.ClaimInfo)
    }
    
    // 'label' attribute on Link (id=ClaimAssociationClaimNumber) at AssociatedClaimsLV.pcf: line 48, column 41
    function label_10 () : java.lang.Object {
      return claimAssoc.ClaimNumber
    }
    
    // 'visible' attribute on Link (id=AssociationsSeparator) at AssociatedClaimsLV.pcf: line 53, column 62
    function visible_11 () : java.lang.Boolean {
      return claimAssoc!=associatedClaims.last()
    }
    
    property get claimAssoc () : entity.ClaimInAssociation {
      return getIteratedValue(2) as entity.ClaimInAssociation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/associations/AssociatedClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AssociatedClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Association_Cell) at AssociatedClaimsLV.pcf: line 34, column 43
    function action_3 () : void {
      ClaimAssociationDetail.drilldown(Claim, ClaimAssociation)
    }
    
    // 'action' attribute on TextCell (id=Association_Cell) at AssociatedClaimsLV.pcf: line 34, column 43
    function action_dest_4 () : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'initialValue' attribute on Variable at AssociatedClaimsLV.pcf: line 27, column 45
    function initialValue_2 () : entity.ClaimInAssociation[] {
      return ClaimAssociation.ClaimsInAssoc
    }
    
    // RowIterator at AssociatedClaimsLV.pcf: line 23, column 45
    function initializeVariables_16 () : void {
        associatedClaims = ClaimAssociation.ClaimsInAssoc;

    }
    
    // 'value' attribute on TextCell (id=Association_Cell) at AssociatedClaimsLV.pcf: line 34, column 43
    function valueRoot_6 () : java.lang.Object {
      return ClaimAssociation
    }
    
    // 'value' attribute on LinkIterator (id=ClaimIterator) at AssociatedClaimsLV.pcf: line 43, column 53
    function value_12 () : entity.ClaimInAssociation[] {
      return associatedClaims
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at AssociatedClaimsLV.pcf: line 60, column 47
    function value_13 () : typekey.ClaimAssocType {
      return ClaimAssociation.ClaimAssocType
    }
    
    // 'value' attribute on TextCell (id=Association_Cell) at AssociatedClaimsLV.pcf: line 34, column 43
    function value_5 () : java.lang.String {
      return ClaimAssociation.Title
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