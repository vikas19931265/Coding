package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDInclude extends external.gw.xml.xsd.schema.XSDImportOrInclude
{


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDInclude
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDInclude newInstance()
    {
      return (XSDInclude) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDInclude.class, new Class[]{ } , new Object[]{ });
    }

  }
}
