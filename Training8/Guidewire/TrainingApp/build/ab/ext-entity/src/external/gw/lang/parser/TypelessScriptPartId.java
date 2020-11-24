package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface TypelessScriptPartId extends external.gw.lang.parser.IScriptPartId
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
   * Utility class for initializing an instance of external.gw.lang.parser.TypelessScriptPartId
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *
     * @param param String

     */
    public static TypelessScriptPartId newInstance(java.lang.String param)
    {
      return (TypelessScriptPartId) gw.pl.external.Invoker.getInstance().construct(external.gw.lang.parser.TypelessScriptPartId.class, new Class[]{ java.lang.String.class} , new Object[]{ param});
    }

  }
}
