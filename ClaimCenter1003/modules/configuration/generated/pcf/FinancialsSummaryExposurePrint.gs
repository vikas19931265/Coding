package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/summary/print/FinancialsSummaryExposurePrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FinancialsSummaryExposurePrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, useFloatingFinancials :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.FinancialsSummaryExposurePrint, {Claim, useFloatingFinancials}, 0)
  }
  
  static function drilldown (Claim :  Claim, useFloatingFinancials :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FinancialsSummaryExposurePrint, {Claim, useFloatingFinancials}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, useFloatingFinancials :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FinancialsSummaryExposurePrint, {Claim, useFloatingFinancials}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, useFloatingFinancials :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FinancialsSummaryExposurePrint, {Claim, useFloatingFinancials}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, useFloatingFinancials :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FinancialsSummaryExposurePrint, {Claim, useFloatingFinancials}, 0).printPage()
  }
  
  static function push (Claim :  Claim, useFloatingFinancials :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.FinancialsSummaryExposurePrint, {Claim, useFloatingFinancials}, 0).push()
  }
  
  
}