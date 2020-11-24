package com.guidewire.ab.external.entity;

/**
 * 
      Encapsulates a copy of those fields within a persistent Address which represent a physical address,
      at the point in time it was Geocoded, and any corrected fields received upon Geocoding that Address.<p/>
      AddressCorrection entities will not be created for temporary Address, if no
      corrections are received, or if Geocoding fails for that Address. If an Address is edited more than
      once, and the Geocoding is updated, more than one AddressCorrection may exist for a given address.<p/>
      Note that the corrected address may not capture all information from the original; in particular, MapPoint
      will discard apartment/suite/floor/mailstop numbers. Similarly, "duplicate" corrections may be produced.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressCorrection extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * The Address that has been corrected. NOTE: when inserting a AddressCorrection this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Address")
  public com.guidewire.ab.external.entity.Address getAddress();

  /**
   * The Address that has been corrected. NOTE: when inserting a AddressCorrection this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Address")
  public void setAddress(com.guidewire.ab.external.entity.Address value);


  /**
   * First line of original mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1")
  public java.lang.String getAddressLine1();

  /**
   * First line of original mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine1")
  public void setAddressLine1(java.lang.String value);


  /**
   * Second line of original mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine2")
  public java.lang.String getAddressLine2();

  /**
   * Second line of original mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine2")
  public void setAddressLine2(java.lang.String value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Original City.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "City")
  public java.lang.String getCity();

  /**
   * Original City.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "City")
  public void setCity(java.lang.String value);


  /**
   * First line of corrected mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedAddressLine1")
  public java.lang.String getCorrectedAddressLine1();

  /**
   * First line of corrected mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedAddressLine1")
  public void setCorrectedAddressLine1(java.lang.String value);


  /**
   * Second line of corrected mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedAddressLine2")
  public java.lang.String getCorrectedAddressLine2();

  /**
   * Second line of corrected mailing address.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedAddressLine2")
  public void setCorrectedAddressLine2(java.lang.String value);


  /**
   * Corrected City.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedCity")
  public java.lang.String getCorrectedCity();

  /**
   * Corrected City.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedCity")
  public void setCorrectedCity(java.lang.String value);


  /**
   * Corrected Country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedCountry")
  public java.lang.String getCorrectedCountry();

  /**
   * Corrected Country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedCountry")
  public void setCorrectedCountry(java.lang.String value);


  /**
   * Corrected County.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedCounty")
  public java.lang.String getCorrectedCounty();

  /**
   * Corrected County.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedCounty")
  public void setCorrectedCounty(java.lang.String value);


  /**
   * Corrected Postal code; string to handle Zip+4 and international codes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedPostalCode")
  public java.lang.String getCorrectedPostalCode();

  /**
   * Corrected Postal code; string to handle Zip+4 and international codes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedPostalCode")
  public void setCorrectedPostalCode(java.lang.String value);


  /**
   * Corrected State.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CorrectedState")
  public java.lang.String getCorrectedState();

  /**
   * Corrected State.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CorrectedState")
  public void setCorrectedState(java.lang.String value);


  /**
   * Original Country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Country")
  public com.guidewire.ab.external.typelist.Country getCountry();

  /**
   * Original Country.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Country")
  public void setCountry(com.guidewire.ab.external.typelist.Country value);


  /**
   * Original County.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "County")
  public java.lang.String getCounty();

  /**
   * Original County.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "County")
  public void setCounty(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Original Postal code; string to handle Zip+4 and international codes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PostalCode")
  public java.lang.String getPostalCode();

  /**
   * Original Postal code; string to handle Zip+4 and international codes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PostalCode")
  public void setPostalCode(java.lang.String value);


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
   * Original State.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public com.guidewire.ab.external.typelist.State getState();

  /**
   * Original State.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "State")
  public void setState(com.guidewire.ab.external.typelist.State value);


  /**
   * Utility class for initializing an instance of AddressCorrection
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AddressCorrection.
     */
    public static AddressCorrection newInstance()
    {
      return (AddressCorrection) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AddressCorrection.class);
    }
  }

}
