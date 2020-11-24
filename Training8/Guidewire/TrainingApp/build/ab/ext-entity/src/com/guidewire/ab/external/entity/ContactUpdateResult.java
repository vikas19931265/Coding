package com.guidewire.ab.external.entity;

/**
 * 
      ContactUpdateResult has been deprecated as of ClaimCenter 8.0 along with IAddressBookAdapter..
      ContactUpdateResult represents the result of creating or updating a Contact. This operation can
      either succeed or fail. If it failed, then errors will be accessible via getValidationResult. If it succeeded,
      then there should be no errors in the ValidationResult, and the created or updated Contact will be accessible
      via getContact.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactUpdateResult extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Gets the Contact that was created or updated. Ignored if errors occurred.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.Contact getContact();

  /**
   * Gets the Contact that was created or updated. Ignored if errors occurred.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.Contact value);


  /**
   * Used to report any errors that occurred during creation or update. May be null to report no errors.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactValidationResult")
  public com.guidewire.ab.external.entity.ValidationResult getContactValidationResult();

  /**
   * Used to report any errors that occurred during creation or update. May be null to report no errors.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactValidationResult")
  public void setContactValidationResult(com.guidewire.ab.external.entity.ValidationResult value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * The address book's mapping of the given temp ids to permanent ids
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TempToPermEntrys")
  public com.guidewire.ab.external.entity.TempToPermEntry[] getTempToPermEntrys();

  /**
   * The address book's mapping of the given temp ids to permanent ids
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TempToPermEntrys")
  public void setTempToPermEntrys(com.guidewire.ab.external.entity.TempToPermEntry[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTempToPermEntrys")
  public void addToTempToPermEntrys(com.guidewire.ab.external.entity.TempToPermEntry element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TempToPermEntry from the TempToPermEntrys array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTempToPermEntrys")
  public void removeFromTempToPermEntrys(com.guidewire.ab.external.entity.TempToPermEntry element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TempToPermEntry having id elementID from the TempToPermEntrys array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTempToPermEntrys")
  public void removeFromTempToPermEntrys(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of ContactUpdateResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactUpdateResult.
     */
    public static ContactUpdateResult newInstance()
    {
      return (ContactUpdateResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactUpdateResult.class);
    }
  }

}
