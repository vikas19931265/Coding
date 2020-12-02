package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/policy/StatCodeFilterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StatCodeFilterDVExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/policy/StatCodeFilterDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StatCodeFilterDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at StatCodeFilterDV.pcf: line 73, column 37
    function def_onEnter_49 (def :  pcf.SearchOnlyInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at StatCodeFilterDV.pcf: line 73, column 37
    function def_refreshVariables_50 (def :  pcf.SearchOnlyInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on RangeInput (id=LineNumber_Input) at StatCodeFilterDV.pcf: line 19, column 40
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      FilterCriteria.LineNumber = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on RangeInput (id=InsuranceSubLine_Input) at StatCodeFilterDV.pcf: line 35, column 47
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      FilterCriteria.InsuranceSubLine = (__VALUE_TO_SET as typekey.InsuranceSubLine)
    }
    
    // 'value' attribute on RangeInput (id=LocationNumber_Input) at StatCodeFilterDV.pcf: line 43, column 39
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      FilterCriteria.LocationNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=BuildingNumber_Input) at StatCodeFilterDV.pcf: line 53, column 39
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      FilterCriteria.BuildingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=VehicleNumber_Input) at StatCodeFilterDV.pcf: line 61, column 39
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      FilterCriteria.VehicleNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at StatCodeFilterDV.pcf: line 69, column 39
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      FilterCriteria.ClassCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=InsuranceLine_Input) at StatCodeFilterDV.pcf: line 27, column 44
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      FilterCriteria.InsuranceLine = (__VALUE_TO_SET as typekey.InsuranceLine)
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceLine_Input) at StatCodeFilterDV.pcf: line 27, column 44
    function valueRange_10 () : java.lang.Object {
      return FilterCriteria.getStatCodeValueRange("InsuranceLine")
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceSubLine_Input) at StatCodeFilterDV.pcf: line 35, column 47
    function valueRange_17 () : java.lang.Object {
      return FilterCriteria.getStatCodeValueRange("InsuranceSubLine")
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationNumber_Input) at StatCodeFilterDV.pcf: line 43, column 39
    function valueRange_24 () : java.lang.Object {
      return FilterCriteria.getStatCodeValueRange("LocationNumber")
    }
    
    // 'valueRange' attribute on RangeInput (id=LineNumber_Input) at StatCodeFilterDV.pcf: line 19, column 40
    function valueRange_3 () : java.lang.Object {
      return FilterCriteria.getStatCodeValueRange("LineNumber")
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingNumber_Input) at StatCodeFilterDV.pcf: line 53, column 39
    function valueRange_31 () : java.lang.Object {
      return FilterCriteria.getStatCodeValueRange("BuildingNumber")
    }
    
    // 'valueRange' attribute on RangeInput (id=VehicleNumber_Input) at StatCodeFilterDV.pcf: line 61, column 39
    function valueRange_38 () : java.lang.Object {
      return FilterCriteria.getStatCodeValueRange("VehicleNumber")
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at StatCodeFilterDV.pcf: line 69, column 39
    function valueRange_45 () : java.lang.Object {
      return FilterCriteria.getStatCodeValueRange("ClassCode")
    }
    
    // 'value' attribute on RangeInput (id=LineNumber_Input) at StatCodeFilterDV.pcf: line 19, column 40
    function valueRoot_2 () : java.lang.Object {
      return FilterCriteria
    }
    
    // 'value' attribute on RangeInput (id=LineNumber_Input) at StatCodeFilterDV.pcf: line 19, column 40
    function value_0 () : java.lang.Integer {
      return FilterCriteria.LineNumber
    }
    
    // 'value' attribute on RangeInput (id=InsuranceSubLine_Input) at StatCodeFilterDV.pcf: line 35, column 47
    function value_14 () : typekey.InsuranceSubLine {
      return FilterCriteria.InsuranceSubLine
    }
    
    // 'value' attribute on RangeInput (id=LocationNumber_Input) at StatCodeFilterDV.pcf: line 43, column 39
    function value_21 () : java.lang.String {
      return FilterCriteria.LocationNumber
    }
    
    // 'value' attribute on RangeInput (id=BuildingNumber_Input) at StatCodeFilterDV.pcf: line 53, column 39
    function value_28 () : java.lang.String {
      return FilterCriteria.BuildingNumber
    }
    
    // 'value' attribute on RangeInput (id=VehicleNumber_Input) at StatCodeFilterDV.pcf: line 61, column 39
    function value_35 () : java.lang.String {
      return FilterCriteria.VehicleNumber
    }
    
    // 'value' attribute on RangeInput (id=ClassCode_Input) at StatCodeFilterDV.pcf: line 69, column 39
    function value_42 () : java.lang.String {
      return FilterCriteria.ClassCode
    }
    
    // 'value' attribute on RangeInput (id=InsuranceLine_Input) at StatCodeFilterDV.pcf: line 27, column 44
    function value_7 () : typekey.InsuranceLine {
      return FilterCriteria.InsuranceLine
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceLine_Input) at StatCodeFilterDV.pcf: line 27, column 44
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceLine_Input) at StatCodeFilterDV.pcf: line 27, column 44
    function verifyValueRangeIsAllowedType_11 ($$arg :  typekey.InsuranceLine[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceSubLine_Input) at StatCodeFilterDV.pcf: line 35, column 47
    function verifyValueRangeIsAllowedType_18 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceSubLine_Input) at StatCodeFilterDV.pcf: line 35, column 47
    function verifyValueRangeIsAllowedType_18 ($$arg :  typekey.InsuranceSubLine[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationNumber_Input) at StatCodeFilterDV.pcf: line 43, column 39
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationNumber_Input) at StatCodeFilterDV.pcf: line 43, column 39
    function verifyValueRangeIsAllowedType_25 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingNumber_Input) at StatCodeFilterDV.pcf: line 53, column 39
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingNumber_Input) at StatCodeFilterDV.pcf: line 53, column 39
    function verifyValueRangeIsAllowedType_32 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=VehicleNumber_Input) at StatCodeFilterDV.pcf: line 61, column 39
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=VehicleNumber_Input) at StatCodeFilterDV.pcf: line 61, column 39
    function verifyValueRangeIsAllowedType_39 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LineNumber_Input) at StatCodeFilterDV.pcf: line 19, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.lang.Integer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=LineNumber_Input) at StatCodeFilterDV.pcf: line 19, column 40
    function verifyValueRangeIsAllowedType_4 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at StatCodeFilterDV.pcf: line 69, column 39
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at StatCodeFilterDV.pcf: line 69, column 39
    function verifyValueRangeIsAllowedType_46 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceLine_Input) at StatCodeFilterDV.pcf: line 27, column 44
    function verifyValueRange_12 () : void {
      var __valueRangeArg = FilterCriteria.getStatCodeValueRange("InsuranceLine")
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=InsuranceSubLine_Input) at StatCodeFilterDV.pcf: line 35, column 47
    function verifyValueRange_19 () : void {
      var __valueRangeArg = FilterCriteria.getStatCodeValueRange("InsuranceSubLine")
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_18(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=LocationNumber_Input) at StatCodeFilterDV.pcf: line 43, column 39
    function verifyValueRange_26 () : void {
      var __valueRangeArg = FilterCriteria.getStatCodeValueRange("LocationNumber")
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_25(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=BuildingNumber_Input) at StatCodeFilterDV.pcf: line 53, column 39
    function verifyValueRange_33 () : void {
      var __valueRangeArg = FilterCriteria.getStatCodeValueRange("BuildingNumber")
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_32(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=VehicleNumber_Input) at StatCodeFilterDV.pcf: line 61, column 39
    function verifyValueRange_40 () : void {
      var __valueRangeArg = FilterCriteria.getStatCodeValueRange("VehicleNumber")
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_39(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=ClassCode_Input) at StatCodeFilterDV.pcf: line 69, column 39
    function verifyValueRange_47 () : void {
      var __valueRangeArg = FilterCriteria.getStatCodeValueRange("ClassCode")
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_46(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=LineNumber_Input) at StatCodeFilterDV.pcf: line 19, column 40
    function verifyValueRange_5 () : void {
      var __valueRangeArg = FilterCriteria.getStatCodeValueRange("LineNumber")
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_4(__valueRangeArg)
    }
    
    property get FilterCriteria () : PolicyStatCodeFilterCriteria {
      return getRequireValue("FilterCriteria", 0) as PolicyStatCodeFilterCriteria
    }
    
    property set FilterCriteria ($arg :  PolicyStatCodeFilterCriteria) {
      setRequireValue("FilterCriteria", 0, $arg)
    }
    
    
  }
  
  
}