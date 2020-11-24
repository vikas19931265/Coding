package external.gw.xml.xsd.typeloader;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDBasedXMLNode extends external.gw.lang.reflect.gs.IGosuObject, external.gw.xml.AbstractXMLNode<external.gw.xml.xsd.typeloader.XSDBasedXMLNode>, external.gw.xml.xsd.IXMLNodeWithID<external.gw.xml.xsd.typeloader.XSDBasedXMLNode>
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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DividedChildrenDirectly")
  public external.gw.xml.xsd.info.ParsedNodeList getDividedChildrenDirectly();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "IntrinsicType")
  public gw.pl.external.Type getIntrinsicType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Nil")
  public boolean isNil();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Nil")
  public void setNil(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NodeID")
  public java.lang.String getNodeID();


  /**
   * Gets the value of this node.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NodeValueObject")
  public java.lang.Object getNodeValueObject();

  /**
   * Gets the value of this node.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NodeValueObject")
  public void setNodeValueObject(java.lang.Object value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public gw.pl.external.Type getType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(gw.pl.external.Type value);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignElementNamesIfNecessary")
  public void assignElementNamesIfNecessary();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasReferences")
  public boolean hasReferences();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasRootChoice")
  public boolean hasRootChoice();

  /**
   * null
   *
   * @param param IXMLNodeParserCallbacks
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseAddChild")
  public void parseAddChild(external.gw.xml.IXMLNodeParserCallbacks param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseNodeEnded")
  public void parseNodeEnded();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseSetText")
  public void parseSetText(java.lang.String param);

  /**
   * null
   *
   * @param param String
   * @param param1 Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValueObject")
  public void setAttributeValueObject(java.lang.String param, java.lang.Object param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setHasReferences")
  public void setHasReferences();

  /**
   * null
   *
   * @param param Map<String, XSDBasedXMLNode>
   * @param param1 Map<Pair<XSDBasedXMLNode, String>, Object>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "topLevelNodeFinished")
  public void topLevelNodeFinished(java.util.Map param, java.util.Map param1);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typeloader.XSDBasedXMLNode
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XSDBasedXMLNode newInstance()
    {
      return (XSDBasedXMLNode) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typeloader.XSDBasedXMLNode.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param IXmlNodeTypeFromXsd

     */
    public static XSDBasedXMLNode newInstance(gw.pl.external.Type param)
    {
      return (XSDBasedXMLNode) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typeloader.XSDBasedXMLNode.class, new Class[]{ gw.pl.external.Type.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param QName

     */
    public static XSDBasedXMLNode newInstance(javax.xml.namespace.QName param)
    {
      return (XSDBasedXMLNode) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typeloader.XSDBasedXMLNode.class, new Class[]{ javax.xml.namespace.QName.class} , new Object[]{ param});
    }

  }
}
