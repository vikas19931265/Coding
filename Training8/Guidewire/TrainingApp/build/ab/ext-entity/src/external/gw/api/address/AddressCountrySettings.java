package external.gw.api.address;

/**
 * Provides country-specific settings
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AddressCountrySettings
{


  /**
   * The label for the City field
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CityLabel")
  public java.lang.String getCityLabel();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CountryConfig")
  public external.gw.api.util.CountryConfig getCountryConfig();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CountryConfig")
  public void setCountryConfig(external.gw.api.util.CountryConfig value);


  /**
   * The PCF mode to use for the Country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PCFMode")
  public java.lang.String getPCFMode();


  /**
   * The label for the PostalCode field
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PostalCodeLabel")
  public java.lang.String getPostalCodeLabel();


  /**
   * The label for the State field
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StateLabel")
  public java.lang.String getStateLabel();


  /**
   * The list of fields that appear in addresses for the specified country
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VisibleFields")
  public java.util.Set getVisibleFields();


  /**
   * Utility class for accessing static features for external.gw.api.address.AddressCountrySettings
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * null
     *
     * @param country 
     * @deprecated 
     */
    public static external.gw.api.address.AddressCountrySettings getSettings(com.guidewire.ab.external.typelist.Country country)
    {
      return (external.gw.api.address.AddressCountrySettings) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.address.AddressCountrySettings.class, "getSettings", new Class[]{ com.guidewire.ab.external.typelist.Country.class} , new Object[]{ country});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.address.AddressCountrySettings
   */
  public static class CONSTRUCT
  {

  }
}
