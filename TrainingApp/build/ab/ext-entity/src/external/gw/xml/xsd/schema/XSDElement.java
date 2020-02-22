package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDElement extends external.gw.xml.xsd.schema.XSDXMLNode
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ComplexType")
  public external.gw.xml.xsd.schema.XSDComplexType getComplexType();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementContainers")
  public java.util.List getElementContainers();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Form")
  public external.gw.xml.xsd.schema.XSDFormType getForm();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxOccurs")
  public java.lang.String getMaxOccurs();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinOccurs")
  public java.lang.String getMinOccurs();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public javax.xml.namespace.QName getName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Ref")
  public javax.xml.namespace.QName getRef();


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
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeQName")
  public javax.xml.namespace.QName getTypeQName();

  /**
   * null
   *
   * @param param XSDSchemaIndex
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "createRefInfo")
  public external.gw.xml.xsd.info.XSDElementRefInfo createRefInfo(external.gw.xml.xsd.XSDSchemaIndex param);

  /**
   * null
   *
   * @param param XSDSchemaIndex
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getIntrinsicTypeName")
  public java.lang.String getIntrinsicTypeName(external.gw.xml.xsd.XSDSchemaIndex param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasTextValue")
  public boolean hasTextValue();


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDElement
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param XSDXMLNode

     */
    public static XSDElement newInstance(external.gw.xml.xsd.schema.XSDXMLNode param)
    {
      return (XSDElement) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDElement.class, new Class[]{ external.gw.xml.xsd.schema.XSDXMLNode.class} , new Object[]{ param});
    }

  }
}
