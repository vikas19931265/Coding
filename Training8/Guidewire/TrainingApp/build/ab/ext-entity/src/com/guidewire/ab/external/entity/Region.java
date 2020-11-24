package com.guidewire.ab.external.entity;

/**
 * 
        Represents a geographic region, an area of responsibility for a User or Group. A region contains
        a set of region zones.  Regions are therefore heterogenous with respect to a zone type.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Region extends com.guidewire.ab.external.entity.DecentralizedEntity, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Validatable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * The filter criteria, used for the region UI only.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FilterCriteria")
  public external.gw.api.admin.ZoneSearchCriteria getFilterCriteria();

  /**
   * The filter criteria, used for the region UI only.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FilterCriteria")
  public void setFilterCriteria(external.gw.api.admin.ZoneSearchCriteria value);


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
   * name given to the region (this must be unique). NOTE: when inserting a Region this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * name given to the region (this must be unique). NOTE: when inserting a Region this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name_en_US")
  public java.lang.String getName_en_US();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name_en_US")
  public void setName_en_US(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name_ja_JP")
  public java.lang.String getName_ja_JP();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name_ja_JP")
  public void setName_ja_JP(java.lang.String value);


  /**
   * The organization to which this region belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Organization")
  public com.guidewire.ab.external.entity.Organization getOrganization();

  /**
   * The organization to which this region belongs.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Organization")
  public void setOrganization(com.guidewire.ab.external.entity.Organization value);


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
   * The zones that define this region.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RegionZones")
  public com.guidewire.ab.external.entity.RegionZone[] getRegionZones();

  /**
   * The zones that define this region.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RegionZones")
  public void setRegionZones(com.guidewire.ab.external.entity.RegionZone[] value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * An array of the region's zones.  If the filter criteria is set,
it filters the return set by the filter criteria.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneCodes")
  public java.lang.String[] getZoneCodes();

  /**
   * An array of the region's zones.  If the filter criteria is set,
it filters the return set by the filter criteria.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZoneCodes")
  public void setZoneCodes(java.lang.String[] value);


  /**
   * Returns an alphabetized arraylist of the zones covered by the given region.
Zones are represented as strings.  Strips leading and trailing whitespace.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneList")
  public java.util.List getZoneList();


  /**
   * Returns an alphabetized arraylist of the zones covered by the given region.
Zones are represented as strings.  Strips leading and trailing whitespace.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Zones")
  public java.lang.String getZones();

  /**
   * Returns an alphabetized arraylist of the zones covered by the given region.
Zones are represented as strings.  Strips leading and trailing whitespace.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Zones")
  public void setZones(java.lang.String value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToRegionZones")
  public void addToRegionZones(com.guidewire.ab.external.entity.RegionZone element);

  /**
   * If this region contains a zone of the given type and value? The string matching is case-insensitive
NOTE: this will not match if a zip+4 value is provided.  You must strip off the +4 before passing
to this method.
   *
   * @return true if the region containsZone a zone of the given type, false
        otherwise
   * @param country 
   * @param zoneType the zone type, must not be null
   * @param zone the zone string, must not be null
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsZone")
  public boolean containsZone(com.guidewire.ab.external.typelist.Country country, com.guidewire.ab.external.typelist.ZoneType zoneType, java.lang.String zone);

  /**
   * This wraps the {@link #getRegionZonesQuery(ZoneType)} method, converting
the result to an array of RegionZone objects.
   *
   * @return region zones of the specified type.
   * @param zt the zone type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getRegionZones")
  public com.guidewire.ab.external.entity.RegionZone[] getRegionZones(com.guidewire.ab.external.typelist.ZoneType zt);

  /**
   * This returns the set of RegionZones of the specified type.
   *
   * @return a queryprocessor of RegionZone
   * @param zt the zonetype to filter the RegionZone objects by.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getRegionZonesQuery")
  public external.gw.api.database.IQueryBeanResult getRegionZonesQuery(com.guidewire.ab.external.typelist.ZoneType zt);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.RegionZone from the RegionZones array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRegionZones")
  public void removeFromRegionZones(com.guidewire.ab.external.entity.RegionZone element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.RegionZone having id elementID from the RegionZones array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromRegionZones")
  public void removeFromRegionZones(gw.pl.external.entity.Key elementID);

  /**
   * This will delete all null zones.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeNullZones")
  public void removeNullZones();

  /**
   * The filter criteria, used for the region UI only.
   *
   * @param filterCriteria 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setFilterCriteria")
  public void setFilterCriteria_Method(external.gw.api.admin.ZoneSearchCriteria filterCriteria);

  /**
   * The organization to which this region belongs.
   *
   * @param organization The organization to which this region belongs.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setOrganization")
  public void setOrganization_Method(com.guidewire.ab.external.entity.Organization organization);

  /**
   * Set the zones.
   *
   * @param zones the zones
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZoneCodes")
  public void setZoneCodes_Method(java.lang.String[] zones);

  /**
   * Set the zones (comma-delimited list) for the region.
   *
   * @param zones comman separated list of zones
   * @deprecated Use #setZoneCodes. Regions are heterogeneous therefore this method should not be used.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZones")
  public void setZones_Method(java.lang.String zones);

  /**
   * Validates all the zones for the region against zone data.
   *
   * @return all the region zones that do not have a corresponding zone data in the database.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateZones")
  public com.guidewire.ab.external.entity.RegionZone[] validateZones();


  /**
   * Utility class for initializing an instance of Region
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Region.
     */
    public static Region newInstance()
    {
      return (Region) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Region.class);
    }
  }

}
