package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Financial.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermAmount_FinancialExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Financial.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermAmountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovTermAmount_Cell) at CovTermAmount.Financial.pcf: line 13, column 132
    function value_0 () : java.lang.String {
      return gw.api.util.CurrencyUtil.renderAsCurrency((covTerm as FinancialCovTerm).FinancialAmount, covTerm.Coverage.Currency)
    }
    
    property get covTerm () : CovTerm {
      return getRequireValue("covTerm", 0) as CovTerm
    }
    
    property set covTerm ($arg :  CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    
  }
  
  
}