package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXMLNodeParserCallbacks <N extends external.gw.xml.IXMLNode> extends external.gw.xml.IXMLNode<N>
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Location")
  public external.gw.xml.FileNameAndLineNumber getLocation();


  /**
   * null
   *
   * @param param IXMLNodeParserCallbacks
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseAddChild")
  public void parseAddChild(external.gw.xml.IXMLNodeParserCallbacks param);



  /**
   * null
   *
   * @param param IXMLNodeParserCallbacks
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseAddCommentedChild")
  public void parseAddCommentedChild(external.gw.xml.IXMLNodeParserCallbacks param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseNodeEnded")
  public void parseNodeEnded();



  /**
   * null
   *
   * @param param FileNameAndLineNumber
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseSetLocation")
  public void parseSetLocation(external.gw.xml.FileNameAndLineNumber param);



  /**
   * null
   *
   * @param param IXMLNodeParserCallbacks
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseSetParent")
  public void parseSetParent(external.gw.xml.IXMLNodeParserCallbacks param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parseSetText")
  public void parseSetText(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setComment")
  public void setComment(java.lang.String param);



  /**
   * null
   *
   * @param param boolean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setCommented")
  public void setCommented(boolean param);



  /**
   * null
   *
   * @param param Map<String, String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "setNamespaceMap")
  public void setNamespaceMap(java.util.Map param);

}
