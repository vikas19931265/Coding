package com.guidewire.ab.external.entity;

/**
 * Temporary table for linking new addresses to their contacts.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TmpContactAddressLink extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


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
   * Address to which this entry's contact links. NOTE: when inserting a TmpContactAddressLink this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TempAddressID")
  public java.lang.Long getTempAddressID();

  /**
   * Address to which this entry's contact links. NOTE: when inserting a TmpContactAddressLink this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TempAddressID")
  public void setTempAddressID(java.lang.Long value);


  /**
   * Utility class for initializing an instance of TmpContactAddressLink
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TmpContactAddressLink.
     */
    public static TmpContactAddressLink newInstance()
    {
      return (TmpContactAddressLink) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TmpContactAddressLink.class);
    }
  }

}
