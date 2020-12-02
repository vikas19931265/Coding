package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_ServicesScreen.Pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_ServicesScreen_PrExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_ServicesScreen.Pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_ServicesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_onEnter_0 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_CommercialPackage) : void {
      def.onEnter(claim, wizard)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_onEnter_2 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_CommercialProperty) : void {
      def.onEnter(claim, wizard)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_onEnter_4 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_Homeowners) : void {
      def.onEnter(claim, wizard)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_onEnter_6 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_InlandMarine) : void {
      def.onEnter(claim, wizard)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_refreshVariables_1 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_CommercialPackage) : void {
      def.refreshVariables(claim, wizard)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_refreshVariables_3 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_CommercialProperty) : void {
      def.refreshVariables(claim, wizard)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_refreshVariables_5 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_Homeowners) : void {
      def.refreshVariables(claim, wizard)
    }
    
    // 'def' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function def_refreshVariables_7 (def :  pcf.FNOLWizard_ServicesPolicyPanelSet_InlandMarine) : void {
      def.refreshVariables(claim, wizard)
    }
    
    // 'mode' attribute on PanelRef (id=PolicyPanelSet) at FNOLWizard_ServicesScreen.Pr.pcf: line 28, column 74
    function mode_8 () : java.lang.Object {
      return gw.config.LOBAbstraction.ForPolicy.getUIMode(claim.Policy)
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