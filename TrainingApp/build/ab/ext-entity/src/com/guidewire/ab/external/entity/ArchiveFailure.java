package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ArchiveFailure extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Short version of the reason for a failure to archive NOTE: when inserting a ArchiveFailure this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArchiveFailure")
  public java.lang.String getArchiveFailure();

  /**
   * Short version of the reason for a failure to archive NOTE: when inserting a ArchiveFailure this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArchiveFailure")
  public void setArchiveFailure(java.lang.String value);


  /**
   * The number of failures with this error
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FailureCount")
  public int getFailureCount();


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
   * Resets all root infos with this failure, i.e. they are no longer excluded from archive
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearFailures")
  public void clearFailures();

  /**
   * 
   *
   * @return A query for the root infos with the failure
   * @param maxToFetch Maximum items to return. Use 0 for unlimited
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFirstRootInfosWithFailure")
  public java.util.List getFirstRootInfosWithFailure(int maxToFetch);


  /**
   * Utility class for initializing an instance of ArchiveFailure
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ArchiveFailure.
     */
    public static ArchiveFailure newInstance()
    {
      return (ArchiveFailure) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ArchiveFailure.class);
    }
  }

}
