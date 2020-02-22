package external.gw.lang.reflect.features;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface PropertyReference <R, T> extends external.gw.lang.reflect.features.FeatureReference<R, T>, external.gw.lang.reflect.features.IPropertyReference<R, T>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FeatureInfo")
  public external.gw.lang.reflect.IFeatureInfo getFeatureInfo();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullArgTypes")
  public java.util.List getFullArgTypes();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertyInfo")
  public external.gw.lang.reflect.IPropertyInfo getPropertyInfo();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RootType")
  public gw.pl.external.Type getRootType();

  /**
   * null
   *
   * @param param R
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "get")
  public T get(R param);

  /**
   * null
   *
   * @param param R
   * @param param1 T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "set")
  public void set(R param, T param1);


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.features.PropertyReference
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IType
     * @param param1 String

     */
    public static <R, T> PropertyReference<R, T> newInstance(gw.pl.external.Type param, java.lang.String param1)
    {
      return (PropertyReference) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.features.PropertyReference.class, new Class[]{ gw.pl.external.Type.class, java.lang.String.class} , new Object[]{ param, param1});
    }

  }
}
