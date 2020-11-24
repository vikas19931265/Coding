package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterBroadcastTransport extends external.gw.plugin.cluster.ClusterTransport
{

  /**
   * null
   *
   * @param param byte[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "send")
  public void send(byte[] param) throws gw.pl.external.GenericCheckedException;

}
