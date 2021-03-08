package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/subrogation/General/SubrogationGeneral.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SubrogationGeneral extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim}, 0)
  }
  
  static function createDestination (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim, selectSubrogationFinancialsCard}, 1)
  }
  
  static function drilldown (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim}, 0).drilldown()
  }
  
  static function drilldown (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim, selectSubrogationFinancialsCard}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim, selectSubrogationFinancialsCard}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim, selectSubrogationFinancialsCard}, 1).goInMain()
  }
  
  static function printPage (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim}, 0).printPage()
  }
  
  static function printPage (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim, selectSubrogationFinancialsCard}, 1).printPage()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim}, 0).push()
  }
  
  static function push (Claim :  Claim, selectSubrogationFinancialsCard :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SubrogationGeneral, {Claim, selectSubrogationFinancialsCard}, 1).push()
  }
  
  
}