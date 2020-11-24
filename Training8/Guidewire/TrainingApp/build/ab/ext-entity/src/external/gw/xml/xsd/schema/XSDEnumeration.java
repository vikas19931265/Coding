package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDEnumeration extends external.gw.xml.xsd.schema.IXSDRestrictionFacet, external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Value")
  public java.lang.String getValue();

  /**
   * null
   *
   * @param param XSDNodeValueInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "applyRestriction")
  public void applyRestriction(external.gw.xml.xsd.info.XSDNodeValueInfo param);


  /**
   * Utility class for accessing static features for external.gw.xml.xsd.schema.XSDEnumeration
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
    public static java.lang.String getVALUE()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDEnumeration.class, "VALUE");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDEnumeration
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDEnumeration newInstance()
    {
      return (XSDEnumeration) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDEnumeration.class, new Class[]{ } , new Object[]{ });
    }

  }
}
