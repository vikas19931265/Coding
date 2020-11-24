package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXSDContent extends external.gw.xml.IXMLNode<external.gw.xml.xsd.schema.XSDXMLNode>
{

  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addDefinitions")
  public void addDefinitions(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1, java.lang.String param2);

}
