package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface MethodList extends external.gw.util.DynamicArray<external.gw.lang.reflect.IMethodInfo>
{

  /**
   * null
   *
   * @param param IMethodInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public boolean add(external.gw.lang.reflect.IMethodInfo param);

  /**
   * null
   *
   * @param param int
   * @param param1 IMethodInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public void add(int param, external.gw.lang.reflect.IMethodInfo param1);

  /**
   * null
   *
   * @param param Collection<IMethodInfo>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAll")
  public boolean addAll(java.util.Collection param);

  /**
   * null
   *
   * @param param int
   * @param param1 Collection<IMethodInfo>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAll")
  public boolean addAll(int param, java.util.Collection param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clear")
  public void clear();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clone")
  public java.lang.Object clone();

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMethods")
  public external.gw.util.DynamicArray getMethods(java.lang.String param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remove")
  public external.gw.lang.reflect.IMethodInfo remove(int param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remove")
  public boolean remove(java.lang.Object param);

  /**
   * null
   *
   * @param param Collection<Object>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeAll")
  public boolean removeAll(java.util.Collection param);

  /**
   * null
   *
   * @param param Collection<Object>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "retainAll")
  public boolean retainAll(java.util.Collection param);

  /**
   * null
   *
   * @param param int
   * @param param1 IMethodInfo
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "set")
  public external.gw.lang.reflect.IMethodInfo set(int param, external.gw.lang.reflect.IMethodInfo param1);


  /**
   * Utility class for accessing static features for external.gw.lang.reflect.MethodList
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static external.gw.lang.reflect.MethodList getEMPTY()
    {
      return (external.gw.lang.reflect.MethodList) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.reflect.MethodList.class, "EMPTY");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param IMethodInfo
     */
    public static external.gw.lang.reflect.MethodList singleton(external.gw.lang.reflect.IMethodInfo param)
    {
      return (external.gw.lang.reflect.MethodList) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.reflect.MethodList.class, "singleton", new Class[]{ external.gw.lang.reflect.IMethodInfo.class} , new Object[]{ param});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.lang.reflect.MethodList
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static MethodList newInstance()
    {
      return (MethodList) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.MethodList.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param int

     */
    public static MethodList newInstance(int param)
    {
      return (MethodList) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.MethodList.class, new Class[]{ int.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param List<IMethodInfo>

     */
    public static MethodList newInstance(java.util.List param)
    {
      return (MethodList) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.reflect.MethodList.class, new Class[]{ java.util.List.class} , new Object[]{ param});
    }

  }
}
