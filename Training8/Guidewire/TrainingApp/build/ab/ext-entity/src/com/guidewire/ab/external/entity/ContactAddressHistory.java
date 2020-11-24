package com.guidewire.ab.external.entity;

/**
 * Contact-associated Address-specific history events
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactAddressHistory extends com.guidewire.ab.external.entity.ContactHistory
{


  /**
   * The related contact-associated address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactAddress")
  public com.guidewire.ab.external.entity.Address getContactAddress();

  /**
   * The related contact-associated address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactAddress")
  public void setContactAddress(com.guidewire.ab.external.entity.Address value);

  /**
   * Convenience method for populating base fields on ContactHistory.
Fields populated: Address, ABContact, CustomType, Description, EventTimestamp, and User (defaulted to current user).
   *
   * @param address address of this history
   * @param type CustomType of this history
   * @param description Description of this history
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateBaseFields")
  public void populateBaseFields(com.guidewire.ab.external.entity.Address address, com.guidewire.ab.external.typelist.CustomHistoryType type, java.lang.String description);

  /**
   * Convenience method for populating base fields on ContactHistory.
Fields populated: Address, CustomType, Description, EventTimestamp, and User.
   *
   * @param address address of this history
   * @param type CustomType of this history
   * @param description Description of this history
   * @param user User associated with this history
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateBaseFields")
  public void populateBaseFields(com.guidewire.ab.external.entity.Address address, com.guidewire.ab.external.typelist.CustomHistoryType type, java.lang.String description, com.guidewire.ab.external.entity.User user);


  /**
   * Utility class for initializing an instance of ContactAddressHistory
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactAddressHistory.
     */
    public static ContactAddressHistory newInstance()
    {
      return (ContactAddressHistory) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactAddressHistory.class);
    }
  }

}
