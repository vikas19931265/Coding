package external.gw.plugin.cluster;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ClusterChannelCallback
{

  /**
   * null
   *
   * @param param UUID
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getServerId")
  public java.lang.String getServerId(java.util.UUID param);

}
