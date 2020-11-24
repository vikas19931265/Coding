package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XMLNodeWriter
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "_indent")
  public int get_indent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "_indent")
  public void set_indent(int value);

  /**
   * null
   *
   * @param param String
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addNamespace")
  public java.lang.String addNamespace(java.lang.String param, java.lang.String param1) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addValue")
  public void addValue(java.lang.String param) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "endElement")
  public void endElement(boolean param) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "flush")
  public void flush() throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param String
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "printAttribute")
  public void printAttribute(java.lang.String param, java.lang.String param1) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param QName
   * @param param1 String
   * @param param2 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "startElement")
  public void startElement(javax.xml.namespace.QName param, java.lang.String param1, boolean param2) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeCommentPrefix")
  public void writeCommentPrefix() throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "writeCommentSuffix")
  public void writeCommentSuffix() throws gw.pl.external.GenericCheckedException;


  /**
   * Utility class for initializing an instance of external.gw.xml.XMLNodeWriter
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param OutputStream
     * @param param1 IXMLNodeFormat

     */
    public static XMLNodeWriter newInstance(java.io.OutputStream param, external.gw.xml.IXMLNodeFormat param1)
    {
      return (XMLNodeWriter) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XMLNodeWriter.class, new Class[]{ java.io.OutputStream.class, external.gw.xml.IXMLNodeFormat.class} , new Object[]{ param, param1});
    }

    /**
     * null
     *
     * @param param Writer
     * @param param1 IXMLNodeFormat
     * @param param2 boolean

     */
    public static XMLNodeWriter newInstance(java.io.Writer param, external.gw.xml.IXMLNodeFormat param1, boolean param2)
    {
      return (XMLNodeWriter) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XMLNodeWriter.class, new Class[]{ java.io.Writer.class, external.gw.xml.IXMLNodeFormat.class, boolean.class} , new Object[]{ param, param1, param2});
    }

    /**
     * null
     *
     * @param param Writer
     * @param param1 IXMLNodeFormat
     * @param param2 boolean
     * @param param3 boolean

     */
    public static XMLNodeWriter newInstance(java.io.Writer param, external.gw.xml.IXMLNodeFormat param1, boolean param2, boolean param3)
    {
      return (XMLNodeWriter) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XMLNodeWriter.class, new Class[]{ java.io.Writer.class, external.gw.xml.IXMLNodeFormat.class, boolean.class, boolean.class} , new Object[]{ param, param1, param2, param3});
    }

  }
}
