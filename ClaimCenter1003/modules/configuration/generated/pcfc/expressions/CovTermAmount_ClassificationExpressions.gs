package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Classification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermAmount_ClassificationExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Classification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermAmountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovTermDescription_Cell) at CovTermAmount.Classification.pcf: line 14, column 63
    function valueRoot_1 () : java.lang.Object {
      return (covTerm as ClassificationCovTerm)
    }
    
    // 'value' attribute on TextCell (id=CovTermDescription_Cell) at CovTermAmount.Classification.pcf: line 14, column 63
    function value_0 () : java.lang.String {
      return (covTerm as ClassificationCovTerm).Description
    }
    
    property get covTerm () : CovTerm {
      return getRequireValue("covTerm", 0) as CovTerm
    }
    
    property set covTerm ($arg :  CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    
  }
  
  
}