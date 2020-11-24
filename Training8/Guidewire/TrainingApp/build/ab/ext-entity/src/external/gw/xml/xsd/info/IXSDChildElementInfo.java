package external.gw.xml.xsd.info;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IXSDChildElementInfo
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Index")
  public int getIndex();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Index")
  public void setIndex(int value);


  /**
   * null
   *
   * @param param Object
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "assignElementNames")
  public void assignElementNames(java.lang.Object param);



  /**
   * null
   *
   * @param param ListIterator<XSDBasedXMLNode>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "matchChildren")
  public java.lang.Object matchChildren(java.util.ListIterator param);

}
