package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSummaryMattersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSummaryMattersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSummaryMattersLV.pcf: line 27, column 32
    function sortValue_0 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.Name
    }
    
    // 'value' attribute on TextCell (id=CaseNumber_Cell) at ClaimSummaryMattersLV.pcf: line 33, column 25
    function sortValue_1 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.CaseNumber
    }
    
    // 'value' attribute on CurrencyCell (id=EstSettleCost_Cell) at ClaimSummaryMattersLV.pcf: line 39, column 25
    function sortValue_2 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.FinalSettleCost
    }
    
    // 'value' attribute on DateCell (id=TrialDate_Cell) at ClaimSummaryMattersLV.pcf: line 47, column 25
    function sortValue_3 (Matter :  entity.Matter) : java.lang.Object {
      return Matter.TrialDate
    }
    
    // 'value' attribute on RowIterator at ClaimSummaryMattersLV.pcf: line 19, column 35
    function value_20 () : entity.Matter[] {
      return MatterList
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get MatterList () : Matter[] {
      return getRequireValue("MatterList", 0) as Matter[]
    }
    
    property set MatterList ($arg :  Matter[]) {
      setRequireValue("MatterList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummaryMattersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSummaryMattersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at ClaimSummaryMattersLV.pcf: line 27, column 32
    function action_4 () : void {
      MatterDetailForward.drilldown(Claim, Matter)
    }
    
    // 'action' attribute on TextCell (id=CaseNumber_Cell) at ClaimSummaryMattersLV.pcf: line 33, column 25
    function action_9 () : void {
      MatterDetailForward.drilldown(Claim, Matter)
    }
    
    // 'action' attribute on TextCell (id=CaseNumber_Cell) at ClaimSummaryMattersLV.pcf: line 33, column 25
    function action_dest_10 () : pcf.api.Destination {
      return pcf.MatterDetailForward.createDestination(Claim, Matter)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at ClaimSummaryMattersLV.pcf: line 27, column 32
    function action_dest_5 () : pcf.api.Destination {
      return pcf.MatterDetailForward.createDestination(Claim, Matter)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSummaryMattersLV.pcf: line 27, column 32
    function valueRoot_7 () : java.lang.Object {
      return Matter
    }
    
    // 'value' attribute on TextCell (id=CaseNumber_Cell) at ClaimSummaryMattersLV.pcf: line 33, column 25
    function value_11 () : java.lang.String {
      return Matter.CaseNumber
    }
    
    // 'value' attribute on CurrencyCell (id=EstSettleCost_Cell) at ClaimSummaryMattersLV.pcf: line 39, column 25
    function value_14 () : gw.api.financials.CurrencyAmount {
      return Matter.FinalSettleCost
    }
    
    // 'value' attribute on DateCell (id=TrialDate_Cell) at ClaimSummaryMattersLV.pcf: line 47, column 25
    function value_17 () : java.util.Date {
      return Matter.TrialDate
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at ClaimSummaryMattersLV.pcf: line 27, column 32
    function value_6 () : java.lang.String {
      return Matter.Name
    }
    
    property get Matter () : entity.Matter {
      return getIteratedValue(1) as entity.Matter
    }
    
    
  }
  
  
}