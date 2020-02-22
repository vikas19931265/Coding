package com.guidewire.ab.external.entity;

/**
 * Upgrade history.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeInstance extends com.guidewire.ab.external.entity.TimedUpgraderObject, external.gw.api.profiler.ProfilerDataSource, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DBMSDumps")
  public com.guidewire.ab.external.entity.UpgradeVTDBMSDump[] getDBMSDumps();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DBMSDumps")
  public void setDBMSDumps(com.guidewire.ab.external.entity.UpgradeVTDBMSDump[] value);


  /**
   * Whether we completed the deferred upgrade tasks
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefdTasksCompleted")
  public java.lang.Boolean isDefdTasksCompleted();

  /**
   * Whether we completed the deferred upgrade tasks
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DefdTasksCompleted")
  public void setDefdTasksCompleted(java.lang.Boolean value);


  /**
   * Returns boolean representing whether AWR informatin should be downloaded for this upgrade instance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DownloadAWR")
  public boolean isDownloadAWR();

  /**
   * Returns boolean representing whether AWR informatin should be downloaded for this upgrade instance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DownloadAWR")
  public void setDownloadAWR(boolean value);


  /**
   * Timestamp when the timing completed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * Timestamp when the timing completed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * Execution duration in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecDuration")
  public java.lang.Integer getExecDuration();

  /**
   * Execution duration in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecDuration")
  public void setExecDuration(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Raw Profiler data
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ProfilerData")
  public external.gw.lang.Blob getProfilerData();

  /**
   * Raw Profiler data
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ProfilerData")
  public void setProfilerData(external.gw.lang.Blob value);


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
   * Application major version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceAppMajorVersion")
  public java.lang.Integer getSourceAppMajorVersion();

  /**
   * Application major version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceAppMajorVersion")
  public void setSourceAppMajorVersion(java.lang.Integer value);


  /**
   * Application minor version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceAppMinorVersion")
  public java.lang.Integer getSourceAppMinorVersion();

  /**
   * Application minor version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceAppMinorVersion")
  public void setSourceAppMinorVersion(java.lang.Integer value);


  /**
   * Extension version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceExtensionsVersion")
  public java.lang.Integer getSourceExtensionsVersion();

  /**
   * Extension version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourceExtensionsVersion")
  public void setSourceExtensionsVersion(java.lang.Integer value);


  /**
   * Platform major version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourcePlMajorVersion")
  public java.lang.Integer getSourcePlMajorVersion();

  /**
   * Platform major version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourcePlMajorVersion")
  public void setSourcePlMajorVersion(java.lang.Integer value);


  /**
   * Platform minor version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourcePlMinorVersion")
  public java.lang.Integer getSourcePlMinorVersion();

  /**
   * Platform minor version of source
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourcePlMinorVersion")
  public void setSourcePlMinorVersion(java.lang.Integer value);


  /**
   * The source version as a pretty string
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourceVersionString")
  public java.lang.String getSourceVersionString();


  /**
   * Timestamp when the timing began NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Timestamp when the timing began NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Application major version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetAppMajorVersion")
  public java.lang.Integer getTargetAppMajorVersion();

  /**
   * Application major version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetAppMajorVersion")
  public void setTargetAppMajorVersion(java.lang.Integer value);


  /**
   * Application minor version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetAppMinorVersion")
  public java.lang.Integer getTargetAppMinorVersion();

  /**
   * Application minor version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetAppMinorVersion")
  public void setTargetAppMinorVersion(java.lang.Integer value);


  /**
   * Extension version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetExtensionsVersion")
  public java.lang.Integer getTargetExtensionsVersion();

  /**
   * Extension version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetExtensionsVersion")
  public void setTargetExtensionsVersion(java.lang.Integer value);


  /**
   * Platform major version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetPlMajorVersion")
  public java.lang.Integer getTargetPlMajorVersion();

  /**
   * Platform major version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetPlMajorVersion")
  public void setTargetPlMajorVersion(java.lang.Integer value);


  /**
   * Platform minor version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetPlMinorVersion")
  public java.lang.Integer getTargetPlMinorVersion();

  /**
   * Platform minor version of target NOTE: when inserting a UpgradeInstance this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetPlMinorVersion")
  public void setTargetPlMinorVersion(java.lang.Integer value);


  /**
   * The target version as a pretty string
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetVersionString")
  public java.lang.String getTargetVersionString();


  /**
   * Whether we updated statistics as part of this upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateStatistics")
  public java.lang.Boolean isUpdateStatistics();

  /**
   * Whether we updated statistics as part of this upgrade
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateStatistics")
  public void setUpdateStatistics(java.lang.Boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeDBStorageSets")
  public com.guidewire.ab.external.entity.UpgradeDBStorageSet[] getUpgradeDBStorageSets();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeDBStorageSets")
  public void setUpgradeDBStorageSets(com.guidewire.ab.external.entity.UpgradeDBStorageSet[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeRowCounts")
  public com.guidewire.ab.external.entity.UpgradeRowCount[] getUpgradeRowCounts();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeRowCounts")
  public void setUpgradeRowCounts(com.guidewire.ab.external.entity.UpgradeRowCount[] value);


  /**
   * Returns DatabaseParameterSets holding the UpgradeStorageSet comparisons for this UpgradeInstance in
time order
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeStorageComparisons")
  public external.gw.api.database.DatabaseParameterSet[] getUpgradeStorageComparisons();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeTableRegistries")
  public com.guidewire.ab.external.entity.UpgradeTableRegistry[] getUpgradeTableRegistries();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeTableRegistries")
  public void setUpgradeTableRegistries(com.guidewire.ab.external.entity.UpgradeTableRegistry[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDBMSDumps")
  public void addToDBMSDumps(com.guidewire.ab.external.entity.UpgradeVTDBMSDump element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUpgradeDBStorageSets")
  public void addToUpgradeDBStorageSets(com.guidewire.ab.external.entity.UpgradeDBStorageSet element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUpgradeRowCounts")
  public void addToUpgradeRowCounts(com.guidewire.ab.external.entity.UpgradeRowCount element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUpgradeTableRegistries")
  public void addToUpgradeTableRegistries(com.guidewire.ab.external.entity.UpgradeTableRegistry element);

  /**
   * Delete all children of this key diretly with DELETE statements.  The child
beans of this bean cannot be cached.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "deleteAllChildren")
  public void deleteAllChildren();

  /**
   * Returns all UpgradeDBStorageSet beans for the selected UpgradeInstance
   *
   * @return QueryProcessor of type UpgradeDBStorageSet
   * @param afterUpgrade 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findUpgradeDBStorageSets")
  public external.gw.api.database.IQueryBeanResult findUpgradeDBStorageSets(boolean afterUpgrade);

  /**
   * Returns all UpgradeRowCount beans for the selected UpgradeInstance in
time order
   *
   * @return QueryProcessor of type UpgradeRowCount
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findUpgradeRowCounts")
  public external.gw.api.database.IQueryBeanResult findUpgradeRowCounts();

  /**
   * Returns all UpgradeTableRegistry beans for the selected UpgradeInstance in
time order
   *
   * @return QueryProcessor of type UpgradeTableRegistry
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findUpgradeTableRegistries")
  public external.gw.api.database.IQueryBeanResult findUpgradeTableRegistries();

  /**
   * 
   *
   * @return true if this object has at least one child bean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasChild")
  public boolean hasChild();

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeVTDBMSDump from the DBMSDumps array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDBMSDumps")
  public void removeFromDBMSDumps(com.guidewire.ab.external.entity.UpgradeVTDBMSDump element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeVTDBMSDump having id elementID from the DBMSDumps array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDBMSDumps")
  public void removeFromDBMSDumps(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeDBStorageSet from the UpgradeDBStorageSets array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeDBStorageSets")
  public void removeFromUpgradeDBStorageSets(com.guidewire.ab.external.entity.UpgradeDBStorageSet element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeDBStorageSet having id elementID from the UpgradeDBStorageSets array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeDBStorageSets")
  public void removeFromUpgradeDBStorageSets(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeRowCount from the UpgradeRowCounts array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeRowCounts")
  public void removeFromUpgradeRowCounts(com.guidewire.ab.external.entity.UpgradeRowCount element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeRowCount having id elementID from the UpgradeRowCounts array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeRowCounts")
  public void removeFromUpgradeRowCounts(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeTableRegistry from the UpgradeTableRegistries array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeTableRegistries")
  public void removeFromUpgradeTableRegistries(com.guidewire.ab.external.entity.UpgradeTableRegistry element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpgradeTableRegistry having id elementID from the UpgradeTableRegistries array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpgradeTableRegistries")
  public void removeFromUpgradeTableRegistries(gw.pl.external.entity.Key elementID);

  /**
   * Sets boolean flag indicating whether AWR information should be downloaded for this upgrade instance
   *
   * @param downloadAWR boolean value indicating whether AWR information should be downloaded
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDownloadAWR")
  public void setDownloadAWR_Method(boolean downloadAWR);


  /**
   * Utility class for initializing an instance of UpgradeInstance
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeInstance.
     */
    public static UpgradeInstance newInstance()
    {
      return (UpgradeInstance) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeInstance.class);
    }
  }

}
