package external.gw.xml.xsd.typeloader;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDEnumerationTypeInfo extends external.gw.lang.reflect.TypeInfoBase
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Constructors")
  public java.util.List getConstructors();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredAnnotations")
  public java.util.List getDeclaredAnnotations();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Deprecated")
  public boolean isDeprecated();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeprecatedReason")
  public java.lang.String getDeprecatedReason();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Methods")
  public external.gw.lang.reflect.MethodList getMethods();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OwnersType")
  public gw.pl.external.Type getOwnersType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Properties")
  public java.util.List getProperties();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Values")
  public java.util.List getValues();

  /**
   * null
   *
   * @param param CharSequence
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getProperty")
  public external.gw.lang.reflect.IPropertyInfo getProperty(java.lang.CharSequence param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getValue")
  public external.gw.xml.xsd.typeloader.XSDEnumerationValue getValue(java.lang.String param);

  /**
   * null
   *
   * @param param IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasAnnotation")
  public boolean hasAnnotation(gw.pl.external.Type param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typeloader.XSDEnumerationTypeInfo
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IXsdEnumerationType
     * @param param1 XSDNodeValueInfo

     */
    public static XSDEnumerationTypeInfo newInstance(gw.pl.external.Type param, external.gw.xml.xsd.info.XSDNodeValueInfo param1)
    {
      return (XSDEnumerationTypeInfo) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typeloader.XSDEnumerationTypeInfo.class, new Class[]{ gw.pl.external.Type.class, external.gw.xml.xsd.info.XSDNodeValueInfo.class} , new Object[]{ param, param1});
    }

  }
}
