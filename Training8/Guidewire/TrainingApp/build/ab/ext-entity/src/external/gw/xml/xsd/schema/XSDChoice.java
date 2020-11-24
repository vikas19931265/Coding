package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDChoice extends external.gw.xml.xsd.schema.XSDElementContainer
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();


  /**
   * Utility class for accessing static features for external.gw.xml.xsd.schema.XSDChoice
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getELEMENTS()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDChoice.class, "ELEMENTS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getMAX_OCCURS()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDChoice.class, "MAX_OCCURS");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getMIN_OCCURS()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDChoice.class, "MIN_OCCURS");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDChoice
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDChoice newInstance()
    {
      return (XSDChoice) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDChoice.class, new Class[]{ } , new Object[]{ });
    }

  }
}
