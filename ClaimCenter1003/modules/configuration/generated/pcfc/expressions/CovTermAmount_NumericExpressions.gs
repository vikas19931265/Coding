package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Numeric.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermAmount_NumericExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Numeric.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermAmountExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'format' attribute on TextCell (id=CovTermAmount_Cell) at CovTermAmount.Numeric.pcf: line 16, column 41
    function format_0 () : java.lang.String {
      return covTerm.NumericFormat
    }
    
    // 'value' attribute on TextCell (id=CovTermAmount_Cell) at CovTermAmount.Numeric.pcf: line 16, column 41
    function valueRoot_2 () : java.lang.Object {
      return (covTerm as NumericCovTerm)
    }
    
    // 'value' attribute on TextCell (id=CovTermAmount_Cell) at CovTermAmount.Numeric.pcf: line 16, column 41
    function value_1 () : java.math.BigDecimal {
      return (covTerm as NumericCovTerm).NumericValue
    }
    
    property get covTerm () : CovTerm {
      return getRequireValue("covTerm", 0) as CovTerm
    }
    
    property set covTerm ($arg :  CovTerm) {
      setRequireValue("covTerm", 0, $arg)
    }
    
    
  }
  
  
}