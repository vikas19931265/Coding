package com.guidewire.ab.external.entity;

/**
 * Stores consistency checker info in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DBConsistCheckRun extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * All query executions for this run.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllQueryExecs")
  public java.util.List getAllQueryExecs();


  /**
   * Collection of DBConsistCheckQueryExecs linked to this DBConsistCheckExec.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DBConsistCheckQueryExecs")
  public com.guidewire.ab.external.entity.DBConsistCheckQueryExec[] getDBConsistCheckQueryExecs();

  /**
   * Collection of DBConsistCheckQueryExecs linked to this DBConsistCheckExec.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DBConsistCheckQueryExecs")
  public void setDBConsistCheckQueryExecs(com.guidewire.ab.external.entity.DBConsistCheckQueryExec[] value);


  /**
   * Description. NOTE: when inserting a DBConsistCheckRun this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a DBConsistCheckRun this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Elapsed time in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Duration")
  public java.math.BigDecimal getDuration();

  /**
   * Elapsed time in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Duration")
  public void setDuration(java.math.BigDecimal value);


  /**
   * End time of consistency check process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * End time of consistency check process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Extensions version number at time of check
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExtensionsSchemaVersion")
  public java.lang.Integer getExtensionsSchemaVersion();

  /**
   * Extensions version number at time of check
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
   * Major Schema Version at time of check 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MajorSchemaVersion")
  public java.lang.Integer getMajorSchemaVersion();

  /**
   * Major Schema Version at time of check 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MajorSchemaVersion")
  public void setMajorSchemaVersion(java.lang.Integer value);


  /**
   * Minor Schema Version at time of check 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinorSchemaVersion")
  public java.lang.Integer getMinorSchemaVersion();

  /**
   * Minor Schema Version at time of check 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinorSchemaVersion")
  public void setMinorSchemaVersion(java.lang.Integer value);


  /**
   * Count of all consistency checks in this run
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumAllExec")
  public int getNumAllExec();


  /**
   * Count of consistency checks with errors in this run
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumErrorExecs")
  public int getNumErrorExecs();


  /**
   * Count of consistency checks in the run that have finished.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumExecsFinished")
  public int getNumExecsFinished();


  /**
   * Count of consistency checks in the run that have started but not finished.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumExecsInProgress")
  public int getNumExecsInProgress();


  /**
   * Count of consistency checks in the run that have not yet started.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumExecsNotStarted")
  public int getNumExecsNotStarted();


  /**
   * Platform Major Schema Version at time of check 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlatformMajorSchemaVersion")
  public java.lang.Integer getPlatformMajorSchemaVersion();

  /**
   * Platform Major Schema Version at time of check 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PlatformMajorSchemaVersion")
  public void setPlatformMajorSchemaVersion(java.lang.Integer value);


  /**
   * Platform Minor Schema Version at time of check 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlatformMinorSchemaVersion")
  public java.lang.Integer getPlatformMinorSchemaVersion();

  /**
   * Platform Minor Schema Version at time of check 
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
   * All query executions that returned error rows
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QueryExecsWithErrors")
  public java.util.List getQueryExecsWithErrors();


  /**
   * Start time of consistency check process. NOTE: when inserting a DBConsistCheckRun this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Start time of consistency check process. NOTE: when inserting a DBConsistCheckRun this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Total number of checks in this run
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalNumChecks")
  public java.lang.Integer getTotalNumChecks();

  /**
   * Total number of checks in this run
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalNumChecks")
  public void setTotalNumChecks(java.lang.Integer value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDBConsistCheckQueryExecs")
  public void addToDBConsistCheckQueryExecs(com.guidewire.ab.external.entity.DBConsistCheckQueryExec element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DBConsistCheckQueryExec from the DBConsistCheckQueryExecs array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDBConsistCheckQueryExecs")
  public void removeFromDBConsistCheckQueryExecs(com.guidewire.ab.external.entity.DBConsistCheckQueryExec element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DBConsistCheckQueryExec having id elementID from the DBConsistCheckQueryExecs array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDBConsistCheckQueryExecs")
  public void removeFromDBConsistCheckQueryExecs(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of DBConsistCheckRun
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DBConsistCheckRun.
     */
    public static DBConsistCheckRun newInstance()
    {
      return (DBConsistCheckRun) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DBConsistCheckRun.class);
    }
  }

}
