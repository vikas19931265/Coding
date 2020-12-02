package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/accounts/ExistingAccountRefWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ExistingAccountRefWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (account :  Account, policies :  java.util.List<Policy>) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ExistingAccountRefWorksheet, {account, policies}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (account :  Account, policies :  java.util.List<Policy>) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ExistingAccountRefWorksheet, {account, policies}, 0).goInWorkspace()
  }
  
  static function push (account :  Account, policies :  java.util.List<Policy>) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ExistingAccountRefWorksheet, {account, policies}, 0).push()
  }
  
  
}