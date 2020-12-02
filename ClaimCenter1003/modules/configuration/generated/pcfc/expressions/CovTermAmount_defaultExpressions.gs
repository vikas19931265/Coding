package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermAmount_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermAmountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=CovTermDisplay_Cell) at CovTermAmount.default.pcf: line 13, column 36
    function valueRoot_1 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TextCell (id=CovTermDisplay_Cell) at CovTermAmount.default.pcf: line 13, column 36
    function value_0 () : java.lang.String {
      return covTerm.DisplayName
    }
    
    property get covTerm () : CovTerm {
      return getRequireValue("covTerm", 0) as CovTerm
    }
    
    property set covTerm ($arg :  CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    
  }
  
  
}