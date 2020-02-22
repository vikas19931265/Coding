package external.gw.xml.xsd.typewrapper;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BigIntegerTypeWrapper extends external.gw.xml.xsd.typewrapper.XSDTypeWrapper
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public gw.pl.external.Type getType();

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "fromStorage")
  public java.math.BigInteger fromStorage(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toStorage")
  public java.lang.String toStorage(java.lang.Object param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typewrapper.BigIntegerTypeWrapper
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String
     * @param param1 String

     */
    public static BigIntegerTypeWrapper newInstance(java.lang.String param, java.lang.String param1)
    {
      return (BigIntegerTypeWrapper) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typewrapper.BigIntegerTypeWrapper.class, new Class[]{ java.lang.String.class, java.lang.String.class} , new Object[]{ param, param1});
    }

  }
}
