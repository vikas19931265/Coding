package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/PropertyIncidentInputSet.Dwelling.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PropertyIncidentInputSet_DwellingExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/PropertyIncidentInputSet.Dwelling.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyIncidentInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PropertyDamageDV_NewIncidentMenuItem) at PropertyIncidentInputSet.Dwelling.pcf: line 24, column 97
    function action_0 () : void {
      NewDwellingIncidentPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=PropertyDamageDV_EditIncidentMenuItem) at PropertyIncidentInputSet.Dwelling.pcf: line 29, column 98
    function action_2 () : void {
      EditDwellingIncidentPopup.push(Exposure.DwellingIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=PropertyDamageDV_ViewIncidentMenuItem) at PropertyIncidentInputSet.Dwelling.pcf: line 34, column 98
    function action_4 () : void {
      EditDwellingIncidentPopup.push(Exposure.DwellingIncident, false)
    }
    
    // 'action' attribute on MenuItem (id=PropertyDamageDV_NewIncidentMenuItem) at PropertyIncidentInputSet.Dwelling.pcf: line 24, column 97
    function action_dest_1 () : pcf.api.Destination {
      return pcf.NewDwellingIncidentPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on MenuItem (id=PropertyDamageDV_EditIncidentMenuItem) at PropertyIncidentInputSet.Dwelling.pcf: line 29, column 98
    function action_dest_3 () : pcf.api.Destination {
      return pcf.EditDwellingIncidentPopup.createDestination(Exposure.DwellingIncident, true)
    }
    
    // 'action' attribute on MenuItem (id=PropertyDamageDV_ViewIncidentMenuItem) at PropertyIncidentInputSet.Dwelling.pcf: line 34, column 98
    function action_dest_5 () : pcf.api.Destination {
      return pcf.EditDwellingIncidentPopup.createDestination(Exposure.DwellingIncident, false)
    }
    
    // 'value' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.DwellingIncident = (__VALUE_TO_SET as entity.DwellingIncident)
    }
    
    // 'valueRange' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function valueRange_9 () : java.lang.Object {
      return Exposure.Claim.DwellingIncidentsOnly
    }
    
    // 'value' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function valueRoot_8 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function value_6 () : entity.DwellingIncident {
      return Exposure.DwellingIncident
    }
    
    // 'valueRange' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function verifyValueRangeIsAllowedType_10 ($$arg :  entity.DwellingIncident[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.api.database.IQueryBeanResult<entity.DwellingIncident>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Dwelling_Incident_Input) at PropertyIncidentInputSet.Dwelling.pcf: line 19, column 43
    function verifyValueRange_11 () : void {
      var __valueRangeArg = Exposure.Claim.DwellingIncidentsOnly
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}