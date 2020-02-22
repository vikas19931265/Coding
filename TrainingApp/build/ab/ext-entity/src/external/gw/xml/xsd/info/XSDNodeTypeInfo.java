package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDNodeTypeInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attributes")
  public java.util.List getAttributes();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementName")
  public javax.xml.namespace.QName getElementName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ElementName")
  public void setElementName(javax.xml.namespace.QName value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Grouping")
  public external.gw.xml.xsd.info.XSDGroupingInfo getGrouping();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Grouping")
  public void setGrouping(external.gw.xml.xsd.info.XSDGroupingInfo value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IDAttributeName")
  public java.lang.String getIDAttributeName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeName")
  public java.lang.String getTypeName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValueInfo")
  public external.gw.xml.xsd.info.XSDNodeValueInfo getValueInfo();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ValueInfo")
  public void setValueInfo(external.gw.xml.xsd.info.XSDNodeValueInfo value);

  /**
   * null
   *
   * @param param XSDAttributeInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAttribute")
  public void addAttribute(external.gw.xml.xsd.info.XSDAttributeInfo param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "finish")
  public void finish();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPropertyNameByAttributeName")
  public java.lang.String getPropertyNameByAttributeName(java.lang.String param);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getPropertyNameByElementName")
  public java.lang.String getPropertyNameByElementName(javax.xml.namespace.QName param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasID")
  public boolean hasID();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasValue")
  public boolean hasValue();

  /**
   * null
   *
   * @param param XSDGroupingInfo
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mergeGrouping")
  public void mergeGrouping(external.gw.xml.xsd.info.XSDGroupingInfo param, java.lang.String param1);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.info.XSDNodeTypeInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static XSDNodeTypeInfo newInstance(java.lang.String param)
    {
      return (XSDNodeTypeInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.info.XSDNodeTypeInfo.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
