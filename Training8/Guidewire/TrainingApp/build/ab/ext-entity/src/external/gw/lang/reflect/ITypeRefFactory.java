package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITypeRefFactory
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Clearing")
  public boolean isClearing();


  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearCaches")
  public void clearCaches();



  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "create")
  public gw.pl.external.Type create(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "get")
  public gw.pl.external.Type get(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "get")
  public gw.pl.external.Type get(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getSubordinateRefs")
  public java.util.List getSubordinateRefs(java.lang.String param);



  /**
   * null
   *
   * @param param String
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypesWithPrefix")
  public java.util.List getTypesWithPrefix(java.lang.String param, java.lang.String param1);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.ITypeRefFactory
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static java.lang.String getSYSTEM_PROXY_SUFFIX()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.ITypeRefFactory.class, "SYSTEM_PROXY_SUFFIX");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getUSER_PROXY_SUFFIX()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.ITypeRefFactory.class, "USER_PROXY_SUFFIX");
    }

  }
}
