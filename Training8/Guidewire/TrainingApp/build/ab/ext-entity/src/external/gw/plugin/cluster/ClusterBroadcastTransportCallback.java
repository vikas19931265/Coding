package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterBroadcastTransportCallback extends external.gw.plugin.cluster.ClusterChannelCallback
{

  /**
   * null
   *
   * @param param byte[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "receive")
  public boolean receive(byte[] param);

}
