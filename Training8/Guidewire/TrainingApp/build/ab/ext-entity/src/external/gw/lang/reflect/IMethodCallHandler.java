package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IMethodCallHandler
{

  /**
   * null
   *
   * @param param Object
   * @param param1 Object[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "handleCall")
  public java.lang.Object handleCall(java.lang.Object param, java.lang.Object[] param1);

}
