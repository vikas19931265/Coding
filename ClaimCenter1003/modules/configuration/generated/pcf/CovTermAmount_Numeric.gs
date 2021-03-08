package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermAmount.Numeric.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CovTermAmount_Numeric extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($covTerm :  CovTerm) : void {
    __widgetOf(this, pcf.CovTermAmount_Numeric, SECTION_WIDGET_CLASS).setVariables(false, {$covTerm})
  }
  
  function refreshVariables ($covTerm :  CovTerm) : void {
    __widgetOf(this, pcf.CovTermAmount_Numeric, SECTION_WIDGET_CLASS).setVariables(true, {$covTerm})
  }
  
  
}