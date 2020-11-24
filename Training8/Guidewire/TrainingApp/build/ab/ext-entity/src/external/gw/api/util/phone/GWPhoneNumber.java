package external.gw.api.util.phone;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GWPhoneNumber
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CountryCode")
  public com.guidewire.ab.external.typelist.PhoneCountryCode getCountryCode();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CountryCode")
  public void setCountryCode(com.guidewire.ab.external.typelist.PhoneCountryCode value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Extension")
  public java.lang.String getExtension();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NANPANumber")
  public boolean isNANPANumber();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NationalNumber")
  public java.lang.String getNationalNumber();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NationalNumberFormatted")
  public java.lang.String getNationalNumberFormatted();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Possible")
  public boolean isPossible();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RawInput")
  public java.lang.String getRawInput();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Valid")
  public boolean isValid();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "areaCode")
  public java.lang.String areaCode();



  /**
   * null
   *
   * @param param PhoneCountryCode
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "format")
  public java.lang.String format(com.guidewire.ab.external.typelist.PhoneCountryCode param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "formatIntlWithLocalizedExtension")
  public java.lang.String formatIntlWithLocalizedExtension();



  /**
   * null
   *
   * @param param PhoneCountryCode
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "formatWithLocalizedExtension")
  public java.lang.String formatWithLocalizedExtension(com.guidewire.ab.external.typelist.PhoneCountryCode param);



  /**
   * null
   *
   * @param param GWPhoneNumber
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isMatch")
  public external.gw.api.util.phone.GWPhoneMatchType isMatch(external.gw.api.util.phone.GWPhoneNumber param);

}
