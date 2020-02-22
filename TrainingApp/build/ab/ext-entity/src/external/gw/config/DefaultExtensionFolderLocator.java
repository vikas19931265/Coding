package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DefaultExtensionFolderLocator extends external.gw.config.BaseService, external.gw.config.IExtensionFolderLocator
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExtensionFolderPath")
  public java.io.File getExtensionFolderPath();


  /**
   * Utility class for initializing an instance of external.gw.config.DefaultExtensionFolderLocator
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DefaultExtensionFolderLocator newInstance()
    {
      return (DefaultExtensionFolderLocator) gw.pl.external.Invoker.getInstance().construct(external.gw.config.DefaultExtensionFolderLocator.class, new Class[]{ } , new Object[]{ });
    }

  }
}
