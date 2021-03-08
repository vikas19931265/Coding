package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/associations/ClaimAssociationDetailForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimAssociationDetailForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimAssociationDetailForward, {Claim, ClaimAssociation}, 0)
  }
  
  static function drilldown (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetailForward, {Claim, ClaimAssociation}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetailForward, {Claim, ClaimAssociation}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetailForward, {Claim, ClaimAssociation}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetailForward, {Claim, ClaimAssociation}, 0).goInWorkspace()
  }
  
  static function printPage (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetailForward, {Claim, ClaimAssociation}, 0).printPage()
  }
  
  static function push (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetailForward, {Claim, ClaimAssociation}, 0).push()
  }
  
  
}