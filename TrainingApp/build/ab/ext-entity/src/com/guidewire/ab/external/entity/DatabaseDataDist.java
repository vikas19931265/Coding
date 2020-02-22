package com.guidewire.ab.external.entity;

/**
 * Stores data distribution info in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DatabaseDataDist extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Ad hoc data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AdHocDistsCollected")
  public java.lang.Boolean isAdHocDistsCollected();

  /**
   * Ad hoc data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AdHocDistsCollected")
  public void setAdHocDistsCollected(java.lang.Boolean value);


  /**
   * All tables data distributions collected.  If false, a subset was specified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllTablesCollected")
  public java.lang.Boolean isAllTablesCollected();

  /**
   * All tables data distributions collected.  If false, a subset was specified.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AllTablesCollected")
  public void setAllTablesCollected(java.lang.Boolean value);


  /**
   * Application specific data distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppSpecificDistsCollected")
  public java.lang.Boolean isAppSpecificDistsCollected();

  /**
   * Application specific data distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppSpecificDistsCollected")
  public void setAppSpecificDistsCollected(java.lang.Boolean value);


  /**
   * Array distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArrayDistsCollected")
  public java.lang.Boolean isArrayDistsCollected();

  /**
   * Array distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ArrayDistsCollected")
  public void setArrayDistsCollected(java.lang.Boolean value);


  /**
   * Assignable data distributions by date collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignableDistsByDateCollected")
  public java.lang.Boolean isAssignableDistsByDateCollected();

  /**
   * Assignable data distributions by date collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignableDistsByDateCollected")
  public void setAssignableDistsByDateCollected(java.lang.Boolean value);


  /**
   * Assignable Foreign Key distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AssignableForKeyDistsCollected")
  public java.lang.Boolean isAssignableForKeyDistsCollected();

  /**
   * Assignable Foreign Key distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AssignableForKeyDistsCollected")
  public void setAssignableForKeyDistsCollected(java.lang.Boolean value);


  /**
   * Bean distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanDistsCollected")
  public java.lang.Boolean isBeanDistsCollected();

  /**
   * Bean distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BeanDistsCollected")
  public void setBeanDistsCollected(java.lang.Boolean value);


  /**
   * Blob distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BlobDistsCollected")
  public java.lang.Boolean isBlobDistsCollected();

  /**
   * Blob distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BlobDistsCollected")
  public void setBlobDistsCollected(java.lang.Boolean value);


  /**
   * Boolean column data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BooleanColDistsCollected")
  public java.lang.Boolean isBooleanColDistsCollected();

  /**
   * Boolean column data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BooleanColDistsCollected")
  public void setBooleanColDistsCollected(java.lang.Boolean value);


  /**
   * Clob distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClobDistsCollected")
  public java.lang.Boolean isClobDistsCollected();

  /**
   * Clob distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ClobDistsCollected")
  public void setClobDistsCollected(java.lang.Boolean value);


  /**
   * Collection of DataDistQueryExecs linked to this DatabaseDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DataDistQueryExecs")
  public com.guidewire.ab.external.entity.DataDistQueryExec[] getDataDistQueryExecs();

  /**
   * Collection of DataDistQueryExecs linked to this DatabaseDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DataDistQueryExecs")
  public void setDataDistQueryExecs(com.guidewire.ab.external.entity.DataDistQueryExec[] value);


  /**
   * Description. NOTE: when inserting a DatabaseDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a DatabaseDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * End time of data distribution process. NOTE: when inserting a DatabaseDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * End time of data distribution process. NOTE: when inserting a DatabaseDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * ForeignKey distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ForKeyDistsCollected")
  public java.lang.Boolean isForKeyDistsCollected();

  /**
   * ForeignKey distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ForKeyDistsCollected")
  public void setForKeyDistsCollected(java.lang.Boolean value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


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
   * Number of threads configured to collect data distribution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumThreads")
  public java.lang.Integer getNumThreads();

  /**
   * Number of threads configured to collect data distribution
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NumThreads")
  public void setNumThreads(java.lang.Integer value);


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
   * Staging table data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StagingTableDistsCollected")
  public java.lang.Boolean isStagingTableDistsCollected();

  /**
   * Staging table data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StagingTableDistsCollected")
  public void setStagingTableDistsCollected(java.lang.Boolean value);


  /**
   * Start time of data distribution process. NOTE: when inserting a DatabaseDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Start time of data distribution process. NOTE: when inserting a DatabaseDataDist this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * Collection of TableDataDists linked to this DatabaseDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TableDataDists")
  public com.guidewire.ab.external.entity.TableDataDist[] getTableDataDists();

  /**
   * Collection of TableDataDists linked to this DatabaseDataDist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TableDataDists")
  public void setTableDataDists(com.guidewire.ab.external.entity.TableDataDist[] value);


  /**
   * TypeKey  distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeKeyDistsCollected")
  public java.lang.Boolean isTypeKeyDistsCollected();

  /**
   * TypeKey  distributions collected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeKeyDistsCollected")
  public void setTypeKeyDistsCollected(java.lang.Boolean value);


  /**
   * Typelist table data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeListTableDistsCollected")
  public java.lang.Boolean isTypeListTableDistsCollected();

  /**
   * Typelist table data distributions collected
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeListTableDistsCollected")
  public void setTypeListTableDistsCollected(java.lang.Boolean value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToDataDistQueryExecs")
  public void addToDataDistQueryExecs(com.guidewire.ab.external.entity.DataDistQueryExec element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToTableDataDists")
  public void addToTableDataDists(com.guidewire.ab.external.entity.TableDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DataDistQueryExec from the DataDistQueryExecs array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDataDistQueryExecs")
  public void removeFromDataDistQueryExecs(com.guidewire.ab.external.entity.DataDistQueryExec element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.DataDistQueryExec having id elementID from the DataDistQueryExecs array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromDataDistQueryExecs")
  public void removeFromDataDistQueryExecs(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TableDataDist from the TableDataDists array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTableDataDists")
  public void removeFromTableDataDists(com.guidewire.ab.external.entity.TableDataDist element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.TableDataDist having id elementID from the TableDataDists array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromTableDataDists")
  public void removeFromTableDataDists(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of DatabaseDataDist
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DatabaseDataDist.
     */
    public static DatabaseDataDist newInstance()
    {
      return (DatabaseDataDist) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DatabaseDataDist.class);
    }
  }

}
