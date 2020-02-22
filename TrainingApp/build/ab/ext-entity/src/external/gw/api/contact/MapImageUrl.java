package external.gw.api.contact;

/**
 * MapImageUrl
The URL where an image of a map can be found.  A set of MapImageUrl entities will be associated with a given
DrivingDirections entity if a Geocoding service supports mapping.<p/>
{@link com.guidewire.pl.domain.contact.DrivingDirections}]]>
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MapImageUrl extends java.io.Serializable
{


  /**
   * Wraps a MapImageURL inside a HTML IMG tag, for display in the Guidewire UI.
This is used primarily in AddressBookDirectionsDV.pcf ; it should be displayed in a VerbatimCell.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MapImageTag")
  public java.lang.String getMapImageTag();


  /**
   * The URL of the Map image.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MapImageUrl")
  public java.lang.String getMapImageUrl();

  /**
   * The URL of the Map image.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MapImageUrl")
  public void setMapImageUrl(java.lang.String value);


  /**
   * Utility class for initializing an instance of external.gw.api.contact.MapImageUrl
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static MapImageUrl newInstance()
    {
      return (MapImageUrl) gw.pl.external.Invoker.getInstance().construct(external.gw.api.contact.MapImageUrl.class, new Class[]{ } , new Object[]{ });
    }

  }
}
