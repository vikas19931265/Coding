package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/RuleDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RuleDetailScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/RuleDetailScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RuleDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on AlertBar (id=NotLatestAlert) at RuleDetailScreen.pcf: line 48, column 55
    function action_19 () : void {
      stateHolder.SelectedVersion = stateHolder.Head.HeadVersion
    }
    
    // 'action' attribute on AlertBar (id=PendingImportAlert) at RuleDetailScreen.pcf: line 61, column 47
    function action_23 () : void {
      RuleImportDetailsPopup.push(stateHolder.NavigationSupport, stateHolder.Head.InProgressImportTaskEntry.Task, false)
    }
    
    // 'action' attribute on AlertBar (id=DuplicatedNameAlertBar) at RuleDetailScreen.pcf: line 67, column 140
    function action_26 () : void {
      stateHolder.VersionController.pushRulesWithSameNamePopup(head.HeadVersion)
    }
    
    // 'action' attribute on AlertBar (id=RuleDeletedByAnotherUserAlert) at RuleDetailScreen.pcf: line 74, column 47
    function action_28 () : void {
      context.goToRulesListPage()
    }
    
    // 'action' attribute on AlertBar (id=PendingImportAlert) at RuleDetailScreen.pcf: line 61, column 47
    function action_dest_24 () : pcf.api.Destination {
      return pcf.RuleImportDetailsPopup.createDestination(stateHolder.NavigationSupport, stateHolder.Head.InProgressImportTaskEntry.Task, false)
    }
    
    // 'available' attribute on AlertBar (id=UnavailableToRunAlert) at RuleDetailScreen.pcf: line 55, column 105
    function available_20 () : java.lang.Boolean {
      return !stateHolder.ImportInProgress and perm.Rule.edit(stateHolder.SelectedVersion.Rule)
    }
    
    // 'available' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function available_5 () : java.lang.Boolean {
      return !CurrentLocation.InEditMode
    }
    
    // 'def' attribute on PanelRef at RuleDetailScreen.pcf: line 78, column 54
    function def_onEnter_30 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.onEnter(context, stateHolder.SelectedVersion, false, stateHolder.RulePageController, stateHolder.RulePageController.Rule.RuleCondition.Type)
    }
    
    // 'def' attribute on PanelRef at RuleDetailScreen.pcf: line 78, column 54
    function def_refreshVariables_31 (def :  pcf.RuleDetailPanelSet_default) : void {
      def.refreshVariables(context, stateHolder.SelectedVersion, false, stateHolder.RulePageController, stateHolder.RulePageController.Rule.RuleCondition.Type)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      stateHolder.SelectedVersion = (__VALUE_TO_SET as entity.RuleVersion)
    }
    
    // 'mode' attribute on PanelRef at RuleDetailScreen.pcf: line 78, column 54
    function mode_32 () : java.lang.Object {
      return stateHolder.SelectedVersion.Rule.Subtype.Code
    }
    
    // 'optionLabel' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function optionLabel_10 (VALUE :  entity.RuleVersion) : java.lang.String {
      return stateHolder.formatVersion(VALUE)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RuleDetailScreen.pcf: line 18, column 75
    function toolbarButtonSet_onEnter_0 (def :  pcf.StatusTransitionToolbarButtonSet) : void {
      def.onEnter(stateHolder)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RuleDetailScreen.pcf: line 21, column 48
    function toolbarButtonSet_onEnter_3 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(stateHolder.RulePageController)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RuleDetailScreen.pcf: line 18, column 75
    function toolbarButtonSet_refreshVariables_1 (def :  pcf.StatusTransitionToolbarButtonSet) : void {
      def.refreshVariables(stateHolder)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at RuleDetailScreen.pcf: line 21, column 48
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(stateHolder.RulePageController)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function valueRange_11 () : java.lang.Object {
      return stateHolder.History
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function valueRoot_9 () : java.lang.Object {
      return stateHolder
    }
    
    // 'value' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function value_7 () : entity.RuleVersion {
      return stateHolder.SelectedVersion
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function verifyValueRangeIsAllowedType_12 ($$arg :  entity.RuleVersion[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function verifyValueRangeIsAllowedType_12 ($$arg :  gw.api.database.IQueryBeanResult<entity.RuleVersion>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function verifyValueRangeIsAllowedType_12 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=Version_Input) at RuleDetailScreen.pcf: line 33, column 47
    function verifyValueRange_13 () : void {
      var __valueRangeArg = stateHolder.History
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_12(__valueRangeArg)
    }
    
    // 'visible' attribute on AlertBar (id=RollingUpgradeAlert) at RuleDetailScreen.pcf: line 41, column 238
    function visible_17 () : java.lang.Boolean {
      return gw.bizrules.management.BizRulesRollingUpgradeManager.Instance.RollingUpgradeProcessStartedInDB and stateHolder.DeploymentEnabled and gw.bizrules.pcf.RulePermissionUIHelper.canDeployRule(stateHolder.getSelectedVersion())
    }
    
    // 'visible' attribute on AlertBar (id=NotLatestAlert) at RuleDetailScreen.pcf: line 48, column 55
    function visible_18 () : java.lang.Boolean {
      return stateHolder.NotLatestVersionSelected
    }
    
    // 'visible' attribute on ToolbarButtonSetRef at RuleDetailScreen.pcf: line 21, column 48
    function visible_2 () : java.lang.Boolean {
      return stateHolder.doesHeadExist()
    }
    
    // 'visible' attribute on AlertBar (id=UnavailableToRunAlert) at RuleDetailScreen.pcf: line 55, column 105
    function visible_21 () : java.lang.Boolean {
      return stateHolder.LatestVersionSelected and !stateHolder.SelectedVersion.Rule.AvailableToRun
    }
    
    // 'visible' attribute on AlertBar (id=PendingImportAlert) at RuleDetailScreen.pcf: line 61, column 47
    function visible_22 () : java.lang.Boolean {
      return stateHolder.ImportInProgress
    }
    
    // 'visible' attribute on AlertBar (id=DuplicatedNameAlertBar) at RuleDetailScreen.pcf: line 67, column 140
    function visible_25 () : java.lang.Boolean {
      return stateHolder.LatestVersionSelected && !stateHolder.VersionController.isRuleNameUnique(stateHolder.SelectedVersion)
    }
    
    // 'visible' attribute on AlertBar (id=RuleDeletedByAnotherUserAlert) at RuleDetailScreen.pcf: line 74, column 47
    function visible_27 () : java.lang.Boolean {
      return !stateHolder.doesHeadExist()
    }
    
    // 'visible' attribute on PanelRef at RuleDetailScreen.pcf: line 78, column 54
    function visible_29 () : java.lang.Boolean {
      return stateHolder.SelectedVersion != null
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getRequireValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setRequireValue("context", 0, $arg)
    }
    
    property get head () : RuleHead {
      return getRequireValue("head", 0) as RuleHead
    }
    
    property set head ($arg :  RuleHead) {
      setRequireValue("head", 0, $arg)
    }
    
    property get stateHolder () : gw.bizrules.CCRulesDetailsStateHolder {
      return getRequireValue("stateHolder", 0) as gw.bizrules.CCRulesDetailsStateHolder
    }
    
    property set stateHolder ($arg :  gw.bizrules.CCRulesDetailsStateHolder) {
      setRequireValue("stateHolder", 0, $arg)
    }
    
    
  }
  
  
}