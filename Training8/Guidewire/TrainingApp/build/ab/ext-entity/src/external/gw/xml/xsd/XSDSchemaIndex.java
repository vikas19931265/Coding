package external.gw.xml.xsd;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDSchemaIndex <T>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Context")
  public T getContext();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnumsPackageName")
  public java.lang.String getEnumsPackageName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnumsSuffix")
  public java.lang.String getEnumsSuffix();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SeenTypes")
  public java.util.Set getSeenTypes();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypesPackageName")
  public java.lang.String getTypesPackageName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "XSDSource")
  public external.gw.xml.xsd.XSDSource getXSDSource();

  /**
   * null
   *
   * @param param Set<String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAllTypeNames")
  public void addAllTypeNames(java.util.Set param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getElementInfo")
  public external.gw.xml.xsd.info.XSDNodeTypeInfo getElementInfo(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEnumerationInfo")
  public external.gw.xml.xsd.info.XSDNodeValueInfo getEnumerationInfo(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFullyQualifiedNormalizedTypeName")
  public java.lang.String getFullyQualifiedNormalizedTypeName(java.lang.String param);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFullyQualifiedTypeName")
  public java.lang.String getFullyQualifiedTypeName(javax.xml.namespace.QName param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getGosuNamespaceByXMLNamespace")
  public java.lang.String getGosuNamespaceByXMLNamespace(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getGroupingByTypeName")
  public external.gw.xml.xsd.info.XSDGroupingInfo getGroupingByTypeName(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 ITypeLoader
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getOrCreateTypeInfo")
  public gw.pl.external.Type getOrCreateTypeInfo(java.lang.String param, external.gw.lang.reflect.ITypeLoader param1);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTopLevelAttributeByName")
  public external.gw.xml.xsd.schema.XSDAttribute getTopLevelAttributeByName(javax.xml.namespace.QName param);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTopLevelAttributeGroupByName")
  public external.gw.xml.xsd.schema.XSDAttributeGroup getTopLevelAttributeGroupByName(javax.xml.namespace.QName param);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTopLevelElementByName")
  public external.gw.xml.xsd.schema.XSDElement getTopLevelElementByName(javax.xml.namespace.QName param);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTopLevelElementTypeName")
  public java.lang.String getTopLevelElementTypeName(javax.xml.namespace.QName param);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTopLevelGroupByName")
  public external.gw.xml.xsd.schema.XSDGroup getTopLevelGroupByName(javax.xml.namespace.QName param);

  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTopLevelTypeByName")
  public external.gw.xml.xsd.schema.IXSDType getTopLevelTypeByName(javax.xml.namespace.QName param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.XSDSchemaIndex
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String
     * @param param1 XSDSource
     * @param param2 T
     * @param param3 String
     * @param param4 String
     * @param param5 String

     */
    public static <T> XSDSchemaIndex<T> newInstance(java.lang.String param, external.gw.xml.xsd.XSDSource param1, T param2, java.lang.String param3, java.lang.String param4, java.lang.String param5)
    {
      return (XSDSchemaIndex) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.XSDSchemaIndex.class, new Class[]{ java.lang.String.class, external.gw.xml.xsd.XSDSource.class, java.lang.Object.class, java.lang.String.class, java.lang.String.class, java.lang.String.class} , new Object[]{ param, param1, param2, param3, param4, param5});
    }

  }
}
