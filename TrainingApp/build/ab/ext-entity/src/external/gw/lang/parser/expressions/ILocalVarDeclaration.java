package external.gw.lang.parser.expressions;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ILocalVarDeclaration extends external.gw.lang.parser.IExpression, external.gw.lang.parser.IParsedElementWithAtLeastOneDeclaration
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LocalVarName")
  public java.lang.CharSequence getLocalVarName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Symbol")
  public external.gw.lang.parser.ISymbol getSymbol();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeLiteral")
  public external.gw.lang.parser.expressions.ITypeLiteralExpression getTypeLiteral();
}
