package com.guidewire.ab.external.entity;

/**
 * Stores value bins and date bin array for date binned distribution.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DateBinnedDDDateBin extends gw.pl.external.entity.Entity, gw.pl.external.entity.KeyableEntity
{


  /**
   * Count of items in this date bin NOTE: when inserting a DateBinnedDDDateBin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Count")
  public java.lang.Long getCount();

  /**
   * Count of items in this date bin NOTE: when inserting a DateBinnedDDDateBin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Count")
  public void setCount(java.lang.Long value);


  /**
   * Last day in days +/- date of distribution for this date bin, must be negative or zero if StartDays is negative NOTE: when inserting a DateBinnedDDDateBin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndDays")
  public java.lang.Integer getEndDays();

  /**
   * Last day in days +/- date of distribution for this date bin, must be negative or zero if StartDays is negative NOTE: when inserting a DateBinnedDDDateBin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndDays")
  public void setEndDays(java.lang.Integer value);


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
   * First day in days +/- date of distribution for this date bin, must be positive or zero if EndDays is positive NOTE: when inserting a DateBinnedDDDateBin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartDays")
  public java.lang.Integer getStartDays();

  /**
   * First day in days +/- date of distribution for this date bin, must be positive or zero if EndDays is positive NOTE: when inserting a DateBinnedDDDateBin this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartDays")
  public void setStartDays(java.lang.Integer value);


  /**
   * DateBinnedDDValue for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public com.guidewire.ab.external.entity.DateBinnedDDValue getValue();

  /**
   * DateBinnedDDValue for this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Value")
  public void setValue(com.guidewire.ab.external.entity.DateBinnedDDValue value);


  /**
   * Utility class for initializing an instance of DateBinnedDDDateBin
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DateBinnedDDDateBin.
     */
    public static DateBinnedDDDateBin newInstance()
    {
      return (DateBinnedDDDateBin) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DateBinnedDDDateBin.class);
    }
  }

}
