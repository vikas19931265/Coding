package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDAll extends external.gw.xml.xsd.schema.XSDElementContainer
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDAll
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDAll newInstance()
    {
      return (XSDAll) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDAll.class, new Class[]{ } , new Object[]{ });
    }

  }
}
