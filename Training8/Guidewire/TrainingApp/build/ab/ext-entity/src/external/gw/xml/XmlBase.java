package external.gw.xml;

/**
 * The base of all XmlElements and XmlTypeInstances. Provides common methods to both, by delegating to the
type instance.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlBase extends external.gw.lang.reflect.gs.IGosuObject
{


  /**
   * Returns a map of all attribute simple values by QName.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeNames")
  public java.util.Set getAttributeNames();


  /**
   * Returns a list of all direct child elements.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Children")
  public java.util.List getChildren();


  /**
   * Returns the mixed content of this element.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MixedContent")
  public java.util.List getMixedContent();


  /**
   * Returns the simple value content, or null if one does not exist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SimpleValue")
  public external.gw.xml.XmlSimpleValue getSimpleValue();

  /**
   * Returns the simple value content, or null if one does not exist.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SimpleValue")
  public void setSimpleValue(external.gw.xml.XmlSimpleValue value);


  /**
   * Returns the text content.
This might not be the same text content that will actually be written at serialization time due
to special serialization-time handling of some simple types, such as xsd:QName or xsd:IDREF.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Text")
  public java.lang.String getText();

  /**
   * Returns the text content.
This might not be the same text content that will actually be written at serialization time due
to special serialization-time handling of some simple types, such as xsd:QName or xsd:IDREF.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Text")
  public void setText(java.lang.String value);

  /**
   * Adds a new direct child element.
   *
   * @param element The element to add
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(external.gw.xml.XmlElement element);

  /**
   * Returns the simple value of an attribute in the null namespace by local name.
   *
   * @return the simple value of the attribute, or null if the attribute is not set
   * @param attributeName The local name of the attribute in the null namespace
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeSimpleValue")
  public external.gw.xml.XmlSimpleValue getAttributeSimpleValue(java.lang.String attributeName);

  /**
   * Returns the simple value of an attribute by QName.
   *
   * @return the simple value of the attribute, or null if the attribute is not set
   * @param attributeName The attribute name
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeSimpleValue")
  public external.gw.xml.XmlSimpleValue getAttributeSimpleValue(javax.xml.namespace.QName attributeName);

  /**
   * Returns the string value of an attribute in the null namespace by local name. This may or may not be
the same value that will eventually be serialized, such as in the case of QNames, IDREFs, and other
special purpose simple types.
   *
   * @return the string value of the attribute, or null if the attribute is not set
   * @param attributeName The local name of the attribute in the null namespace
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeValue")
  public java.lang.String getAttributeValue(java.lang.String attributeName);

  /**
   * Returns the string value of an attribute by QName. This may or may not be the same value that will
eventually be serialized, such as in the case of QNames, IDREFs, and other special purpose simple types.
   *
   * @return the string value of the attribute, or null if the attribute is not set
   * @param attributeName The attribute name
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeValue")
  public java.lang.String getAttributeValue(javax.xml.namespace.QName attributeName);

  /**
   * Returns the direct child element with the specified local name in the null namespace, or null if no such direct child element exists.
   *
   * @return the direct child element with the specified name
   * @param name The local name of the child element in the null namespace
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChild")
  public external.gw.xml.XmlElement getChild(java.lang.String name);

  /**
   * Returns the direct child element with the specified name, or null if no such direct child element exists.
   *
   * @return the direct child element with the specified name
   * @param qname The name of the child element
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChild")
  public external.gw.xml.XmlElement getChild(javax.xml.namespace.QName qname);

  /**
   * Returns a list of direct child elements with the specified local name in the null namespace.
   *
   * @return a list of child elements with the specified name
   * @param name The local name of the child elements
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildren")
  public java.util.List getChildren(java.lang.String name);

  /**
   * Returns a list of direct child elements by name.
   *
   * @return a list of child elements with the specified name
   * @param qname The name of the child elements
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildren")
  public java.util.List getChildren(javax.xml.namespace.QName qname);

  /**
   * Removes the direct child element with the specified local name in the null namespace if it exists.
   *
   * @return the direct child element that was removed, or null if no action was taken
   * @param name The local name of the child element in the null namespace to remove
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChild")
  public external.gw.xml.XmlElement removeChild(java.lang.String name);

  /**
   * Removes the direct child element with the specified name if it exists.
   *
   * @return the direct child element that was removed, or null if no action was taken
   * @param qname The name of the child element to remove
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChild")
  public external.gw.xml.XmlElement removeChild(javax.xml.namespace.QName qname);

  /**
   * Removes all direct child elements with the specified local name in the null namespace.
   *
   * @return a list of removed elements
   * @param name The local name of the child elements
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChildren")
  public java.util.List removeChildren(java.lang.String name);

  /**
   * Removes all direct child elements with the specified name.
   *
   * @return a list of the removed elements
   * @param qname The name of the child elements
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChildren")
  public java.util.List removeChildren(javax.xml.namespace.QName qname);

  /**
   * Sets the simple value of an attribute in the null namespace by local name.
   *
   * @return the old simple value of the attribute, or null if the attribute was not previously set
   * @param attributeName The local name of the attribute in the null namespace
   * @param value The new simple value for the attribute
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeSimpleValue")
  public external.gw.xml.XmlSimpleValue setAttributeSimpleValue(java.lang.String attributeName, external.gw.xml.XmlSimpleValue value);

  /**
   * Sets the simple value of an attribute by QName.
   *
   * @return the old simple value of the attribute, or null if the attribute was not previously set
   * @param attributeName The attribute name
   * @param value The new simple value for the attribute
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeSimpleValue")
  public external.gw.xml.XmlSimpleValue setAttributeSimpleValue(javax.xml.namespace.QName attributeName, external.gw.xml.XmlSimpleValue value);

  /**
   * Sets the string value of an attribute in the null namespace by local name. The attribute will lose
any special simple type treatment, such as QName or IDREF handling, and will be serialized exactly
as set by this method.
   *
   * @return the old string value of the attribute, or null if the attribute was not previously set
   * @param attributeName The local name of the attribute in the null namespace
   * @param value The new string value of the attribute, or null to remove the attribute
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValue")
  public java.lang.String setAttributeValue(java.lang.String attributeName, java.lang.String value);

  /**
   * Sets the string value of an attribute by name. The attribute will lose any special simple type treatment,
such as QName or IDREF handling, and will be serialized exactly as set by this method.
   *
   * @return the old string value of the attribute, or null if the attribute was not previously set
   * @param attributeName The name of the attribute
   * @param value The new string value of the attribute, or null to remove the attribute
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValue")
  public java.lang.String setAttributeValue(javax.xml.namespace.QName attributeName, java.lang.String value);
}
