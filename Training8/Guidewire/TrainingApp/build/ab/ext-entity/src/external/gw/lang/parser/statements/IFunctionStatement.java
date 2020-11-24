package external.gw.lang.parser.statements;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFunctionStatement extends external.gw.lang.parser.IParsedElementWithAtLeastOneDeclaration, external.gw.lang.parser.IStatement
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DynamicFunctionSymbol")
  public external.gw.lang.parser.IDynamicFunctionSymbol getDynamicFunctionSymbol();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parameters")
  public java.util.List getParameters();
}
