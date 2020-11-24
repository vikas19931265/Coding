package external.gw.xml.xsd.typewrapper;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface UnsignedIntTypeWrapper extends external.gw.xml.xsd.typewrapper.XSDTypeWrapper
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
  public java.lang.Integer fromStorage(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toStorage")
  public java.lang.String toStorage(java.lang.Object param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typewrapper.UnsignedIntTypeWrapper
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static UnsignedIntTypeWrapper newInstance()
    {
      return (UnsignedIntTypeWrapper) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typewrapper.UnsignedIntTypeWrapper.class, new Class[]{ } , new Object[]{ });
    }

  }
}
