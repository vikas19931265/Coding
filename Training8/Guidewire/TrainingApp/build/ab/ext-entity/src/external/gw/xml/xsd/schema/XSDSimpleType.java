package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDSimpleType extends external.gw.xml.xsd.schema.XSDTypeBase
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();

  /**
   * null
   *
   * @param param XSDSchemaIndex
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createTypeInfo")
  public external.gw.xml.xsd.info.XSDNodeTypeInfo createTypeInfo(external.gw.xml.xsd.XSDSchemaIndex param);

  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateType")
  public void populateType(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1);

  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "populateTypeInfo")
  public void populateTypeInfo(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1, java.lang.String param2);


  /**
   * Utility class for accessing static features for external.gw.xml.xsd.schema.XSDSimpleType
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
    public static java.lang.String getNAME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDSimpleType.class, "NAME");
    }

    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getRESTRICTION()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDSimpleType.class, "RESTRICTION");
    }

    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getUNION()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDSimpleType.class, "UNION");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDSimpleType
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDSimpleType newInstance()
    {
      return (XSDSimpleType) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDSimpleType.class, new Class[]{ } , new Object[]{ });
    }

  }
}
