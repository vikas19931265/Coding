package com.guidewire.ab.external.entity;

/**
 * 
      Represents a street or mailing address. Addresses are normally associated with
      a Contact, either as a Primary Address for that Contact or via the ContactAddress table. Addresses can
      have geographic location information stored for proximity searches.<p/>
      {@see com.guidewire.pl.domain.contact.Contact}<br/>
      {@see com.guidewire.pl.domain.contact.ContactAddress}
  
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Address extends com.guidewire.ab.external.entity.ABLinkable, com.guidewire.ab.external.entity.AddressAutofillable, com.guidewire.ab.external.entity.AddressBookLinkable, com.guidewire.ab.external.entity.HistoryEventContainer, com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Validatable, gw.pl.external.entity.Entity
{


  /**
   * The associated ABContact, if any
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();


  /**
   * The associated ABContactAddress, if any
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContactAddress")
  public com.guidewire.ab.external.entity.ABContactAddress getABContactAddress();


  /**
   * The system uses this value when it is integrated with ContactManager and the related contact             is linked.  In this case, the ID represents the ID of this </code>Address</code> object's associated             <code>ABAddress</code> in ContactManager. This value is Null if the object is not linked.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressBookUID")
  public java.lang.String getAddressBookUID();

  /**
   * The system uses this value when it is integrated with ContactManager and the related contact             is linked.  In this case, the ID represents the ID of this </code>Address</code> object's associated             <code>ABAddress</code> in ContactManager. This value is Null if the object is not linked.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressBookUID")
  public void setAddressBookUID(java.lang.String value);


  /**
   * First line of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1")
  public java.lang.String getAddressLine1();

  /**
   * First line of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine1")
  public void setAddressLine1(java.lang.String value);


  /**
   * First line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1Kanji")
  public java.lang.String getAddressLine1Kanji();

  /**
   * First line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine1Kanji")
  public void setAddressLine1Kanji(java.lang.String value);


  /**
   * Second line of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine2")
  public java.lang.String getAddressLine2();

  /**
   * Second line of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine2")
  public void setAddressLine2(java.lang.String value);


  /**
   * Second line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine2Kanji")
  public java.lang.String getAddressLine2Kanji();

  /**
   * Second line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine2Kanji")
  public void setAddressLine2Kanji(java.lang.String value);


  /**
   * Third line of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine3")
  public java.lang.String getAddressLine3();

  /**
   * Third line of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine3")
  public void setAddressLine3(java.lang.String value);


  /**
   * Type of this address record.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressType")
  public com.guidewire.ab.external.typelist.AddressType getAddressType();

  /**
   * Type of this address record.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressType")
  public void setAddressType(com.guidewire.ab.external.typelist.AddressType value);


  /**
   * Boolean field to mark an address to be geocoded (if needed) by the batch geocoding work queue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BatchGeocode")
  public java.lang.Boolean isBatchGeocode();

  /**
   * Boolean field to mark an address to be geocoded (if needed) by the batch geocoding work queue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "BatchGeocode")
  public void setBatchGeocode(java.lang.Boolean value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * CEDEX: Special business mail delivery flag (used only for French addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CEDEX")
  public java.lang.Boolean isCEDEX();

  /**
   * CEDEX: Special business mail delivery flag (used only for French addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CEDEX")
  public void setCEDEX(java.lang.Boolean value);


  /**
   * CEDEX: Special business mail delivery bureau (used only for French addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CEDEXBureau")
  public java.lang.String getCEDEXBureau();

  /**
   * CEDEX: Special business mail delivery bureau (used only for French addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CEDEXBureau")
  public void setCEDEXBureau(java.lang.String value);


  /**
   * City.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "City")
  public java.lang.String getCity();

  /**
   * City.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "City")
  public void setCity(java.lang.String value);


  /**
   * City in kanji (used only for Japanese addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CityKanji")
  public java.lang.String getCityKanji();

  /**
   * City in kanji (used only for Japanese addresses and will be null otherwise)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CityKanji")
  public void setCityKanji(java.lang.String value);


  /**
   * Returns City, State and ZIP in the standard "city, state ZIP" format
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CityStateZip")
  public java.lang.String getCityStateZip();


  /**
   * This gets a list of addresses which could match the provided address.
The first result in the list is used as the best match found.  This caps the number of results found.
<p/>
You can check if this is supported with a call to GeocodeUtils.currentPluginSupportsMultipleCorrections()
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectionsFromGeocodingPlugin")
  public java.util.List getCorrectionsFromGeocodingPlugin();


  /**
   * Country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();

  /**
   * Country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Country")
  public void setCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * County.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "County")
  public java.lang.String getCounty();

  /**
   * County.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "County")
  public void setCounty(java.lang.String value);


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * Additional description of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Additional description of mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FailureGeocoding")
  public boolean isFailureGeocoding();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullDisplayName")
  public java.lang.String getFullDisplayName();


  /**
   * Enum giving the status of the latitude and longitude data.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GeocodeStatus")
  public com.guidewire.ab.external.typelist.GeocodeStatus getGeocodeStatus();

  /**
   * Enum giving the status of the latitude and longitude data.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "GeocodeStatus")
  public void setGeocodeStatus(com.guidewire.ab.external.typelist.GeocodeStatus value);


  /**
   * History entries on this address
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "History")
  public com.guidewire.ab.external.entity.ContactAddressHistory[] getHistory();

  /**
   * History entries on this address
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "History")
  public void setHistory(com.guidewire.ab.external.entity.ContactAddressHistory[] value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Latitude expressed in degrees.  Positive = North; Negative = South: -90 <= x <= 90
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Latitude")
  public java.math.BigDecimal getLatitude();


  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkID")
  public java.lang.String getLinkID();

  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LinkID")
  public void setLinkID(java.lang.String value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Longitude expressed in degrees relative to the prime meridian.  Positive = East; Negative = West: -180 <= x < 180
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Longitude")
  public java.math.BigDecimal getLongitude();


  /**
   * Gets a URL to a map showing this address. If not supported by
the current geocode plugin, returns null.  Uses the system-default
unit of distance.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Map")
  public external.gw.api.contact.MapImageUrl getMap();


  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NeverGeocoded")
  public boolean isNeverGeocoded();


  /**
   * Postal code; string to handle Zip+4 and international codes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PostalCode")
  public java.lang.String getPostalCode();

  /**
   * Postal code; string to handle Zip+4 and international codes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PostalCode")
  public void setPostalCode(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Primary")
  public boolean isPrimary();


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReplacingAddress")
  public com.guidewire.ab.external.entity.Address getReplacingAddress();


  /**
   * Represents the LinkID of the address that replaced this address in the event of a merge.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReplacingAddressLinkID")
  public java.lang.String getReplacingAddressLinkID();

  /**
   * Represents the LinkID of the address that replaced this address in the event of a merge.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReplacingAddressLinkID")
  public void setReplacingAddressLinkID(java.lang.String value);


  /**
   * Latitude and longitude of this address, represented as an instance of SpatialPoint.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SpatialPoint")
  public external.gw.api.database.spatial.SpatialPoint getSpatialPoint();

  /**
   * Latitude and longitude of this address, represented as an instance of SpatialPoint.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SpatialPoint")
  public void setSpatialPoint(external.gw.api.database.spatial.SpatialPoint value);


  /**
   * State.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public com.guidewire.ab.external.typelist.State getState();

  /**
   * State.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "State")
  public void setState(com.guidewire.ab.external.typelist.State value);


  /**
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subtype")
  public com.guidewire.ab.external.typelist.Address getSubtype();


  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SuccessfullyGeocoded")
  public boolean isSuccessfullyGeocoded();


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Latest date that this address is valid.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidUntil")
  public java.util.Date getValidUntil();

  /**
   * Latest date that this address is valid.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValidUntil")
  public void setValidUntil(java.util.Date value);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToHistory")
  public void addToHistory(com.guidewire.ab.external.entity.ContactAddressHistory element);

  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   *
   * @return true, if there is location information.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "geocodeSynchronously")
  public com.guidewire.ab.external.entity.Address geocodeSynchronously();

  /**
   * Checks if the location information (Latitude, Longitude and GeocodeStatus) has been successfully set.
   *
   * @return true, if there is location information.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "geocodeSynchronouslyIfNecessary")
  public com.guidewire.ab.external.entity.Address geocodeSynchronouslyIfNecessary();

  /**
   * This gets a list of addresses which could match the provided address.
The first result in the list is used as the best match found.  This caps the number of results found.
<p/>
Note that this DOES NOT modify the original address; if you want to use this in lieu of regular geocoding
(ie geocodeSynchronously) you will have to copy over SpatialPoint and GeocodeStatus from the
selected match.
<p/>
You can check if this is supported with a call to GeocodeUtils.currentPluginSupportsMultipleCorrections()
   *
   * @return A list of addresses.  The first result returned will be the best match available.
   * @param maxResults the maximum number of results to return, if a positive/non-zero integer.  Returns all results if zero or negative.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getCorrectionsFromGeocodingPlugin")
  public java.util.List getCorrectionsFromGeocodingPlugin(int maxResults);

  /**
   * Gets the great circle distance to this address from a given point, given in millimeters.
   *
   * @return the distance in millimeters
   * @param origin an Address representing the origin point to get distance from
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDistanceFrom")
  public long getDistanceFrom(com.guidewire.ab.external.entity.Address origin);

  /**
   * Gets the great circle distance to this address from a given point, given in millimeters.
   *
   * @return the distance in millimeters
   * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
   * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDistanceFrom")
  public long getDistanceFrom(java.math.BigDecimal latitude, java.math.BigDecimal longitude);

  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
where the unit is the system default unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   *
   * @return the distance as a human-readable string
   * @param origin an Address representing the origin point to get distance from
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDistanceFromAsString")
  public java.lang.String getDistanceFromAsString(com.guidewire.ab.external.entity.Address origin);

  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
where the unit is determined by the given unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   *
   * @return the distance as a human-readable string
   * @param origin an Address representing the origin point to get distance from
   * @param unit a unit of distance: either UnitOfDistance.TC_MILES or UnitOfDistance.TC_KILOMETERS
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDistanceFromAsString")
  public java.lang.String getDistanceFromAsString(com.guidewire.ab.external.entity.Address origin, com.guidewire.ab.external.typelist.UnitOfDistance unit);

  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
where the unit is the system default unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   *
   * @return the distance as a human-readable string
   * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
   * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDistanceFromAsString")
  public java.lang.String getDistanceFromAsString(java.math.BigDecimal latitude, java.math.BigDecimal longitude);

  /**
   * Gets the great circle distance to this address from a given point, rendered as a readable string ie "1.1 mi."
where the unit is determined by the given unit of distance.  Always provided to an accuracy of 1/10th of a unit.
   *
   * @return the distance as a human-readable string
   * @param latitude a BigDecimal representing the latitude of the origin point to get distance from
   * @param longitude a BigDecimal representing the longitude of the origin point to get distance from
   * @param unit a unit of distance: either UnitOfDistance.TC_MILES or UnitOfDistance.TC_KILOMETERS
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDistanceFromAsString")
  public java.lang.String getDistanceFromAsString(java.math.BigDecimal latitude, java.math.BigDecimal longitude, com.guidewire.ab.external.typelist.UnitOfDistance unit);

  /**
   * Gets a URL to a map showing this address. If not supported by
the current geocode plugin, returns null.
   *
   * @return the MapImageUrl of the map
   * @param unit a UnitOfDistance indicating whether to show miles or kilometers on the map
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMap")
  public external.gw.api.contact.MapImageUrl getMap(com.guidewire.ab.external.typelist.UnitOfDistance unit) throws gw.pl.external.GenericCheckedException;

  /**
   * Checks if the location information (SpatialPoint and GeocodeStatus) has been successfully set.
   *
   * @return true, if there is location information.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasLocationInformation")
  public java.lang.Boolean hasLocationInformation();

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactAddressHistory from the History array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHistory")
  public void removeFromHistory(com.guidewire.ab.external.entity.ContactAddressHistory element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ContactAddressHistory having id elementID from the History array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromHistory")
  public void removeFromHistory(gw.pl.external.entity.Key elementID);

  /**
   * Takes a Latitude and Longitude pair, and sets the SpatialPoint and GeocodeStatus based on them.
   *
   * @param latitude the Latitude
   * @param longitude the Longitude
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setGeocodeFieldsFromLatLong")
  public void setGeocodeFieldsFromLatLong(java.math.BigDecimal latitude, java.math.BigDecimal longitude);

  /**
   * Takes a SpatialPoint, and sets the SpatialPoint and GeocodeStatus based on them.
   *
   * @param spatialPoint the SpatialPoint
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setGeocodeFieldsFromSpatialPoint")
  public void setGeocodeFieldsFromSpatialPoint(external.gw.api.database.spatial.SpatialPoint spatialPoint);


  /**
   * Utility class for initializing an instance of Address
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Address.
     */
    public static Address newInstance()
    {
      return (Address) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Address.class);
    }
  }

}
