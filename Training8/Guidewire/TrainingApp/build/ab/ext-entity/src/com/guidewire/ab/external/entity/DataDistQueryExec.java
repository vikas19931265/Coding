package com.guidewire.ab.external.entity;

/**
 * Stores instrumented queries from data distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DataDistQueryExec extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * DatabaseDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatabaseDataDist")
  public com.guidewire.ab.external.entity.DatabaseDataDist getDatabaseDataDist();

  /**
   * DatabaseDataDist for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DatabaseDataDist")
  public void setDatabaseDataDist(com.guidewire.ab.external.entity.DatabaseDataDist value);


  /**
   * Description. NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Elapsed time in seconds NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Duration")
  public java.math.BigDecimal getDuration();

  /**
   * Elapsed time in seconds NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Duration")
  public void setDuration(java.math.BigDecimal value);


  /**
   * End time of query execution.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * End time of query execution.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Fingerprint of query, if query-based
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Fingerprint")
  public java.lang.String getFingerprint();

  /**
   * Fingerprint of query, if query-based
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Fingerprint")
  public void setFingerprint(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * # of rows returned by query
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumRows")
  public java.lang.Integer getNumRows();

  /**
   * # of rows returned by query
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumRows")
  public void setNumRows(java.lang.Integer value);


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
   * Query. NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryText")
  public java.lang.String getQueryText();

  /**
   * Query. NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "QueryText")
  public void setQueryText(java.lang.String value);


  /**
   * Start time of query execution. NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Start time of query execution. NOTE: when inserting a DataDistQueryExec this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Table name for query, if query-based
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Table name for query, if query-based
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Thread name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThreadName")
  public java.lang.String getThreadName();

  /**
   * Thread name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ThreadName")
  public void setThreadName(java.lang.String value);


  /**
   * Utility class for initializing an instance of DataDistQueryExec
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DataDistQueryExec.
     */
    public static DataDistQueryExec newInstance()
    {
      return (DataDistQueryExec) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DataDistQueryExec.class);
    }
  }

}
