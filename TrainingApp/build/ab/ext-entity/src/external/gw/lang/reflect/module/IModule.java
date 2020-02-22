package external.gw.lang.reflect.module;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IModule
{
  /**
   * A list of dependencies for this module. The list may contain both 
  libraries and other modules. The dependency graph must not have cycles.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Dependencies")
  public java.util.List getDependencies();

  /**
   * A list of dependencies for this module. The list may contain both 
  libraries and other modules. The dependency graph must not have cycles.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Dependencies")
  public void setDependencies(java.util.List value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExecutionEnvironment")
  public external.gw.lang.reflect.module.IExecutionEnvironment getExecutionEnvironment();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FileRepository")
  public external.gw.lang.reflect.gs.IFileSystemGosuClassRepository getFileRepository();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "JavaClassPath")
  public java.util.List getJavaClassPath();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "JavaClassPath")
  public void setJavaClassPath(java.util.List value);

  /**
   * Get class loader, associated with this module.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ModuleClassLoader")
  public java.lang.ClassLoader getModuleClassLoader();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ModuleTraversalList")
  public external.gw.lang.reflect.module.IModule[] getModuleTraversalList();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ModuleTypeLoader")
  public external.gw.lang.reflect.module.ITypeLoaderStack getModuleTypeLoader();

  /**
   * A unique name relative to all other modules in a given execution 
  environment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * A unique name relative to all other modules in a given execution 
  environment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);

  /**
   * The module/project from the execution environment that corresponds
  with this logical module. For example, in Eclipse the native module is of 
  type IJavaProject.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NativeModule")
  public java.lang.Object getNativeModule();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OutputPath")
  public external.gw.fs.IDirectory getOutputPath();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Roots")
  public java.util.List getRoots();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Roots")
  public void setRoots(java.util.List value);

  /**
   * The path[s] having source files that should be exposed to this 
  module.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SourcePath")
  public java.util.List getSourcePath();

  /**
   * The path[s] having source files that should be exposed to this 
  module.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SourcePath")
  public void setSourcePath(java.util.List value);


  /**
   * null
   *
   * @param param Dependency
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addDependency")
  public void addDependency(external.gw.lang.reflect.module.Dependency param);



  /**
   * Configure both source and Java classpaths of the module in a semi-automated way. First parameter
is Java classpath. Second parameter is extended with all paths from Java classpath that are marked
to have Gosu "sources" (through MANIFEST.MF with Contains-Sources header) and used as Gosu source path.
   *
   * @param classpath 
   * @param sourcePaths 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "configurePaths")
  public void configurePaths(java.util.List classpath, java.util.List sourcePaths);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "disposeLoader")
  public void disposeLoader();



  /**
   * Returns typeloaders of the given class that are local to this module as well as such
typeloaders from dependent modules.
   *
   * @param typeLoaderClass 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTypeLoaders")
  public <T extends external.gw.lang.reflect.ITypeLoader> java.util.List getTypeLoaders(java.lang.Class typeLoaderClass);



  /**
   * null
   *
   * @param param IResource
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pathRelativeToRoot")
  public java.lang.String pathRelativeToRoot(external.gw.fs.IResource param);



  /**
   * null
   *
   * @param param Dependency
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeDependency")
  public void removeDependency(external.gw.lang.reflect.module.Dependency param);



  /**
   * null
   *
   * @param param INativeModule
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setNativeModule")
  public void setNativeModule(external.gw.lang.reflect.module.INativeModule param);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.module.IModule
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
    public static java.lang.String getCONFIG_RESOURCE_PREFIX()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.module.IModule.class, "CONFIG_RESOURCE_PREFIX");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getCONFIG_RESOURCE_PREFIX_2()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.module.IModule.class, "CONFIG_RESOURCE_PREFIX_2");
    }

  }
}
