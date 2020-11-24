package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDAnnotation extends external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDAnnotation
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDAnnotation newInstance()
    {
      return (XSDAnnotation) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDAnnotation.class, new Class[]{ } , new Object[]{ });
    }

  }
}
