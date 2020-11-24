package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDDocumentation extends external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDDocumentation
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDDocumentation newInstance()
    {
      return (XSDDocumentation) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDDocumentation.class, new Class[]{ } , new Object[]{ });
    }

  }
}
