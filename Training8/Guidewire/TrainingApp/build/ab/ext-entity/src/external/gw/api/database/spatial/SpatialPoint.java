package external.gw.api.database.spatial;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SpatialPoint extends external.gw.api.database.spatial.SpatialObject
{


  /**
   * The latitude
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Latitude")
  public java.math.BigDecimal getLatitude();

  /**
   * The latitude
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Latitude")
  public void setLatitude(java.math.BigDecimal value);


  /**
   * The longitude
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Longitude")
  public java.math.BigDecimal getLongitude();

  /**
   * The longitude
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Longitude")
  public void setLongitude(java.math.BigDecimal value);


  /**
   * the well known text for this geometry object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WellKnownText")
  public java.lang.String getWellKnownText();


  /**
   * Utility class for accessing static features for external.gw.api.database.spatial.SpatialPoint
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * Parses the given Well-Known Text describing a point into a SpatialPoint instance.
     *
     * @return new SpatialPoint instance.
     * @param wellKnownText the Well-Known Text. It must describe a point.
     */
    public static external.gw.api.database.spatial.SpatialPoint parse(java.lang.String wellKnownText)
    {
      return (external.gw.api.database.spatial.SpatialPoint) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.database.spatial.SpatialPoint.class, "parse", new Class[]{ java.lang.String.class} , new Object[]{ wellKnownText});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.database.spatial.SpatialPoint
   */
  public static class CONSTRUCT
  {

    /**
     * Construct new SpatialPoint with given coordinates.
     *
     * @param longitude 
     * @param latitude 

     */
    public static SpatialPoint newInstance(java.lang.Number longitude, java.lang.Number latitude)
    {
      return (SpatialPoint) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.spatial.SpatialPoint.class, new Class[]{ java.lang.Number.class, java.lang.Number.class} , new Object[]{ longitude, latitude});
    }

    /**
     * Construct new SpatialPoint with given coordinates.
     *
     * @param longitude 
     * @param latitude 

     */
    public static SpatialPoint newInstance(java.lang.String longitude, java.lang.String latitude)
    {
      return (SpatialPoint) gw.pl.external.Invoker.getInstance().construct(external.gw.api.database.spatial.SpatialPoint.class, new Class[]{ java.lang.String.class, java.lang.String.class} , new Object[]{ longitude, latitude});
    }

  }
}
