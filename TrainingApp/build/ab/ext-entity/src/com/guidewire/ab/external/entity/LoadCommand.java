package com.guidewire.ab.external.entity;

/**
 * Staging table load history.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadCommand extends com.guidewire.ab.external.entity.TimedLoaderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


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
   * ID of the user who executed the operation. NOTE: when inserting a LoadCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CallingUser")
  public com.guidewire.ab.external.entity.User getCallingUser();

  /**
   * ID of the user who executed the operation. NOTE: when inserting a LoadCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CallingUser")
  public void setCallingUser(com.guidewire.ab.external.entity.User value);


  /**
   * Type of load command. NOTE: when inserting a LoadCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CommandType")
  public com.guidewire.ab.external.typelist.LoadCommandType getCommandType();

  /**
   * Type of load command. NOTE: when inserting a LoadCommand this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CommandType")
  public void setCommandType(com.guidewire.ab.external.typelist.LoadCommandType value);


  /**
   * Description of the load history event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the load history event.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Timed loader table columns encryptions.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EncryptTables")
  public com.guidewire.ab.external.entity.LoadEncryptTable[] getEncryptTables();

  /**
   * Timed loader table columns encryptions.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EncryptTables")
  public void setEncryptTables(com.guidewire.ab.external.entity.LoadEncryptTable[] value);


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
   * Total number of integrity check errors detected for all affected tables (if applicable).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ErrorCount")
  public java.lang.Integer getErrorCount();

  /**
   * Total number of integrity check errors detected for all affected tables (if applicable).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ErrorCount")
  public void setErrorCount(java.lang.Integer value);


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
   * LoadCallbacks ordered by duration descending.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrderedCallbacks")
  public com.guidewire.ab.external.entity.LoadCallback[] getOrderedCallbacks();


  /**
   * Insert selects ordered by duration descending.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrderedInserts")
  public external.gw.api.database.IQueryBeanResult getOrderedInserts();


  /**
   * Integrity checks ordered by duration descending.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrderedIntegrityChecks")
  public external.gw.api.database.IQueryBeanResult getOrderedIntegrityChecks();


  /**
   * Row counts ordered by table name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OrderedRowCounts")
  public external.gw.api.database.IQueryBeanResult getOrderedRowCounts();


  /**
   * Parameter values for command.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParameterNameValuePairs")
  public com.guidewire.ab.external.entity.LoadParameter[] getParameterNameValuePairs();

  /**
   * Parameter values for command.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParameterNameValuePairs")
  public void setParameterNameValuePairs(com.guidewire.ab.external.entity.LoadParameter[] value);


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
   * Row counts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RowCounts")
  public com.guidewire.ab.external.entity.LoadRowCount[] getRowCounts();

  /**
   * Row counts.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RowCounts")
  public void setRowCounts(com.guidewire.ab.external.entity.LoadRowCount[] value);


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
   * Steps.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Steps")
  public com.guidewire.ab.external.entity.LoadStep[] getSteps();

  /**
   * Steps.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Steps")
  public void setSteps(com.guidewire.ab.external.entity.LoadStep[] value);


  /**
   * UpdateDBStatisticsCommands.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateDBStatisticsCommands")
  public com.guidewire.ab.external.entity.UpdateDBStatisticsCommand[] getUpdateDBStatisticsCommands();

  /**
   * UpdateDBStatisticsCommands.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateDBStatisticsCommands")
  public void setUpdateDBStatisticsCommands(com.guidewire.ab.external.entity.UpdateDBStatisticsCommand[] value);

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToEncryptTables")
  public void addToEncryptTables(com.guidewire.ab.external.entity.LoadEncryptTable element);

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToParameterNameValuePairs")
  public void addToParameterNameValuePairs(com.guidewire.ab.external.entity.LoadParameter element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToRowCounts")
  public void addToRowCounts(com.guidewire.ab.external.entity.LoadRowCount element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToSteps")
  public void addToSteps(com.guidewire.ab.external.entity.LoadStep element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToUpdateDBStatisticsCommands")
  public void addToUpdateDBStatisticsCommands(com.guidewire.ab.external.entity.UpdateDBStatisticsCommand element);

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
   * Removes an instance of com.guidewire.ab.external.entity.LoadEncryptTable from the EncryptTables array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromEncryptTables")
  public void removeFromEncryptTables(com.guidewire.ab.external.entity.LoadEncryptTable element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadEncryptTable having id elementID from the EncryptTables array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromEncryptTables")
  public void removeFromEncryptTables(gw.pl.external.entity.Key elementID);

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
   * Removes an instance of com.guidewire.ab.external.entity.LoadParameter from the ParameterNameValuePairs array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromParameterNameValuePairs")
  public void removeFromParameterNameValuePairs(com.guidewire.ab.external.entity.LoadParameter element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadParameter having id elementID from the ParameterNameValuePairs array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromParameterNameValuePairs")
  public void removeFromParameterNameValuePairs(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadRowCount from the RowCounts array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRowCounts")
  public void removeFromRowCounts(com.guidewire.ab.external.entity.LoadRowCount element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadRowCount having id elementID from the RowCounts array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRowCounts")
  public void removeFromRowCounts(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadStep from the Steps array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSteps")
  public void removeFromSteps(com.guidewire.ab.external.entity.LoadStep element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadStep having id elementID from the Steps array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromSteps")
  public void removeFromSteps(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpdateDBStatisticsCommand from the UpdateDBStatisticsCommands array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpdateDBStatisticsCommands")
  public void removeFromUpdateDBStatisticsCommands(com.guidewire.ab.external.entity.UpdateDBStatisticsCommand element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.UpdateDBStatisticsCommand having id elementID from the UpdateDBStatisticsCommands array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromUpdateDBStatisticsCommands")
  public void removeFromUpdateDBStatisticsCommands(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of LoadCommand
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadCommand.
     */
    public static LoadCommand newInstance()
    {
      return (LoadCommand) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadCommand.class);
    }
  }

}
