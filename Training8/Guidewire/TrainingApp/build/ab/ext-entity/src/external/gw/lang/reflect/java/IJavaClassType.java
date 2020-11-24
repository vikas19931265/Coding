package external.gw.lang.reflect.java;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IJavaClassType extends java.io.Serializable
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ConcreteType")
  public external.gw.lang.reflect.java.IJavaClassType getConcreteType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Namespace")
  public java.lang.String getNamespace();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SimpleName")
  public java.lang.String getSimpleName();


  /**
   * null
   *
   * @param param TypeVarToTypeMap
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getActualType")
  public gw.pl.external.Type getActualType(external.gw.lang.parser.TypeVarToTypeMap param);



  /**
   * null
   *
   * @param param TypeVarToTypeMap
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getActualType")
  public gw.pl.external.Type getActualType(external.gw.lang.parser.TypeVarToTypeMap param, boolean param1);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.java.IJavaClassType
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
    public static external.gw.lang.reflect.java.IJavaClassInfo[] getEMPTY_ARRAY()
    {
      return (external.gw.lang.reflect.java.IJavaClassInfo[]) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.java.IJavaClassType.class, "EMPTY_ARRAY");
    }

    /**
     * 
     * 
     */
    public static external.gw.lang.reflect.java.ErrorJavaClassInfo getERROR_TYPE()
    {
      return (external.gw.lang.reflect.java.ErrorJavaClassInfo) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.java.IJavaClassType.class, "ERROR_TYPE");
    }

    /**
     * 
     * 
     */
    public static external.gw.lang.reflect.java.ErrorJavaClassInfo getNULL_TYPE()
    {
      return (external.gw.lang.reflect.java.ErrorJavaClassInfo) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.java.IJavaClassType.class, "NULL_TYPE");
    }

  }
}
