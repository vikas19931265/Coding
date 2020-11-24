package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ScriptPartId extends external.gw.lang.parser.IScriptPartId
{


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContainingType")
  public gw.pl.external.Type getContainingType();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ContainingTypeName")
  public java.lang.String getContainingTypeName();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Id")
  public java.lang.String getId();


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RuntimeType")
  public gw.pl.external.Type getRuntimeType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RuntimeType")
  public void setRuntimeType(gw.pl.external.Type value);


  /**
   * Utility class for initializing an instance of external.gw.lang.parser.ScriptPartId
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param IType
     * @param param1 String

     */
    public static ScriptPartId newInstance(gw.pl.external.Type param, java.lang.String param1)
    {
      return (ScriptPartId) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.ScriptPartId.class, new Class[]{ gw.pl.external.Type.class, java.lang.String.class} , new Object[]{ param, param1});
    }

    /**
     * null
     *
     * @param param String
     * @param param1 String

     */
    public static ScriptPartId newInstance(java.lang.String param, java.lang.String param1)
    {
      return (ScriptPartId) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.ScriptPartId.class, new Class[]{ java.lang.String.class, java.lang.String.class} , new Object[]{ param, param1});
    }

  }
}
