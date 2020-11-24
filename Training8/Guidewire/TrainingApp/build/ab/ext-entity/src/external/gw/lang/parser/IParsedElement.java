package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IParsedElement
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Column")
  public int getColumn();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CompileTimeConstant")
  public boolean isCompileTimeConstant();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FunctionName")
  public java.lang.String getFunctionName();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GosuClass")
  public gw.pl.external.Type getGosuClass();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "GosuProgram")
  public gw.pl.external.Type getGosuProgram();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ImmediateParseIssues")
  public java.util.List getImmediateParseIssues();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LineNum")
  public int getLineNum();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Location")
  public external.gw.lang.parser.IParseTree getLocation();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Location")
  public void setLocation(external.gw.lang.parser.IParseTree value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Module")
  public external.gw.lang.reflect.module.IModule getModule();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public external.gw.lang.parser.IParsedElement getParent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Parent")
  public void setParent(external.gw.lang.parser.IParsedElement value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParseExceptions")
  public java.util.List getParseExceptions();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParseIssues")
  public java.util.List getParseIssues();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParseWarnings")
  public java.util.List getParseWarnings();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReturnType")
  public gw.pl.external.Type getReturnType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Synthetic")
  public boolean isSynthetic();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tokens")
  public java.util.List getTokens();


  /**
   * null
   *
   * @param param IParsedElement
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addExceptionsFrom")
  public void addExceptionsFrom(external.gw.lang.parser.IParsedElement param);



  /**
   * null
   *
   * @param param IParseIssue
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addParseException")
  public void addParseException(external.gw.lang.parser.IParseIssue param);



  /**
   * null
   *
   * @param param ResourceKey
   * @param param1 Object[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addParseException")
  public void addParseException(external.gw.lang.parser.resources.ResourceKey param, java.lang.Object[] param1);



  /**
   * null
   *
   * @param param IParseIssue
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addParseWarning")
  public void addParseWarning(external.gw.lang.parser.IParseIssue param);



  /**
   * null
   *
   * @param param ResourceKey
   * @param param1 Object[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addParseWarning")
  public void addParseWarning(external.gw.lang.parser.resources.ResourceKey param, java.lang.Object[] param1);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearParseExceptions")
  public void clearParseExceptions();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearParseTreeInformation")
  public void clearParseTreeInformation();



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearParseWarnings")
  public void clearParseWarnings();



  /**
   * null
   *
   * @param param Class[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findAncestorParsedElementByType")
  public external.gw.lang.parser.IParsedElement findAncestorParsedElementByType(java.lang.Class[] param);



  /**
   * null
   *
   * @param param IParsedElement
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findDeclaringStatement")
  public external.gw.lang.parser.IParsedElementWithAtLeastOneDeclaration findDeclaringStatement(external.gw.lang.parser.IParsedElement param, java.lang.String param1);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findRootParsedElement")
  public external.gw.lang.parser.IParsedElement findRootParsedElement();



  /**
   * null
   *
   * @param param Class<E>
   * @param param1 List<E>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContainedParsedElementsByType")
  public <E extends external.gw.lang.parser.IParsedElement> boolean getContainedParsedElementsByType(java.lang.Class param, java.util.List param1);



  /**
   * null
   *
   * @param param List<IParsedElement>
   * @param param1 Class<IParsedElement>[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContainedParsedElementsByTypes")
  public boolean getContainedParsedElementsByTypes(java.util.List param, java.lang.Class[] param1);



  /**
   * null
   *
   * @param param List<IParsedElement>
   * @param param1 Set<Class<IParsedElement>>
   * @param param2 Class<IParsedElement>[]
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getContainedParsedElementsByTypesWithIgnoreSet")
  public boolean getContainedParsedElementsByTypesWithIgnoreSet(java.util.List param, java.util.Set param1, java.lang.Class[] param2);



  /**
   * null
   *
   * @param param ResourceKey
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getImmediateParseIssue")
  public external.gw.lang.parser.IParseIssue getImmediateParseIssue(external.gw.lang.parser.resources.ResourceKey param);



  /**
   * null
   *
   * @param param ResourceKey
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasImmediateParseIssue")
  public boolean hasImmediateParseIssue(external.gw.lang.parser.resources.ResourceKey param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasImmediateParseWarnings")
  public boolean hasImmediateParseWarnings();



  /**
   * null
   *
   * @param param ResourceKey
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasParseException")
  public boolean hasParseException(external.gw.lang.parser.resources.ResourceKey param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasParseExceptions")
  public boolean hasParseExceptions();



  /**
   * null
   *
   * @param param IParseIssue
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasParseIssue")
  public boolean hasParseIssue(external.gw.lang.parser.IParseIssue param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasParseIssues")
  public boolean hasParseIssues();



  /**
   * null
   *
   * @param param ResourceKey
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasParseWarning")
  public boolean hasParseWarning(external.gw.lang.parser.resources.ResourceKey param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasParseWarnings")
  public boolean hasParseWarnings();

}
