package external.gw.api.webservice.addressbook.contactapi;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ABContactSearchResult extends external.gw.pl.util.webservices.GWRemotable
{


  /**
   * the search results
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Results")
  public com.guidewire.ab.external.entity.ABContact[] getResults();

  /**
   * the search results
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Results")
  public void setResults(com.guidewire.ab.external.entity.ABContact[] value);


  /**
   * an array of booleans indicating whether each result is an exact or potential match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ResultsExact")
  public boolean[] getResultsExact();

  /**
   * an array of booleans indicating whether each result is an exact or potential match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ResultsExact")
  public void setResultsExact(boolean[] value);


  /**
   * the total number of search results
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalResults")
  public int getTotalResults();

  /**
   * the total number of search results
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalResults")
  public void setTotalResults(int value);

  /**
   * This method provides a temporary way to convert from this
class to the old deprecated class, ABContactAPISearchResultHelper.
   *
   * @return ABContactAPISearchResultHelper
   * @deprecated (Since 8.0.0) This method will be removed in ContactManager 9.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toABContactAPISearchResultHelper")
  public external.gw.api.webservice.addressbook.contactapi.ABContactAPISearchResultHelper toABContactAPISearchResultHelper();


  /**
   * Utility class for initializing an instance of external.gw.api.webservice.addressbook.contactapi.ABContactSearchResult
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ABContactSearchResult newInstance()
    {
      return (ABContactSearchResult) gw.pl.external.Invoker.getInstance().construct(external.gw.api.webservice.addressbook.contactapi.ABContactSearchResult.class, new Class[]{ } , new Object[]{ });
    }

  }
}
