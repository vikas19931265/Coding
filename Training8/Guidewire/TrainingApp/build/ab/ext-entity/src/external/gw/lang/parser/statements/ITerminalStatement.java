package external.gw.lang.parser.statements;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ITerminalStatement extends external.gw.lang.parser.IStatement
{
  /**
   * Mostly this is important so we can weight the terminal types i.e., the ordinal in the enum is significant
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TerminalType")
  public external.gw.lang.parser.statements.TerminalType getTerminalType();
}
