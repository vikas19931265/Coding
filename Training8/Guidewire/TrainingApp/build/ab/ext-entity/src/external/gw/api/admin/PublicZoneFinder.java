package external.gw.api.admin;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PublicZoneFinder
{

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findAdminZones")
  public external.gw.api.database.IQueryBeanResult findAdminZones();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findLoadedCountries")
  public java.util.Set findLoadedCountries();



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZone")
  public com.guidewire.ab.external.entity.Zone findZone(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 Zone
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZoneCodes")
  public java.lang.String[] findZoneCodes(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, com.guidewire.ab.external.entity.Zone param2);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZones")
  public external.gw.api.database.IQueryBeanResult findZones(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZones")
  public external.gw.api.database.IQueryBeanResult findZones(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String[] param2);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   * @param param3 ZoneType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZones")
  public external.gw.api.database.IQueryBeanResult findZones(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2, com.guidewire.ab.external.typelist.ZoneType param3);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   * @param param3 ZoneType
   * @param param4 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZones")
  public external.gw.api.database.IQueryBeanResult findZones(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2, com.guidewire.ab.external.typelist.ZoneType param3, java.lang.String param4);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   * @param param3 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZonesByCode")
  public external.gw.api.database.IQueryBeanResult findZonesByCode(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2, boolean param3);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   * @param param3 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZonesByName")
  public external.gw.api.database.IQueryBeanResult findZonesByName(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2, boolean param3);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   * @param param3 ZoneType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZonesByName")
  public external.gw.api.database.IQueryBeanResult findZonesByName(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2, com.guidewire.ab.external.typelist.ZoneType param3);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   * @param param3 ZoneType
   * @param param4 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZonesByName")
  public external.gw.api.database.IQueryBeanResult findZonesByName(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2, com.guidewire.ab.external.typelist.ZoneType param3, java.lang.String param4);



  /**
   * null
   *
   * @param param ZoneType
   * @param param1 String[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findZonesInAllCountries")
  public external.gw.api.database.IQueryBeanResult findZonesInAllCountries(com.guidewire.ab.external.typelist.ZoneType param, java.lang.String[] param1);



  /**
   * null
   *
   * @param param Country
   * @param param1 ZoneType
   * @param param2 String
   * @param param3 ZoneType
   * @param param4 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasLink")
  public boolean hasLink(com.guidewire.ab.external.typelist.Country param, com.guidewire.ab.external.typelist.ZoneType param1, java.lang.String param2, com.guidewire.ab.external.typelist.ZoneType param3, java.lang.String param4);

}
