package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDRestriction extends external.gw.xml.xsd.schema.IXSDExtensionOrRestriction, external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Base")
  public javax.xml.namespace.QName getBase();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();

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
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "restrictSimpleType")
  public void restrictSimpleType(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1);

  /**
   * null
   *
   * @param param XSDNodeValueInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "restrictType")
  public void restrictType(external.gw.xml.xsd.info.XSDNodeValueInfo param);

  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "restrictValueInfoFromSimpleType")
  public void restrictValueInfoFromSimpleType(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1, java.lang.String param2);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDRestriction
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDRestriction newInstance()
    {
      return (XSDRestriction) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDRestriction.class, new Class[]{ } , new Object[]{ });
    }

  }
}
