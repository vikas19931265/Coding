package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TypeName extends java.lang.Comparable
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Loader")
  public external.gw.lang.reflect.ITypeLoader getLoader();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "compareTo")
  public int compareTo(java.lang.Object param);


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.gs.TypeName
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IType

     */
    public static TypeName newInstance(gw.pl.external.Type param)
    {
      return (TypeName) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.gs.TypeName.class, new Class[]{ gw.pl.external.Type.class} , new Object[]{ param});
    }

  }
}
