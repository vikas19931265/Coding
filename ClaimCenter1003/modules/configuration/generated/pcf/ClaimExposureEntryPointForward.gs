package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/util/ClaimExposureEntryPointForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimExposureEntryPointForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claimNumber :  String, exposureClaimOrder :  String, exposureId :  String) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimExposureEntryPointForward, {claimNumber, exposureClaimOrder, exposureId}, 0)
  }
  
  static function drilldown (claimNumber :  String, exposureClaimOrder :  String, exposureId :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimExposureEntryPointForward, {claimNumber, exposureClaimOrder, exposureId}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (claimNumber :  String, exposureClaimOrder :  String, exposureId :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimExposureEntryPointForward, {claimNumber, exposureClaimOrder, exposureId}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (claimNumber :  String, exposureClaimOrder :  String, exposureId :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimExposureEntryPointForward, {claimNumber, exposureClaimOrder, exposureId}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (claimNumber :  String, exposureClaimOrder :  String, exposureId :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimExposureEntryPointForward, {claimNumber, exposureClaimOrder, exposureId}, 0).goInWorkspace()
  }
  
  static function printPage (claimNumber :  String, exposureClaimOrder :  String, exposureId :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimExposureEntryPointForward, {claimNumber, exposureClaimOrder, exposureId}, 0).printPage()
  }
  
  static function push (claimNumber :  String, exposureClaimOrder :  String, exposureId :  String) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimExposureEntryPointForward, {claimNumber, exposureClaimOrder, exposureId}, 0).push()
  }
  
  
}