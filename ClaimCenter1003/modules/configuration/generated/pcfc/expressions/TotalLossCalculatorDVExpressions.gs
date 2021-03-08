package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/TotalLossCalculatorDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TotalLossCalculatorDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/TotalLossCalculatorDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TotalLossCalculatorDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleRollOver_Input) at TotalLossCalculatorDV.pcf: line 148, column 89
    function defaultSetter_106 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.VehicleRollOver = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnDash_Input) at TotalLossCalculatorDV.pcf: line 163, column 89
    function defaultSetter_116 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.FireBurnDash = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnEngine_Input) at TotalLossCalculatorDV.pcf: line 170, column 89
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.FireBurnEngine = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnWindshield_Input) at TotalLossCalculatorDV.pcf: line 177, column 89
    function defaultSetter_128 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.FireBurnWindshield = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleSubmerged_Input) at TotalLossCalculatorDV.pcf: line 192, column 89
    function defaultSetter_138 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.VehicleSubmerged = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelDash_Input) at TotalLossCalculatorDV.pcf: line 199, column 89
    function defaultSetter_144 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.WaterLevelDash = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FloodSaltWater_Input) at TotalLossCalculatorDV.pcf: line 206, column 89
    function defaultSetter_150 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.FloodSaltWater = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelSeats_Input) at TotalLossCalculatorDV.pcf: line 213, column 89
    function defaultSetter_156 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.WaterLevelSeats = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ComponentsMissing_Input) at TotalLossCalculatorDV.pcf: line 228, column 89
    function defaultSetter_166 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.ComponentsMissing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InteriorMissing_Input) at TotalLossCalculatorDV.pcf: line 235, column 89
    function defaultSetter_172 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.InteriorMissing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AirbagsMissing_Input) at TotalLossCalculatorDV.pcf: line 242, column 89
    function defaultSetter_178 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.AirbagsMissing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleTotalLoss_Input) at TotalLossCalculatorDV.pcf: line 83, column 88
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.TotalLoss = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge5Years_Input) at TotalLossCalculatorDV.pcf: line 100, column 89
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.VehicleAge5Years = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge10Years_Input) at TotalLossCalculatorDV.pcf: line 107, column 89
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.VehicleAge10Years = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mileage100K_Input) at TotalLossCalculatorDV.pcf: line 114, column 89
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.Mileage100K = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Extrication_Input) at TotalLossCalculatorDV.pcf: line 127, column 89
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.VehicleIncident.Extrication = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=VehicleTotalLoss_Input) at TotalLossCalculatorDV.pcf: line 83, column 88
    function editable_54 () : java.lang.Boolean {
      return Exposure.New
    }
    
    // 'filter' attribute on TypeKeyInput (id=VehicleLicensePlateState_Input) at TotalLossCalculatorDV.pcf: line 68, column 89
    function filter_46 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // 'value' attribute on TextInput (id=VehicleYear_Input) at TotalLossCalculatorDV.pcf: line 30, column 89
    function valueRoot_10 () : java.lang.Object {
      return Exposure.VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=TotalLossPoints_Input) at TotalLossCalculatorDV.pcf: line 76, column 89
    function valueRoot_51 () : java.lang.Object {
      return Exposure.VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=TotalLossCalculator_NonAuto_Input) at TotalLossCalculatorDV.pcf: line 17, column 93
    function value_1 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAirbagsDeployed_Input) at TotalLossCalculatorDV.pcf: line 141, column 89
    function value_100 () : java.lang.Boolean {
      return Exposure.VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleRollOver_Input) at TotalLossCalculatorDV.pcf: line 148, column 89
    function value_105 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleRollOver
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnDash_Input) at TotalLossCalculatorDV.pcf: line 163, column 89
    function value_115 () : java.lang.Boolean {
      return Exposure.VehicleIncident.FireBurnDash
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnEngine_Input) at TotalLossCalculatorDV.pcf: line 170, column 89
    function value_121 () : java.lang.Boolean {
      return Exposure.VehicleIncident.FireBurnEngine
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnWindshield_Input) at TotalLossCalculatorDV.pcf: line 177, column 89
    function value_127 () : java.lang.Boolean {
      return Exposure.VehicleIncident.FireBurnWindshield
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleSubmerged_Input) at TotalLossCalculatorDV.pcf: line 192, column 89
    function value_137 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleSubmerged
    }
    
    // 'value' attribute on TextInput (id=VehicleMake_Input) at TotalLossCalculatorDV.pcf: line 35, column 89
    function value_14 () : java.lang.String {
      return Exposure.VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelDash_Input) at TotalLossCalculatorDV.pcf: line 199, column 89
    function value_143 () : java.lang.Boolean {
      return Exposure.VehicleIncident.WaterLevelDash
    }
    
    // 'value' attribute on BooleanRadioInput (id=FloodSaltWater_Input) at TotalLossCalculatorDV.pcf: line 206, column 89
    function value_149 () : java.lang.Boolean {
      return Exposure.VehicleIncident.FloodSaltWater
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelSeats_Input) at TotalLossCalculatorDV.pcf: line 213, column 89
    function value_155 () : java.lang.Boolean {
      return Exposure.VehicleIncident.WaterLevelSeats
    }
    
    // 'value' attribute on BooleanRadioInput (id=ComponentsMissing_Input) at TotalLossCalculatorDV.pcf: line 228, column 89
    function value_165 () : java.lang.Boolean {
      return Exposure.VehicleIncident.ComponentsMissing
    }
    
    // 'value' attribute on BooleanRadioInput (id=InteriorMissing_Input) at TotalLossCalculatorDV.pcf: line 235, column 89
    function value_171 () : java.lang.Boolean {
      return Exposure.VehicleIncident.InteriorMissing
    }
    
    // 'value' attribute on BooleanRadioInput (id=AirbagsMissing_Input) at TotalLossCalculatorDV.pcf: line 242, column 89
    function value_177 () : java.lang.Boolean {
      return Exposure.VehicleIncident.AirbagsMissing
    }
    
    // 'value' attribute on TextInput (id=VehicleModel_Input) at TotalLossCalculatorDV.pcf: line 40, column 89
    function value_19 () : java.lang.String {
      return Exposure.VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleStyle_Input) at TotalLossCalculatorDV.pcf: line 46, column 89
    function value_24 () : typekey.VehicleStyle {
      return Exposure.VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=VehicleColor_Input) at TotalLossCalculatorDV.pcf: line 51, column 89
    function value_29 () : java.lang.String {
      return Exposure.VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=VehicleVin_Input) at TotalLossCalculatorDV.pcf: line 56, column 89
    function value_34 () : java.lang.String {
      return Exposure.VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=VehicleLicensePlate_Input) at TotalLossCalculatorDV.pcf: line 61, column 89
    function value_39 () : java.lang.String {
      return Exposure.VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleLicensePlateState_Input) at TotalLossCalculatorDV.pcf: line 68, column 89
    function value_44 () : typekey.Jurisdiction {
      return Exposure.VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=TotalLossPoints_Input) at TotalLossCalculatorDV.pcf: line 76, column 89
    function value_50 () : java.lang.Integer {
      return Exposure.VehicleIncident.TotalLossPoints
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleTotalLoss_Input) at TotalLossCalculatorDV.pcf: line 83, column 88
    function value_56 () : java.lang.Boolean {
      return Exposure.VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge5Years_Input) at TotalLossCalculatorDV.pcf: line 100, column 89
    function value_67 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleAge5Years
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge10Years_Input) at TotalLossCalculatorDV.pcf: line 107, column 89
    function value_73 () : java.lang.Boolean {
      return Exposure.VehicleIncident.VehicleAge10Years
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mileage100K_Input) at TotalLossCalculatorDV.pcf: line 114, column 89
    function value_79 () : java.lang.Boolean {
      return Exposure.VehicleIncident.Mileage100K
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleTowed_Input) at TotalLossCalculatorDV.pcf: line 120, column 89
    function value_85 () : java.lang.Boolean {
      return Exposure.VehicleIncident.HasTowingServices
    }
    
    // 'value' attribute on TextInput (id=VehicleYear_Input) at TotalLossCalculatorDV.pcf: line 30, column 89
    function value_9 () : java.lang.Integer {
      return Exposure.VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on BooleanRadioInput (id=Extrication_Input) at TotalLossCalculatorDV.pcf: line 127, column 89
    function value_90 () : java.lang.Boolean {
      return Exposure.VehicleIncident.Extrication
    }
    
    // 'visible' attribute on TextInput (id=TotalLossCalculator_NonAuto_Input) at TotalLossCalculatorDV.pcf: line 17, column 93
    function visible_0 () : java.lang.Boolean {
      return not gw.config.LOBAbstraction.ForClaim.ForLossType.isAuto(Exposure.Claim)
    }
    
    // 'visible' attribute on TextInput (id=TotalLossCalculator_Vehicle_Input) at TotalLossCalculatorDV.pcf: line 24, column 89
    function visible_4 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isAuto(Exposure.Claim)
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}