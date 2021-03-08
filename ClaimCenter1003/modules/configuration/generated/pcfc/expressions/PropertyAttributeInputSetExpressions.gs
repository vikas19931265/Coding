package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/PropertyAttributeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PropertyAttributeInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/PropertyAttributeInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyAttributeInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_ClassType_Input) at PropertyAttributeInputSet.pcf: line 18, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.ClassType = (__VALUE_TO_SET as typekey.ClassType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_ExtWallMat_Input) at PropertyAttributeInputSet.pcf: line 39, column 39
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.ExtWallMat = (__VALUE_TO_SET as typekey.ExtWallMat)
    }
    
    // 'value' attribute on TypeKeyInput (id=OccupancyType_Input) at PropertyAttributeInputSet.pcf: line 48, column 42
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.OccupancyType = (__VALUE_TO_SET as typekey.OccupancyType)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_LossArea_Input) at PropertyAttributeInputSet.pcf: line 55, column 37
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.LossArea = (__VALUE_TO_SET as typekey.LossArea)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_SprinklerType_Input) at PropertyAttributeInputSet.pcf: line 67, column 44
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.SprinklerType = (__VALUE_TO_SET as typekey.SprinklerType)
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkler_Input) at PropertyAttributeInputSet.pcf: line 74, column 40
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.NumSprinkler = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkOper_Input) at PropertyAttributeInputSet.pcf: line 81, column 40
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.NumSprinkOper = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_SprinkRetServ_Input) at PropertyAttributeInputSet.pcf: line 88, column 44
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.SprinkRetServ = (__VALUE_TO_SET as typekey.SprinkRetServ)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Mold_Input) at PropertyAttributeInputSet.pcf: line 96, column 34
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.MoldInvolved = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Hazard_Input) at PropertyAttributeInputSet.pcf: line 102, column 34
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.HazardInvolved = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumStories_Input) at PropertyAttributeInputSet.pcf: line 25, column 38
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.NumStories = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_RoofMaterial_Input) at PropertyAttributeInputSet.pcf: line 32, column 41
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      FixedPropertyIncident.RoofMaterial = (__VALUE_TO_SET as typekey.RoofMaterial)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_ClassType_Input) at PropertyAttributeInputSet.pcf: line 18, column 38
    function valueRoot_2 () : java.lang.Object {
      return FixedPropertyIncident
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_ClassType_Input) at PropertyAttributeInputSet.pcf: line 18, column 38
    function value_0 () : typekey.ClassType {
      return FixedPropertyIncident.ClassType
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_ExtWallMat_Input) at PropertyAttributeInputSet.pcf: line 39, column 39
    function value_12 () : typekey.ExtWallMat {
      return FixedPropertyIncident.ExtWallMat
    }
    
    // 'value' attribute on TypeKeyInput (id=OccupancyType_Input) at PropertyAttributeInputSet.pcf: line 48, column 42
    function value_16 () : typekey.OccupancyType {
      return FixedPropertyIncident.OccupancyType
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_LossArea_Input) at PropertyAttributeInputSet.pcf: line 55, column 37
    function value_20 () : typekey.LossArea {
      return FixedPropertyIncident.LossArea
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_SprinklerType_Input) at PropertyAttributeInputSet.pcf: line 67, column 44
    function value_24 () : typekey.SprinklerType {
      return FixedPropertyIncident.SprinklerType
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkler_Input) at PropertyAttributeInputSet.pcf: line 74, column 40
    function value_28 () : java.lang.Integer {
      return FixedPropertyIncident.NumSprinkler
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumSprinkOper_Input) at PropertyAttributeInputSet.pcf: line 81, column 40
    function value_32 () : java.lang.Integer {
      return FixedPropertyIncident.NumSprinkOper
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_SprinkRetServ_Input) at PropertyAttributeInputSet.pcf: line 88, column 44
    function value_36 () : typekey.SprinkRetServ {
      return FixedPropertyIncident.SprinkRetServ
    }
    
    // 'value' attribute on TextInput (id=PropertyAttribute_NumStories_Input) at PropertyAttributeInputSet.pcf: line 25, column 38
    function value_4 () : java.lang.Integer {
      return FixedPropertyIncident.NumStories
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Mold_Input) at PropertyAttributeInputSet.pcf: line 96, column 34
    function value_41 () : typekey.YesNo {
      return FixedPropertyIncident.MoldInvolved
    }
    
    // 'value' attribute on TypeKeyInput (id=LossLocation_Hazard_Input) at PropertyAttributeInputSet.pcf: line 102, column 34
    function value_45 () : typekey.YesNo {
      return FixedPropertyIncident.HazardInvolved
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyAttribute_RoofMaterial_Input) at PropertyAttributeInputSet.pcf: line 32, column 41
    function value_8 () : typekey.RoofMaterial {
      return FixedPropertyIncident.RoofMaterial
    }
    
    // 'visible' attribute on InputSet at PropertyAttributeInputSet.pcf: line 57, column 76
    function visible_40 () : java.lang.Boolean {
      return FixedPropertyIncident.Claim.LossCause == LossCause.TC_FIRE
    }
    
    property get FixedPropertyIncident () : FixedPropertyIncident {
      return getRequireValue("FixedPropertyIncident", 0) as FixedPropertyIncident
    }
    
    property set FixedPropertyIncident ($arg :  FixedPropertyIncident) {
      setRequireValue("FixedPropertyIncident", 0, $arg)
    }
    
    
  }
  
  
}