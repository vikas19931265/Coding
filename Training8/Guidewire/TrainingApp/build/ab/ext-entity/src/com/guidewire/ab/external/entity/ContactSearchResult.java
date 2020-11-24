package com.guidewire.ab.external.entity;

/**
 * 
      ContactSearchResult has been deprecated since ClaimCenter 8.0 along with IAddressBookAdapter.
      <p>Represents the set of results and additional information returned by an Address Book search.
      See the <code>IAddressBookAdapter</code> for information on searching for contacts.
      </p>
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ContactSearchResult extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Gets the Contact that was matched, or null if none.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Contact")
  public com.guidewire.ab.external.entity.Contact getContact();

  /**
   * Gets the Contact that was matched, or null if none.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Contact")
  public void setContact(com.guidewire.ab.external.entity.Contact value);


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
   * Provides more detail about the result of the match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ResultType")
  public com.guidewire.ab.external.typelist.ContactMatchResultType getResultType();

  /**
   * Provides more detail about the result of the match.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ResultType")
  public void setResultType(com.guidewire.ab.external.typelist.ContactMatchResultType value);


  /**
   * Gets the results. Length should not be greater than the maxResults setting
in the corresponding RemotableSearchResultSpec. If there is at least one
result, the first result should correspond to the startRow setting in the
corresponding RemotableSearchResultSpec. Order should depend on the sort
settings.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Results")
  public com.guidewire.ab.external.entity.Contact[] getResults();

  /**
   * Gets the results. Length should not be greater than the maxResults setting
in the corresponding RemotableSearchResultSpec. If there is at least one
result, the first result should correspond to the startRow setting in the
corresponding RemotableSearchResultSpec. Order should depend on the sort
settings.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Results")
  public void setResults(com.guidewire.ab.external.entity.Contact[] value);


  /**
   * Indicates wheather the search succeeded of failed, and if failed, why.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SearchResultType")
  public com.guidewire.ab.external.typelist.ContactSearchResultType getSearchResultType();

  /**
   * Indicates wheather the search succeeded of failed, and if failed, why.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SearchResultType")
  public void setSearchResultType(com.guidewire.ab.external.typelist.ContactSearchResultType value);


  /**
   * Gets the total number of results. This will only be populated if the corresponding ContactSearchResultSpec has includeTotal = true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalResults")
  public java.lang.Integer getTotalResults();

  /**
   * Gets the total number of results. This will only be populated if the corresponding ContactSearchResultSpec has includeTotal = true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalResults")
  public void setTotalResults(java.lang.Integer value);

  /**
   * 
   *
   * @param result 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToResults")
  public void addToResults(com.guidewire.ab.external.entity.Contact result);

  /**
   * Sets the results. Length should not be greater than the maxResults setting
in the corresponding RemotableSearchResultSpec. If there is at least one
result, the first result should correspond to the startRow setting in the
corresponding RemotableSearchResultSpec. Order should depend on the sort
settings.
   *
   * @param results 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setResults")
  public void setResults_Method(com.guidewire.ab.external.entity.Contact[] results);


  /**
   * Utility class for initializing an instance of ContactSearchResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ContactSearchResult.
     */
    public static ContactSearchResult newInstance()
    {
      return (ContactSearchResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ContactSearchResult.class);
    }
  }

}
