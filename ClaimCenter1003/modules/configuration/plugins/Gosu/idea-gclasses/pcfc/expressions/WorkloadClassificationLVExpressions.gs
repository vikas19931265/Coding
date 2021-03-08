package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workload/WorkloadClassificationLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkloadClassificationLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workload/WorkloadClassificationLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WorkloadClassificationLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at WorkloadClassificationLV.pcf: line 69, column 40
    function action_17 () : void {
      WorkloadClassificationDetailPopup.drilldown(classification)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at WorkloadClassificationLV.pcf: line 69, column 40
    function action_dest_18 () : pcf.api.Destination {
      return pcf.WorkloadClassificationDetailPopup.createDestination(classification)
    }
    
    // 'condition' attribute on ToolbarFlag at WorkloadClassificationLV.pcf: line 47, column 38
    function condition_12 () : java.lang.Boolean {
      return classification.Active
    }
    
    // 'condition' attribute on ToolbarFlag at WorkloadClassificationLV.pcf: line 50, column 40
    function condition_13 () : java.lang.Boolean {
      return not classification.Active
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Status_Cell) at WorkloadClassificationLV.pcf: line 64, column 32
    function iconColor_16 () : gw.api.web.color.GWColor {
      return classification.Active ? gw.api.web.color.GWColor.THEME_ALERT_SUCCESS : gw.api.web.color.GWColor.THEME_ALERT_NEUTRAL
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=Status_Cell) at WorkloadClassificationLV.pcf: line 64, column 32
    function iconLabel_14 () : java.lang.String {
      return classification.Active ? DisplayKey.get("Web.Admin.Workload.WorkloadClassification.Active") : DisplayKey.get("Web.Admin.Workload.WorkloadClassification.Inactive")
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Status_Cell) at WorkloadClassificationLV.pcf: line 64, column 32
    function icon_15 () : java.lang.String {
      return classification.Active ? "circle_checkmark" : "circle"
    }
    
    // 'outputConversion' attribute on TextCell (id=EntityAssignmentType_Cell) at WorkloadClassificationLV.pcf: line 77, column 54
    function outputConversion_22 (VALUE :  entity.WorkloadClassification) : java.lang.String {
      return (VALUE as gw.api.assignment.workload.classifications.WorkloadClassificationMethods).AssignableType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WorkloadClassificationLV.pcf: line 69, column 40
    function valueRoot_20 () : java.lang.Object {
      return classification
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WorkloadClassificationLV.pcf: line 69, column 40
    function value_19 () : java.lang.String {
      return classification.Name
    }
    
    // 'value' attribute on TextCell (id=EntityAssignmentType_Cell) at WorkloadClassificationLV.pcf: line 77, column 54
    function value_23 () : entity.WorkloadClassification {
      return classification
    }
    
    // 'value' attribute on TypeKeyCell (id=LossType_Cell) at WorkloadClassificationLV.pcf: line 82, column 41
    function value_25 () : typekey.LossType {
      return classification.ClaimLossType
    }
    
    // 'value' attribute on TextCell (id=Priority_Cell) at WorkloadClassificationLV.pcf: line 88, column 42
    function value_28 () : java.lang.Integer {
      return classification.Priority
    }
    
    // 'value' attribute on TextCell (id=TotalFactor_Cell) at WorkloadClassificationLV.pcf: line 93, column 42
    function value_31 () : java.lang.Integer {
      return classification.Weight
    }
    
    property get classification () : entity.WorkloadClassification {
      return getIteratedValue(1) as entity.WorkloadClassification
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/workload/WorkloadClassificationLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkloadClassificationLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on ListViewPanel (id=WorkloadClassificationLV) at WorkloadClassificationLV.pcf: line 8, column 35
    function available_35 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlcview
    }
    
    // 'editable' attribute on ListViewPanel (id=WorkloadClassificationLV) at WorkloadClassificationLV.pcf: line 8, column 35
    function editable_36 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlcmanage
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkloadClassificationLV.pcf: line 27, column 141
    function filter_0 () : gw.api.filters.IFilter {
      return gw.assignment.workload.util.WorkloadClassificationToolbarFilters.INSTANCE.all()
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkloadClassificationLV.pcf: line 31, column 33
    function filter_1 () : gw.api.filters.IFilter {
      return gw.assignment.workload.util.WorkloadClassificationToolbarFilters.INSTANCE.onlyActiveWorkloadClassifications()
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkloadClassificationLV.pcf: line 34, column 149
    function filter_2 () : gw.api.filters.IFilter {
      return gw.assignment.workload.util.WorkloadClassificationToolbarFilters.INSTANCE.onlyActiveClaimWorkloadClassifications()
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkloadClassificationLV.pcf: line 37, column 146
    function filter_3 () : gw.api.filters.IFilter {
      return gw.assignment.workload.util.WorkloadClassificationToolbarFilters.INSTANCE.onlyClaimWorkloadClassifications()
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkloadClassificationLV.pcf: line 40, column 152
    function filter_4 () : gw.api.filters.IFilter {
      return gw.assignment.workload.util.WorkloadClassificationToolbarFilters.INSTANCE.onlyActiveExposureWorkloadClassifications()
    }
    
    // 'filter' attribute on ToolbarFilterOption at WorkloadClassificationLV.pcf: line 43, column 149
    function filter_5 () : gw.api.filters.IFilter {
      return gw.assignment.workload.util.WorkloadClassificationToolbarFilters.INSTANCE.onlyExposureWorkloadClassifications()
    }
    
    // 'value' attribute on TextCell (id=Priority_Cell) at WorkloadClassificationLV.pcf: line 88, column 42
    function sortValue_10 (classification :  entity.WorkloadClassification) : java.lang.Object {
      return classification.Priority
    }
    
    // 'value' attribute on TextCell (id=TotalFactor_Cell) at WorkloadClassificationLV.pcf: line 93, column 42
    function sortValue_11 (classification :  entity.WorkloadClassification) : java.lang.Object {
      return classification.Weight
    }
    
    // 'sortBy' attribute on BooleanRadioCell (id=Status_Cell) at WorkloadClassificationLV.pcf: line 64, column 32
    function sortValue_6 (classification :  entity.WorkloadClassification) : java.lang.Object {
      return classification.Active
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at WorkloadClassificationLV.pcf: line 69, column 40
    function sortValue_7 (classification :  entity.WorkloadClassification) : java.lang.Object {
      return classification.Name
    }
    
    // 'sortBy' attribute on TextCell (id=EntityAssignmentType_Cell) at WorkloadClassificationLV.pcf: line 77, column 54
    function sortValue_8 (classification :  entity.WorkloadClassification) : java.lang.Object {
      return classification.Subtype
    }
    
    // 'value' attribute on TypeKeyCell (id=LossType_Cell) at WorkloadClassificationLV.pcf: line 82, column 41
    function sortValue_9 (classification :  entity.WorkloadClassification) : java.lang.Object {
      return classification.ClaimLossType
    }
    
    // 'value' attribute on RowIterator (id=Classifications) at WorkloadClassificationLV.pcf: line 22, column 89
    function value_34 () : gw.api.database.IQueryBeanResult<entity.WorkloadClassification> {
      return weights
    }
    
    property get weights () : gw.api.database.IQueryBeanResult<WorkloadClassification> {
      return getRequireValue("weights", 0) as gw.api.database.IQueryBeanResult<WorkloadClassification>
    }
    
    property set weights ($arg :  gw.api.database.IQueryBeanResult<WorkloadClassification>) {
      setRequireValue("weights", 0, $arg)
    }
    
    
  }
  
  
}