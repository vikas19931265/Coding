package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.SIUClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimIndicatorInputSet_SIUClaimIndicatorExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.SIUClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimIndicatorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on Link (id=SIUStatusIcon) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 19, column 35
    function iconColor_2 () : gw.api.web.color.GWColor {
      return indicator.IconColor
    }
    
    // 'icon' attribute on Link (id=SIUStatusIcon) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 19, column 35
    function icon_1 () : java.lang.String {
      return indicator.Icon
    }
    
    // 'label' attribute on Link (id=SIUStatusText) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 22, column 33
    function label_3 () : java.lang.Object {
      return indicator.Text
    }
    
    // 'label' attribute on TypeKeyInput (id=SIURefer_Input) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 33, column 34
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Claim.SIUClaimIndicator.ReferSIULabel") 
    }
    
    // 'value' attribute on TypeKeyInput (id=SIURefer_Input) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 33, column 34
    function valueRoot_8 () : java.lang.Object {
      return indicator.Claim
    }
    
    // 'value' attribute on TextInput (id=SIUScore_Input) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 28, column 38
    function value_4 () : java.lang.Integer {
      return util.SIUTotalScore.getSIUTotalScore(indicator.Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=SIURefer_Input) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 33, column 34
    function value_7 () : typekey.YesNo {
      return indicator.Claim.SIEscalateSIU
    }
    
    // 'visible' attribute on Link (id=SIUStatusIcon) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 19, column 35
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