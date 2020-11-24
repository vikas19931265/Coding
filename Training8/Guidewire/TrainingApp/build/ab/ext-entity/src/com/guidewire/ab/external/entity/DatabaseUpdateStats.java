package com.guidewire.ab.external.entity;

/**
 * Stores update statistics info in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DatabaseUpdateStats extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Description. NOTE: when inserting a DatabaseUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a DatabaseUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * End time of update statistics process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * End time of update statistics process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Extensions Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExtensionsSchemaVersion")
  public java.lang.Integer getExtensionsSchemaVersion();

  /**
   * Extensions Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExtensionsSchemaVersion")
  public void setExtensionsSchemaVersion(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Whether update is incremental.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Incremental")
  public java.lang.Boolean isIncremental();

  /**
   * Whether update is incremental.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Incremental")
  public void setIncremental(java.lang.Boolean value);


  /**
   * incremental threshold percent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncrementalThresholdPercent")
  public java.lang.Integer getIncrementalThresholdPercent();

  /**
   * incremental threshold percent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IncrementalThresholdPercent")
  public void setIncrementalThresholdPercent(java.lang.Integer value);


  /**
   * Major Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MajorSchemaVersion")
  public java.lang.Integer getMajorSchemaVersion();

  /**
   * Major Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MajorSchemaVersion")
  public void setMajorSchemaVersion(java.lang.Integer value);


  /**
   * Minor Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinorSchemaVersion")
  public java.lang.Integer getMinorSchemaVersion();

  /**
   * Minor Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinorSchemaVersion")
  public void setMinorSchemaVersion(java.lang.Integer value);


  /**
   * Platform Major Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlatformMajorSchemaVersion")
  public java.lang.Integer getPlatformMajorSchemaVersion();

  /**
   * Platform Major Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PlatformMajorSchemaVersion")
  public void setPlatformMajorSchemaVersion(java.lang.Integer value);


  /**
   * Platform Minor Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlatformMinorSchemaVersion")
  public java.lang.Integer getPlatformMinorSchemaVersion();

  /**
   * Platform Minor Schema Version at time of collection 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PlatformMinorSchemaVersion")
  public void setPlatformMinorSchemaVersion(java.lang.Integer value);


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
   * Type of process running the operation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RunnerType")
  public com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType getRunnerType();

  /**
   * Type of process running the operation.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RunnerType")
  public void setRunnerType(com.guidewire.ab.external.typelist.DBUpdateStatsRunnerType value);


  /**
   * Start time of update statistics process. NOTE: when inserting a DatabaseUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Start time of update statistics process. NOTE: when inserting a DatabaseUpdateStats this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Collection of TableUpdateStats linked to this DatabaseUpdateStats.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableUpdateStats")
  public com.guidewire.ab.external.entity.TableUpdateStats[] getTableUpdateStats();

  /**
   * Collection of TableUpdateStats linked to this DatabaseUpdateStats.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableUpdateStats")
  public void setTableUpdateStats(com.guidewire.ab.external.entity.TableUpdateStats[] value);


  /**
   * Query used to determine if threshold exceeded.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateStatisticsSQL")
  public java.lang.String getUpdateStatisticsSQL();

  /**
   * Query used to determine if threshold exceeded.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateStatisticsSQL")
  public void setUpdateStatisticsSQL(java.lang.String value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTableUpdateStats")
  public void addToTableUpdateStats(com.guidewire.ab.external.entity.TableUpdateStats element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TableUpdateStats from the TableUpdateStats array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTableUpdateStats")
  public void removeFromTableUpdateStats(com.guidewire.ab.external.entity.TableUpdateStats element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TableUpdateStats having id elementID from the TableUpdateStats array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTableUpdateStats")
  public void removeFromTableUpdateStats(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of DatabaseUpdateStats
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DatabaseUpdateStats.
     */
    public static DatabaseUpdateStats newInstance()
    {
      return (DatabaseUpdateStats) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DatabaseUpdateStats.class);
    }
  }

}
