package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDefaultTypeLoader extends external.gw.lang.reflect.ITypeLoader
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GosuClassLoader")
  public external.gw.lang.reflect.gs.IGosuClassLoader getGosuClassLoader();


  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getJavaClassInfo")
  public external.gw.lang.reflect.java.IJavaClassInfo getJavaClassInfo(java.lang.String param);



  /**
   * null
   *
   * @param param Class
   * @param param1 IModule
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getJavaClassInfoForClassDirectly")
  public external.gw.lang.reflect.java.IJavaClassInfo getJavaClassInfoForClassDirectly(java.lang.Class param, external.gw.lang.reflect.module.IModule param1);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getSouceFileHandle")
  public external.gw.lang.reflect.gs.ISourceFileHandle getSouceFileHandle(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadClass")
  public java.lang.Class loadClass(java.lang.String param);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.IDefaultTypeLoader
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
    public static java.lang.String getDOT_JAVA_EXTENSION()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.IDefaultTypeLoader.class, "DOT_JAVA_EXTENSION");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getEXTENSIONS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.IDefaultTypeLoader.class, "EXTENSIONS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String[] getEXTENSIONS_ARRAY()
    {
      return (java.lang.String[]) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.IDefaultTypeLoader.class, "EXTENSIONS_ARRAY");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getJAVA_EXTENSION()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.IDefaultTypeLoader.class, "JAVA_EXTENSION");
    }

  }
}
