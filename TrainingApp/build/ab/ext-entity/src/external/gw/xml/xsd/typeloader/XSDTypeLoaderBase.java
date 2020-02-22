package external.gw.xml.xsd.typeloader;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDTypeLoaderBase <T> extends external.gw.lang.reflect.TypeLoaderBase
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllNamespaces")
  public java.util.Set getAllNamespaces();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AllSchemaNamespaces")
  public java.util.Collection getAllSchemaNamespaces();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CaseSensitive")
  public boolean isCaseSensitive();


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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "HandledPrefixes")
  public java.util.List getHandledPrefixes();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "computeTypeNames")
  public java.util.Set computeTypeNames();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findSchemaForNamespace")
  public external.gw.xml.xsd.XSDSchemaIndex findSchemaForNamespace(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getType")
  public gw.pl.external.Type getType(java.lang.String param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handlesNonPrefixLoads")
  public boolean handlesNonPrefixLoads();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshSchema")
  public void refreshSchema(java.lang.String param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "refreshSchemas")
  public void refreshSchemas();


  /**
   * Utility class for accessing static features for external.gw.xml.xsd.typeloader.XSDTypeLoaderBase
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
    public static java.lang.Iterable getAllXsdTypeloaders()
    {
      return (java.lang.Iterable) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "AllXsdTypeloaders");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getDOT_ENUM_PACKAGE()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "DOT_ENUM_PACKAGE");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getGW_XSD_NAMESPACE()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "GW_XSD_NAMESPACE");
    }

    /**
     * 
     * 
     */
    public static external.gw.util.concurrent.LockingLazyVar getIDREFS_PROPERTY_ITYPE()
    {
      return (external.gw.util.concurrent.LockingLazyVar) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "IDREFS_PROPERTY_ITYPE");
    }

    /**
     * 
     * 
     */
    public static external.gw.util.concurrent.LockingLazyVar getIDREF_PROPERTY_ITYPE()
    {
      return (external.gw.util.concurrent.LockingLazyVar) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "IDREF_PROPERTY_ITYPE");
    }

    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getIDREF_TYPE()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "IDREF_TYPE");
    }

    /**
     * 
     * 
     */
    public static javax.xml.namespace.QName getID_TYPE()
    {
      return (javax.xml.namespace.QName) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "ID_TYPE");
    }

    /**
     * 
     * 
     */
    public static java.lang.String getXSD_SCHEMA_FILE_SUFFIX()
    {
      return (java.lang.String) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "XSD_SCHEMA_FILE_SUFFIX");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param String
     */
    public static external.gw.xml.xsd.XSDSchemaIndex getSchemaForTypeFromXSDTypeLoaders(java.lang.String param)
    {
      return (external.gw.xml.xsd.XSDSchemaIndex) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "getSchemaForTypeFromXSDTypeLoaders", new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param String
     */
    public static external.gw.xml.xsd.XSDSchemaIndex getSchemaFromXSDTypeLoaders(java.lang.String param)
    {
      return (external.gw.xml.xsd.XSDSchemaIndex) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "getSchemaFromXSDTypeLoaders", new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     */
    public static void refreshSchemasFromAllTypeLoaders()
    {
      gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.xsd.typeloader.XSDTypeLoaderBase.class, "refreshSchemasFromAllTypeLoaders", new Class[]{ } , new Object[]{ });
    }

  }
}
