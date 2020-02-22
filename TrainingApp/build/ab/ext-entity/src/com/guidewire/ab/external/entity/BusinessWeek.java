package com.guidewire.ab.external.entity;

/**
 * List of businessweeks.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BusinessWeek extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * True if this businessweek applies to all zones (in which case BusinessWeekZones should be empty). If false and BusinessWeekZones has elements, this businessweek applies to those zones.  If false and BusinessWeekZones is empty, this businessweek doesn't apply anywhere.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AppliesToAllZones")
  public java.lang.Boolean isAppliesToAllZones();

  /**
   * True if this businessweek applies to all zones (in which case BusinessWeekZones should be empty). If false and BusinessWeekZones has elements, this businessweek applies to those zones.  If false and BusinessWeekZones is empty, this businessweek doesn't apply anywhere.
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
   * Demarcation of the business day NOTE: when inserting a BusinessWeek this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BusinessDayDemarcation")
  public java.util.Date getBusinessDayDemarcation();

  /**
   * Demarcation of the business day NOTE: when inserting a BusinessWeek this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BusinessDayDemarcation")
  public void setBusinessDayDemarcation(java.util.Date value);


  /**
   * What day the business week ends. NOTE: when inserting a BusinessWeek this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BusinessWeekEnd")
  public com.guidewire.ab.external.typelist.Weekdays getBusinessWeekEnd();

  /**
   * What day the business week ends. NOTE: when inserting a BusinessWeek this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BusinessWeekEnd")
  public void setBusinessWeekEnd(com.guidewire.ab.external.typelist.Weekdays value);


  /**
   * The zones that observe this businessweek.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BusinessWeekZones")
  public com.guidewire.ab.external.entity.BusinessWeekZone[] getBusinessWeekZones();

  /**
   * The zones that observe this businessweek.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BusinessWeekZones")
  public void setBusinessWeekZones(com.guidewire.ab.external.entity.BusinessWeekZone[] value);


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
   * Is Friday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FridayBusinessDay")
  public java.lang.Boolean isFridayBusinessDay();

  /**
   * Is Friday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FridayBusinessDay")
  public void setFridayBusinessDay(java.lang.Boolean value);


  /**
   * End of business day on Friday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FridayBusinessEnd")
  public java.util.Date getFridayBusinessEnd();

  /**
   * End of business day on Friday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FridayBusinessEnd")
  public void setFridayBusinessEnd(java.util.Date value);


  /**
   * Start of business day on Friday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FridayBusinessStart")
  public java.util.Date getFridayBusinessStart();

  /**
   * Start of business day on Friday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FridayBusinessStart")
  public void setFridayBusinessStart(java.util.Date value);


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
   * Is Monday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MondayBusinessDay")
  public java.lang.Boolean isMondayBusinessDay();

  /**
   * Is Monday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MondayBusinessDay")
  public void setMondayBusinessDay(java.lang.Boolean value);


  /**
   * End of business day on Monday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MondayBusinessEnd")
  public java.util.Date getMondayBusinessEnd();

  /**
   * End of business day on Monday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MondayBusinessEnd")
  public void setMondayBusinessEnd(java.util.Date value);


  /**
   * Start of business day on Monday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MondayBusinessStart")
  public java.util.Date getMondayBusinessStart();

  /**
   * Start of business day on Monday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MondayBusinessStart")
  public void setMondayBusinessStart(java.util.Date value);


  /**
   * The name of a businessweek in the business calendar. NOTE: when inserting a BusinessWeek this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * The name of a businessweek in the business calendar. NOTE: when inserting a BusinessWeek this field must be non-null.
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
   * Is Saturday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SaturdayBusinessDay")
  public java.lang.Boolean isSaturdayBusinessDay();

  /**
   * Is Saturday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SaturdayBusinessDay")
  public void setSaturdayBusinessDay(java.lang.Boolean value);


  /**
   * End of business day on Saturday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SaturdayBusinessEnd")
  public java.util.Date getSaturdayBusinessEnd();

  /**
   * End of business day on Saturday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SaturdayBusinessEnd")
  public void setSaturdayBusinessEnd(java.util.Date value);


  /**
   * Start of business day on Saturday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SaturdayBusinessStart")
  public java.util.Date getSaturdayBusinessStart();

  /**
   * Start of business day on Saturday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SaturdayBusinessStart")
  public void setSaturdayBusinessStart(java.util.Date value);


  /**
   * Is Sunday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SundayBusinessDay")
  public java.lang.Boolean isSundayBusinessDay();

  /**
   * Is Sunday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SundayBusinessDay")
  public void setSundayBusinessDay(java.lang.Boolean value);


  /**
   * End of business day on Sunday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SundayBusinessEnd")
  public java.util.Date getSundayBusinessEnd();

  /**
   * End of business day on Sunday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SundayBusinessEnd")
  public void setSundayBusinessEnd(java.util.Date value);


  /**
   * Start of business day on Sunday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SundayBusinessStart")
  public java.util.Date getSundayBusinessStart();

  /**
   * Start of business day on Sunday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SundayBusinessStart")
  public void setSundayBusinessStart(java.util.Date value);


  /**
   * Is Thursday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThursdayBusinessDay")
  public java.lang.Boolean isThursdayBusinessDay();

  /**
   * Is Thursday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ThursdayBusinessDay")
  public void setThursdayBusinessDay(java.lang.Boolean value);


  /**
   * End of business day on Thursday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThursdayBusinessEnd")
  public java.util.Date getThursdayBusinessEnd();

  /**
   * End of business day on Thursday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ThursdayBusinessEnd")
  public void setThursdayBusinessEnd(java.util.Date value);


  /**
   * Start of business day on Thursday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThursdayBusinessStart")
  public java.util.Date getThursdayBusinessStart();

  /**
   * Start of business day on Thursday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ThursdayBusinessStart")
  public void setThursdayBusinessStart(java.util.Date value);


  /**
   * Is Tuesday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TuesdayBusinessDay")
  public java.lang.Boolean isTuesdayBusinessDay();

  /**
   * Is Tuesday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TuesdayBusinessDay")
  public void setTuesdayBusinessDay(java.lang.Boolean value);


  /**
   * End of business day on Tuesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TuesdayBusinessEnd")
  public java.util.Date getTuesdayBusinessEnd();

  /**
   * End of business day on Tuesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TuesdayBusinessEnd")
  public void setTuesdayBusinessEnd(java.util.Date value);


  /**
   * Start of business day on Tuesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TuesdayBusinessStart")
  public java.util.Date getTuesdayBusinessStart();

  /**
   * Start of business day on Tuesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TuesdayBusinessStart")
  public void setTuesdayBusinessStart(java.util.Date value);


  /**
   * Is Wednesday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WednesdayBusinessDay")
  public java.lang.Boolean isWednesdayBusinessDay();

  /**
   * Is Wednesday a business day.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WednesdayBusinessDay")
  public void setWednesdayBusinessDay(java.lang.Boolean value);


  /**
   * End of business day on Wednesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WednesdayBusinessEnd")
  public java.util.Date getWednesdayBusinessEnd();

  /**
   * End of business day on Wednesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WednesdayBusinessEnd")
  public void setWednesdayBusinessEnd(java.util.Date value);


  /**
   * Start of business day on Wednesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WednesdayBusinessStart")
  public java.util.Date getWednesdayBusinessStart();

  /**
   * Start of business day on Wednesday.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WednesdayBusinessStart")
  public void setWednesdayBusinessStart(java.util.Date value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToBusinessWeekZones")
  public void addToBusinessWeekZones(com.guidewire.ab.external.entity.BusinessWeekZone element);

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
   * This wraps the {@link #getBusinessWeekZonesQuery(ZoneType)} method, converting
the result to an array of BusinessWeekZone objects.
   *
   * @return region zones of the specified type.
   * @param zt the zone type
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getBusinessWeekZones")
  public com.guidewire.ab.external.entity.BusinessWeekZone[] getBusinessWeekZones(com.guidewire.ab.external.typelist.ZoneType zt);

  /**
   * This returns the set of BusinessWeekZones of the specified type.
   *
   * @return a queryprocessor of BusinessWeekZone
   * @param zt the zonetype to filter the BusinessWeekZone objects by.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getBusinessWeekZonesQuery")
  public external.gw.api.database.IQueryBeanResult getBusinessWeekZonesQuery(com.guidewire.ab.external.typelist.ZoneType zt);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BusinessWeekZone from the BusinessWeekZones array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBusinessWeekZones")
  public void removeFromBusinessWeekZones(com.guidewire.ab.external.entity.BusinessWeekZone element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.BusinessWeekZone having id elementID from the BusinessWeekZones array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromBusinessWeekZones")
  public void removeFromBusinessWeekZones(gw.pl.external.entity.Key elementID);

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
   * @deprecated use #setZoneCodes BusinessWeeks are heterogeneous therefore this method should not be used.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setZones")
  public void setZones_Method(java.lang.String zones);

  /**
   * 
   *
   * @return an error message String if the day demarcation is during business hours
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateBusinessDayDemarcation")
  public java.lang.String validateBusinessDayDemarcation();

  /**
   * 
   *
   * @return an error message String if FridayBusinessEnd is before FridayBusinessStart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateFridayStartAndEndTimes")
  public java.lang.String validateFridayStartAndEndTimes();

  /**
   * 
   *
   * @return an error message String if MondayBusinessEnd is before MondayBusinessStart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateMondayStartAndEndTimes")
  public java.lang.String validateMondayStartAndEndTimes();

  /**
   * 
   *
   * @return an error message String if the name is used by another BusinessWeek
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateName")
  public java.lang.String validateName();

  /**
   * 
   *
   * @return an error message String if this BusinessWeek's AppliesToAllZones is set to true, and there are other BusinessWeek's that have AppliesToAllZones set to true
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateOnlyOneBusinessWeekAppliesToAll")
  public java.lang.String validateOnlyOneBusinessWeekAppliesToAll();

  /**
   * 
   *
   * @return an error message String if SaturdayBusinessEnd is before SaturdayBusinessStart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateSaturdayStartAndEndTimes")
  public java.lang.String validateSaturdayStartAndEndTimes();

  /**
   * 
   *
   * @return an error message String if SundayBusinessEnd is before SundayBusinessStart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateSundayStartAndEndTimes")
  public java.lang.String validateSundayStartAndEndTimes();

  /**
   * 
   *
   * @return an error message String if ThursdayBusinessEnd is before ThursdayBusinessStart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateThursdayStartAndEndTimes")
  public java.lang.String validateThursdayStartAndEndTimes();

  /**
   * 
   *
   * @return an error message String if TuesdayBusinessEnd is before TuesdayBusinessStart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateTuesdayStartAndEndTimes")
  public java.lang.String validateTuesdayStartAndEndTimes();

  /**
   * 
   *
   * @return an error message String if WednesdayBusinessEnd is before WednesdayBusinessStart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validateWednesdayStartAndEndTimes")
  public java.lang.String validateWednesdayStartAndEndTimes();


  /**
   * Utility class for initializing an instance of BusinessWeek
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity BusinessWeek.
     */
    public static BusinessWeek newInstance()
    {
      return (BusinessWeek) gw.pl.external.entity.EntityFactory.getInstance().newEntity(BusinessWeek.class);
    }
  }

}
