package external.gw.xml;

/**
 * A provider of binary data, for XSD base64Binary datatypes. The backing content can be read or assigned as
an input stream or a byte array. If the backing content is an input stream, and the data is read as
an input stream, the backing content becomes invalid for additional reads. For example, if an MTOM web
service is invoked, the backing content will be an input stream for any XOP-encoded base64Binary data.
This data can be read in its input stream form, but only once, to avoid the need to read the data into
memory or store it to disk. If the content is known to be small in size, the Bytes property can be used
instead, at which point this BinaryData will read the entire input stream into memory, after which
it can be read multiple times. The current multi-read state of this binary data can be inspected
using the MultiRead property.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BinaryData
{


  /**
   * Returns the backing content as a byte array. If the backing content was previously an input stream,
invoking this property will cause the entire content of the input stream to be read into memory, and
the backing content will thereafter be the resulting byte array.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Bytes")
  public byte[] getBytes();

  /**
   * Returns the backing content as a byte array. If the backing content was previously an input stream,
invoking this property will cause the entire content of the input stream to be read into memory, and
the backing content will thereafter be the resulting byte array.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Bytes")
  public void setBytes(byte[] value);


  /**
   * Returns the backing content as an input stream. If the backing content is an input stream, invoking
this property will cause the backing content to become invalid.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InputStream")
  public java.io.InputStream getInputStream();

  /**
   * Returns the backing content as an input stream. If the backing content is an input stream, invoking
this property will cause the backing content to become invalid.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "InputStream")
  public void setInputStream(java.io.InputStream value);


  /**
   * Returns true if the backing content can be accessed multiple times via the InputStream property. This is
only true if the backing content is currently a byte array. Keep in mind that accessing the Bytes property
on a previously non-multi-read provider will cause the entire contents of the backing input stream to
be read into memory and stored, causing the provider to become a multi-read provider.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MultiRead")
  public boolean isMultiRead();


  /**
   * Utility class for initializing an instance of external.gw.xml.BinaryData
   */
  public static class CONSTRUCT
  {

    /**
     * Creates a new binary data, backed by a zero-length byte array.
     *

     */
    public static BinaryData newInstance()
    {
      return (BinaryData) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.BinaryData.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * Creates a new binary data, backed by the specified byte array.
     *
     * @param bytes the backing bytes

     */
    public static BinaryData newInstance(byte[] bytes)
    {
      return (BinaryData) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.BinaryData.class, new Class[]{ byte[].class} , new Object[]{ bytes});
    }

    /**
     * Creates a new binary data, backed by the specified input stream.
     *
     * @param inputStream the input stream

     */
    public static BinaryData newInstance(java.io.InputStream inputStream)
    {
      return (BinaryData) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.BinaryData.class, new Class[]{ java.io.InputStream.class} , new Object[]{ inputStream});
    }

  }
}
