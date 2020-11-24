package external.gw.xml.xsd;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXMLNodeWithID <T extends external.gw.xml.IReadOnlyXMLNode> extends external.gw.xml.IReadOnlyXMLNode<T>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NodeID")
  public java.lang.String getNodeID();
}
