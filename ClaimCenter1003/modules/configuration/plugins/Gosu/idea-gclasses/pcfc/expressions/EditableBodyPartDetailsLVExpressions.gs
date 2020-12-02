package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/EditableBodyPartDetailsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableBodyPartDetailsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/EditableBodyPartDetailsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableBodyPartDetailsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Ordering_Cell) at EditableBodyPartDetailsLV.pcf: line 37, column 28
    function sortValue_0 (BodyPartDetails :  entity.BodyPartDetails) : java.lang.Object {
      return BodyPartDetails.Ordering
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryBodyPart_Cell) at EditableBodyPartDetailsLV.pcf: line 44, column 44
    function sortValue_1 (BodyPartDetails :  entity.BodyPartDetails) : java.lang.Object {
      return BodyPartDetails.PrimaryBodyPart
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPart_Cell) at EditableBodyPartDetailsLV.pcf: line 55, column 52
    function sortValue_2 (BodyPartDetails :  entity.BodyPartDetails) : java.lang.Object {
      return BodyPartDetails.DetailedBodyPart
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPartDescription_Cell) at EditableBodyPartDetailsLV.pcf: line 65, column 53
    function sortValue_3 (BodyPartDetails :  entity.BodyPartDetails) : java.lang.Object {
      return BodyPartDetails.DetailedBodyPartDesc
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPartSide_Cell) at EditableBodyPartDetailsLV.pcf: line 74, column 69
    function sortValue_4 (BodyPartDetails :  entity.BodyPartDetails) : java.lang.Object {
      return BodyPartDetails.SideOfBody
    }
    
    // 'value' attribute on TextCell (id=PermamentImpairmentPercentage_Cell) at EditableBodyPartDetailsLV.pcf: line 81, column 42
    function sortValue_5 (BodyPartDetails :  entity.BodyPartDetails) : java.lang.Object {
      return BodyPartDetails.ImpairmentPercentage
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at EditableBodyPartDetailsLV.pcf: line 26, column 44
    function toCreateAndAdd_55 () : entity.BodyPartDetails {
      return Incident.newBodyPart()
    }
    
    // 'toRemove' attribute on RowIterator at EditableBodyPartDetailsLV.pcf: line 26, column 44
    function toRemove_56 (BodyPartDetails :  entity.BodyPartDetails) : void {
      Incident.removeFromBodyParts(BodyPartDetails)
    }
    
    // 'value' attribute on RowIterator at EditableBodyPartDetailsLV.pcf: line 26, column 44
    function value_57 () : entity.BodyPartDetails[] {
      return Incident.OrderedBodyParts
    }
    
    // 'visible' attribute on TypeKeyCell (id=CompensabilityDecision_Cell) at EditableBodyPartDetailsLV.pcf: line 91, column 29
    function visible_6 () : java.lang.Boolean {
      return includeCompensabilityFields
    }
    
    property get Incident () : InjuryIncident {
      return getRequireValue("Incident", 0) as InjuryIncident
    }
    
    property set Incident ($arg :  InjuryIncident) {
      setRequireValue("Incident", 0, $arg)
    }
    
    property get includeCompensabilityFields () : boolean {
      return getRequireValue("includeCompensabilityFields", 0) as java.lang.Boolean
    }
    
    property set includeCompensabilityFields ($arg :  boolean) {
      setRequireValue("includeCompensabilityFields", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/exposures/EditableBodyPartDetailsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableBodyPartDetailsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'condition' attribute on ToolbarFlag at EditableBodyPartDetailsLV.pcf: line 29, column 28
    function condition_9 () : java.lang.Boolean {
      return BodyPartDetails.Ordering == null || BodyPartDetails.Ordering > Incident.FirstBodyPart.Ordering
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryBodyPart_Cell) at EditableBodyPartDetailsLV.pcf: line 44, column 44
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.PrimaryBodyPart = (__VALUE_TO_SET as typekey.BodyPartType)
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPart_Cell) at EditableBodyPartDetailsLV.pcf: line 55, column 52
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.DetailedBodyPart = (__VALUE_TO_SET as typekey.DetailedBodyPartType)
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPartDescription_Cell) at EditableBodyPartDetailsLV.pcf: line 65, column 53
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.DetailedBodyPartDesc = (__VALUE_TO_SET as typekey.DetailedBodyPartDesc)
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPartSide_Cell) at EditableBodyPartDetailsLV.pcf: line 74, column 69
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.SideOfBody = (__VALUE_TO_SET as typekey.SideOfBody)
    }
    
    // 'value' attribute on TextCell (id=PermamentImpairmentPercentage_Cell) at EditableBodyPartDetailsLV.pcf: line 81, column 42
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.ImpairmentPercentage = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyCell (id=CompensabilityDecision_Cell) at EditableBodyPartDetailsLV.pcf: line 91, column 29
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.CompensabilityDecision = (__VALUE_TO_SET as typekey.CompensabilityDecision)
    }
    
    // 'value' attribute on DateCell (id=CompensabilityDecisionDate_Cell) at EditableBodyPartDetailsLV.pcf: line 100, column 29
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.CompensabilityDecisionDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=CompensabilityComments_Cell) at EditableBodyPartDetailsLV.pcf: line 109, column 29
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      BodyPartDetails.CompensabilityComments = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyCell (id=DetailedBodyPartDescription_Cell) at EditableBodyPartDetailsLV.pcf: line 65, column 53
    function editable_23 () : java.lang.Boolean {
      return BodyPartDetails.DetailedBodyPart != null and (DetailedBodyPartDesc.Type as gw.entity.ITypeList).getTypeKeysByCategory(BodyPartDetails.DetailedBodyPart).HasElements
    }
    
    // 'onChange' attribute on PostOnChange at EditableBodyPartDetailsLV.pcf: line 47, column 145
    function onChange_13 () : void {
      BodyPartDetails.DetailedBodyPart = null; BodyPartDetails.SideOfBody = null; BodyPartDetails.DetailedBodyPartDesc = null
    }
    
    // 'onChange' attribute on PostOnChange at EditableBodyPartDetailsLV.pcf: line 58, column 159
    function onChange_18 () : void {
      BodyPartDetails.DetailedBodyPartDesc = null; if (not BodyPartDetails.requiresSideOfBodyField()) { BodyPartDetails.SideOfBody = null }
    }
    
    // 'validationExpression' attribute on TypeKeyCell (id=DetailedBodyPartSide_Cell) at EditableBodyPartDetailsLV.pcf: line 74, column 69
    function validationExpression_29 () : java.lang.Object {
      if (BodyPartDetails.requiresSideOfBodyField() and BodyPartDetails.SideOfBody == null) { return DisplayKey.get("LV.Incident.Injury.BodyPartDetails.SideOfBody.RequiredErrorMessage") } else return null
    }
    
    // 'value' attribute on TextCell (id=Ordering_Cell) at EditableBodyPartDetailsLV.pcf: line 37, column 28
    function valueRoot_11 () : java.lang.Object {
      return BodyPartDetails
    }
    
    // 'value' attribute on TextCell (id=Ordering_Cell) at EditableBodyPartDetailsLV.pcf: line 37, column 28
    function value_10 () : java.lang.Integer {
      return BodyPartDetails.Ordering
    }
    
    // 'value' attribute on TypeKeyCell (id=PrimaryBodyPart_Cell) at EditableBodyPartDetailsLV.pcf: line 44, column 44
    function value_14 () : typekey.BodyPartType {
      return BodyPartDetails.PrimaryBodyPart
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPart_Cell) at EditableBodyPartDetailsLV.pcf: line 55, column 52
    function value_19 () : typekey.DetailedBodyPartType {
      return BodyPartDetails.DetailedBodyPart
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPartDescription_Cell) at EditableBodyPartDetailsLV.pcf: line 65, column 53
    function value_24 () : typekey.DetailedBodyPartDesc {
      return BodyPartDetails.DetailedBodyPartDesc
    }
    
    // 'value' attribute on TypeKeyCell (id=DetailedBodyPartSide_Cell) at EditableBodyPartDetailsLV.pcf: line 74, column 69
    function value_31 () : typekey.SideOfBody {
      return BodyPartDetails.SideOfBody
    }
    
    // 'value' attribute on TextCell (id=PermamentImpairmentPercentage_Cell) at EditableBodyPartDetailsLV.pcf: line 81, column 42
    function value_36 () : java.lang.Integer {
      return BodyPartDetails.ImpairmentPercentage
    }
    
    // 'value' attribute on TypeKeyCell (id=CompensabilityDecision_Cell) at EditableBodyPartDetailsLV.pcf: line 91, column 29
    function value_40 () : typekey.CompensabilityDecision {
      return BodyPartDetails.CompensabilityDecision
    }
    
    // 'value' attribute on DateCell (id=CompensabilityDecisionDate_Cell) at EditableBodyPartDetailsLV.pcf: line 100, column 29
    function value_45 () : java.util.Date {
      return BodyPartDetails.CompensabilityDecisionDate
    }
    
    // 'value' attribute on TextCell (id=CompensabilityComments_Cell) at EditableBodyPartDetailsLV.pcf: line 109, column 29
    function value_50 () : java.lang.String {
      return BodyPartDetails.CompensabilityComments
    }
    
    // 'valueVisible' attribute on TypeKeyCell (id=DetailedBodyPartSide_Cell) at EditableBodyPartDetailsLV.pcf: line 74, column 69
    function visible_30 () : java.lang.Boolean {
      return BodyPartDetails.requiresSideOfBodyField()
    }
    
    // 'visible' attribute on TypeKeyCell (id=CompensabilityDecision_Cell) at EditableBodyPartDetailsLV.pcf: line 91, column 29
    function visible_43 () : java.lang.Boolean {
      return includeCompensabilityFields
    }
    
    property get BodyPartDetails () : entity.BodyPartDetails {
      return getIteratedValue(1) as entity.BodyPartDetails
    }
    
    
  }
  
  
}