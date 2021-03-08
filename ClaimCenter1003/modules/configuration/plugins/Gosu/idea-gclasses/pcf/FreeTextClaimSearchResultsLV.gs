package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/FreeTextClaimSearchResultsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FreeTextClaimSearchResultsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($helper :  gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper, $results :  gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity>) : void {
    __widgetOf(this, pcf.FreeTextClaimSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(false, {$helper, $results})
  }
  
  function refreshVariables ($helper :  gw.pcf.freetextclaimsearch.FreeTextClaimSearchScreenHelper, $results :  gw.api.database.IQueryBeanResult<FreeTextClaimSearchEntity>) : void {
    __widgetOf(this, pcf.FreeTextClaimSearchResultsLV, SECTION_WIDGET_CLASS).setVariables(true, {$helper, $results})
  }
  
  
}