package com.guidewire.ab.external.entity;

/**
 * <p>
      Results of an external contact search ( <code>IContactSearchAdapter.searchContacts()</code>) containing a set of
      contact summary objects. Not all resulting contacts may be returned.  If the matching results exceeds the maximum
      number of result rows, then only the system returns only the first <i>n</i> contact summary objects.
      See <code>IContactSearchAdapter</code> for details about external searches.</p>
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ExtContactSrchResult extends com.guidewire.ab.external.entity.SearchResult
{


  /**
   * Set of contact summaries returned from the search. If no results match the search criteria,
then this is empty (not null).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Results")
  public com.guidewire.ab.external.entity.Contact[] getResults();

  /**
   * Set of contact summaries returned from the search. If no results match the search criteria,
then this is empty (not null).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Results")
  public void setResults(com.guidewire.ab.external.entity.Contact[] value);

  /**
   * Adds one item to the set of contact summaries returned from the search.
   *
   * @param result a contact summary
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToResults")
  public void addToResults(com.guidewire.ab.external.entity.Contact result);

  /**
   * Sets what contact summaries returned from the search. If no results match the search criteria,
then this should be passed an empty array.
   *
   * @param results an array containing the set of contact summaries returned from the search, or an empty array
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setResults")
  public void setResults_Method(com.guidewire.ab.external.entity.Contact[] results);


  /**
   * Utility class for initializing an instance of ExtContactSrchResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ExtContactSrchResult.
     */
    public static ExtContactSrchResult newInstance()
    {
      return (ExtContactSrchResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ExtContactSrchResult.class);
    }
  }

}
