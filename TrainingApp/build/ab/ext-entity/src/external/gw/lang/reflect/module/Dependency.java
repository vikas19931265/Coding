package external.gw.lang.reflect.module;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Dependency
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Exported")
  public boolean isExported();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.module.Dependency
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IModule
     * @param param1 boolean

     */
    public static Dependency newInstance(external.gw.lang.reflect.module.IModule param, boolean param1)
    {
      return (Dependency) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.module.Dependency.class, new Class[]{ external.gw.lang.reflect.module.IModule.class, boolean.class} , new Object[]{ param, param1});
    }

  }
}
