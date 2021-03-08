package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/TripCancellationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TripCancellationDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/TripCancellationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TripCancellationDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=NewIncidentMenuItem) at TripCancellationDV.pcf: line 33, column 104
    function action_4 () : void {
      TripIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=EditIncidentMenuItem) at TripCancellationDV.pcf: line 39, column 52
    function action_7 () : void {
      TripIncidentPopup.push( Exposure.TripIncident, true )
    }
    
    // 'action' attribute on MenuItem (id=ViewIncidentMenuItem) at TripCancellationDV.pcf: line 44, column 105
    function action_9 () : void {
      TripIncidentPopup.push( Exposure.TripIncident, false )
    }
    
    // 'action' attribute on MenuItem (id=ViewIncidentMenuItem) at TripCancellationDV.pcf: line 44, column 105
    function action_dest_10 () : pcf.api.Destination {
      return pcf.TripIncidentPopup.createDestination( Exposure.TripIncident, false )
    }
    
    // 'action' attribute on MenuItem (id=NewIncidentMenuItem) at TripCancellationDV.pcf: line 33, column 104
    function action_dest_5 () : pcf.api.Destination {
      return pcf.TripIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=EditIncidentMenuItem) at TripCancellationDV.pcf: line 39, column 52
    function action_dest_8 () : pcf.api.Destination {
      return pcf.TripIncidentPopup.createDestination( Exposure.TripIncident, true )
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 12, column 56
    function def_onEnter_0 (def :  pcf.ExposureDetailInputSet) : void {
      def.onEnter(Exposure, false)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 14, column 51
    function def_onEnter_2 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 53, column 59
    function def_onEnter_22 (def :  pcf.ExposureCodingFinancialsInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 55, column 49
    function def_onEnter_24 (def :  pcf.DeductibleInfoInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 59, column 58
    function def_onEnter_26 (def :  pcf.OtherCarrierInvolvementInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 12, column 56
    function def_refreshVariables_1 (def :  pcf.ExposureDetailInputSet) : void {
      def.refreshVariables(Exposure, false)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 53, column 59
    function def_refreshVariables_23 (def :  pcf.ExposureCodingFinancialsInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 55, column 49
    function def_refreshVariables_25 (def :  pcf.DeductibleInfoInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 59, column 58
    function def_refreshVariables_27 (def :  pcf.OtherCarrierInvolvementInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at TripCancellationDV.pcf: line 14, column 51
    function def_refreshVariables_3 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'value' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.TripIncident = (__VALUE_TO_SET as entity.TripIncident)
    }
    
    // 'optionLabel' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function optionLabel_14 (VALUE :  entity.TripIncident) : java.lang.String {
      return VALUE.TripRU.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function valueRange_15 () : java.lang.Object {
      return Exposure.Claim.TripIncidentsOnly
    }
    
    // 'value' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function valueRoot_13 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TextInput (id=IncidentDescription_Input) at TripCancellationDV.pcf: line 50, column 48
    function valueRoot_20 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function value_11 () : entity.TripIncident {
      return Exposure.TripIncident
    }
    
    // 'value' attribute on TextInput (id=IncidentDescription_Input) at TripCancellationDV.pcf: line 50, column 48
    function value_19 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'valueRange' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.TripIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.TripIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TripIncident_Input) at TripCancellationDV.pcf: line 28, column 41
    function verifyValueRange_17 () : void {
      var __valueRangeArg = Exposure.Claim.TripIncidentsOnly
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'visible' attribute on MenuItem (id=EditIncidentMenuItem) at TripCancellationDV.pcf: line 39, column 52
    function visible_6 () : java.lang.Boolean {
      return Exposure.TripIncident != null
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}