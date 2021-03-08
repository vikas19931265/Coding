package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/incidents/DwellingAttributeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DwellingAttributeInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/incidents/DwellingAttributeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DwellingAttributeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_ClassType_Input) at DwellingAttributeInputSet.pcf: line 18, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.ClassType = (__VALUE_TO_SET as typekey.ClassType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_RoofMaterial_Input) at DwellingAttributeInputSet.pcf: line 33, column 41
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.RoofMaterial = (__VALUE_TO_SET as typekey.RoofMaterial)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_ExtWallMat_Input) at DwellingAttributeInputSet.pcf: line 40, column 39
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.ExtWallMat = (__VALUE_TO_SET as typekey.ExtWallMat)
    }
    
    // 'value' attribute on DateInput (id=YearBuilt_Input) at DwellingAttributeInputSet.pcf: line 47, column 43
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.YearBuilt = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=PropertySize_Input) at DwellingAttributeInputSet.pcf: line 54, column 38
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.PropertySize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=OccupancyType_Input) at DwellingAttributeInputSet.pcf: line 63, column 42
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.OccupancyType = (__VALUE_TO_SET as typekey.OccupancyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_LossArea_Input) at DwellingAttributeInputSet.pcf: line 70, column 37
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.LossArea = (__VALUE_TO_SET as typekey.LossArea)
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumberOfPeopleOnPolicy_Input) at DwellingAttributeInputSet.pcf: line 77, column 38
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.NumberOfPeopleOnPolicy = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_YearsInHome_Input) at DwellingAttributeInputSet.pcf: line 84, column 38
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.YearsInHome = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_SprinklerType_Input) at DwellingAttributeInputSet.pcf: line 96, column 44
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.SprinklerType = (__VALUE_TO_SET as typekey.SprinklerType)
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumSprinkler_Input) at DwellingAttributeInputSet.pcf: line 104, column 40
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.NumSprinkler = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumSprinkOper_Input) at DwellingAttributeInputSet.pcf: line 112, column 40
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.NumSprinkOper = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_SprinkRetServ_Input) at DwellingAttributeInputSet.pcf: line 119, column 44
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.SprinkRetServ = (__VALUE_TO_SET as typekey.SprinkRetServ)
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumStories_Input) at DwellingAttributeInputSet.pcf: line 26, column 38
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.NumStories = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Mold_Input) at DwellingAttributeInputSet.pcf: line 127, column 34
    function defaultSetter_64 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.MoldInvolved = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Hazard_Input) at DwellingAttributeInputSet.pcf: line 133, column 34
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.HazardInvolved = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'validationExpression' attribute on TextInput (id=DwellingAttribute_NumStories_Input) at DwellingAttributeInputSet.pcf: line 26, column 38
    function validationExpression_4 () : java.lang.Object {
      return dwellingIncident.NumStories < 1 ? DisplayKey.get("NVV.Claim.DwellingAttribute.NumStoriesValidation") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=DwellingAttribute_NumSprinkler_Input) at DwellingAttributeInputSet.pcf: line 104, column 40
    function validationExpression_46 () : java.lang.Object {
      return dwellingIncident.NumSprinkler < 0 ? DisplayKey.get("NVV.Claim.DwellingAttribute.NumSprinklerValidation") : null
    }
    
    // 'validationExpression' attribute on TextInput (id=DwellingAttribute_NumSprinkOper_Input) at DwellingAttributeInputSet.pcf: line 112, column 40
    function validationExpression_52 () : java.lang.Object {
      return dwellingIncident.NumSprinkOper < 0 ? DisplayKey.get("NVV.Claim.DwellingAttribute.NumSprinkOperValidation") : null
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_ClassType_Input) at DwellingAttributeInputSet.pcf: line 18, column 38
    function valueRoot_2 () : java.lang.Object {
      return dwellingIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_ClassType_Input) at DwellingAttributeInputSet.pcf: line 18, column 38
    function value_0 () : typekey.ClassType {
      return dwellingIncident.ClassType
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_RoofMaterial_Input) at DwellingAttributeInputSet.pcf: line 33, column 41
    function value_10 () : typekey.RoofMaterial {
      return dwellingIncident.RoofMaterial
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_ExtWallMat_Input) at DwellingAttributeInputSet.pcf: line 40, column 39
    function value_14 () : typekey.ExtWallMat {
      return dwellingIncident.ExtWallMat
    }
    
    // 'value' attribute on DateInput (id=YearBuilt_Input) at DwellingAttributeInputSet.pcf: line 47, column 43
    function value_18 () : java.util.Date {
      return dwellingIncident.YearBuilt
    }
    
    // 'value' attribute on TextInput (id=PropertySize_Input) at DwellingAttributeInputSet.pcf: line 54, column 38
    function value_22 () : java.lang.Integer {
      return dwellingIncident.PropertySize
    }
    
    // 'value' attribute on TypeKeyInput (id=OccupancyType_Input) at DwellingAttributeInputSet.pcf: line 63, column 42
    function value_26 () : typekey.OccupancyType {
      return dwellingIncident.OccupancyType
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_LossArea_Input) at DwellingAttributeInputSet.pcf: line 70, column 37
    function value_30 () : typekey.LossArea {
      return dwellingIncident.LossArea
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumberOfPeopleOnPolicy_Input) at DwellingAttributeInputSet.pcf: line 77, column 38
    function value_34 () : java.lang.Integer {
      return dwellingIncident.NumberOfPeopleOnPolicy
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_YearsInHome_Input) at DwellingAttributeInputSet.pcf: line 84, column 38
    function value_38 () : java.lang.Integer {
      return dwellingIncident.YearsInHome
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_SprinklerType_Input) at DwellingAttributeInputSet.pcf: line 96, column 44
    function value_42 () : typekey.SprinklerType {
      return dwellingIncident.SprinklerType
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumSprinkler_Input) at DwellingAttributeInputSet.pcf: line 104, column 40
    function value_47 () : java.lang.Integer {
      return dwellingIncident.NumSprinkler
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumStories_Input) at DwellingAttributeInputSet.pcf: line 26, column 38
    function value_5 () : java.lang.Integer {
      return dwellingIncident.NumStories
    }
    
    // 'value' attribute on TextInput (id=DwellingAttribute_NumSprinkOper_Input) at DwellingAttributeInputSet.pcf: line 112, column 40
    function value_53 () : java.lang.Integer {
      return dwellingIncident.NumSprinkOper
    }
    
    // 'value' attribute on TypeKeyInput (id=DwellingAttribute_SprinkRetServ_Input) at DwellingAttributeInputSet.pcf: line 119, column 44
    function value_58 () : typekey.SprinkRetServ {
      return dwellingIncident.SprinkRetServ
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Mold_Input) at DwellingAttributeInputSet.pcf: line 127, column 34
    function value_63 () : typekey.YesNo {
      return dwellingIncident.MoldInvolved
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Hazard_Input) at DwellingAttributeInputSet.pcf: line 133, column 34
    function value_67 () : typekey.YesNo {
      return dwellingIncident.HazardInvolved
    }
    
    // 'visible' attribute on InputSet at DwellingAttributeInputSet.pcf: line 86, column 71
    function visible_62 () : java.lang.Boolean {
      return dwellingIncident.Claim.LossCause == LossCause.TC_FIRE
    }
    
    property get dwellingIncident () : DwellingIncident {
      return getRequireValue("dwellingIncident", 0) as DwellingIncident
    }
    
    property set dwellingIncident ($arg :  DwellingIncident) {
      setRequireValue("dwellingIncident", 0, $arg)
    }
    
    
  }
  
  
}