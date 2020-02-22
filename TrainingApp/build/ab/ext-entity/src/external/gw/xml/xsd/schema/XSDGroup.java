package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDGroup extends external.gw.xml.xsd.schema.XSDElementContainer
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public javax.xml.namespace.QName getName();


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDGroup
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDGroup newInstance()
    {
      return (XSDGroup) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDGroup.class, new Class[]{ } , new Object[]{ });
    }

  }
}
