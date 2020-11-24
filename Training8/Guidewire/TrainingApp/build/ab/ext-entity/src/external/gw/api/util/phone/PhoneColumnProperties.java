package external.gw.api.util.phone;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PhoneColumnProperties
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PhoneCountryCode")
  public external.gw.lang.reflect.features.PropertyReference getPhoneCountryCode();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PhoneExtension")
  public external.gw.lang.reflect.features.PropertyReference getPhoneExtension();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PhoneNumber")
  public external.gw.lang.reflect.features.PropertyReference getPhoneNumber();

  /**
   * null
   *
   * @param param PropertyReference<Bean, PhoneCountryCode>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withCountryCodeColumn")
  public external.gw.api.util.phone.PhoneColumnProperties withCountryCodeColumn(external.gw.lang.reflect.features.PropertyReference param);

  /**
   * null
   *
   * @param param PropertyReference<Bean, String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withPhoneExtension")
  public external.gw.api.util.phone.PhoneColumnProperties withPhoneExtension(external.gw.lang.reflect.features.PropertyReference param);

  /**
   * null
   *
   * @param param PropertyReference<Bean, String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withPhoneNumber")
  public external.gw.api.util.phone.PhoneColumnProperties withPhoneNumber(external.gw.lang.reflect.features.PropertyReference param);


  /**
   * Utility class for initializing an instance of external.gw.api.util.phone.PhoneColumnProperties
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static PhoneColumnProperties newInstance()
    {
      return (PhoneColumnProperties) gw.pl.external.Invoker.getInstance().construct(external.gw.api.util.phone.PhoneColumnProperties.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param PropertyReference<Bean, PhoneCountryCode>
     * @param param1 PropertyReference<Bean, String>
     * @param param2 PropertyReference<Bean, String>

     */
    public static PhoneColumnProperties newInstance(external.gw.lang.reflect.features.PropertyReference param, external.gw.lang.reflect.features.PropertyReference param1, external.gw.lang.reflect.features.PropertyReference param2)
    {
      return (PhoneColumnProperties) gw.pl.external.Invoker.getInstance().construct(external.gw.api.util.phone.PhoneColumnProperties.class, new Class[]{ external.gw.lang.reflect.features.PropertyReference.class, external.gw.lang.reflect.features.PropertyReference.class, external.gw.lang.reflect.features.PropertyReference.class} , new Object[]{ param, param1, param2});
    }

  }
}
