package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDElementRefInfo extends external.gw.xml.xsd.info.IXSDChildElementInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AnyType")
  public boolean isAnyType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementType")
  public gw.pl.external.Type getElementType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FullTypeName")
  public java.lang.String getFullTypeName();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QName")
  public javax.xml.namespace.QName getQName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SchemaIndex")
  public external.gw.xml.xsd.XSDSchemaIndex getSchemaIndex();

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
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "configurePropertyName")
  public java.lang.String configurePropertyName(java.util.Set param);

  /**
   * null
   *
   * @param param ListIterator<XSDBasedXMLNode>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "matchChildren")
  public java.lang.Object matchChildren(java.util.ListIterator param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.info.XSDElementRefInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param XSDSchemaIndex
     * @param param1 QName
     * @param param2 LockingLazyVar<String>

     */
    public static XSDElementRefInfo newInstance(external.gw.xml.xsd.XSDSchemaIndex param, javax.xml.namespace.QName param1, external.gw.util.concurrent.LockingLazyVar param2)
    {
      return (XSDElementRefInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.info.XSDElementRefInfo.class, new Class[]{ external.gw.xml.xsd.XSDSchemaIndex.class, javax.xml.namespace.QName.class, external.gw.util.concurrent.LockingLazyVar.class} , new Object[]{ param, param1, param2});
    }

    /**
     * null
     *
     * @param param XSDSchemaIndex
     * @param param1 QName
     * @param param2 String

     */
    public static XSDElementRefInfo newInstance(external.gw.xml.xsd.XSDSchemaIndex param, javax.xml.namespace.QName param1, java.lang.String param2)
    {
      return (XSDElementRefInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.info.XSDElementRefInfo.class, new Class[]{ external.gw.xml.xsd.XSDSchemaIndex.class, javax.xml.namespace.QName.class, java.lang.String.class} , new Object[]{ param, param1, param2});
    }

  }
}
