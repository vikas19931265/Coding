package external.gw.lang.reflect.module;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IExecutionEnvironment
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GlobalModule")
  public external.gw.lang.reflect.module.IModule getGlobalModule();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "JreModule")
  public external.gw.lang.reflect.module.IModule getJreModule();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Modules")
  public java.util.List getModules();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Project")
  public external.gw.lang.reflect.module.IProject getProject();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ShadowingMode")
  public boolean isShadowingMode();

  /**
   * Whether or not this is the default single module environment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SingleModuleMode")
  public boolean isSingleModuleMode();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public external.gw.internal.gosu.parser.TypeSystemState getState();


  /**
   * null
   *
   * @param param IModule
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addModule")
  public void addModule(external.gw.lang.reflect.module.IModule param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createJreModule")
  public external.gw.lang.reflect.module.IModule createJreModule();



  /**
   * null
   *
   * @param param IResource
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getModule")
  public external.gw.lang.reflect.module.IModule getModule(external.gw.fs.IResource param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getModule")
  public external.gw.lang.reflect.module.IModule getModule(java.lang.String param);



  /**
   * null
   *
   * @param param URL
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getModule")
  public external.gw.lang.reflect.module.IModule getModule(java.net.URL param);



  /**
   * null
   *
   * @param param IModule
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeModule")
  public void removeModule(external.gw.lang.reflect.module.IModule param);



  /**
   * null
   *
   * @param param IModule
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "renameModule")
  public void renameModule(external.gw.lang.reflect.module.IModule param, java.lang.String param1);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.module.IExecutionEnvironment
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
    public static java.lang.String getDEFAULT_SINGLE_MODULE_NAME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.module.IExecutionEnvironment.class, "DEFAULT_SINGLE_MODULE_NAME");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGLOBAL_MODULE_NAME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.module.IExecutionEnvironment.class, "GLOBAL_MODULE_NAME");
    }

  }
}
