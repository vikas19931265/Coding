package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/PolicyLocationRUDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicyLocationRUDetailsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/policylocations/PolicyLocationRUDetailsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicyLocationRUDetailsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=AddBuilding) at PolicyLocationRUDetailsDV.pcf: line 59, column 44
    function action_28 () : void {
      RU.Policy.createNewBuilding(RU)
    }
    
    // 'action' attribute on Link (id=RemoveBuilding) at PolicyLocationRUDetailsDV.pcf: line 66, column 44
    function action_30 () : void {
      RU.Policy.removeBuilding(RU)
    }
    
    // 'def' attribute on ListViewInput at PolicyLocationRUDetailsDV.pcf: line 94, column 69
    function def_onEnter_43 (def :  pcf.EditableRULienholdersLV) : void {
      def.onEnter(RU, RU.Policy.Claim)
    }
    
    // 'def' attribute on InputSetRef at PolicyLocationRUDetailsDV.pcf: line 108, column 50
    function def_onEnter_45 (def :  pcf.ClassCodeInputSet) : void {
      def.onEnter(RU.ClassCode)
    }
    
    // 'def' attribute on ListViewInput at PolicyLocationRUDetailsDV.pcf: line 94, column 69
    function def_refreshVariables_44 (def :  pcf.EditableRULienholdersLV) : void {
      def.refreshVariables(RU, RU.Policy.Claim)
    }
    
    // 'def' attribute on InputSetRef at PolicyLocationRUDetailsDV.pcf: line 108, column 50
    function def_refreshVariables_46 (def :  pcf.ClassCodeInputSet) : void {
      def.refreshVariables(RU.ClassCode)
    }
    
    // 'value' attribute on TextInput (id=RUNumber_Input) at PolicyLocationRUDetailsDV.pcf: line 17, column 40
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      RU.RUNumber = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextAreaInput (id=RUDescription_Input) at PolicyLocationRUDetailsDV.pcf: line 32, column 33
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      RU.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BuildingNumber_Input) at PolicyLocationRUDetailsDV.pcf: line 78, column 49
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      RU.Building.BuildingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=BuildingNotes_Input) at PolicyLocationRUDetailsDV.pcf: line 84, column 40
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      RU.Building.Notes = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=MiscRUType_Input) at PolicyLocationRUDetailsDV.pcf: line 26, column 52
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      (RU as entity.LocationMiscRU).OtherRiskType = (__VALUE_TO_SET as typekey.OtherRiskType)
    }
    
    // 'label' attribute on TextInput (id=RUCoverageForm_Input) at PolicyLocationRUDetailsDV.pcf: line 38, column 59
    function label_16 () : java.lang.Object {
      return DisplayKey.get("NVV.Policy.LocationDetail.Property.Risks.CoverageForm")
    }
    
    // 'label' attribute on TextInput (id=RUCoveragePartTypes_Input) at PolicyLocationRUDetailsDV.pcf: line 44, column 64
    function label_22 () : java.lang.Object {
      return DisplayKey.get("NVV.Policy.LocationDetail.Property.Risks.CoverageParts")
    }
    
    // 'onToggle' attribute on InputGroup (id=ClassCodeInputGroup) at PolicyLocationRUDetailsDV.pcf: line 106, column 69
    function setter_48 (VALUE :  java.lang.Boolean) : void {
      toggleClassCode()
    }
    
    // 'value' attribute on TextInput (id=RUNumber_Input) at PolicyLocationRUDetailsDV.pcf: line 17, column 40
    function valueRoot_2 () : java.lang.Object {
      return RU
    }
    
    // 'value' attribute on TextInput (id=BuildingNumber_Input) at PolicyLocationRUDetailsDV.pcf: line 78, column 49
    function valueRoot_33 () : java.lang.Object {
      return RU.Building
    }
    
    // 'value' attribute on TypeKeyInput (id=MiscRUType_Input) at PolicyLocationRUDetailsDV.pcf: line 26, column 52
    function valueRoot_8 () : java.lang.Object {
      return (RU as entity.LocationMiscRU)
    }
    
    // 'value' attribute on TextInput (id=RUNumber_Input) at PolicyLocationRUDetailsDV.pcf: line 17, column 40
    function value_0 () : java.lang.Integer {
      return RU.RUNumber
    }
    
    // 'value' attribute on TextAreaInput (id=RUDescription_Input) at PolicyLocationRUDetailsDV.pcf: line 32, column 33
    function value_11 () : java.lang.String {
      return RU.Description
    }
    
    // 'value' attribute on TextInput (id=RUCoverageForm_Input) at PolicyLocationRUDetailsDV.pcf: line 38, column 59
    function value_17 () : java.lang.String {
      return gw.pcf.RiskUnitUtils.getCoverageForm(RU)
    }
    
    // 'value' attribute on TextInput (id=RUCoveragePartTypes_Input) at PolicyLocationRUDetailsDV.pcf: line 44, column 64
    function value_23 () : java.lang.String {
      return gw.pcf.RiskUnitUtils.getCoveragePartTypes(RU)
    }
    
    // 'value' attribute on TextInput (id=BuildingNumber_Input) at PolicyLocationRUDetailsDV.pcf: line 78, column 49
    function value_31 () : java.lang.String {
      return RU.Building.BuildingNumber
    }
    
    // 'value' attribute on TextAreaInput (id=BuildingNotes_Input) at PolicyLocationRUDetailsDV.pcf: line 84, column 40
    function value_35 () : java.lang.String {
      return RU.Building.Notes
    }
    
    // 'value' attribute on TypeKeyInput (id=MiscRUType_Input) at PolicyLocationRUDetailsDV.pcf: line 26, column 52
    function value_6 () : typekey.OtherRiskType {
      return (RU as entity.LocationMiscRU).OtherRiskType
    }
    
    // 'visible' attribute on TextInput (id=RUCoverageForm_Input) at PolicyLocationRUDetailsDV.pcf: line 38, column 59
    function visible_15 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.hasCoverageForm(RU)
    }
    
    // 'visible' attribute on TextInput (id=RUCoveragePartTypes_Input) at PolicyLocationRUDetailsDV.pcf: line 44, column 64
    function visible_21 () : java.lang.Boolean {
      return gw.pcf.RiskUnitUtils.hasCoveragePartTypes(RU)
    }
    
    // 'visible' attribute on Link (id=AddBuilding) at PolicyLocationRUDetailsDV.pcf: line 59, column 44
    function visible_27 () : java.lang.Boolean {
      return RU.Building == null
    }
    
    // 'visible' attribute on Link (id=RemoveBuilding) at PolicyLocationRUDetailsDV.pcf: line 66, column 44
    function visible_29 () : java.lang.Boolean {
      return RU.Building != null
    }
    
    // 'visible' attribute on TypeKeyInput (id=MiscRUType_Input) at PolicyLocationRUDetailsDV.pcf: line 26, column 52
    function visible_4 () : java.lang.Boolean {
      return RU typeis entity.LocationMiscRU
    }
    
    // 'visible' attribute on InputSet at PolicyLocationRUDetailsDV.pcf: line 48, column 99
    function visible_40 () : java.lang.Boolean {
      return RU typeis LocationBasedRU and RU.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    // 'visible' attribute on InputDivider at PolicyLocationRUDetailsDV.pcf: line 88, column 80
    function visible_41 () : java.lang.Boolean {
      return RU.Building != null and CurrentLocation.InEditMode == false
    }
    
    // 'visible' attribute on ListViewInput at PolicyLocationRUDetailsDV.pcf: line 94, column 69
    function visible_42 () : java.lang.Boolean {
      return RU.Policy.PolicyType != PolicyType.TC_WORKERSCOMP
    }
    
    // 'childrenVisible' attribute on InputGroup (id=ClassCodeInputGroup) at PolicyLocationRUDetailsDV.pcf: line 106, column 69
    function visible_47 () : java.lang.Boolean {
      return RU.ClassCode != null
    }
    
    // 'visible' attribute on InputGroup (id=ClassCodeInputGroup) at PolicyLocationRUDetailsDV.pcf: line 106, column 69
    function visible_50 () : java.lang.Boolean {
      return RU.Policy.PolicyType == PolicyType.TC_WORKERSCOMP
    }
    
    property get RU () : LocationBasedRU {
      return getRequireValue("RU", 0) as LocationBasedRU
    }
    
    property set RU ($arg :  LocationBasedRU) {
      setRequireValue("RU", 0, $arg)
    }
    
    function toggleClassCode() {
      if(RU.ClassCode != null) {
        RU.removeClassCode()
      }  
      else {
        RU.addNewClassCode() 
      }
    }
    
    
  }
  
  
}