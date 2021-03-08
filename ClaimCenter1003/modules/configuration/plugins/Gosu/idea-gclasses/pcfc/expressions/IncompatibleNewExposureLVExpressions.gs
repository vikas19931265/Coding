package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/coverage/IncompatibleNewExposureLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IncompatibleNewExposureLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/coverage/IncompatibleNewExposureLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IncompatibleNewExposureLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyType_Cell) at IncompatibleNewExposureLV.pcf: line 31, column 42
    function sortValue_0 (IncompatibleNewExposure :  entity.IncompatibleNewExposure) : java.lang.Object {
      return IncompatibleNewExposure.PolicyType
    }
    
    // 'value' attribute on TypeKeyCell (id=LossCause_Cell) at IncompatibleNewExposureLV.pcf: line 41, column 45
    function sortValue_1 (IncompatibleNewExposure :  entity.IncompatibleNewExposure) : java.lang.Object {
      return IncompatibleNewExposure.NewExposureCoverage
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryCoverage_Cell) at IncompatibleNewExposureLV.pcf: line 49, column 45
    function sortValue_2 (IncompatibleNewExposure :  entity.IncompatibleNewExposure) : java.lang.Object {
      return IncompatibleNewExposure.ExistingExposures
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at IncompatibleNewExposureLV.pcf: line 22, column 90
    function toCreateAndAdd_19 () : entity.IncompatibleNewExposure {
      return new IncompatibleNewExposure()
    }
    
    // 'toRemove' attribute on RowIterator at IncompatibleNewExposureLV.pcf: line 22, column 90
    function toRemove_20 (IncompatibleNewExposure :  entity.IncompatibleNewExposure) : void {
      IncompatibleNewExposure.remove()
    }
    
    // 'value' attribute on RowIterator at IncompatibleNewExposureLV.pcf: line 22, column 90
    function value_21 () : gw.api.database.IQueryBeanResult<entity.IncompatibleNewExposure> {
      return IncompatibleNewExposureList
    }
    
    property get IncompatibleNewExposureList () : gw.api.database.IQueryBeanResult<IncompatibleNewExposure> {
      return getRequireValue("IncompatibleNewExposureList", 0) as gw.api.database.IQueryBeanResult<IncompatibleNewExposure>
    }
    
    property set IncompatibleNewExposureList ($arg :  gw.api.database.IQueryBeanResult<IncompatibleNewExposure>) {
      setRequireValue("IncompatibleNewExposureList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/coverage/IncompatibleNewExposureLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IncompatibleNewExposureLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryCoverage_Cell) at IncompatibleNewExposureLV.pcf: line 49, column 45
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      IncompatibleNewExposure.ExistingExposures = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyType_Cell) at IncompatibleNewExposureLV.pcf: line 31, column 42
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      IncompatibleNewExposure.PolicyType = (__VALUE_TO_SET as typekey.PolicyType)
    }
    
    // 'value' attribute on TypeKeyCell (id=LossCause_Cell) at IncompatibleNewExposureLV.pcf: line 41, column 45
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      IncompatibleNewExposure.NewExposureCoverage = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'editable' attribute on TypeKeyCell (id=LossCause_Cell) at IncompatibleNewExposureLV.pcf: line 41, column 45
    function editable_7 () : java.lang.Boolean {
      return IncompatibleNewExposure.PolicyType!=null
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyType_Cell) at IncompatibleNewExposureLV.pcf: line 31, column 42
    function valueRoot_5 () : java.lang.Object {
      return IncompatibleNewExposure
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryCoverage_Cell) at IncompatibleNewExposureLV.pcf: line 49, column 45
    function value_14 () : typekey.CoverageType {
      return IncompatibleNewExposure.ExistingExposures
    }
    
    // 'value' attribute on TypeKeyCell (id=PolicyType_Cell) at IncompatibleNewExposureLV.pcf: line 31, column 42
    function value_3 () : typekey.PolicyType {
      return IncompatibleNewExposure.PolicyType
    }
    
    // 'value' attribute on TypeKeyCell (id=LossCause_Cell) at IncompatibleNewExposureLV.pcf: line 41, column 45
    function value_8 () : typekey.CoverageType {
      return IncompatibleNewExposure.NewExposureCoverage
    }
    
    property get IncompatibleNewExposure () : entity.IncompatibleNewExposure {
      return getIteratedValue(1) as entity.IncompatibleNewExposure
    }
    
    
  }
  
  
}