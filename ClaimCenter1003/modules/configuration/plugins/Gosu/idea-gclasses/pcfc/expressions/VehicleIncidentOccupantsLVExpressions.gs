package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/VehicleIncidentOccupantsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VehicleIncidentOccupantsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/VehicleIncidentOccupantsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends VehicleIncidentOccupantsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=occupant_Cell) at VehicleIncidentOccupantsLV.pcf: line 51, column 24
    function action_8 () : void {
      FNOLContactPopup.push(claim, claim.getClaimContact( occupant ), vehicleIncidentHelper.getOccupantRole(occupant), vehicleIncident, wizard)
    }
    
    // 'action' attribute on TextCell (id=occupant_Cell) at VehicleIncidentOccupantsLV.pcf: line 51, column 24
    function action_dest_9 () : pcf.api.Destination {
      return pcf.FNOLContactPopup.createDestination(claim, claim.getClaimContact( occupant ), vehicleIncidentHelper.getOccupantRole(occupant), vehicleIncident, wizard)
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=occupantInjuredSeverityIcon_Cell) at VehicleIncidentOccupantsLV.pcf: line 37, column 70
    function iconLabel_2 () : java.lang.String {
      return vehicleIncidentHelper.getOccupantSeverityIconTooltip(wizard.getInjurySeverity(claim.getClaimContact(occupant)))
    }
    
    // 'iconLabel' attribute on BooleanRadioCell (id=occupantTypeIcon_Cell) at VehicleIncidentOccupantsLV.pcf: line 45, column 32
    function iconLabel_6 () : java.lang.String {
      return vehicleIncidentHelper.getOccupantIconTooltip(occupant)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=occupantInjuredSeverityIcon_Cell) at VehicleIncidentOccupantsLV.pcf: line 37, column 70
    function icon_4 () : java.lang.String {
      return vehicleIncidentHelper.getOccupantSeverityIcon(wizard.getInjurySeverity(claim.getClaimContact(occupant)))
    }
    
    // 'icon' attribute on BooleanRadioCell (id=occupantTypeIcon_Cell) at VehicleIncidentOccupantsLV.pcf: line 45, column 32
    function icon_7 () : java.lang.String {
      return vehicleIncidentHelper.getOccupantIcon(occupant)
    }
    
    // 'value' attribute on TextCell (id=occupant_Cell) at VehicleIncidentOccupantsLV.pcf: line 51, column 24
    function valueRoot_11 () : java.lang.Object {
      return occupant
    }
    
    // 'value' attribute on TextCell (id=occupant_Cell) at VehicleIncidentOccupantsLV.pcf: line 51, column 24
    function value_10 () : java.lang.String {
      return occupant.DisplayName
    }
    
    // 'value' attribute on BooleanRadioCell (id=occupantInjuredSeverityIcon_Cell) at VehicleIncidentOccupantsLV.pcf: line 37, column 70
    function value_3 () : java.lang.Boolean {
      return wizard.isInjured(claim.getClaimContact(occupant))
    }
    
    property get occupant () : Person {
      return getIteratedValue(1) as Person
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/VehicleIncidentOccupantsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncidentOccupantsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentOccupantsLV.pcf: line 20, column 52
    function initialValue_0 () : gw.api.claim.VehicleIncidentUIHelper {
      return new gw.api.claim.VehicleIncidentUIHelper(vehicleIncident)
    }
    
    // 'initialValue' attribute on Variable at VehicleIncidentOccupantsLV.pcf: line 24, column 28
    function initialValue_1 () : entity.Claim {
      return vehicleIncident.Claim
    }
    
    // 'value' attribute on RowIterator at VehicleIncidentOccupantsLV.pcf: line 29, column 53
    function value_13 () : java.util.ArrayList<Person> {
      return vehicleOccupants
    }
    
    property get claim () : entity.Claim {
      return getVariableValue("claim", 0) as entity.Claim
    }
    
    property set claim ($arg :  entity.Claim) {
      setVariableValue("claim", 0, $arg)
    }
    
    property get vehicleIncident () : entity.VehicleIncident {
      return getRequireValue("vehicleIncident", 0) as entity.VehicleIncident
    }
    
    property set vehicleIncident ($arg :  entity.VehicleIncident) {
      setRequireValue("vehicleIncident", 0, $arg)
    }
    
    property get vehicleIncidentHelper () : gw.api.claim.VehicleIncidentUIHelper {
      return getVariableValue("vehicleIncidentHelper", 0) as gw.api.claim.VehicleIncidentUIHelper
    }
    
    property set vehicleIncidentHelper ($arg :  gw.api.claim.VehicleIncidentUIHelper) {
      setVariableValue("vehicleIncidentHelper", 0, $arg)
    }
    
    property get vehicleOccupants () : ArrayList<Person> {
      return getRequireValue("vehicleOccupants", 0) as ArrayList<Person>
    }
    
    property set vehicleOccupants ($arg :  ArrayList<Person>) {
      setRequireValue("vehicleOccupants", 0, $arg)
    }
    
    property get wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  
}