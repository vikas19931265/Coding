package external.gw.xml;

/**
 * Represents an XML element. Unlike DOM, it does not directly contain any children. It has a backing XML type
instance (XmlTypeInstance), however, which contains it's children. Call getTypeInstance() to access the backing
type instance. All of the methods and properties of the backing type instance have been re-exposed on the
XmlElement, however, so accessing the backing type instance directly should rarely be necessary.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlElement extends external.gw.xml.IXmlMixedContent, external.gw.xml.XmlBase
{


  /**
   * Returns the comment previously set on this element, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Comment")
  public java.lang.String getComment();

  /**
   * Returns the comment previously set on this element, if applicable.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Comment")
  public void setComment(java.lang.String value);


  /**
   * Returns a list of explicitly declared namespaces at this element's level.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeclaredNamespaces")
  public java.util.List getDeclaredNamespaces();


  /**
   * Returns the namespace of this element.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Namespace")
  public external.gw.xml.XmlNamespace getNamespace();


  /**
   * Returns the namespace context of this element.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NamespaceContext")
  public java.util.Map getNamespaceContext();


  /**
   * Returns true if this element is nil.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Nil")
  public boolean isNil();

  /**
   * Returns true if this element is nil.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Nil")
  public void setNil(boolean value);


  /**
   * Returns the QName of this element.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QName")
  public javax.xml.namespace.QName getQName();

  /**
   * Serializes this element to a string. The returned string is in a format suitable for byte conversion
to either UTF-8 or UTF-16 (with a leading byte order mark to indicate endianness). The use of
getBytes() is highly recommended over the use of this method.
   *
   * @return a string containing the serialized XML
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asUTFString")
  public java.lang.String asUTFString();

  /**
   * Serializes this element to a string. The returned string is in a format suitable for byte conversion
to either UTF-8 or UTF-16 (with a leading byte order mark to indicate endianness). The use of
getBytes() is highly recommended over the use of this method.
   *
   * @return a string containing the serialized XML
   * @param options the options to control serialization
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "asUTFString")
  public java.lang.String asUTFString(external.gw.xml.XmlSerializationOptions options);

  /**
   * Serializes this element to a byte array using UTF-8 encoding.
   *
   * @return a byte array containing the serialized XML
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "bytes")
  public byte[] bytes();

  /**
   * Serializes this element to a byte array using UTF-8 encoding.
   *
   * @return a byte array containing the serialized XML
   * @param options the options to control serialization
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "bytes")
  public byte[] bytes(external.gw.xml.XmlSerializationOptions options);

  /**
   * Explicitly declares an XML namespace and a suggested prefix at this level.
The prefix that actually ends up being bound to the namespace may not be the same as the suggested prefix.
   *
   * @param ns the XmlNamespace that contains the namespace URI to be declared and the suggested prefix to which the namespace should be bound
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "declareNamespace")
  public void declareNamespace(external.gw.xml.XmlNamespace ns);

  /**
   * Explicitly declares an XML namespace at this level with the specified namespace URI.
   *
   * @param nsuri the namespace URI to be declared
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "declareNamespace")
  public void declareNamespace(java.net.URI nsuri);

  /**
   * Explicitly declares an XML namespace and a suggested prefix at this level.
The prefix that actually ends up being bound to the namespace may not be the same as the suggested prefix.
   *
   * @param qname the qname that contains the namespace URI to be declared and the suggested prefix to which the namespace should be bound
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "declareNamespace")
  public void declareNamespace(javax.xml.namespace.QName qname);

  /**
   * Explicitly declares an XML namespace and a suggested prefix at this level.
The prefix that actually ends up being bound to the namespace may not be the same as the suggested prefix.
   *
   * @param nsuri the namespace URI to which the prefix should be bound
   * @param suggestedPrefix the suggested prefix to use
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "declareNamespace")
  public void declareNamespace(java.net.URI nsuri, java.lang.String suggestedPrefix);

  /**
   * Serializes this element to the console. Equivalent to System.out.println( asUTFString() )
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "print")
  public void print();

  /**
   * Serializes this element to the console. Equivalent to System.out.println( asUTFString() )
   *
   * @param options the options to control serialization
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "print")
  public void print(external.gw.xml.XmlSerializationOptions options);

  /**
   * Serializes this element to the specified output stream using UTF-8 encoding. The stream will not be closed.
   *
   * @param out the output stream where the data should be written
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream out);

  /**
   * Serializes this element to the specified output stream using UTF-8 encoding. The stream will not be closed.
   *
   * @param out the output stream where the data should be written
   * @param options the options to control serialization
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeTo")
  public void writeTo(java.io.OutputStream out, external.gw.xml.XmlSerializationOptions options);


  /**
   * Utility class for accessing static features for external.gw.xml.XmlElement
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * Parses XML from the specified byte array.
     *
     * @return An XmlElement representing the XML content
     * @param bytes The byte array containing the XML
     */
    public static external.gw.xml.XmlElement parse(byte[] bytes)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ byte[].class} , new Object[]{ bytes});
    }

    /**
     * Parses XML from the specified file.
     *
     * @return An XmlElement representing the XML content
     * @param file The file containing the XML
     */
    public static external.gw.xml.XmlElement parse(java.io.File file)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.io.File.class} , new Object[]{ file});
    }

    /**
     * Parses XML from the specified input stream. The input stream will be closed by this method.
     *
     * @return An XmlElement representing the XML content
     * @param stream The stream containing the XML
     */
    public static external.gw.xml.XmlElement parse(java.io.InputStream stream)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.io.InputStream.class} , new Object[]{ stream});
    }

    /**
     * Parses XML from the specified reader. The reader will be closed by this method.
     *
     * @return An XmlElement representing the XML content
     * @param reader The reader containing the XML
     */
    public static external.gw.xml.XmlElement parse(java.io.Reader reader)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.io.Reader.class} , new Object[]{ reader});
    }

    /**
     * Parses XML from the specified string.
     *
     * @return An XmlElement representing the XML content
     * @param string The string containing the XML
     */
    public static external.gw.xml.XmlElement parse(java.lang.String string)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.lang.String.class} , new Object[]{ string});
    }

    /**
     * Parses XML from the specified URL.
     *
     * @return An XmlElement representing the XML content
     * @param url The URL containing the XML
     */
    public static external.gw.xml.XmlElement parse(java.net.URL url)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.net.URL.class} , new Object[]{ url});
    }

    /**
     * Parses XML from the specified byte array.
     *
     * @return An XmlElement representing the XML content
     * @param bytes The byte array containing the XML
     * @param options parsing options
     */
    public static external.gw.xml.XmlElement parse(byte[] bytes, external.gw.xml.XmlParseOptions options)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ byte[].class, external.gw.xml.XmlParseOptions.class} , new Object[]{ bytes, options});
    }

    /**
     * Parses XML from the specified file.
     *
     * @return An XmlElement representing the XML content
     * @param file The file containing the XML
     * @param options parsing options
     */
    public static external.gw.xml.XmlElement parse(java.io.File file, external.gw.xml.XmlParseOptions options)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.io.File.class, external.gw.xml.XmlParseOptions.class} , new Object[]{ file, options});
    }

    /**
     * Parses XML from the specified input stream. The input stream will be closed by this method.
     *
     * @return An XmlElement representing the XML content
     * @param stream The stream containing the XML
     * @param options parsing options
     */
    public static external.gw.xml.XmlElement parse(java.io.InputStream stream, external.gw.xml.XmlParseOptions options)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.io.InputStream.class, external.gw.xml.XmlParseOptions.class} , new Object[]{ stream, options});
    }

    /**
     * Parses XML from the specified reader. The reader will be closed by this method.
     *
     * @return An XmlElement representing the XML content
     * @param reader The reader containing the XML
     * @param options parsing options
     */
    public static external.gw.xml.XmlElement parse(java.io.Reader reader, external.gw.xml.XmlParseOptions options)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.io.Reader.class, external.gw.xml.XmlParseOptions.class} , new Object[]{ reader, options});
    }

    /**
     * Parses XML from the specified string.
     *
     * @return An XmlElement representing the XML content
     * @param string The string containing the XML
     * @param options parsing options
     */
    public static external.gw.xml.XmlElement parse(java.lang.String string, external.gw.xml.XmlParseOptions options)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.lang.String.class, external.gw.xml.XmlParseOptions.class} , new Object[]{ string, options});
    }

    /**
     * Parses XML from the specified URL.
     *
     * @return An XmlElement representing the XML content
     * @param url The URL containing the XML
     * @param options parsing options
     */
    public static external.gw.xml.XmlElement parse(java.net.URL url, external.gw.xml.XmlParseOptions options)
    {
      return (external.gw.xml.XmlElement) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlElement.class, "parse", new Class[]{ java.net.URL.class, external.gw.xml.XmlParseOptions.class} , new Object[]{ url, options});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.xml.XmlElement
   */
  public static class CONSTRUCT
  {

    /**
     * Creates a new element with the specified local name in the null namespace,
and an empty gw.xsd.w3c.xmlschema.types.complex.AnyType backing type instance.
     *
     * @param name the name of the element in the null namespace

     */
    public static XmlElement newInstance(java.lang.String name)
    {
      return (XmlElement) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XmlElement.class, new Class[]{ java.lang.String.class} , new Object[]{ name});
    }

    /**
     * Creates a new element with the specified QName,
and an empty gw.xsd.w3c.xmlschema.types.complex.AnyType backing type instance.
     *
     * @param qname The QName for the element

     */
    public static XmlElement newInstance(javax.xml.namespace.QName qname)
    {
      return (XmlElement) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XmlElement.class, new Class[]{ javax.xml.namespace.QName.class} , new Object[]{ qname});
    }

  }
}
