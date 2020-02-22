package external.gw.xml;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXMLNodeFormat
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "AttributePerLine")
  public boolean isAttributePerLine();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CommentLineBreak")
  public int getCommentLineBreak();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NewLinePerTopLevelElement")
  public boolean isNewLinePerTopLevelElement();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NewLinesForValue")
  public boolean isNewLinesForValue();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UseCDATAForNodeContents")
  public boolean isUseCDATAForNodeContents();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UseDoubleQuotes")
  public boolean isUseDoubleQuotes();


  /**
   * null
   *
   * @param param QName
   * @param param1 List<String>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "sortAttributes")
  public void sortAttributes(javax.xml.namespace.QName param, java.util.List param1);


  /**
   * Utility class for accessing static features for external.gw.xml.IXMLNodeFormat
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
    public static external.gw.xml.IXMLNodeFormat getDEFAULT()
    {
      return (external.gw.xml.IXMLNodeFormat) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.IXMLNodeFormat.class, "DEFAULT");
    }

    /**
     * 
     * 
     */
    public static external.gw.xml.IXMLNodeFormat getUNSORTED_ATTRIBUTES()
    {
      return (external.gw.xml.IXMLNodeFormat) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.xml.IXMLNodeFormat.class, "UNSORTED_ATTRIBUTES");
    }

  }
}
