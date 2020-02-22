package external.gw.api.util;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface CountryConfig
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AddressOwnerFieldIds")
  public java.util.Set getAddressOwnerFieldIds();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AddressOwnerFieldIds")
  public void setAddressOwnerFieldIds(java.util.Set value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CityLabel")
  public java.lang.String getCityLabel();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PCFMode")
  public java.lang.String getPCFMode();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PostalCodeLabel")
  public java.lang.String getPostalCodeLabel();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StateLabel")
  public java.lang.String getStateLabel();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VisibleFields")
  public java.lang.String[] getVisibleFields();


  /**
   * Utility class for accessing static features for external.gw.api.util.CountryConfig
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
     * @param param String
     */
    public static external.gw.api.util.CountryConfig getCountryConfig(java.lang.String param)
    {
      return (external.gw.api.util.CountryConfig) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.util.CountryConfig.class, "getCountryConfig", new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Country
     */
    public static external.gw.api.util.CountryConfig getCountryConfig(com.guidewire.ab.external.typelist.Country param)
    {
      return (external.gw.api.util.CountryConfig) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.util.CountryConfig.class, "getCountryConfig", new Class[]{ com.guidewire.ab.external.typelist.Country.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.util.CountryConfig
   */
  public static class CONSTRUCT
  {

  }
}
