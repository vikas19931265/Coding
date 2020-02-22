package external.gw.xml.xsd.typewrapper;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface XSDEnumeratedTypeWrapper extends external.gw.xml.xsd.typewrapper.XSDTypeWrapper
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
  public java.lang.String toStorage(java.lang.Object param);


  /**
   * Utility class for initializing an instance of external.gw.xml.xsd.typewrapper.XSDEnumeratedTypeWrapper
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param LockingLazyVar<IXsdEnumerationType>

     */
    public static XSDEnumeratedTypeWrapper newInstance(external.gw.util.concurrent.LockingLazyVar param)
    {
      return (XSDEnumeratedTypeWrapper) gw.pl.external.Invoker.getInstance().construct(external.gw.xml.xsd.typewrapper.XSDEnumeratedTypeWrapper.class, new Class[]{ external.gw.util.concurrent.LockingLazyVar.class} , new Object[]{ param});
    }

  }
}
