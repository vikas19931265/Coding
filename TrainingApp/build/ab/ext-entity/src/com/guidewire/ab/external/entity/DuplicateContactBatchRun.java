package com.guidewire.ab.external.entity;

/**
 * Represents a duplicate contact search batch process run.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DuplicateContactBatchRun extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Date the batch process last ran. NOTE: when inserting a DuplicateContactBatchRun this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastRunTime")
  public java.util.Date getLastRunTime();

  /**
   * Date the batch process last ran. NOTE: when inserting a DuplicateContactBatchRun this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LastRunTime")
  public void setLastRunTime(java.util.Date value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


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
   * Utility class for initializing an instance of DuplicateContactBatchRun
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DuplicateContactBatchRun.
     */
    public static DuplicateContactBatchRun newInstance()
    {
      return (DuplicateContactBatchRun) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DuplicateContactBatchRun.class);
    }
  }

}
