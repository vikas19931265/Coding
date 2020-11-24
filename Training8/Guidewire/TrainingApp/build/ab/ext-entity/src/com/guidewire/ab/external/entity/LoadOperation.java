package com.guidewire.ab.external.entity;

/**
 * Detail of the staging table load history.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadOperation extends com.guidewire.ab.external.entity.OrdereddLoaderObject, com.guidewire.ab.external.entity.TimedLoaderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Number of rows affected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AffectedRowCount")
  public java.lang.Long getAffectedRowCount();

  /**
   * Number of rows affected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AffectedRowCount")
  public void setAffectedRowCount(java.lang.Long value);


  /**
   * Timed loader callbacks.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Callbacks")
  public com.guidewire.ab.external.entity.LoadCallback[] getCallbacks();

  /**
   * Timed loader callbacks.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Callbacks")
  public void setCallbacks(com.guidewire.ab.external.entity.LoadCallback[] value);


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
   * Number of integrity check errors detected (if applicable).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ErrorCount")
  public java.lang.Integer getErrorCount();

  /**
   * Number of integrity check errors detected (if applicable).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ErrorCount")
  public void setErrorCount(java.lang.Integer value);


  /**
   * Order of execution (1-N). NOTE: when inserting a LoadOperation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionOrder")
  public java.lang.Integer getExecutionOrder();

  /**
   * Order of execution (1-N). NOTE: when inserting a LoadOperation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecutionOrder")
  public void setExecutionOrder(java.lang.Integer value);


  /**
   * If associated with a idsgenerated step, contains the end of the id range for the rows being loaded.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HighestID")
  public java.lang.Long getHighestID();

  /**
   * If associated with a idsgenerated step, contains the end of the id range for the rows being loaded.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HighestID")
  public void setHighestID(java.lang.Long value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Timed loader insert/selects.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InsertSelects")
  public com.guidewire.ab.external.entity.LoadInsertSelect[] getInsertSelects();

  /**
   * Timed loader insert/selects.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InsertSelects")
  public void setInsertSelects(com.guidewire.ab.external.entity.LoadInsertSelect[] value);


  /**
   * Timed loader integrity checks.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntegrityChecks")
  public com.guidewire.ab.external.entity.LoadIntegrityCheck[] getIntegrityChecks();

  /**
   * Timed loader integrity checks.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IntegrityChecks")
  public void setIntegrityChecks(com.guidewire.ab.external.entity.LoadIntegrityCheck[] value);


  /**
   * Parent step.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadStep")
  public com.guidewire.ab.external.entity.LoadStep getLoadStep();

  /**
   * Parent step.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadStep")
  public void setLoadStep(com.guidewire.ab.external.entity.LoadStep value);


  /**
   * If associated with a idsgenerated step, contains the start of the id range for the rows being loaded.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LowestID")
  public java.lang.Long getLowestID();

  /**
   * If associated with a idsgenerated step, contains the start of the id range for the rows being loaded.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LowestID")
  public void setLowestID(java.lang.Long value);


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
   * Affected staging table. NOTE: when inserting a LoadOperation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Affected staging table. NOTE: when inserting a LoadOperation this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * db update statistics loader selects.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateStatisticsSelects")
  public com.guidewire.ab.external.entity.LoadUpdateStatisticsSelect[] getUpdateStatisticsSelects();

  /**
   * db update statistics loader selects.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateStatisticsSelects")
  public void setUpdateStatisticsSelects(com.guidewire.ab.external.entity.LoadUpdateStatisticsSelect[] value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCallbacks")
  public void addToCallbacks(com.guidewire.ab.external.entity.LoadCallback element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToInsertSelects")
  public void addToInsertSelects(com.guidewire.ab.external.entity.LoadInsertSelect element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToIntegrityChecks")
  public void addToIntegrityChecks(com.guidewire.ab.external.entity.LoadIntegrityCheck element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUpdateStatisticsSelects")
  public void addToUpdateStatisticsSelects(com.guidewire.ab.external.entity.LoadUpdateStatisticsSelect element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadCallback from the Callbacks array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCallbacks")
  public void removeFromCallbacks(com.guidewire.ab.external.entity.LoadCallback element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadCallback having id elementID from the Callbacks array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCallbacks")
  public void removeFromCallbacks(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadInsertSelect from the InsertSelects array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromInsertSelects")
  public void removeFromInsertSelects(com.guidewire.ab.external.entity.LoadInsertSelect element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadInsertSelect having id elementID from the InsertSelects array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromInsertSelects")
  public void removeFromInsertSelects(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadIntegrityCheck from the IntegrityChecks array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromIntegrityChecks")
  public void removeFromIntegrityChecks(com.guidewire.ab.external.entity.LoadIntegrityCheck element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadIntegrityCheck having id elementID from the IntegrityChecks array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromIntegrityChecks")
  public void removeFromIntegrityChecks(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadUpdateStatisticsSelect from the UpdateStatisticsSelects array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpdateStatisticsSelects")
  public void removeFromUpdateStatisticsSelects(com.guidewire.ab.external.entity.LoadUpdateStatisticsSelect element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadUpdateStatisticsSelect having id elementID from the UpdateStatisticsSelects array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpdateStatisticsSelects")
  public void removeFromUpdateStatisticsSelects(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of LoadOperation
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadOperation.
     */
    public static LoadOperation newInstance()
    {
      return (LoadOperation) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadOperation.class);
    }
  }

}
