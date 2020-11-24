package external.gw.api.webservice.addressbook.contactapi;

/**
 * Specifies various parameters to control search.  Doesn't not include parameters related to paging and sorting.
Pebbles handles that stuff for the UI separately.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSearchSpecWithoutPaging extends external.gw.pl.util.webservices.GWRemotable
{


  /**
   * Determines whether to include the pending creates in the search result.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludePendingCreates")
  public boolean isIncludePendingCreates();

  /**
   * Determines whether to include the pending creates in the search result.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "IncludePendingCreates")
  public void setIncludePendingCreates(boolean value);


  /**
   * Specifies the subtypes to filter out. null can be used to specify that no filtering is needed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SubtypeFilter")
  public external.gw.api.webservice.addressbook.contactapi.ABContactSubtypeFilter getSubtypeFilter();

  /**
   * Specifies the subtypes to filter out. null can be used to specify that no filtering is needed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SubtypeFilter")
  public void setSubtypeFilter(external.gw.api.webservice.addressbook.contactapi.ABContactSubtypeFilter value);


  /**
   * the matcher for restricting tags
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TagMatcher")
  public external.gw.api.webservice.addressbook.contactapi.ABContactTagMatcher getTagMatcher();

  /**
   * the matcher for restricting tags
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TagMatcher")
  public void setTagMatcher(external.gw.api.webservice.addressbook.contactapi.ABContactTagMatcher value);


  /**
   * Determines whether to search a wider range of contacts. If true falls back to
{@link com.guidewire.ab.domain.addressbook.ABCompany}, {@link com.guidewire.ab.domain.addressbook.ABPerson} and
{@link com.guidewire.ab.domain.addressbook.ABPlace} instead of chosing specific search strategies for each subtype.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WideSearch")
  public boolean isWideSearch();

  /**
   * Determines whether to search a wider range of contacts. If true falls back to
{@link com.guidewire.ab.domain.addressbook.ABCompany}, {@link com.guidewire.ab.domain.addressbook.ABPerson} and
{@link com.guidewire.ab.domain.addressbook.ABPlace} instead of chosing specific search strategies for each subtype.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WideSearch")
  public void setWideSearch(boolean value);


  /**
   * Utility class for initializing an instance of external.gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ABContactSearchSpecWithoutPaging newInstance()
    {
      return (ABContactSearchSpecWithoutPaging) gw.pl.external.Invoker.getInstance().construct(external.gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging.class, new Class[]{ } , new Object[]{ });
    }

  }
}
