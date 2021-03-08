package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/summary/GroupStatisticsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupStatisticsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/summary/GroupStatisticsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupStatisticsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Claims_OpenHeader1_Cell) at GroupStatisticsLV.pcf: line 87, column 30
    function iconColor_2 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_INFO
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Claims_FlaggedHeader1_Cell) at GroupStatisticsLV.pcf: line 96, column 30
    function iconColor_3 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'initialValue' attribute on Variable at GroupStatisticsLV.pcf: line 21, column 23
    function initialValue_0 () : boolean {
      return gw.api.system.CCConfigParameters.WeightedAssignmentEnabled.Value and perm.System.wwlview
    }
    
    // 'label' attribute on TextCell (id=Claims_Open_Cell) at GroupStatisticsLV.pcf: line 239, column 29
    function label_11 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Claims.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Claims.Open")
    }
    
    // 'label' attribute on TextCell (id=Exposures_Open_Cell) at GroupStatisticsLV.pcf: line 282, column 29
    function label_12 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Exposures.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Exposures.Open")
    }
    
    // 'label' attribute on TextCell (id=Matters_Open_Cell) at GroupStatisticsLV.pcf: line 300, column 29
    function label_13 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Matters.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Matters.Open")
    }
    
    // 'label' attribute on TextCell (id=Activities_Open_Cell) at GroupStatisticsLV.pcf: line 318, column 29
    function label_14 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Activities.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Activities.Open")
    }
    
    // 'label' attribute on TextCell (id=Subrogations_Active_Cell) at GroupStatisticsLV.pcf: line 345, column 29
    function label_15 () : java.lang.Object {
      return DisplayKey.get("Web.Admin.GroupStatistics.Subrogations.ActiveClaimExposure", DisplayKey.get("Web.Admin.GroupStatistics.Subrogations.Active"), DisplayKey.get("LV.Admin.GroupStatistics.Claims"), DisplayKey.get("LV.Admin.GroupStatistics.Exposures"))
    }
    
    // '$$sumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 239, column 29
    function sumValueRoot_19 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 220, column 53
    function sumValue_16 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return isWeightedWorkloadVisible ? Statistics.TotalWorkload : null
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 229, column 53
    function sumValue_17 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return isWeightedWorkloadVisible ? Statistics.ClaimsWorkload : null
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 239, column 29
    function sumValue_18 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.OpenClaims
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 247, column 42
    function sumValue_20 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.FlaggedClaims
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 255, column 42
    function sumValue_22 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.NewClaims
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 263, column 42
    function sumValue_24 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ClosedClaims
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 272, column 53
    function sumValue_26 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return isWeightedWorkloadVisible ? Statistics.ExposuresWorkload : null
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 282, column 29
    function sumValue_27 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.OpenExposures
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 290, column 42
    function sumValue_29 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ClosedExposures
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 300, column 29
    function sumValue_31 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.OpenMatters
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 308, column 42
    function sumValue_33 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ClosedMatters
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 318, column 29
    function sumValue_35 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.OpenActivities
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 326, column 42
    function sumValue_37 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.OverdueActivities
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 335, column 29
    function sumValue_39 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.CompletedActivities
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 345, column 29
    function sumValue_41 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ActiveSubrogations
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupStatisticsLV.pcf: line 353, column 42
    function sumValue_43 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ClosedSubrogations
    }
    
    // 'tooltip' attribute on BooleanRadioCell (id=Claims_OpenHeader1_Cell) at GroupStatisticsLV.pcf: line 87, column 30
    function tooltip_1 () : java.lang.String {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Claims.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Claims.Open")
    }
    
    // 'tooltip' attribute on BooleanRadioCell (id=Exposures_OpenHeader1_Cell) at GroupStatisticsLV.pcf: line 129, column 30
    function tooltip_4 () : java.lang.String {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Exposures.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Exposures.Open")
    }
    
    // 'tooltip' attribute on BooleanRadioCell (id=Matters_OpenHeader1_Cell) at GroupStatisticsLV.pcf: line 146, column 30
    function tooltip_6 () : java.lang.String {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Matters.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Matters.Open")
    }
    
    // 'tooltip' attribute on BooleanRadioCell (id=Activities_OpenHeader1_Cell) at GroupStatisticsLV.pcf: line 163, column 30
    function tooltip_8 () : java.lang.String {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Activities.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Activities.Open")
    }
    
    // 'value' attribute on RowIterator at GroupStatisticsLV.pcf: line 202, column 50
    function value_106 () : gw.api.statistics.Statistics[] {
      return StatisticsList
    }
    
    property get StatisticsList () : gw.api.statistics.Statistics[] {
      return getRequireValue("StatisticsList", 0) as gw.api.statistics.Statistics[]
    }
    
    property set StatisticsList ($arg :  gw.api.statistics.Statistics[]) {
      setRequireValue("StatisticsList", 0, $arg)
    }
    
    property get TeamGroupSummary () : gw.api.team.TeamGroupStatisticsHelper {
      return getRequireValue("TeamGroupSummary", 0) as gw.api.team.TeamGroupStatisticsHelper
    }
    
    property set TeamGroupSummary ($arg :  gw.api.team.TeamGroupStatisticsHelper) {
      setRequireValue("TeamGroupSummary", 0, $arg)
    }
    
    property get isWeightedWorkloadVisible () : boolean {
      return getVariableValue("isWeightedWorkloadVisible", 0) as java.lang.Boolean
    }
    
    property set isWeightedWorkloadVisible ($arg :  boolean) {
      setVariableValue("isWeightedWorkloadVisible", 0, $arg)
    }
    
    property get naWeightedWorkloadValue () : String {
      return getVariableValue("naWeightedWorkloadValue", 0) as String
    }
    
    property set naWeightedWorkloadValue ($arg :  String) {
      setVariableValue("naWeightedWorkloadValue", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/summary/GroupStatisticsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupStatisticsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=Claims_Open_Cell) at GroupStatisticsLV.pcf: line 239, column 29
    function label_54 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Claims.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Claims.Open")
    }
    
    // 'label' attribute on TextCell (id=Exposures_Open_Cell) at GroupStatisticsLV.pcf: line 282, column 29
    function label_71 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Exposures.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Exposures.Open")
    }
    
    // 'label' attribute on TextCell (id=Matters_Open_Cell) at GroupStatisticsLV.pcf: line 300, column 29
    function label_79 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Matters.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Matters.Open")
    }
    
    // 'label' attribute on TextCell (id=Activities_Open_Cell) at GroupStatisticsLV.pcf: line 318, column 29
    function label_87 () : java.lang.Object {
      return TeamGroupSummary.canShowGlobalWorkloadStats() ? DisplayKey.get("Web.Admin.GroupStatistics.Activities.OpenGlobal") : DisplayKey.get("Web.Admin.GroupStatistics.Activities.Open")
    }
    
    // 'label' attribute on TextCell (id=Subrogations_Active_Cell) at GroupStatisticsLV.pcf: line 345, column 29
    function label_98 () : java.lang.Object {
      return DisplayKey.get("Web.Admin.GroupStatistics.Subrogations.ActiveClaimExposure", DisplayKey.get("Web.Admin.GroupStatistics.Subrogations.Active"), DisplayKey.get("LV.Admin.GroupStatistics.Claims"), DisplayKey.get("LV.Admin.GroupStatistics.Exposures"))
    }
    
    // 'outputConversion' attribute on TextCell (id=Name_Cell) at GroupStatisticsLV.pcf: line 211, column 53
    function outputConversion_45 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return TeamGroupSummary.getDisplayValue(VALUE)
    }
    
    // 'outputConversion' attribute on TextCell (id=User_Workload_Enabled_Cell) at GroupStatisticsLV.pcf: line 220, column 53
    function outputConversion_48 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return isWeightedWorkloadVisible ? VALUE.TotalWorkload as String : "-"
    }
    
    // 'outputConversion' attribute on TextCell (id=Claims_Workload_Enabled_Cell) at GroupStatisticsLV.pcf: line 229, column 53
    function outputConversion_51 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return isWeightedWorkloadVisible ? VALUE.ClaimsWorkload as String : "-"
    }
    
    // 'outputConversion' attribute on TextCell (id=Claims_Open_Cell) at GroupStatisticsLV.pcf: line 239, column 29
    function outputConversion_55 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return TeamGroupSummary.getOpenClaimCount(VALUE)
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposures_Workload_Enabled_Cell) at GroupStatisticsLV.pcf: line 272, column 53
    function outputConversion_68 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return isWeightedWorkloadVisible ? VALUE.ExposuresWorkload as String: "-"
    }
    
    // 'outputConversion' attribute on TextCell (id=Exposures_Open_Cell) at GroupStatisticsLV.pcf: line 282, column 29
    function outputConversion_72 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return TeamGroupSummary.getOpenExposureCount(VALUE)
    }
    
    // 'outputConversion' attribute on TextCell (id=Matters_Open_Cell) at GroupStatisticsLV.pcf: line 300, column 29
    function outputConversion_80 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return TeamGroupSummary.getOpenMatterCount(VALUE)
    }
    
    // 'outputConversion' attribute on TextCell (id=Activities_Open_Cell) at GroupStatisticsLV.pcf: line 318, column 29
    function outputConversion_88 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return TeamGroupSummary.getOpenActivityCount(VALUE)
    }
    
    // 'outputConversion' attribute on TextCell (id=Subrogations_Active_Cell) at GroupStatisticsLV.pcf: line 345, column 29
    function outputConversion_99 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return DisplayKey.get("Web.Admin.GroupStatistics.Subrogations.ActiveClaimExposure", Statistics.ActiveSubrogations, Statistics.ActiveClaimSubrogations, Statistics.ActiveExposureSubrogations)
    }
    
    // 'value' attribute on TextCell (id=Claims_Flagged_Cell) at GroupStatisticsLV.pcf: line 247, column 42
    function valueRoot_60 () : java.lang.Object {
      return Statistics
    }
    
    // 'value' attribute on TextCell (id=Subrogations_Closed_Cell) at GroupStatisticsLV.pcf: line 353, column 42
    function value_103 () : java.lang.Integer {
      return Statistics.ClosedSubrogations
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at GroupStatisticsLV.pcf: line 211, column 53
    function value_46 () : gw.api.statistics.Statistics {
      return Statistics
    }
    
    // 'value' attribute on TextCell (id=Claims_Flagged_Cell) at GroupStatisticsLV.pcf: line 247, column 42
    function value_59 () : java.lang.Integer {
      return Statistics.FlaggedClaims
    }
    
    // 'value' attribute on TextCell (id=Claims_New_Cell) at GroupStatisticsLV.pcf: line 255, column 42
    function value_62 () : java.lang.Integer {
      return Statistics.NewClaims
    }
    
    // 'value' attribute on TextCell (id=Claims_Closed_Cell) at GroupStatisticsLV.pcf: line 263, column 42
    function value_65 () : java.lang.Integer {
      return Statistics.ClosedClaims
    }
    
    // 'value' attribute on TextCell (id=Exposures_Closed_Cell) at GroupStatisticsLV.pcf: line 290, column 42
    function value_76 () : java.lang.Integer {
      return Statistics.ClosedExposures
    }
    
    // 'value' attribute on TextCell (id=Matters_Closed_Cell) at GroupStatisticsLV.pcf: line 308, column 42
    function value_84 () : java.lang.Integer {
      return Statistics.ClosedMatters
    }
    
    // 'value' attribute on TextCell (id=Activities_Overdue_Cell) at GroupStatisticsLV.pcf: line 326, column 42
    function value_92 () : java.lang.Integer {
      return Statistics.OverdueActivities
    }
    
    // 'value' attribute on TextCell (id=Activities_Completed_Cell) at GroupStatisticsLV.pcf: line 335, column 29
    function value_95 () : java.lang.Integer {
      return Statistics.CompletedActivities
    }
    
    property get Statistics () : gw.api.statistics.Statistics {
      return getIteratedValue(1) as gw.api.statistics.Statistics
    }
    
    
  }
  
  
}