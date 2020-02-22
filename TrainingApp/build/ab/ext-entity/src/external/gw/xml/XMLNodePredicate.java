package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XMLNodePredicate <T extends external.gw.xml.IReadOnlyXMLNode>
{

  /**
   * null
   *
   * @param param T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "accept")
  public boolean accept(T param);

}
