package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IGosuParser extends external.gw.lang.parser.IParserPart
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CaptureSymbolsForEval")
  public boolean isCaptureSymbolsForEval();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CaptureSymbolsForEval")
  public void setCaptureSymbolsForEval(boolean value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DfsDecls")
  public java.util.Map getDfsDecls();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EditorParser")
  public boolean isEditorParser();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EditorParser")
  public void setEditorParser(boolean value);

  /**
   * All the locations corresponding to parsed elements.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Locations")
  public java.util.List getLocations();

  /**
   * Whether or not the referenced Gosu source has been parsed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parsed")
  public boolean isParsed();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParsingBlock")
  public boolean isParsingBlock();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParsingFunction")
  public boolean isParsingFunction();

  /**
   * The context associated with the parser's script. E.g., a file name, a library,
a rule, etc.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ScriptPart")
  public external.gw.lang.parser.IScriptPartId getScriptPart();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "State")
  public external.gw.lang.parser.IParserState getState();

  /**
   * Returns the parser's symbol table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SymbolTable")
  public external.gw.lang.parser.ISymbolTable getSymbolTable();

  /**
   * Returns the parser's symbol table.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "SymbolTable")
  public void setSymbolTable(external.gw.lang.parser.ISymbolTable value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ThrowParseResultsExceptionForWarnings")
  public boolean isThrowParseResultsExceptionForWarnings();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tokenizer")
  public external.gw.lang.parser.ISourceCodeTokenizer getTokenizer();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Tokenizer")
  public void setTokenizer(external.gw.lang.parser.ISourceCodeTokenizer value);

  /**
   * The TokenizerInstructor to use for this parser. Optional.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TokenizerInstructor")
  public external.gw.lang.parser.ITokenizerInstructor getTokenizerInstructor();

  /**
   * The TokenizerInstructor to use for this parser. Optional.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TokenizerInstructor")
  public void setTokenizerInstructor(external.gw.lang.parser.ITokenizerInstructor value);

  /**
   * Get the type uses map.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeUsesMap")
  public external.gw.lang.parser.ITypeUsesMap getTypeUsesMap();

  /**
   * Get the type uses map.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "TypeUsesMap")
  public void setTypeUsesMap(external.gw.lang.parser.ITypeUsesMap value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypeVariables")
  public java.util.Map getTypeVariables();


  /**
   * 
   *
   * @return Did the most recent parse have warnings
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasWarnings")
  public boolean hasWarnings();



  /**
   * For use by code editors etc.
   *
   * @param strQualifiedClassName 
   * @param sourceFile 
   * @param bThrowOnWarnings 
   * @param bFullyCompile 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseClass")
  public gw.pl.external.Type parseClass(java.lang.String strQualifiedClassName, external.gw.lang.reflect.gs.ISourceFileHandle sourceFile, boolean bThrowOnWarnings, boolean bFullyCompile) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseDotPathWord")
  public java.lang.String parseDotPathWord();



  /**
   * Parses a Gosu expression. To evaluate the Expression simply call Expression.evaluate().
   *
   * @return The parsed Expression.
   * @param partId 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseExp")
  public external.gw.lang.parser.IExpression parseExp(external.gw.lang.parser.IScriptPartId partId) throws gw.pl.external.GenericCheckedException;



  /**
   * Parses a Gosu expression. To evaluate the Expression simply call Expression.evaluate().
   *
   * @return The parsed Expression.
   * @param partId 
   * @param expectedExpressionType 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseExp")
  public external.gw.lang.parser.IExpression parseExp(external.gw.lang.parser.IScriptPartId partId, gw.pl.external.Type expectedExpressionType) throws gw.pl.external.GenericCheckedException;



  /**
   * Parses a Gosu expression. To evaluate the Expression simply call Expression.evaluate().
   *
   * @return The parsed Expression.
   * @param partId 
   * @param expectedExpressionType 
   * @param context 
   * @param assignRuntime 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseExp")
  public external.gw.lang.parser.IExpression parseExp(external.gw.lang.parser.IScriptPartId partId, gw.pl.external.Type expectedExpressionType, external.gw.lang.parser.IFileContext context, boolean assignRuntime) throws gw.pl.external.GenericCheckedException;



  /**
   * Parses a Gosu expression.  If that fails, attempts to parse a Gosu program (which is also an expression, but
which has a different grammar.
   *
   * @return either a pure expression or Program, depending on the source
   * @param partId Script part id
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseExpOrProgram")
  public external.gw.lang.parser.IExpression parseExpOrProgram(external.gw.lang.parser.IScriptPartId partId) throws gw.pl.external.GenericCheckedException;



  /**
   * Parses a Gosu expression.  If that fails, attempts to parse a Gosu program (which is also an expression, but
which has a different grammar.
   *
   * @return either a pure expression or Program, depending on the source
   * @param partId Script part id
   * @param isolatedScope if false, the program will modify the symbol table at the current scope
   * @param assignRuntime 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseExpOrProgram")
  public external.gw.lang.parser.IExpression parseExpOrProgram(external.gw.lang.parser.IScriptPartId partId, boolean isolatedScope, boolean assignRuntime) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IParsedElement
   * @param param1 boolean
   * @param param2 List<IType>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseParameterDeclarationList")
  public java.util.ArrayList parseParameterDeclarationList(external.gw.lang.parser.IParsedElement param, boolean param1, java.util.List param2);



  /**
   * null
   *
   * @param param IScriptPartId
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IScriptPartId
   * @param param1 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param, gw.pl.external.Type param1) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IScriptPartId
   * @param param1 boolean
   * @param param2 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param, boolean param1, gw.pl.external.Type param2) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IScriptPartId
   * @param param1 IType
   * @param param2 IFileContext
   * @param param3 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param, gw.pl.external.Type param1, external.gw.lang.parser.IFileContext param2, boolean param3) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IScriptPartId
   * @param param1 IType
   * @param param2 IFileContext
   * @param param3 boolean
   * @param param4 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param, gw.pl.external.Type param1, external.gw.lang.parser.IFileContext param2, boolean param3, boolean param4) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IScriptPartId
   * @param param1 boolean
   * @param param2 boolean
   * @param param3 IType
   * @param param4 IFileContext
   * @param param5 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param, boolean param1, boolean param2, gw.pl.external.Type param3, external.gw.lang.parser.IFileContext param4, boolean param5) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IScriptPartId
   * @param param1 boolean
   * @param param2 boolean
   * @param param3 IType
   * @param param4 IFileContext
   * @param param5 boolean
   * @param param6 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param, boolean param1, boolean param2, gw.pl.external.Type param3, external.gw.lang.parser.IFileContext param4, boolean param5, boolean param6) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param IScriptPartId
   * @param param1 boolean
   * @param param2 boolean
   * @param param3 IType
   * @param param4 IFileContext
   * @param param5 boolean
   * @param param6 boolean
   * @param param7 IType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgram")
  public external.gw.lang.parser.expressions.IProgram parseProgram(external.gw.lang.parser.IScriptPartId param, boolean param1, boolean param2, gw.pl.external.Type param3, external.gw.lang.parser.IFileContext param4, boolean param5, boolean param6, gw.pl.external.Type param7) throws gw.pl.external.GenericCheckedException;



  /**
   * 
   *
   * @param partId 
   * @param bParseProperties 
   * @param bParseVars 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseProgramFunctionsOrPropertyDecls")
  public external.gw.lang.parser.ISymbol[] parseProgramFunctionsOrPropertyDecls(external.gw.lang.parser.IScriptPartId partId, boolean bParseProperties, boolean bParseVars) throws gw.pl.external.GenericCheckedException;



  /**
   * Parses a set of Gosu statements.  To execute all of the Statements at once call Statement.execute().
   *
   * @return The parsed Statement[s].
   * @param partId 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseStatements")
  public external.gw.lang.parser.IStatement parseStatements(external.gw.lang.parser.IScriptPartId partId) throws gw.pl.external.GenericCheckedException;



  /**
   * Consumes a type literal from the current tokenizer, if one exists.
   *
   * @return true if a type literal was found, false otherwise
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseTypeLiteral")
  public boolean parseTypeLiteral();



  /**
   * Parses a type literal expression.  The source must obviously satisfy the type literal syntax.
   *
   * @param partId 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseTypeLiteral")
  public external.gw.lang.parser.expressions.ITypeLiteralExpression parseTypeLiteral(external.gw.lang.parser.IScriptPartId partId) throws gw.pl.external.GenericCheckedException;



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseUsesStatementList")
  public external.gw.lang.parser.statements.IUsesStatementList parseUsesStatementList(boolean param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "popExpression")
  public external.gw.lang.parser.IExpression popExpression();



  /**
   * null
   *
   * @param param IDynamicFunctionSymbol
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "putDfsDeclInSetByName")
  public void putDfsDeclInSetByName(external.gw.lang.parser.IDynamicFunctionSymbol param);



  /**
   * null
   *
   * @param param ISymbolTable
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "putDfsDeclsInTable")
  public void putDfsDeclsInTable(external.gw.lang.parser.ISymbolTable param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "resolveTypeLiteral")
  public external.gw.lang.parser.expressions.ITypeLiteralExpression resolveTypeLiteral(java.lang.String param);



  /**
   * null
   *
   * @param param Map<String, Set<IFunctionSymbol>>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setDfsDeclInSetByName")
  public void setDfsDeclInSetByName(java.util.Map param);



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setGenerateRootExpressionAccessForProgram")
  public void setGenerateRootExpressionAccessForProgram(boolean param);



  /**
   * null
   *
   * @param param Set<ResourceKey>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setIgnoreWarnings")
  public void setIgnoreWarnings(java.util.Set param);



  /**
   * Set the script or expression to parse and execute.
   *
   * @param reader A reader for the rule (Gosu) source to parse/execute.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScript")
  public void setScript(external.gw.lang.parser.ISource reader);



  /**
   * Set the script or expression to parse and execute.
   *
   * @param reader A reader for the rule (Gosu) source to parse/execute.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScript")
  public void setScript(external.gw.lang.parser.SourceCodeReader reader);



  /**
   * Set the script or expression to parse and execute.
   *
   * @param strRule The rule (Gosu) source to parse/execute.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setScript")
  public void setScript(java.lang.CharSequence strRule);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setSnapshotSymbols")
  public void setSnapshotSymbols();



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setThrowParseExceptionForWarnings")
  public void setThrowParseExceptionForWarnings(boolean param);



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setWarnOnCaseIssue")
  public void setWarnOnCaseIssue(boolean param);


  /**
   * Utility class for accessing static features for external.gw.lang.parser.IGosuParser
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
    public static java.math.BigDecimal getBIGD_ZERO()
    {
      return (java.math.BigDecimal) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IGosuParser.class, "BIGD_ZERO");
    }

    /**
     * 
     * 
     */
    public static java.lang.Double[] getDOUBLE_DIGITS()
    {
      return (java.lang.Double[]) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IGosuParser.class, "DOUBLE_DIGITS");
    }

    /**
     * 
     * 
     */
    public static java.lang.Double getNaN()
    {
      return (java.lang.Double) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IGosuParser.class, "NaN");
    }

    /**
     * 
     * 
     */
    public static java.lang.Double getONE()
    {
      return (java.lang.Double) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IGosuParser.class, "ONE");
    }

    /**
     * 
     * 
     */
    public static java.lang.Double getZERO()
    {
      return (java.lang.Double) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.lang.parser.IGosuParser.class, "ZERO");
    }

  }
}
