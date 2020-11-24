package external.gw.lang.reflect.gs;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IProgramInstance
{

  /**
   * null
   *
   * @param param IExternalSymbolMap
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "evaluate")
  public java.lang.Object evaluate(external.gw.lang.reflect.gs.IExternalSymbolMap param);



  /**
   * null
   *
   * @param param IExternalSymbolMap
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "evaluateRootExpr")
  public java.lang.Object evaluateRootExpr(external.gw.lang.reflect.gs.IExternalSymbolMap param);

}
