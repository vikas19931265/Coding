package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDAttributeGroup extends external.gw.xml.xsd.schema.IXSDAttributeSpecification, external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public javax.xml.namespace.QName getName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Ref")
  public javax.xml.namespace.QName getRef();

  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAttributes")
  public void addAttributes(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1, java.lang.String param2);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDAttributeGroup
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDAttributeGroup newInstance()
    {
      return (XSDAttributeGroup) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDAttributeGroup.class, new Class[]{ } , new Object[]{ });
    }

  }
}
