package external.gw.xml.xsd.typewrapper;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface BigDecimalTypeWrapper extends external.gw.xml.xsd.typewrapper.XSDTypeWrapper
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
  public java.math.BigDecimal fromStorage(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toStorage")
  public java.lang.String toStorage(java.lang.Object param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typewrapper.BigDecimalTypeWrapper
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static BigDecimalTypeWrapper newInstance()
    {
      return (BigDecimalTypeWrapper) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typewrapper.BigDecimalTypeWrapper.class, new Class[]{ } , new Object[]{ });
    }

  }
}
