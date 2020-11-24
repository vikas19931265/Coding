package com.guidewire.ab.external.entity;

/**
 * 
      This is a shared delegate/interface which allows multiple entities that have address information
      to be able to use the autofill functionality.
    
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressAutofillable extends com.guidewire.ab.external.entity.GlobalAddress, external.gw.api.address.AddressFillable, gw.pl.external.entity.Entity
{


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
   * Utility class for initializing an instance of AddressAutofillable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity AddressAutofillable.
     */
    public static AddressAutofillable newInstance()
    {
      return (AddressAutofillable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(AddressAutofillable.class);
    }
  }

}
