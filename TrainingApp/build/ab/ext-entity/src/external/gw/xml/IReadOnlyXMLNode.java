package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IReadOnlyXMLNode <N extends external.gw.xml.IReadOnlyXMLNode>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Bytes")
  public byte[] getBytes();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ElementName")
  public java.lang.String getElementName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public N getParent();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Text")
  public java.lang.String getText();


  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asString")
  public java.lang.String asString(java.lang.String param) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asUTFString")
  public java.lang.String asUTFString();



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsAttribute")
  public boolean containsAttribute(java.lang.String param);



  /**
   * null
   *
   * @param param XMLNodeVisitor<N>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "each")
  public void each(external.gw.xml.XMLNodeVisitor param);



  /**
   * null
   *
   * @param param XMLNodePredicate<N>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findAll")
  public java.util.List findAll(external.gw.xml.XMLNodePredicate param);



  /**
   * null
   *
   * @param param XMLNodePredicate<N>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findFirst")
  public N findFirst(external.gw.xml.XMLNodePredicate param);



  /**
   * null
   *
   * @param param Class<T>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAncestor")
  public <T extends external.gw.xml.IReadOnlyXMLNode> external.gw.xml.IReadOnlyXMLNode getAncestor(java.lang.Class param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeValue")
  public java.lang.String getAttributeValue(java.lang.String param);



  /**
   * null
   *
   * @param param QName
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getAttributeValue")
  public java.lang.String getAttributeValue(javax.xml.namespace.QName param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getNamespaceURIForPrefix")
  public java.lang.String getNamespaceURIForPrefix(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "postToURL")
  public byte[] postToURL(java.lang.String param) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "print")
  public void print();



  /**
   * null
   *
   * @param param XMLNodeWriter
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(external.gw.xml.XMLNodeWriter param) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param File
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.File param) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param OutputStream
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream param) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param XMLNodeWriter
   * @param param1 IXMLNodeFormat
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(external.gw.xml.XMLNodeWriter param, external.gw.xml.IXMLNodeFormat param1) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param File
   * @param param1 IXMLNodeFormat
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.File param, external.gw.xml.IXMLNodeFormat param1) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param OutputStream
   * @param param1 IXMLNodeFormat
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream param, external.gw.xml.IXMLNodeFormat param1) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param XMLNodeWriter
   * @param param1 IXMLNodeFormat
   * @param param2 XMLNodePredicate<N>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(external.gw.xml.XMLNodeWriter param, external.gw.xml.IXMLNodeFormat param1, external.gw.xml.XMLNodePredicate param2) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param File
   * @param param1 IXMLNodeFormat
   * @param param2 XMLNodePredicate<N>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.File param, external.gw.xml.IXMLNodeFormat param1, external.gw.xml.XMLNodePredicate param2) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param OutputStream
   * @param param1 IXMLNodeFormat
   * @param param2 XMLNodePredicate<N>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream param, external.gw.xml.IXMLNodeFormat param1, external.gw.xml.XMLNodePredicate param2) throws gw.pl.external.GenericCheckedException;

}
