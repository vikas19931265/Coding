package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDAttributeInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Default")
  public java.lang.String getDefault();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Default")
  public void setDefault(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Prohibited")
  public boolean isProhibited();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Prohibited")
  public void setProhibited(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PropertyName")
  public java.lang.String getPropertyName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Required")
  public boolean isRequired();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Required")
  public void setRequired(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SimpleType")
  public external.gw.xml.xsd.info.XSDNodeValueInfo getSimpleType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SimpleType")
  public void setSimpleType(external.gw.xml.xsd.info.XSDNodeValueInfo value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public javax.xml.namespace.QName getType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(javax.xml.namespace.QName value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeWrapper")
  public external.gw.xml.xsd.typewrapper.XSDTypeWrapper getTypeWrapper();

  /**
   * null
   *
   * @param param Set<String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "configurePropertyName")
  public java.lang.String configurePropertyName(java.util.Set param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.info.XSDAttributeInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static XSDAttributeInfo newInstance(java.lang.String param)
    {
      return (XSDAttributeInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.info.XSDAttributeInfo.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
