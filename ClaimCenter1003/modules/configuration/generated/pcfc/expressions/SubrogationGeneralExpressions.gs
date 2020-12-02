package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationGeneral.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubrogationGeneralExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationGeneral.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubrogationGeneralExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    static function __constructorIndex (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : int {
      return 1
    }
    
    // 'canEdit' attribute on Page (id=SubrogationGeneral) at SubrogationGeneral.pcf: line 10, column 33
    function canEdit_2 () : java.lang.Boolean {
      return perm.Claim.edit(Claim)and perm.System.editsubrodetails
    }
    
    // 'canVisit' attribute on Page (id=SubrogationGeneral) at SubrogationGeneral.pcf: line 10, column 33
    static function canVisit_3 (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.System.viewsubrodetails
    }
    
    // 'def' attribute on PanelRef at SubrogationGeneral.pcf: line 24, column 80
    function def_onEnter_0 (def :  pcf.SubrogationMainPanelSet) : void {
      def.onEnter(Claim, selectSubrogationFinancialsCard)
    }
    
    // 'def' attribute on PanelRef at SubrogationGeneral.pcf: line 24, column 80
    function def_refreshVariables_1 (def :  pcf.SubrogationMainPanelSet) : void {
      def.refreshVariables(Claim, selectSubrogationFinancialsCard)
    }
    
    // Page (id=SubrogationGeneral) at SubrogationGeneral.pcf: line 10, column 33
    static function parent_4 (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : pcf.api.Destination {
      return pcf.ClaimSubrogationGroup.createDestination(Claim)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.SubrogationGeneral {
      return super.CurrentLocation as pcf.SubrogationGeneral
    }
    
    property get selectSubrogationFinancialsCard () : boolean {
      return getVariableValue("selectSubrogationFinancialsCard", 0) as java.lang.Boolean
    }
    
    property set selectSubrogationFinancialsCard ($arg :  boolean) {
      setVariableValue("selectSubrogationFinancialsCard", 0, $arg)
    }
    
    
  }
  
  
}