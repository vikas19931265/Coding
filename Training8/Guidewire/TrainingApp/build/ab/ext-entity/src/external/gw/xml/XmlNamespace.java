package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlNamespace
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NamespaceURI")
  public java.lang.String getNamespaceURI();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Prefix")
  public java.lang.String getPrefix();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "qualify")
  public javax.xml.namespace.QName qualify(java.lang.String param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toURI")
  public java.net.URI toURI() throws gw.pl.external.GenericCheckedException;


  /**
   * Utility class for accessing static features for external.gw.xml.XmlNamespace
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
    public static external.gw.xml.XmlNamespace getNULL_NAMESPACE()
    {
      return (external.gw.xml.XmlNamespace) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.XmlNamespace.class, "NULL_NAMESPACE");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param QName
     */
    public static external.gw.xml.XmlNamespace forQName(javax.xml.namespace.QName param)
    {
      return (external.gw.xml.XmlNamespace) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlNamespace.class, "forQName", new Class[]{ javax.xml.namespace.QName.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.xml.XmlNamespace
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static XmlNamespace newInstance(java.lang.String param)
    {
      return (XmlNamespace) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XmlNamespace.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param String
     * @param param1 String

     */
    public static XmlNamespace newInstance(java.lang.String param, java.lang.String param1)
    {
      return (XmlNamespace) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XmlNamespace.class, new Class[]{ java.lang.String.class, java.lang.String.class} , new Object[]{ param, param1});
    }

  }
}
