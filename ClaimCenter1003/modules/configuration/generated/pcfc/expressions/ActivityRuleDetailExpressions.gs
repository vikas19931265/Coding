package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/ActivityRuleDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityRuleDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/ActivityRules/ActivityRuleDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityRuleDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (context :  gw.bizrules.ActivityRules.ActivityRulesNavigationContext, version :  RuleVersion) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=ActivityRuleDetail) at ActivityRuleDetail.pcf: line 13, column 80
    function afterCancel_4 () : void {
      stateHolder.afterCancel()
    }
    
    // 'beforeCommit' attribute on Page (id=ActivityRuleDetail) at ActivityRuleDetail.pcf: line 13, column 80
    function beforeCommit_5 (pickedValue :  java.lang.Object) : void {
      stateHolder.beforeUpdate()
    }
    
    // 'def' attribute on ScreenRef at ActivityRuleDetail.pcf: line 31, column 59
    function def_onEnter_2 (def :  pcf.RuleDetailScreen) : void {
      def.onEnter(context, stateHolder, head)
    }
    
    // 'def' attribute on ScreenRef at ActivityRuleDetail.pcf: line 31, column 59
    function def_refreshVariables_3 (def :  pcf.RuleDetailScreen) : void {
      def.refreshVariables(context, stateHolder, head)
    }
    
    // 'infoBar' attribute on Page (id=ActivityRuleDetail) at ActivityRuleDetail.pcf: line 13, column 80
    function infoBar_onEnter_6 (def :  pcf.RuleExecutionInfoBar_default) : void {
      def.onEnter(stateHolder.Head, stateHolder.ExecutionStatus, stateHolder.NavigationSupport.VersionController)
    }
    
    // 'infoBar' attribute on Page (id=ActivityRuleDetail) at ActivityRuleDetail.pcf: line 13, column 80
    function infoBar_refreshVariables_7 (def :  pcf.RuleExecutionInfoBar_default) : void {
      def.refreshVariables(stateHolder.Head, stateHolder.ExecutionStatus, stateHolder.NavigationSupport.VersionController)
    }
    
    // 'initialValue' attribute on Variable at ActivityRuleDetail.pcf: line 25, column 24
    function initialValue_0 () : RuleHead {
      return gw.cc.bizrules.CCRulesUtil.VersionController.getRuleHead(version)
    }
    
    // 'initialValue' attribute on Variable at ActivityRuleDetail.pcf: line 29, column 53
    function initialValue_1 () : gw.bizrules.CCRulesDetailsStateHolder {
      return new gw.bizrules.CCRulesDetailsStateHolder(context, head, CurrentLocation)
    }
    
    // 'parent' attribute on Page (id=ActivityRuleDetail) at ActivityRuleDetail.pcf: line 13, column 80
    static function parent_8 (context :  gw.bizrules.ActivityRules.ActivityRulesNavigationContext, version :  RuleVersion) : pcf.api.Destination {
      return pcf.ActivityRules.createDestination()
    }
    
    // 'title' attribute on Page (id=ActivityRuleDetail) at ActivityRuleDetail.pcf: line 13, column 80
    static function title_9 (context :  gw.bizrules.ActivityRules.ActivityRulesNavigationContext, version :  RuleVersion) : java.lang.Object {
      return DisplayKey.get('Web.BizRules.Rule.Title', version.Rule.Name ?: '')
    }
    
    override property get CurrentLocation () : pcf.ActivityRuleDetail {
      return super.CurrentLocation as pcf.ActivityRuleDetail
    }
    
    property get context () : gw.bizrules.ActivityRules.ActivityRulesNavigationContext {
      return getVariableValue("context", 0) as gw.bizrules.ActivityRules.ActivityRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.ActivityRules.ActivityRulesNavigationContext) {
      setVariableValue("context", 0, $arg)
    }
    
    property get head () : RuleHead {
      return getVariableValue("head", 0) as RuleHead
    }
    
    property set head ($arg :  RuleHead) {
      setVariableValue("head", 0, $arg)
    }
    
    property get stateHolder () : gw.bizrules.CCRulesDetailsStateHolder {
      return getVariableValue("stateHolder", 0) as gw.bizrules.CCRulesDetailsStateHolder
    }
    
    property set stateHolder ($arg :  gw.bizrules.CCRulesDetailsStateHolder) {
      setVariableValue("stateHolder", 0, $arg)
    }
    
    property get version () : RuleVersion {
      return getVariableValue("version", 0) as RuleVersion
    }
    
    property set version ($arg :  RuleVersion) {
      setVariableValue("version", 0, $arg)
    }
    
    
  }
  
  
}