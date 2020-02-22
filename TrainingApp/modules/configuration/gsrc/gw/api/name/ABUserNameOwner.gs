package gw.api.name
uses java.util.Set

/**
 * For use with the Name PCFs and NameFormatter for both Person and non-Person contacts.
 */
@Export
class ABUserNameOwner extends NameOwnerBase {
  
  construct (fields : PersonNameFields) {
    PersonName = fields
  }

  override property get RequiredFields() : Set<NameOwnerFieldId> {
    return NameOwnerFieldId.REQUIRED_NAME_FIELDS.union(NameOwnerFieldId.FIRST_LAST_FIELDS).freeze()
  }

  override property get HiddenFields() : Set<NameOwnerFieldId> {
    return NameOwnerFieldId.NO_FIELDS
  }
  
  override function isHideIfReadOnly(fieldId : NameOwnerFieldId) : boolean {
    return false
  }

}
