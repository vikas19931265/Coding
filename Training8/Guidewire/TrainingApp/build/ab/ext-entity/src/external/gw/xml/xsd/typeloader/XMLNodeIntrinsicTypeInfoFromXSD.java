package external.gw.xml.xsd.typeloader;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XMLNodeIntrinsicTypeInfoFromXSD <T> extends external.gw.lang.reflect.FeatureManagerTypeInfoBase<java.lang.String>, external.gw.lang.reflect.IRelativeTypeInfo
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeDefaults")
  public java.util.Map getAttributeDefaults();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredConstructors")
  public java.util.List getDeclaredConstructors();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredMethods")
  public java.util.List getDeclaredMethods();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredProperties")
  public java.util.List getDeclaredProperties();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementInfo")
  public external.gw.xml.xsd.info.XSDNodeTypeInfo getElementInfo();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OwnersTypeAsXsdType")
  public gw.pl.external.Type getOwnersTypeAsXsdType();


  /**
   * Utility class for accessing static features for external.gw.xml.xsd.typeloader.XMLNodeIntrinsicTypeInfoFromXSD
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static java.lang.String getVALUE_PROPERTY_NAME()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XMLNodeIntrinsicTypeInfoFromXSD.class, "VALUE_PROPERTY_NAME");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param Set<String>
     */
    public static void addDefaultPropertyNames(java.util.Set param)
    {
      gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.xsd.typeloader.XMLNodeIntrinsicTypeInfoFromXSD.class, "addDefaultPropertyNames", new Class[]{ java.util.Set.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typeloader.XMLNodeIntrinsicTypeInfoFromXSD
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IXmlNodeTypeFromXsd
     * @param param1 XSDNodeTypeInfo
     * @param param2 XSDSchemaIndex<T>

     */
    public static <T> XMLNodeIntrinsicTypeInfoFromXSD<T> newInstance(gw.pl.external.Type param, external.gw.xml.xsd.info.XSDNodeTypeInfo param1, external.gw.xml.xsd.XSDSchemaIndex param2)
    {
      return (XMLNodeIntrinsicTypeInfoFromXSD) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typeloader.XMLNodeIntrinsicTypeInfoFromXSD.class, new Class[]{ gw.pl.external.Type.class, external.gw.xml.xsd.info.XSDNodeTypeInfo.class, external.gw.xml.xsd.XSDSchemaIndex.class} , new Object[]{ param, param1, param2});
    }

  }
}
