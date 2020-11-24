package external.gw.config;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGosuInitializationHooks extends external.gw.config.IService
{

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "afterTypeLoaderCreation")
  public void afterTypeLoaderCreation();



  /**
   * null
   *
   * @param param Class
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "beforeTypeLoaderCreation")
  public void beforeTypeLoaderCreation(java.lang.Class param);

}
