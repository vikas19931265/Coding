package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TypeVarToTypeMap
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Empty")
  public boolean isEmpty();

  /**
   * null
   *
   * @param param ITypeVariableType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsKey")
  public boolean containsKey(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsKeyRaw")
  public boolean containsKeyRaw(java.lang.Object param);

  /**
   * null
   *
   * @param param ITypeVariableType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "get")
  public gw.pl.external.Type get(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getByString")
  public gw.pl.external.Type getByString(java.lang.String param);

  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getRaw")
  public gw.pl.external.Type getRaw(java.lang.Object param);

  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "keySet")
  public java.util.Set keySet();

  /**
   * null
   *
   * @param param ITypeVariableType
   * @param param1 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "put")
  public gw.pl.external.Type put(gw.pl.external.Type param, gw.pl.external.Type param1);

  /**
   * null
   *
   * @param param TypeVarToTypeMap
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "putAll")
  public void putAll(external.gw.lang.parser.TypeVarToTypeMap param);

  /**
   * null
   *
   * @param param String
   * @param param1 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "putByString")
  public gw.pl.external.Type putByString(java.lang.String param, gw.pl.external.Type param1);

  /**
   * null
   *
   * @param param Object
   * @param param1 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "putRaw")
  public gw.pl.external.Type putRaw(java.lang.Object param, gw.pl.external.Type param1);

  /**
   * null
   *
   * @param param ITypeVariableType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remove")
  public gw.pl.external.Type remove(gw.pl.external.Type param);

  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeByString")
  public gw.pl.external.Type removeByString(java.lang.String param);

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "values")
  public java.util.Collection values();


  /**
   * Utility class for accessing static features for external.gw.lang.parser.TypeVarToTypeMap
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
    public static external.gw.lang.parser.TypeVarToTypeMap getEMPTY_MAP()
    {
      return (external.gw.lang.parser.TypeVarToTypeMap) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.TypeVarToTypeMap.class, "EMPTY_MAP");
    }

        //Static Methods
    
    /**
     * null
     *
     * @param param Object
     * @param param1 Object
     */
    public static boolean looseEquals(java.lang.Object param, java.lang.Object param1)
    {
      return (java.lang.Boolean) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.parser.TypeVarToTypeMap.class, "looseEquals", new Class[]{ java.lang.Object.class, java.lang.Object.class} , new Object[]{ param, param1});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.lang.parser.TypeVarToTypeMap
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static TypeVarToTypeMap newInstance()
    {
      return (TypeVarToTypeMap) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.TypeVarToTypeMap.class, new Class[]{ } , new Object[]{ });
    }

    /**
     * null
     *
     * @param param boolean

     */
    public static TypeVarToTypeMap newInstance(boolean param)
    {
      return (TypeVarToTypeMap) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.TypeVarToTypeMap.class, new Class[]{ boolean.class} , new Object[]{ param});
    }

    /**
     * null
     *
     * @param param TypeVarToTypeMap

     */
    public static TypeVarToTypeMap newInstance(external.gw.lang.parser.TypeVarToTypeMap param)
    {
      return (TypeVarToTypeMap) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.TypeVarToTypeMap.class, new Class[]{ external.gw.lang.parser.TypeVarToTypeMap.class} , new Object[]{ param});
    }

  }
}
