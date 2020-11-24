package com.guidewire.ab.external.entity;

/**
 * Stores update statistics info for each table in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TableUpdateStats extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * DatabaseUpdateStats for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DatabaseUpdateStats")
  public com.guidewire.ab.external.entity.DatabaseUpdateStats getDatabaseUpdateStats();

  /**
   * DatabaseUpdateStats for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DatabaseUpdateStats")
  public void setDatabaseUpdateStats(com.guidewire.ab.external.entity.DatabaseUpdateStats value);


  /**
   * End time of update statistics process for this table. NOTE: when inserting a TableUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * End time of update statistics process for this table. NOTE: when inserting a TableUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Histogram")
  public com.guidewire.ab.external.entity.TableUpdateStatsStatement[] getHistogram();


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Index")
  public com.guidewire.ab.external.entity.TableUpdateStatsStatement[] getIndex();


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
   * Start time of update statistics process for this table. NOTE: when inserting a TableUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Start time of update statistics process for this table. NOTE: when inserting a TableUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Table")
  public com.guidewire.ab.external.entity.TableUpdateStatsStatement[] getTable();


  /**
   * Name of table. NOTE: when inserting a TableUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Name of table. NOTE: when inserting a TableUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Collection of TableUpdateStatsStatements linked to this TableUpdateStats.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableUpdateStatsStatements")
  public com.guidewire.ab.external.entity.TableUpdateStatsStatement[] getTableUpdateStatsStatements();

  /**
   * Collection of TableUpdateStatsStatements linked to this TableUpdateStats.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableUpdateStatsStatements")
  public void setTableUpdateStatsStatements(com.guidewire.ab.external.entity.TableUpdateStatsStatement[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTableUpdateStatsStatements")
  public void addToTableUpdateStatsStatements(com.guidewire.ab.external.entity.TableUpdateStatsStatement element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TableUpdateStatsStatement from the TableUpdateStatsStatements array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTableUpdateStatsStatements")
  public void removeFromTableUpdateStatsStatements(com.guidewire.ab.external.entity.TableUpdateStatsStatement element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TableUpdateStatsStatement having id elementID from the TableUpdateStatsStatements array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTableUpdateStatsStatements")
  public void removeFromTableUpdateStatsStatements(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of TableUpdateStats
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity TableUpdateStats.
     */
    public static TableUpdateStats newInstance()
    {
      return (TableUpdateStats) gw.pl.external.entity.EntityFactory.getInstance().newEntity(TableUpdateStats.class);
    }
  }

}
