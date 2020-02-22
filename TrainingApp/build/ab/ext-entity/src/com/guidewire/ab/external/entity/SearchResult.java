package com.guidewire.ab.external.entity;

/**
 * 
        Base class use for the results of plugin search methods. The result encapsulates a Boolean value
        indicating if results were capped, and optionally the total number of matches that would have
        been returned had the results not been capped. The total number of matches is relevant only when
        the capped Boolean value is true.
        <p>
        This base class is of little interest on its own but provides basic functionality that may be
        useful for application specific subclasses.
      
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SearchResult extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
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
   * Returns true if and only if the results of the search have been capped, that is, if fewer results are contained in this result than actually satisfied the search criteria.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ResultsCapped")
  public java.lang.Boolean isResultsCapped();

  /**
   * Returns true if and only if the results of the search have been capped, that is, if fewer results are contained in this result than actually satisfied the search criteria.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ResultsCapped")
  public void setResultsCapped(java.lang.Boolean value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.SearchResult getSubtype();


  /**
   * Returns the total number of matches that would have been returned had the results not been capped, or null if the value is unknown. The result of this method is relevant only if ResultsCapped returns true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UncappedResultCount")
  public java.lang.Integer getUncappedResultCount();

  /**
   * Returns the total number of matches that would have been returned had the results not been capped, or null if the value is unknown. The result of this method is relevant only if ResultsCapped returns true.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UncappedResultCount")
  public void setUncappedResultCount(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of SearchResult
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity SearchResult.
     */
    public static SearchResult newInstance()
    {
      return (SearchResult) gw.pl.external.entity.EntityFactory.getInstance().newEntity(SearchResult.class);
    }
  }

}
