package external.gw.api.webservice.addressbook.contactapi;

/**
 * This class has parameters related to paging and sorting in addition to the ContactManager specific
parameters in ABContactSearchSpecWithoutPaging.  This is used by non-UI code which has to
control paging and sorting.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSearchSpec extends external.gw.api.webservice.addressbook.contactapi.ABContactSearchSpecWithoutPaging, external.gw.pl.util.webservices.GWRemotable
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
   * Utility class for initializing an instance of external.gw.api.webservice.addressbook.contactapi.ABContactSearchSpec
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ABContactSearchSpec newInstance()
    {
      return (ABContactSearchSpec) gw.pl.external.Invoker.getInstance().construct(external.gw.api.webservice.addressbook.contactapi.ABContactSearchSpec.class, new Class[]{ } , new Object[]{ });
    }

  }
}
