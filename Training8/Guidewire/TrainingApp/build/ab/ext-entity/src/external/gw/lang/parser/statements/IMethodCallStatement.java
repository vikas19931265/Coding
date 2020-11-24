package external.gw.lang.parser.statements;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IMethodCallStatement extends external.gw.lang.parser.IHasArguments, external.gw.lang.parser.IStatement
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MethodCall")
  public external.gw.lang.parser.expressions.IMethodCallExpression getMethodCall();
}
