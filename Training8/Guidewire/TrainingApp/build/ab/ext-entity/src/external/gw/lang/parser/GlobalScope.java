package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public enum GlobalScope implements gw.pl.external.ExternalEnum
{
  EXECUTION,
  REQUEST,
  SESSION,
  APPLICATION,
  ;


  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getScope")
  public static external.gw.lang.parser.GlobalScope getScope(java.lang.String param)
  {
    return (external.gw.lang.parser.GlobalScope) gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.lang.parser.GlobalScope.class, "getScope", new Class[]{ java.lang.String.class} , new Object[]{ param});
  }
}

