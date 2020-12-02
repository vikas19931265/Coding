package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CCRulesListScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CCRulesListScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRulesListScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CCRulesListScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ExportToCsv) at CCRulesListScreen.pcf: line 50, column 78
    function action_10 () : void {
      gw.bizrules.csv.CsvFileDownloaderFactory.downloaderFor(context.RuleType).download()
    }
    
    // 'action' attribute on ToolbarButton (id=ShowHideFilter) at CCRulesListScreen.pcf: line 70, column 221
    function action_18 () : void {
      areSearchFieldsVisible = !areSearchFieldsVisible
    }
    
    // 'action' attribute on AlertBar (id=PendingImportAlert) at CCRulesListScreen.pcf: line 86, column 103
    function action_24 () : void {
      CCRulesExportImportStatus.go()
    }
    
    // 'action' attribute on AlertBar (id=ValidationProgressAlert) at CCRulesListScreen.pcf: line 92, column 81
    function action_27 () : void {
      
    }
    
    // 'action' attribute on AlertBar (id=ValidationProcessFailedAlert) at CCRulesListScreen.pcf: line 98, column 82
    function action_30 () : void {
      gw.bizrules.validator.ValidateAllWorkQueueUtil.startValidationProcess()
    }
    
    // 'action' attribute on MenuItem (id=ImportFromCsv) at CCRulesListScreen.pcf: line 45, column 80
    function action_8 () : void {
      StartRuleCsvImportPopup.push(context, pageHelper)
    }
    
    // 'action' attribute on AlertBar (id=PendingImportAlert) at CCRulesListScreen.pcf: line 86, column 103
    function action_dest_25 () : pcf.api.Destination {
      return pcf.CCRulesExportImportStatus.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=ImportFromCsv) at CCRulesListScreen.pcf: line 45, column 80
    function action_dest_9 () : pcf.api.Destination {
      return pcf.StartRuleCsvImportPopup.createDestination(context, pageHelper)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ExportSelectedToCsv) at CCRulesListScreen.pcf: line 59, column 151
    function allCheckedRowsAction_15 (CheckedValues :  entity.RuleVersion[], CheckedValuesErrors :  java.util.Map) : void {
      gw.bizrules.csv.CsvFileDownloaderFactory.downloaderFor(context.RuleType).download(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=BulkEdit) at CCRulesListScreen.pcf: line 41, column 151
    function available_11 () : java.lang.Boolean {
      return pageHelper.CsvButtonsAvailable
    }
    
    // 'def' attribute on MenuItemSetRef at CCRulesListScreen.pcf: line 65, column 192
    function def_onEnter_16 (def :  pcf.RuleListMoreButtonMenuItemSet) : void {
      def.onEnter(context, checkedValuesRuleVersionsAccessor, filterCriteria.Status?.createVersionQuery(filterCriteria), ruleType, pageHelper, context.UIConfigs)
    }
    
    // 'def' attribute on MenuItemSetRef at CCRulesListScreen.pcf: line 65, column 192
    function def_refreshVariables_17 (def :  pcf.RuleListMoreButtonMenuItemSet) : void {
      def.refreshVariables(context, checkedValuesRuleVersionsAccessor, filterCriteria.Status?.createVersionQuery(filterCriteria), ruleType, pageHelper, context.UIConfigs)
    }
    
    // 'initialValue' attribute on Variable at CCRulesListScreen.pcf: line 13, column 49
    function initialValue_0 () : gw.bizrules.CCRulesListPageHelper {
      return context.PageHelper
    }
    
    // 'initialValue' attribute on Variable at CCRulesListScreen.pcf: line 21, column 48
    function initialValue_1 () : gw.bizrules.CCRuleFilterCriteria {
      return context.RuleFilterCriteria
    }
    
    // 'initialValue' attribute on Variable at CCRulesListScreen.pcf: line 25, column 47
    function initialValue_2 () : gw.bizrules.CCRuleTypeReference {
      return pageHelper.RuleTypeReference
    }
    
    // 'initialValue' attribute on Variable at CCRulesListScreen.pcf: line 29, column 91
    function initialValue_3 () : gw.bizrules.pcf.RuleListPageHelper.IteratorCheckedValuesRuleVersionAccessor {
      return pageHelper.getCheckedValuesRuleVersionsAccessor(CurrentLocation, "Rules")
    }
    
    // 'label' attribute on ToolbarButton (id=ShowHideFilter) at CCRulesListScreen.pcf: line 70, column 221
    function label_19 () : java.lang.Object {
      return areSearchFieldsVisible ? DisplayKey.get('Web.BizRules.Filter.HideFilter') : filterCriteria.Specified ? DisplayKey.get('Web.BizRules.Filter.EditFilter') : DisplayKey.get('Web.BizRules.Filter.ShowFilter')
    }
    
    // 'label' attribute on AlertBar (id=ValidationProgressAlert) at CCRulesListScreen.pcf: line 92, column 81
    function label_28 () : java.lang.Object {
      return DisplayKey.get('BizRules.ValidateAll.Pending', gw.bizrules.validator.ValidateAllWorkQueueUtil.CountWorkItemsPending)
    }
    
    // 'label' attribute on AlertBar (id=ValidationProcessFailedAlert) at CCRulesListScreen.pcf: line 98, column 82
    function label_31 () : java.lang.Object {
      return DisplayKey.get('BizRules.ValidateAll.Failed', gw.bizrules.validator.ValidateAllWorkQueueUtil.getLastRunFailureReason())
    }
    
    // 'label' attribute on AlertBar (id=CCSelectedRulesAlertBar) at CCRulesListScreen.pcf: line 103, column 83
    function label_33 () : java.lang.Object {
      return gw.bizrules.pcf.SelectedRulesWarningHelper.WarningMessage
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRulesListScreen.pcf: line 33, column 110
    function toolbarButtonSet_onEnter_4 (def :  pcf.CreateRuleToolbarButtonSet) : void {
      def.onEnter(context, checkedValuesRuleVersionsAccessor, ruleType)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRulesListScreen.pcf: line 36, column 182
    function toolbarButtonSet_onEnter_6 (def :  pcf.DeployRulesToolbarButtonSet) : void {
      def.onEnter(context, checkedValuesRuleVersionsAccessor, filterCriteria.Status?.createVersionQuery(filterCriteria), ruleType, pageHelper)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRulesListScreen.pcf: line 33, column 110
    function toolbarButtonSet_refreshVariables_5 (def :  pcf.CreateRuleToolbarButtonSet) : void {
      def.refreshVariables(context, checkedValuesRuleVersionsAccessor, ruleType)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at CCRulesListScreen.pcf: line 36, column 182
    function toolbarButtonSet_refreshVariables_7 (def :  pcf.DeployRulesToolbarButtonSet) : void {
      def.refreshVariables(context, checkedValuesRuleVersionsAccessor, filterCriteria.Status?.createVersionQuery(filterCriteria), ruleType, pageHelper)
    }
    
    // 'value' attribute on TextValue (id=ValidationStatusToolbarInput) at CCRulesListScreen.pcf: line 74, column 39
    function value_20 () : java.lang.String {
      return pageHelper.getTotalFilteredCountMessage(filterCriteria.Status?.createVersionQuery(filterCriteria), filterCriteria.Specified)
    }
    
    // 'visible' attribute on ToolbarButton (id=BulkEdit) at CCRulesListScreen.pcf: line 41, column 151
    function visible_12 () : java.lang.Boolean {
      return context.RuleType == typekey.Rule.TC_RESERVERULE and not gw.bizrules.system.BizRulesConfigParameters.BizRulesDeploymentEnabled.Value
    }
    
    // 'visible' attribute on AlertBar (id=RollingUpgradeAlert) at CCRulesListScreen.pcf: line 80, column 237
    function visible_22 () : java.lang.Boolean {
      return gw.bizrules.management.BizRulesRollingUpgradeManager.Instance.RollingUpgradeProcessStartedInDB and pageHelper.VersionController.DeploymentEnabled and gw.bizrules.pcf.RulePermissionUIHelper.canDeployRule(ruleType.get())
    }
    
    // 'visible' attribute on AlertBar (id=PendingImportAlert) at CCRulesListScreen.pcf: line 86, column 103
    function visible_23 () : java.lang.Boolean {
      return pageHelper.VersionController.ExportImportController.doesPendingImportExist(ruleType)
    }
    
    // 'visible' attribute on AlertBar (id=ValidationProgressAlert) at CCRulesListScreen.pcf: line 92, column 81
    function visible_26 () : java.lang.Boolean {
      return gw.bizrules.validator.ValidateAllWorkQueueUtil.isWorkPending()
    }
    
    // 'visible' attribute on AlertBar (id=ValidationProcessFailedAlert) at CCRulesListScreen.pcf: line 98, column 82
    function visible_29 () : java.lang.Boolean {
      return gw.bizrules.validator.ValidateAllWorkQueueUtil.didLastRunFail()
    }
    
    // 'visible' attribute on AlertBar (id=CCSelectedRulesAlertBar) at CCRulesListScreen.pcf: line 103, column 83
    function visible_32 () : java.lang.Boolean {
      return gw.bizrules.pcf.SelectedRulesWarningHelper.showWarningAlertBar()
    }
    
    property get areSearchFieldsVisible () : Boolean {
      return getVariableValue("areSearchFieldsVisible", 0) as Boolean
    }
    
    property set areSearchFieldsVisible ($arg :  Boolean) {
      setVariableValue("areSearchFieldsVisible", 0, $arg)
    }
    
    property get checkedValuesRuleVersionsAccessor () : gw.bizrules.pcf.RuleListPageHelper.IteratorCheckedValuesRuleVersionAccessor {
      return getVariableValue("checkedValuesRuleVersionsAccessor", 0) as gw.bizrules.pcf.RuleListPageHelper.IteratorCheckedValuesRuleVersionAccessor
    }
    
    property set checkedValuesRuleVersionsAccessor ($arg :  gw.bizrules.pcf.RuleListPageHelper.IteratorCheckedValuesRuleVersionAccessor) {
      setVariableValue("checkedValuesRuleVersionsAccessor", 0, $arg)
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getRequireValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setRequireValue("context", 0, $arg)
    }
    
    property get filterCriteria () : gw.bizrules.CCRuleFilterCriteria {
      return getVariableValue("filterCriteria", 0) as gw.bizrules.CCRuleFilterCriteria
    }
    
    property set filterCriteria ($arg :  gw.bizrules.CCRuleFilterCriteria) {
      setVariableValue("filterCriteria", 0, $arg)
    }
    
    property get pageHelper () : gw.bizrules.CCRulesListPageHelper {
      return getVariableValue("pageHelper", 0) as gw.bizrules.CCRulesListPageHelper
    }
    
    property set pageHelper ($arg :  gw.bizrules.CCRulesListPageHelper) {
      setVariableValue("pageHelper", 0, $arg)
    }
    
    property get ruleType () : gw.bizrules.CCRuleTypeReference {
      return getVariableValue("ruleType", 0) as gw.bizrules.CCRuleTypeReference
    }
    
    property set ruleType ($arg :  gw.bizrules.CCRuleTypeReference) {
      setVariableValue("ruleType", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRulesListScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SearchPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at CCRulesListScreen.pcf: line 164, column 44
    function action_67 () : void {
      context.goToRuleDetailPage(version)
    }
    
    // 'condition' attribute on ToolbarFlag at CCRulesListScreen.pcf: line 145, column 71
    function condition_62 () : java.lang.Boolean {
      return version.Rule.AvailableToRun
    }
    
    // 'condition' attribute on ToolbarFlag at CCRulesListScreen.pcf: line 147, column 73
    function condition_63 () : java.lang.Boolean {
      return !version.Rule.AvailableToRun
    }
    
    // 'condition' attribute on ToolbarFlag at CCRulesListScreen.pcf: line 150, column 32
    function condition_64 () : java.lang.Boolean {
      return perm.Rule.edit(version.Rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleExecutionInfo) at CCRulesListScreen.pcf: line 157, column 45
    function def_onEnter_65 (def :  pcf.RuleExecutionInfoCell_default) : void {
      def.onEnter(version, pageHelper.VersionController)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at CCRulesListScreen.pcf: line 181, column 45
    function def_onEnter_75 (def :  pcf.RuleValidationInfoCell_default) : void {
      def.onEnter(version.Rule)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleExecutionInfo) at CCRulesListScreen.pcf: line 157, column 45
    function def_refreshVariables_66 (def :  pcf.RuleExecutionInfoCell_default) : void {
      def.refreshVariables(version, pageHelper.VersionController)
    }
    
    // 'def' attribute on ModalCellRef (id=RuleValidationInfo) at CCRulesListScreen.pcf: line 181, column 45
    function def_refreshVariables_76 (def :  pcf.RuleValidationInfoCell_default) : void {
      def.refreshVariables(version.Rule)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CCRulesListScreen.pcf: line 164, column 44
    function valueRoot_69 () : java.lang.Object {
      return version.Rule
    }
    
    // 'value' attribute on TextAreaCell (id=ClaimSegments_Cell) at CCRulesListScreen.pcf: line 243, column 57
    function value_102 () : java.lang.String {
      return pageHelper.getClaimSegmentsColumn(version)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CCRulesListScreen.pcf: line 164, column 44
    function value_68 () : java.lang.String {
      return version.Rule.Name
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CCRulesListScreen.pcf: line 170, column 60
    function value_71 () : java.lang.String {
      return pageHelper.getStatusText(version)
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at CCRulesListScreen.pcf: line 175, column 61
    function value_73 () : java.lang.String {
      return pageHelper.getVersionText(version)
    }
    
    // 'value' attribute on TypeKeyCell (id=Context_Cell) at CCRulesListScreen.pcf: line 187, column 63
    function value_77 () : typekey.RuleContextDefinitionKey {
      return version.Rule.RuleContextDefinitionKey
    }
    
    // 'value' attribute on TypeKeyCell (id=Trigger_Cell) at CCRulesListScreen.pcf: line 193, column 57
    function value_80 () : typekey.TriggeringPointKey {
      return version.Rule.TriggeringPointKey
    }
    
    // 'value' attribute on TextCell (id=ActionType_Cell) at CCRulesListScreen.pcf: line 200, column 54
    function value_83 () : java.lang.String {
      return pageHelper.getActionTypeColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=LossTypes_Cell) at CCRulesListScreen.pcf: line 207, column 53
    function value_86 () : java.lang.String {
      return pageHelper.getLossTypesColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=PolicyTypes_Cell) at CCRulesListScreen.pcf: line 213, column 67
    function value_89 () : java.lang.String {
      return pageHelper.getPolicyTypesColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=IncidentType_Cell) at CCRulesListScreen.pcf: line 219, column 57
    function value_91 () : java.lang.String {
      return pageHelper.getIncidentTypeColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=LossPartyType_Cell) at CCRulesListScreen.pcf: line 225, column 58
    function value_94 () : java.lang.String {
      return pageHelper.getLossPartyTypeColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=Jurisdictions_Cell) at CCRulesListScreen.pcf: line 231, column 69
    function value_97 () : java.lang.String {
      return pageHelper.getJurisdictionsColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=ExposureTypes_Cell) at CCRulesListScreen.pcf: line 237, column 57
    function value_99 () : java.lang.String {
      return pageHelper.getExposureTypesColumn(version)
    }
    
    // 'visible' attribute on TextAreaCell (id=ExposureTypes_Cell) at CCRulesListScreen.pcf: line 237, column 57
    function visible_100 () : java.lang.Boolean {
      return pageHelper.ShowExposureTypes
    }
    
    // 'visible' attribute on TextAreaCell (id=ClaimSegments_Cell) at CCRulesListScreen.pcf: line 243, column 57
    function visible_103 () : java.lang.Boolean {
      return pageHelper.ShowClaimSegments
    }
    
    // 'visible' attribute on TextCell (id=ActionType_Cell) at CCRulesListScreen.pcf: line 200, column 54
    function visible_84 () : java.lang.Boolean {
      return pageHelper.ShowActionType
    }
    
    // 'visible' attribute on TextAreaCell (id=LossTypes_Cell) at CCRulesListScreen.pcf: line 207, column 53
    function visible_87 () : java.lang.Boolean {
      return pageHelper.ShowLossTypes
    }
    
    // 'visible' attribute on TextAreaCell (id=IncidentType_Cell) at CCRulesListScreen.pcf: line 219, column 57
    function visible_92 () : java.lang.Boolean {
      return pageHelper.ShowIncidentTypes
    }
    
    // 'visible' attribute on TextAreaCell (id=LossPartyType_Cell) at CCRulesListScreen.pcf: line 225, column 58
    function visible_95 () : java.lang.Boolean {
      return pageHelper.ShowLossPartyTypes
    }
    
    property get version () : entity.RuleVersion {
      return getIteratedValue(2) as entity.RuleVersion
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/CCRulesListScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends CCRulesListScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Filter) at CCRulesListScreen.pcf: line 125, column 47
    function action_43 () : void {
      gw.api.util.SearchUtil.search()
    }
    
    // 'action' attribute on ToolbarButton (id=Clear) at CCRulesListScreen.pcf: line 130, column 47
    function action_45 () : void {
      filterCriteria.clear(); gw.api.util.SearchUtil.search()
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function def_onEnter_35 (def :  pcf.RuleFilterCriteriaDV_ActivityRule) : void {
      def.onEnter(filterCriteria)
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function def_onEnter_37 (def :  pcf.RuleFilterCriteriaDV_ExposureRule) : void {
      def.onEnter(filterCriteria)
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function def_onEnter_39 (def :  pcf.RuleFilterCriteriaDV_ReserveRule) : void {
      def.onEnter(filterCriteria)
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function def_refreshVariables_36 (def :  pcf.RuleFilterCriteriaDV_ActivityRule) : void {
      def.refreshVariables(filterCriteria)
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function def_refreshVariables_38 (def :  pcf.RuleFilterCriteriaDV_ExposureRule) : void {
      def.refreshVariables(filterCriteria)
    }
    
    // 'def' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function def_refreshVariables_40 (def :  pcf.RuleFilterCriteriaDV_ReserveRule) : void {
      def.refreshVariables(filterCriteria)
    }
    
    // 'mode' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function mode_41 () : java.lang.Object {
      return pageHelper.RuleType.EntityType.RelativeName
    }
    
    // 'searchCriteria' attribute on SearchPanel at CCRulesListScreen.pcf: line 112, column 79
    function searchCriteria_107 () : gw.bizrules.CCRuleFilterCriteria {
      return filterCriteria
    }
    
    // 'search' attribute on SearchPanel at CCRulesListScreen.pcf: line 112, column 79
    function search_106 () : java.lang.Object {
      return filterCriteria.Status?.createVersionQuery(filterCriteria).select()
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at CCRulesListScreen.pcf: line 164, column 44
    function sortValue_47 (version :  entity.RuleVersion) : java.lang.Object {
      return version.Rule.Name
    }
    
    // 'sortBy' attribute on TextCell (id=Status_Cell) at CCRulesListScreen.pcf: line 170, column 60
    function sortValue_48 (version :  entity.RuleVersion) : java.lang.Object {
      return version.Status
    }
    
    // 'value' attribute on TextCell (id=Version_Cell) at CCRulesListScreen.pcf: line 175, column 61
    function sortValue_49 (version :  entity.RuleVersion) : java.lang.Object {
      return pageHelper.getVersionText(version)
    }
    
    // 'value' attribute on TypeKeyCell (id=Context_Cell) at CCRulesListScreen.pcf: line 187, column 63
    function sortValue_50 (version :  entity.RuleVersion) : java.lang.Object {
      return version.Rule.RuleContextDefinitionKey
    }
    
    // 'value' attribute on TypeKeyCell (id=Trigger_Cell) at CCRulesListScreen.pcf: line 193, column 57
    function sortValue_51 (version :  entity.RuleVersion) : java.lang.Object {
      return version.Rule.TriggeringPointKey
    }
    
    // 'value' attribute on TextAreaCell (id=IncidentType_Cell) at CCRulesListScreen.pcf: line 219, column 57
    function sortValue_54 (version :  entity.RuleVersion) : java.lang.Object {
      return pageHelper.getIncidentTypeColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=LossPartyType_Cell) at CCRulesListScreen.pcf: line 225, column 58
    function sortValue_56 (version :  entity.RuleVersion) : java.lang.Object {
      return pageHelper.getLossPartyTypeColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=ExposureTypes_Cell) at CCRulesListScreen.pcf: line 237, column 57
    function sortValue_58 (version :  entity.RuleVersion) : java.lang.Object {
      return pageHelper.getExposureTypesColumn(version)
    }
    
    // 'value' attribute on TextAreaCell (id=ClaimSegments_Cell) at CCRulesListScreen.pcf: line 243, column 57
    function sortValue_60 (version :  entity.RuleVersion) : java.lang.Object {
      return pageHelper.getClaimSegmentsColumn(version)
    }
    
    // 'value' attribute on RowIterator (id=Rules) at CCRulesListScreen.pcf: line 141, column 77
    function value_105 () : gw.api.database.IQueryBeanResult<RuleVersion> {
      return results
    }
    
    // 'visible' attribute on PanelRef (id=SearchCriteriaPanelRef) at CCRulesListScreen.pcf: line 117, column 43
    function visible_34 () : java.lang.Boolean {
      return areSearchFieldsVisible
    }
    
    // 'visible' attribute on TextCell (id=ActionType_Cell) at CCRulesListScreen.pcf: line 200, column 54
    function visible_52 () : java.lang.Boolean {
      return pageHelper.ShowActionType
    }
    
    // 'visible' attribute on TextAreaCell (id=LossTypes_Cell) at CCRulesListScreen.pcf: line 207, column 53
    function visible_53 () : java.lang.Boolean {
      return pageHelper.ShowLossTypes
    }
    
    // 'visible' attribute on TextAreaCell (id=IncidentType_Cell) at CCRulesListScreen.pcf: line 219, column 57
    function visible_55 () : java.lang.Boolean {
      return pageHelper.ShowIncidentTypes
    }
    
    // 'visible' attribute on TextAreaCell (id=LossPartyType_Cell) at CCRulesListScreen.pcf: line 225, column 58
    function visible_57 () : java.lang.Boolean {
      return pageHelper.ShowLossPartyTypes
    }
    
    // 'visible' attribute on TextAreaCell (id=ExposureTypes_Cell) at CCRulesListScreen.pcf: line 237, column 57
    function visible_59 () : java.lang.Boolean {
      return pageHelper.ShowExposureTypes
    }
    
    // 'visible' attribute on TextAreaCell (id=ClaimSegments_Cell) at CCRulesListScreen.pcf: line 243, column 57
    function visible_61 () : java.lang.Boolean {
      return pageHelper.ShowClaimSegments
    }
    
    property get results () : gw.api.database.IQueryBeanResult<RuleVersion> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<RuleVersion>
    }
    
    property get ruleFilterCriteria () : gw.bizrules.CCRuleFilterCriteria {
      return getCriteriaValue(1) as gw.bizrules.CCRuleFilterCriteria
    }
    
    property set ruleFilterCriteria ($arg :  gw.bizrules.CCRuleFilterCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}