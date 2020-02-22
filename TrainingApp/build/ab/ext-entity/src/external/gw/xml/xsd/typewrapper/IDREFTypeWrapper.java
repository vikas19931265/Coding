package external.gw.xml.xsd.typewrapper;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IDREFTypeWrapper extends external.gw.xml.xsd.typewrapper.XSDTypeWrapper
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
  public java.lang.Object fromStorage(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toStorage")
  public java.lang.Object toStorage(java.lang.Object param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typewrapper.IDREFTypeWrapper
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static IDREFTypeWrapper newInstance()
    {
      return (IDREFTypeWrapper) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typewrapper.IDREFTypeWrapper.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param LockingLazyVar<String>

     */
    public static IDREFTypeWrapper newInstance(external.gw.util.concurrent.LockingLazyVar param)
    {
      return (IDREFTypeWrapper) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typewrapper.IDREFTypeWrapper.class, new Class[]{ external.gw.util.concurrent.LockingLazyVar.class} , new Object[]{ param});
    }

  }
}
