package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDSchema extends external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeFormDefault")
  public external.gw.xml.xsd.schema.XSDFormType getAttributeFormDefault();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementFormDefault")
  public external.gw.xml.xsd.schema.XSDFormType getElementFormDefault();


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDSchema
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDSchema newInstance()
    {
      return (XSDSchema) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDSchema.class, new Class[]{ } , new Object[]{ });
    }

  }
}
