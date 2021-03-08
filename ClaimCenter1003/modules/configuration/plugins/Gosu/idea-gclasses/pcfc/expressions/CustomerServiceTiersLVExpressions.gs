package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/customerservicetiers/CustomerServiceTiersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CustomerServiceTiersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/customerservicetiers/CustomerServiceTiersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CustomerServiceTiersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=CustomerServiceTierName_Cell) at CustomerServiceTiersLV.pcf: line 26, column 52
    function sortValue_0 (aCustServiceTierSpecialHandling :  entity.CustomerServiceTierSpecialHandling) : java.lang.Object {
      return aCustServiceTierSpecialHandling.CustomerServiceTier
    }
    
    // 'value' attribute on TextCell (id=CustomerServiceTierDescription_Cell) at CustomerServiceTiersLV.pcf: line 30, column 84
    function sortValue_1 (aCustServiceTierSpecialHandling :  entity.CustomerServiceTierSpecialHandling) : java.lang.Object {
      return aCustServiceTierSpecialHandling.CustomerServiceTier.Description
    }
    
    // 'value' attribute on RowIterator at CustomerServiceTiersLV.pcf: line 19, column 63
    function value_11 () : entity.CustomerServiceTierSpecialHandling[] {
      return customerServiceTierSpecialHandlingList
    }
    
    property get customerServiceTierSpecialHandlingList () : CustomerServiceTierSpecialHandling[] {
      return getRequireValue("customerServiceTierSpecialHandlingList", 0) as CustomerServiceTierSpecialHandling[]
    }
    
    property set customerServiceTierSpecialHandlingList ($arg :  CustomerServiceTierSpecialHandling[]) {
      setRequireValue("customerServiceTierSpecialHandlingList", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/customerservicetiers/CustomerServiceTiersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CustomerServiceTiersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=CustomerServiceTierName_Cell) at CustomerServiceTiersLV.pcf: line 26, column 52
    function action_2 () : void {
      CustomerServiceTierDetail.drilldown(aCustServiceTierSpecialHandling)
    }
    
    // 'action' attribute on TypeKeyCell (id=CustomerServiceTierName_Cell) at CustomerServiceTiersLV.pcf: line 26, column 52
    function action_dest_3 () : pcf.api.Destination {
      return pcf.CustomerServiceTierDetail.createDestination(aCustServiceTierSpecialHandling)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at CustomerServiceTiersLV.pcf: line 19, column 63
    function checkBoxVisible_10 () : java.lang.Boolean {
      return perm.System.custsvctiermng
    }
    
    // 'value' attribute on TypeKeyCell (id=CustomerServiceTierName_Cell) at CustomerServiceTiersLV.pcf: line 26, column 52
    function valueRoot_5 () : java.lang.Object {
      return aCustServiceTierSpecialHandling
    }
    
    // 'value' attribute on TextCell (id=CustomerServiceTierDescription_Cell) at CustomerServiceTiersLV.pcf: line 30, column 84
    function valueRoot_8 () : java.lang.Object {
      return aCustServiceTierSpecialHandling.CustomerServiceTier
    }
    
    // 'value' attribute on TypeKeyCell (id=CustomerServiceTierName_Cell) at CustomerServiceTiersLV.pcf: line 26, column 52
    function value_4 () : typekey.CustomerServiceTier {
      return aCustServiceTierSpecialHandling.CustomerServiceTier
    }
    
    // 'value' attribute on TextCell (id=CustomerServiceTierDescription_Cell) at CustomerServiceTiersLV.pcf: line 30, column 84
    function value_7 () : java.lang.String {
      return aCustServiceTierSpecialHandling.CustomerServiceTier.Description
    }
    
    property get aCustServiceTierSpecialHandling () : entity.CustomerServiceTierSpecialHandling {
      return getIteratedValue(1) as entity.CustomerServiceTierSpecialHandling
    }
    
    
  }
  
  
}