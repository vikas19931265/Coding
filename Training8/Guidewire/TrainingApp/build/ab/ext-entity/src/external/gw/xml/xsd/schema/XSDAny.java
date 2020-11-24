package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDAny extends external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDAny
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDAny newInstance()
    {
      return (XSDAny) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDAny.class, new Class[]{ } , new Object[]{ });
    }

  }
}
