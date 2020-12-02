package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/AggregateLimitClaimsWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AggregateLimitClaimsWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ParentClaim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.AggregateLimitClaimsWorksheet, {ParentClaim, AggregateLimit}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (ParentClaim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AggregateLimitClaimsWorksheet, {ParentClaim, AggregateLimit}, 0).goInWorkspace()
  }
  
  static function push (ParentClaim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Location {
    return __newDestinationForLocation(pcf.AggregateLimitClaimsWorksheet, {ParentClaim, AggregateLimit}, 0).push()
  }
  
  
}