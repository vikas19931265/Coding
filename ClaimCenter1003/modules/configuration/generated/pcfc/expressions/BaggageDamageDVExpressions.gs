package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/BaggageDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BaggageDamageDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/BaggageDamageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BaggageDamageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewIncidentMenuItem) at BaggageDamageDV.pcf: line 32, column 98
    function action_4 () : void {
      BaggageIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=EditIncidentMenuItem) at BaggageDamageDV.pcf: line 37, column 99
    function action_6 () : void {
      BaggageIncidentPopup.push( Exposure.BaggageIncident, true )
    }
    
    // 'action' attribute on MenuItem (id=ViewIncidentMenuItem) at BaggageDamageDV.pcf: line 42, column 99
    function action_8 () : void {
      BaggageIncidentPopup.push( Exposure.BaggageIncident, false )
    }
    
    // 'action' attribute on MenuItem (id=NewIncidentMenuItem) at BaggageDamageDV.pcf: line 32, column 98
    function action_dest_5 () : pcf.api.Destination {
      return pcf.BaggageIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=EditIncidentMenuItem) at BaggageDamageDV.pcf: line 37, column 99
    function action_dest_7 () : pcf.api.Destination {
      return pcf.BaggageIncidentPopup.createDestination( Exposure.BaggageIncident, true )
    }
    
    // 'action' attribute on MenuItem (id=ViewIncidentMenuItem) at BaggageDamageDV.pcf: line 42, column 99
    function action_dest_9 () : pcf.api.Destination {
      return pcf.BaggageIncidentPopup.createDestination( Exposure.BaggageIncident, false )
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 12, column 56
    function def_onEnter_0 (def :  pcf.ExposureDetailInputSet) : void {
      def.onEnter(Exposure, false)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 14, column 51
    function def_onEnter_2 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 51, column 59
    function def_onEnter_20 (def :  pcf.ExposureCodingFinancialsInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 53, column 49
    function def_onEnter_22 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 57, column 58
    function def_onEnter_24 (def :  pcf.OtherCarrierInvolvementInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 12, column 56
    function def_refreshVariables_1 (def :  pcf.ExposureDetailInputSet) : void {
      def.refreshVariables(Exposure, false)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 51, column 59
    function def_refreshVariables_21 (def :  pcf.ExposureCodingFinancialsInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 53, column 49
    function def_refreshVariables_23 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 57, column 58
    function def_refreshVariables_25 (def :  pcf.OtherCarrierInvolvementInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at BaggageDamageDV.pcf: line 14, column 51
    function def_refreshVariables_3 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'value' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.BaggageIncident = (__VALUE_TO_SET as entity.BaggageIncident)
    }
    
    // 'valueRange' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function valueRange_13 () : java.lang.Object {
      return Exposure.Claim.BaggageIncidentsOnly
    }
    
    // 'value' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function valueRoot_12 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=IncidentDescription_Input) at BaggageDamageDV.pcf: line 48, column 48
    function valueRoot_18 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function value_10 () : entity.BaggageIncident {
      return Exposure.BaggageIncident
    }
    
    // 'value' attribute on TextInput (id=IncidentDescription_Input) at BaggageDamageDV.pcf: line 48, column 48
    function value_17 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function verifyValueRangeIsAllowedType_14 ($$arg :  entity.BaggageIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function verifyValueRangeIsAllowedType_14 ($$arg :  gw.api.database.IQueryBeanResult<entity.BaggageIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function verifyValueRangeIsAllowedType_14 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BaggageIncident_Input) at BaggageDamageDV.pcf: line 27, column 44
    function verifyValueRange_15 () : void {
      var __valueRangeArg = Exposure.Claim.BaggageIncidentsOnly
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_14(__valueRangeArg)
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}