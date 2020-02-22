package com.guidewire.ab.external.entity;

/**
 * Stores DBMS reports as zipped objects
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DbmsReport extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * The datetime this was captured. NOTE: when inserting a DbmsReport this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CaptureDate")
  public java.util.Date getCaptureDate();

  /**
   * The datetime this was captured. NOTE: when inserting a DbmsReport this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CaptureDate")
  public void setCaptureDate(java.util.Date value);


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZippedReport")
  public external.gw.lang.Blob getZippedReport();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZippedReport")
  public void setZippedReport(external.gw.lang.Blob value);


  /**
   * Utility class for initializing an instance of DbmsReport
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DbmsReport.
     */
    public static DbmsReport newInstance()
    {
      return (DbmsReport) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DbmsReport.class);
    }
  }

}
