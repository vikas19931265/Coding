package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IParseIssue
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Column")
  public int getColumn();

  /**
   * the message for this parse issue formatted for printing out to a console
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ConsoleMessage")
  public java.lang.String getConsoleMessage();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ExpectedType")
  public gw.pl.external.Type getExpectedType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ExpectedType")
  public void setExpectedType(gw.pl.external.Type value);

  /**
   * the line that this issue is on
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Line")
  public int getLine();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MessageArgs")
  public java.lang.Object[] getMessageArgs();

  /**
   * the resource key for this ParseIssue, which can be used as a kind of identifier for the
        type of issue.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MessageKey")
  public external.gw.lang.parser.resources.ResourceKey getMessageKey();

  /**
   * the raw message for this parse issue, with no formatting
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PlainMessage")
  public java.lang.String getPlainMessage();

  /**
   * the parsed element that this issue is associated with
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Source")
  public external.gw.lang.parser.IParsedElement getSource();

  /**
   * the symbol table state at the creation of this issue.  Can return null if no symbol table is present.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SymbolTable")
  public external.gw.lang.parser.ISymbolTable getSymbolTable();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenEnd")
  public java.lang.Integer getTokenEnd();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenStart")
  public java.lang.Integer getTokenStart();

  /**
   * the message fomatted for use by an IDE
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UIMessage")
  public java.lang.String getUIMessage();


  /**
   * Returns true if this issue is relevant to the given position
   *
   * @param iPos 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "appliesToPosition")
  public boolean appliesToPosition(int iPos);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "printStackTrace")
  public void printStackTrace();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resetPositions")
  public void resetPositions();



  /**
   * null
   *
   * @param param IParserPart
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolve")
  public void resolve(external.gw.lang.parser.IParserPart param);

}
