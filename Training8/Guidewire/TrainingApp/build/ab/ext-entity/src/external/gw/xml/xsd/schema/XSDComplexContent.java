package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDComplexContent extends external.gw.xml.xsd.schema.IXSDContent, external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefinitionContainer")
  public external.gw.xml.xsd.schema.IXSDExtensionOrRestriction getDefinitionContainer();

  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addDefinitions")
  public void addDefinitions(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1, java.lang.String param2);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDComplexContent
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDComplexContent newInstance()
    {
      return (XSDComplexContent) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDComplexContent.class, new Class[]{ } , new Object[]{ });
    }

  }
}
