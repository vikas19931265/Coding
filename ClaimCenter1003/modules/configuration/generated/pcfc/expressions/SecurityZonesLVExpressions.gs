package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/securityzones/SecurityZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SecurityZonesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/securityzones/SecurityZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SecurityZonesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at SecurityZonesLV.pcf: line 25, column 38
    function action_1 () : void {
      SecurityZoneDetail.go(SecurityZone)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at SecurityZonesLV.pcf: line 25, column 38
    function action_dest_2 () : pcf.api.Destination {
      return pcf.SecurityZoneDetail.createDestination(SecurityZone)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SecurityZonesLV.pcf: line 25, column 38
    function valueRoot_4 () : java.lang.Object {
      return SecurityZone
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SecurityZonesLV.pcf: line 25, column 38
    function value_3 () : java.lang.String {
      return SecurityZone.Name
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at SecurityZonesLV.pcf: line 30, column 45
    function value_6 () : java.lang.String {
      return SecurityZone.Description
    }
    
    property get SecurityZone () : entity.SecurityZone {
      return getIteratedValue(1) as entity.SecurityZone
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/securityzones/SecurityZonesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SecurityZonesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at SecurityZonesLV.pcf: line 25, column 38
    function sortValue_0 (SecurityZone :  entity.SecurityZone) : java.lang.Object {
      return SecurityZone.Name
    }
    
    // 'value' attribute on RowIterator at SecurityZonesLV.pcf: line 16, column 79
    function value_9 () : gw.api.database.IQueryBeanResult<entity.SecurityZone> {
      return SecurityZoneList
    }
    
    property get SecurityZoneList () : gw.api.database.IQueryBeanResult<SecurityZone> {
      return getRequireValue("SecurityZoneList", 0) as gw.api.database.IQueryBeanResult<SecurityZone>
    }
    
    property set SecurityZoneList ($arg :  gw.api.database.IQueryBeanResult<SecurityZone>) {
      setRequireValue("SecurityZoneList", 0, $arg)
    }
    
    
  }
  
  
}