package com.guidewire.ab.external.entity;

/**
 * <p>
      Encapsulates the set of additional criteria needed to perform a proximity search. This entity is
      a child object to the <code>ContactSearchCriteria</code> entity.
      </p><p>
      Note that there are two ways to specify the origin location for a proximity search: the Geocode fields on
      the <code>ProximitySearchParameters</code> itself (SpatialPoint/GeocodeStatus) or the
      <code>ConstactSearchCriteria.ProximitySearchCenter</code> field. If both are set prior to performing the search,
      the system will use Geocode fields and ignore the <code>ProximitySearchCenter</code> field.</p>
      <p>
      See <code>ContactSearchCriteria</code> for more information
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ProximitySearchParameters extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * The corrected address (if any) corresponding to the SpatialPoint of that is being searched for, in localized/user-displayable form. This is normally set by the ProximitySearchPageHelper.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedSearchCenter")
  public java.lang.String getCorrectedSearchCenter();

  /**
   * The corrected address (if any) corresponding to the SpatialPoint of that is being searched for, in localized/user-displayable form. This is normally set by the ProximitySearchPageHelper.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedSearchCenter")
  public void setCorrectedSearchCenter(java.lang.String value);


  /**
   * Indicates whether this is a distance based search (within n-mi/km) or an ordinal search (nearest-n)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DistanceBasedSearch")
  public java.lang.Boolean isDistanceBasedSearch();

  /**
   * Indicates whether this is a distance based search (within n-mi/km) or an ordinal search (nearest-n)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "DistanceBasedSearch")
  public void setDistanceBasedSearch(java.lang.Boolean value);


  /**
   * Gives the status of the provided SpatialPoint; this is normally copied from the a Geocodable entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GeocodeStatus")
  public com.guidewire.ab.external.typelist.GeocodeStatus getGeocodeStatus();

  /**
   * Gives the status of the provided SpatialPoint; this is normally copied from the a Geocodable entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GeocodeStatus")
  public void setGeocodeStatus(com.guidewire.ab.external.typelist.GeocodeStatus value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Returns a localized, human-readable string for indicated search, such as "10 miles" or "5 closest".
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Label")
  public java.lang.String getLabel();


  /**
   * Indicates either the radius (in UnitOfDistance units) if a distance based search, or the number of results to return if an ordinal search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Number")
  public java.lang.Integer getNumber();

  /**
   * Indicates either the radius (in UnitOfDistance units) if a distance based search, or the number of results to return if an ordinal search.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Number")
  public void setNumber(java.lang.Integer value);


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
   * Indicates the maximum number of items to return on a radius search.  Ignored if DistanceBasedSearch is false; if DistanceBasedSearch is true, and this value is null, zero, or negative, the search will be limited by the value of ProximityRadiusSearchDefaultMaxResultCount
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RadiusSearchMaxResults")
  public java.lang.Integer getRadiusSearchMaxResults();

  /**
   * Indicates the maximum number of items to return on a radius search.  Ignored if DistanceBasedSearch is false; if DistanceBasedSearch is true, and this value is null, zero, or negative, the search will be limited by the value of ProximityRadiusSearchDefaultMaxResultCount
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RadiusSearchMaxResults")
  public void setRadiusSearchMaxResults(java.lang.Integer value);


  /**
   * Used internally by ProximitySearchPageHelper to save the search center address (if any) in standardized form; DO NOT USE unless you are overriding the standard performProximitySearch() method.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SavedSearchCenter")
  public java.lang.String getSavedSearchCenter();

  /**
   * Used internally by ProximitySearchPageHelper to save the search center address (if any) in standardized form; DO NOT USE unless you are overriding the standard performProximitySearch() method.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SavedSearchCenter")
  public void setSavedSearchCenter(java.lang.String value);


  /**
   * Checks if fields are populated indicating that a proximity search is intended.
Note that this does not
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SearchValid")
  public boolean isSearchValid();


  /**
   * SpatialPoint to do a proximity search from; this is normally copied from the a Geocodable entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SpatialPoint")
  public external.gw.api.database.spatial.SpatialPoint getSpatialPoint();

  /**
   * SpatialPoint to do a proximity search from; this is normally copied from the a Geocodable entity.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SpatialPoint")
  public void setSpatialPoint(external.gw.api.database.spatial.SpatialPoint value);


  /**
   * Indicates the UnitOfDistance to use, both to return distances in results and to indicate the unit of radius for distance-based searches.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnitOfDistance")
  public com.guidewire.ab.external.typelist.UnitOfDistance getUnitOfDistance();

  /**
   * Indicates the UnitOfDistance to use, both to return distances in results and to indicate the unit of radius for distance-based searches.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UnitOfDistance")
  public void setUnitOfDistance(com.guidewire.ab.external.typelist.UnitOfDistance value);


  /**
   * Returns a localized, human-readable string for the type of search, either the Unit of Distance or
a localized string indicating "closest."
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnitsString")
  public java.lang.String getUnitsString();

  /**
   * Checks if the proximity search parameters have a valid longitude and latitude
such that a search can be completed without a proximitySearchCenter set.
   *
   * @return true, if the fields are filled in appropriately
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsValidGeocodeForSearch")
  public boolean containsValidGeocodeForSearch();

  /**
   * Takes a Latitude and Longitude pair, and sets the SpatialPoint and GeocodeStatus based on them.
   *
   * @param latitude 
   * @param longitude 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setGeocodeFieldsFromLatLong")
  public void setGeocodeFieldsFromLatLong(java.math.BigDecimal latitude, java.math.BigDecimal longitude);


  /**
   * Utility class for initializing an instance of ProximitySearchParameters
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ProximitySearchParameters.
     */
    public static ProximitySearchParameters newInstance()
    {
      return (ProximitySearchParameters) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ProximitySearchParameters.class);
    }
  }

}
