package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/keymetrics/ClaimKeyMetrics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimKeyMetricsExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/keymetrics/ClaimKeyMetrics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimKeyMetricsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (claim :  Claim) : int {
      return 0
    }
    
    // Page (id=ClaimKeyMetrics) at ClaimKeyMetrics.pcf: line 7, column 73
    static function parent_42 (claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimSummaryGroup.createDestination(claim)
    }
    
    // 'value' attribute on RowIterator (id=ClaimMetricCategoryIterator) at ClaimKeyMetrics.pcf: line 41, column 53
    function value_18 () : typekey.ClaimMetricCategory[] {
      return ClaimMetricCategory.getTypeKeys( false ).toTypedArray()
    }
    
    // 'value' attribute on RowIterator (id=ExposureIterator) at ClaimKeyMetrics.pcf: line 108, column 41
    function value_39 () : entity.Exposure[] {
      return claim.OrderedExposures
    }
    
    // 'value' attribute on TextCell (id=ClaimTier_Cell) at ClaimKeyMetrics.pcf: line 171, column 26
    function value_40 () : java.lang.String {
      return DisplayKey.get("Web.Claim.ClaimKeyMetrics.Footer.ClaimTier", claim.ClaimTier)
    }
    
    override property get CurrentLocation () : pcf.ClaimKeyMetrics {
      return super.CurrentLocation as pcf.ClaimKeyMetrics
    }
    
    property get claim () : Claim {
      return getVariableValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setVariableValue("claim", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/keymetrics/ClaimKeyMetrics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimKeyMetrics.pcf: line 68, column 46
    function fontColor_6 () : java.lang.Object {
      return metric.DisplayColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=MetricStatus_Cell) at ClaimKeyMetrics.pcf: line 83, column 38
    function iconColor_16 () : gw.api.web.color.GWColor {
      return metric.Status.IconColor
    }
    
    // 'icon' attribute on BooleanRadioCell (id=MetricStatus_Cell) at ClaimKeyMetrics.pcf: line 83, column 38
    function icon_15 () : java.lang.String {
      return metric.Status.Icon
    }
    
    // 'value' attribute on TypeKeyCell (id=MetricName_Cell) at ClaimKeyMetrics.pcf: line 62, column 50
    function valueRoot_4 () : java.lang.Object {
      return metric
    }
    
    // 'value' attribute on TextCell (id=MetricTargetValue_Cell) at ClaimKeyMetrics.pcf: line 74, column 35
    function value_12 () : java.lang.String {
      return metric.DisplayTargetValue
    }
    
    // 'value' attribute on TypeKeyCell (id=MetricName_Cell) at ClaimKeyMetrics.pcf: line 62, column 50
    function value_3 () : typekey.ClaimMetric {
      return metric.Subtype
    }
    
    // 'value' attribute on TextCell (id=MetricValue_Cell) at ClaimKeyMetrics.pcf: line 68, column 46
    function value_7 () : java.lang.String {
      return metric.DisplayValue
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimKeyMetrics.pcf: line 68, column 46
    function verifyFontColorIsAllowedType_9 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimKeyMetrics.pcf: line 68, column 46
    function verifyFontColorIsAllowedType_9 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=MetricValue_Cell) at ClaimKeyMetrics.pcf: line 68, column 46
    function verifyFontColor_10 () : void {
      var __fontColorArg = metric.DisplayColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_9(__fontColorArg)
    }
    
    property get metric () : entity.ClaimMetric {
      return getIteratedValue(2) as entity.ClaimMetric
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/keymetrics/ClaimKeyMetrics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ClaimKeyMetricsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ExposureTierLabel_Cell) at ClaimKeyMetrics.pcf: line 119, column 58
    function valueRoot_22 () : java.lang.Object {
      return exposure.ExposureTier
    }
    
    // 'value' attribute on TextCell (id=ExposureName_Cell) at ClaimKeyMetrics.pcf: line 115, column 196
    function value_19 () : java.lang.String {
      return DisplayKey.get("Web.ClaimSummary.ClaimKeyMetrics.Exposure.Label", exposure.DisplayName, exposure.getPrimaryCoverage().DisplayName, exposure.Incident.DisplayName)
    }
    
    // 'value' attribute on TextCell (id=ExposureTierLabel_Cell) at ClaimKeyMetrics.pcf: line 119, column 58
    function value_21 () : java.lang.String {
      return exposure.ExposureTier.DisplayName
    }
    
    // 'value' attribute on RowIterator at ClaimKeyMetrics.pcf: line 126, column 49
    function value_38 () : entity.ExposureMetric[] {
      return exposure.ExposureMetrics.orderBy(\ e -> e.Subtype).toTypedArray()
    }
    
    property get exposure () : entity.Exposure {
      return getIteratedValue(1) as entity.Exposure
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/keymetrics/ClaimKeyMetrics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends IteratorEntry3ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'fontColor' attribute on TextCell (id=metricValue_Cell) at ClaimKeyMetrics.pcf: line 138, column 46
    function fontColor_27 () : java.lang.Object {
      return metric.DisplayColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=ExposureMetricStatus_Cell) at ClaimKeyMetrics.pcf: line 152, column 38
    function iconColor_37 () : gw.api.web.color.GWColor {
      return metric.Status.IconColor
    }
    
    // 'icon' attribute on BooleanRadioCell (id=ExposureMetricStatus_Cell) at ClaimKeyMetrics.pcf: line 152, column 38
    function icon_36 () : java.lang.String {
      return metric.Status.Icon
    }
    
    // 'value' attribute on TypeKeyCell (id=metricName_Cell) at ClaimKeyMetrics.pcf: line 133, column 35
    function valueRoot_25 () : java.lang.Object {
      return metric
    }
    
    // 'value' attribute on TypeKeyCell (id=metricName_Cell) at ClaimKeyMetrics.pcf: line 133, column 35
    function value_24 () : typekey.ExposureMetric {
      return metric.Subtype
    }
    
    // 'value' attribute on TextCell (id=metricValue_Cell) at ClaimKeyMetrics.pcf: line 138, column 46
    function value_28 () : java.lang.String {
      return metric.DisplayValue
    }
    
    // 'value' attribute on TextCell (id=MetricTargetValue_Cell) at ClaimKeyMetrics.pcf: line 144, column 35
    function value_33 () : java.lang.String {
      return metric.DisplayTargetValue
    }
    
    // 'fontColor' attribute on TextCell (id=metricValue_Cell) at ClaimKeyMetrics.pcf: line 138, column 46
    function verifyFontColorIsAllowedType_30 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=metricValue_Cell) at ClaimKeyMetrics.pcf: line 138, column 46
    function verifyFontColorIsAllowedType_30 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TextCell (id=metricValue_Cell) at ClaimKeyMetrics.pcf: line 138, column 46
    function verifyFontColor_31 () : void {
      var __fontColorArg = metric.DisplayColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_30(__fontColorArg)
    }
    
    property get metric () : entity.ExposureMetric {
      return getIteratedValue(2) as entity.ExposureMetric
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/summary/keymetrics/ClaimKeyMetrics.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimKeyMetricsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=ClaimMetricCategoryHeader_Cell) at ClaimKeyMetrics.pcf: line 48, column 51
    function valueRoot_1 () : java.lang.Object {
      return metricCategory
    }
    
    // 'value' attribute on TextCell (id=ClaimMetricCategoryHeader_Cell) at ClaimKeyMetrics.pcf: line 48, column 51
    function value_0 () : java.lang.String {
      return metricCategory.DisplayName
    }
    
    // 'value' attribute on RowIterator (id=ClaimMetricIterator) at ClaimKeyMetrics.pcf: line 56, column 46
    function value_17 () : entity.ClaimMetric[] {
      return claim.ClaimMetrics.where(\ c -> c.ClaimMetricCategory == metricCategory).orderBy(\ c -> c.Subtype).toTypedArray()
    }
    
    property get metricCategory () : typekey.ClaimMetricCategory {
      return getIteratedValue(1) as typekey.ClaimMetricCategory
    }
    
    
  }
  
  
}