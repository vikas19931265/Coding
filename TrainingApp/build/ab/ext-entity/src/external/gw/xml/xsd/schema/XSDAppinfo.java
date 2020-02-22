package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDAppinfo extends external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDAppinfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDAppinfo newInstance()
    {
      return (XSDAppinfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDAppinfo.class, new Class[]{ } , new Object[]{ });
    }

  }
}
