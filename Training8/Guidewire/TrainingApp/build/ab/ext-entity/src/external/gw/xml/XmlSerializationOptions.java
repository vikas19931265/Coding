package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlSerializationOptions
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeIndent")
  public int getAttributeIndent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AttributeIndent")
  public void setAttributeIndent(int value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributeNewLine")
  public boolean isAttributeNewLine();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "AttributeNewLine")
  public void setAttributeNewLine(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Comments")
  public boolean isComments();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Comments")
  public void setComments(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Encoding")
  public java.nio.charset.Charset getEncoding();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Encoding")
  public void setEncoding(java.nio.charset.Charset value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Indent")
  public java.lang.String getIndent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Indent")
  public void setIndent(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineSeparator")
  public java.lang.String getLineSeparator();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LineSeparator")
  public void setLineSeparator(java.lang.String value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Pretty")
  public boolean isPretty();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Pretty")
  public void setPretty(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Sort")
  public boolean isSort();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Sort")
  public void setSort(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Validate")
  public boolean isValidate();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Validate")
  public void setValidate(boolean value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "XmlDeclaration")
  public boolean isXmlDeclaration();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "XmlDeclaration")
  public void setXmlDeclaration(boolean value);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copy")
  public external.gw.xml.XmlSerializationOptions copy();

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withAttributeIndent")
  public external.gw.xml.XmlSerializationOptions withAttributeIndent(int param);

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withAttributeNewLine")
  public external.gw.xml.XmlSerializationOptions withAttributeNewLine(boolean param);

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withComments")
  public external.gw.xml.XmlSerializationOptions withComments(boolean param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withEncoding")
  public external.gw.xml.XmlSerializationOptions withEncoding(java.lang.String param);

  /**
   * null
   *
   * @param param Charset
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withEncoding")
  public external.gw.xml.XmlSerializationOptions withEncoding(java.nio.charset.Charset param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withIndent")
  public external.gw.xml.XmlSerializationOptions withIndent(java.lang.String param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withLineSeparator")
  public external.gw.xml.XmlSerializationOptions withLineSeparator(java.lang.String param);

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withPretty")
  public external.gw.xml.XmlSerializationOptions withPretty(boolean param);

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withSort")
  public external.gw.xml.XmlSerializationOptions withSort(boolean param);

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withValidate")
  public external.gw.xml.XmlSerializationOptions withValidate(boolean param);

  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "withXmlDeclaration")
  public external.gw.xml.XmlSerializationOptions withXmlDeclaration(boolean param);


  /**
   * Utility class for accessing static features for external.gw.xml.XmlSerializationOptions
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * null
     *
     */
    public static external.gw.xml.XmlSerializationOptions debug()
    {
      return (external.gw.xml.XmlSerializationOptions) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSerializationOptions.class, "debug", new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     */
    public static external.gw.xml.XmlSerializationOptions debugCompressed()
    {
      return (external.gw.xml.XmlSerializationOptions) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSerializationOptions.class, "debugCompressed", new Class[]{ } , new Object[]{ });
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.xml.XmlSerializationOptions
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static XmlSerializationOptions newInstance()
    {
      return (XmlSerializationOptions) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.XmlSerializationOptions.class, new Class[]{ } , new Object[]{ });
    }

  }
}
