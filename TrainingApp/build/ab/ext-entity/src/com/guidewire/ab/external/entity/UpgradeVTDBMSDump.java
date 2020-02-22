package com.guidewire.ab.external.entity;

/**
 * DBMS-specific performance information for a version trigger.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UpgradeVTDBMSDump extends com.guidewire.ab.external.entity.TimedUpgraderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * query NOTE: when inserting a UpgradeVTDBMSDump this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contents")
  public external.gw.lang.Blob getContents();

  /**
   * query NOTE: when inserting a UpgradeVTDBMSDump this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contents")
  public void setContents(external.gw.lang.Blob value);


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
   * Timestamp when the timing began NOTE: when inserting a UpgradeVTDBMSDump this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Timestamp when the timing began NOTE: when inserting a UpgradeVTDBMSDump this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * UpgradeInstance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpgradeInstance")
  public com.guidewire.ab.external.entity.UpgradeInstance getUpgradeInstance();

  /**
   * UpgradeInstance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UpgradeInstance")
  public void setUpgradeInstance(com.guidewire.ab.external.entity.UpgradeInstance value);


  /**
   * Fully qualified name of version trigger to which this applies NOTE: when inserting a UpgradeVTDBMSDump this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VersionActionName")
  public java.lang.String getVersionActionName();

  /**
   * Fully qualified name of version trigger to which this applies NOTE: when inserting a UpgradeVTDBMSDump this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VersionActionName")
  public void setVersionActionName(java.lang.String value);

  /**
   * null
   *
   * @param param ZipOutputStream
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copyUnzippedContents")
  public void copyUnzippedContents(java.util.zip.ZipOutputStream param, java.lang.String param1) throws gw.pl.external.GenericCheckedException;


  /**
   * Utility class for initializing an instance of UpgradeVTDBMSDump
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity UpgradeVTDBMSDump.
     */
    public static UpgradeVTDBMSDump newInstance()
    {
      return (UpgradeVTDBMSDump) gw.pl.external.entity.EntityFactory.getInstance().newEntity(UpgradeVTDBMSDump.class);
    }
  }

}
