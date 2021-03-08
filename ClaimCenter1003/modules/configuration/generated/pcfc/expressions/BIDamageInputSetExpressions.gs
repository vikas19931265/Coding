package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/shared/exposures/BIDamageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BIDamageInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/shared/exposures/BIDamageInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BIDamageInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=BodilyInjuryDamageDV_NewIncidentMenuItem) at BIDamageInputSet.pcf: line 29, column 116
    function action_0 () : void {
      NewInjuryIncidentPopup.push(Exposure.Claim, Exposure)
    }
    
    // 'action' attribute on MenuItem (id=BodilyInjuryDamageDV_EditIncidentMenuItem) at BIDamageInputSet.pcf: line 34, column 117
    function action_2 () : void {
      EditInjuryIncidentPopup.push(Exposure.InjuryIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=BodilyInjuryDamageDV_ViewIncidentMenuItem) at BIDamageInputSet.pcf: line 39, column 117
    function action_4 () : void {
      EditInjuryIncidentPopup.push(Exposure.InjuryIncident, false)
    }
    
    // 'action' attribute on MenuItem (id=BodilyInjuryDamageDV_NewIncidentMenuItem) at BIDamageInputSet.pcf: line 29, column 116
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NewInjuryIncidentPopup.createDestination(Exposure.Claim, Exposure)
    }
    
    // 'action' attribute on MenuItem (id=BodilyInjuryDamageDV_EditIncidentMenuItem) at BIDamageInputSet.pcf: line 34, column 117
    function action_dest_3 () : pcf.api.Destination {
      return pcf.EditInjuryIncidentPopup.createDestination(Exposure.InjuryIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=BodilyInjuryDamageDV_ViewIncidentMenuItem) at BIDamageInputSet.pcf: line 39, column 117
    function action_dest_5 () : pcf.api.Destination {
      return pcf.EditInjuryIncidentPopup.createDestination(Exposure.InjuryIncident, false)
    }
    
    // 'value' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.InjuryIncident = (__VALUE_TO_SET as entity.InjuryIncident)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function optionLabel_9 (VALUE :  entity.InjuryIncident) : java.lang.String {
      return VALUE.DisplayNameWithInjuredParty
    }
    
    // 'value' attribute on Reflect at BIDamageInputSet.pcf: line 48, column 32
    function reflectionValue_14 (TRIGGER_INDEX :  int, VALUE :  entity.InjuryIncident) : java.lang.Object {
      return VALUE.injured
    }
    
    // 'value' attribute on Reflect at BIDamageInputSet.pcf: line 57, column 33
    function reflectionValue_19 (TRIGGER_INDEX :  int, VALUE :  entity.InjuryIncident) : java.lang.Object {
      return VALUE.Severity
    }
    
    // 'value' attribute on Reflect at BIDamageInputSet.pcf: line 65, column 36
    function reflectionValue_24 (TRIGGER_INDEX :  int, VALUE :  entity.InjuryIncident) : java.lang.Object {
      return VALUE.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function valueRange_10 () : java.lang.Object {
      return Exposure.Claim.InjuryIncidentsOnly
    }
    
    // 'value' attribute on TextInput (id=Incident_Injured_Input) at BIDamageInputSet.pcf: line 45, column 33
    function valueRoot_17 () : java.lang.Object {
      return Exposure.InjuryIncident
    }
    
    // 'value' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function valueRoot_8 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=Incident_Injured_Input) at BIDamageInputSet.pcf: line 45, column 33
    function value_16 () : entity.Person {
      return Exposure.InjuryIncident.injured
    }
    
    // 'value' attribute on TypeKeyInput (id=Incident_Severity_Input) at BIDamageInputSet.pcf: line 54, column 40
    function value_21 () : typekey.SeverityType {
      return Exposure.InjuryIncident.Severity
    }
    
    // 'value' attribute on TextInput (id=Incident_Description_Input) at BIDamageInputSet.pcf: line 62, column 51
    function value_26 () : java.lang.String {
      return Exposure.InjuryIncident.Description
    }
    
    // 'value' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function value_6 () : entity.InjuryIncident {
      return Exposure.InjuryIncident
    }
    
    // 'valueRange' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function verifyValueRangeIsAllowedType_11 ($$arg :  entity.InjuryIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function verifyValueRangeIsAllowedType_11 ($$arg :  gw.api.database.IQueryBeanResult<entity.InjuryIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Injury_Incident_Input) at BIDamageInputSet.pcf: line 21, column 41
    function verifyValueRange_12 () : void {
      var __valueRangeArg = Exposure.Claim.InjuryIncidentsOnly
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}