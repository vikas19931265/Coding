package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Financial.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CovTermAmount_Financial extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($covTerm :  CovTerm) : void {
    __widgetOf(this, pcf.CovTermAmount_Financial, SECTION_WIDGET_CLASS).setVariables(false, {$covTerm})
  }
  
  function refreshVariables ($covTerm :  CovTerm) : void {
    __widgetOf(this, pcf.CovTermAmount_Financial, SECTION_WIDGET_CLASS).setVariables(true, {$covTerm})
  }
  
  
}