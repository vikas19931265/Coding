package external.gw.lang;

/**
 * Guidewire Software
<p/>
Creator information:
User: akeefer
Date: Feb 7, 2005 1:26:54 PM
<p/>
Revision information:
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Blob extends external.gw.pl.util.webservices.GWRemotable
{


  /**
   * 
   * @deprecated Required for SOAP serialization. Do not call.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Bytes")
  public byte[] getBytes();

  /**
   * 
   * @deprecated Required for SOAP serialization. Do not call.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Bytes")
  public void setBytes(byte[] value);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "length")
  public int length();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toHexString")
  public java.lang.String toHexString();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toInputStream")
  public java.io.InputStream toInputStream();


  /**
   * Utility class for initializing an instance of external.gw.lang.Blob
   */
  public static class CONSTRUCT
  {

    /**
     * 
     *
     * @deprecated Required for SOAP deserialization. Do not call.

     */
    public static Blob newInstance()
    {
      return (Blob) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.Blob.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param byte[]

     */
    public static Blob newInstance(byte[] param)
    {
      return (Blob) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.Blob.class, new Class[]{ byte[].class} , new Object[]{ param});
    }

  }
}
