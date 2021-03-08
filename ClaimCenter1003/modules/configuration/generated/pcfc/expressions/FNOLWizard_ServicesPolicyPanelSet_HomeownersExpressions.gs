package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_ServicesPolicyPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_ServicesPolicyPanelSet_HomeownersExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_ServicesPolicyPanelSet.Homeowners.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_ServicesPolicyPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at FNOLWizard_ServicesPolicyPanelSet.Homeowners.pcf: line 15, column 113
    function def_onEnter_0 (def :  pcf.HomeownersPanelSet) : void {
      def.onEnter(claim, null, wizard.PropertyOtherServiceRequests, wizard.UnusedServiceRequests)
    }
    
    // 'def' attribute on PanelRef at FNOLWizard_ServicesPolicyPanelSet.Homeowners.pcf: line 15, column 113
    function def_refreshVariables_1 (def :  pcf.HomeownersPanelSet) : void {
      def.refreshVariables(claim, null, wizard.PropertyOtherServiceRequests, wizard.UnusedServiceRequests)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}