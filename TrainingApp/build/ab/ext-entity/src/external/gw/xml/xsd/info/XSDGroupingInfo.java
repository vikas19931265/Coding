package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDGroupingInfo extends external.gw.xml.xsd.info.IXSDChildElementInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Children")
  public java.util.List getChildren();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Delegate")
  public external.gw.xml.xsd.info.XSDGroupingInfoDelegate getDelegate();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Index")
  public int getIndex();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Index")
  public void setIndex(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaxOccurs")
  public int getMaxOccurs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MaxOccurs")
  public void setMaxOccurs(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MinOccurs")
  public int getMinOccurs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "MinOccurs")
  public void setMinOccurs(int value);


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeName")
  public java.lang.String getTypeName();

  /**
   * null
   *
   * @param param XSDElementRefInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(external.gw.xml.xsd.info.XSDElementRefInfo param);

  /**
   * null
   *
   * @param param XSDGroupingInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(external.gw.xml.xsd.info.XSDGroupingInfo param);

  /**
   * null
   *
   * @param param Map<String, XSDGroupingInfo>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addGroupingTypes")
  public void addGroupingTypes(java.util.Map param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignElementNames")
  public void assignElementNames(java.lang.Object param);

  /**
   * null
   *
   * @param param Set<String>
   * @param param1 Map<QName, String>
   * @param param2 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "configurePropertyNames")
  public java.util.Map configurePropertyNames(java.util.Set param, java.util.Map param1, java.lang.String param2);

  /**
   * null
   *
   * @param param List<XSDBasedXMLNode>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "divideChildren")
  public external.gw.xml.xsd.info.ParsedNodeList divideChildren(java.util.List param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "flattenAndIndex")
  public void flattenAndIndex();

  /**
   * null
   *
   * @param param ListIterator<XSDBasedXMLNode>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "matchChildren")
  public java.lang.Object matchChildren(java.util.ListIterator param);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newInstance")
  public external.gw.xml.xsd.info.NestedList newInstance(gw.pl.external.Type param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.info.XSDGroupingInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param XSDGroupingInfoDelegate

     */
    public static XSDGroupingInfo newInstance(external.gw.xml.xsd.info.XSDGroupingInfoDelegate param)
    {
      return (XSDGroupingInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.info.XSDGroupingInfo.class, new Class[]{ external.gw.xml.xsd.info.XSDGroupingInfoDelegate.class} , new Object[]{ param});
    }

  }
}
