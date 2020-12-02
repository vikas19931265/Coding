package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/groups/OrganizationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OrganizationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/groups/OrganizationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OrganizationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at OrganizationsLV.pcf: line 23, column 38
    function action_2 () : void {
      OrganizationDetail.go(Organization)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at OrganizationsLV.pcf: line 23, column 38
    function action_dest_3 () : pcf.api.Destination {
      return pcf.OrganizationDetail.createDestination(Organization)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationsLV.pcf: line 23, column 38
    function valueRoot_5 () : java.lang.Object {
      return Organization
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationsLV.pcf: line 23, column 38
    function value_4 () : java.lang.String {
      return Organization.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at OrganizationsLV.pcf: line 29, column 45
    function value_7 () : typekey.BusinessType {
      return Organization.Type
    }
    
    property get Organization () : entity.Organization {
      return getIteratedValue(1) as entity.Organization
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/groups/OrganizationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OrganizationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at OrganizationsLV.pcf: line 23, column 38
    function sortValue_0 (Organization :  entity.Organization) : java.lang.Object {
      return Organization.Name
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at OrganizationsLV.pcf: line 29, column 45
    function sortValue_1 (Organization :  entity.Organization) : java.lang.Object {
      return Organization.Type
    }
    
    // 'value' attribute on RowIterator at OrganizationsLV.pcf: line 16, column 87
    function value_10 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return Organizations
    }
    
    property get Organizations () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("Organizations", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set Organizations ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("Organizations", 0, $arg)
    }
    
    
  }
  
  
}