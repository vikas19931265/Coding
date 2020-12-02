package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionParameterLocalizationsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CommandDefinitionParameterLocalizationsPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionParameterLocalizationsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CommandDefinitionParameterLocalizationsPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (title :  String, accessors :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[], startInEditMode :  boolean) : int {
      return 0
    }
    
    // EditButtons at CommandDefinitionParameterLocalizationsPopup.pcf: line 23, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'sortBy' attribute on IteratorSort at CommandDefinitionParameterLocalizationsPopup.pcf: line 36, column 28
    function sortBy_1 (accessor :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor) : java.lang.Object {
      return accessor.Language
    }
    
    // 'value' attribute on TextCell (id=language_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 42, column 101
    function sortValue_2 (accessor :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor) : java.lang.Object {
      return accessor
    }
    
    // 'value' attribute on CheckBoxCell (id=chkbox_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 47, column 44
    function sortValue_3 (accessor :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor) : java.lang.Object {
      return accessor.UseDefault
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 55, column 38
    function sortValue_4 (accessor :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor) : java.lang.Object {
      return accessor.Value
    }
    
    // 'startInEditMode' attribute on Popup (id=CommandDefinitionParameterLocalizationsPopup) at CommandDefinitionParameterLocalizationsPopup.pcf: line 9, column 37
    function startInEditMode_23 () : java.lang.Boolean {
      return startInEditMode
    }
    
    // 'title' attribute on Popup (id=CommandDefinitionParameterLocalizationsPopup) at CommandDefinitionParameterLocalizationsPopup.pcf: line 9, column 37
    static function title_24 (accessors :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[], startInEditMode :  boolean, title :  String) : java.lang.Object {
      return accessors.first().Label
    }
    
    // 'value' attribute on RowIterator (id=localizedAccessorRows) at CommandDefinitionParameterLocalizationsPopup.pcf: line 33, column 98
    function value_22 () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[] {
      return accessors
    }
    
    override property get CurrentLocation () : pcf.CommandDefinitionParameterLocalizationsPopup {
      return super.CurrentLocation as pcf.CommandDefinitionParameterLocalizationsPopup
    }
    
    property get accessors () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[] {
      return getVariableValue("accessors", 0) as gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[]
    }
    
    property set accessors ($arg :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[]) {
      setVariableValue("accessors", 0, $arg)
    }
    
    property get startInEditMode () : boolean {
      return getVariableValue("startInEditMode", 0) as java.lang.Boolean
    }
    
    property set startInEditMode ($arg :  boolean) {
      setVariableValue("startInEditMode", 0, $arg)
    }
    
    property get title () : String {
      return getVariableValue("title", 0) as String
    }
    
    property set title ($arg :  String) {
      setVariableValue("title", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionParameterLocalizationsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CommandDefinitionParameterLocalizationsPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on Reflect at CommandDefinitionParameterLocalizationsPopup.pcf: line 58, column 37
    function available_13 (TRIGGER_INDEX :  int, VALUE :  java.lang.Boolean) : java.lang.Object {
      return VALUE != true
    }
    
    // 'available' attribute on TextCell (id=value_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 55, column 38
    function available_15 () : java.lang.Boolean {
      return !accessor.UseDefault
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 55, column 38
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      accessor.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxCell (id=chkbox_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 47, column 44
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      accessor.UseDefault = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // Reflect at CommandDefinitionParameterLocalizationsPopup.pcf: line 58, column 37
    function reflectionValue_14 (TRIGGER_INDEX :  int, VALUE :  java.lang.Boolean) : java.lang.Object {
      return (VALUE == true) ? (accessor.DefaultValue) : (true) ? (accessor.Value) : "<NOCHANGE>"
    }
    
    // 'required' attribute on TextCell (id=value_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 55, column 38
    function required_16 () : java.lang.Boolean {
      return accessor.Required
    }
    
    // 'value' attribute on CheckBoxCell (id=chkbox_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 47, column 44
    function valueRoot_9 () : java.lang.Object {
      return accessor
    }
    
    // 'value' attribute on ReflectCondition at CommandDefinitionParameterLocalizationsPopup.pcf: line 61, column 50
    function value_11 (TRIGGER_INDEX :  int, VALUE :  java.lang.Boolean) : java.lang.Object {
      return accessor.DefaultValue
    }
    
    // 'value' attribute on ReflectCondition at CommandDefinitionParameterLocalizationsPopup.pcf: line 64, column 43
    function value_12 (TRIGGER_INDEX :  int, VALUE :  java.lang.Boolean) : java.lang.Object {
      return accessor.Value
    }
    
    // 'value' attribute on TextCell (id=value_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 55, column 38
    function value_17 () : java.lang.String {
      return accessor.Value
    }
    
    // 'value' attribute on TextCell (id=language_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 42, column 101
    function value_5 () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor {
      return accessor
    }
    
    // 'value' attribute on CheckBoxCell (id=chkbox_Cell) at CommandDefinitionParameterLocalizationsPopup.pcf: line 47, column 44
    function value_7 () : java.lang.Boolean {
      return accessor.UseDefault
    }
    
    property get accessor () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor {
      return getIteratedValue(1) as gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor
    }
    
    
  }
  
  
}