package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TypeLoaderBase extends external.gw.config.BaseService, external.gw.lang.reflect.ITypeLoader
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllTypeNames")
  public java.util.Set getAllTypeNames();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CaseSensitive")
  public boolean isCaseSensitive();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();

  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNamespaceForDirectory")
  public java.lang.String getNamespaceForDirectory(external.gw.fs.IDirectory param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getResource")
  public java.net.URL getResource(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypeNames")
  public java.util.Set getTypeNames(java.lang.String param);

  /**
   * null
   *
   * @param param IFile
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypesForFile")
  public java.lang.String[] getTypesForFile(external.gw.fs.IFile param);

  /**
   * null
   *
   * @param param IDirectory
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesDirectory")
  public boolean handlesDirectory(external.gw.fs.IDirectory param);

  /**
   * null
   *
   * @param param IFile
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesFile")
  public boolean handlesFile(external.gw.fs.IFile param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadTypeNames")
  public java.util.Set loadTypeNames();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshed")
  public void refreshed();

  /**
   * null
   *
   * @param param IFile
   * @param param1 String[]
   * @param param2 RefreshKind
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedFile")
  public external.gw.lang.reflect.RefreshKind refreshedFile(external.gw.fs.IFile param, java.lang.String[] param1, external.gw.lang.reflect.RefreshKind param2);

  /**
   * null
   *
   * @param param RefreshRequest
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedTypes")
  public void refreshedTypes(external.gw.lang.reflect.RefreshRequest param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "saveTypeNames")
  public void saveTypeNames();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "showTypeNamesInIDE")
  public boolean showTypeNamesInIDE();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shutdown")
  public void shutdown();


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.TypeLoaderBase
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
     * @param param1 ITypeLoader
     */
    public static java.util.Set getTypeNames(java.lang.String param, external.gw.lang.reflect.ITypeLoader param1)
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.reflect.TypeLoaderBase.class, "getTypeNames", new Class[]{ java.lang.String.class, external.gw.lang.reflect.ITypeLoader.class} , new Object[]{ param, param1});
    }

  }
}
