package external.gw.util;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Stack <T> extends java.lang.Iterable<T>
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Base")
  public T getBase();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Empty")
  public boolean isEmpty();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clear")
  public void clear();

  /**
   * null
   *
   * @param param T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "contains")
  public boolean contains(T param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "get")
  public T get(int param);

  /**
   * null
   *
   * @param param T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "indexOf")
  public int indexOf(T param);

  /**
   * null
   *
   * @param param T
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "insert")
  public void insert(T param, int param1);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "iterator")
  public java.util.Iterator iterator();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "peek")
  public T peek();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pop")
  public T pop();

  /**
   * null
   *
   * @param param T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "push")
  public boolean push(T param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "size")
  public int size();

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toList")
  public java.util.List toList();


  /**
   * Utility class for initializing an instance of external.gw.util.Stack
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static <T> Stack<T> newInstance()
    {
      return (Stack) gw.pl.external.Invoker.getInstance().construct(external.gw.util.Stack.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param Stack<T>

     */
    public static <T> Stack<T> newInstance(external.gw.util.Stack param)
    {
      return (Stack) gw.pl.external.Invoker.getInstance().construct(external.gw.util.Stack.class, new Class[]{ external.gw.util.Stack.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param ArrayList<T>

     */
    public static <T> Stack<T> newInstance(java.util.ArrayList param)
    {
      return (Stack) gw.pl.external.Invoker.getInstance().construct(external.gw.util.Stack.class, new Class[]{ java.util.ArrayList.class} , new Object[]{ param});
    }

  }
}
