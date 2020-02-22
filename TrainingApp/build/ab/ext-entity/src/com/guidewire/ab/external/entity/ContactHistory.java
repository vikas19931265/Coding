package com.guidewire.ab.external.entity;

/**
 * Contact-specific history events
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactHistory extends com.guidewire.ab.external.entity.History
{


  /**
   * The related account.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * The related account.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContact")
  public void setABContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * Name of external application remotely updating the associated contact or related entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalUpdateApp")
  public java.lang.String getExternalUpdateApp();

  /**
   * Name of external application remotely updating the associated contact or related entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternalUpdateApp")
  public void setExternalUpdateApp(java.lang.String value);


  /**
   * Name of external user remotely updating the associated contact or related entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExternalUpdateUser")
  public java.lang.String getExternalUpdateUser();

  /**
   * Name of external user remotely updating the associated contact or related entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExternalUpdateUser")
  public void setExternalUpdateUser(java.lang.String value);

  /**
   * Convenience method for populating base fields on ContactHistory.
Fields populated: ABContact, CustomType, Description, EventTimestamp, and User (defaulted to current user).
   *
   * @param contact contact of this history
   * @param type CustomType of this history
   * @param description Description of this history
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateBaseFields")
  public void populateBaseFields(com.guidewire.ab.external.entity.ABContact contact, com.guidewire.ab.external.typelist.CustomHistoryType type, java.lang.String description);

  /**
   * Convenience method for populating base fields on ContactHistory.
Fields populated: ABContact, CustomType, Description, EventTimestamp, and User.
   *
   * @param contact contact of this history
   * @param type CustomType of this history
   * @param description Description of this history
   * @param user User associated with this history
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateBaseFields")
  public void populateBaseFields(com.guidewire.ab.external.entity.ABContact contact, com.guidewire.ab.external.typelist.CustomHistoryType type, java.lang.String description, com.guidewire.ab.external.entity.User user);


  /**
   * Utility class for initializing an instance of ContactHistory
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactHistory.
     */
    public static ContactHistory newInstance()
    {
      return (ContactHistory) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactHistory.class);
    }
  }

}
