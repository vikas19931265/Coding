package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDUnion extends external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDUnion
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDUnion newInstance()
    {
      return (XSDUnion) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDUnion.class, new Class[]{ } , new Object[]{ });
    }

  }
}
