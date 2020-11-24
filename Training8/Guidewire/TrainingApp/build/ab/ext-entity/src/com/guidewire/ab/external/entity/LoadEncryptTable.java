package com.guidewire.ab.external.entity;

/**
 * Encrypt columns in a staging table
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadEncryptTable extends com.guidewire.ab.external.entity.TimedLoaderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Total rows read and updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AffectedRowCount")
  public java.lang.Integer getAffectedRowCount();

  /**
   * Total rows read and updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AffectedRowCount")
  public void setAffectedRowCount(java.lang.Integer value);


  /**
   * Column(s) being encrypted (comma separated)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ColumnsToEncrypt")
  public java.lang.String getColumnsToEncrypt();

  /**
   * Column(s) being encrypted (comma separated)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ColumnsToEncrypt")
  public void setColumnsToEncrypt(java.lang.String value);


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
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Parent load command
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommand")
  public com.guidewire.ab.external.entity.LoadCommand getLoadCommand();

  /**
   * Parent load command
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadCommand")
  public void setLoadCommand(com.guidewire.ab.external.entity.LoadCommand value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadEncryptChunks")
  public com.guidewire.ab.external.entity.LoadEncryptChunk[] getLoadEncryptChunks();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadEncryptChunks")
  public void setLoadEncryptChunks(com.guidewire.ab.external.entity.LoadEncryptChunk[] value);


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
   * Select statement used to read rows NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SelectStmt")
  public java.lang.String getSelectStmt();

  /**
   * Select statement used to read rows NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SelectStmt")
  public void setSelectStmt(java.lang.String value);


  /**
   * Target number of update executions in each chunk NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SizeOfTimedChuck")
  public java.lang.Integer getSizeOfTimedChuck();

  /**
   * Target number of update executions in each chunk NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SizeOfTimedChuck")
  public void setSizeOfTimedChuck(java.lang.Integer value);


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
   * Name of table being updated NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableName")
  public java.lang.String getTableName();

  /**
   * Name of table being updated NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableName")
  public void setTableName(java.lang.String value);


  /**
   * Update statement used to update rows NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateStmt")
  public java.lang.String getUpdateStmt();

  /**
   * Update statement used to update rows NOTE: when inserting a LoadEncryptTable this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpdateStmt")
  public void setUpdateStmt(java.lang.String value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToLoadEncryptChunks")
  public void addToLoadEncryptChunks(com.guidewire.ab.external.entity.LoadEncryptChunk element);

  /**
   * Returns all LoadEncryptChunk beans for this LoadEncryptTable is date ascending order
   *
   * @return QueryProcessor of type LoadEncryptChunk
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findLoadEncryptChunksInTimeOrder")
  public external.gw.api.database.IQueryBeanResult findLoadEncryptChunksInTimeOrder();

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadEncryptChunk from the LoadEncryptChunks array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromLoadEncryptChunks")
  public void removeFromLoadEncryptChunks(com.guidewire.ab.external.entity.LoadEncryptChunk element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.LoadEncryptChunk having id elementID from the LoadEncryptChunks array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromLoadEncryptChunks")
  public void removeFromLoadEncryptChunks(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of LoadEncryptTable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadEncryptTable.
     */
    public static LoadEncryptTable newInstance()
    {
      return (LoadEncryptTable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadEncryptTable.class);
    }
  }

}
