package com.guidewire.pl.plugin.geocode;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GeocodePlugin extends external.gw.api.startable.IStartablePlugin
{

  /**
   * Synchronously geocode an Address.  A new address entity will be returned containing either a GeocodeStatus of
Failure (if Geocoding did not succeed) or a GeocodeStatus indicating Success (exact, postalcode or city) plus the
best matching latitude and longitude.  If a network or transient error occurs, an exception must be thrown.

If corrections are supported (indicated by pluginSupportsCorrections() returns true) the non-geocode fields of the 
returned address must be set by plugin to reflect the actual address used for the best match latitude and
longitude.

If corrections are not supported, (indicated by pluginSupportsCorrections() returns false) the non-geocode fields
of the returned address must be set to the value to be displayed as the "actual serach center used" (although they
will not be logged to the database as corrections); as a general recommendation these should be a copy of the
original fields on the address provided for geocoding.
   *
   * @return a new address containing the geocodes found and the actual search center used; if corrections are
        supported, this must be the corrected address.
   * @param address an Address object, to be Geocoded. This address must not be modified by the method.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "geocodeAddressBestMatch")
  public com.guidewire.ab.external.entity.Address geocodeAddressBestMatch(com.guidewire.ab.external.entity.Address address) throws java.rmi.RemoteException;



  /**
   * Synchronously geocode an Address, returning a list of addresses which could match the provided address.
The first result in the list is used as the best match found.
   *
   * @return A list of addresses.  If the geocoding service supports multiple corrections, the first result  returned
        should be the best match available, and should match the Latitude and Longitude set on the original
        If the geocoding service does not support multiple corrections, this should be a singleton
        List containing the results of a call to geocodeAddressBestMatch (AbstractGeocodePlugin
        implements this default behavior.)
   * @param address an Address object, to be Geocoded. This address must not be modified by the method.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "geocodeAddressWithCorrections")
  public java.util.List geocodeAddressWithCorrections(com.guidewire.ab.external.entity.Address address) throws java.rmi.RemoteException;



  /**
   * Synchronously geocode an Address, returning a list of addresses which could match the provided address.
The first result in the list is used as the best match found.  This caps the number of results found.
   *
   * @return A list of addresses.  If the geocoding service supports multiple corrections, the first result returned
        should be the best match available, and should match the Latitude and Longitude set on the original
        If the geocoding service does not support multiple corrections, this should be a singleton
        List containing the results of a call to geocodeAddressBestMatch (AbstractGeocodePlugin
        implements this behavior.)
   * @param address an Address object, to be Geocoded. This address must not be modified by the method.
   * @param maxResults the maximum number of results to return, if a positive/non-zero integer.  Returns all results
                  if zero or negative.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "geocodeAddressWithCorrections")
  public java.util.List geocodeAddressWithCorrections(com.guidewire.ab.external.entity.Address address, int maxResults) throws java.rmi.RemoteException;



  /**
   * Retrieves from the external Geocoding service the list of possible addresses located at the Geocode
(latitude/longitude pair) provided.

By default, AbstractGeocodePlugin will wrap the return value of getAddressByGeocodeBestMatch in a singleton list.

If this method is implemented, pluginSupportsFindByGeocode() and pluginSupportsFindByGeocodeMultiple() should both
return true.

If finding by geocode is not supported, this must return one of: null, an empty list or a list containing a single
null element.
   *
   * @return A list of addresses, with geocode fields filled out, or null if no matches found.  The first result
        returned should be the best match available, and should have its geocode fields filled out (if no more
        precise geocodes are available, this can be the provided Latitude and Longitude.) If the geocoding service
        does not support multiple matches (pluginSupportsFindByGeocodeMultiple() returns true), this should be a
        singleton List containing the results of a call to getAddressByGeocodeBestMatch (AbstractGeocodePlugin
        implements this behavior.)  If finding by geocode is not supported, this must return null.
   * @param latitude 
   * @param longitude 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAddressByGeocode")
  public java.util.List getAddressByGeocode(java.math.BigDecimal latitude, java.math.BigDecimal longitude) throws java.rmi.RemoteException;



  /**
   * Retrieves from the external Geocoding service the list of possible addresses located at the Geocode
(latitude/longitude pair) provided.  This caps the number of results found.

By default, AbstractGeocodePlugin will wrap the return value of getAddressByGeocodeBestMatch in a singleton list.

If this method is implemented, pluginSupportsFindByGeocode() and pluginSupportsFindByGeocodeMultiple() should both
return true.

If finding by geocode is not supported, this must return one of: null, an empty list or a list containing a single
null element.
   *
   * @return A list of addresses, with geocode fields filled out, or null if no matches found.  The first result
        returned should be the best match available, and should have its geocode fields filled out (if no more
        precise geocodes are available, this can be the provided Latitude and Longitude.) If the geocoding service
        does not support multiple matches (pluginSupportsFindByGeocodeMultiple() returns true), this should be a
        singleton List containing the results of a call to getAddressByGeocodeBestMatch.
   * @param latitude 
   * @param longitude 
   * @param maxResults the maximum number of results to return, if a positive/non-zero integer.  Returns all results
                  if zero or negative.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAddressByGeocode")
  public java.util.List getAddressByGeocode(java.math.BigDecimal latitude, java.math.BigDecimal longitude, int maxResults) throws java.rmi.RemoteException;



  /**
   * Retrieves from the external Geocoding service that address which is the best match for the Geocode
(latitude/longitude pair) provided.

If this method is implemented, pluginSupportsFindByGeocode() should return true.

If finding by geocode is not supported, this must null.

AbstractGeocodePlugin implements this as "unimplemented" by returning null.
   *
   * @return An address providing the best match available for the provided Latitude and Longitude, or null if either
        no match was found, or this is not supported, and should have its geocode fields filled out (if no more
        precise geocodes are available, this can be the provided Latitude and Longitude.).
   * @param latitude 
   * @param longitude 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAddressByGeocodeBestMatch")
  public com.guidewire.ab.external.entity.Address getAddressByGeocodeBestMatch(java.math.BigDecimal latitude, java.math.BigDecimal longitude) throws java.rmi.RemoteException;



  /**
   * Gets driving directions, driving time and a map illustrating the route between the two addresses.
If the remote provider does not support any of these features, just return null.
If the remote provider does not support some of these features, that data on the DrivingDirections object should
be left as null.
   *
   * @return a DrivingDirections object, or null if directions are not supported.
   * @param startAddress The start address
   * @param finishAddress The finish address
   * @param unitOfDistance a unit of distance object indicating whether the directions should be in Metric or US/Imperial units.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDrivingDirections")
  public external.gw.api.contact.DrivingDirections getDrivingDirections(com.guidewire.ab.external.entity.Address startAddress, com.guidewire.ab.external.entity.Address finishAddress, com.guidewire.ab.external.typelist.UnitOfDistance unitOfDistance) throws java.rmi.RemoteException;



  /**
   * Gets a URL to a map showing the address provided. If not supported, returns null.
   *
   * @param address 
   * @param unit 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMapForAddress")
  public external.gw.api.contact.MapImageUrl getMapForAddress(com.guidewire.ab.external.entity.Address address, com.guidewire.ab.external.typelist.UnitOfDistance unit) throws java.rmi.RemoteException;



  /**
   * Gets a URL to a map showing the address provided. If not supported, returns null.

<b>Note that "options" is an opaque string; this is only useful if passed to a KNOWN plugin implementation.
Plugins should ignore unknown options.</b>
   *
   * @param address 
   * @param unit 
   * @param options 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMapForAddress")
  public external.gw.api.contact.MapImageUrl getMapForAddress(com.guidewire.ab.external.entity.Address address, com.guidewire.ab.external.typelist.UnitOfDistance unit, java.lang.String options) throws java.rmi.RemoteException;



  /**
   * Checks if the address to see if it has sufficiently complete information to Geocode it, without checking
the Geocoding service.
   *
   * @return true, if the address contains sufficient information
   * @param address the address to check for sufficient information
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isSufficientlyCompleteToGeocode")
  public boolean isSufficientlyCompleteToGeocode(com.guidewire.ab.external.entity.Address address);



  /**
   * 
   *
   * @return true, if the plugin returns an overview map with the driving directions
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginReturnsOverviewMapWithDrivingDirections")
  public boolean pluginReturnsOverviewMapWithDrivingDirections();



  /**
   * 
   *
   * @return true, if the plugin returns a set of step-by-step maps with the driving directions
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginReturnsStepByStepMapsWithDrivingDirections")
  public boolean pluginReturnsStepByStepMapsWithDrivingDirections();



  /**
   * 
   *
   * @return true, if the plugin returns a corrected address with geocodeAddressBestMatch; if it does not, it should
        return a copy of the provided address.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginSupportsCorrections")
  public boolean pluginSupportsCorrections();



  /**
   * 
   *
   * @return true, if the plugin supports calls to getDrivingDirections.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginSupportsDrivingDirections")
  public boolean pluginSupportsDrivingDirections();



  /**
   * 
   *
   * @return true, if the plugin supports generating a best-match address from a given Latitude/Longitude pair.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginSupportsFindByGeocode")
  public boolean pluginSupportsFindByGeocode();



  /**
   * 
   *
   * @return true, if the plugin supports generating a list of potential-match addresses from a given
               Latitude/Longitude pair.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginSupportsFindByGeocodeMultiple")
  public boolean pluginSupportsFindByGeocodeMultiple();



  /**
   * 
   *
   * @return true, if the plugin supports calls to getMapForAddress (to get a non-route map)
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginSupportsMappingByAddress")
  public boolean pluginSupportsMappingByAddress();



  /**
   * 
   *
   * @return true, if the plugin supports returning  multiple corrected addresses when geocodeAddressWithCorrections;
        if false, the return type of geocodeAddressWithCorrections should be a singleton list containing the
        results of a call to geocodeAddressBestMatch
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pluginSupportsMultipleCorrections")
  public boolean pluginSupportsMultipleCorrections();

}
