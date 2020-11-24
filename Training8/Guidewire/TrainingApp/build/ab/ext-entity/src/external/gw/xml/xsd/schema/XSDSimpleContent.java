package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDSimpleContent extends external.gw.xml.xsd.schema.IXSDContent, external.gw.xml.xsd.schema.XSDXMLNode
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
   * Utility class for accessing static features for external.gw.xml.xsd.schema.XSDSimpleContent
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getEXTENSION()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDSimpleContent.class, "EXTENSION");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDSimpleContent
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDSimpleContent newInstance()
    {
      return (XSDSimpleContent) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDSimpleContent.class, new Class[]{ } , new Object[]{ });
    }

  }
}
