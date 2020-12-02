package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.FatalityClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimIndicatorInputSet_FatalityClaimIndicatorExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.FatalityClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimIndicatorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=FatalityIcon) at ClaimIndicatorInputSet.FatalityClaimIndicator.pcf: line 20, column 35
    function iconColor_3 () : gw.api.web.color.GWColor {
      return indicator.IconColor
    }
    
    // 'icon' attribute on Link (id=FatalityIcon) at ClaimIndicatorInputSet.FatalityClaimIndicator.pcf: line 20, column 35
    function icon_2 () : java.lang.String {
      return indicator.Icon
    }
    
    // 'label' attribute on Link (id=FatalityText) at ClaimIndicatorInputSet.FatalityClaimIndicator.pcf: line 23, column 33
    function label_4 () : java.lang.Object {
      return indicator.Text
    }
    
    // 'tooltip' attribute on Link (id=FatalityIcon) at ClaimIndicatorInputSet.FatalityClaimIndicator.pcf: line 20, column 35
    function tooltip_1 () : java.lang.String {
      return indicator.HoverText
    }
    
    // 'visible' attribute on Link (id=FatalityIcon) at ClaimIndicatorInputSet.FatalityClaimIndicator.pcf: line 20, column 35
    function visible_0 () : java.lang.Boolean {
      return indicator.IsOn
    }
    
    property get indicator () : ClaimIndicator {
      return getRequireValue("indicator", 0) as ClaimIndicator
    }
    
    property set indicator ($arg :  ClaimIndicator) {
      setRequireValue("indicator", 0, $arg)
    }
    
    
  }
  
  
}