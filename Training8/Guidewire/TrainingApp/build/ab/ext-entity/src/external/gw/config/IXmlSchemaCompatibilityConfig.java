package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXmlSchemaCompatibilityConfig extends external.gw.config.IService
{

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "useCompatibilityMode")
  public boolean useCompatibilityMode(java.lang.String param);

}
