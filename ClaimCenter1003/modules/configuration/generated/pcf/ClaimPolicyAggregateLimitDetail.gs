package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/ClaimPolicyAggregateLimitDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimPolicyAggregateLimitDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimPolicyAggregateLimitDetail, {Claim, AggregateLimit}, 0)
  }
  
  static function drilldown (Claim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyAggregateLimitDetail, {Claim, AggregateLimit}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyAggregateLimitDetail, {Claim, AggregateLimit}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyAggregateLimitDetail, {Claim, AggregateLimit}, 0).goInMain()
  }
  
  static function printPage (Claim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyAggregateLimitDetail, {Claim, AggregateLimit}, 0).printPage()
  }
  
  static function push (Claim :  Claim, AggregateLimit :  AggregateLimit) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyAggregateLimitDetail, {Claim, AggregateLimit}, 0).push()
  }
  
  
}