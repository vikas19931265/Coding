package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/entrypoints/ContactManagerStartupPageEP.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactManagerStartupPageEPEntryPointExpressions {
  @javax.annotation.Generated("config/web/pcf/entrypoints/ContactManagerStartupPageEP.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactManagerStartupPageEPExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on EntryPoint (id=ContactManagerStartupPageEP) at ContactManagerStartupPageEP.pcf: line 8, column 42
    function location_0 () : pcf.api.Destination {
      return pcf.ClaimCenterStartupPage.createDestination()
    }
    
    
  }
  
  
}