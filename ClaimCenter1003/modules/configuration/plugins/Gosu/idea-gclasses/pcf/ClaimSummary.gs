package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSummary extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim}, 0)
  }
  
  static function createDestination (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim, excludeConfidentialNotes}, 1)
  }
  
  static function drilldown (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim}, 0).drilldown()
  }
  
  static function drilldown (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim, excludeConfidentialNotes}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim, excludeConfidentialNotes}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim, excludeConfidentialNotes}, 1).goInMain()
  }
  
  static function printPage (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim}, 0).printPage()
  }
  
  static function printPage (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim, excludeConfidentialNotes}, 1).printPage()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim}, 0).push()
  }
  
  static function push (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSummary, {Claim, excludeConfidentialNotes}, 1).push()
  }
  
  
}