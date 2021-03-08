package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/CommandDefinitionParameterLocalizationsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CommandDefinitionParameterLocalizationsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (title :  String, accessors :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[], startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CommandDefinitionParameterLocalizationsPopup, {title, accessors, startInEditMode}, 0)
  }
  
  static function push (title :  String, accessors :  gw.bizrules.ruleaction.generateactivity.DynamicLocalizedPropertyAccessor[], startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.CommandDefinitionParameterLocalizationsPopup, {title, accessors, startInEditMode}, 0).push()
  }
  
  
}