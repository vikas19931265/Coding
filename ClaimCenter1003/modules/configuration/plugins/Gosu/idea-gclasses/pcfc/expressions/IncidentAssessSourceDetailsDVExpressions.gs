package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/IncidentAssessSourceDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IncidentAssessSourceDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/IncidentAssessSourceDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IncidentAssessSourceDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_13 () : void {
      AddressBookPickerPopup.push(statictypeof (assessmentSource.Assessor), assessmentSource.Incident.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_15 () : void {
      if (assessmentSource.Assessor != null) { ClaimContactDetailPopup.push(assessmentSource.Assessor, assessmentSource.Incident.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_16 () : void {
      ClaimContactDetailPopup.push(assessmentSource.Assessor, assessmentSource.Incident.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_14 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (assessmentSource.Assessor), assessmentSource.Incident.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(assessmentSource.Assessor, assessmentSource.Incident.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_10 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (assessmentSource.Assessor), null, assessmentSource.Incident.Claim)
    }
    
    // 'def' attribute on ListViewInput at IncidentAssessSourceDetailsDV.pcf: line 54, column 27
    function def_onEnter_36 (def :  pcf.EditableAssessmentLinesLV) : void {
      def.onEnter(assessmentSource)
    }
    
    // 'def' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_11 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (assessmentSource.Assessor), null, assessmentSource.Incident.Claim)
    }
    
    // 'def' attribute on ListViewInput at IncidentAssessSourceDetailsDV.pcf: line 54, column 27
    function def_refreshVariables_37 (def :  pcf.EditableAssessmentLinesLV) : void {
      def.refreshVariables(assessmentSource)
    }
    
    // 'value' attribute on TextInput (id=General_Name_Input) at IncidentAssessSourceDetailsDV.pcf: line 22, column 46
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentSource.SourceName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentSource.Assessor = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at IncidentAssessSourceDetailsDV.pcf: line 41, column 47
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentSource.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Source_Input) at IncidentAssessSourceDetailsDV.pcf: line 28, column 47
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      assessmentSource.SourceType = (__VALUE_TO_SET as typekey.AssessmentSource)
    }
    
    // 'initialValue' attribute on Variable at IncidentAssessSourceDetailsDV.pcf: line 13, column 24
    function initialValue_0 () : Incident {
      return assessmentSource.Incident
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_18 (PickedValue :  Contact) : void {
      var contactType = statictypeof (assessmentSource.Assessor); var result = eval("assessmentSource.Assessor = assessmentSource.Incident.Claim.resolveContact(assessmentSource.Assessor) as " + contactType.Name + ";return null;"); assessmentSource.ensureContactIsClaimContact(assessmentSource.Assessor);
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Assessor_Input) at IncidentAssessSourceDetailsDV.pcf: line 36, column 71
    function onPick_25 (PickedValue :  java.lang.Object) : void {
      assessmentSource.ensureContactIsClaimContact(assessmentSource.Assessor)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at IncidentAssessSourceDetailsDV.pcf: line 85, column 63
    function sortValue_38 (AssessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return AssessmentItem.PropertyCategory
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IncidentAssessSourceDetailsDV.pcf: line 90, column 53
    function sortValue_39 (AssessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return AssessmentItem.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at IncidentAssessSourceDetailsDV.pcf: line 95, column 55
    function sortValue_40 (AssessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return AssessmentItem.Action
    }
    
    // 'value' attribute on CurrencyCell (id=EstimateAmount_Cell) at IncidentAssessSourceDetailsDV.pcf: line 102, column 33
    function sortValue_41 (AssessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return AssessmentItem.EstimateAmount
    }
    
    // 'value' attribute on TextCell (id=Comment_Cell) at IncidentAssessSourceDetailsDV.pcf: line 106, column 53
    function sortValue_42 (AssessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return AssessmentItem.ItemComment
    }
    
    // '$$sumValue' attribute on RowIterator at IncidentAssessSourceDetailsDV.pcf: line 102, column 33
    function sumValueRoot_44 (AssessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return AssessmentItem
    }
    
    // 'footerSumValue' attribute on RowIterator at IncidentAssessSourceDetailsDV.pcf: line 102, column 33
    function sumValue_43 (AssessmentItem :  entity.AssessmentItem) : java.lang.Object {
      return AssessmentItem.EstimateAmount
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_22 () : java.lang.Object {
      return assessmentSource.Incident.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=General_Name_Input) at IncidentAssessSourceDetailsDV.pcf: line 22, column 46
    function valueRoot_3 () : java.lang.Object {
      return assessmentSource
    }
    
    // 'value' attribute on TextInput (id=General_Name_Input) at IncidentAssessSourceDetailsDV.pcf: line 22, column 46
    function value_1 () : java.lang.String {
      return assessmentSource.SourceName
    }
    
    // 'value' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_19 () : entity.Contact {
      return assessmentSource.Assessor
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at IncidentAssessSourceDetailsDV.pcf: line 41, column 47
    function value_29 () : java.lang.String {
      return assessmentSource.Description
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at IncidentAssessSourceDetailsDV.pcf: line 45, column 46
    function value_33 () : java.util.Date {
      return assessmentSource.CreateTime
    }
    
    // 'value' attribute on TypeKeyInput (id=Source_Input) at IncidentAssessSourceDetailsDV.pcf: line 28, column 47
    function value_5 () : typekey.AssessmentSource {
      return assessmentSource.SourceType
    }
    
    // 'value' attribute on RowIterator at IncidentAssessSourceDetailsDV.pcf: line 79, column 49
    function value_60 () : entity.AssessmentItem[] {
      return assessmentSource.Incident.getLineItems(assessmentSource)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_23 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_23 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_24 () : void {
      var __valueRangeArg = assessmentSource.Incident.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_12 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (assessmentSource.Assessor), assessmentSource.Incident.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimContactInput (id=Assessor_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_9 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    property get assessmentSource () : AssessmentSource {
      return getRequireValue("assessmentSource", 0) as AssessmentSource
    }
    
    property set assessmentSource ($arg :  AssessmentSource) {
      setRequireValue("assessmentSource", 0, $arg)
    }
    
    property get incident () : Incident {
      return getVariableValue("incident", 0) as Incident
    }
    
    property set incident ($arg :  Incident) {
      setVariableValue("incident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/IncidentAssessSourceDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends IncidentAssessSourceDetailsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at IncidentAssessSourceDetailsDV.pcf: line 85, column 63
    function valueRoot_46 () : java.lang.Object {
      return AssessmentItem
    }
    
    // 'value' attribute on TypeKeyCell (id=Category_Cell) at IncidentAssessSourceDetailsDV.pcf: line 85, column 63
    function value_45 () : typekey.PropertyLineItemCategory {
      return AssessmentItem.PropertyCategory
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at IncidentAssessSourceDetailsDV.pcf: line 90, column 53
    function value_48 () : java.lang.String {
      return AssessmentItem.Description
    }
    
    // 'value' attribute on TypeKeyCell (id=Action_Cell) at IncidentAssessSourceDetailsDV.pcf: line 95, column 55
    function value_51 () : typekey.AssessmentAction {
      return AssessmentItem.Action
    }
    
    // 'value' attribute on CurrencyCell (id=EstimateAmount_Cell) at IncidentAssessSourceDetailsDV.pcf: line 102, column 33
    function value_54 () : gw.api.financials.CurrencyAmount {
      return AssessmentItem.EstimateAmount
    }
    
    // 'value' attribute on TextCell (id=Comment_Cell) at IncidentAssessSourceDetailsDV.pcf: line 106, column 53
    function value_57 () : java.lang.String {
      return AssessmentItem.ItemComment
    }
    
    property get AssessmentItem () : entity.AssessmentItem {
      return getIteratedValue(1) as entity.AssessmentItem
    }
    
    
  }
  
  
}