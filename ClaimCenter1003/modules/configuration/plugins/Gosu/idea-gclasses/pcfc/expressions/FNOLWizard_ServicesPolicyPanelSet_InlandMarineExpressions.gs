package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_ServicesPolicyPanelSet.InlandMarine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_ServicesPolicyPanelSet_InlandMarineExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_ServicesPolicyPanelSet.InlandMarine.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_ServicesPolicyPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_ServicesPolicyPanelSet.InlandMarine.pcf: line 17, column 206
    function def_onEnter_0 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.onEnter(claim, null, wizard.PropertyOtherServiceRequests, wizard.PropertyOtherServiceRequests, wizard.UnusedServiceRequests, claim.PropertyIncidentsOnly.toSet())
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_ServicesPolicyPanelSet.InlandMarine.pcf: line 17, column 206
    function def_refreshVariables_1 (def :  pcf.OtherServicesLVInputGroupInputSet) : void {
      def.refreshVariables(claim, null, wizard.PropertyOtherServiceRequests, wizard.PropertyOtherServiceRequests, wizard.UnusedServiceRequests, claim.PropertyIncidentsOnly.toSet())
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