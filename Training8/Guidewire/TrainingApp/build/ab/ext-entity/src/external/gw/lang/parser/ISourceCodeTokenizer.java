package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ISourceCodeTokenizer
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AnalyzingDirective")
  public boolean isAnalyzingDirective();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AnalyzingSeparately")
  public boolean isAnalyzingSeparately();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CommentsSignificant")
  public boolean isCommentsSignificant();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CommentsSignificant")
  public void setCommentsSignificant(boolean value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CurrentToken")
  public external.gw.lang.parser.IToken getCurrentToken();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EOF")
  public boolean isEOF();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Instructor")
  public external.gw.lang.parser.ITokenizerInstructor getInstructor();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Instructor")
  public void setInstructor(external.gw.lang.parser.ITokenizerInstructor value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineNumber")
  public int getLineNumber();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineOffset")
  public int getLineOffset();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParseDotsAsOperators")
  public boolean isParseDotsAsOperators();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ParseDotsAsOperators")
  public void setParseDotsAsOperators(boolean value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Positioned")
  public boolean isPositioned();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Reader")
  public external.gw.lang.parser.SourceCodeReader getReader();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RestoreState")
  public int getRestoreState();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Source")
  public java.lang.String getSource();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public int getState();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "StringValue")
  public java.lang.String getStringValue();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SupportsKeywords")
  public boolean isSupportsKeywords();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SupportsKeywords")
  public void setSupportsKeywords(boolean value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenAsString")
  public java.lang.String getTokenAsString();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenColumn")
  public int getTokenColumn();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenEnd")
  public int getTokenEnd();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenStart")
  public int getTokenStart();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tokens")
  public external.gw.util.Stack getTokens();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public int getType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnterminatedComment")
  public boolean isUnterminatedComment();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UnterminatedString")
  public boolean isUnterminatedString();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WhitespaceSignificant")
  public boolean isWhitespaceSignificant();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "WhitespaceSignificant")
  public void setWhitespaceSignificant(boolean value);


  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "commentChar")
  public void commentChar(int param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "copy")
  public external.gw.lang.parser.IToken copy();



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "countMatches")
  public int countMatches(java.lang.String param);



  /**
   * null
   *
   * @param param String
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "countMatches")
  public int countMatches(java.lang.String param, int param1);



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "eolIsSignificant")
  public void eolIsSignificant(boolean param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getTokenAt")
  public external.gw.lang.parser.IToken getTokenAt(int param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isOperator")
  public boolean isOperator(java.lang.String param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "lightweightRestore")
  public external.gw.lang.parser.ISourceCodeTokenizer lightweightRestore();



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "lowerCaseMode")
  public void lowerCaseMode(boolean param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "mark")
  public int mark();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "nextToken")
  public int nextToken();



  /**
   * null
   *
   * @param param int
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "operatorChars")
  public void operatorChars(int param, int param1);



  /**
   * null
   *
   * @param param String[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "operators")
  public void operators(java.lang.String[] param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "ordinaryChar")
  public void ordinaryChar(int param);



  /**
   * null
   *
   * @param param int
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "ordinaryChars")
  public void ordinaryChars(int param, int param1);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseNumbers")
  public void parseNumbers();



  /**
   * null
   *
   * @param param ITokenizerOffsetMarker
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "popOffsetMarker")
  public void popOffsetMarker(external.gw.lang.parser.ITokenizerOffsetMarker param);



  /**
   * null
   *
   * @param param ITokenizerOffsetMarker
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "pushOffsetMarker")
  public void pushOffsetMarker(external.gw.lang.parser.ITokenizerOffsetMarker param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "quoteChar")
  public void quoteChar(int param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reset")
  public void reset();



  /**
   * null
   *
   * @param param SourceCodeReader
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reset")
  public void reset(external.gw.lang.parser.SourceCodeReader param);



  /**
   * null
   *
   * @param param Reader
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reset")
  public void reset(java.io.Reader param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "restoreToMark")
  public void restoreToMark(int param);



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "slashSlashComments")
  public void slashSlashComments(boolean param);



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "slashStarComments")
  public void slashStarComments(boolean param);



  /**
   * null
   *
   * @param param int
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "whitespaceChars")
  public void whitespaceChars(int param, int param1);



  /**
   * null
   *
   * @param param int
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "wordChars")
  public void wordChars(int param, int param1);


  /**
   * Utility class for accessing static features for external.gw.lang.parser.ISourceCodeTokenizer
   * <ul>
   * <li>Access static properties for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    
    /**
     * 
     * 
     */
    public static int getTT_COMMENT()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_COMMENT");
    }

    /**
     * 
     * 
     */
    public static int getTT_EOF()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_EOF");
    }

    /**
     * 
     * 
     */
    public static int getTT_EOL()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_EOL");
    }

    /**
     * 
     * 
     */
    public static int getTT_INTEGER()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_INTEGER");
    }

    /**
     * 
     * 
     */
    public static int getTT_KEYWORD()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_KEYWORD");
    }

    /**
     * 
     * 
     */
    public static int getTT_NOTHING()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_NOTHING");
    }

    /**
     * 
     * 
     */
    public static int getTT_NUMBER()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_NUMBER");
    }

    /**
     * 
     * 
     */
    public static int getTT_OPERATOR()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_OPERATOR");
    }

    /**
     * 
     * 
     */
    public static int getTT_WHITESPACE()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_WHITESPACE");
    }

    /**
     * 
     * 
     */
    public static int getTT_WORD()
    {
      return (java.lang.Integer) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.ISourceCodeTokenizer.class, "TT_WORD");
    }

  }
}
