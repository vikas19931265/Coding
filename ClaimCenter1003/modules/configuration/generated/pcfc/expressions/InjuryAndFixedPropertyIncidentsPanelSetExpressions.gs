package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/shared/InjuryAndFixedPropertyIncidentsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class InjuryAndFixedPropertyIncidentsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/shared/InjuryAndFixedPropertyIncidentsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryAndFixedPropertyIncidentsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 17, column 39
    function initialValue_0 () : entity.InjuryIncident[] {
      return claim.InjuryIncidentsOnly
    }
    
    // 'initialValue' attribute on Variable at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 21, column 45
    function initialValue_1 () : gw.api.claim.IncidentUIHelper {
      return gw.api.claim.IncidentUIHelpers.INJURY
    }
    
    // 'initialValue' attribute on Variable at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 26, column 41
    function initialValue_2 () : entity.PropertyIncident[] {
      return claim.FixedPropertyIncidentsOnly
    }
    
    // 'initialValue' attribute on Variable at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 30, column 45
    function initialValue_3 () : gw.api.claim.IncidentUIHelper {
      return gw.api.claim.IncidentUIHelpers.PROPERTY_LIABILITY
    }
    
    // 'value' attribute on PanelIterator (id=InjuryIncidentIterator) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 38, column 47
    function value_20 () : entity.InjuryIncident[] {
      return injuryIncidents
    }
    
    // 'value' attribute on PanelIterator (id=PropertyIncidentIterator) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 89, column 49
    function value_38 () : entity.PropertyIncident[] {
      return propertyIncidents
    }
    
    // 'visible' attribute on PanelColumn at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 33, column 47
    function visible_21 () : java.lang.Boolean {
      return injuryIncidents.HasElements
    }
    
    // 'visible' attribute on PanelColumn at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 84, column 49
    function visible_39 () : java.lang.Boolean {
      return propertyIncidents.HasElements
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get injuryIncidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("injuryIncidentUIHelper", 0) as gw.api.claim.IncidentUIHelper
    }
    
    property set injuryIncidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("injuryIncidentUIHelper", 0, $arg)
    }
    
    property get injuryIncidents () : entity.InjuryIncident[] {
      return getVariableValue("injuryIncidents", 0) as entity.InjuryIncident[]
    }
    
    property set injuryIncidents ($arg :  entity.InjuryIncident[]) {
      setVariableValue("injuryIncidents", 0, $arg)
    }
    
    property get propertyIncidentUIHelper () : gw.api.claim.IncidentUIHelper {
      return getVariableValue("propertyIncidentUIHelper", 0) as gw.api.claim.IncidentUIHelper
    }
    
    property set propertyIncidentUIHelper ($arg :  gw.api.claim.IncidentUIHelper) {
      setVariableValue("propertyIncidentUIHelper", 0, $arg)
    }
    
    property get propertyIncidents () : entity.PropertyIncident[] {
      return getVariableValue("propertyIncidents", 0) as entity.PropertyIncident[]
    }
    
    property set propertyIncidents ($arg :  entity.PropertyIncident[]) {
      setVariableValue("propertyIncidents", 0, $arg)
    }
    
    property get wizard () : gw.api.claim.NewClaimWizardInfo {
      return getRequireValue("wizard", 0) as gw.api.claim.NewClaimWizardInfo
    }
    
    property set wizard ($arg :  gw.api.claim.NewClaimWizardInfo) {
      setRequireValue("wizard", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/shared/InjuryAndFixedPropertyIncidentsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntry2ExpressionsImpl extends InjuryAndFixedPropertyIncidentsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 115, column 67
    function action_24 () : void {
      propertyIncidentUIHelper.viewIncident(propertyIncident, true, wizard)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 121, column 106
    function action_27 () : void {
      propertyIncidentUIHelper.removeIncident(claim, propertyIncident, CurrentLocation, wizard)
    }
    
    // 'action' attribute on TextInput (id=PropertyName_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 110, column 101
    function action_30 () : void {
      propertyIncidentUIHelper.viewIncident(propertyIncident, CurrentLocation.InEditMode, wizard) 
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 121, column 106
    function confirmMessage_28 () : java.lang.String {
      return propertyIncidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=PropertyIncidentIcon) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 100, column 44
    function icon_22 () : java.lang.String {
      return propertyIncidentUIHelper.Icons.getPanelIcon(propertyIncident)
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 115, column 67
    function label_25 () : java.lang.Object {
      return propertyIncidentUIHelper.EditLabel
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 121, column 106
    function label_29 () : java.lang.Object {
      return propertyIncidentUIHelper.RemoveLabel
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyDescription_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 127, column 68
    function valueRoot_35 () : java.lang.Object {
      return propertyIncident
    }
    
    // 'value' attribute on TextInput (id=PropertyName_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 110, column 101
    function value_31 () : java.lang.String {
      return propertyIncidentUIHelper.getInstanceDisplayName(propertyIncident).elide(25)
    }
    
    // 'value' attribute on TextAreaInput (id=PropertyDescription_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 127, column 68
    function value_34 () : java.lang.String {
      return propertyIncident.Description
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 115, column 67
    function visible_23 () : java.lang.Boolean {
      return perm.Incident.edit(propertyIncident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 121, column 106
    function visible_26 () : java.lang.Boolean {
      return (!propertyIncident.UsedByExposure) and perm.Incident.edit(propertyIncident)
    }
    
    // 'visible' attribute on TextAreaInput (id=PropertyDescription_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 127, column 68
    function visible_33 () : java.lang.Boolean {
      return propertyIncident.Description.HasContent
    }
    
    property get propertyIncident () : entity.PropertyIncident {
      return getIteratedValue(1) as entity.PropertyIncident
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/shared/InjuryAndFixedPropertyIncidentsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends InjuryAndFixedPropertyIncidentsPanelSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=InjuryName_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 59, column 87
    function action_12 () : void {
      injuryIncidentUIHelper.viewIncident(injuryIncident, CurrentLocation.InEditMode, wizard)
    }
    
    // 'action' attribute on MenuItem (id=EditIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 64, column 65
    function action_6 () : void {
      injuryIncidentUIHelper.viewIncident(injuryIncident, true, wizard)
    }
    
    // 'action' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 70, column 102
    function action_9 () : void {
      injuryIncidentUIHelper.removeIncident(claim, injuryIncident, CurrentLocation, wizard)
    }
    
    // 'confirmMessage' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 70, column 102
    function confirmMessage_10 () : java.lang.String {
      return injuryIncidentUIHelper.RemoveConfirmMsg
    }
    
    // 'icon' attribute on Label (id=InjuryIncidentIcon) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 49, column 42
    function icon_4 () : java.lang.String {
      return injuryIncidentUIHelper.Icons.getPanelIcon(injuryIncident)
    }
    
    // 'label' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 70, column 102
    function label_11 () : java.lang.Object {
      return injuryIncidentUIHelper.RemoveLabel
    }
    
    // 'label' attribute on MenuItem (id=EditIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 64, column 65
    function label_7 () : java.lang.Object {
      return injuryIncidentUIHelper.EditLabel
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryDescription_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 76, column 66
    function valueRoot_17 () : java.lang.Object {
      return injuryIncident
    }
    
    // 'value' attribute on TextInput (id=InjuryName_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 59, column 87
    function value_13 () : java.lang.String {
      return injuryIncidentUIHelper.getInstanceDisplayName(injuryIncident)
    }
    
    // 'value' attribute on TextAreaInput (id=InjuryDescription_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 76, column 66
    function value_16 () : java.lang.String {
      return injuryIncident.Description
    }
    
    // 'visible' attribute on TextAreaInput (id=InjuryDescription_Input) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 76, column 66
    function visible_15 () : java.lang.Boolean {
      return injuryIncident.Description.HasContent
    }
    
    // 'visible' attribute on MenuItem (id=EditIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 64, column 65
    function visible_5 () : java.lang.Boolean {
      return perm.Incident.edit(injuryIncident)
    }
    
    // 'visible' attribute on MenuItem (id=RemoveIncident) at InjuryAndFixedPropertyIncidentsPanelSet.pcf: line 70, column 102
    function visible_8 () : java.lang.Boolean {
      return (!injuryIncident.UsedByExposure) and perm.Incident.edit(injuryIncident)
    }
    
    property get injuryIncident () : entity.InjuryIncident {
      return getIteratedValue(1) as entity.InjuryIncident
    }
    
    
  }
  
  
}