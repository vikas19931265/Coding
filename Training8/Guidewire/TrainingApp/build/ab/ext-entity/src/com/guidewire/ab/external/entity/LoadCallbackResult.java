package com.guidewire.ab.external.entity;

/**
 * Timed loader callback results.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface LoadCallbackResult extends com.guidewire.ab.external.entity.OrdereddLoaderObject, com.guidewire.ab.external.entity.TimedLoaderObject, gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Number of rows affected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AffectedRowCount")
  public java.lang.Integer getAffectedRowCount();

  /**
   * Number of rows affected.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AffectedRowCount")
  public void setAffectedRowCount(java.lang.Integer value);


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
   * Order of execution (1-N). NOTE: when inserting a LoadCallbackResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionOrder")
  public java.lang.Integer getExecutionOrder();

  /**
   * Order of execution (1-N). NOTE: when inserting a LoadCallbackResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExecutionOrder")
  public void setExecutionOrder(java.lang.Integer value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCallback")
  public com.guidewire.ab.external.entity.LoadCallback getLoadCallback();

  /**
   * Parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LoadCallback")
  public void setLoadCallback(com.guidewire.ab.external.entity.LoadCallback value);


  /**
   * Name of loader callback result. NOTE: when inserting a LoadCallbackResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Name of loader callback result. NOTE: when inserting a LoadCallbackResult this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


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
   * SQL text.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SQLText")
  public java.lang.String getSQLText();

  /**
   * SQL text.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SQLText")
  public void setSQLText(java.lang.String value);


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
   * Utility class for initializing an instance of LoadCallbackResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity LoadCallbackResult.
     */
    public static LoadCallbackResult newInstance()
    {
      return (LoadCallbackResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(LoadCallbackResult.class);
    }
  }

}
