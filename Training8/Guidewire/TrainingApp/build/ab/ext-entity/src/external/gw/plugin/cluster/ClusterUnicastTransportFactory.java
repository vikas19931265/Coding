package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterUnicastTransportFactory extends gw.plugin.IPlugin
{

  /**
   * null
   *
   * @param param UUID
   * @param param1 String
   * @param param2 ClusterUnicastTransportCallback
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newClusterUnicastTransport")
  public external.gw.plugin.cluster.ClusterUnicastTransport newClusterUnicastTransport(java.util.UUID param, java.lang.String param1, external.gw.plugin.cluster.ClusterUnicastTransportCallback param2) throws java.io.IOException;

}
