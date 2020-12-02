package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/TotalLossCalculatorPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TotalLossCalculatorPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/TotalLossCalculatorPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TotalLossCalculatorPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (VehicleIncident :  VehicleIncident) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Popup (id=TotalLossCalculatorPopup) at TotalLossCalculatorPopup.pcf: line 10, column 76
    function beforeCommit_98 (pickedValue :  java.lang.Object) : void {
      VehicleIncident.TotalLossCalculatorPreUpdate()
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge5Years_Input) at TotalLossCalculatorPopup.pcf: line 82, column 55
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleAge5Years = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge10Years_Input) at TotalLossCalculatorPopup.pcf: line 88, column 56
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleAge10Years = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mileage100K_Input) at TotalLossCalculatorPopup.pcf: line 94, column 50
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Mileage100K = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Extrication_Input) at TotalLossCalculatorPopup.pcf: line 105, column 50
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.Extrication = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleRollOver_Input) at TotalLossCalculatorPopup.pcf: line 120, column 54
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleRollOver = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnDash_Input) at TotalLossCalculatorPopup.pcf: line 130, column 51
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.FireBurnDash = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnEngine_Input) at TotalLossCalculatorPopup.pcf: line 136, column 53
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.FireBurnEngine = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnWindshield_Input) at TotalLossCalculatorPopup.pcf: line 142, column 57
    function defaultSetter_67 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.FireBurnWindshield = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleSubmerged_Input) at TotalLossCalculatorPopup.pcf: line 152, column 55
    function defaultSetter_71 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.VehicleSubmerged = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelDash_Input) at TotalLossCalculatorPopup.pcf: line 158, column 53
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.WaterLevelDash = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=FloodSaltWater_Input) at TotalLossCalculatorPopup.pcf: line 164, column 53
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.FloodSaltWater = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelSeats_Input) at TotalLossCalculatorPopup.pcf: line 170, column 54
    function defaultSetter_83 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.WaterLevelSeats = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ComponentsMissing_Input) at TotalLossCalculatorPopup.pcf: line 180, column 56
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.ComponentsMissing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=InteriorMissing_Input) at TotalLossCalculatorPopup.pcf: line 186, column 54
    function defaultSetter_91 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.InteriorMissing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AirbagsMissing_Input) at TotalLossCalculatorPopup.pcf: line 192, column 53
    function defaultSetter_95 (__VALUE_TO_SET :  java.lang.Object) : void {
      VehicleIncident.AirbagsMissing = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on TypeKeyInput (id=VehicleLicensePlateState_Input) at TotalLossCalculatorPopup.pcf: line 60, column 47
    function filter_24 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_VEHICLE_REG)
    }
    
    // EditButtons at TotalLossCalculatorPopup.pcf: line 18, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'value' attribute on TextInput (id=VehicleYear_Input) at TotalLossCalculatorPopup.pcf: line 29, column 44
    function valueRoot_2 () : java.lang.Object {
      return VehicleIncident.Vehicle
    }
    
    // 'value' attribute on TextInput (id=TotalLossPoints_Input) at TotalLossCalculatorPopup.pcf: line 67, column 44
    function valueRoot_27 () : java.lang.Object {
      return VehicleIncident
    }
    
    // 'value' attribute on TextInput (id=VehicleYear_Input) at TotalLossCalculatorPopup.pcf: line 29, column 44
    function value_1 () : java.lang.Integer {
      return VehicleIncident.Vehicle.Year
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleStyle_Input) at TotalLossCalculatorPopup.pcf: line 42, column 47
    function value_10 () : typekey.VehicleStyle {
      return VehicleIncident.Vehicle.Style
    }
    
    // 'value' attribute on TextInput (id=VehicleColor_Input) at TotalLossCalculatorPopup.pcf: line 46, column 52
    function value_13 () : java.lang.String {
      return VehicleIncident.Vehicle.Color
    }
    
    // 'value' attribute on TextInput (id=VehicleVin_Input) at TotalLossCalculatorPopup.pcf: line 50, column 50
    function value_16 () : java.lang.String {
      return VehicleIncident.Vehicle.Vin
    }
    
    // 'value' attribute on TextInput (id=VehicleLicensePlate_Input) at TotalLossCalculatorPopup.pcf: line 54, column 59
    function value_19 () : java.lang.String {
      return VehicleIncident.Vehicle.LicensePlate
    }
    
    // 'value' attribute on TypeKeyInput (id=VehicleLicensePlateState_Input) at TotalLossCalculatorPopup.pcf: line 60, column 47
    function value_22 () : typekey.Jurisdiction {
      return VehicleIncident.Vehicle.State
    }
    
    // 'value' attribute on TextInput (id=TotalLossPoints_Input) at TotalLossCalculatorPopup.pcf: line 67, column 44
    function value_26 () : java.lang.Integer {
      return VehicleIncident.TotalLossPoints
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleTotalLoss_Input) at TotalLossCalculatorPopup.pcf: line 72, column 48
    function value_29 () : java.lang.Boolean {
      return VehicleIncident.TotalLoss
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge5Years_Input) at TotalLossCalculatorPopup.pcf: line 82, column 55
    function value_32 () : java.lang.Boolean {
      return VehicleIncident.VehicleAge5Years
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAge10Years_Input) at TotalLossCalculatorPopup.pcf: line 88, column 56
    function value_36 () : java.lang.Boolean {
      return VehicleIncident.VehicleAge10Years
    }
    
    // 'value' attribute on TextInput (id=VehicleMake_Input) at TotalLossCalculatorPopup.pcf: line 33, column 51
    function value_4 () : java.lang.String {
      return VehicleIncident.Vehicle.Make
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mileage100K_Input) at TotalLossCalculatorPopup.pcf: line 94, column 50
    function value_40 () : java.lang.Boolean {
      return VehicleIncident.Mileage100K
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleTowed_Input) at TotalLossCalculatorPopup.pcf: line 99, column 56
    function value_44 () : java.lang.Boolean {
      return VehicleIncident.HasTowingServices
    }
    
    // 'value' attribute on BooleanRadioInput (id=Extrication_Input) at TotalLossCalculatorPopup.pcf: line 105, column 50
    function value_47 () : java.lang.Boolean {
      return VehicleIncident.Extrication
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleAirbagsDeployed_Input) at TotalLossCalculatorPopup.pcf: line 114, column 54
    function value_51 () : java.lang.Boolean {
      return VehicleIncident.AirbagsDeployed
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleRollOver_Input) at TotalLossCalculatorPopup.pcf: line 120, column 54
    function value_54 () : java.lang.Boolean {
      return VehicleIncident.VehicleRollOver
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnDash_Input) at TotalLossCalculatorPopup.pcf: line 130, column 51
    function value_58 () : java.lang.Boolean {
      return VehicleIncident.FireBurnDash
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnEngine_Input) at TotalLossCalculatorPopup.pcf: line 136, column 53
    function value_62 () : java.lang.Boolean {
      return VehicleIncident.FireBurnEngine
    }
    
    // 'value' attribute on BooleanRadioInput (id=FireBurnWindshield_Input) at TotalLossCalculatorPopup.pcf: line 142, column 57
    function value_66 () : java.lang.Boolean {
      return VehicleIncident.FireBurnWindshield
    }
    
    // 'value' attribute on TextInput (id=VehicleModel_Input) at TotalLossCalculatorPopup.pcf: line 37, column 52
    function value_7 () : java.lang.String {
      return VehicleIncident.Vehicle.Model
    }
    
    // 'value' attribute on BooleanRadioInput (id=VehicleSubmerged_Input) at TotalLossCalculatorPopup.pcf: line 152, column 55
    function value_70 () : java.lang.Boolean {
      return VehicleIncident.VehicleSubmerged
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelDash_Input) at TotalLossCalculatorPopup.pcf: line 158, column 53
    function value_74 () : java.lang.Boolean {
      return VehicleIncident.WaterLevelDash
    }
    
    // 'value' attribute on BooleanRadioInput (id=FloodSaltWater_Input) at TotalLossCalculatorPopup.pcf: line 164, column 53
    function value_78 () : java.lang.Boolean {
      return VehicleIncident.FloodSaltWater
    }
    
    // 'value' attribute on BooleanRadioInput (id=WaterLevelSeats_Input) at TotalLossCalculatorPopup.pcf: line 170, column 54
    function value_82 () : java.lang.Boolean {
      return VehicleIncident.WaterLevelSeats
    }
    
    // 'value' attribute on BooleanRadioInput (id=ComponentsMissing_Input) at TotalLossCalculatorPopup.pcf: line 180, column 56
    function value_86 () : java.lang.Boolean {
      return VehicleIncident.ComponentsMissing
    }
    
    // 'value' attribute on BooleanRadioInput (id=InteriorMissing_Input) at TotalLossCalculatorPopup.pcf: line 186, column 54
    function value_90 () : java.lang.Boolean {
      return VehicleIncident.InteriorMissing
    }
    
    // 'value' attribute on BooleanRadioInput (id=AirbagsMissing_Input) at TotalLossCalculatorPopup.pcf: line 192, column 53
    function value_94 () : java.lang.Boolean {
      return VehicleIncident.AirbagsMissing
    }
    
    override property get CurrentLocation () : pcf.TotalLossCalculatorPopup {
      return super.CurrentLocation as pcf.TotalLossCalculatorPopup
    }
    
    property get VehicleIncident () : VehicleIncident {
      return getVariableValue("VehicleIncident", 0) as VehicleIncident
    }
    
    property set VehicleIncident ($arg :  VehicleIncident) {
      setVariableValue("VehicleIncident", 0, $arg)
    }
    
    
  }
  
  
}