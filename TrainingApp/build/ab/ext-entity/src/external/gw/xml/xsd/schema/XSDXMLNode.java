package external.gw.xml.xsd.schema;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDXMLNode extends external.gw.xml.AbstractXMLNode<external.gw.xml.xsd.schema.XSDXMLNode>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TargetNamespace")
  public java.lang.String getTargetNamespace();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TargetNamespace")
  public void setTargetNamespace(java.lang.String value);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.schema.XSDXMLNode
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDXMLNode newInstance()
    {
      return (XSDXMLNode) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDXMLNode.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param QName

     */
    public static XSDXMLNode newInstance(javax.xml.namespace.QName param)
    {
      return (XSDXMLNode) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.schema.XSDXMLNode.class, new Class[]{ javax.xml.namespace.QName.class} , new Object[]{ param});
    }

  }
}
