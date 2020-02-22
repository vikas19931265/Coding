package external.gw.lang.gosuc;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GosucGlobalLoaderProvider extends external.gw.config.BaseService, external.gw.config.IGlobalLoaderProvider
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GlobalLoaderTypes")
  public java.util.List getGlobalLoaderTypes();


  /**
   * Utility class for initializing an instance of external.gw.lang.gosuc.GosucGlobalLoaderProvider
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param List<String>

     */
    public static GosucGlobalLoaderProvider newInstance(java.util.List param)
    {
      return (GosucGlobalLoaderProvider) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.gosuc.GosucGlobalLoaderProvider.class, new Class[]{ java.util.List.class} , new Object[]{ param});
    }

  }
}
