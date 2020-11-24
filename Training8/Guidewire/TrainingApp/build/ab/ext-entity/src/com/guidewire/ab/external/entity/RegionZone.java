package com.guidewire.ab.external.entity;

/**
 * A zone of a region.  It contains the zone code, the zone type and the country to which the region belongs.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface RegionZone extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The code for this zone, this is the value that should be used for lookups. NOTE: when inserting a RegionZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Code")
  public java.lang.String getCode();

  /**
   * The code for this zone, this is the value that should be used for lookups. NOTE: when inserting a RegionZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Code")
  public void setCode(java.lang.String value);


  /**
   * The country to which the zone belongs. NOTE: when inserting a RegionZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();

  /**
   * The country to which the zone belongs. NOTE: when inserting a RegionZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Country")
  public void setCountry(com.guidewire.ab.external.typelist.Country value);


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
   * The region.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Region")
  public com.guidewire.ab.external.entity.Region getRegion();

  /**
   * The region.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Region")
  public void setRegion(com.guidewire.ab.external.entity.Region value);


  /**
   * Type of zone. NOTE: when inserting a RegionZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneType")
  public com.guidewire.ab.external.typelist.ZoneType getZoneType();

  /**
   * Type of zone. NOTE: when inserting a RegionZone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZoneType")
  public void setZoneType(com.guidewire.ab.external.typelist.ZoneType value);


  /**
   * Utility class for initializing an instance of RegionZone
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity RegionZone.
     */
    public static RegionZone newInstance()
    {
      return (RegionZone) gw.pl.external.entity.EntityFactory.getInstance().newEntity(RegionZone.class);
    }
  }

}
