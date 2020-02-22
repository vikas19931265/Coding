package external.gw.lang.parser;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IParseTree extends java.io.Serializable
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Children")
  public java.util.List getChildren();

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DeepestFirstChild")
  public external.gw.lang.parser.IParseTree getDeepestFirstChild();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DominatingLocationList")
  public java.util.List getDominatingLocationList();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnclosingFunctionStatement")
  public external.gw.lang.parser.statements.IFunctionStatement getEnclosingFunctionStatement();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EnclosingType")
  public gw.pl.external.Type getEnclosingType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Extent")
  public int getExtent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LastChild")
  public external.gw.lang.parser.IParseTree getLastChild();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Length")
  public int getLength();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Length")
  public void setLength(int value);

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
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NextSibling")
  public external.gw.lang.parser.IParseTree getNextSibling();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Offset")
  public int getOffset();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Parent")
  public external.gw.lang.parser.IParseTree getParent();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Parent")
  public void setParent(external.gw.lang.parser.IParseTree value);

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParentOtherThanThis")
  public external.gw.lang.parser.IParseTree getParentOtherThanThis();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ParsedElement")
  public external.gw.lang.parser.IParsedElement getParsedElement();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PreviousSibling")
  public external.gw.lang.parser.IParseTree getPreviousSibling();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ScriptPartId")
  public external.gw.lang.parser.IScriptPartId getScriptPartId();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TextFromTokens")
  public java.lang.String getTextFromTokens();


  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addChild")
  public void addChild(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addUnder")
  public void addUnder(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "areAllChildrenAfterPosition")
  public boolean areAllChildrenAfterPosition(int param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "areOffsetAndExtentEqual")
  public boolean areOffsetAndExtentEqual(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "clearParseTreeInformation")
  public void clearParseTreeInformation();



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "contains")
  public boolean contains(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "contains")
  public boolean contains(int param);



  /**
   * null
   *
   * @param param IParseTree
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsOrBorders")
  public boolean containsOrBorders(external.gw.lang.parser.IParseTree param, boolean param1);



  /**
   * null
   *
   * @param param int
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "containsOrBorders")
  public boolean containsOrBorders(int param, boolean param1);



  /**
   * null
   *
   * @param param Class
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "findDescendantsWithParsedElementType")
  public java.util.Collection findDescendantsWithParsedElementType(java.lang.Class param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildAfter")
  public external.gw.lang.parser.IParseTree getChildAfter(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildAfter")
  public external.gw.lang.parser.IParseTree getChildAfter(int param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildBefore")
  public external.gw.lang.parser.IParseTree getChildBefore(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildBefore")
  public external.gw.lang.parser.IParseTree getChildBefore(int param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getChildrenBefore")
  public java.util.List getChildrenBefore(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param int
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDeepestLocation")
  public external.gw.lang.parser.IParseTree getDeepestLocation(int param, boolean param1);



  /**
   * null
   *
   * @param param int
   * @param param1 int
   * @param param2 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDeepestLocation")
  public external.gw.lang.parser.IParseTree getDeepestLocation(int param, int param1, boolean param2);



  /**
   * null
   *
   * @param param boolean
   * @param param1 int
   * @param param2 int
   * @param param3 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDeepestLocation")
  public external.gw.lang.parser.IParseTree getDeepestLocation(boolean param, int param1, int param2, boolean param3);



  /**
   * null
   *
   * @param param int
   * @param param1 boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getDeepestStatementLocation")
  public external.gw.lang.parser.IParseTree getDeepestStatementLocation(int param, boolean param1);



  /**
   * null
   *
   * @param param Class<IParsedElement>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getFirstChildWithParsedElementType")
  public external.gw.lang.parser.IParseTree getFirstChildWithParsedElementType(java.lang.Class param);



  /**
   * null
   *
   * @param param Class<IParsedElement>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getLastChildWithParsedElementType")
  public external.gw.lang.parser.IParseTree getLastChildWithParsedElementType(java.lang.Class param);



  /**
   * null
   *
   * @param param int
   * @param param1 int
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getMatchingElement")
  public external.gw.lang.parser.IParseTree getMatchingElement(int param, int param1);



  /**
   * null
   *
   * @param param int
   * @param param1 Class
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getStatementAtLine")
  public external.gw.lang.parser.IParseTree getStatementAtLine(int param, java.lang.Class param1);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAncestor")
  public boolean isAncestor(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isAncestorOf")
  public boolean isAncestorOf(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isSiblingOf")
  public boolean isSiblingOf(external.gw.lang.parser.IParseTree param);



  /**
   * null
   *
   * @param param IParseTree
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeChild")
  public void removeChild(external.gw.lang.parser.IParseTree param);

}
