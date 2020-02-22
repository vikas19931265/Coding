package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterUnicastTransport extends external.gw.plugin.cluster.ClusterTransport
{

  /**
   * null
   *
   * @param param byte[]
   * @param param1 Serializable
   * @param param2 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "call")
  public byte[] call(byte[] param, java.io.Serializable param1, int param2) throws gw.pl.external.GenericCheckedException;

}
