package com.guidewire.ab.external.entity;

/**
 * Timed loader integrity checks.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadIntegrityCheck extends com.guidewire.ab.external.entity.OrdereddLoaderObject, com.guidewire.ab.external.entity.TimedLoaderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Description of integrity check. NOTE: when inserting a LoadIntegrityCheck this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of integrity check. NOTE: when inserting a LoadIntegrityCheck this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Get the duration in milliseconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Duration")
  public java.lang.Integer getDuration();


  /**
   * Timestamp when the timing completed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * Timestamp when the timing completed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Order of execution (1-N). NOTE: when inserting a LoadIntegrityCheck this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionOrder")
  public java.lang.Integer getExecutionOrder();

  /**
   * Order of execution (1-N). NOTE: when inserting a LoadIntegrityCheck this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecutionOrder")
  public void setExecutionOrder(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Denorm FK for unique index.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommand")
  public com.guidewire.ab.external.entity.LoadCommand getLoadCommand();

  /**
   * Denorm FK for unique index.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadCommand")
  public void setLoadCommand(com.guidewire.ab.external.entity.LoadCommand value);


  /**
   * Type of loader integrity check. NOTE: when inserting a LoadIntegrityCheck this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadIntegrityCheckType")
  public com.guidewire.ab.external.typelist.LoadErrorType getLoadIntegrityCheckType();

  /**
   * Type of loader integrity check. NOTE: when inserting a LoadIntegrityCheck this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadIntegrityCheckType")
  public void setLoadIntegrityCheckType(com.guidewire.ab.external.typelist.LoadErrorType value);


  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadOperation")
  public com.guidewire.ab.external.entity.LoadOperation getLoadOperation();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadOperation")
  public void setLoadOperation(com.guidewire.ab.external.entity.LoadOperation value);


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
   * Query from integrity check.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Query")
  public java.lang.String getQuery();

  /**
   * Query from integrity check.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Query")
  public void setQuery(java.lang.String value);


  /**
   * Get the name of the associated staging table
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StagingTableName")
  public java.lang.String getStagingTableName();


  /**
   * Timestamp when the timing began.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Timestamp when the timing began.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Utility class for initializing an instance of LoadIntegrityCheck
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadIntegrityCheck.
     */
    public static LoadIntegrityCheck newInstance()
    {
      return (LoadIntegrityCheck) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadIntegrityCheck.class);
    }
  }

}
