package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/CovTermPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CovTermPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (CovTermParam :  CovTerm, EditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CovTermPopup, {CovTermParam, EditMode}, 1)
  }
  
  static function createDestination (Coverage :  Coverage, CovTermType :  typekey.CovTerm, EditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CovTermPopup, {Coverage, CovTermType, EditMode}, 0)
  }
  
  static function push (CovTermParam :  CovTerm, EditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CovTermPopup, {CovTermParam, EditMode}, 1).push()
  }
  
  static function push (Coverage :  Coverage, CovTermType :  typekey.CovTerm, EditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CovTermPopup, {Coverage, CovTermType, EditMode}, 0).push()
  }
  
  
}