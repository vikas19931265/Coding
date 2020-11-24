package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IFullParserState extends external.gw.lang.parser.IParserState
{
  /**
   * true if parse issues need to retain this state's symbol table (e.g. in an IDE)
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "KeepSymbolTableInIssues")
  public boolean isKeepSymbolTableInIssues();

  /**
   * the symbol table at the moment of creation of the parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SymbolTable")
  public external.gw.lang.parser.ISymbolTable getSymbolTable();

  /**
   * the symbol table at the moment of creation of the parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SymbolTable")
  public void setSymbolTable(external.gw.lang.parser.ISymbolTable value);


  /**
   * Collapses the token captured by this parser state, if possible
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "collapseToken")
  public void collapseToken();

}
