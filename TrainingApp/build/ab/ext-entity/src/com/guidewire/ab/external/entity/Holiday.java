package com.guidewire.ab.external.entity;

/**
 * List of holidays.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Holiday extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * True if this holiday applies to all zones (in which case HolidayZones should be empty). If false and HolidayZones has elements, this holiday applies to those zones.  If false and HolidayZones is empty, this holiday doesn't apply anywhere.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppliesToAllZones")
  public java.lang.Boolean isAppliesToAllZones();

  /**
   * True if this holiday applies to all zones (in which case HolidayZones should be empty). If false and HolidayZones has elements, this holiday applies to those zones.  If false and HolidayZones is empty, this holiday doesn't apply anywhere.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AppliesToAllZones")
  public void setAppliesToAllZones(java.lang.Boolean value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * The tags that observe this holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HolidayTags")
  public com.guidewire.ab.external.entity.HolidayTag[] getHolidayTags();

  /**
   * The tags that observe this holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HolidayTags")
  public void setHolidayTags(com.guidewire.ab.external.entity.HolidayTag[] value);


  /**
   * The zones that observe this holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HolidayZones")
  public com.guidewire.ab.external.entity.HolidayZone[] getHolidayZones();

  /**
   * The zones that observe this holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "HolidayZones")
  public void setHolidayZones(com.guidewire.ab.external.entity.HolidayZone[] value);


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
   * The name of a holiday in the business calendar. NOTE: when inserting a Holiday this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The name of a holiday in the business calendar. NOTE: when inserting a Holiday this field must be non-null.
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
   * The date of a holiday in the business calendar. NOTE: when inserting a Holiday this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OccurrenceDate")
  public java.util.Date getOccurrenceDate();

  /**
   * The date of a holiday in the business calendar. NOTE: when inserting a Holiday this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "OccurrenceDate")
  public void setOccurrenceDate(java.util.Date value);


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
   * Returns the available holiday tags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TagRange")
  public com.guidewire.ab.external.typelist.HolidayTagCode[] getTagRange();


  /**
   * Returns the holiday's tags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TagsArray")
  public com.guidewire.ab.external.typelist.HolidayTagCode[] getTagsArray();

  /**
   * Returns the holiday's tags.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TagsArray")
  public void setTagsArray(com.guidewire.ab.external.typelist.HolidayTagCode[] value);


  /**
   * Returns the tags that observe this holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TagsString")
  public java.lang.String getTagsString();

  /**
   * Returns the tags that observe this holiday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TagsString")
  public void setTagsString(java.lang.String value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToHolidayTags")
  public void addToHolidayTags(com.guidewire.ab.external.entity.HolidayTag element);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToHolidayZones")
  public void addToHolidayZones(com.guidewire.ab.external.entity.HolidayZone element);

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
   * This wraps the {@link #getHolidayZonesQuery(ZoneType)} method, converting
the result to an array of HolidayZone objects.
   *
   * @return region zones of the specified type.
   * @param zt the zone type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getHolidayZones")
  public com.guidewire.ab.external.entity.HolidayZone[] getHolidayZones(com.guidewire.ab.external.typelist.ZoneType zt);

  /**
   * This returns the set of HolidayZones of the specified type.
   *
   * @return a queryprocessor of HolidayZone
   * @param zt the zonetype to filter the HolidayZone objects by.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getHolidayZonesQuery")
  public external.gw.api.database.IQueryBeanResult getHolidayZonesQuery(com.guidewire.ab.external.typelist.ZoneType zt);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HolidayTag from the HolidayTags array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHolidayTags")
  public void removeFromHolidayTags(com.guidewire.ab.external.entity.HolidayTag element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HolidayTag having id elementID from the HolidayTags array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHolidayTags")
  public void removeFromHolidayTags(gw.pl.external.entity.Key elementID);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HolidayZone from the HolidayZones array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHolidayZones")
  public void removeFromHolidayZones(com.guidewire.ab.external.entity.HolidayZone element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.HolidayZone having id elementID from the HolidayZones array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHolidayZones")
  public void removeFromHolidayZones(gw.pl.external.entity.Key elementID);

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
   * Sets the holiday's tags.
   *
   * @param tags the tags
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTagsArray")
  public void setTagsArray_Method(com.guidewire.ab.external.typelist.HolidayTagCode[] tags);

  /**
   * Sets the tags that observe this holiday.
   *
   * @param tagsString a comma-separated string of the string codes of the tags that observe this holiday
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTagsString")
  public void setTagsString_Method(java.lang.String tagsString);

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
   * @deprecated Use #setZoneCodes Holidays are heterogeneous therefore this method should not be used.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZones")
  public void setZones_Method(java.lang.String zones);


  /**
   * Utility class for initializing an instance of Holiday
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Holiday.
     */
    public static Holiday newInstance()
    {
      return (Holiday) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Holiday.class);
    }
  }

}
