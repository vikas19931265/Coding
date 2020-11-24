package external.gw.util;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DynamicArray <E> extends java.lang.Cloneable, java.util.List<E>, java.util.RandomAccess
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Data")
  public java.lang.Object[] getData();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Data")
  public void setData(java.lang.Object[] value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Empty")
  public boolean isEmpty();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Size")
  public int getSize();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Size")
  public void setSize(int value);

  /**
   * null
   *
   * @param param E
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public boolean add(E param);

  /**
   * null
   *
   * @param param int
   * @param param1 E
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public void add(int param, E param1);

  /**
   * null
   *
   * @param param Collection<E>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addAll")
  public boolean addAll(java.util.Collection param);

  /**
   * null
   *
   * @param param int
   * @param param1 Collection<E>
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
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "contains")
  public boolean contains(java.lang.Object param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "ensureCapacity")
  public void ensureCapacity(int param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "get")
  public E get(int param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "indexOf")
  public int indexOf(java.lang.Object param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "lastIndexOf")
  public int lastIndexOf(java.lang.Object param);

  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remove")
  public E remove(int param);

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
   * @param param int
   * @param param1 E
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "set")
  public E set(int param, E param1);

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toArray")
  public java.lang.Object[] toArray();

  /**
   * null
   *
   * @param param T[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "toArray")
  public <T> T[] toArray(T[] param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "trimToSize")
  public void trimToSize();


  /**
   * Utility class for accessing static features for external.gw.util.DynamicArray
   * <ul>
   * <li>Access static properties for this type.</li>

   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * 
     * 
     */
    public static external.gw.util.DynamicArray getEMPTY()
    {
      return (external.gw.util.DynamicArray) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.util.DynamicArray.class, "EMPTY");
    }

    
    
  }


  /**
   * Utility class for initializing an instance of external.gw.util.DynamicArray
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static <E> DynamicArray<E> newInstance()
    {
      return (DynamicArray) gw.pl.external.Invoker.getInstance().construct(external.gw.util.DynamicArray.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param int

     */
    public static <E> DynamicArray<E> newInstance(int param)
    {
      return (DynamicArray) gw.pl.external.Invoker.getInstance().construct(external.gw.util.DynamicArray.class, new Class[]{ int.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param Collection<E>

     */
    public static <E> DynamicArray<E> newInstance(java.util.Collection param)
    {
      return (DynamicArray) gw.pl.external.Invoker.getInstance().construct(external.gw.util.DynamicArray.class, new Class[]{ java.util.Collection.class} , new Object[]{ param});
    }

  }
}
