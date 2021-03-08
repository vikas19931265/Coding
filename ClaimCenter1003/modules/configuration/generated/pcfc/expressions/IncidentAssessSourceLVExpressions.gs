package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/IncidentAssessSourceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IncidentAssessSourceLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/IncidentAssessSourceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IncidentAssessSourceLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on RowIterator at IncidentAssessSourceLV.pcf: line 21, column 45
    function pickLocation_37 () : void {
      NewIncidentAssessSourcePopup.push(incident)
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IncidentAssessSourceLV.pcf: line 28, column 48
    function sortValue_0 (AssessmentSource :  entity.AssessmentSource) : java.lang.Object {
      return AssessmentSource.SourceName
    }
    
    // 'value' attribute on TypeKeyCell (id=Source_Cell) at IncidentAssessSourceLV.pcf: line 34, column 49
    function sortValue_1 (AssessmentSource :  entity.AssessmentSource) : java.lang.Object {
      return AssessmentSource.SourceType
    }
    
    // 'value' attribute on ClaimContactCell (id=Assessor_Cell) at IncidentAssessSourceLV.pcf: line 42, column 73
    function sortValue_2 (AssessmentSource :  entity.AssessmentSource) : java.lang.Object {
      return AssessmentSource.Assessor
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IncidentAssessSourceLV.pcf: line 47, column 49
    function sortValue_3 (AssessmentSource :  entity.AssessmentSource) : java.lang.Object {
      return AssessmentSource.Description
    }
    
    // 'toAdd' attribute on RowIterator at IncidentAssessSourceLV.pcf: line 21, column 45
    function toAdd_38 (AssessmentSource :  entity.AssessmentSource) : void {
      incident.addToSourceLine(AssessmentSource)
    }
    
    // 'toRemove' attribute on RowIterator at IncidentAssessSourceLV.pcf: line 21, column 45
    function toRemove_39 (AssessmentSource :  entity.AssessmentSource) : void {
      incident.removeFromSourceLine(AssessmentSource)
    }
    
    // 'value' attribute on RowIterator at IncidentAssessSourceLV.pcf: line 21, column 45
    function value_40 () : entity.AssessmentSource[] {
      return incident.SourceLine
    }
    
    property get incident () : Incident {
      return getRequireValue("incident", 0) as Incident
    }
    
    property set incident ($arg :  Incident) {
      setRequireValue("incident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/IncidentAssessSourceLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IncidentAssessSourceLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_17 () : void {
      AddressBookPickerPopup.push(statictypeof (AssessmentSource.Assessor), AssessmentSource.Incident.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_19 () : void {
      if (AssessmentSource.Assessor != null) { ClaimContactDetailPopup.push(AssessmentSource.Assessor, AssessmentSource.Incident.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_20 () : void {
      ClaimContactDetailPopup.push(AssessmentSource.Assessor, AssessmentSource.Incident.Claim)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at IncidentAssessSourceLV.pcf: line 28, column 48
    function action_4 () : void {
      IncidentAssessSourcePopup.push(AssessmentSource)
    }
    
    // 'action' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_18 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (AssessmentSource.Assessor), AssessmentSource.Incident.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(AssessmentSource.Assessor, AssessmentSource.Incident.Claim)
    }
    
    // 'action' attribute on TextCell (id=Name_Cell) at IncidentAssessSourceLV.pcf: line 28, column 48
    function action_dest_5 () : pcf.api.Destination {
      return pcf.IncidentAssessSourcePopup.createDestination(AssessmentSource)
    }
    
    // 'def' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_14 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (AssessmentSource.Assessor), null, AssessmentSource.Incident.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_15 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (AssessmentSource.Assessor), null, AssessmentSource.Incident.Claim)
    }
    
    // 'value' attribute on TypeKeyCell (id=Source_Cell) at IncidentAssessSourceLV.pcf: line 34, column 49
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentSource.SourceType = (__VALUE_TO_SET as typekey.AssessmentSource)
    }
    
    // 'value' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentSource.Assessor = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IncidentAssessSourceLV.pcf: line 47, column 49
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssessmentSource.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_22 (PickedValue :  Contact) : void {
      var contactType = statictypeof (AssessmentSource.Assessor); var result = eval("AssessmentSource.Assessor = AssessmentSource.Incident.Claim.resolveContact(AssessmentSource.Assessor) as " + contactType.Name + ";return null;"); AssessmentSource.ensureContactIsClaimContact(AssessmentSource.Assessor);
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Assessor_Cell) at IncidentAssessSourceLV.pcf: line 42, column 73
    function onPick_29 (PickedValue :  java.lang.Object) : void {
      AssessmentSource.ensureContactIsClaimContact(AssessmentSource.Assessor)
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_26 () : java.lang.Object {
      return AssessmentSource.Incident.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IncidentAssessSourceLV.pcf: line 28, column 48
    function valueRoot_7 () : java.lang.Object {
      return AssessmentSource
    }
    
    // 'value' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_23 () : entity.Contact {
      return AssessmentSource.Assessor
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IncidentAssessSourceLV.pcf: line 47, column 49
    function value_33 () : java.lang.String {
      return AssessmentSource.Description
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at IncidentAssessSourceLV.pcf: line 28, column 48
    function value_6 () : java.lang.String {
      return AssessmentSource.SourceName
    }
    
    // 'value' attribute on TypeKeyCell (id=Source_Cell) at IncidentAssessSourceLV.pcf: line 34, column 49
    function value_9 () : typekey.AssessmentSource {
      return AssessmentSource.SourceType
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_27 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_27 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_28 () : void {
      var __valueRangeArg = AssessmentSource.Incident.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_27(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_13 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=Assessor_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_16 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (AssessmentSource.Assessor), AssessmentSource.Incident.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get AssessmentSource () : entity.AssessmentSource {
      return getIteratedValue(1) as entity.AssessmentSource
    }
    
    
  }
  
  
}