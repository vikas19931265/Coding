package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXSDGrouping extends external.gw.xml.IXMLNode<external.gw.xml.xsd.schema.XSDXMLNode>
{

  /**
   * null
   *
   * @param param XSDSchemaIndex
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createGroupingInfo")
  public external.gw.xml.xsd.info.XSDGroupingInfo createGroupingInfo(external.gw.xml.xsd.XSDSchemaIndex param, java.lang.String param1);

}
