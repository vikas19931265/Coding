package external.gw.api.contact;

/**
 * Contains directions for driving between a pair of addresses, as well as the total driving distance and
estimated total driving time.  The detailed directions are provided as an array of DrivingDirectionsElem.<p/>
If provided by the Geocoding service used, a set of maps representing the detailed directions is provided
as an array of MapImageUrls. Note that there is no direct mapping between the the size of the DrivingDirectionsElem
array and the size of the MapImageUrls; maps may represent either individual stages or multiple stages.<p/>
{@link external.gw.api.contact.DrivingDirectionsElem}<br/>
{@link external.gw.api.contact.MapImageUrl}]]>
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DrivingDirections extends java.io.Serializable
{


  /**
   * Array of components of driving directions.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Elements")
  public external.gw.api.contact.DrivingDirectionsElem[] getElements();


  /**
   * Description of finish address
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Finish")
  public java.lang.String getFinish();

  /**
   * Description of finish address
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Finish")
  public void setFinish(java.lang.String value);


  /**
   * Great-circle distance from start to finish, in the units specified in UnitOfDistance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GCDistance")
  public java.math.BigDecimal getGCDistance();

  /**
   * Great-circle distance from start to finish, in the units specified in UnitOfDistance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GCDistance")
  public void setGCDistance(java.math.BigDecimal value);


  /**
   * Returns the great circle distance as a user-friendly string, including a short,
localized suffix (ie "mi." or "km.").
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GCDistanceString")
  public java.lang.String getGCDistanceString();


  /**
   * URL of overview map showing entire journey
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MapOverviewUrl")
  public external.gw.api.contact.MapImageUrl getMapOverviewUrl();

  /**
   * URL of overview map showing entire journey
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MapOverviewUrl")
  public void setMapOverviewUrl(external.gw.api.contact.MapImageUrl value);


  /**
   * URLs of maps of parts of the journey can be found.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MapURLs")
  public external.gw.api.contact.MapImageUrl[] getMapURLs();


  /**
   * Description of start address
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Start")
  public java.lang.String getStart();

  /**
   * Description of start address
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Start")
  public void setStart(java.lang.String value);


  /**
   * Total driving distance from start to finish, in the units specified in UnitOfDistance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalDistance")
  public java.math.BigDecimal getTotalDistance();

  /**
   * Total driving distance from start to finish, in the units specified in UnitOfDistance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalDistance")
  public void setTotalDistance(java.math.BigDecimal value);


  /**
   * Returns the total driving distance as a user-friendly string, including a short,
localized suffix (ie "mi." or "km.").
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalDistanceString")
  public java.lang.String getTotalDistanceString();


  /**
   * Total Time in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalTime")
  public java.lang.Integer getTotalTime();

  /**
   * Total Time in seconds
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TotalTime")
  public void setTotalTime(java.lang.Integer value);


  /**
   * Returns the total travel time in minutes as a user-friendly string, including a short,
localized suffix (ie "min.").
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalTimeInMinutes")
  public java.lang.String getTotalTimeInMinutes();


  /**
   * Unit of distance for great circle and also for driving directions
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnitOfDistance")
  public com.guidewire.ab.external.typelist.UnitOfDistance getUnitOfDistance();

  /**
   * Unit of distance for great circle and also for driving directions
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UnitOfDistance")
  public void setUnitOfDistance(com.guidewire.ab.external.typelist.UnitOfDistance value);

  /**
   * Adds a new stage (instance of DrivingDirectionsElem) to these directions.
   *
   * @param formattedDirections text (optionally including html) directions for this stage
   * @param distance distance for this stage, (a double, in this Directions UnitOfDistance); may be null, indicating no distance or an informational note
   * @param duration duration/time for this stage in seconds; may be zero, indicating no time or an informational note
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addNewElement")
  public void addNewElement(java.lang.String formattedDirections, java.lang.Double distance, java.lang.Integer duration);

  /**
   * Adds a new stage (instance of DrivingDirectionsElem) to these directions.
   *
   * @param formattedDirections text (optionally including html) directions for this stage
   * @param distance distance for this stage, (a double, in this Directions UnitOfDistance); may be null, indicating no distance or an informational note
   * @param duration duration/time for this stage in seconds; may be zero, indicating no time or an informational note
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addNewElement")
  public void addNewElement(java.lang.String formattedDirections, java.math.BigDecimal distance, java.lang.Integer duration);

  /**
   * Adds a new URL to the Map URLs array.
   *
   * @param url 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addNewMapURL")
  public void addNewMapURL(java.lang.String url);

  /**
   * URL of overview map showing entire journey
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasMapOverviewUrl")
  public java.lang.Boolean hasMapOverviewUrl();

  /**
   * URL of overview map showing entire journey
   *
   * @param value URL of overview map showing entire journey, as a String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setMapOverviewUrl")
  public void setMapOverviewUrl(java.lang.String value);

  /**
   * Total driving distance from start to finish, in millimeters
   *
   * @param value 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setTotalDistanceInMM")
  public void setTotalDistanceInMM(java.lang.Long value);


  /**
   * Utility class for accessing static features for external.gw.api.contact.DrivingDirections
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * This is a helper to prepare the standard fields on a driving direction object.  This automatically sets the start and finish
addresses, and calculates the great circle distance based on the addresses and unit of distance provided.
     *
     * @param startAddress 
     * @param endAddress 
     * @param unit 
     */
    public static external.gw.api.contact.DrivingDirections createPreparedDrivingDirections(com.guidewire.ab.external.entity.Address startAddress, com.guidewire.ab.external.entity.Address endAddress, com.guidewire.ab.external.typelist.UnitOfDistance unit)
    {
      return (external.gw.api.contact.DrivingDirections) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.contact.DrivingDirections.class, "createPreparedDrivingDirections", new Class[]{ com.guidewire.ab.external.entity.Address.class, com.guidewire.ab.external.entity.Address.class, com.guidewire.ab.external.typelist.UnitOfDistance.class} , new Object[]{ startAddress, endAddress, unit});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.contact.DrivingDirections
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DrivingDirections newInstance()
    {
      return (DrivingDirections) gw.pl.external.Invoker.getInstance().construct(external.gw.api.contact.DrivingDirections.class, new Class[]{ } , new Object[]{ });
    }

  }
}
