package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDImportOrInclude extends external.gw.xml.xsd.schema.XSDXMLNode
{

  /**
   * null
   *
   * @param param URL
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getIncludedSchema")
  public java.net.URL getIncludedSchema(java.net.URL param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDImportOrInclude
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDImportOrInclude newInstance()
    {
      return (XSDImportOrInclude) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDImportOrInclude.class, new Class[]{ } , new Object[]{ });
    }

  }
}
