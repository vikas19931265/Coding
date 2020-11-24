package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDImport extends external.gw.xml.xsd.schema.XSDImportOrInclude
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IncludedNamespace")
  public java.lang.String getIncludedNamespace();


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDImport
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDImport newInstance()
    {
      return (XSDImport) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDImport.class, new Class[]{ } , new Object[]{ });
    }

  }
}
