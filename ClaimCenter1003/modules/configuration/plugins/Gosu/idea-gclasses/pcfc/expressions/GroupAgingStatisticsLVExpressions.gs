package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/aging/GroupAgingStatisticsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class GroupAgingStatisticsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/aging/GroupAgingStatisticsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class GroupAgingStatisticsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // '$$sumValue' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 89, column 29
    function sumValueRoot_5 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 116, column 29
    function sumValue_10 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ExpAgingFour
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 89, column 29
    function sumValue_4 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ExpAgingOne
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 98, column 29
    function sumValue_6 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ExpAgingTwo
    }
    
    // 'footerSumValue' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 107, column 29
    function sumValue_8 (Statistics :  gw.api.statistics.Statistics) : java.lang.Object {
      return Statistics.ExpAgingThree
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 56, column 29
    function value_0 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingOneSummationRow(StatisticsList)
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 64, column 29
    function value_1 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingTwoSummationRow(StatisticsList)
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 124, column 29
    function value_12 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingSummationRow(StatisticsList, \s->s.SubAgingOne, \s->s.SubLitAgingOne)
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 132, column 29
    function value_13 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingSummationRow(StatisticsList, \s->s.SubAgingTwo, \s->s.SubLitAgingTwo)
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 140, column 29
    function value_14 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingSummationRow(StatisticsList, \s->s.SubAgingThree, \s->s.SubLitAgingThree)
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 148, column 29
    function value_15 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingSummationRow(StatisticsList, \s->s.SubAgingFour, \s->s.SubLitAgingFour)
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 72, column 29
    function value_2 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingThreeSummationRow(StatisticsList)
    }
    
    // 'footerLabel' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 80, column 29
    function value_3 () : java.lang.Object {
      return gw.api.team.TeamGroupStatisticsHelper.getAgingFourSummationRow(StatisticsList)
    }
    
    // 'value' attribute on RowIterator at GroupAgingStatisticsLV.pcf: line 39, column 50
    function value_55 () : gw.api.statistics.Statistics[] {
      return StatisticsList
    }
    
    property get StatisticsList () : gw.api.statistics.Statistics[] {
      return getRequireValue("StatisticsList", 0) as gw.api.statistics.Statistics[]
    }
    
    property set StatisticsList ($arg :  gw.api.statistics.Statistics[]) {
      setRequireValue("StatisticsList", 0, $arg)
    }
    
    property get TeamGroupAging () : gw.api.team.TeamGroupStatisticsHelper {
      return getRequireValue("TeamGroupAging", 0) as gw.api.team.TeamGroupStatisticsHelper
    }
    
    property set TeamGroupAging ($arg :  gw.api.team.TeamGroupStatisticsHelper) {
      setRequireValue("TeamGroupAging", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/aging/GroupAgingStatisticsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends GroupAgingStatisticsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'outputConversion' attribute on TextCell (id=Name_Cell) at GroupAgingStatisticsLV.pcf: line 48, column 53
    function outputConversion_16 (VALUE :  gw.api.statistics.Statistics) : java.lang.String {
      return TeamGroupAging.getDisplayValue(VALUE)
    }
    
    // 'value' attribute on TextCell (id=Claims_BucketOne_Cell) at GroupAgingStatisticsLV.pcf: line 56, column 29
    function valueRoot_20 () : java.lang.Object {
      return Statistics
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at GroupAgingStatisticsLV.pcf: line 48, column 53
    function value_17 () : gw.api.statistics.Statistics {
      return Statistics
    }
    
    // 'value' attribute on TextCell (id=Claims_BucketOne_Cell) at GroupAgingStatisticsLV.pcf: line 56, column 29
    function value_19 () : java.lang.String {
      return Statistics.ClaimAgingOneString
    }
    
    // 'value' attribute on TextCell (id=Claims_BucketTwo_Cell) at GroupAgingStatisticsLV.pcf: line 64, column 29
    function value_22 () : java.lang.String {
      return Statistics.ClaimAgingTwoString
    }
    
    // 'value' attribute on TextCell (id=Claims_BucketThree_Cell) at GroupAgingStatisticsLV.pcf: line 72, column 29
    function value_25 () : java.lang.String {
      return Statistics.ClaimAgingThreeString
    }
    
    // 'value' attribute on TextCell (id=Claims_BucketFour_Cell) at GroupAgingStatisticsLV.pcf: line 80, column 29
    function value_28 () : java.lang.String {
      return Statistics.ClaimAgingFourString
    }
    
    // 'value' attribute on TextCell (id=Exposures_BucketOne_Cell) at GroupAgingStatisticsLV.pcf: line 89, column 29
    function value_31 () : java.lang.Integer {
      return Statistics.ExpAgingOne
    }
    
    // 'value' attribute on TextCell (id=Exposures_BucketTwo_Cell) at GroupAgingStatisticsLV.pcf: line 98, column 29
    function value_34 () : java.lang.Integer {
      return Statistics.ExpAgingTwo
    }
    
    // 'value' attribute on TextCell (id=Exposures_BucketThree_Cell) at GroupAgingStatisticsLV.pcf: line 107, column 29
    function value_37 () : java.lang.Integer {
      return Statistics.ExpAgingThree
    }
    
    // 'value' attribute on TextCell (id=Exposures_BucketFour_Cell) at GroupAgingStatisticsLV.pcf: line 116, column 29
    function value_40 () : java.lang.Integer {
      return Statistics.ExpAgingFour
    }
    
    // 'value' attribute on TextCell (id=Subrogations_BucketOne_Cell) at GroupAgingStatisticsLV.pcf: line 124, column 29
    function value_43 () : java.lang.String {
      return Statistics.SubrogationAgingOneString
    }
    
    // 'value' attribute on TextCell (id=Subrogations_BucketTwo_Cell) at GroupAgingStatisticsLV.pcf: line 132, column 29
    function value_46 () : java.lang.String {
      return Statistics.SubrogationAgingTwoString
    }
    
    // 'value' attribute on TextCell (id=Subrogations_BucketThree_Cell) at GroupAgingStatisticsLV.pcf: line 140, column 29
    function value_49 () : java.lang.String {
      return Statistics.SubrogationAgingThreeString
    }
    
    // 'value' attribute on TextCell (id=Subrogations_BucketFour_Cell) at GroupAgingStatisticsLV.pcf: line 148, column 29
    function value_52 () : java.lang.String {
      return Statistics.SubrogationAgingFourString
    }
    
    property get Statistics () : gw.api.statistics.Statistics {
      return getIteratedValue(1) as gw.api.statistics.Statistics
    }
    
    
  }
  
  
}