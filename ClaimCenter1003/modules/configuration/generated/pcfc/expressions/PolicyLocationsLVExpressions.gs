package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/PolicyLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLocationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/PolicyLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyLocationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at PolicyLocationsLV.pcf: line 49, column 39
    function action_15 () : void {
      PolicyLocationPopup.push(PolicyLocation, Claim, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=LocationNumber_Cell) at PolicyLocationsLV.pcf: line 39, column 50
    function action_7 () : void {
      PolicyLocationPopup.push(PolicyLocation, Claim, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=Address_Cell) at PolicyLocationsLV.pcf: line 49, column 39
    function action_dest_16 () : pcf.api.Destination {
      return pcf.PolicyLocationPopup.createDestination(PolicyLocation, Claim, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=LocationNumber_Cell) at PolicyLocationsLV.pcf: line 39, column 50
    function action_dest_8 () : pcf.api.Destination {
      return pcf.PolicyLocationPopup.createDestination(PolicyLocation, Claim, CurrentLocation.InEditMode)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=PolicyLocationIterator) at PolicyLocationsLV.pcf: line 28, column 43
    function checkBoxVisible_25 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'condition' attribute on ToolbarFlag at PolicyLocationsLV.pcf: line 31, column 23
    function condition_6 () : java.lang.Boolean {
      return PolicyLocation.LocationBasedRisks.Count > 0
    }
    
    // 'value' attribute on TextCell (id=LocationNumber_Cell) at PolicyLocationsLV.pcf: line 39, column 50
    function valueRoot_10 () : java.lang.Object {
      return PolicyLocation
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyLocationsLV.pcf: line 43, column 55
    function valueRoot_13 () : java.lang.Object {
      return PolicyLocation.Address
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyLocationsLV.pcf: line 43, column 55
    function value_12 () : java.lang.String {
      return PolicyLocation.Address.Description
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PolicyLocationsLV.pcf: line 49, column 39
    function value_17 () : entity.Address {
      return PolicyLocation.Address
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at PolicyLocationsLV.pcf: line 54, column 75
    function value_20 () : java.lang.String {
      return PolicyLocation.policyLocationLienHoldersOnly.join(", ")
    }
    
    // 'value' attribute on TypeKeyCell (id=HighValueItems_Cell) at PolicyLocationsLV.pcf: line 59, column 38
    function value_23 () : typekey.YesNo {
      return PolicyLocation.HighValueItems.Count > 0 ? YesNo.TC_YES : YesNo.TC_NO
    }
    
    // 'value' attribute on TextCell (id=LocationNumber_Cell) at PolicyLocationsLV.pcf: line 39, column 50
    function value_9 () : java.lang.String {
      return PolicyLocation.LocationNumber
    }
    
    // 'visible' attribute on TextCell (id=Lienholders_Cell) at PolicyLocationsLV.pcf: line 54, column 75
    function visible_21 () : java.lang.Boolean {
      return Claim.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    property get PolicyLocation () : entity.PolicyLocation {
      return getIteratedValue(1) as entity.PolicyLocation
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/PolicyLocationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLocationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator (id=PolicyLocationIterator) at PolicyLocationsLV.pcf: line 28, column 43
    function pickLocation_26 () : void {
      PolicyLocationPopup.push(null, Claim, true)
    }
    
    // 'value' attribute on TextCell (id=LocationNumber_Cell) at PolicyLocationsLV.pcf: line 39, column 50
    function sortValue_0 (PolicyLocation :  entity.PolicyLocation) : java.lang.Object {
      return PolicyLocation.LocationNumber
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at PolicyLocationsLV.pcf: line 43, column 55
    function sortValue_1 (PolicyLocation :  entity.PolicyLocation) : java.lang.Object {
      return PolicyLocation.Address.Description
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at PolicyLocationsLV.pcf: line 49, column 39
    function sortValue_2 (PolicyLocation :  entity.PolicyLocation) : java.lang.Object {
      return PolicyLocation.Address
    }
    
    // 'value' attribute on TextCell (id=Lienholders_Cell) at PolicyLocationsLV.pcf: line 54, column 75
    function sortValue_3 (PolicyLocation :  entity.PolicyLocation) : java.lang.Object {
      return PolicyLocation.policyLocationLienHoldersOnly.join(", ")
    }
    
    // 'value' attribute on TypeKeyCell (id=HighValueItems_Cell) at PolicyLocationsLV.pcf: line 59, column 38
    function sortValue_5 (PolicyLocation :  entity.PolicyLocation) : java.lang.Object {
      return PolicyLocation.HighValueItems.Count > 0 ? YesNo.TC_YES : YesNo.TC_NO
    }
    
    // 'toRemove' attribute on RowIterator (id=PolicyLocationIterator) at PolicyLocationsLV.pcf: line 28, column 43
    function toRemove_27 (PolicyLocation :  entity.PolicyLocation) : void {
      Claim.Policy.removeFromPolicyLocations(PolicyLocation)
    }
    
    // 'value' attribute on RowIterator (id=PolicyLocationIterator) at PolicyLocationsLV.pcf: line 28, column 43
    function value_28 () : entity.PolicyLocation[] {
      return PolicyLocations
    }
    
    // 'visible' attribute on TextCell (id=Lienholders_Cell) at PolicyLocationsLV.pcf: line 54, column 75
    function visible_4 () : java.lang.Boolean {
      return Claim.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get PolicyLocations () : PolicyLocation[] {
      return getRequireValue("PolicyLocations", 0) as PolicyLocation[]
    }
    
    property set PolicyLocations ($arg :  PolicyLocation[]) {
      setRequireValue("PolicyLocations", 0, $arg)
    }
    
    
  }
  
  
}