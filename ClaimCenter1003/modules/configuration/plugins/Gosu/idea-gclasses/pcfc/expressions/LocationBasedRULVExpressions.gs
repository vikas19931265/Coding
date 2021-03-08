package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/LocationBasedRULV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocationBasedRULVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/LocationBasedRULV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LocationBasedRULVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RUType_Cell) at LocationBasedRULV.pcf: line 38, column 43
    function valueRoot_14 () : java.lang.Object {
      return RU.Subtype
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at LocationBasedRULV.pcf: line 43, column 84
    function valueRoot_17 () : java.lang.Object {
      return RU.Building
    }
    
    // 'value' attribute on TextCell (id=RUNumber_Cell) at LocationBasedRULV.pcf: line 29, column 42
    function valueRoot_8 () : java.lang.Object {
      return RU
    }
    
    // 'value' attribute on TextCell (id=RUDescription_Cell) at LocationBasedRULV.pcf: line 34, column 35
    function value_10 () : java.lang.String {
      return RU.Description
    }
    
    // 'value' attribute on TextCell (id=RUType_Cell) at LocationBasedRULV.pcf: line 38, column 43
    function value_13 () : java.lang.String {
      return RU.Subtype.Description
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at LocationBasedRULV.pcf: line 43, column 84
    function value_16 () : java.lang.String {
      return RU.Building.BuildingNumber
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at LocationBasedRULV.pcf: line 48, column 84
    function value_20 () : java.lang.String {
      return RU.Lienholders.join(", ")
    }
    
    // 'value' attribute on TextCell (id=RUNumber_Cell) at LocationBasedRULV.pcf: line 29, column 42
    function value_7 () : java.lang.Integer {
      return RU.RUNumber
    }
    
    // 'visible' attribute on TextCell (id=BuildingNumber_Cell) at LocationBasedRULV.pcf: line 43, column 84
    function visible_18 () : java.lang.Boolean {
      return PolicyLocation.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    property get RU () : entity.LocationBasedRU {
      return getIteratedValue(1) as entity.LocationBasedRU
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/LocationBasedRULV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationBasedRULVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RUNumber_Cell) at LocationBasedRULV.pcf: line 29, column 42
    function sortValue_0 (RU :  entity.LocationBasedRU) : java.lang.Object {
      return RU.RUNumber
    }
    
    // 'value' attribute on TextCell (id=RUDescription_Cell) at LocationBasedRULV.pcf: line 34, column 35
    function sortValue_1 (RU :  entity.LocationBasedRU) : java.lang.Object {
      return RU.Description
    }
    
    // 'value' attribute on TextCell (id=RUType_Cell) at LocationBasedRULV.pcf: line 38, column 43
    function sortValue_2 (RU :  entity.LocationBasedRU) : java.lang.Object {
      return RU.Subtype.Description
    }
    
    // 'value' attribute on TextCell (id=BuildingNumber_Cell) at LocationBasedRULV.pcf: line 43, column 84
    function sortValue_3 (RU :  entity.LocationBasedRU) : java.lang.Object {
      return RU.Building.BuildingNumber
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at LocationBasedRULV.pcf: line 48, column 84
    function sortValue_5 (RU :  entity.LocationBasedRU) : java.lang.Object {
      return RU.Lienholders.join(", ")
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=LocationBasedRUIterator) at LocationBasedRULV.pcf: line 23, column 44
    function toCreateAndAdd_23 () : entity.LocationBasedRU {
      return PolicyLocation.addLocationBasedRU(typekey.RiskUnit.TC_LOCATIONBASEDRU.Description)
    }
    
    // 'toRemove' attribute on RowIterator (id=LocationBasedRUIterator) at LocationBasedRULV.pcf: line 23, column 44
    function toRemove_24 (RU :  entity.LocationBasedRU) : void {
      PolicyLocation.removeLocationBasedRU(RU)
    }
    
    // 'value' attribute on RowIterator (id=LocationBasedRUIterator) at LocationBasedRULV.pcf: line 23, column 44
    function value_25 () : entity.LocationBasedRU[] {
      return PolicyLocation.LocationBasedRisks
    }
    
    // 'visible' attribute on TextCell (id=BuildingNumber_Cell) at LocationBasedRULV.pcf: line 43, column 84
    function visible_4 () : java.lang.Boolean {
      return PolicyLocation.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    property get PolicyLocation () : PolicyLocation {
      return getRequireValue("PolicyLocation", 0) as PolicyLocation
    }
    
    property set PolicyLocation ($arg :  PolicyLocation) {
      setRequireValue("PolicyLocation", 0, $arg)
    }
    
    
  }
  
  
}