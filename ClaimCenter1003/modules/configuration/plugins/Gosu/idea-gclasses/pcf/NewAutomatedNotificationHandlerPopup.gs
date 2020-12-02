package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/specialhandling/NewAutomatedNotificationHandlerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewAutomatedNotificationHandlerPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (specialHandling :  SpecialHandling, handlerSubtype :  gw.entity.IEntityType) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.NewAutomatedNotificationHandlerPopup, {specialHandling, handlerSubtype}, 0)
  }
  
  static function push (specialHandling :  SpecialHandling, handlerSubtype :  gw.entity.IEntityType) : pcf.api.Location {
    return __newDestinationForLocation(pcf.NewAutomatedNotificationHandlerPopup, {specialHandling, handlerSubtype}, 0).push()
  }
  
  
}