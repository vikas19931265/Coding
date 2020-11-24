package com.guidewire.ab.external.entity;

/**
 * A tag that observes a certain holiday.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface HolidayTag extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Holiday")
  public com.guidewire.ab.external.entity.Holiday getHoliday();

  /**
   * The holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Holiday")
  public void setHoliday(com.guidewire.ab.external.entity.Holiday value);


  /**
   * The code for this holiday tag. NOTE: when inserting a HolidayTag this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HolidayTagCode")
  public com.guidewire.ab.external.typelist.HolidayTagCode getHolidayTagCode();

  /**
   * The code for this holiday tag. NOTE: when inserting a HolidayTag this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HolidayTagCode")
  public void setHolidayTagCode(com.guidewire.ab.external.typelist.HolidayTagCode value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


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
   * Utility class for initializing an instance of HolidayTag
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity HolidayTag.
     */
    public static HolidayTag newInstance()
    {
      return (HolidayTag) gw.pl.external.entity.EntityFactory.getInstance().newEntity(HolidayTag.class);
    }
  }

}
