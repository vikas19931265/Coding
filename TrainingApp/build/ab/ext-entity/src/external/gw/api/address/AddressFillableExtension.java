package external.gw.api.address;

/**
 * Define properties here for fields added to AddressAutofillable.eti that are not defined in AddressFillable.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressFillableExtension extends external.gw.api.address.AddressFillable
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine1Kanji")
  public java.lang.String getAddressLine1Kanji();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine1Kanji")
  public void setAddressLine1Kanji(java.lang.String value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressLine2Kanji")
  public java.lang.String getAddressLine2Kanji();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressLine2Kanji")
  public void setAddressLine2Kanji(java.lang.String value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CEDEX")
  public java.lang.Boolean isCEDEX();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CEDEX")
  public void setCEDEX(java.lang.Boolean value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CEDEXBureau")
  public java.lang.String getCEDEXBureau();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CEDEXBureau")
  public void setCEDEXBureau(java.lang.String value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CityKanji")
  public java.lang.String getCityKanji();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CityKanji")
  public void setCityKanji(java.lang.String value);
}
