package com.guidewire.ab.external.entity;

/**
 * 
      After an addressbook client-application (for example, ClaimCenter) adds an entity (for example, <code>Contact</code>
      or <code>Address</code>) to the addressbook, it usually needs to link the local entity to the newly created entity
      in the addressbook by setting the <code>AddressBookUId</code> in the local entity.
      After calling <code>AddressBookPluginGateway.submitUpdates(UpdateBatch,AddressBookConvertable)</code>
      the client application can get the newly generated <code>AddressBookUId</code> from the
      <code>ContactUpdateResult.getTempToPermEntrys()</code>.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TempToPermEntry extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The ContactUpdateResult which owns this entry.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContactUpdateResult")
  public com.guidewire.ab.external.entity.ContactUpdateResult getContactUpdateResult();

  /**
   * The ContactUpdateResult which owns this entry.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ContactUpdateResult")
  public void setContactUpdateResult(com.guidewire.ab.external.entity.ContactUpdateResult value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The permanent AddressBookUId given by the address book
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PermId")
  public java.lang.String getPermId();

  /**
   * The permanent AddressBookUId given by the address book
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PermId")
  public void setPermId(java.lang.String value);


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
   * The temporary id given by an UpdateBatch CreateUpdateOp
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TempId")
  public java.lang.String getTempId();

  /**
   * The temporary id given by an UpdateBatch CreateUpdateOp
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TempId")
  public void setTempId(java.lang.String value);


  /**
   * Utility class for initializing an instance of TempToPermEntry
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TempToPermEntry.
     */
    public static TempToPermEntry newInstance()
    {
      return (TempToPermEntry) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TempToPermEntry.class);
    }
  }

}
