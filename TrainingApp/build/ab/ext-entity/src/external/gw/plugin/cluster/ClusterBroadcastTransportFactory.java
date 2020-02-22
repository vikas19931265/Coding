package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterBroadcastTransportFactory extends gw.plugin.IPlugin
{

  /**
   * null
   *
   * @param param UUID
   * @param param1 String
   * @param param2 ClusterBroadcastTransportCallback
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newClusterBroadcastTransport")
  public external.gw.plugin.cluster.ClusterBroadcastTransport newClusterBroadcastTransport(java.util.UUID param, java.lang.String param1, external.gw.plugin.cluster.ClusterBroadcastTransportCallback param2) throws java.io.IOException;

}
