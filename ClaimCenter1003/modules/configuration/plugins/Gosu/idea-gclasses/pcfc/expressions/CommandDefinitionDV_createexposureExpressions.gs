package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionDV.createexposure.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommandDefinitionDV_createexposureExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionDV.createexposure.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommandDefinitionDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=CoverageSubtype_Input) at CommandDefinitionDV.createexposure.pcf: line 41, column 45
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      state.CoverageSubtype = (__VALUE_TO_SET as typekey.CoverageSubtype)
    }
    
    // 'value' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      state.CoverageType = (__VALUE_TO_SET as typekey.CoverageType)
    }
    
    // 'initialValue' attribute on Variable at CommandDefinitionDV.createexposure.pcf: line 15, column 84
    function initialValue_0 () : gw.bizrules.ruleaction.createexposure.ExposureCommandDefinitionState {
      return new gw.bizrules.ruleaction.createexposure.ExposureCommandDefinitionState(commandDefinition)
    }
    
    // 'initialValue' attribute on Variable at CommandDefinitionDV.createexposure.pcf: line 19, column 91
    function initialValue_1 () : gw.bizrules.ruleaction.createexposure.config.ExposureCommandParameterConfig {
      return gw.bizrules.ruleaction.createexposure.config.ExposureCommandParameterSet.Config
    }
    
    // 'optionLabel' attribute on RangeInput (id=CoverageSubtype_Input) at CommandDefinitionDV.createexposure.pcf: line 41, column 45
    function optionLabel_13 (VALUE :  typekey.CoverageSubtype) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'optionLabel' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function optionLabel_5 (VALUE :  typekey.CoverageType) : java.lang.String {
      return VALUE.DisplayName
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageSubtype_Input) at CommandDefinitionDV.createexposure.pcf: line 41, column 45
    function valueRange_14 () : java.lang.Object {
      return state.AvailableCoverageSubtypes
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function valueRange_6 () : java.lang.Object {
      return state.AvailableCoverageTypes
    }
    
    // 'value' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function valueRoot_4 () : java.lang.Object {
      return state
    }
    
    // 'value' attribute on RangeInput (id=CoverageSubtype_Input) at CommandDefinitionDV.createexposure.pcf: line 41, column 45
    function value_10 () : typekey.CoverageSubtype {
      return state.CoverageSubtype
    }
    
    // 'value' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function value_2 () : typekey.CoverageType {
      return state.CoverageType
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageSubtype_Input) at CommandDefinitionDV.createexposure.pcf: line 41, column 45
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageSubtype_Input) at CommandDefinitionDV.createexposure.pcf: line 41, column 45
    function verifyValueRangeIsAllowedType_15 ($$arg :  typekey.CoverageSubtype[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function verifyValueRangeIsAllowedType_7 ($$arg :  typekey.CoverageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageSubtype_Input) at CommandDefinitionDV.createexposure.pcf: line 41, column 45
    function verifyValueRange_16 () : void {
      var __valueRangeArg = state.AvailableCoverageSubtypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CoverageType_Input) at CommandDefinitionDV.createexposure.pcf: line 29, column 42
    function verifyValueRange_8 () : void {
      var __valueRangeArg = state.AvailableCoverageTypes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get commandDefinition () : gw.bizrules.pcf.RuleCommandDefinitionHolder {
      return getRequireValue("commandDefinition", 0) as gw.bizrules.pcf.RuleCommandDefinitionHolder
    }
    
    property set commandDefinition ($arg :  gw.bizrules.pcf.RuleCommandDefinitionHolder) {
      setRequireValue("commandDefinition", 0, $arg)
    }
    
    property get config () : gw.bizrules.ruleaction.createexposure.config.ExposureCommandParameterConfig {
      return getVariableValue("config", 0) as gw.bizrules.ruleaction.createexposure.config.ExposureCommandParameterConfig
    }
    
    property set config ($arg :  gw.bizrules.ruleaction.createexposure.config.ExposureCommandParameterConfig) {
      setVariableValue("config", 0, $arg)
    }
    
    property get state () : gw.bizrules.ruleaction.createexposure.ExposureCommandDefinitionState {
      return getVariableValue("state", 0) as gw.bizrules.ruleaction.createexposure.ExposureCommandDefinitionState
    }
    
    property set state ($arg :  gw.bizrules.ruleaction.createexposure.ExposureCommandDefinitionState) {
      setVariableValue("state", 0, $arg)
    }
    
    
  }
  
  
}