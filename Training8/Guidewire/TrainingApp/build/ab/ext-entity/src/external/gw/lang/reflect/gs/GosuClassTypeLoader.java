package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GosuClassTypeLoader extends external.gw.lang.reflect.SimpleTypeLoader
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllNamespaces")
  public java.util.Set getAllNamespaces();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnhancementIndex")
  public external.gw.lang.reflect.gs.IEnhancementIndex getEnhancementIndex();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Extensions")
  public java.util.Set getExtensions();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HandledPrefixes")
  public java.util.List getHandledPrefixes();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Repository")
  public external.gw.lang.reflect.gs.IGosuClassRepository getRepository();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "computeTypeNames")
  public java.util.Set computeTypeNames();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getType")
  public gw.pl.external.Type getType(java.lang.String param);

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
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesNonPrefixLoads")
  public boolean handlesNonPrefixLoads();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasNamespace")
  public boolean hasNamespace(java.lang.String param);

  /**
   * null
   *
   * @param param ISourceFileHandle
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeNewClass")
  public gw.pl.external.Type makeNewClass(external.gw.lang.reflect.gs.ISourceFileHandle param);

  /**
   * null
   *
   * @param param ISourceFileHandle
   * @param param1 ISymbolTable
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "makeNewClass")
  public gw.pl.external.Type makeNewClass(external.gw.lang.reflect.gs.ISourceFileHandle param, external.gw.lang.parser.ISymbolTable param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedImpl")
  public void refreshedImpl();

  /**
   * null
   *
   * @param param String
   * @param param1 IDirectory
   * @param param2 RefreshKind
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedNamespace")
  public void refreshedNamespace(java.lang.String param, external.gw.fs.IDirectory param1, external.gw.lang.reflect.RefreshKind param2);

  /**
   * null
   *
   * @param param RefreshRequest
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshedTypesImpl")
  public void refreshedTypesImpl(external.gw.lang.reflect.RefreshRequest param);

  /**
   * null
   *
   * @param param IGosuClass
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "shouldKeepDebugInfo")
  public boolean shouldKeepDebugInfo(gw.pl.external.Type param);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.gs.GosuClassTypeLoader
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static java.lang.String[] getALL_EXTS()
    {
      return (java.lang.String[]) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "ALL_EXTS");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getALL_EXTS_SET()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "ALL_EXTS_SET");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getBLOCK_POSTFIX()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "BLOCK_POSTFIX");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getBLOCK_PREFIX()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "BLOCK_PREFIX");
    }

    /**
     * 
     * 
     */
    public static external.gw.lang.reflect.gs.GosuClassTypeLoader getDefaultClassLoader()
    {
      return (external.gw.lang.reflect.gs.GosuClassTypeLoader) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "DefaultClassLoader");
    }

    /**
     * 
     * 
     */
    public static java.util.Set getEXTENSIONS()
    {
      return (java.util.Set) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "EXTENSIONS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGOSU_CLASS_FILE_EXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "GOSU_CLASS_FILE_EXT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGOSU_ENHANCEMENT_FILE_EXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "GOSU_ENHANCEMENT_FILE_EXT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGOSU_PROGRAM_FILE_EXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "GOSU_PROGRAM_FILE_EXT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGOSU_RULE_EXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "GOSU_RULE_EXT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGOSU_RULE_SET_EXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "GOSU_RULE_SET_EXT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGOSU_TEMPLATE_FILE_EXT()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "GOSU_TEMPLATE_FILE_EXT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getINNER_BLOCK_PREFIX()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "INNER_BLOCK_PREFIX");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param IModule
     */
    public static external.gw.lang.reflect.gs.GosuClassTypeLoader getDefaultClassLoader(external.gw.lang.reflect.module.IModule param)
    {
      return (external.gw.lang.reflect.gs.GosuClassTypeLoader) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, "getDefaultClassLoader", new Class[]{ external.gw.lang.reflect.module.IModule.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.gs.GosuClassTypeLoader
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IGosuClassRepository

     */
    public static GosuClassTypeLoader newInstance(external.gw.lang.reflect.gs.IGosuClassRepository param)
    {
      return (GosuClassTypeLoader) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, new Class[]{ external.gw.lang.reflect.gs.IGosuClassRepository.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param IModule
     * @param param1 IGosuClassRepository

     */
    public static GosuClassTypeLoader newInstance(external.gw.lang.reflect.module.IModule param, external.gw.lang.reflect.gs.IGosuClassRepository param1)
    {
      return (GosuClassTypeLoader) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.gs.GosuClassTypeLoader.class, new Class[]{ external.gw.lang.reflect.module.IModule.class, external.gw.lang.reflect.gs.IGosuClassRepository.class} , new Object[]{ param, param1});
    }

  }
}
