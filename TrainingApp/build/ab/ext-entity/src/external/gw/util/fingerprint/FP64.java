package external.gw.util.fingerprint;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface FP64
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RawFingerprint")
  public long getRawFingerprint();

  /**
   * null
   *
   * @param param byte
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(byte param);

  /**
   * null
   *
   * @param param byte[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(byte[] param);

  /**
   * null
   *
   * @param param char
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(char param);

  /**
   * null
   *
   * @param param char[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(char[] param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(int param);

  /**
   * null
   *
   * @param param InputStream
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(java.io.InputStream param) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(java.lang.String param);

  /**
   * null
   *
   * @param param ByteBuffer
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(java.nio.ByteBuffer param) throws gw.pl.external.GenericCheckedException;

  /**
   * null
   *
   * @param param long
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(long param);

  /**
   * null
   *
   * @param param byte[]
   * @param param1 int
   * @param param2 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(byte[] param, int param1, int param2);

  /**
   * null
   *
   * @param param char[]
   * @param param1 int
   * @param param2 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "extend")
  public external.gw.util.fingerprint.FP64 extend(char[] param, int param1, int param2);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toBytes")
  public byte[] toBytes();

  /**
   * null
   *
   * @param param byte[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toBytes")
  public byte[] toBytes(byte[] param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toHexString")
  public java.lang.String toHexString();


  /**
   * Utility class for initializing an instance of external.gw.util.fingerprint.FP64
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static FP64 newInstance()
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param byte[]

     */
    public static FP64 newInstance(byte[] param)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ byte[].class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param char[]

     */
    public static FP64 newInstance(char[] param)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ char[].class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param FP64

     */
    public static FP64 newInstance(external.gw.util.fingerprint.FP64 param)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ external.gw.util.fingerprint.FP64.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param InputStream

     */
    public static FP64 newInstance(java.io.InputStream param)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ java.io.InputStream.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param String

     */
    public static FP64 newInstance(java.lang.String param)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param ByteBuffer

     */
    public static FP64 newInstance(java.nio.ByteBuffer param)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ java.nio.ByteBuffer.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param byte[]
     * @param param1 int
     * @param param2 int

     */
    public static FP64 newInstance(byte[] param, int param1, int param2)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ byte[].class, int.class, int.class} , new Object[]{ param, param1, param2});
    }

    /**
     * null
     *
     * @param param char[]
     * @param param1 int
     * @param param2 int

     */
    public static FP64 newInstance(char[] param, int param1, int param2)
    {
      return (FP64) gw.pl.external.Invoker.getInstance().construct(external.gw.util.fingerprint.FP64.class, new Class[]{ char[].class, int.class, int.class} , new Object[]{ param, param1, param2});
    }

  }
}
