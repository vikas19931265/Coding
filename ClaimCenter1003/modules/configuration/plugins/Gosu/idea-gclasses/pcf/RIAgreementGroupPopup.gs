package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/reinsurance/RIAgreementGroupPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class RIAgreementGroupPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim, agreement :  RIAgreement) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.RIAgreementGroupPopup, {claim, agreement}, 0)
  }
  
  static function push (claim :  Claim, agreement :  RIAgreement) : pcf.api.Location {
    return __newDestinationForLocation(pcf.RIAgreementGroupPopup, {claim, agreement}, 0).push()
  }
  
  
}