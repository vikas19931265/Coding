package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DefaultGlobalLoaderProvider extends external.gw.config.BaseService, external.gw.config.IGlobalLoaderProvider
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GlobalLoaderTypes")
  public java.util.List getGlobalLoaderTypes();


  /**
   * Utility class for initializing an instance of external.gw.config.DefaultGlobalLoaderProvider
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DefaultGlobalLoaderProvider newInstance()
    {
      return (DefaultGlobalLoaderProvider) gw.pl.external.Invoker.getInstance().construct(external.gw.config.DefaultGlobalLoaderProvider.class, new Class[]{ } , new Object[]{ });
    }

  }
}
