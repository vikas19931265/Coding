package external.gw.lang.parser.expressions;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IMethodCallExpression extends external.gw.lang.parser.IExpression, external.gw.lang.parser.IHasArguments
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ArgPosition")
  public int getArgPosition();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Args")
  public external.gw.lang.parser.IExpression[] getArgs();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FunctionSymbol")
  public external.gw.lang.parser.IFunctionSymbol getFunctionSymbol();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FunctionType")
  public gw.pl.external.Type getFunctionType();
}
