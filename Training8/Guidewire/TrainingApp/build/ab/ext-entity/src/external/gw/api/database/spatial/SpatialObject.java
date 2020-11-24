package external.gw.api.database.spatial;

/**
 * Superclass for spatial geometry data objects
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface SpatialObject extends external.gw.pl.util.webservices.GWRemotable
{
  /**
   * the Well-Known Text for this geometry object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WellKnownText")
  public java.lang.String getWellKnownText();
}
