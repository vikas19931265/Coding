package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/FireDamageInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FireDamageInfoInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/FireDamageInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FireDamageInfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput (id=RoomsDamagedLVInput) at FireDamageInfoInputSet.pcf: line 31, column 82
    function def_onEnter_9 (def :  pcf.EditableRoomsLV) : void {
      def.onEnter(dwellingIncident)
    }
    
    // 'def' attribute on ListViewInput (id=RoomsDamagedLVInput) at FireDamageInfoInputSet.pcf: line 31, column 82
    function def_refreshVariables_10 (def :  pcf.EditableRoomsLV) : void {
      def.refreshVariables(dwellingIncident)
    }
    
    // 'value' attribute on TextInput (id=MaterialsDamaged_Input) at FireDamageInfoInputSet.pcf: line 41, column 50
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.MaterialsDamaged = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DamagedAreaSize_Input) at FireDamageInfoInputSet.pcf: line 47, column 38
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.DamagedAreaSize = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=MaterialsDamaged_Input) at FireDamageInfoInputSet.pcf: line 41, column 50
    function valueRoot_13 () : java.lang.Object {
      return dwellingIncident
    }
    
    // 'value' attribute on TextInput (id=DamageTypesLabel_Input) at FireDamageInfoInputSet.pcf: line 16, column 37
    function value_0 () : java.lang.Object {
      return null
    }
    
    // 'value' attribute on TextInput (id=MaterialsDamaged_Input) at FireDamageInfoInputSet.pcf: line 41, column 50
    function value_11 () : java.lang.String {
      return dwellingIncident.MaterialsDamaged
    }
    
    // 'value' attribute on TextInput (id=DamagedAreaSize_Input) at FireDamageInfoInputSet.pcf: line 47, column 38
    function value_15 () : java.lang.Integer {
      return dwellingIncident.DamagedAreaSize
    }
    
    // 'value' attribute on InputIterator (id=DamageTypesIterator) at FireDamageInfoInputSet.pcf: line 21, column 48
    function value_8 () : gw.api.claim.DamageManager[] {
      return gw.api.claim.HomeownersHelper.getDamages(dwellingIncident.Claim)
    }
    
    property get dwellingIncident () : DwellingIncident {
      return getRequireValue("dwellingIncident", 0) as DwellingIncident
    }
    
    property set dwellingIncident ($arg :  DwellingIncident) {
      setRequireValue("dwellingIncident", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/FireDamageInfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FireDamageInfoInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'valueLabel' attribute on CheckBoxInput (id=Damage_Input) at FireDamageInfoInputSet.pcf: line 26, column 34
    function valueLabel_5 () : java.lang.Object {
      return damage.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=Damage_Input) at FireDamageInfoInputSet.pcf: line 26, column 34
    function valueRoot_4 () : java.lang.Object {
      return damage
    }
    
    // 'visible' attribute on CheckBoxInput (id=Damage_Input) at FireDamageInfoInputSet.pcf: line 26, column 34
    function visible_2 () : java.lang.Boolean {
      return damage.Exists
    }
    
    property get damage () : gw.api.claim.DamageManager {
      return getIteratedValue(1) as gw.api.claim.DamageManager
    }
    
    
  }
  
  
}