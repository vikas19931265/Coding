package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotFixedPropertyIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotFixedPropertyIncidentDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotFixedPropertyIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotFixedPropertyIncidentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 41, column 27
    function def_onEnter_11 (def :  pcf.AddressSnapshotInputSet) : void {
      def.onEnter(FixedPropertyIncident.Property.Address, null)
    }
    
    // 'def' attribute on InputSetRef at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 41, column 27
    function def_refreshVariables_12 (def :  pcf.AddressSnapshotInputSet) : void {
      def.refreshVariables(FixedPropertyIncident.Property.Address, null)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 58, column 46
    function sortValue_13 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return PropertyOwner.Lienholder.DisplayName
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 63, column 46
    function sortValue_14 (PropertyOwner :  dynamic.Dynamic) : java.lang.Object {
      return PropertyOwner.OwnerType
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 20, column 38
    function valueRoot_1 () : java.lang.Object {
      return FixedPropertyIncident
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 20, column 38
    function value_0 () : dynamic.Dynamic {
      return FixedPropertyIncident.PropertyDesc
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 51, column 41
    function value_21 () : dynamic.Dynamic {
      return FixedPropertyIncident.Property.Lienholders
    }
    
    // 'value' attribute on TextInput (id=EstimatedReceived_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 75, column 38
    function value_22 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 81, column 84
    function value_26 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstRepairCost
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 26, column 38
    function value_3 () : dynamic.Dynamic {
      return FixedPropertyIncident.Description
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 87, column 84
    function value_31 () : dynamic.Dynamic {
      return FixedPropertyIncident.EstRepairTime
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_ClassType_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 97, column 38
    function value_35 () : dynamic.Dynamic {
      return FixedPropertyIncident.ClassType
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumStories_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 102, column 38
    function value_38 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumStories
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_RoofMaterial_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 107, column 38
    function value_41 () : dynamic.Dynamic {
      return FixedPropertyIncident.RoofMaterial
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_ExtWallMat_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 112, column 38
    function value_44 () : dynamic.Dynamic {
      return FixedPropertyIncident.ExtWallMat
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_LossArea_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 120, column 38
    function value_47 () : dynamic.Dynamic {
      return FixedPropertyIncident.LossArea
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_SprinklerType_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 130, column 40
    function value_50 () : dynamic.Dynamic {
      return FixedPropertyIncident.SprinklerType
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkler_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 135, column 40
    function value_53 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumSprinkler
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkOper_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 140, column 40
    function value_56 () : dynamic.Dynamic {
      return FixedPropertyIncident.NumSprinkOper
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_SprinkRetServ_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 145, column 40
    function value_59 () : dynamic.Dynamic {
      return FixedPropertyIncident.SprinkRetServ
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 31, column 38
    function value_6 () : dynamic.Dynamic {
      return FixedPropertyIncident.LossEstimate
    }
    
    // 'value' attribute on TextInput (id=Owner_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 38, column 81
    function value_9 () : java.lang.String {
      return util.Snapshot.renderValue(FixedPropertyIncident.incidentowner)
    }
    
    // 'visible' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 81, column 84
    function visible_25 () : java.lang.Boolean {
      return FixedPropertyIncident.EstimatesReceived.Code == "Yes"
    }
    
    // 'visible' attribute on InputSet at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 122, column 83
    function visible_62 () : java.lang.Boolean {
      return FixedPropertyIncident.Claim.LossCause.Code == LossCause.TC_FIRE
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
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotFixedPropertyIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotFixedPropertyIncidentDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 58, column 46
    function valueRoot_16 () : java.lang.Object {
      return PropertyOwner.Lienholder
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 63, column 46
    function valueRoot_19 () : java.lang.Object {
      return PropertyOwner
    }
    
    // 'value' attribute on TextCell (id=Lienholder_Cell) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 58, column 46
    function value_15 () : dynamic.Dynamic {
      return PropertyOwner.Lienholder.DisplayName
    }
    
    // 'value' attribute on TextCell (id=OwnerType_Cell) at ClaimSnapshotFixedPropertyIncidentDV.pcf: line 63, column 46
    function value_18 () : dynamic.Dynamic {
      return PropertyOwner.OwnerType
    }
    
    property get PropertyOwner () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}