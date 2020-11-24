package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXMLNode <N extends external.gw.xml.IXMLNode> extends external.gw.xml.IReadOnlyXMLNode<N>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attributes")
  public java.util.Map getAttributes();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementName")
  public java.lang.String getElementName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ElementName")
  public void setElementName(java.lang.String value);

  /**
   * 
   * @deprecated Use the 'Text' property instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NodeValue")
  public java.lang.String getNodeValue();

  /**
   * 
   * @deprecated Use the 'Text' property instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "NodeValue")
  public void setNodeValue(java.lang.String value);

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "QName")
  public void setQName(javax.xml.namespace.QName value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Text")
  public java.lang.String getText();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Text")
  public void setText(java.lang.String value);


  /**
   * null
   *
   * @param param String
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValue")
  public void setAttributeValue(java.lang.String param, java.lang.String param1);



  /**
   * null
   *
   * @param param XMLNodeVisitor<N>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "visitAllForUpgrade")
  public void visitAllForUpgrade(external.gw.xml.XMLNodeVisitor param);

}
