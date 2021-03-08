package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/trip/PolicyTripLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyTripLVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/trip/PolicyTripLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends PolicyTripLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=TripRU_DisplayName_Cell) at PolicyTripLV.pcf: line 29, column 38
    function action_3 () : void {
      TripRUPopup.push( aClaim, aTripRU , CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TextCell (id=TripRU_DisplayName_Cell) at PolicyTripLV.pcf: line 29, column 38
    function action_dest_4 () : pcf.api.Destination {
      return pcf.TripRUPopup.createDestination( aClaim, aTripRU , CurrentLocation.InEditMode)
    }
    
    // 'value' attribute on TypeKeyCell (id=GeographicalRegion_Cell) at PolicyTripLV.pcf: line 34, column 51
    function valueRoot_8 () : java.lang.Object {
      return aTripRU
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PolicyTripLV.pcf: line 38, column 38
    function value_10 () : java.util.Date {
      return aTripRU.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at PolicyTripLV.pcf: line 42, column 36
    function value_13 () : java.util.Date {
      return aTripRU.EndDate
    }
    
    // 'value' attribute on TextCell (id=TripRU_DisplayName_Cell) at PolicyTripLV.pcf: line 29, column 38
    function value_5 () : entity.TripRU {
      return aTripRU
    }
    
    // 'value' attribute on TypeKeyCell (id=GeographicalRegion_Cell) at PolicyTripLV.pcf: line 34, column 51
    function value_7 () : typekey.GeographicalRegion {
      return aTripRU.GeographicalRegion
    }
    
    property get aTripRU () : entity.TripRU {
      return getIteratedValue(1) as entity.TripRU
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/trip/PolicyTripLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyTripLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at PolicyTripLV.pcf: line 23, column 35
    function pickLocation_17 () : void {
      TripRUPopup.push(aClaim)
    }
    
    // 'value' attribute on TypeKeyCell (id=GeographicalRegion_Cell) at PolicyTripLV.pcf: line 34, column 51
    function sortValue_0 (aTripRU :  entity.TripRU) : java.lang.Object {
      return aTripRU.GeographicalRegion
    }
    
    // 'value' attribute on DateCell (id=StartDate_Cell) at PolicyTripLV.pcf: line 38, column 38
    function sortValue_1 (aTripRU :  entity.TripRU) : java.lang.Object {
      return aTripRU.StartDate
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at PolicyTripLV.pcf: line 42, column 36
    function sortValue_2 (aTripRU :  entity.TripRU) : java.lang.Object {
      return aTripRU.EndDate
    }
    
    // 'value' attribute on RowIterator at PolicyTripLV.pcf: line 23, column 35
    function value_18 () : entity.TripRU[] {
      return aClaim.Policy.RiskUnits.whereTypeIs(TripRU)
    }
    
    property get Wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("Wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set Wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("Wizard", 0, $arg)
    }
    
    property get aClaim () : Claim {
      return getRequireValue("aClaim", 0) as Claim
    }
    
    property set aClaim ($arg :  Claim) {
      setRequireValue("aClaim", 0, $arg)
    }
    
    
  }
  
  
}