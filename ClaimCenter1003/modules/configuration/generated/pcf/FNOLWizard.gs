package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FNOLWizard extends com.guidewire.pl.web.codegen.WizardBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForWizard(pcf.FNOLWizard, {}, 0)
  }
  
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForWizard(pcf.FNOLWizard, {Claim}, 3)
  }
  
  static function createDestination (policyType :  PolicyType, policyNumber :  String, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Destination {
    return __newDestinationForWizard(pcf.FNOLWizard, {policyType, policyNumber, claimMode, LossDate, PageMode}, 2)
  }
  
  static function createDestination (PageMode :  boolean) : pcf.api.Destination {
    return __newDestinationForWizard(pcf.FNOLWizard, {PageMode}, 1)
  }
  
  static function createDestination (searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Destination {
    return __newDestinationForWizard(pcf.FNOLWizard, {searchCriteriaAndSummary, claimMode, LossDate, PageMode}, 4)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {}, 0).drilldown()
  }
  
  static function drilldown (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {Claim}, 3).drilldown()
  }
  
  static function drilldown (policyType :  PolicyType, policyNumber :  String, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {policyType, policyNumber, claimMode, LossDate, PageMode}, 2).drilldown()
  }
  
  static function drilldown (PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {PageMode}, 1).drilldown()
  }
  
  static function drilldown (searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {searchCriteriaAndSummary, claimMode, LossDate, PageMode}, 4).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go () : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {Claim}, 3).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (policyType :  PolicyType, policyNumber :  String, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {policyType, policyNumber, claimMode, LossDate, PageMode}, 2).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {PageMode}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {searchCriteriaAndSummary, claimMode, LossDate, PageMode}, 4).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain () : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {Claim}, 3).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (policyType :  PolicyType, policyNumber :  String, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {policyType, policyNumber, claimMode, LossDate, PageMode}, 2).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {PageMode}, 1).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {searchCriteriaAndSummary, claimMode, LossDate, PageMode}, 4).goInMain()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {}, 0).printPage()
  }
  
  static function printPage (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {Claim}, 3).printPage()
  }
  
  static function printPage (policyType :  PolicyType, policyNumber :  String, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {policyType, policyNumber, claimMode, LossDate, PageMode}, 2).printPage()
  }
  
  static function printPage (PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {PageMode}, 1).printPage()
  }
  
  static function printPage (searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {searchCriteriaAndSummary, claimMode, LossDate, PageMode}, 4).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {}, 0).push()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {Claim}, 3).push()
  }
  
  static function push (policyType :  PolicyType, policyNumber :  String, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {policyType, policyNumber, claimMode, LossDate, PageMode}, 2).push()
  }
  
  static function push (PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {PageMode}, 1).push()
  }
  
  static function push (searchCriteriaAndSummary :  gw.api.claim.NewClaimPolicySearchCriteriaAndSummary, claimMode :  gw.api.claim.NewClaimMode, LossDate :  java.util.Date, PageMode :  boolean) : pcf.api.Location {
    return __newDestinationForWizard(pcf.FNOLWizard, {searchCriteriaAndSummary, claimMode, LossDate, PageMode}, 4).push()
  }
  
  
}