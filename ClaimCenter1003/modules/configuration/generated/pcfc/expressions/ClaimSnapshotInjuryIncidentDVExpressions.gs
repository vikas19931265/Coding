package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotInjuryIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSnapshotInjuryIncidentDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotInjuryIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshotInjuryIncidentDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSnapshotInjuryIncidentDV.pcf: line 13, column 23
    function initialValue_0 () : boolean {
      return InjuryIncidentInstance.MedicalTreatmentType != null || InjuryIncidentInstance.PrimaryDoctor != null
    }
    
    // 'value' attribute on TextCell (id=Ordering_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 70, column 36
    function sortValue_17 (BodyPartDetails :  dynamic.Dynamic) : java.lang.Object {
      return BodyPartDetails.Ordering
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 76, column 48
    function sortValue_18 (BodyPartDetails :  dynamic.Dynamic) : java.lang.Object {
      return BodyPartDetails.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 82, column 48
    function sortValue_19 (BodyPartDetails :  dynamic.Dynamic) : java.lang.Object {
      return BodyPartDetails.DetailedBodyPart
    }
    
    // 'value' attribute on TextInput (id=PrimaryDoctor_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 131, column 40
    function valueRoot_48 () : java.lang.Object {
      return InjuryIncidentInstance.PrimaryDoctor
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 27, column 40
    function valueRoot_6 () : java.lang.Object {
      return InjuryIncidentInstance
    }
    
    // 'value' attribute on TextInput (id=PrimaryInjuryType_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 38, column 40
    function value_11 () : dynamic.Dynamic {
      return InjuryIncidentInstance.GeneralInjuryType
    }
    
    // 'value' attribute on TextInput (id=DetailedInjuryType_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 43, column 40
    function value_14 () : dynamic.Dynamic {
      return InjuryIncidentInstance.DetailedInjuryType
    }
    
    // 'value' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 22, column 81
    function value_2 () : dynamic.Dynamic {
      return gw.pcf.LossPartyUtils.getLossParty(InjuryIncidentInstance)
    }
    
    // 'value' attribute on RowIterator at ClaimSnapshotInjuryIncidentDV.pcf: line 59, column 43
    function value_39 () : dynamic.Dynamic {
      return InjuryIncidentInstance.BodyParts
    }
    
    // 'value' attribute on BooleanRadioInput (id=ReceivedTreatment_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 118, column 29
    function value_40 () : java.lang.Boolean {
      return treatment
    }
    
    // 'value' attribute on TextInput (id=TreatmentType_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 126, column 32
    function value_43 () : dynamic.Dynamic {
      return InjuryIncidentInstance.MedicalTreatmentType
    }
    
    // 'value' attribute on TextInput (id=PrimaryDoctor_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 131, column 40
    function value_47 () : dynamic.Dynamic {
      return InjuryIncidentInstance.PrimaryDoctor.DisplayName
    }
    
    // 'value' attribute on TextInput (id=Severity_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 27, column 40
    function value_5 () : dynamic.Dynamic {
      return InjuryIncidentInstance.Severity
    }
    
    // 'value' attribute on TextInput (id=LostWages_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 136, column 39
    function value_50 () : dynamic.Dynamic {
      return InjuryIncidentInstance.LostWages
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryDescription_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 33, column 40
    function value_8 () : dynamic.Dynamic {
      return InjuryIncidentInstance.Description
    }
    
    // 'visible' attribute on TextInput (id=LossParty_Input) at ClaimSnapshotInjuryIncidentDV.pcf: line 22, column 81
    function visible_1 () : java.lang.Boolean {
      return gw.pcf.LossPartyUtils.hasLossParty(InjuryIncidentInstance)
    }
    
    property get InjuryIncidentInstance () : dynamic.Dynamic {
      return getRequireValue("InjuryIncidentInstance", 0) as dynamic.Dynamic
    }
    
    property set InjuryIncidentInstance ($arg :  dynamic.Dynamic) {
      setRequireValue("InjuryIncidentInstance", 0, $arg)
    }
    
    property get treatment () : boolean {
      return getVariableValue("treatment", 0) as java.lang.Boolean
    }
    
    property set treatment ($arg :  boolean) {
      setVariableValue("treatment", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotInjuryIncidentDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSnapshotInjuryIncidentDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at ClaimSnapshotInjuryIncidentDV.pcf: line 62, column 36
    function condition_20 () : java.lang.Boolean {
      return BodyPartDetails.Ordering == null || (BodyPartDetails.Ordering as java.lang.Double) > (InjuryIncidentInstance.FirstBodyPart.Ordering as java.lang.Double)
    }
    
    // 'value' attribute on TextCell (id=Ordering_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 70, column 36
    function valueRoot_22 () : java.lang.Object {
      return BodyPartDetails
    }
    
    // 'value' attribute on TextCell (id=Ordering_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 70, column 36
    function value_21 () : dynamic.Dynamic {
      return BodyPartDetails.Ordering
    }
    
    // 'value' attribute on TextCell (id=PrimaryBodyPart_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 76, column 48
    function value_24 () : dynamic.Dynamic {
      return BodyPartDetails.PrimaryBodyPart
    }
    
    // 'value' attribute on TextCell (id=DetailedBodyPart_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 82, column 48
    function value_27 () : dynamic.Dynamic {
      return BodyPartDetails.DetailedBodyPart
    }
    
    // 'value' attribute on TextCell (id=CompensabilityDecision_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 91, column 37
    function value_30 () : dynamic.Dynamic {
      return BodyPartDetails.CompensabilityDecision
    }
    
    // 'value' attribute on TextCell (id=CompensabilityDecisionDate_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 100, column 37
    function value_33 () : dynamic.Dynamic {
      return BodyPartDetails.CompensabilityDecisionDate
    }
    
    // 'value' attribute on TextCell (id=CompensabilityComments_Cell) at ClaimSnapshotInjuryIncidentDV.pcf: line 109, column 37
    function value_36 () : dynamic.Dynamic {
      return BodyPartDetails.CompensabilityComments
    }
    
    property get BodyPartDetails () : dynamic.Dynamic {
      return getIteratedValue(1) as dynamic.Dynamic
    }
    
    
  }
  
  
}