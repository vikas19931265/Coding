package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface RefreshRequest
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "File")
  public external.gw.fs.IFile getFile();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Kind")
  public external.gw.lang.reflect.RefreshKind getKind();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeLoader")
  public external.gw.lang.reflect.ITypeLoader getTypeLoader();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Types")
  public java.lang.String[] getTypes();


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.RefreshRequest
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String[]
     * @param param1 RefreshRequest
     * @param param2 ITypeLoader

     */
    public static RefreshRequest newInstance(java.lang.String[] param, external.gw.lang.reflect.RefreshRequest param1, external.gw.lang.reflect.ITypeLoader param2)
    {
      return (RefreshRequest) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.RefreshRequest.class, new Class[]{ java.lang.String[].class, external.gw.lang.reflect.RefreshRequest.class, external.gw.lang.reflect.ITypeLoader.class} , new Object[]{ param, param1, param2});
    }

    /**
     * null
     *
     * @param param IFile
     * @param param1 String[]
     * @param param2 ITypeLoader
     * @param param3 RefreshKind

     */
    public static RefreshRequest newInstance(external.gw.fs.IFile param, java.lang.String[] param1, external.gw.lang.reflect.ITypeLoader param2, external.gw.lang.reflect.RefreshKind param3)
    {
      return (RefreshRequest) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.RefreshRequest.class, new Class[]{ external.gw.fs.IFile.class, java.lang.String[].class, external.gw.lang.reflect.ITypeLoader.class, external.gw.lang.reflect.RefreshKind.class} , new Object[]{ param, param1, param2, param3});
    }

    /**
     * null
     *
     * @param param IFile
     * @param param1 String[]
     * @param param2 IModule
     * @param param3 RefreshKind

     */
    public static RefreshRequest newInstance(external.gw.fs.IFile param, java.lang.String[] param1, external.gw.lang.reflect.module.IModule param2, external.gw.lang.reflect.RefreshKind param3)
    {
      return (RefreshRequest) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.RefreshRequest.class, new Class[]{ external.gw.fs.IFile.class, java.lang.String[].class, external.gw.lang.reflect.module.IModule.class, external.gw.lang.reflect.RefreshKind.class} , new Object[]{ param, param1, param2, param3});
    }

    /**
     * null
     *
     * @param param IFile
     * @param param1 String[]
     * @param param2 IModule
     * @param param3 ITypeLoader
     * @param param4 RefreshKind

     */
    public static RefreshRequest newInstance(external.gw.fs.IFile param, java.lang.String[] param1, external.gw.lang.reflect.module.IModule param2, external.gw.lang.reflect.ITypeLoader param3, external.gw.lang.reflect.RefreshKind param4)
    {
      return (RefreshRequest) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.RefreshRequest.class, new Class[]{ external.gw.fs.IFile.class, java.lang.String[].class, external.gw.lang.reflect.module.IModule.class, external.gw.lang.reflect.ITypeLoader.class, external.gw.lang.reflect.RefreshKind.class} , new Object[]{ param, param1, param2, param3, param4});
    }

  }
}
