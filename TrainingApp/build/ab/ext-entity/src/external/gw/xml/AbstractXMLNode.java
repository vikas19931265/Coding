package external.gw.xml;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface AbstractXMLNode <N extends external.gw.xml.AbstractXMLNode> extends external.gw.xml.IXMLNode<N>, external.gw.xml.IXMLNodeParserCallbacks<N>
{


  /**
   * Gets the attributes of this node as a name/value map.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Attributes")
  public java.util.Map getAttributes();

  /**
   * Gets the attributes of this node as a name/value map.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Attributes")
  public void setAttributes(java.util.Map value);


  /**
   * Writes this node to an array of bytes, using the default format.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Bytes")
  public byte[] getBytes();


  /**
   * Returns a list of child xml nodes. Note if this node currently has no children,
the list may be an immutable empty list e.g., Collections.EMPTY_LIST. As such the
list returned from this method should be considered immutable. Tnus, if you
intend to modify this node's child list, please do not attempt to directly modify
the list returned from this method. Instead, call addChild(), removeChild() etc.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Children")
  public java.util.List getChildren();


  /**
   * Gets the comment associated with this node.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Comment")
  public java.lang.String getComment();

  /**
   * Gets the comment associated with this node.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Comment")
  public void setComment(java.lang.String value);


  /**
   * Determines whether this node is a comment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Commented")
  public boolean isCommented();

  /**
   * Determines whether this node is a comment.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Commented")
  public void setCommented(boolean value);


  /**
   * Gets the default element name for this node. This is used when the node has no element name
explicitly set.
   * @deprecated use #getDefaultQName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultElementName")
  public java.lang.String getDefaultElementName();


  /**
   * Gets the default qualified name for this node. This is used when the node has no qualified name
explicitly set.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DefaultQName")
  public javax.xml.namespace.QName getDefaultQName();


  /**
   * Gets this node's element name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementName")
  public java.lang.String getElementName();

  /**
   * Gets this node's element name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ElementName")
  public void setElementName(java.lang.String value);


  /**
   * Gets file location information about this node, if it was parsed from a file.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Location")
  public external.gw.xml.FileNameAndLineNumber getLocation();


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
   * Gets the number of child nodes.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NumChildren")
  public int getNumChildren();


  /**
   * Gets this node's parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public N getParent();

  /**
   * Gets this node's parent.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Parent")
  public void setParent(N value);


  /**
   * Gets this node's qualified name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QName")
  public javax.xml.namespace.QName getQName();

  /**
   * Gets this node's qualified name.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "QName")
  public void setQName(javax.xml.namespace.QName value);


  /**
   * Gets the root of this node tree.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Root")
  public N getRoot();


  /**
   * Gets this node's character data.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Text")
  public java.lang.String getText();

  /**
   * Gets this node's character data.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Text")
  public void setText(java.lang.String value);

  /**
   * Adds all the given nodes to this node's child list.
   *
   * @param all 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAllChildren")
  public void addAllChildren(java.util.List all);

  /**
   * Adds the given child to this node's child list.
   *
   * @param child 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(N child);

  /**
   * Inserts the given child into this node's child list at the given index.
   *
   * @param child 
   * @param index 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(N child, int index);

  /**
   * Inserts <tt>node</tt> before <tt>insertBefore</tt> in this node's child list. If <tt>insertBefore</tt> is null
or does not exist in this node's child list, then <tt>node</tt> is added to the end of the list.
   *
   * @param node 
   * @param insertBefore 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChildElementBefore")
  public void addChildElementBefore(N node, N insertBefore);

  /**
   * Adds a property change listener, which will be fired when an attribute value is set or removed.
   *
   * @param l 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addPropertyChangeListener")
  public void addPropertyChangeListener(java.beans.PropertyChangeListener l);

  /**
   * Returns this node as an instance of {@link external.gw.xml.IReadOnlyXMLNode}
   *
   * @deprecated This class now implements {@link IReadOnlyXMLNode}, so there's no need for this method. Just use this
object instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asReadOnlyNode")
  public external.gw.xml.IReadOnlyXMLNode asReadOnlyNode();

  /**
   * Writes this node to a string, using the default format.
   *
   * @return this node as a string.
   * @param encoding must be <tt>"UTF-8"</tt> or something compatible with <tt>UTF-8</tt>
   * @deprecated Use {@link #asUTFString()} instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asString")
  public java.lang.String asString(java.lang.String encoding) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to a string, using the default format.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asUTFString")
  public java.lang.String asUTFString();

  /**
   * Creates a new copy of this node tree. The returned node has no parent.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clone")
  public N clone();

  /**
   * Determines whether this node contains a value for the given attribute.
   *
   * @param attributeName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsAttribute")
  public boolean containsAttribute(java.lang.String attributeName);

  /**
   * Invokes the visitor on every node in this node tree.
   *
   * @param visitor 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "each")
  public void each(external.gw.xml.XMLNodeVisitor visitor);

  /**
   * Invokes the visitor on every node in this node tree that satisfies the given predicate.
   *
   * @param predicate 
   * @param visitor 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "each")
  public void each(external.gw.xml.XMLNodePredicate predicate, external.gw.xml.XMLNodeVisitor visitor);

  /**
   * Invokes the visitor on every node in this node tree that is an instance of the given class.
   *
   * @param type 
   * @param visitor 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "each")
  public <T extends external.gw.xml.IReadOnlyXMLNode> void each(java.lang.Class type, external.gw.xml.XMLNodeVisitor visitor);

  /**
   * Returns a list of all nodes in this node tree that satisfy the given predicate.
   *
   * @param predicate 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findAll")
  public java.util.List findAll(external.gw.xml.XMLNodePredicate predicate);

  /**
   * Returns the first node in this node tree that satisfies the given predicate, using a depth-first
traversal.
   *
   * @param predicate 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findFirst")
  public N findFirst(external.gw.xml.XMLNodePredicate predicate);

  /**
   * Returns the first node that ends on or previous to the specified line number.
   *
   * @return The first node that ends on or previous to the specified line number
   * @param targetFileNameAndLineNumber the line number to find
   * @deprecated Multiple nodes can exist on a line, and a single node can span multiple lines, if anything this should probably return a collection of nodes
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findNode")
  public N findNode(external.gw.xml.FileNameAndLineNumber targetFileNameAndLineNumber);

  /**
   * Adds this node's data to the given fingerprint. The data includes the element name, the attributes
sorted by attribute name, and the children's fingerprints.
   *
   * @param fingerprint 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "fingerprint")
  public void fingerprint(external.gw.util.fingerprint.FP64 fingerprint);

  /**
   * Gets the nearest ancestor of this node that is an instance of the given class. Returns this node
if this node is an instance of the given class.
   *
   * @param clazz 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAncestor")
  public <T extends external.gw.xml.IReadOnlyXMLNode> T getAncestor(java.lang.Class clazz);

  /**
   * Gets the value of the attribute with the given name.
   *
   * @param attributeName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeValue")
  public java.lang.String getAttributeValue(java.lang.String attributeName);

  /**
   * Gets the value of the attribute with the given qualified name.
   *
   * @param attributeName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeValue")
  public java.lang.String getAttributeValue(javax.xml.namespace.QName attributeName);

  /**
   * Finds the first immediate child of the specified class.
   *
   * @param elementClass 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildElement")
  public <T extends external.gw.xml.IXMLNode> T getChildElement(java.lang.Class elementClass);

  /**
   * Finds the first immediate child with the specified name, ignoring the namespace component.
   *
   * @return the element with the specified name, or null if none found
   * @param elementName the name of the element to find
   * @deprecated use {@link #getChildElement(javax.xml.namespace.QName)} instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildElement")
  public N getChildElement(java.lang.String elementName);

  /**
   * Finds the first immediate child with the specified qualified name.
   *
   * @param qName 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildElement")
  public N getChildElement(javax.xml.namespace.QName qName);

  /**
   * Gets the list of children that are instances of the given class.
   *
   * @param elementClass 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildList")
  public <T extends external.gw.xml.IXMLNode> java.util.List getChildList(java.lang.Class elementClass);

  /**
   * Finds all immediate children with the specified name, ignoring the namespace component.
   *
   * @return the elements with the specified name
   * @param elementName the name of the elements to find
   * @deprecated use {@link #getChildList(javax.xml.namespace.QName)} instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildList")
  public java.util.List getChildList(java.lang.String elementName);

  /**
   * Finds all immediate children with the specified qualified name.
   *
   * @param qname 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildList")
  public java.util.List getChildList(javax.xml.namespace.QName qname);

  /**
   * Gets the <tt>0</tt>-based index of the given node in this node's child list. Returns <tt>-1</tt>
if the node does not exist in the child list.
   *
   * @param child 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getIndexOfChild")
  public int getIndexOfChild(N child);

  /**
   * Gets the namespace for the given prefix.
   *
   * @param prefix 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNamespaceURIForPrefix")
  public java.lang.String getNamespaceURIForPrefix(java.lang.String prefix);

  /**
   * 
   *
   * @param qname 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getQNameForString")
  public javax.xml.namespace.QName getQNameForString(java.lang.String qname);

  /**
   * Determines whether this node has a parent.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasParent")
  public boolean hasParent();

  /**
   * Should only be called during parsing.
   *
   * @param child 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseAddChild")
  public void parseAddChild(external.gw.xml.IXMLNodeParserCallbacks child);

  /**
   * Should only be called during parsing.
   *
   * @param node 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseAddCommentedChild")
  public void parseAddCommentedChild(external.gw.xml.IXMLNodeParserCallbacks node);

  /**
   * Should only be called during parsing.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseNodeEnded")
  public void parseNodeEnded();

  /**
   * Should only be called during parsing.
   *
   * @param location 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseSetLocation")
  public void parseSetLocation(external.gw.xml.FileNameAndLineNumber location);

  /**
   * Should only be called during parsing.
   *
   * @param parent 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseSetParent")
  public void parseSetParent(external.gw.xml.IXMLNodeParserCallbacks parent);

  /**
   * Should only be called during parsing.
   *
   * @param text 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseSetText")
  public void parseSetText(java.lang.String text);

  /**
   * Performs a POST of this XML to the specified URL. Use getBytes() with a URLConnection if more control is needed.
   *
   * @return the response
   * @param url the URL to POST
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "postToURL")
  public byte[] postToURL(java.lang.String url) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to standard output.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "print")
  public void print();

  /**
   * Removes the given attribute.
   *
   * @param attribute 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeAttributeValue")
  public void removeAttributeValue(java.lang.String attribute);

  /**
   * Removes the given node for this node's child list.
   *
   * @param node 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChildElement")
  public void removeChildElement(N node);

  /**
   * Removes the first immediate child with the specified name, ignoring the namespace component.
   *
   * @param elementName the name of the element to remove
   * @deprecated use {@link #removeChildElement(javax.xml.namespace.QName)} instead
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChildElement")
  public void removeChildElement(java.lang.String elementName);

  /**
   * Removes the first immediate child with the specified QName.
   *
   * @param elementName the name of the element to remove
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChildElement")
  public void removeChildElement(javax.xml.namespace.QName elementName);

  /**
   * Removes the given property change listener.
   *
   * @param l 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removePropertyChangeListener")
  public void removePropertyChangeListener(java.beans.PropertyChangeListener l);

  /**
   * Sets the value of the given attribute.
   *
   * @param attribute 
   * @param value 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValue")
  public void setAttributeValue(java.lang.String attribute, java.lang.String value);

  /**
   * Sets the value of the given attribute.
   *
   * @param attributeName 
   * @param value 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValue")
  public void setAttributeValue(javax.xml.namespace.QName attributeName, java.lang.String value);

  /**
   * Sets the value of the given attribute.
   *
   * @param attributeName 
   * @param value 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setAttributeValueObject")
  public void setAttributeValueObject(java.lang.String attributeName, java.lang.Object value);

  /**
   * Should only be called during parsing.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDefaults")
  public void setDefaults();

  /**
   * Should only be called during parsing.
   *
   * @param namespacePrefixToURIMap 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setNamespaceMap")
  public void setNamespaceMap(java.util.Map namespacePrefixToURIMap);

  /**
   * Re-orders this node's children according to the given comparator.
   *
   * @param comparator 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "sortChildren")
  public void sortChildren(java.util.Comparator comparator);

  /**
   * Invokes the visitor on every node in this node tree. Unlike {@link #each(XMLNodeVisitor)}, this
method allows the visitor to modify the node's set of siblings. However, the visitor is only invoked
on the set of siblings that exists at the time of traversal.
   *
   * @param visitor 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "visitAllForUpgrade")
  public void visitAllForUpgrade(external.gw.xml.XMLNodeVisitor visitor);

  /**
   * Writes this node to the given writer, using the default format.
   *
   * @param out 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(external.gw.xml.XMLNodeWriter out) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given file, using the default format.
   *
   * @param f 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.File f) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given stream, using the default format.
   *
   * @param out 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream out) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given writer, using the given format.
   *
   * @param writer 
   * @param format 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(external.gw.xml.XMLNodeWriter writer, external.gw.xml.IXMLNodeFormat format) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given file, using the given format.
   *
   * @param f 
   * @param format 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.File f, external.gw.xml.IXMLNodeFormat format) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given stream, using the given format.
   *
   * @param os 
   * @param format 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream os, external.gw.xml.IXMLNodeFormat format) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given writer, using the given format. If the given predicate is not null,
then only nodes satisfying it are written.
   *
   * @param writer 
   * @param format 
   * @param predicate 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(external.gw.xml.XMLNodeWriter writer, external.gw.xml.IXMLNodeFormat format, external.gw.xml.XMLNodePredicate predicate) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given file, using the default format. If the given predicate is not null,
then only nodes satisfying it are written.
   *
   * @param f 
   * @param format 
   * @param predicate 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.File f, external.gw.xml.IXMLNodeFormat format, external.gw.xml.XMLNodePredicate predicate) throws gw.pl.external.GenericCheckedException;

  /**
   * Writes this node to the given stream, using the given format. If the given predicate is not null,
then only nodes satisfying it are written.
   *
   * @param os 
   * @param format 
   * @param predicate 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream os, external.gw.xml.IXMLNodeFormat format, external.gw.xml.XMLNodePredicate predicate) throws gw.pl.external.GenericCheckedException;
}
