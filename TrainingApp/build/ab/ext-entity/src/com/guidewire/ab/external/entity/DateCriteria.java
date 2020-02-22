package com.guidewire.ab.external.entity;

/**
 * 
        A component used as part of a larger search criteria entity. Encapsulates the information
        entered by the user to restrict the search to a particular date range. Specifies the date
        field to be restricted and allows the date range to be restricted either through a typelist of
        preset ranges (such as next 30 days) or through a start and end date.
        <p>
        Very similar to DateCriterionChoice, but DateCriterionChoice supports configurable search.
        (See the Configuration Guide for details of customizing search screens.)
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DateCriteria extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The code for the "enteredrange" DateSearchType typekey.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CodeForDateRange")
  public java.lang.String getCodeForDateRange();


  /**
   * The code for the "fromlist" DateSearchType typekey.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CodeForFromList")
  public java.lang.String getCodeForFromList();


  /**
   * The date field which is being restricted. The available choices are filtered by the SearchType field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateFieldToSearch")
  public com.guidewire.ab.external.typelist.DateFieldsToSearchType getDateFieldToSearch();

  /**
   * The date field which is being restricted. The available choices are filtered by the SearchType field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateFieldToSearch")
  public void setDateFieldToSearch(com.guidewire.ab.external.typelist.DateFieldsToSearchType value);


  /**
   * The list of available date fields to search, as filtered by the SearchType.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateFieldToSearchList")
  public com.guidewire.ab.external.typelist.DateFieldsToSearchType[] getDateFieldToSearchList();


  /**
   * The chosen preset date range, if any. The available ranges are filtered by the SearchType field. Used if DateSearchType is "fromlist".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateRangeChoice")
  public com.guidewire.ab.external.typelist.DateRangeChoiceType getDateRangeChoice();

  /**
   * The chosen preset date range, if any. The available ranges are filtered by the SearchType field. Used if DateSearchType is "fromlist".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateRangeChoice")
  public void setDateRangeChoice(com.guidewire.ab.external.typelist.DateRangeChoiceType value);


  /**
   * The list of available date range choices (preset date ranges), as filtered by the SearchType.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateRangeChoiceList")
  public com.guidewire.ab.external.typelist.DateRangeChoiceType[] getDateRangeChoiceList();


  /**
   * True if DateSearchType is "enteredrange", false if it is "fromlist".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateRangeSearch")
  public boolean isDateRangeSearch();


  /**
   * The date range to be search as specified either by the DateRangeChoice (if DateSearchType is
"fromlist") or the StartDate and EndDate (if DateSearchType is "enteredrange").
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateRangeToSearch")
  public external.gw.api.database.DBDateRange getDateRangeToSearch();


  /**
   * The type of date search, either "fromlist" (for a preset range) or "enteredrange" (for an explicitly entered range).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateSearchType")
  public com.guidewire.ab.external.typelist.DateSearchType getDateSearchType();

  /**
   * The type of date search, either "fromlist" (for a preset range) or "enteredrange" (for an explicitly entered range).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DateSearchType")
  public void setDateSearchType(com.guidewire.ab.external.typelist.DateSearchType value);


  /**
   * The end (inclusive) of the date range to which the chosen date field should be restricted.  Used if DateSearchType is "enteredrange".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EndDate")
  public java.util.Date getEndDate();

  /**
   * The end (inclusive) of the date range to which the chosen date field should be restricted.  Used if DateSearchType is "enteredrange".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EndDate")
  public void setEndDate(java.util.Date value);


  /**
   * True if DateSearchType is "fromlist", false if it is "enteredrange".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FromListSearch")
  public boolean isFromListSearch();


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
   * The type of search, filters the date fields allowed in the DateFieldToSearch field and the preset ranges allowed in the DateRangeChoice field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SearchType")
  public com.guidewire.ab.external.typelist.SearchObjectType getSearchType();

  /**
   * The type of search, filters the date fields allowed in the DateFieldToSearch field and the preset ranges allowed in the DateRangeChoice field.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SearchType")
  public void setSearchType(com.guidewire.ab.external.typelist.SearchObjectType value);


  /**
   * True if any of the fields in this criteria object are set. False if no fields are set, so the
criteria should not affect the search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Set")
  public boolean isSet();


  /**
   * The start (inclusive) of the date range to which the chosen date field should be restricted. Used if DateSearchType is "enteredrange".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartDate")
  public java.util.Date getStartDate();

  /**
   * The start (inclusive) of the date range to which the chosen date field should be restricted. Used if DateSearchType is "enteredrange".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartDate")
  public void setStartDate(java.util.Date value);

  /**
   * The code for the given type key.
   *
   * @param typeKey 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCodeForTypeKey")
  public java.lang.String getCodeForTypeKey(gw.pl.external.typelist.TypeKey typeKey);

  /**
   * The name of the given type key.
   *
   * @param typeKey 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNameForTypeKey")
  public java.lang.String getNameForTypeKey(gw.pl.external.typelist.TypeKey typeKey);

  /**
   * Set the StartDate and EndDate fields according to the given date range, and set DateSearchType
to "enteredrange".
   *
   * @param dateRange 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setFromRange")
  public void setFromRange(external.gw.api.database.DBDateRange dateRange);


  /**
   * Utility class for initializing an instance of DateCriteria
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DateCriteria.
     */
    public static DateCriteria newInstance()
    {
      return (DateCriteria) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DateCriteria.class);
    }
  }

}
