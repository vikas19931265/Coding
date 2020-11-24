package external.gw.util.concurrent;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Cache <K, V>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ConfiguredSize")
  public int getConfiguredSize();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HitRate")
  public double getHitRate();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Hits")
  public int getHits();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Misses")
  public int getMisses();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Requests")
  public int getRequests();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UtilizedSize")
  public int getUtilizedSize();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clear")
  public void clear();

  /**
   * null
   *
   * @param param K
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "evict")
  public V evict(K param);

  /**
   * null
   *
   * @param param K
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "get")
  public V get(K param);

  /**
   * null
   *
   * @param param int
   * @param param1 ILogger
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "logEveryNSeconds")
  public external.gw.util.concurrent.Cache logEveryNSeconds(int param, external.gw.util.ILogger param1);

  /**
   * null
   *
   * @param param K
   * @param param1 V
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "put")
  public V put(K param, V param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "stopLogging")
  public void stopLogging();


  /**
   * Utility class for initializing an instance of external.gw.util.concurrent.Cache
   */
  public static class CONSTRUCT
  {

  }
}
