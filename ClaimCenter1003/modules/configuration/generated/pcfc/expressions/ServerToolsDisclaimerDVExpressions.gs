package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/ServerToolsDisclaimerDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ServerToolsDisclaimerDVExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/ServerToolsDisclaimerDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ServerToolsDisclaimerDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Label at ServerToolsDisclaimerDV.pcf: line 9, column 86
    function label_0 () : java.lang.String {
      return DisplayKey.get("Web.InternalTools.ServerToolsDisclaimer")
    }
    
    
  }
  
  
}