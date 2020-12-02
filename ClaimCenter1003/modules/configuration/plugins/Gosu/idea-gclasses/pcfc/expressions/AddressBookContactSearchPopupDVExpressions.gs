package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/AddressBookContactSearchPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookContactSearchPopupDVExpressions {
  @javax.annotation.Generated("config/web/pcf/addressbook/AddressBookContactSearchPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookContactSearchPopupDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on Choice (id=FromSearch) at AddressBookContactSearchPopupDV.pcf: line 23, column 31
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      contactSearchHelper.searchContactsByProximity = (__VALUE_TO_SET as boolean)
    }
    
    // 'initialValue' attribute on Variable at AddressBookContactSearchPopupDV.pcf: line 13, column 58
    function initialValue_0 () : gw.api.contact.CCProximitySearchPageHelper {
      return new gw.api.contact.CCProximitySearchPageHelper()
    }
    
    // 'value' attribute on Choice (id=FromSearch) at AddressBookContactSearchPopupDV.pcf: line 23, column 31
    function valueRoot_3 () : java.lang.Object {
      return contactSearchHelper
    }
    
    // 'value' attribute on Choice (id=FromSearch) at AddressBookContactSearchPopupDV.pcf: line 23, column 31
    function value_1 () : boolean {
      return contactSearchHelper.searchContactsByProximity
    }
    
    // 'visible' attribute on InputSet at AddressBookContactSearchPopupDV.pcf: line 16, column 67
    function visible_7 () : java.lang.Boolean {
      return proximitySearchPageHelper.useGeocodeUILocally()
    }
    
    property get contactSearchHelper () : gw.pcf.ContactSearchHelper {
      return getRequireValue("contactSearchHelper", 0) as gw.pcf.ContactSearchHelper
    }
    
    property set contactSearchHelper ($arg :  gw.pcf.ContactSearchHelper) {
      setRequireValue("contactSearchHelper", 0, $arg)
    }
    
    property get proximitySearchPageHelper () : gw.api.contact.CCProximitySearchPageHelper {
      return getVariableValue("proximitySearchPageHelper", 0) as gw.api.contact.CCProximitySearchPageHelper
    }
    
    property set proximitySearchPageHelper ($arg :  gw.api.contact.CCProximitySearchPageHelper) {
      setVariableValue("proximitySearchPageHelper", 0, $arg)
    }
    
    
  }
  
  
}