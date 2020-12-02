package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/SimpleClaimSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SimpleClaimSearchDVExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/SimpleClaimSearchDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SimpleClaimSearchDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 35, column 56
    function def_onEnter_12 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 35, column 56
    function def_onEnter_14 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 38, column 56
    function def_onEnter_17 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 38, column 56
    function def_onEnter_19 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 48, column 46
    function def_onEnter_26 (def :  pcf.ClaimSearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 35, column 56
    function def_refreshVariables_13 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 35, column 56
    function def_refreshVariables_15 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 38, column 56
    function def_refreshVariables_18 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 38, column 56
    function def_refreshVariables_20 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 48, column 46
    function def_refreshVariables_27 (def :  pcf.ClaimSearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at SimpleClaimSearchDV.pcf: line 17, column 50
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at SimpleClaimSearchDV.pcf: line 44, column 57
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameCriteria.TaxId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at SimpleClaimSearchDV.pcf: line 23, column 51
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=SearchFor_Input) at SimpleClaimSearchDV.pcf: line 32, column 56
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameSearchType = (__VALUE_TO_SET as typekey.ClaimSearchNameSearchType)
    }
    
    // 'mode' attribute on InputSetRef at SimpleClaimSearchDV.pcf: line 35, column 56
    function mode_16 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at SimpleClaimSearchDV.pcf: line 17, column 50
    function valueRoot_2 () : java.lang.Object {
      return ClaimSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at SimpleClaimSearchDV.pcf: line 44, column 57
    function valueRoot_24 () : java.lang.Object {
      return ClaimSearchCriteria.NameCriteria
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber_Input) at SimpleClaimSearchDV.pcf: line 17, column 50
    function value_0 () : java.lang.String {
      return ClaimSearchCriteria.ClaimNumber
    }
    
    // 'value' attribute on TextInput (id=TaxID_Input) at SimpleClaimSearchDV.pcf: line 44, column 57
    function value_22 () : java.lang.String {
      return ClaimSearchCriteria.NameCriteria.TaxId
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at SimpleClaimSearchDV.pcf: line 23, column 51
    function value_4 () : java.lang.String {
      return ClaimSearchCriteria.PolicyNumber
    }
    
    // 'value' attribute on TypeKeyInput (id=SearchFor_Input) at SimpleClaimSearchDV.pcf: line 32, column 56
    function value_8 () : typekey.ClaimSearchNameSearchType {
      return ClaimSearchCriteria.NameSearchType
    }
    
    property get ClaimSearchCriteria () : ClaimSearchCriteria {
      return getRequireValue("ClaimSearchCriteria", 0) as ClaimSearchCriteria
    }
    
    property set ClaimSearchCriteria ($arg :  ClaimSearchCriteria) {
      setRequireValue("ClaimSearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}