package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ArchiveFailureDetails extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Full details of archive failure NOTE: when inserting a ArchiveFailureDetails this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchiveFailureDetails")
  public java.lang.String getArchiveFailureDetails();

  /**
   * Full details of archive failure NOTE: when inserting a ArchiveFailureDetails this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArchiveFailureDetails")
  public void setArchiveFailureDetails(java.lang.String value);


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
   * Utility class for initializing an instance of ArchiveFailureDetails
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ArchiveFailureDetails.
     */
    public static ArchiveFailureDetails newInstance()
    {
      return (ArchiveFailureDetails) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ArchiveFailureDetails.class);
    }
  }

}
