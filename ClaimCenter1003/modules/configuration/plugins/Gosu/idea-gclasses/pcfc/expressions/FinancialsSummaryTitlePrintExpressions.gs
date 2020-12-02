package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/summary/print/FinancialsSummaryTitlePrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FinancialsSummaryTitlePrintExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/summary/print/FinancialsSummaryTitlePrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummaryTitlePrintExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'parent' attribute on Page (id=FinancialsSummaryTitlePrint) at FinancialsSummaryTitlePrint.pcf: line 8, column 80
    static function parent_0 (Claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimFinancialsGroup.createDestination(Claim)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.FinancialsSummaryTitlePrint {
      return super.CurrentLocation as pcf.FinancialsSummaryTitlePrint
    }
    
    
  }
  
  
}