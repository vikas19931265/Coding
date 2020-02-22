package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDComplexType extends external.gw.xml.xsd.schema.XSDTypeBase
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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefinitionContainer")
  public external.gw.xml.xsd.schema.XSDXMLNode getDefinitionContainer();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementContainers")
  public java.util.List getElementContainers();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SubstitutionGroup")
  public java.lang.String getSubstitutionGroup();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SuperType")
  public javax.xml.namespace.QName getSuperType();

  /**
   * null
   *
   * @param param XSDNodeTypeInfo
   * @param param1 XSDSchemaIndex
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addDefinitions")
  public void addDefinitions(external.gw.xml.xsd.info.XSDNodeTypeInfo param, external.gw.xml.xsd.XSDSchemaIndex param1, java.lang.String param2);

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
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasTextValue")
  public boolean hasTextValue();

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
   * Utility class for accessing static features for external.gw.xml.xsd.schema.XSDComplexType
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
    public static javax.xml.namespace.QName getATTRIBUTES()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDComplexType.class, "ATTRIBUTES");
    }

    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getCHOICE()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDComplexType.class, "CHOICE");
    }

    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getCOMPLEX_CONTENT()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDComplexType.class, "COMPLEX_CONTENT");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getNAME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDComplexType.class, "NAME");
    }

    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getSIMPLE_CONTENT()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.schema.XSDComplexType.class, "SIMPLE_CONTENT");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDComplexType
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDComplexType newInstance()
    {
      return (XSDComplexType) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDComplexType.class, new Class[]{ } , new Object[]{ });
    }

  }
}
