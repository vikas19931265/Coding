package com.guidewire.ab.external.entity;

/**
 * 
        A component used as part of a larger search criteria entity. Encapsulates the information
        entered by the user to restrict the search to a particular date range. Specifies the date
        field to be restricted and allows the date range to be restricted either through a typelist of
        preset ranges (such as next 30 days) or through a start and end date.
        <p>
        Very similar to DateCriteria, but DateCriterionChoice supports configurable search.
        (See the Configuration Guide for details of customizing search screens.)
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DateCriterionChoice extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The chosen configurable search option, specifies the date field to be restricted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChosenOption")
  public java.lang.String getChosenOption();

  /**
   * The chosen configurable search option, specifies the date field to be restricted.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ChosenOption")
  public void setChosenOption(java.lang.String value);


  /**
   * The chosen preset date range, if any. The available ranges are filtered by the SearchType field. Used if DateSearchType is "fromlist". NOTE: when inserting a DateCriterionChoice this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateRangeChoice")
  public com.guidewire.ab.external.typelist.DateRangeChoiceType getDateRangeChoice();

  /**
   * The chosen preset date range, if any. The available ranges are filtered by the SearchType field. Used if DateSearchType is "fromlist". NOTE: when inserting a DateCriterionChoice this field must be non-null.
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
   * The type of date search, either "fromlist" (for a preset range) or "enteredrange" (for an explicitly entered range). NOTE: when inserting a DateCriterionChoice this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DateSearchType")
  public com.guidewire.ab.external.typelist.DateSearchType getDateSearchType();

  /**
   * The type of date search, either "fromlist" (for a preset range) or "enteredrange" (for an explicitly entered range). NOTE: when inserting a DateCriterionChoice this field must be non-null.
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
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * The list of options specifying which field to search. This list is populated by the
configurable search mechanism. Each option is described by a display key name, as
given in the search-config.xml file.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Options")
  public java.lang.String[] getOptions();

  /**
   * The list of options specifying which field to search. This list is populated by the
configurable search mechanism. Each option is described by a display key name, as
given in the search-config.xml file.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Options")
  public void setOptions(java.lang.String[] value);


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
   * The type of search, filters the preset ranges allowed in the DateRangeChoice field. NOTE: when inserting a DateCriterionChoice this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SearchType")
  public com.guidewire.ab.external.typelist.SearchObjectType getSearchType();

  /**
   * The type of search, filters the preset ranges allowed in the DateRangeChoice field. NOTE: when inserting a DateCriterionChoice this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SearchType")
  public void setSearchType(com.guidewire.ab.external.typelist.SearchObjectType value);


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
   * Utility class for initializing an instance of DateCriterionChoice
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DateCriterionChoice.
     */
    public static DateCriterionChoice newInstance()
    {
      return (DateCriterionChoice) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DateCriterionChoice.class);
    }
  }

}
