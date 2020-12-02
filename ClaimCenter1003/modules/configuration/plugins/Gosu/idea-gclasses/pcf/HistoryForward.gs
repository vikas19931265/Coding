package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/history/HistoryForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class HistoryForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (history :  History) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.HistoryForward, {history}, 0)
  }
  
  static function drilldown (history :  History) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HistoryForward, {history}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (history :  History) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HistoryForward, {history}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (history :  History) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HistoryForward, {history}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (history :  History) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HistoryForward, {history}, 0).goInWorkspace()
  }
  
  static function printPage (history :  History) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HistoryForward, {history}, 0).printPage()
  }
  
  static function push (history :  History) : pcf.api.Location {
    return __newDestinationForLocation(pcf.HistoryForward, {history}, 0).push()
  }
  
  
}