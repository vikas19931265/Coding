package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LocalizedCommandDefinitionParameterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LocalizedCommandDefinitionParameterInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LocalizedCommandDefinitionParameterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocalizedCommandDefinitionParameterInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=setToDefaultValue) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function action_3 () : void {
      baseAccessor.Value = baseAccessor.DefaultValue
    }
    
    // 'available' attribute on MenuItem (id=setToDefaultValue) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function available_2 () : java.lang.Boolean {
      return !baseAccessor.UseDefault
    }
    
    // 'value' attribute on TextInput (id=soleLocale_Input) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      baseAccessor.Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at LocalizedCommandDefinitionParameterInputSet.pcf: line 18, column 90
    function initialValue_0 () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[] {
      return state.localizedPropertyAccessors(defaultLocaleCommandParameter)
    }
    
    // 'initialValue' attribute on Variable at LocalizedCommandDefinitionParameterInputSet.pcf: line 23, column 88
    function initialValue_1 () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor {
      return accessors.first()
    }
    
    // 'label' attribute on TextInput (id=soleLocale_Input) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function label_5 () : java.lang.Object {
      return baseAccessor.Label
    }
    
    // 'required' attribute on TextInput (id=soleLocale_Input) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function required_6 () : java.lang.Boolean {
      return baseAccessor.Required
    }
    
    // 'value' attribute on TextInput (id=soleLocale_Input) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function valueRoot_9 () : java.lang.Object {
      return baseAccessor
    }
    
    // 'value' attribute on TextInput (id=soleLocale_Input) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function value_7 () : java.lang.String {
      return baseAccessor.Value
    }
    
    // 'visible' attribute on InputSet (id=LocalizedCommandDefinitionParameterInputSet) at LocalizedCommandDefinitionParameterInputSet.pcf: line 7, column 45
    function visible_23 () : java.lang.Boolean {
      return state.ActivityPatternSelected
    }
    
    // 'visible' attribute on TextInput (id=soleLocale_Input) at LocalizedCommandDefinitionParameterInputSet.pcf: line 32, column 39
    function visible_4 () : java.lang.Boolean {
      return accessors.length == 1
    }
    
    property get accessors () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[] {
      return getVariableValue("accessors", 0) as gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[]
    }
    
    property set accessors ($arg :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[]) {
      setVariableValue("accessors", 0, $arg)
    }
    
    property get baseAccessor () : gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor {
      return getVariableValue("baseAccessor", 0) as gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor
    }
    
    property set baseAccessor ($arg :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor) {
      setVariableValue("baseAccessor", 0, $arg)
    }
    
    property get defaultLocaleCommandParameter () : gw.bizrules.ruleaction.config.CCLocalizedCommandParameterDefinition {
      return getRequireValue("defaultLocaleCommandParameter", 0) as gw.bizrules.ruleaction.config.CCLocalizedCommandParameterDefinition
    }
    
    property set defaultLocaleCommandParameter ($arg :  gw.bizrules.ruleaction.config.CCLocalizedCommandParameterDefinition) {
      setRequireValue("defaultLocaleCommandParameter", 0, $arg)
    }
    
    property get state () : gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState {
      return getRequireValue("state", 0) as gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState
    }
    
    property set state ($arg :  gw.bizrules.ruleaction.generateactivity.GenerateActivityCommandDefinitionState) {
      setRequireValue("state", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LocalizedCommandDefinitionParameterInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class multipleLocalesExpressionsImpl extends LocalizedCommandDefinitionParameterInputSetExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=localesPopup) at LocalizedCommandDefinitionParameterInputSet.pcf: line 65, column 142
    function action_16 () : void {
      CommandDefinitionParameterLocalizationsPopup.push(baseAccessor.Label, state.localizedPropertyAccessors(defaultLocaleCommandParameter), CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on Link (id=localesPopup) at LocalizedCommandDefinitionParameterInputSet.pcf: line 65, column 142
    function action_dest_17 () : pcf.api.Destination {
      return pcf.CommandDefinitionParameterLocalizationsPopup.createDestination(baseAccessor.Label, state.localizedPropertyAccessors(defaultLocaleCommandParameter), CurrentLocation.InEditMode)
    }
    
    // 'initialValue' attribute on Variable at LocalizedCommandDefinitionParameterInputSet.pcf: line 48, column 24
    function initialValue_13 () : String {
      return java.util.stream.Stream.of(accessors).filter(\prop -> !prop.UseDefault).map(\prop -> prop.Language.DisplayName).collect(java.util.stream.Collectors.joining(", "))
    }
    
    // 'initialValue' attribute on Variable at LocalizedCommandDefinitionParameterInputSet.pcf: line 53, column 24
    function initialValue_14 () : String {
      return overrides.HasContent ? DisplayKey.get("BizRules.RuleDetailsPage.OverridesExist", overrides) : DisplayKey.get("BizRules.RuleDetailsPage.NoOverridesExist")
    }
    
    // 'label' attribute on Link (id=currentLocale) at LocalizedCommandDefinitionParameterInputSet.pcf: line 58, column 39
    function label_15 () : java.lang.Object {
      return baseAccessor.Value
    }
    
    // 'label' attribute on ContentInput at LocalizedCommandDefinitionParameterInputSet.pcf: line 55, column 36
    function label_19 () : java.lang.Object {
      return baseAccessor.Label
    }
    
    // 'tooltip' attribute on Link (id=localesPopup) at LocalizedCommandDefinitionParameterInputSet.pcf: line 65, column 142
    function tooltip_18 () : java.lang.String {
      return DisplayKey.get("Web.BizRules.Rule.Parameters.Localized.Tooltip", gw.api.util.LocaleUtil.CurrentLanguageLabel)
    }
    
    // 'value' attribute on TextInput (id=overridesMessage_Input) at LocalizedCommandDefinitionParameterInputSet.pcf: line 70, column 35
    function value_20 () : java.lang.String {
      return overridesMessage
    }
    
    // 'visible' attribute on InputSet (id=multipleLocales) at LocalizedCommandDefinitionParameterInputSet.pcf: line 43, column 41
    function visible_22 () : java.lang.Boolean {
      return accessors.length > 1
    }
    
    property get overrides () : String {
      return getVariableValue("overrides", 1) as String
    }
    
    property set overrides ($arg :  String) {
      setVariableValue("overrides", 1, $arg)
    }
    
    property get overridesMessage () : String {
      return getVariableValue("overridesMessage", 1) as String
    }
    
    property set overridesMessage ($arg :  String) {
      setVariableValue("overridesMessage", 1, $arg)
    }
    
    
  }
  
  
}