package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IParserState
{
  /**
   * the line number of this parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineNumber")
  public int getLineNumber();

  /**
   * the starting line of this parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineOffset")
  public int getLineOffset();

  /**
   * the program source associated with this parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Source")
  public java.lang.String getSource();

  /**
   * the column represented by this parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenColumn")
  public int getTokenColumn();

  /**
   * the end of the token represented by this parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenEnd")
  public int getTokenEnd();

  /**
   * the start of the token represented by this parser state
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenStart")
  public int getTokenStart();
}
