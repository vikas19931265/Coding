package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DefaultXmlSchemaCompatibilityConfig extends external.gw.config.BaseService, external.gw.config.IXmlSchemaCompatibilityConfig
{

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "useCompatibilityMode")
  public boolean useCompatibilityMode(java.lang.String param);


  /**
   * Utility class for initializing an instance of external.gw.config.DefaultXmlSchemaCompatibilityConfig
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static DefaultXmlSchemaCompatibilityConfig newInstance()
    {
      return (DefaultXmlSchemaCompatibilityConfig) gw.pl.external.Invoker.getInstance().construct(external.gw.config.DefaultXmlSchemaCompatibilityConfig.class, new Class[]{ } , new Object[]{ });
    }

  }
}
