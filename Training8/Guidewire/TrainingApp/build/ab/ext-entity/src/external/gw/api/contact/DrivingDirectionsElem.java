package external.gw.api.contact;

/**
 * DrivingDirectionsElem One element of a set of driving directions
<p/>
This may represent either a discrete stage in the directions
("Turn left onto I-80 for 10 miles")
or a note or milestone not corresponding to a stage ("Start trip".)<p/>
The exact format and content of the textual description depends greatly on the Geocoding service used; in
particular, it may or may not include HTML formatting.<p/>
{@link DrivingDirections}
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DrivingDirectionsElem extends java.io.Serializable
{


  /**
   * Total driving distance for this stage, if any
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Distance")
  public java.math.BigDecimal getDistance();

  /**
   * Total driving distance for this stage, if any
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Distance")
  public void setDistance(java.math.BigDecimal value);


  /**
   * Returns the driving distance for this segment in a given unit.
Right now this only effects the display of the unit, and does NOT do conversions.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SegmentDistance")
  public java.lang.String getSegmentDistance();


  /**
   * Given a particular hop/segment, returns the time in minutes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SegmentTimeInMinutes")
  public java.lang.String getSegmentTimeInMinutes();


  /**
   * Instructions or description of this stage
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Text")
  public java.lang.String getText();

  /**
   * Instructions or description of this stage
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Text")
  public void setText(java.lang.String value);


  /**
   * Total Time in minutes for this stage, if any
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Time")
  public java.lang.Integer getTime();

  /**
   * Total Time in minutes for this stage, if any
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Time")
  public void setTime(java.lang.Integer value);


  /**
   * Gets the unit of distance for this stage, defaults to the system default unit of distance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnitOfDistance")
  public com.guidewire.ab.external.typelist.UnitOfDistance getUnitOfDistance();

  /**
   * Gets the unit of distance for this stage, defaults to the system default unit of distance
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "UnitOfDistance")
  public void setUnitOfDistance(com.guidewire.ab.external.typelist.UnitOfDistance value);


  /**
   * Utility class for initializing an instance of external.gw.api.contact.DrivingDirectionsElem
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DrivingDirectionsElem newInstance()
    {
      return (DrivingDirectionsElem) gw.pl.external.Invoker.getInstance().construct(external.gw.api.contact.DrivingDirectionsElem.class, new Class[]{ } , new Object[]{ });
    }

  }
}
