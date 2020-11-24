package external.gw.xml;

/**
 * Represents an XML simple value, such as an xsd:int. Instances of this class know how to translate between
Gosu representation (42), String representation ("42"), and know how to serialize themselves to the output
XML, which may differ from the value returned by getStringValue(). For example, in the case of a QName,
the Gosu representation would be a javax.xml.namespace.QName, the String representation would be the
QName's namespace prefix and it's local part joined by a colon, yet when serialized to XML, the actual
namespaces at the time of serialization would be taken into account, and a different prefix might be chosen.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XmlSimpleValue
{


  /**
   * Returns the Gosu value of this simple value.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GosuValue")
  public java.lang.Object getGosuValue();


  /**
   * Returns the Gosu value type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GosuValueType")
  public gw.pl.external.Type getGosuValueType();


  /**
   * Returns a list of QNames associated with this simple value ( such as in the case of xs:QName or an xs:list of
the same )
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "QNames")
  public java.util.List getQNames();


  /**
   * Returns a string representation of this simple value. This may differ from the actual value that
will be serialized to XML.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StringValue")
  public java.lang.String getStringValue();


  /**
   * Utility class for accessing static features for external.gw.xml.XmlSimpleValue
   * <ul>

* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    
        //Static Methods
    
    /**
     * Creates a simple value representing an xsd:anyURI.
     *
     * @return a simple value representing an xsd:anyURI
     * @param value The anyURI value
     */
    public static external.gw.xml.XmlSimpleValue makeAnyURIInstance(java.net.URI value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeAnyURIInstance", new Class[]{ java.net.URI.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:base64Binary.
     *
     * @return a simple value representing an xsd:base64Binary
     * @param value The base64Binary value
     */
    public static external.gw.xml.XmlSimpleValue makeBase64BinaryInstance(byte[] value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeBase64BinaryInstance", new Class[]{ byte[].class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:base64Binary.
     *
     * @return a simple value representing an xsd:base64Binary
     * @param value The base64Binary value
     */
    public static external.gw.xml.XmlSimpleValue makeBase64BinaryInstance(external.gw.xml.BinaryData value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeBase64BinaryInstance", new Class[]{ external.gw.xml.BinaryData.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:boolean.
     *
     * @return a simple value representing an xsd:boolean
     * @param value The boolean value
     */
    public static external.gw.xml.XmlSimpleValue makeBooleanInstance(java.lang.Boolean value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeBooleanInstance", new Class[]{ java.lang.Boolean.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:byte.
     *
     * @return a simple value representing an xsd:byte
     * @param value The byte value
     */
    public static external.gw.xml.XmlSimpleValue makeByteInstance(java.lang.Byte value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeByteInstance", new Class[]{ java.lang.Byte.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:date.
     *
     * @return a simple value representing an xsd:date
     * @param value The date value
     */
    public static external.gw.xml.XmlSimpleValue makeDateInstance(external.gw.xml.date.XmlDate value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeDateInstance", new Class[]{ external.gw.xml.date.XmlDate.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:datetime.
     *
     * @return a simple value representing an xsd:datetime
     * @param value The datetime value
     */
    public static external.gw.xml.XmlSimpleValue makeDateTimeInstance(external.gw.xml.date.XmlDateTime value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeDateTimeInstance", new Class[]{ external.gw.xml.date.XmlDateTime.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:decimal.
     *
     * @return a simple value representing an xsd:decimal
     * @param value The decimal value
     */
    public static external.gw.xml.XmlSimpleValue makeDecimalInstance(java.math.BigDecimal value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeDecimalInstance", new Class[]{ java.math.BigDecimal.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:double.
     *
     * @return a simple value representing an xsd:double
     * @param value The double value
     */
    public static external.gw.xml.XmlSimpleValue makeDoubleInstance(java.lang.Double value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeDoubleInstance", new Class[]{ java.lang.Double.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:duration.
     *
     * @return a simple value representing an xsd:duration
     * @param value The duration value
     */
    public static external.gw.xml.XmlSimpleValue makeDurationInstance(external.gw.xml.date.XmlDuration value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeDurationInstance", new Class[]{ external.gw.xml.date.XmlDuration.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:string.
     *
     * @return a simple value representing an xsd:string
     * @param value The string value
     */
    public static external.gw.xml.XmlSimpleValue makeEncodedStringInstance(java.lang.String value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeEncodedStringInstance", new Class[]{ java.lang.String.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an enum.
     *
     * @return a simple value representing an enum
     * @param value The enum value
     */
    public static external.gw.xml.XmlSimpleValue makeEnumInstance(external.gw.xml.IXmlSchemaEnumValue value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeEnumInstance", new Class[]{ external.gw.xml.IXmlSchemaEnumValue.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:float.
     *
     * @return a simple value representing an xsd:float
     * @param value The float value
     */
    public static external.gw.xml.XmlSimpleValue makeFloatInstance(java.lang.Float value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeFloatInstance", new Class[]{ java.lang.Float.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:gDay.
     *
     * @return a simple value representing an xsd:gDay
     * @param value The gDay value
     */
    public static external.gw.xml.XmlSimpleValue makeGDayInstance(external.gw.xml.date.XmlDay value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeGDayInstance", new Class[]{ external.gw.xml.date.XmlDay.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:gMonthDay.
     *
     * @return a simple value representing an xsd:gMonthDay
     * @param value The gMonthDay value
     */
    public static external.gw.xml.XmlSimpleValue makeGMonthDayInstance(external.gw.xml.date.XmlMonthDay value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeGMonthDayInstance", new Class[]{ external.gw.xml.date.XmlMonthDay.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:gMonth.
     *
     * @return a simple value representing an xsd:gMonth
     * @param value The gMonth value
     */
    public static external.gw.xml.XmlSimpleValue makeGMonthInstance(external.gw.xml.date.XmlMonth value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeGMonthInstance", new Class[]{ external.gw.xml.date.XmlMonth.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:gYear.
     *
     * @return a simple value representing an xsd:gYear
     * @param value The gYear value
     */
    public static external.gw.xml.XmlSimpleValue makeGYearInstance(external.gw.xml.date.XmlYear value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeGYearInstance", new Class[]{ external.gw.xml.date.XmlYear.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:gYearMonth.
     *
     * @return a simple value representing an xsd:gYearMonth
     * @param value The gYearMonth value
     */
    public static external.gw.xml.XmlSimpleValue makeGYearMonthInstance(external.gw.xml.date.XmlYearMonth value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeGYearMonthInstance", new Class[]{ external.gw.xml.date.XmlYearMonth.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:hexBinary.
     *
     * @return a simple value representing an xsd:hexBinary
     * @param value The hexBinary value
     */
    public static external.gw.xml.XmlSimpleValue makeHexBinaryInstance(byte[] value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeHexBinaryInstance", new Class[]{ byte[].class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:ID.
     *
     * @return a simple value representing an xsd:ID
     * @param value The ID value
     */
    public static external.gw.xml.XmlSimpleValue makeIDInstance(java.lang.String value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeIDInstance", new Class[]{ java.lang.String.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:IDREF.
     *
     * @return a simple value representing an xsd:IDREF
     * @param value The IDREF value
     */
    public static external.gw.xml.XmlSimpleValue makeIDREFInstance(external.gw.xml.XmlElement value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeIDREFInstance", new Class[]{ external.gw.xml.XmlElement.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:int.
     *
     * @return a simple value representing an xsd:int
     * @param value The int value
     */
    public static external.gw.xml.XmlSimpleValue makeIntInstance(java.lang.Integer value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeIntInstance", new Class[]{ java.lang.Integer.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:integer.
     *
     * @return a simple value representing an xsd:integer
     * @param value The integer value
     */
    public static external.gw.xml.XmlSimpleValue makeIntegerInstance(java.math.BigInteger value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeIntegerInstance", new Class[]{ java.math.BigInteger.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing a list of QName.
     *
     * @return a simple value representing a list of QName
     * @param value The list of QName value
     */
    public static external.gw.xml.XmlSimpleValue makeListOfQNameInstance(java.util.List value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeListOfQNameInstance", new Class[]{ java.util.List.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:long.
     *
     * @return a simple value representing an xsd:long
     * @param value The long value
     */
    public static external.gw.xml.XmlSimpleValue makeLongInstance(java.lang.Long value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeLongInstance", new Class[]{ java.lang.Long.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:QName, without validating the QName for valid characters.
     *
     * @return a simple value representing an xsd:QName
     * @param value The QName value
     */
    public static external.gw.xml.XmlSimpleValue makeNonValidatingQNameInstance(javax.xml.namespace.QName value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeNonValidatingQNameInstance", new Class[]{ javax.xml.namespace.QName.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:QName, without validating the QName for valid characters.
     *
     * @return a simple value representing an xsd:QName
     * @param value The colonized value
     * @param namespaceContext The namespace context
     */
    public static external.gw.xml.XmlSimpleValue makeNonValidatingQNameInstance(java.lang.String value, java.util.Map namespaceContext)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeNonValidatingQNameInstance", new Class[]{ java.lang.String.class, java.util.Map.class} , new Object[]{ value, namespaceContext});
    }

    /**
     * Creates a simple value representing an xsd:QName.
     *
     * @return a simple value representing an xsd:QName
     * @param value The QName value
     */
    public static external.gw.xml.XmlSimpleValue makeQNameInstance(javax.xml.namespace.QName value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeQNameInstance", new Class[]{ javax.xml.namespace.QName.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:QName.
     *
     * @return a simple value representing an xsd:QName
     * @param value The colonized value
     * @param namespaceContext The namespace context
     */
    public static external.gw.xml.XmlSimpleValue makeQNameInstance(java.lang.String value, java.util.Map namespaceContext)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeQNameInstance", new Class[]{ java.lang.String.class, java.util.Map.class} , new Object[]{ value, namespaceContext});
    }

    /**
     * Creates a simple value representing an xsd:short.
     *
     * @return a simple value representing an xsd:short
     * @param value The short value
     */
    public static external.gw.xml.XmlSimpleValue makeShortInstance(java.lang.Short value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeShortInstance", new Class[]{ java.lang.Short.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:string.
     *
     * @return a simple value representing an xsd:string
     * @param value The string value
     */
    public static external.gw.xml.XmlSimpleValue makeStringInstance(java.lang.String value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeStringInstance", new Class[]{ java.lang.String.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:time.
     *
     * @return a simple value representing an xsd:time
     * @param value The time value
     */
    public static external.gw.xml.XmlSimpleValue makeTimeInstance(external.gw.xml.date.XmlTime value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeTimeInstance", new Class[]{ external.gw.xml.date.XmlTime.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:unsignedByte.
     *
     * @return a simple value representing an xsd:unsignedByte
     * @param value The unsignedByte value
     */
    public static external.gw.xml.XmlSimpleValue makeUnsignedByteInstance(java.lang.Short value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeUnsignedByteInstance", new Class[]{ java.lang.Short.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:unsignedInt.
     *
     * @return a simple value representing an xsd:unsignedInt
     * @param value The unsignedInt value
     */
    public static external.gw.xml.XmlSimpleValue makeUnsignedIntInstance(java.lang.Long value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeUnsignedIntInstance", new Class[]{ java.lang.Long.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:unsignedLong.
     *
     * @return a simple value representing an xsd:unsignedLong
     * @param value The unsignedLong value
     */
    public static external.gw.xml.XmlSimpleValue makeUnsignedLongInstance(java.math.BigInteger value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeUnsignedLongInstance", new Class[]{ java.math.BigInteger.class} , new Object[]{ value});
    }

    /**
     * Creates a simple value representing an xsd:unsignedShort.
     *
     * @return a simple value representing an xsd:unsignedShort
     * @param value The unsignedShort value
     */
    public static external.gw.xml.XmlSimpleValue makeUnsignedShortInstance(java.lang.Integer value)
    {
      return (external.gw.xml.XmlSimpleValue) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.xml.XmlSimpleValue.class, "makeUnsignedShortInstance", new Class[]{ java.lang.Integer.class} , new Object[]{ value});
    }

  }
}
