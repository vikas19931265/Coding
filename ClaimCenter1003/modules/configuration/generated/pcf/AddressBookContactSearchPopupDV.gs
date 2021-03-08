package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/AddressBookContactSearchPopupDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddressBookContactSearchPopupDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($contactSearchHelper :  gw.pcf.ContactSearchHelper) : void {
    __widgetOf(this, pcf.AddressBookContactSearchPopupDV, SECTION_WIDGET_CLASS).setVariables(false, {$contactSearchHelper})
  }
  
  function refreshVariables ($contactSearchHelper :  gw.pcf.ContactSearchHelper) : void {
    __widgetOf(this, pcf.AddressBookContactSearchPopupDV, SECTION_WIDGET_CLASS).setVariables(true, {$contactSearchHelper})
  }
  
  
}