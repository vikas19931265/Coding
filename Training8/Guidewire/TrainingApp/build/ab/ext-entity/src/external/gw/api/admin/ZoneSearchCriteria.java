package external.gw.api.admin;

/**
 * Search criteria for zones.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ZoneSearchCriteria extends java.io.Serializable
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Country")
  public void setCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * the linked zone
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkedZone")
  public com.guidewire.ab.external.entity.Zone getLinkedZone();

  /**
   * the linked zone
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LinkedZone")
  public void setLinkedZone(com.guidewire.ab.external.entity.Zone value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ZoneType")
  public com.guidewire.ab.external.typelist.ZoneType getZoneType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ZoneType")
  public void setZoneType(com.guidewire.ab.external.typelist.ZoneType value);

  /**
   * 
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "performSearch")
  public com.guidewire.ab.external.entity.Zone[] performSearch();

  /**
   * Validates the criteria has the minimum values set.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "validate")
  public void validate();


  /**
   * Utility class for initializing an instance of external.gw.api.admin.ZoneSearchCriteria
   */
  public static class CONSTRUCT
  {

  }
}
