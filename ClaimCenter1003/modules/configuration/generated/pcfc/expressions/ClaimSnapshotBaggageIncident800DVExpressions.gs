package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotBaggageIncident800DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotBaggageIncident800DVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotBaggageIncident800DV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotBaggageIncident800DVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 53, column 38
    function label_15 () : java.lang.Object {
      return BaggageIncidentInstance.DelayOnly == true ? DisplayKey.get("Web.BaggageIncident.DelayDescription") : DisplayKey.get("Web.BaggageIncident.Description")
    }
    
    // 'value' attribute on TextInput (id=BaggageType_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 15, column 37
    function valueRoot_1 () : java.lang.Object {
      return BaggageIncidentInstance
    }
    
    // 'value' attribute on TextInput (id=BaggageType_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 15, column 37
    function value_0 () : dynamic.Dynamic {
      return BaggageIncidentInstance.BaggageType
    }
    
    // 'value' attribute on DateInput (id=BaggageRecoveredOn_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 47, column 38
    function value_12 () : dynamic.Dynamic {
      return BaggageIncidentInstance.BaggageRecoveredOn
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 53, column 38
    function value_16 () : dynamic.Dynamic {
      return BaggageIncidentInstance.Description
    }
    
    // 'value' attribute on TextInput (id=LossEstimate_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 58, column 38
    function value_20 () : dynamic.Dynamic {
      return BaggageIncidentInstance.LossEstimate
    }
    
    // 'value' attribute on BooleanRadioInput (id=CarrierCompensated_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 66, column 37
    function value_23 () : dynamic.Dynamic {
      return BaggageIncidentInstance.CarrierCompensated
    }
    
    // 'value' attribute on TextInput (id=CarrierCompensatedAmount_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 74, column 71
    function value_27 () : dynamic.Dynamic {
      return BaggageIncidentInstance.CarrierCompensatedAmount
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyDescription_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 23, column 38
    function value_3 () : dynamic.Dynamic {
      return BaggageIncidentInstance.PropertyDesc
    }
    
    // 'value' attribute on TextInput (id=EstimatedReceived_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 83, column 37
    function value_31 () : dynamic.Dynamic {
      return BaggageIncidentInstance.EstimatesReceived
    }
    
    // 'value' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 91, column 81
    function value_35 () : dynamic.Dynamic {
      return BaggageIncidentInstance.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 97, column 81
    function value_40 () : dynamic.Dynamic {
      return BaggageIncidentInstance.EstRepairTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=DelayOnly_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 31, column 37
    function value_6 () : dynamic.Dynamic {
      return BaggageIncidentInstance.DelayOnly
    }
    
    // 'value' attribute on DateInput (id=BaggageMissingFrom_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 40, column 38
    function value_9 () : dynamic.Dynamic {
      return BaggageIncidentInstance.BaggageMissingFrom
    }
    
    // 'visible' attribute on TextInput (id=CarrierCompensatedAmount_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 74, column 71
    function visible_26 () : java.lang.Boolean {
      return BaggageIncidentInstance.CarrierCompensated == true
    }
    
    // 'visible' attribute on TextInput (id=EstimateCost_Input) at ClaimSnapshotBaggageIncident800DV.pcf: line 91, column 81
    function visible_34 () : java.lang.Boolean {
      return BaggageIncidentInstance.EstimatesReceived == "yes"
    }
    
    property get BaggageIncidentInstance () : dynamic.Dynamic {
      return getRequireValue("BaggageIncidentInstance", 0) as dynamic.Dynamic
    }
    
    property set BaggageIncidentInstance ($arg :  dynamic.Dynamic) {
      setRequireValue("BaggageIncidentInstance", 0, $arg)
    }
    
    
  }
  
  
}