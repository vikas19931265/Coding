package external.gw.api.webservice.addressbook.contactapi;

/**
 * Specifies search result control parameters.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactAPISearchSpec extends external.gw.pl.util.webservices.GWRemotable
{


  /**
   * Specifies the number of results to return.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ChunkSize")
  public int getChunkSize();

  /**
   * Specifies the number of results to return.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ChunkSize")
  public void setChunkSize(int value);


  /**
   * Determines whether to exclude the total number of results in the search result.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExcludeTotal")
  public boolean isExcludeTotal();

  /**
   * Determines whether to exclude the total number of results in the search result.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExcludeTotal")
  public void setExcludeTotal(boolean value);


  /**
   * If true, only number of results will be returned, not the results.
        This is very useful in paging.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GetNumResultsOnly")
  public boolean isGetNumResultsOnly();

  /**
   * If true, only number of results will be returned, not the results.
        This is very useful in paging.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GetNumResultsOnly")
  public void setGetNumResultsOnly(boolean value);


  /**
   * Specifies the sort order of the results. Either null or an empty array can be used to specify
        that order of results is unimportant.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SortColumns")
  public external.gw.api.webservice.addressbook.contactapi.ABContactSearchSortColumn[] getSortColumns();

  /**
   * Specifies the sort order of the results. Either null or an empty array can be used to specify
        that order of results is unimportant.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SortColumns")
  public void setSortColumns(external.gw.api.webservice.addressbook.contactapi.ABContactSearchSortColumn[] value);


  /**
   * Specifies the first row to return.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StartRow")
  public int getStartRow();

  /**
   * Specifies the first row to return.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "StartRow")
  public void setStartRow(int value);


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
{@link com.guidewire.ab.external.entity.ABCompany}, {@link com.guidewire.ab.external.entity.ABPerson} and
{@link com.guidewire.ab.external.entity.ABPlace} instead of chosing specific search strategies for each subtype.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WideSearch")
  public boolean isWideSearch();

  /**
   * Determines whether to search a wider range of contacts. If true falls back to
{@link com.guidewire.ab.external.entity.ABCompany}, {@link com.guidewire.ab.external.entity.ABPerson} and
{@link com.guidewire.ab.external.entity.ABPlace} instead of chosing specific search strategies for each subtype.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WideSearch")
  public void setWideSearch(boolean value);

  /**
   * Converts this ABContactAPISearchSpec into an ABContactSearchSpec
   *
   * @return the ABContactSearchSpec populated from this
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toABContactSearchSpec")
  public external.gw.api.webservice.addressbook.contactapi.ABContactSearchSpec toABContactSearchSpec();


  /**
   * Utility class for initializing an instance of external.gw.api.webservice.addressbook.contactapi.ABContactAPISearchSpec
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ABContactAPISearchSpec newInstance()
    {
      return (ABContactAPISearchSpec) gw.pl.external.Invoker.getInstance().construct(external.gw.api.webservice.addressbook.contactapi.ABContactAPISearchSpec.class, new Class[]{ } , new Object[]{ });
    }

  }
}
