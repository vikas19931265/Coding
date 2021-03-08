package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotFixedPropertyIncident500DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotFixedPropertyIncident500DVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotFixedPropertyIncident500DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotFixedPropertyIncident500DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 76, column 46
    function sortValue_24 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return PropertyOwner.Lienholder.DisplayName
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 81, column 46
    function sortValue_25 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return PropertyOwner.OwnerType
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 20, column 38
    function valueRoot_1 () : java.lang.Object {
      return FixedPropertyIncident
    }
    
    // 'value' attribute on TextInput (id=Address_AddressLine1_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 39, column 38
    function valueRoot_10 () : java.lang.Object {
      return FixedPropertyIncident.Property.Address
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return FixedPropertyIncident.PropertyDesc
    }
    
    // 'value' attribute on TextInput (id=Address_AddressLine2_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 44, column 38
    function value_12 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Address.AddressLine2
    }
    
    // 'value' attribute on TextInput (id=Address_City_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 49, column 38
    function value_15 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Address.City
    }
    
    // 'value' attribute on TextInput (id=Address_State_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 54, column 38
    function value_18 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Address.State
    }
    
    // 'value' attribute on TextInput (id=Address_PostalCode_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 59, column 38
    function value_21 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Address.PostalCode
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return FixedPropertyIncident.Description
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 69, column 41
    function value_32 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Lienholders
    }
    
    // 'value' attribute on TextInput (id=InspectionRequired_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 93, column 38
    function value_33 () : dynamic.Dynamic {
      return FixedPropertyIncident.InspectionRequired
    }
    
    // 'value' attribute on TextInput (id=WhenToView_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 98, column 38
    function value_36 () : dynamic.Dynamic {
      return FixedPropertyIncident.WhenToView
    }
    
    // 'value' attribute on TextInput (id=EstimatedReceived_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 106, column 38
    function value_39 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 112, column 84
    function value_43 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 118, column 84
    function value_48 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstRepairTime
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_ClassType_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 128, column 38
    function value_52 () : dynamic.Dynamic {
      return FixedPropertyIncident.ClassType
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumStories_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 133, column 38
    function value_55 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumStories
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_RoofMaterial_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 138, column 38
    function value_58 () : dynamic.Dynamic {
      return FixedPropertyIncident.RoofMaterial
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return FixedPropertyIncident.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_ExtWallMat_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 143, column 38
    function value_61 () : dynamic.Dynamic {
      return FixedPropertyIncident.ExtWallMat
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_LossArea_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 151, column 38
    function value_64 () : dynamic.Dynamic {
      return FixedPropertyIncident.LossArea
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_FireProtDetails_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 159, column 85
    function value_68 () : dynamic.Dynamic {
      return FixedPropertyIncident.FireProtDetails
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_SprinklerType_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 165, column 85
    function value_73 () : dynamic.Dynamic {
      return FixedPropertyIncident.SprinklerType
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkler_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 171, column 85
    function value_78 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumSprinkler
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkOper_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 177, column 85
    function value_83 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumSprinkOper
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_SprinkRetServ_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 183, column 85
    function value_88 () : dynamic.Dynamic {
      return FixedPropertyIncident.SprinkRetServ
    }
    
    // 'value' attribute on TextInput (id=Address_AddressLine1_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 39, column 38
    function value_9 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Address.AddressLine1
    }
    
    // 'visible' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 112, column 84
    function visible_42 () : java.lang.Boolean {
      return FixedPropertyIncident.EstimatesReceived.Code == "Yes"
    }
    
    // 'visible' attribute on TextInput (id=PropertyAttribute_FireProtDetails_Input) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 159, column 85
    function visible_67 () : java.lang.Boolean {
      return  FixedPropertyIncident.Claim.LossCause.Code == "fire" 
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get FixedPropertyIncident () : dynamic.Dynamic {
      return getRequireValue("FixedPropertyIncident", 0) as dynamic.Dynamic
    }
    
    property set FixedPropertyIncident ($arg :  dynamic.Dynamic) {
      setRequireValue("FixedPropertyIncident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/500/ClaimSnapshotFixedPropertyIncident500DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotFixedPropertyIncident500DVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 76, column 46
    function valueRoot_27 () : java.lang.Object {
      return PropertyOwner.Lienholder
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 81, column 46
    function valueRoot_30 () : java.lang.Object {
      return PropertyOwner
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 76, column 46
    function value_26 () : dynamic.Dynamic {
      return PropertyOwner.Lienholder.DisplayName
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncident500DV.pcf: line 81, column 46
    function value_29 () : dynamic.Dynamic {
      return PropertyOwner.OwnerType
    }
    
    property get PropertyOwner () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}