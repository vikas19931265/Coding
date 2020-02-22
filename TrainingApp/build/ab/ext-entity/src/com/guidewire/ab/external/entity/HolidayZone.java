package com.guidewire.ab.external.entity;

/**
 * A zone that observes a certain holiday.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface HolidayZone extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The code for this zone, this is the value that should be used for zone lookups. NOTE: when inserting a HolidayZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Code")
  public java.lang.String getCode();

  /**
   * The code for this zone, this is the value that should be used for zone lookups. NOTE: when inserting a HolidayZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Code")
  public void setCode(java.lang.String value);


  /**
   * Country of this holiday zone. NOTE: when inserting a HolidayZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();

  /**
   * Country of this holiday zone. NOTE: when inserting a HolidayZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Country")
  public void setCountry(com.guidewire.ab.external.typelist.Country value);


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
   * Type of this holiday zone. NOTE: when inserting a HolidayZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneType")
  public com.guidewire.ab.external.typelist.ZoneType getZoneType();

  /**
   * Type of this holiday zone. NOTE: when inserting a HolidayZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZoneType")
  public void setZoneType(com.guidewire.ab.external.typelist.ZoneType value);

  /**
   * Set the zone for this row
   *
   * @param zone the zone to set for this attribued
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZone")
  public void setZone(com.guidewire.ab.external.entity.Zone zone);


  /**
   * Utility class for initializing an instance of HolidayZone
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity HolidayZone.
     */
    public static HolidayZone newInstance()
    {
      return (HolidayZone) gw.pl.external.entity.EntityFactory.getInstance().newEntity(HolidayZone.class);
    }
  }

}
