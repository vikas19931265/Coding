package com.guidewire.ab.external.entity;

/**
 * Array of document search results
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DocumentSearchResult extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * Returns the Document search results encapsulated by this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Summaries")
  public com.guidewire.ab.external.entity.Document[] getSummaries();

  /**
   * Returns the Document search results encapsulated by this object.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Summaries")
  public void setSummaries(com.guidewire.ab.external.entity.Document[] value);


  /**
   * Gets the total number of results. Should only be populated if the corresponding DocumentSearchResultSpec has includeTotal = true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalResults")
  public java.lang.Integer getTotalResults();

  /**
   * Gets the total number of results. Should only be populated if the corresponding DocumentSearchResultSpec has includeTotal = true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalResults")
  public void setTotalResults(java.lang.Integer value);

  /**
   * 
   *
   * @param summary 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToSummaries")
  public void addToSummaries(com.guidewire.ab.external.entity.Document summary);

  /**
   * 
   *
   * @param summaries 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setSummaries")
  public void setSummaries_Method(com.guidewire.ab.external.entity.Document[] summaries);


  /**
   * Utility class for initializing an instance of DocumentSearchResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity DocumentSearchResult.
     */
    public static DocumentSearchResult newInstance()
    {
      return (DocumentSearchResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(DocumentSearchResult.class);
    }
  }

}
