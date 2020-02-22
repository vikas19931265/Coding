package com.guidewire.ab.external.entity;

/**
 * Geographic zone.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Zone extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The code for this zone, this is the value that should be used for lookups. NOTE: when inserting a Zone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Code")
  public java.lang.String getCode();

  /**
   * The code for this zone, this is the value that should be used for lookups. NOTE: when inserting a Zone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Code")
  public void setCode(java.lang.String value);


  /**
   * The country to which the zone belongs. NOTE: when inserting a Zone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();

  /**
   * The country to which the zone belongs. NOTE: when inserting a Zone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Country")
  public void setCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * Zones that are forward linked to this zone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ForwardLinkedZones")
  public com.guidewire.ab.external.entity.ZoneLink[] getForwardLinkedZones();

  /**
   * Zones that are forward linked to this zone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ForwardLinkedZones")
  public void setForwardLinkedZones(com.guidewire.ab.external.entity.ZoneLink[] value);


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
   * The name of the zone, this is the value used to populate fields. NOTE: when inserting a Zone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The name of the zone, this is the value used to populate fields. NOTE: when inserting a Zone this field must be non-null.
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
   * Zones that are reverse linked to this zone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReverseLinkedZones")
  public com.guidewire.ab.external.entity.ZoneLink[] getReverseLinkedZones();

  /**
   * Zones that are reverse linked to this zone.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReverseLinkedZones")
  public void setReverseLinkedZones(com.guidewire.ab.external.entity.ZoneLink[] value);


  /**
   * Type of zone. NOTE: when inserting a Zone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneType")
  public com.guidewire.ab.external.typelist.ZoneType getZoneType();

  /**
   * Type of zone. NOTE: when inserting a Zone this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZoneType")
  public void setZoneType(com.guidewire.ab.external.typelist.ZoneType value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToForwardLinkedZones")
  public void addToForwardLinkedZones(com.guidewire.ab.external.entity.ZoneLink element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToReverseLinkedZones")
  public void addToReverseLinkedZones(com.guidewire.ab.external.entity.ZoneLink element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ZoneLink from the ForwardLinkedZones array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromForwardLinkedZones")
  public void removeFromForwardLinkedZones(com.guidewire.ab.external.entity.ZoneLink element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ZoneLink having id elementID from the ForwardLinkedZones array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromForwardLinkedZones")
  public void removeFromForwardLinkedZones(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ZoneLink from the ReverseLinkedZones array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromReverseLinkedZones")
  public void removeFromReverseLinkedZones(com.guidewire.ab.external.entity.ZoneLink element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ZoneLink having id elementID from the ReverseLinkedZones array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromReverseLinkedZones")
  public void removeFromReverseLinkedZones(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for accessing static features for Zone
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    /**
     * Create a new proxy instance of the external type Zone.
     */
    public static Zone newInstance()
    {
      return null;
    }

    // Static Properties for Zone

    /**
     * The finder for zones
     * 
     */
    public static external.gw.api.admin.PublicZoneFinder getFinder()
    {
      return (external.gw.api.admin.PublicZoneFinder) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.ab.external.entity.Zone.class, "Finder");
    }

    // Static Methods for Zone
    
  }


  /**
   * Utility class for initializing an instance of Zone
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Zone.
     */
    public static Zone newInstance()
    {
      return (Zone) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Zone.class);
    }
  }

}
