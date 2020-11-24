package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterUnicastTransportCallback extends external.gw.plugin.cluster.ClusterChannelCallback
{

  /**
   * null
   *
   * @param param byte[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handle")
  public byte[] handle(byte[] param);

}
