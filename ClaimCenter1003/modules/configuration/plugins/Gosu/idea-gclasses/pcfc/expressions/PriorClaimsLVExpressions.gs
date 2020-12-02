package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/PriorClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PriorClaimsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/PriorClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PriorClaimsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PriorClaims_ClaimNumber_Cell) at PriorClaimsLV.pcf: line 22, column 25
    function action_6 () : void {
      pcf.Claim.go(PriorClaimView.Claim)
    }
    
    // 'action' attribute on TextCell (id=PriorClaims_ClaimNumber_Cell) at PriorClaimsLV.pcf: line 22, column 25
    function action_dest_7 () : pcf.api.Destination {
      return pcf.Claim.createDestination(PriorClaimView.Claim)
    }
    
    // 'value' attribute on TextCell (id=PriorClaims_ClaimNumber_Cell) at PriorClaimsLV.pcf: line 22, column 25
    function valueRoot_9 () : java.lang.Object {
      return PriorClaimView
    }
    
    // 'value' attribute on DateCell (id=PriorClaims_LossDate_Cell) at PriorClaimsLV.pcf: line 27, column 44
    function value_11 () : java.util.Date {
      return PriorClaimView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=PriorClaims_LossCause_Cell) at PriorClaimsLV.pcf: line 32, column 42
    function value_14 () : typekey.LossCause {
      return PriorClaimView.LossCause
    }
    
    // 'value' attribute on TypeKeyCell (id=PriorClaims_LossType_Cell) at PriorClaimsLV.pcf: line 37, column 41
    function value_17 () : typekey.LossType {
      return PriorClaimView.LossType
    }
    
    // 'value' attribute on CheckBoxCell (id=PriorClaims_IncidentReport_Cell) at PriorClaimsLV.pcf: line 41, column 50
    function value_20 () : java.lang.Boolean {
      return PriorClaimView.IncidentReport
    }
    
    // 'value' attribute on TextCell (id=PriorClaims_Description_Cell) at PriorClaimsLV.pcf: line 45, column 47
    function value_23 () : java.lang.String {
      return PriorClaimView.Description
    }
    
    // 'value' attribute on TextCell (id=PriorClaims_ClaimNumber_Cell) at PriorClaimsLV.pcf: line 22, column 25
    function value_8 () : java.lang.String {
      return PriorClaimView.ClaimNumber
    }
    
    property get PriorClaimView () : entity.PriorClaimView {
      return getIteratedValue(1) as entity.PriorClaimView
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/PriorClaimsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PriorClaimsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=PriorClaims_ClaimNumber_Cell) at PriorClaimsLV.pcf: line 22, column 25
    function sortValue_0 (PriorClaimView :  entity.PriorClaimView) : java.lang.Object {
      return PriorClaimView.ClaimNumber
    }
    
    // 'value' attribute on DateCell (id=PriorClaims_LossDate_Cell) at PriorClaimsLV.pcf: line 27, column 44
    function sortValue_1 (PriorClaimView :  entity.PriorClaimView) : java.lang.Object {
      return PriorClaimView.LossDate
    }
    
    // 'value' attribute on TypeKeyCell (id=PriorClaims_LossCause_Cell) at PriorClaimsLV.pcf: line 32, column 42
    function sortValue_2 (PriorClaimView :  entity.PriorClaimView) : java.lang.Object {
      return PriorClaimView.LossCause
    }
    
    // 'value' attribute on TypeKeyCell (id=PriorClaims_LossType_Cell) at PriorClaimsLV.pcf: line 37, column 41
    function sortValue_3 (PriorClaimView :  entity.PriorClaimView) : java.lang.Object {
      return PriorClaimView.LossType
    }
    
    // 'value' attribute on CheckBoxCell (id=PriorClaims_IncidentReport_Cell) at PriorClaimsLV.pcf: line 41, column 50
    function sortValue_4 (PriorClaimView :  entity.PriorClaimView) : java.lang.Object {
      return PriorClaimView.IncidentReport
    }
    
    // 'value' attribute on TextCell (id=PriorClaims_Description_Cell) at PriorClaimsLV.pcf: line 45, column 47
    function sortValue_5 (PriorClaimView :  entity.PriorClaimView) : java.lang.Object {
      return PriorClaimView.Description
    }
    
    // 'value' attribute on RowIterator at PriorClaimsLV.pcf: line 14, column 81
    function value_26 () : gw.api.database.IQueryBeanResult<entity.PriorClaimView> {
      return PriorClaimViewList
    }
    
    property get PriorClaimViewList () : gw.api.database.IQueryBeanResult<PriorClaimView> {
      return getRequireValue("PriorClaimViewList", 0) as gw.api.database.IQueryBeanResult<PriorClaimView>
    }
    
    property set PriorClaimViewList ($arg :  gw.api.database.IQueryBeanResult<PriorClaimView>) {
      setRequireValue("PriorClaimViewList", 0, $arg)
    }
    
    
  }
  
  
}