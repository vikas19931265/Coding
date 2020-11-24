package com.guidewire.ab.external.entity;

/**
 * Stores zipped database performance reports in the database.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DBPerfReport extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Description. NOTE: when inserting a DBPerfReport this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description. NOTE: when inserting a DBPerfReport this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * End time of data distribution process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndTime")
  public java.util.Date getEndTime();

  /**
   * End time of data distribution process.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndTime")
  public void setEndTime(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ErrorMessages")
  public java.lang.String getErrorMessages();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ErrorMessages")
  public void setErrorMessages(java.lang.String value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PerfDownload")
  public external.gw.lang.Blob getPerfDownload();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PerfDownload")
  public void setPerfDownload(external.gw.lang.Blob value);


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
   * Start time of data distribution process. NOTE: when inserting a DBPerfReport this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartTime")
  public java.util.Date getStartTime();

  /**
   * Start time of data distribution process. NOTE: when inserting a DBPerfReport this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartTime")
  public void setStartTime(java.util.Date value);


  /**
   * 0 for STARTED, 1 for SUCCESSFULLY_COMPLETED, 2 for FAILED
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public java.lang.Integer getStatus();

  /**
   * 0 for STARTED, 1 for SUCCESSFULLY_COMPLETED, 2 for FAILED
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of DBPerfReport
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DBPerfReport.
     */
    public static DBPerfReport newInstance()
    {
      return (DBPerfReport) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DBPerfReport.class);
    }
  }

}
