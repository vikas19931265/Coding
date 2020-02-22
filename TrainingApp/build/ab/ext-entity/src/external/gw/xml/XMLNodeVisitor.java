package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XMLNodeVisitor <T extends external.gw.xml.IReadOnlyXMLNode>
{

  /**
   * null
   *
   * @param param T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "visit")
  public void visit(T param);

}
