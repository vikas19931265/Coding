package com.guidewire.pl.plugin.geocode;

/**
 * This is an obsolete plugin interface used by the 4.0.x Geocoding system.  It has been superceded by
the GeocodePlugin interface in 5.0, and should only be used with existing 4.0.x plugins.  Writing new plugins
to this interface is not advisable.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGeocodePlugin extends gw.plugin.IPlugin
{

  /**
   * Synchronously geocode an ABAddress
   *
   * @return A Map mapping LATITUDE to the latitude, LONGITUDE to the longitude and GEOCODE_STATUS to the typecode for
        the geocode status.
   * @param addressData a Map from field names to values (both represented by Strings), representing a single ABAddress
                   object.  All values specified in the metadata are included, together with ID which maps to a
                   String representation of the numeric value of the primary key.
   * @deprecated entire class deprecated
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "geocodeAddress")
  public java.util.Map geocodeAddress(java.util.Map addressData) throws java.rmi.RemoteException;



  /**
   * Gets driving directions, driving time and a map illustrating the route between the two addresses.
If the remote provider does not support any of these features, just return null.
   *
   * @return a Map returning driving directions, driving time and a map illustrating the route between the two
        addresses.  In detail:
        <ul>
        <li>NUM_HOPS should map to the string representation of the number of segments in the route.
        <li>TOTAL_DRIVING_DISTANCE should map to the string representation of the number representing the
        total driving distance of the route (in whatever units were requested by the caller).
        <li>TOTAL_DRIVING_TIME should map to the string representation of the number representing the
        total driving time of the route, in seconds
        <li>HOP_DRIVING_DISTANCE should map to an array of Strings of length equal to the number of
        segments in the route.  Each String should be a representation of the length of the
        corresponding segment of the route, in the units specified by the caller.
        <li>HOP_DRIVING_TIME should map to an array of Strings of length equal to the number of
        segments in the route.  Each String should be a representation of the driving time of the
        corresponding segment of the route, in seconds.
        <li>HOP_TEXT should map to an array of Strings of length equal to the number of
        segments in the route.  Each String should be a description of the corresponding segment
        of the route.
        </ul>
   * @param startAddress The start address
   * @param finishAddress The finish address
   * @deprecated entire class deprecated
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTravelInformation")
  public java.util.Map getTravelInformation(java.util.Map startAddress, java.util.Map finishAddress) throws java.rmi.RemoteException;


  /**
   * Utility class for accessing static features for com.guidewire.pl.plugin.geocode.IGeocodePlugin
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static java.lang.String getDRIVING_DISTANCE_UNITS()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "DRIVING_DISTANCE_UNITS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGEOCODE_STATUS()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "GEOCODE_STATUS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getHOP_DRIVING_DISTANCE()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "HOP_DRIVING_DISTANCE");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getHOP_DRIVING_TIME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "HOP_DRIVING_TIME");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getHOP_TEXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "HOP_TEXT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getID()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "ID");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getLATITUDE()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "LATITUDE");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getLONGITUDE()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "LONGITUDE");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getMAP_URLS()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "MAP_URLS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getNUM_HOPS()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "NUM_HOPS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getTOTAL_DRIVING_DISTANCE()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "TOTAL_DRIVING_DISTANCE");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getTOTAL_DRIVING_TIME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(com.guidewire.pl.plugin.geocode.IGeocodePlugin.class, "TOTAL_DRIVING_TIME");
    }

  }
}
