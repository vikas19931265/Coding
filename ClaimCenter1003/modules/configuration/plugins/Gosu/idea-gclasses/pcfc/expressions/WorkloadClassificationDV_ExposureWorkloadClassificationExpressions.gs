package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/workload/WorkloadClassificationDV.ExposureWorkloadClassification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WorkloadClassificationDV_ExposureWorkloadClassificationExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/workload/WorkloadClassificationDV.ExposureWorkloadClassification.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WorkloadClassificationDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 18, column 69
    function def_onEnter_1 (def :  pcf.WorkloadClassificationCommonInputSet) : void {
      def.onEnter(classification)
    }
    
    // 'def' attribute on ListViewInput (id=SegmentConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 61, column 66
    function def_onEnter_17 (def :  pcf.SegmentConditionsLV) : void {
      def.onEnter(classification)
    }
    
    // 'def' attribute on ListViewInput (id=IncidentSeverityConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 82, column 75
    function def_onEnter_24 (def :  pcf.IncidentSeverityConditionsLV) : void {
      def.onEnter(classification)
    }
    
    // 'def' attribute on ListViewInput (id=JurisdictionConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 103, column 71
    function def_onEnter_31 (def :  pcf.JurisdictionConditionsLV) : void {
      def.onEnter(classification)
    }
    
    // 'def' attribute on ListViewInput (id=ExposureConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 39, column 67
    function def_onEnter_9 (def :  pcf.ExposureConditionsLV) : void {
      def.onEnter(classification)
    }
    
    // 'def' attribute on ListViewInput (id=ExposureConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 39, column 67
    function def_refreshVariables_10 (def :  pcf.ExposureConditionsLV) : void {
      def.refreshVariables(classification)
    }
    
    // 'def' attribute on ListViewInput (id=SegmentConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 61, column 66
    function def_refreshVariables_18 (def :  pcf.SegmentConditionsLV) : void {
      def.refreshVariables(classification)
    }
    
    // 'def' attribute on InputSetRef at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 18, column 69
    function def_refreshVariables_2 (def :  pcf.WorkloadClassificationCommonInputSet) : void {
      def.refreshVariables(classification)
    }
    
    // 'def' attribute on ListViewInput (id=IncidentSeverityConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 82, column 75
    function def_refreshVariables_25 (def :  pcf.IncidentSeverityConditionsLV) : void {
      def.refreshVariables(classification)
    }
    
    // 'def' attribute on ListViewInput (id=JurisdictionConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 103, column 71
    function def_refreshVariables_32 (def :  pcf.JurisdictionConditionsLV) : void {
      def.refreshVariables(classification)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllSegments_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 53, column 60
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      classification.SegmentCondition.IncludeAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllIncidentSeverities_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 75, column 69
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      classification.IncidentSeverityCondition.IncludeAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllJurisdictions_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 96, column 65
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      classification.JurisdictionCondition.IncludeAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllExposures_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 31, column 61
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      classification.ExposureCondition.IncludeAll = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on ListViewInput (id=SegmentConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 61, column 66
    function editable_15 () : java.lang.Boolean {
      return not classification.SegmentCondition.IncludeAll
    }
    
    // 'editable' attribute on ListViewInput (id=ExposureConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 39, column 67
    function editable_7 () : java.lang.Boolean {
      return not classification.ExposureCondition.IncludeAll
    }
    
    // 'initialValue' attribute on Variable at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 15, column 46
    function initialValue_0 () : ExposureWorkloadClassification {
      return assignmentClassification as ExposureWorkloadClassification
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllSegments_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 53, column 60
    function valueRoot_13 () : java.lang.Object {
      return classification.SegmentCondition
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllIncidentSeverities_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 75, column 69
    function valueRoot_21 () : java.lang.Object {
      return classification.IncidentSeverityCondition
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllJurisdictions_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 96, column 65
    function valueRoot_28 () : java.lang.Object {
      return classification.JurisdictionCondition
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllExposures_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 31, column 61
    function valueRoot_5 () : java.lang.Object {
      return classification.ExposureCondition
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllSegments_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 53, column 60
    function value_11 () : java.lang.Boolean {
      return classification.SegmentCondition.IncludeAll
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllIncidentSeverities_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 75, column 69
    function value_19 () : java.lang.Boolean {
      return classification.IncidentSeverityCondition.IncludeAll
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllJurisdictions_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 96, column 65
    function value_26 () : java.lang.Boolean {
      return classification.JurisdictionCondition.IncludeAll
    }
    
    // 'value' attribute on BooleanRadioInput (id=AllExposures_Input) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 31, column 61
    function value_3 () : java.lang.Boolean {
      return classification.ExposureCondition.IncludeAll
    }
    
    // 'visible' attribute on ListViewInput (id=IncidentSeverityConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 82, column 75
    function visible_23 () : java.lang.Boolean {
      return not classification.IncidentSeverityCondition.IncludeAll
    }
    
    // 'visible' attribute on ListViewInput (id=JurisdictionConditions) at WorkloadClassificationDV.ExposureWorkloadClassification.pcf: line 103, column 71
    function visible_30 () : java.lang.Boolean {
      return not classification.JurisdictionCondition.IncludeAll
    }
    
    property get assignmentClassification () : WorkloadClassification {
      return getRequireValue("assignmentClassification", 0) as WorkloadClassification
    }
    
    property set assignmentClassification ($arg :  WorkloadClassification) {
      setRequireValue("assignmentClassification", 0, $arg)
    }
    
    property get classification () : ExposureWorkloadClassification {
      return getVariableValue("classification", 0) as ExposureWorkloadClassification
    }
    
    property set classification ($arg :  ExposureWorkloadClassification) {
      setVariableValue("classification", 0, $arg)
    }
    
    
  }
  
  
}