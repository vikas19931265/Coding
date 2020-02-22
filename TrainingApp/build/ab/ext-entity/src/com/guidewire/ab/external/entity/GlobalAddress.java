package com.guidewire.ab.external.entity;

/**
 * 
    This is a shared delegate/interface that allows multiple entities to share definitions of removable globalization fields associated with Addresses.
  
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GlobalAddress extends gw.pl.external.entity.Entity
{


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
   * Utility class for initializing an instance of GlobalAddress
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity GlobalAddress.
     */
    public static GlobalAddress newInstance()
    {
      return (GlobalAddress) gw.pl.external.entity.EntityFactory.getInstance().newEntity(GlobalAddress.class);
    }
  }

}
