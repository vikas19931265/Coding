package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IStatement extends external.gw.lang.parser.IParsedElement
{

  /**
   * Execute this statement.
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public java.lang.Object execute();



  /**
   * Execute this statement.
   *
   * @param externalSymbols 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "execute")
  public java.lang.Object execute(external.gw.lang.reflect.gs.IExternalSymbolMap externalSymbols);



  /**
   * Indicates whether or not control flow is terminal at this statement.
   *
   * @param bAsolute 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getLeastSignificantTerminalStatement")
  public external.gw.lang.parser.statements.ITerminalStatement getLeastSignificantTerminalStatement(boolean[] bAsolute);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasContent")
  public boolean hasContent();

}
