package external.gw.lang.reflect;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IConstructorHandler
{

  /**
   * null
   *
   * @param param Object[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newInstance")
  public java.lang.Object newInstance(java.lang.Object[] param);

}
